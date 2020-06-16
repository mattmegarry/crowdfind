"use strict";

import db from "../../db";

export async function createFinding() {
  try {
    const words = [
      "Insecure",
      "Testing",
      "Danger",
      "Nascent",
      "Later",
      "Just",
      "For",
      "Now",
      "Agile"
    ];

    function randomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    const findingName =
      words[randomInt(words.length)] +
      words[randomInt(words.length)] +
      words[randomInt(words.length)];

    const finding = db.queryReturningOne(
      `INSERT INTO find_sessions VALUES(DEFAULT, $1, to_timestamp($2)) returning find_session_name, created_at`,
      [findingName, Date.now() / 1000]
    );

    return finding;
  } catch (e) {
    throw e; // Something to learn: get really clear on throwing errors and 'bubbling up' etc
    // Catch case where randomly chosen three word name is already in the table! (they must be unique)
  }
}
