const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const splitIntoSegments = (str, n) => str.match(new RegExp(`.{1,${n}}`, 'g')) || [];


function decode(expr) {
  let str = '';
  let arr = [];
    const strArr = splitIntoSegments(expr, 10);

    strArr.forEach((value) => {
      if (value === '**********') {
        arr.push(' ');
      }
      else {
        let el = '';
        value = parseInt(value).toString();
        const valueArr = splitIntoSegments(value, 2);
        valueArr.forEach((symbol) => {
          if (symbol === '10') el += '.';
          if (symbol === '11') el += '-';
        });
        //console.log(el);
        arr.push(el);
      }
      
    });

    arr.forEach((morseSymbol) => {
      str += (morseSymbol === ' ') ? ' ' : MORSE_TABLE[morseSymbol];
    });

    return str;
}

module.exports = {
    decode
}