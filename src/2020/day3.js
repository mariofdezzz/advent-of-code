const slope = (input, right, down) => {
  const pos = [down, right]
  let trees = 0
  const maxWide = input[0].length

  while (pos[0] < input.length) {
    if (input[pos[0]][pos[1]] === '#') ++trees

    pos[0] += down
    pos[1] = (pos[1] + right) % maxWide
  }
  return trees
}

function part1 (input) {
  return slope(input, 3, 1)
}

function part2 (input) {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
  ]

  return slopes.reduce((acc, el) => {
    return acc * slope(input, ...el)
  }, 1)
}

module.exports = {
  part1,
  part2
}
