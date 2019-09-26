let radio = 3;
function Area(r) {
    let Area;
    if(r <= 0) {
        Area = -1;
    } else {
        Area = Math.PI*Math.pow(r,2);
    }
    return Area;
}