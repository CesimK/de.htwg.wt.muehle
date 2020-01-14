package controllers

import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import akka.stream.Materializer
import javax.inject._
import com.mohiva.play.silhouette.api.Silhouette
import com.mohiva.play.silhouette.api.actions.SecuredRequest
import play.api.mvc._
import de.htwg.se.muehle.Muehle
import de.htwg.se.muehle.model.fileIOImpl.jsonImpl.FileIO
import de.htwg.se.muehle.util.{GameOver, GridChanged, InvalidTurn, TakeStone}
import play.api.libs.streams.ActorFlow
import org.webjars.play.WebJarsUtil
import play.api.i18n.I18nSupport
import utils.auth.DefaultEnv

import scala.concurrent.Future
import scala.swing.Reactor


@Singleton
class MuehleController @Inject()(cc: ControllerComponents, silhouette: Silhouette[DefaultEnv])
                                (fileIO: FileIO) (implicit
                                                  webJarsUtil: WebJarsUtil,
                                                  assets: AssetsFinder,
                                                  system: ActorSystem,
                                                  mat: Materializer)
  extends AbstractController(cc) with I18nSupport {

  val gameController = Muehle.controller
  var fromJson = fileIO.controllerToJson(gameController)
  def muehleAsText =  gameController.status + "\n" + gameController.gridToString

  def about= silhouette.UnsecuredAction { implicit request: Request[AnyContent] =>
    Ok(views.html.index())
  }

  def easterEgg= silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    Future.successful(Ok(views.html.easterEgg()))
  }

  def muehle = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    Future.successful(Ok(views.html.muehle(gameController, request.identity)))
  }

  def place(pos:Int) = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    gameController.placeStone(pos)
    fromJson = fileIO.controllerToJson(gameController)
      Future.successful(Ok(views.html.muehle(gameController, request.identity)))
  }

  def move(pos1:Int, pos2:Int) = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    gameController.moveStone(pos1, pos2)
    fromJson = fileIO.controllerToJson(gameController)
    Future.successful(Ok(views.html.muehle(gameController, request.identity)))
  }

  def remove(pos:Int) = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    gameController.removeStone(pos)
    fromJson = fileIO.controllerToJson(gameController)
    Future.successful(Ok(views.html.muehle(gameController, request.identity)))
  }

  def newGame = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    gameController.newGame
    fromJson = fileIO.controllerToJson(gameController)
    Future.successful(Ok(views.html.muehle(gameController, request.identity)))
  }

  def undo = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    gameController.undo
    fromJson = fileIO.controllerToJson(gameController)
    Future.successful(Ok(views.html.muehle(gameController, request.identity)))
  }

  def redo = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    gameController.redo
    fromJson = fileIO.controllerToJson(gameController)
    Future.successful(Ok(views.html.muehle(gameController, request.identity)))
  }

  def toJson = silhouette.SecuredAction.async { implicit request: SecuredRequest[DefaultEnv, AnyContent] =>
    Future.successful(Ok(fromJson))
  }

  def socket = WebSocket.accept[String,String] { request =>
    ActorFlow.actorRef { out =>
      println("Connect recieved")
      MuehleWebsocketActorFactory.create(out)
    }
  }

  object MuehleWebsocketActorFactory {
    def create(out: ActorRef) = {
      Props(new MuehleWebsocketActor(out))
    }
  }

  class MuehleWebsocketActor(out: ActorRef) extends Actor with Reactor{
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

    def sendJsonToClient = {
      out ! (fromJson.toString())
    }
  }
}