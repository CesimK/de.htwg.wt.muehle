package controllers

import javax.inject._
import play.api.mvc._
import de.htwg.se.muehle.Muehle


@Singleton
class MuehleController @Inject()(cc: ControllerComponents) extends AbstractController(cc) {
  val gameController = Muehle.controller
  def muehleAsText =  gameController.toString

  def about= Action {
    Ok(views.html.index())
  }

  def muehle = Action {
    Ok(muehleAsText)
  }

}