// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius (input, encode = true) {
    // your solution code here
    const polybius_array = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', '(I/J)', 'K'],
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z']
    ]
    let res = ''
    for (let i = 0; i < input.length; i++) {
      if (input[i] == ' ') {
        res += ' '
      } else {
        if (encode) {
          for (let j = 0; j < polybius_array.length; j++) {
            for (let k = 0; k < polybius_array[j].length; k++) {
              if (polybius_array[j][k].includes(input[i].toUpperCase())) {
                res += `${k + 1}${j + 1}`
              }
            }
          }
        } else {
          // create input without white spaces to check for length
          let input_no_space = ''
          for (let i = 0; i < input.length; i++) {
            if (input[i] != ' ') {
              input_no_space += input[i]
            }
          }
          // check if input is odd
          if (input_no_space.length % 2 != 0) return false

          let first = input[i]
          let second = input[i + 1]
          if (first == ' ') {
            res += ' '
            i--
          } else {
            const first_num = parseInt(first) - 1
            const second_num = parseInt(second) - 1
            res += polybius_array[second_num][first_num]
            i++
          }
        }
      }
    }
    return res.toLowerCase()
  }

  return {
    polybius
  }
})()

module.exports = { polybius: polybiusModule.polybius }
