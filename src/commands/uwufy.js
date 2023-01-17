
'use strict'
const make_uwu = (letter) => {

   const uwu_letters = {
      r: 'w',
      R: 'W',
      l: 'w',
      L: 'W',
      o: 'owo',
      O: 'OWO',
      u: 'uwu',
      U: 'UWU',
    };
    return uwu_letters[letter] || letter;
}


const uwufy = (text) => text.split('').map(make_uwu).join('');



module.exports = { uwufy, make_uwu };