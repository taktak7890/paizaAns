import * as fs from 'fs';
const lines = fs.readFileSync("stdin", "utf8").split("\n");
const line: string = lines[0];
console.log(line)