const db = require("./index");
const { asyncForEach } = require("../utils/asyncForEach");

const findSessionsTable = `CREATE TABLE IF NOT EXISTS
      find_sessions(
        id SERIAL NOT NULL,
        find_session_name VARCHAR(200) NOT NULL PRIMARY KEY,
        created_at TIMESTAMP
      )`;

const tableQueries = [findSessionsTable];
const tableNames = ["find_sessions"];

async function createAllTables() {
  await asyncForEach(tableQueries, async queryText => {
    await db.queryReturningNone(queryText);
  });
  return true;
}

async function dropAllTables() {
  await asyncForEach(tableNames, async tableName => {
    await db.queryReturningNone(`DROP TABLE IF EXISTS ${tableName} CASCADE`);
  });
  return true;
}

async function buildDBTables() {
  await dropAllTables();
  await createAllTables();
  return "done";
}

module.exports = {
  buildDBTables
};

require("make-runnable");
