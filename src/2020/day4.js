const mandatories = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
const parse = (data) => {
  const res = []
  let acc = []

  data.forEach((el) => {
    if (el === '') {
      res.push(acc)
      acc = []
    } else {
      acc.push(...el.split(' '))
    }
  })
  res.push(acc)
  return res
}

// Cost O(N)
function part1 (input) {
  input = parse(input)

  input = input.map(el =>
    el.map(line => line.match(/[a-z]+/i)[0])
  )

  let count = 0
  input.forEach(el => {
    if (mandatories.every(mand => el.includes(mand))) ++count
  })
  return count
}

function part2 (input) {
  input = parse(input)

  const list = input.map((el) =>
    el.map((line) => line.match(/[a-z]+/i)[0])
  )
  const table = input.map((el) =>
    el.reduce((acc, line) => {
      const values = line.split(':')
      acc[values[0]] = values[1]

      return acc
    }, {})
  )

  let count = 0
  const eyeColors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
  for (let i = 0; i < list.length; i++) {
    if (mandatories.every(mand => list[i].includes(mand))) {
      const el = table[i]
      if (
        el.byr >= 1920 && el.byr <= 2002 &&
              el.iyr >= 2010 && el.iyr <= 2020 &&
              el.eyr >= 2020 && el.eyr <= 2030 &&
              /^#[0-9a-f]{6}$/i.test(el.hcl) &&
              eyeColors.includes(el.ecl) &&
              /^\d{9}$/.test(el.pid)
      ) {
        if (
          /.+cm$/.test(el.hgt) &&
                  el.hgt.match(/\d+/) >= 150 &&
                  el.hgt.match(/\d+/) <= 193
        ) ++count
        else if (
          /.+in$/.test(el.hgt) &&
                  el.hgt.match(/\d+/) >= 59 &&
                  el.hgt.match(/\d+/) <= 76
        ) ++count
      }
    }
  }
  return count
}

module.exports = {
  part1,
  part2
}
