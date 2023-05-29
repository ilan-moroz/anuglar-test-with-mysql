import { AccountAction } from "./../Models/AccountAction";
import dalMySQL from "../Utils/dalMySQL";

// get all actions from the database by account number
const getActionByNumber = async (
  accountNumber: number
): Promise<AccountAction> => {
  const SQLcommand = `SELECT * FROM bank_accounts.account_operations WHERE accountNumber=${accountNumber}`;
  return await dalMySQL.execute(SQLcommand);
};

// add a new action to database / interest and payment are optional
const addAction = async (newAction: AccountAction) => {
  let SQLcommand = `
    INSERT INTO bank_accounts.account_operations 
    (accountNumber, type, date, amount`;

  let SQLvalues = `
    VALUES ('${newAction.accountNumber}', '${newAction.type}', '${newAction.date}', '${newAction.amount}'`;

  if (newAction.interest !== undefined) {
    SQLcommand += ", interest";
    SQLvalues += `, '${newAction.interest}'`;
  }

  if (newAction.payments !== undefined) {
    SQLcommand += ", payments";
    SQLvalues += `, '${newAction.payments}'`;
  }

  SQLcommand += `)
  ${SQLvalues});`;

  dalMySQL.execute(SQLcommand);
};

export default {
  getActionByNumber,
  addAction,
};
