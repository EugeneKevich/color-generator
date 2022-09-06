// node process
import { argv } from 'node:process';
// npm package
import chalk from 'chalk';
import randomColor from 'randomcolor';

let hexCode;
const color = process.argv[2];
const saturated = process.argv[3];
const log = console.log;

if (process.argv[2] && process.argv[3]) {
  hexCode = randomColor({ hue: color, luminosity: saturated });
} else if (process.argv[2]) {
  hexCode = randomColor({ hue: color });
} else {
  hexCode = randomColor();


const element = `  ################################
  ################################
  ################################
  #####                      #####
  #####       ${hexCode}        #####
  #####                      #####
  ################################
  ################################
  ################################`;

log(chalk.hex(hexCode)(element));
// console.log(argv[2], argv[3]);

