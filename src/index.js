module.exports = function reverse (n) {
    let z = n.toString().split('').reverse().join('');
    return parseFloat(z);
}
