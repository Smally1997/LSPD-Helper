const indexChars = [
  {
    index: 0,
    char: "A"
  },
  {
    index: 1,
    char: "B"
  },
  {
    index: 2,
    char: "C"
  },
  {
    index: 3,
    char: "D"
  },
  {
    index: 4,
    char: "E"
  },
  {
    index: 5,
    char: "F"
  },
  {
    index: 6,
    char: "G"
  },
  {
    index: 7,
    char: "H"
  },
  {
    index: 8,
    char: "I"
  },
  {
    index: 9,
    char: "J"
  },
  {
    index: 10,
    char: "K"
  },
  {
    index: 11,
    char: "L"
  },
  {
    index: 12,
    char: "M"
  },
  {
    index: 13,
    char: "N"
  },
  {
    index: 14,
    char: "O"
  },
  {
    index: 15,
    char: "P"
  },
  {
    index: 16,
    char: "Q"
  },
  {
    index: 17,
    char: "R"
  },
  {
    index: 18,
    char: "S"
  },
  {
    index: 19,
    char: "T"
  },
  {
    index: 20,
    char: "U"
  },
  {
    index: 21,
    char: "V"
  },
  {
    index: 22,
    char: "W"
  },
  {
    index: 23,
    char: "X"
  },
  {
    index: 24,
    char: "Y"
  },
  {
    index: 25,
    char: "Z"
  }
];
export function nextChar(index) {
  let char = "";
  indexChars.forEach(indexChar => {
    if (indexChar.index == index) {
      char = indexChar.char;
    }
  });
  return char;
}
