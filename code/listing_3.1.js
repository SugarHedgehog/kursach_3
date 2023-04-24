(function() {
	retryWhileError(function() {
		'use strict';
		chas2.task.modifiers.addCanvasIllustration({
			width: 500,
			height: 400,
			paint: paint1,
		});
	});
})();
