const R = 'R'; // Rester
const T = 'T'; // Tirer
const D = 'D'; // Doubler
const P = 'P'; // Partager

export const tot = [
  {
    'values' : [17, 18, 19, 20, 21],
    'dealer' : {
      2  : T,
      3  : R,
      4  : R,
      5  : R,
      6  : R,
      7  : R,
      8  : R,
      9  : R,
      10 : R,
      11 : R
    }
  }, {
    'values' : [13, 14, 15, 16],
    'dealer' : {
      2  : R,
      3  : R,
      4  : R,
      5  : R,
      6  : R,
      7  : T,
      8  : T,
      9  : T,
      10 : T,
      11 : T
    }
  }, {
    'values' : [12],
    'dealer' : {
      2  : T,
      3  : T,
      4  : R,
      5  : R,
      6  : R,
      7  : T,
      8  : T,
      9  : T,
      10 : T,
      11 : T
    }
  }, {
    'values' : [10, 11],
    'dealer' : {
      2  : D,
      3  : D,
      4  : D,
      5  : D,
      6  : D,
      7  : D,
      8  : D,
      9  : D,
      10 : T,
      11 : T
    }
  }, {
    'values' : [9],
    'dealer' : {
      2  : T,
      3  : D,
      4  : D,
      5  : D,
      6  : D,
      7  : T,
      8  : T,
      9  : T,
      10 : T,
      11 : T
    }
  }, {
    'values' : [5, 6, 7, 8],
    'dealer' : {
      2  : T,
      3  : T,
      4  : T,
      5  : T,
      6  : T,
      7  : T,
      8  : T,
      9  : T,
      10 : T,
      11 : T
    }
  }
];

export const pairs = [
  {
    'values' : [11],
    'dealer' : {
      2  : P,
      3  : P,
      4  : P,
      5  : P,
      6  : P,
      7  : P,
      8  : P,
      9  : P,
      10 : P,
      11 : T
    }
  }, {
    'values' : [10],
    'dealer' : {
      2  : R,
      3  : R,
      4  : R,
      5  : R,
      6  : R,
      7  : R,
      8  : R,
      9  : R,
      10 : R,
      11 : R
    }
  }, {
    'values' : [9],
    'dealer' : {
      2  : P,
      3  : P,
      4  : P,
      5  : P,
      6  : P,
      7  : R,
      8  : P,
      9  : P,
      10 : R,
      11 : R
    }
  }, {
    'values' : [8],
    'dealer' : {
      2  : P,
      3  : P,
      4  : P,
      5  : P,
      6  : P,
      7  : P,
      8  : P,
      9  : P,
      10 : T,
      11 : T
    }
  }, {
    'values' : [7],
    'dealer' : {
      2  : P,
      3  : P,
      4  : P,
      5  : P,
      6  : P,
      7  : P,
      8  : T,
      9  : T,
      10 : T,
      11 : T
    }
  }, {
    'values' : [6],
    'dealer' : {
      2  : P,
      3  : P,
      4  : P,
      5  : P,
      6  : P,
      7  : T,
      8  : T,
      9  : T,
      10 : T,
      11 : T
    }
  }, {
    'values' : [5],
    'dealer' : {
      2  : D,
      3  : D,
      4  : D,
      5  : D,
      6  : D,
      7  : D,
      8  : D,
      9  : D,
      10 : T,
      11 : T
    }
  }, {
    'values' : [4],
    'dealer' : {
      2  : T,
      3  : T,
      4  : T,
      5  : P,
      6  : P,
      7  : T,
      8  : T,
      9  : T,
      10 : T,
      11 : T
    }
  }, {
    'values' : [3, 2],
    'dealer' : {
      2  : P,
      3  : P,
      4  : P,
      5  : P,
      6  : P,
      7  : P,
      8  : T,
      9  : T,
      10 : T,
      11 : T
    }
  }
];

export const aces = [
  {
    'values' : [8, 9, 10],
    'dealer' : {
      2  : R,
      3  : R,
      4  : R,
      5  : R,
      6  : R,
      7  : R,
      8  : R,
      9  : R,
      10 : R,
      11 : R
    }
  }, {
    'values' : [7],
    'dealer' : {
      2  : R,
      3  : D,
      4  : D,
      5  : D,
      6  : D,
      7  : R,
      8  : R,
      9  : T,
      10 : T,
      11 : T
    }
  }, {
    'values' : [6],
    'dealer' : {
      2  : T,
      3  : D,
      4  : D,
      5  : D,
      6  : D,
      7  : T,
      8  : T,
      9  : T,
      10 : T,
      11 : T
    }
  }, {
    'values' : [4, 5],
    'dealer' : {
      2  : T,
      3  : T,
      4  : D,
      5  : D,
      6  : D,
      7  : T,
      8  : T,
      9  : T,
      10 : T,
      11 : T
    }
  }, {
    'values' : [2, 3],
    'dealer' : {
      2  : T,
      3  : T,
      4  : T,
      5  : D,
      6  : D,
      7  : T,
      8  : T,
      9  : T,
      10 : T,
      11 : T
    }
  }
]
;
