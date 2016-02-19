'use strict';

const randomItem = require('random-item');

module.exports = () => {
	const foods = [
		'Tom yum',
		'Somtom',
		'Tom Kha Kai',
		'Green curry',
		'Nam tok moo',
		'Koh moo yang',
		'Massaman',
		'Pad thai'
	];

	return `Awesome Siam food: ${randomItem(foods)}`;
};
