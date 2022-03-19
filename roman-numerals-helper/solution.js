const romans = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}

const RomanNumerals = {
  toRoman: value => {
    let response = ''
    for (char of Object.keys(romans)) {
      const r = Math.floor(value / romans[char])
      value -= r * romans[char]
      response += char.repeat(r)
    }

    return response
  },
  fromRoman: value => value.split('').reduce((prev, curr, index, chars) => {
    return prev += romans[curr] * ((chars[index + 1] && (romans[chars[index + 1]] > romans[curr])) ? -1 : 1)
  }, 0)
}
