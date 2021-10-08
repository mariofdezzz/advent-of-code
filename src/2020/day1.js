const target = 2020
const table = (input) =>
  input.reduce((acc, item) => {
    acc[item] = item
    return acc
  }, {})

// Cost O(n)
function part1 (input) {
  const dict = table(input)

  for (const el of input) {
    if (dict[(target - el) + ''] !== undefined) { if (target - el !== el) return (target - el) * el }
  }

  return 'Not found'
}

function part2 (input) {
  const dict = table(input)

  for (const elA of input) {
    for (const elB of input) {
      if (dict[(target - elA - elB) + ''] !== undefined) {
        if (
          target - elA - elB !== elA &&
                  target - elA - elB !== elB &&
                  elA !== elB
        ) { return (target - elA - elB) * elA * elB }
      }
    }
  }

  return 'Not found'
}

module.exports = {
  part1,
  part2
}
