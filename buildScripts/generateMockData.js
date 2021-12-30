/* eslint-disable no-console */
/**
 * This script generates mock data for local development.
 * You'll work with realistic, but randomized data without
 * having to point to an actual API. You'll also experience
 * rapid page loads due to local, static data.
 */
import * as jsf from "json-schema-faker";
import { schema } from "./mockDataSchema";
import * as faker from "faker";
import fs from "fs";
import chalk from "chalk";

// Extend JSF with the fake libs you want to use.
// eslint-disable-next-line import/namespace
jsf.extend("faker", () => {
  return faker;
});

// eslint-disable-next-line import/namespace
const json = JSON.stringify(jsf.generate(schema));

fs.writeFile("./src/api/db.json", json, function (err) {
  if (err) {
    return console.log(chalk.red(err));
  } else {
    console.log(chalk.green("Mock data generated."));
  }
});
