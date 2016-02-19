#!/usr/bin/env node
'use strict';
const meow = require('meow');
const chalk = require('chalk');
const siam = require('./');

const cli = meow(`
	Usage
	  $ siam

	Options
	  --color  color of the output

	Examples
	  $ siam
	  Awesome Siam food: Tom yum
`);

console.log(chalk[cli.flags.color].underline(siam()));
