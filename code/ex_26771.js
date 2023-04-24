(function() {
	'use strict';
	NAinfo.requireApiVersion(0, 2);
	let answ = sluchch(-100, 100, 0.5);
	let ugol_1 = sluchch(1, 90);
	let ugol_2 = ugol_1.pm() + 90 * sluchch(1, 11, 2);
	ugol_1 += 90 * sluchch(0, 6, 2);
	let k_1 = sluchch(0, 1);
	let k_2 = 1 - k_1;

	let zn = ['\\tg', '\\ctg'];

	NAtask.setTask({
		text: 'Найдите значение выражения $' + answ + '' + zn[k_1] + '' + ugol_1 + '^\\circ \\cdot ' + zn[k_1] + '' +
			ugol_2 + '^\\circ.$',
		answers: answ,
		analys: 'По формуле приведения $' + zn[k_1] + ' ' + ugol_2 + '^\\circ=' + zn[k_1] + '(' + (ugol_1 + ugol_2) +
			'^\\circ-' + ugol_2 + '^\\circ)=' + zn[k_2] +
			ugol_1 + '^\\circ.$' +
			' Тогда $' + answ + '' + zn[k_1] + '' + ugol_1 + '^\\circ \\cdot' + zn[k_2] + '' + ugol_1 + '^\\circ=' + answ +
			'$',
	});
})();
//Обзад  26771 26770
