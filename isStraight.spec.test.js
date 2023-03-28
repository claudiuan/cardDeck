

const { isStraight, Card } = require('./deck');

const testIsStraight = () => {
    // Test case 1
    const hand1 = [
      new Card('hearts', '10'),
      new Card('diamonds', '9'),
      new Card('clubs', '8'),
      new Card('spades', '7'),
      new Card('hearts', '6')
    ];
    const expectedResult1 = true;
    const result1 = isStraight(hand1);
    console.assert(result1 === expectedResult1, `Test case 1 passed: expected ${expectedResult1}, but got ${result1}`);
    console.log(`Test case 1 passed: expected ${expectedResult1}, but got ${result1}`)

    // Test case 2
    const hand2 = [
      new Card('hearts', '10'),
      new Card('diamonds', '7'),
      new Card('spades', 'K'),
      new Card('clubs', 'A'),
      new Card('hearts', '5')
    ];
    const expectedResult2 = false;
    const result2 = isStraight(hand2);
    console.assert(result2 === expectedResult2, `Test case 2 passed: expected ${expectedResult2}, but got ${result2}`);
    console.log(`Test case 2 failed: expected ${expectedResult2}, but got ${result2}`)

    // Test case 3
    const hand3 = [];
    const expectedResult3 = false;
    const result3 = isStraight(hand3);
    console.assert(result3 === expectedResult3, `Test case 3 failed: expected ${expectedResult3}, but got ${result3}`);
    console.log(`Test case 3 failed: expected ${expectedResult3}, but got ${result3}`)
  }

  module.exports={testIsStraight};