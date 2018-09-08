function createPath(size)
{
    let sizeOfEachLineInCircle = 360 / size;
    let sizeOfEachLine = parseInt(sizeOfEachLineInCircle / 90 * 50);
    let currentPos = {x: 0, y: 50};
    let path = "M50,0";
    let fLoopLength = 4;
    if (size < 4) {
        fLoopLength = size;
    }
    for (let s = 0; s < fLoopLength; s++) {
        let operator = (function () {
            let o = {}
            switch (s) {
                case 0: return {x: 1, y: -1}
                case 1: return {x: 1, y: 1}
                case 2: return {x: -1, y: 1}
                case 3: return {x: -1, y: -1}
            } 
        })()
        for (let i = 0; i < Number(size / 4); i++) {
            console.log(currentPos.x);
            console.log(currentPos.y);
            currentPos.x += parseInt(sizeOfEachLine * operator.x);
            currentPos.y += parseInt(sizeOfEachLine * operator.y);
            path += " L" + currentPos.x.toString() + "," + currentPos.y.toString();
        }
    }
    return path;
}