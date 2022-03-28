const config = require("./config");
const { join } = require("path");
const { mkdirSync } = require("fs");

function createFolder(fach, type) {
  const joinedPath = join(
    process.cwd(),
    "data",
    `Klasse_${config.klasse}`,
    `HJ_${config.hj}`,
    fach,
    type,
    currDate(),
  );
  mkdirSync(joinedPath, { recursive: true });
}

function currDate() {
  const date = new Date();
  return `${date.getFullYear()}-${two(date.getMonth() + 1)}-${date.getDate()}`;
}

function two(str) {
  return str.length === 1 ? "0" + str : str;
}

//copy
createFolder("FACH", "HAUSAUFABE|UNTERRICHT|PROJEKT")