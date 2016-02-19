'use strict';

var randomItem = require('random-item');

module.exports = function () {
	var foods = [
		'Tom yum',
		'Somtom',
		'Tom Kha Kai',
		'Green curry',
		'Nam tok moo',
		'Koh moo yang',
		'Massaman',
		'Pad thai'
	];

	return 'Awesome Siam food: ' + randomItem(foods);
};
