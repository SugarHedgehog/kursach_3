retryWhileUndefined(function () {
    NAinfo.requireApiVersion(0, 2);
    chas2.task.modifiers.addCanvasIllustration({
        width: 300,
        height: 300,
        paint: paint1,
    });
    return true;
}, 100000);         