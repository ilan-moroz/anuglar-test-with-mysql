import express, { NextFunction, Request, Response } from "express";
import logic from "../Logic/bankLogicMYSQL";

// create a new router
const bankRouter = express.Router();

// GET ALL account action by bankAccount number
bankRouter.get(
  "/allActions/:accountNumber",
  async (request: Request, response: Response, next: NextFunction) => {
    const accountNumber = +request.params.accountNumber;
    response.status(200).json(await logic.getActionByNumber(accountNumber));
  }
);

// ADD NEW ACTION
bankRouter.post(
  "/newAction",
  async (request: Request, response: Response, next: NextFunction) => {
    const newAction = request.body;
    console.log(newAction);
    response.status(201).json(await logic.addAction(newAction));
  }
);

// TEST ROUTE
bankRouter.get(
  "/",
  async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json("Controller working !!!");
  }
);

export default bankRouter;
