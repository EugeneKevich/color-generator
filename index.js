// node process
import { argv } from 'node:process';
// npm package
import chalk from 'chalk';
import randomColor from 'randomcolor';

const log = console.log;

/* const hexColor = randomColor({
  hue: 'red',
  luminosity: 'dark',
}); */

const hexColor = randomColor({
  hue: process.argv[2],
  luminosity: process.argv[3],
});
/* if (process.argv[2] && process.argv[3]) {
  hexCode = randomColor({ hue: color, luminosity: saturated });
} else if (process.argv[2]) {
  hexCode = randomColor({ hue: color });
} else {
  hexCode = randomColor();*/

const element = `  ################################
  ################################
  ################################
  #####                      #####
  #####       ${hexColor}        #####
  #####                      #####
  ################################
  ################################
  ################################`;

// console.log(hexColor);

log(chalk.hex(hexColor)(element));
