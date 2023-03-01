const { Router } = require("express");
const { signup, login } = require("../function/auth/auth");

const auth = Router();

auth.post("/signup", signup);
auth.post("/login", login);

module.exports = {auth}