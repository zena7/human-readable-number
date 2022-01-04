module.exports = function toReadable (number) {
    const zeroNineNumbers = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine"
    };
    const tenNineteen = {
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen"
    };
    const teens = {
      2: "twenty",
      3: "thirty",
      4: "forty",
      5: "fifty",
      6: "sixty",
      7: "seventy",
      8: "eighty",
      9: "ninety"
    };
    const hundred = "hundred";
  
    const numbToStr = String(number);
    const lengthStr = numbToStr.length;
  
    const twoDigitNum = (num) => {
      console.log("tail", num);
      const first = num[0];
      const decade = teens[first];
      let result = null;
  
      if (num < 20) {
        result = tenNineteen[num];
      } else if (num % 10 === 0) {
        result = decade;
      } else {
        result = `${decade} ${zeroNineNumbers[num[1]]}`;
      }
  
      return result;
    };
  
    const threeDigitNum = (num) => {
      const [had, ...tail] = num;
      const hundreds = `${zeroNineNumbers[had]} ${hundred}`;
  
      return Number(tail[0]) === 0 && Number(tail[1]) === 0
        ? hundreds
        : Number(tail[0]) === 0
        ? `${hundreds} ${zeroNineNumbers[tail[1]]}`
        : `${hundreds} ${twoDigitNum(num.slice(1))}`;
    };
  
    if (lengthStr === 1) {
      return zeroNineNumbers[number];
    } else if (lengthStr === 2) {
      return twoDigitNum(numbToStr);
    } else {
      return threeDigitNum(numbToStr);
    };
  };
  
