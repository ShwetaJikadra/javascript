function myArrayMax(arr) {
    return Math.min.apply(null, arr);
    }
    const points = [40, 100, 1, 5, 25, 10];
    myArrayMax(points);
    console.log(myArrayMax(points));