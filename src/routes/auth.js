const express = require("express");
const AuthController = require("../controllers/auth");

const api = express.Router();

api.post("/refreshaccesstoken", AuthController.refreshAccessToken);

module.exports = api;