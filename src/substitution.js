// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

function substitution(input, alphabet, encode = true) {
    // your solution code here
    const lower_input = input.toLowerCase();
    const generic_alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let res = "";

    let distinct_alphabet = new Set(alphabet);
    if (distinct_alphabet.size != 26)
    {
      return false;
    }

    for (let i = 0; i < input.length; i++)
    {
      if (alphabet.length != 26)
      {
        return false;
      }
      if (encode)
      {
        if (lower_input[i] != " ")
        {
          const idx = generic_alphabet.indexOf(lower_input[i]);
          res += alphabet[idx]
        }
        else
        {
          res += " ";
        }
      }
      else
      {
        if (lower_input[i] != " ")
        {
          const idx = alphabet.indexOf(lower_input[i]);
          res += generic_alphabet[idx]
        }
        else
        {
          res += " ";
        }
      }
      
    }
    return res;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
