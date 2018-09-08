
function createPath(size)
{
    /* Finnur alla púnktana og skilar þeim sem svg path */
    function getPoint(forPos) {
        let rad = forPos * Math.PI / 180;
        return {x: parseInt(0 + 50 * Math.cos(rad)) + 70, y: parseInt(0 + 50 * Math.sin(rad)) + 50};
    }
    let sizeOfEachLineInCircle = parseInt(360 / size);
    let path = "M120,50";
    let currentPos = 0;
    for (let i = 0; i < size; i++) {
        currentPos += sizeOfEachLineInCircle;
        let point = getPoint(currentPos);
        path += " L" + point.x + "," + point.y;
    }
    path += " Z";
    return path;
}


var container = Snap("#containerSvg");
let animating = false;
let path = container.path(createPath(3));

path.attr({
    fill: "#311B92",
    stroke: "#311B92",
    scale: 600,
    transform: "scale(3,3) rotate(30, 50, 50)"
});


window.addEventListener('mousemove', function (e) {
    if (animating) return;
    animating = true;
    path.animate({ d: createPath(parseInt(e.clientX / 100) + 3) }, 500, mina.easeout);
    setTimeout(function () {
        animating = false;
    }, 700);
});