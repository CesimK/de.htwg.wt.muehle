package controllers

import akka.actor.{Actor, ActorRef, ActorSystem, Props}
import akka.stream.Materializer
import javax.inject._
import play.api.mvc._
import de.htwg.se.muehle.Muehle
import de.htwg.se.muehle.model.fileIOImpl.jsonImpl.FileIO
import de.htwg.se.muehle.util.{GameOver, GridChanged, InvalidTurn, TakeStone}
import play.api.libs.streams.ActorFlow

import scala.swing.Reactor


@Singleton
class MuehleController @Inject()(cc: ControllerComponents)(fileIO: FileIO) (implicit system: ActorSystem, mat: Materializer) extends AbstractController(cc) {
  val gameController = Muehle.controller
  var fromJson = fileIO.controllerToJson(gameController)
  def muehleAsText =  gameController.status + "\n" + gameController.gridToString

  def about= Action {
    Ok(views.html.index())
  }

  def easterEgg= Action {
    Ok(views.html.easterEgg())
  }

  def getOffline = Action {
    implicit request: Request[AnyContent] =>
      Ok(views.html.offline())
  }

  def muehle = Action {
    Ok(views.html.muehle(gameController))
  }

  def place(pos:Int) = Action {
    gameController.placeStone(pos)
    fromJson = fileIO.controllerToJson(gameController)
    Ok(views.html.muehle(gameController))
  }

  def move(pos1:Int, pos2:Int) = Action {
    gameController.moveStone(pos1, pos2)
    fromJson = fileIO.controllerToJson(gameController)
    Ok(views.html.muehle(gameController))
  }

  def remove(pos:Int) = Action {
    gameController.removeStone(pos)
    fromJson = fileIO.controllerToJson(gameController)
    Ok(views.html.muehle(gameController))
  }

  def newGame = Action {
    gameController.newGame
    fromJson = fileIO.controllerToJson(gameController)
    Ok(views.html.muehle(gameController))
  }

  def undo = Action {
    gameController.undo
    fromJson = fileIO.controllerToJson(gameController)
    Ok(views.html.muehle(gameController))
  }

  def redo = Action {
    gameController.redo
    fromJson = fileIO.controllerToJson(gameController)
    Ok(views.html.muehle(gameController))
  }

  def spaceInvader = Action {
    Ok(views.html.spaceInvader())
  }

  def toJson = Action {
    Ok(fromJson)
  }

  def socket = WebSocket.accept[String,String] { request =>
    ActorFlow.actorRef { out =>
      println("Connect recieved")
      MuehleWebsocketActorFactory.create(out)
    }
  }

  def notAvailable = Action {
    implicit request: Request[AnyContent] =>
      Ok(views.html.notAvailable())
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