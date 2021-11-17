// Cost O(n^2)
function part1 (input) {
  let valids = 0

  input.forEach((el) => {
    const [min, max] = el.match(/\d+/g)
    const letter = el.match(/[a-z]/i)[0]
    const password = el.match(/[a-z]+$/i)[0]

    const count = (password.match(new RegExp(letter, 'g')) || []).length

    if (min <= count && count <= max) ++valids
  })
  return valids
}

// Cost O(n)
function part2 (input) {
  let valids = 0

  input.forEach((el) => {
    const positions = el.match(/\d+/g)
    const letter = el.match(/[a-z]/i)[0]
    const password = el.match(/[a-z]+$/i)[0]

    if (
      positions.reduce((acc, el) => {
        if (password[+el - 1] === letter) acc = !acc
        return acc
      }, false)
    ) { ++valids }
  })
  return valids
}

module.exports = {
  part1,
  part2
}
