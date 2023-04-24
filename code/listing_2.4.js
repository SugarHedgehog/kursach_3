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
    let paint1 = function (ct) {
        let h = 300;
        let w = 300;
        //Оси координат
        ct.drawCoordPlane(w, h, {
            hor: 1,
            ver: 1
        }, {
            x1: '1',
            y1: '1',
            sh1: 13,
        }, 20);
        //График
        ct.scale(20, -20);
        ct.lineWidth = 0.1;
        graph9AdrawFunction(ct, f, {
            minX: -6.5,
            maxX: 7,
            minY: -7,
            maxY: 6,
            step: 0.05,
        });
        //точки
        graph9AmarkCircles(ct, points, 2, 0.05);

    };
    chas2.task.modifiers.addCanvasIllustration({
        width: 300,
        height: 300,
        paint: paint1,
    });
    return true;
}, 100000);