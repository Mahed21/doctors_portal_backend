const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { query } = require("express");
app.use(express.json());
app.use(cors());


const PatientRouter = require("./router/patient.router");
app.use("/patientDetails", PatientRouter);


const DrugsRouter = require("./router/drugs.router");
app.use("/drugsDetails", DrugsRouter);


const ElementsRouter = require("./router/elements.router");
app.use("/elementsDetails", ElementsRouter);


module.exports = app;
