function radiansToDegrees(input) {
    let rad = Number (input[0]);
    let deg = rad * 180 / Math.PI;
    console.log(deg);
}
radiansToDegrees([3.1416])