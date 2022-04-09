const fibonacci = function(num) {
    if (num <= 0) {
        return "OOPS"
    }
    let a = 1;
    let b = 0;
    let c;
    for (let i=0; i < num; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
