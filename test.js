import test from 'ava';
import fn from './';

test('Random some food from an array', t => {
	t.is(typeof fn(), 'string');
	t.true(fn().length > 0);
});
