package controllers

import javax.inject._
import play.api.mvc._
import de.htwg.se.muehle.Muehle


@Singleton
class MuehleController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {
  val gameController = Muehle.controller
  def muehleAsText =  gameController.status + "\n" + gameController.gridToString

  def about= Action {
    Ok(views.html.index())
  }

  def muehle = Action {
    Ok(views.html.muehle(gameController))
  }

  def place(pos:Int) = Action {
    gameController.placeStone(pos)
    Ok(views.html.muehle(gameController))
  }

  def move(pos1:Int, pos2:Int) = Action {
    gameController.moveStone(pos1, pos2)
    Ok(views.html.muehle(gameController))
  }

  def remove(pos:Int) = Action {
    gameController.removeStone(pos)
    Ok(views.html.muehle(gameController))
  }

  def newGame = Action {
    gameController.newGame
    Ok(views.html.muehle(gameController))
  }

  def undo = Action {
    gameController.undo
    Ok(views.html.muehle(gameController))
  }

  def redo = Action {
    gameController.redo
    Ok(views.html.muehle(gameController))
  }

//  def toJson = Action {
//    Ok(gameController.gridToJson)
//  }
}