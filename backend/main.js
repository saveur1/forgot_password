const express = require("express");
const Database = require("./config/database.js")
const forgot_password = require("./router/forgot_password");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app  = express();
dotenv.config();
Database();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
const PORT = process.env.PORT || 3009;
app.use(cors({origin:"*"}));
app.use(morgan("dev"));


app.use("/api",forgot_password);


app.listen(PORT,()=>console.log(`My Server started at http://localhost:${PORT}`));