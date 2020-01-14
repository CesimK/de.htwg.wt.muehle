import com.typesafe.sbt.SbtScalariform._

import scalariform.formatter.preferences._

name := """HTWG Muehle"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

resolvers += Resolver.sonatypeRepo("snapshots")

scalaVersion := "2.12.4"

libraryDependencies += "net.codingwell" %% "scala-guice" % "4.1.0"

libraryDependencies += "org.scalatest" %% "scalatest" % "3.0.4" % "test"

libraryDependencies += "org.scalatestplus.play" %% "scalatestplus-play" % "3.1.2" % Test

libraryDependencies += "com.h2database" % "h2" % "1.4.196"

libraryDependencies += "org.scala-lang.modules" % "scala-swing_2.12" % "2.0.1"

libraryDependencies += "ch.qos.logback" % "logback-classic" % "1.2.3"

libraryDependencies += "com.typesafe.scala-logging" %% "scala-logging" % "3.7.2"

libraryDependencies += "org.scala-lang.modules" %% "scala-xml" % "1.1.1"
libraryDependencies += "javax.xml.bind" % "jaxb-api" % "2.3.0"

libraryDependencies ++= Seq(
  "com.mohiva" %% "play-silhouette" % "6.1.0",
  "com.mohiva" %% "play-silhouette-password-bcrypt" % "6.1.0",
  "com.mohiva" %% "play-silhouette-persistence" % "6.1.0",
  "com.mohiva" %% "play-silhouette-crypto-jca" % "6.1.0",
  "com.mohiva" %% "play-silhouette-totp" % "6.1.0",
  "org.webjars" %% "webjars-play" % "2.7.0",
  "org.webjars" % "bootstrap" % "4.4.1" exclude("org.webjars", "jquery"),
  "org.webjars" % "jquery" % "3.2.1",
  "net.codingwell" %% "scala-guice" % "4.1.0",
  "com.iheart" %% "ficus" % "1.4.3",
  "com.typesafe.play" %% "play-mailer" % "7.0.0",
  "com.typesafe.play" %% "play-mailer-guice" % "7.0.0",
  "com.enragedginger" %% "akka-quartz-scheduler" % "1.6.1-akka-2.5.x",
  "com.adrianhurt" %% "play-bootstrap" % "1.5.1-P27-B4",
  "com.mohiva" %% "play-silhouette-testkit" % "6.1.0" % "test",
  specs2 % Test,
  ehcache,
  guice,
  filters
)

// https://github.com/playframework/twirl/issues/105
TwirlKeys.templateImports := Seq()

scalacOptions ++= Seq(
  "-deprecation", // Emit warning and location for usages of deprecated APIs.
  "-feature", // Emit warning and location for usages of features that should be imported explicitly.
  "-unchecked", // Enable additional warnings where generated code depends on assumptions.
  "-Xfatal-warnings", // Fail the compilation if there are any warnings.
  //"-Xlint", // Enable recommended additional warnings.
  "-Ywarn-adapted-args", // Warn if an argument list is modified to match the receiver.
  "-Ywarn-dead-code", // Warn when dead code is identified.
  "-Ywarn-inaccessible", // Warn about inaccessible types in method signatures.
  "-Ywarn-nullary-override", // Warn when non-nullary overrides nullary, e.g. def foo() over def foo.
  "-Ywarn-numeric-widen", // Warn when numerics are widened.
  // Play has a lot of issues with unused imports and unsued params
  // https://github.com/playframework/playframework/issues/6690
  // https://github.com/playframework/twirl/issues/105
  "-Xlint:-unused,_"
)

//********************************************************
// Scalariform settings
//********************************************************

scalariformAutoformat := true

ScalariformKeys.preferences := ScalariformKeys.preferences.value
  .setPreference(FormatXml, false)
  .setPreference(DoubleIndentConstructorArguments, false)
  .setPreference(DanglingCloseParenthesis, Preserve)