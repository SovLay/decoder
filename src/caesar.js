// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

 function caesar (input, shift, encode = true) {
  // your solution code here
  const upper_input = input.toUpperCase()
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let res = ''

  if (shift == 0 || shift < -25 || shift > 25 || shift == undefined)
    return false

  if (encode) {
    for (var i = 0; i < upper_input.length; i++) {
      // check if the letter is alphabetic or smth else
      if (!alphabet.includes(upper_input[i])) {
        res += upper_input[i]
      } else {
        // check if the shift is greater than 26
        const current_pos = alphabet.indexOf(upper_input[i])

        if (26 - current_pos <= shift) {
          // if the shift is greater than 26, then we need to start from the beginning
          const new_letter = alphabet[Math.abs(current_pos + shift - 26)]
          res += new_letter
        } else if (current_pos + shift < 0) {
          const new_letter = alphabet[26 + shift + current_pos]
          res += new_letter
        } else {
          // if the shift is less than 26, then we just need to add the shift to the current position
          const new_letter = alphabet[current_pos + shift]
          res += new_letter
        }
      }
    }
  } else {
    for (var i = 0; i < upper_input.length; i++) {
      // check if the letter is alphabetic or smth else
      if (!alphabet.includes(upper_input[i])) {
        res += upper_input[i]
      } else {
        // check if the shift is greater than 26
        const current_pos = alphabet.indexOf(upper_input[i])

        if (current_pos - shift < 0) {
          // if the shift is greater than 26, then we need to start from the beginning
          const new_letter = alphabet[Math.abs(current_pos - shift + 26)]
          res += new_letter
        } else if (current_pos - shift > 25) {
          const new_letter = alphabet[Math.abs(current_pos - shift - 26)]
          res += new_letter
        } else {
          // if the shift is less than 26, then we just need to add the shift to the current position
          const new_letter = alphabet[current_pos - shift]
          res += new_letter
        }
      }
    }
  }

  return res.toLowerCase()
}


// const r = caesar('wbyox jxdxwfkb', 3, false);
const r = caesar('zebra magazine', -3)

console.log(r)

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
