// Ans to the que no 1 

const multiply = (a, b, c) => a * b * c;

console.log(multiply(1, 2, 3));


// Ans to the que no 2

const multipleLine = () => {
    const str = `
    I am a web developer.
    I love to code.
    I love to eat briyani.`;

    return str;
}

console.log(multipleLine());

// Ans to the que no 3
const add = (a, b = 2) => a + b;

console.log(add(3));
