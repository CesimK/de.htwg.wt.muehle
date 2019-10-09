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
    Ok(muehleAsText)
  }

  def place(pos:Int) = Action {
    gameController.placeStone(pos)
    Ok(muehleAsText)
  }

  def restart = Action {
    gameController.newGame
    Ok(muehleAsText)
  }
}