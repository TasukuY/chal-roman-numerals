
let makeRomanNumeral = num => {
    let romanNumeral = '';
    while(num > 0){
        if(num === 1000){
            romanNumeral += 'M';
            num -= 1000;
        }else if(num - 500 >= 0){
            romanNumeral += 'D';
            num -= 500;
        }else if(num - 100 >= 0){
            romanNumeral += 'C';
            num -= 100;
        }else if(num - 50 >= 0){
            romanNumeral += 'L';
            num -= 50;
        }else if(num - 10 >= 0){
            romanNumeral += 'X'
            num -= 10;
        }else if(num - 5 >= 0){
            romanNumeral += 'V'
            num -= 5;
        }else if(num - 1 >= 0){
            romanNumeral += 'I'
            num -= 1;
        }
    }
    return romanNumeral
}

let makeRomanNumeral2 = num => {
    if(num === 1000){
        return 'M';
    }

    let romanNum = [];
    let hundreds = ['C', 'CC', 'CCC', 'CCCC', 'D', 'DC', 'DCC', 'DCCC', 'DCCCC'];
    let tens = ['X', 'XX', 'XXX', 'XXXX', 'L', 'LX', 'LXX', 'LXXX', 'LXXXX'];
    let ones = ['I', 'II', 'III', 'IIII', 'V', 'VI', 'VII', 'VIII', 'VIIII'];
    let numPlaceValue = placeValue(num);
    let counter = 1;

    for(let i = numPlaceValue.length - 1; i >= 0; i--){
        let index = (numPlaceValue[i] / counter) - 1;
        if(counter === 1){
            romanNum.unshift(ones[index]);
        }else if(counter === 10){
            romanNum.unshift(tens[index]);
        }else if(counter === 100){
            romanNum.unshift(hundreds[index]);
        }
        counter *= 10;
    }
    return romanNum.join('');
}

const placeValue = (num, res = [], factor = 1) => {
   if(num){
      const val = (num % 10) * factor;
      res.unshift(val);
      return placeValue(Math.floor(num / 10), res, factor * 10);
   };
   return res;
};

console.log(makeRomanNumeral(1000));
console.log(makeRomanNumeral2(1000));