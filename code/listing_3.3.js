(function() {
	retryWhileError(function() {
		'use strict';

		function f(x) {
			return spline.at(x);
		}
		NAinfo.requireApiVersion(0, 2);
		let maxX = sl(8, 10);
		let minX = maxX - sl(13, 18);
		let X = [];
		let Y = [];
		for (let i = minX; i <= maxX; i += sl(1, 2))
				X.push(i);
		Y.push(sl(1, 6).pm());
		for (let i = 1; i < X.length; i++) {
			do {
				if (i % 2)
					Y[i] = Y[i - 1] + sl(1, 4).pm();
				else
					Y[i] = 0;
			} while (Y[i].abs() > 5);
		}
		let spline = new Spline(X, Y);
		let extremum = [];
		let root = [];
		let rootView = [];
		for (let i = minX; i < maxX; i += 0.1) {
			genAssert(f(i).abs() < 8, 'График заходит за рамки видимости');
			if (f(i) < f(i - 0.1) && f(i) < f(i + 0.1) || (f(i) > f(i - 0.1) && f(i) > f(i + 0.1))) {
				extremum.push([i, f(i)]);
			}
			if (extremum.length > 0)
				genAssert(extremum[extremum.length - 1][1].abs().round() != 0, 'Экстремум находится слишком близко к оси Ox');
		}
		for (let i = minX; i < maxX; i += 0.001) {
			if (f(i) * f(i - 0.001) < 0) {
				root.push(i);
				rootView.push(i.round());
				genAssert((root[root.length - 1].abs() - rootView[rootView.length - 1].abs()).abs() < 0.1);
			}
		}
		genAssert(extremum.length > 2, 'Экстремумов недостаточно');

		let maxLengthOfIncreasing = [];
		let maxLengthOfDecreasing = [];

		let interval = [minX].concat(rootView);
		interval.push(maxX);

		for (let i = 1; i < interval.length; i++) {
			let len = interval[i] - interval[i - 1];
			if (f(interval[i - 1] + len / 2) > 0)
				maxLengthOfIncreasing.push(len);
			else
				maxLengthOfDecreasing.push(len);
		}


		chas2.task.modifiers.addCanvasIllustration({
			width: 500,
			height: 400,
			paint: paint1,
		});
	});
})();
