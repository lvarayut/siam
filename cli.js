#!/usr/bin/env node
'use strict';
var meow = require('meow');
var chalk = require('chalk');
var siam = require('./');

meow([
	'Usage',
	'  $ siam',
	'',
	'Examples',
	'  $ siam',
	'  Awesome Siam food: Tom yum'
]);

console.log(chalk.yellow.underline(siam()));
