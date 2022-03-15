
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

// let makeRomanNumeral2 = num => {
//     let hundreds = ['C', 'CC', 'CCC', 'CCCC', 'D', 'DC', 'DCC', 'DCCC', 'DCCCC'];
//     let tens = ['X', 'XX', 'XXX', 'XXXX', 'L', 'LX', 'LXX', 'LXXX', 'LXXXX'];
//     let ones = ['I', 'II', 'III', 'IIII', 'V', 'VI', 'VII', 'VIII', 'VIIII'];
//     let firstPlace = num % 10;
//     let tenthPlace = (num - firstPlace) % 100;
//     let hundredthPlace = (num - (firstPlace + tenthPlace)) % 1000;



// }

console.log(makeRomanNumeral(242));

// console.log();