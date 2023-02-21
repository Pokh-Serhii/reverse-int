module.exports = function reverse (n) {
    const numberPrepared = Math.abs(n);
    const numberString = numberPrepared.toString();
    const numberArray = numberString.split('');
    const result = numberArray.reverse().join('');

    return Number(result);  
}
