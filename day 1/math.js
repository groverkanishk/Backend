// Addition function
function add(a, b) {
    return a + b;
}
// Subtraction function
function subt(a, b) {
    return a - b;
}

// Multiplication function
function multi(a, b) {
    return a * b;
}

// Division function
function div(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

export { add, subt, multi, div };
// module.exports = { add, subt, multi, div };