const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const { API_VERSION } = require("./config");

const userRoutes = require("./src/routes/user");
const authRoutes = require("./src/routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* Evitar bloqueo del CORS */
app.use(cors());

// Para quienes sigue presentando molestias el CORS:
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

/* Creación de los endpoint del proyecto */
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, authRoutes);

/* Condiguración de los header HTTP */
module.exports = app;
