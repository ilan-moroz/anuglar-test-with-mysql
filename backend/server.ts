import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./Utils/Config";
import logic from "./Logic/tableLogicMYSQL";
import ErrorHandler from "./MiddleWare/route-not-found";
import bankRouter from "./Routes/BankRoutes";

// create server
const server = express();

// Handle CORS
server.use(cors());

//How we send the data back
server.use(express.json());

//Parse the body as JSON
server.use(bodyParser.json());

// How to use routes
server.use("/api/v1/bank", bankRouter);

//Create the tables if they not exists
console.log("check if table exists...");
logic.createAccountOperationsTable();

// Handle errors (route not found)
server.use("*", ErrorHandler);

// Start the server
server.listen(config.WebPort, () => {
  console.log(`listening on http://${config.mySQLhost}:${config.WebPort}`);
});
