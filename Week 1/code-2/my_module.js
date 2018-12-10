// Jedan nacin exportovanja paketa

console.log(module);

const a = 5;

module.exports.age = 25; 

module.exports.myDateTime = function () {
    return Date();
};

console.log(module);