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
