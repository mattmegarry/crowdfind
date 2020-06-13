require("dotenv").config();
const camelcaseKeys = require("camelcase-keys");

const pgp = require("pg-promise")({});

// pgp.pg.defaults.ssl = true; SET THIS UP IN PRODUCTION

const cn = process.env.PG_CONNECTION_STRING;
const dbInstance = pgp(cn);

async function executeNoneQuery(queryText, values) {
  const result = await dbInstance.none(queryText, values).catch(err => {
    console.log(err);
  });

  return result;
}

async function executeOneQuery(queryText, values) {
  const result = await dbInstance
    .one(queryText, values)
    .then(res => {
      return res;
    })
    .then(res => {
      return camelcaseKeys(res);
    })
    .catch(err => {
      if (err.received === 0) {
        console.log("No data returned");
        return null;
      } else {
        console.log(err);
        return null;
      }
    });

  return result;
}

async function executeManyQuery(queryText, values) {
  const result = dbInstance
    .many(queryText, values)
    .then(res => {
      return res;
    })
    .then(res => {
      return camelcaseKeys(res);
    })
    .catch(err => {
      if (err.received === 0) {
        console.log("No data returned");
        return null;
      } else {
        console.log(err);
        return null;
      }
    });

  return result;
}

const db = {
  dbInstance: dbInstance,
  queryReturningNone: executeNoneQuery,
  queryReturningOne: executeOneQuery,
  queryReturningMany: executeManyQuery
};

module.exports = db;
