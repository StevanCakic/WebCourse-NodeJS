function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

/* Kako ovo da se unaprijedi sa ES6? */
module.exports = {
    add: add,
    sub: sub,
    mult: mult,
    div: div
}