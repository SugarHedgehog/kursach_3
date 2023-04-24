retryWhileUndefined(function () {
    NAinfo.requireApiVersion(0, 2);

    function f(x) {
        return k * x + b;
    }
    let x1 = sluchch(-6, 6);
    let y1 = sluchch(-7, 6);
    let x2 = sluchch(-10, 10);
    let y2 = sluchch(8, 20).pm();
    retryWhileUndefined(function () {
        NAinfo.requireApiVersion(0, 2);

        function f(x) {
            return k * x + b;
        }
        let x1 = sluchch(-6, 6);
        let y1 = sluchch(-7, 6);
        let x2 = sluchch(-10, 10);
        let y2 = sluchch(8, 20).pm();

        let k = (y1 - y2) / (x1 - x2);
        if (!k.isZ() && k != 0)
            return;
        let b = y1 - k * x1;
        let points = intPoints(f, {
            minX: -5,
            maxX: 5,
            minY: -5.5,
            maxY: 5.5,
            step: 1,
        });
        if (points.length < 2)
            return;
        chas2.task.modifiers.addCanvasIllustration({
            width: 300,
            height: 300,
            paint: paint1,
        });
        return true;
    }, 100000);

    let k = (y1 - y2) / (x1 - x2);
    if (!k.isZ() && k != 0)
        return;
    let b = y1 - k * x1;
    chas2.task.modifiers.addCanvasIllustration({
        width: 300,
        height: 300,
        paint: paint1,
    });
    return true;
}, 100000);