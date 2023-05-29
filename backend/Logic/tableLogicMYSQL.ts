import dalMySQL from "../Utils/dalMySQL";

// CREATE AccountOperations TABLE IF THE TABLE NOT EXISTS
const createAccountOperationsTable = () => {
  const SQLcommand = `
  CREATE TABLE  IF NOT EXISTS bank_accounts.account_operations (
    id INT NOT NULL AUTO_INCREMENT,
    accountNumber BIGINT NOT NULL,
    type VARCHAR(45) NOT NULL,
    date VARCHAR(45) NOT NULL,
    amount INT NOT NULL,
    interest DECIMAL(5, 2) NULL,
    payments INT NULL,
    PRIMARY KEY (id));`;
  dalMySQL.execute(SQLcommand);
};

export default {
  createAccountOperationsTable,
};
