const num = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
const maxNum = (num, num2) => {
    const combine = [...num, ...num2];
    return Math.max(...combine);
}


console.log(maxNum(num, num2));