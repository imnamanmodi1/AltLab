// importing modules
const express = require("express");
const session = require("express-session");
const app = express();
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const port = 8000;

// connecting mongoose with mongodb
mongoose.connect(
  "mongodb://localhost/altlab",
  { useNewUrlParser: true },
  function (err, connection) {
    err ? console.log("app.js: Mongoose not connected to MongoDB.") : console.log("app.js: Mongoose connected to MongoDB.");
  }
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "./server/views"));
app.set("view engine", "ejs");

// integrating sessions
app.use(
  session({
    secret: "altlab",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ url: "mongodb://localhost/altlab-session" })
  })
);

if (process.env.NODE_ENV === "development") {
  var webpack = require("webpack");
  var webpackConfig = require("./webpack.config");
  var compiler = webpack(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );

  app.use(require("webpack-hot-middleware")(compiler));
}

app.use(cors());

// routing requests
app.use("/users", require("./server/routes/users"));
app.use("/api", require("./server/routes/api"));
app.use(require("./server/routes/index"));

// adding port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});