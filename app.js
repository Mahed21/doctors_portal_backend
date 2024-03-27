const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { query } = require("express");
app.use(express.json());
app.use(cors());
module.exports = app;
