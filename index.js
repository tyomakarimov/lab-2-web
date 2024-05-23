import fs from "fs";
import { Parser } from "xml2js";

import { getHtml } from "./utils/getHtml.js";
import { throwError } from "./utils/throwError.js";

const parser = new Parser();

const date = process.argv[2];

if (!date) throwError("No date is provided. Please, enter date.");

fs.readFile("data/meetings.xml", "utf-8", (error, data) => {
  if (error) throwError("Error has occured.");

  parser.parseString(data, (error, result) => {
    if (error) throwError("Error has occured.");

    const meetings = result.meetings.meeting.filter(
      (meeting) => meeting.date[0] === date
    );

    fs.writeFile(`meetings.html`, getHtml(date, meetings), (error) => {
      if (error) throwError("Error has occured.");
    });
  });
});
