/**
 * Knex configuration file.
 *
 * You will not need to make changes to this file.
 */

require('dotenv').config();
const path = require("path");

const {
  DATABASE_URL = "postgres://arxozhnc:X-WhxAC35NzAPyiLGevbiXlo18hX1M1w@queenie.db.elephantsql.com:5432/arxozhnc",
  DATABASE_URL_DEVELOPMENT = "postgres://pmvqkqxn:4XbV0J7wrAhoMO83QRTJNg1VGSxxRH1Y@queenie.db.elephantsql.com:5432/pmvqkqxn",
  DATABASE_URL_TEST = "postgres://apqvncil:Q_t6mu-6is1aDsbmKGHO1Mu16R0xKHxq@queenie.db.elephantsql.com:5432/apqvncil",
  DATABASE_URL_PREVIEW = "postgres://jnrqruvl:ipvUXgxlp4owAIzRr-DJkVj-ZDGrecmB@queenie.db.elephantsql.com:5432/jnrqruvl",
  DEBUG,
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_DEVELOPMENT,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  test: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_TEST,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  preview: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL_PREVIEW,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
  production: {
    client: "postgresql",
    pool: { min: 1, max: 5 },
    connection: DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    debug: !!DEBUG,
  },
};
