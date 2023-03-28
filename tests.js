const { testIsColor } = require('./isColor.spec.test');
const {testIsStraight} = require('./isStraight.spec.test');


console.log("Is flush test:")
testIsColor();
console.log("Is Straight test:")
testIsStraight();
