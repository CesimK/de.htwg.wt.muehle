package controllers

import akka.actor._
import akka.stream.Materializer
import com.mohiva.play.silhouette.api.{ HandlerResult, Silhouette }
import com.mohiva.play.silhouette.api.actions.SecuredRequest
import com.mohiva.play.silhouette.api.repositories.AuthInfoRepository
import com.mohiva.play.silhouette.impl.providers.GoogleTotpInfo
import de.htwg.se.muehle.Muehle
import de.htwg.se.muehle.model.fileIOImpl.jsonImpl.FileIO
import de.htwg.se.muehle.util.{ GameOver, GridChanged, InvalidTurn, TakeStone }
import javax.inject._
import org.webjars.play.WebJarsUtil
import play.api.mvc._
import utils.auth.DefaultEnv
import play.api.i18n.I18nSupport

import scala.swing.Reactor
import scala.concurrent.{ ExecutionContext, Future }
import models.User
import play.api.libs.streams.ActorFlow
import scala.collection.mutable.ArrayBuffer
import scala.util.{ Failure, Success, Try }

@Singleton
class MuehleController @Inject() (
  components: ControllerComponents,
  silhouette: Silhouette[DefaultEnv],
  authInfoRepository: AuthInfoRepository)(fileIO: FileIO)(implicit
  webJarsUtil: WebJarsUtil,
  assets: AssetsFinder,
  system: ActorSystem,
  mat: Materializer,
  ec: ExecutionContext
) extends AbstractController(components) with I18nSupport {

  val gameController = Muehle.controller
  var fromJson = fileIO.controllerToJson(gameController)
  def muehleAsText = gameController.status + "\n" + gameController.gridToString

  def about = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    authInfoRepository.find[GoogleTotpInfo](request.identity.loginInfo).map { totpInfoOpt =>
      Ok(views.html.index(request.identity, totpInfoOpt))
    }
  }

  //  def easterEgg= Action {
  //    Ok(views.html.easterEgg())
  //  }

  def getOffline = Action {
    implicit request: Request[AnyContent] =>
      Ok(views.html.offline())
  }

  def muehle = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    authInfoRepository.find[GoogleTotpInfo](request.identity.loginInfo).map { totpInfoOpt =>
      Ok(views.html.muehle(gameController, request.identity, totpInfoOpt))
    }
  }

  def place(pos: Int) = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    authInfoRepository.find[GoogleTotpInfo](request.identity.loginInfo).map { totpInfoOpt =>
      gameController.placeStone(pos)
      fromJson = fileIO.controllerToJson(gameController)
      Ok(views.html.muehle(gameController, request.identity, totpInfoOpt))
    }
  }

  def newGame = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    authInfoRepository.find[GoogleTotpInfo](request.identity.loginInfo).map { totpInfoOpt =>
      gameController.newGame
      fromJson = fileIO.controllerToJson(gameController)
      Ok(views.html.muehle(gameController, request.identity, totpInfoOpt))
    }
  }

  def undo = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    authInfoRepository.find[GoogleTotpInfo](request.identity.loginInfo).map { totpInfoOpt =>
      gameController.undo
      fromJson = fileIO.controllerToJson(gameController)
      Ok(views.html.muehle(gameController, request.identity, totpInfoOpt))
    }
  }

  def redo = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    authInfoRepository.find[GoogleTotpInfo](request.identity.loginInfo).map { totpInfoOpt =>
      gameController.redo
      fromJson = fileIO.controllerToJson(gameController)
      Ok(views.html.muehle(gameController, request.identity, totpInfoOpt))
    }
  }

  def toJson = Action {
    Ok(fromJson)
  }

  object MuehleWebsocketActorFactory {
    def create(user: User)(out: ActorRef) = {
      Props(new MuehleWebsocketActor(user, out))
    }
  }

  class MuehleWebsocketActor(user: User, out: ActorRef) extends Actor with Reactor {
    listenTo(gameController)

    def receive = {
      case msg: String =>
        out ! (fromJson.toString())
    }

    reactions += {
      case event: GridChanged => sendJsonToClient
      case event: InvalidTurn => sendJsonToClient
      case event: TakeStone => sendJsonToClient
      case event: GameOver => sendJsonToClient
    }

    def sendJsonToClient() {
      out ! (fromJson.toString())
    }
  }

  def socket = WebSocket.acceptOrResult[String, String] { request =>
    implicit val req = Request(request, AnyContentAsEmpty)
    silhouette.SecuredRequestHandler { securedRequest =>
      Future.successful(HandlerResult(Ok, Some(securedRequest.identity)))
    }.map {
      case HandlerResult(r, Some(user)) => Right(ActorFlow.actorRef(MuehleWebsocketActorFactory.create(user)))
      case HandlerResult(r, None) => Left(r)

    }
  }
}