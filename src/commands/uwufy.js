  /*
    Change all the ‘R’s and ‘r’s to ‘w’ and ‘W’ respectively.
    Change all the ‘L’s and ‘l’s to ‘w’ and ‘W’ respectively.
    If the current character is ‘o’ or ‘O’ and the previous character is either ‘M’, ‘m’, ‘N’ or ‘n’, then add ‘y’ between the characters.
    If none of the condition matches for any character then leave that character as it is.
  */

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