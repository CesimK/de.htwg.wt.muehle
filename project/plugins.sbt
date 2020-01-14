// Comment to get more information during initialization
logLevel := Level.Warn
// The Play plugin
addSbtPlugin("com.typesafe.play" % "sbt-plugin" % "2.6.20")
addSbtPlugin("com.typesafe.sbt" % "sbt-less" % "1.1.2")

resolvers += Resolver.bintrayRepo("givers", "maven")

addSbtPlugin("org.scalariform" % "sbt-scalariform" % "1.8.2")
addSbtPlugin("givers.vuefy" % "sbt-vuefy" % "4.1.0")