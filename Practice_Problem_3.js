const num = [1, 2, 3, 4, 5];

const square = (num) => {
    const squaredElements = num.map(x => x * x);
    const sum = squaredElements.reduce((previous, next) => previous + next, 0);
    const len = num.length;
    // console.log(squaredElements, sum);
    return sum / len;
}

console.log(square(num));