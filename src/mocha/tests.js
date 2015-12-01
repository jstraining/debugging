var chai = require('chai');
var expect = chai.expect;

function divide (a, b) {
    return a / b;
}

describe ('divide tests', function () {
    it ('verify if divide to zero return correct result', function () {
        expect(divide(5, 0)).to.be.equal(Infinity);
    });

    it ('divide two positive number return correct result', function () {
        expect(divide(1000, 10)).to.be.equal(100);
    })
});