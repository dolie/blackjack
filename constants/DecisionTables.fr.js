import { actions } from '~/constants/Actions.fr';

const R = actions.STAY; // Rester
const T = actions.HIT; // Tirer
const D = actions.DOUBLE; // Doubler
const P = actions.SPLIT; // Partager

export const tot = [
  {
    'name'   : '17-21',
    'values' : [17, 18, 19, 20, 21],
    'dealer' : [
      { 'value' : 2, 'action' : R },
      { 'value' : 3, 'action' : R },
      { 'value' : 4, 'action' : R },
      { 'value' : 5, 'action' : R },
      { 'value' : 6, 'action' : R },
      { 'value' : 7, 'action' : R },
      { 'value' : 8, 'action' : R },
      { 'value' : 9, 'action' : R },
      { 'value' : 10, 'action' : R },
      { 'value' : 11, 'action' : R }
    ]
  }, {
    'name'   : '13-16',
    'values' : [13, 14, 15, 16],
    'dealer' : [
      { 'value' : 2, 'action' : R },
      { 'value' : 3, 'action' : R },
      { 'value' : 4, 'action' : R },
      { 'value' : 5, 'action' : R },
      { 'value' : 6, 'action' : R },
      { 'value' : 7, 'action' : T },
      { 'value' : 8, 'action' : T },
      { 'value' : 9, 'action' : T },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : '12',
    'values' : [12],
    'dealer' : [
      { 'value' : 2, 'action' : T },
      { 'value' : 3, 'action' : T },
      { 'value' : 4, 'action' : R },
      { 'value' : 5, 'action' : R },
      { 'value' : 6, 'action' : R },
      { 'value' : 7, 'action' : T },
      { 'value' : 8, 'action' : T },
      { 'value' : 9, 'action' : T },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : '10-11',
    'values' : [10, 11],
    'dealer' : [
      { 'value' : 2, 'action' : D },
      { 'value' : 3, 'action' : D },
      { 'value' : 4, 'action' : D },
      { 'value' : 5, 'action' : D },
      { 'value' : 6, 'action' : D },
      { 'value' : 7, 'action' : D },
      { 'value' : 8, 'action' : D },
      { 'value' : 9, 'action' : D },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : '9',
    'values' : [9],
    'dealer' : [
      { 'value' : 2, 'action' : T },
      { 'value' : 3, 'action' : D },
      { 'value' : 4, 'action' : D },
      { 'value' : 5, 'action' : D },
      { 'value' : 6, 'action' : D },
      { 'value' : 7, 'action' : T },
      { 'value' : 8, 'action' : T },
      { 'value' : 9, 'action' : T },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : '5-8',
    'values' : [5, 6, 7, 8],
    'dealer' : [
      { 'value' : 2, 'action' : T },
      { 'value' : 3, 'action' : T },
      { 'value' : 4, 'action' : T },
      { 'value' : 5, 'action' : T },
      { 'value' : 6, 'action' : T },
      { 'value' : 7, 'action' : T },
      { 'value' : 8, 'action' : T },
      { 'value' : 9, 'action' : T },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }
];

export const pairs = [
  {
    'name'   : 'AA',
    'values' : [11],
    'dealer' : [
      { 'value' : 2, 'action' : P },
      { 'value' : 3, 'action' : P },
      { 'value' : 4, 'action' : P },
      { 'value' : 5, 'action' : P },
      { 'value' : 6, 'action' : P },
      { 'value' : 7, 'action' : P },
      { 'value' : 8, 'action' : P },
      { 'value' : 9, 'action' : P },
      { 'value' : 10, 'action' : P },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : '1010',
    'values' : [10],
    'dealer' : [
      { 'value' : 2, 'action' : R },
      { 'value' : 3, 'action' : R },
      { 'value' : 4, 'action' : R },
      { 'value' : 5, 'action' : R },
      { 'value' : 6, 'action' : R },
      { 'value' : 7, 'action' : R },
      { 'value' : 8, 'action' : R },
      { 'value' : 9, 'action' : R },
      { 'value' : 10, 'action' : R },
      { 'value' : 11, 'action' : R }
    ]
  }, {
    'name'   : '99',
    'values' : [9],
    'dealer' : [
      { 'value' : 2, 'action' : P },
      { 'value' : 3, 'action' : P },
      { 'value' : 4, 'action' : P },
      { 'value' : 5, 'action' : P },
      { 'value' : 6, 'action' : P },
      { 'value' : 7, 'action' : R },
      { 'value' : 8, 'action' : P },
      { 'value' : 9, 'action' : P },
      { 'value' : 10, 'action' : R },
      { 'value' : 11, 'action' : R }
    ]
  }, {
    'name'   : '88',
    'values' : [8],
    'dealer' : [
      { 'value' : 2, 'action' : P },
      { 'value' : 3, 'action' : P },
      { 'value' : 4, 'action' : P },
      { 'value' : 5, 'action' : P },
      { 'value' : 6, 'action' : P },
      { 'value' : 7, 'action' : P },
      { 'value' : 8, 'action' : P },
      { 'value' : 9, 'action' : P },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : '77',
    'values' : [7],
    'dealer' : [
      { 'value' : 2, 'action' : P },
      { 'value' : 3, 'action' : P },
      { 'value' : 4, 'action' : P },
      { 'value' : 5, 'action' : P },
      { 'value' : 6, 'action' : P },
      { 'value' : 7, 'action' : P },
      { 'value' : 8, 'action' : T },
      { 'value' : 9, 'action' : T },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : '66',
    'values' : [6],
    'dealer' : [
      { 'value' : 2, 'action' : P },
      { 'value' : 3, 'action' : P },
      { 'value' : 4, 'action' : P },
      { 'value' : 5, 'action' : P },
      { 'value' : 6, 'action' : P },
      { 'value' : 7, 'action' : T },
      { 'value' : 8, 'action' : T },
      { 'value' : 9, 'action' : T },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : '55',
    'values' : [5],
    'dealer' : [
      { 'value' : 2, 'action' : D },
      { 'value' : 3, 'action' : D },
      { 'value' : 4, 'action' : D },
      { 'value' : 5, 'action' : D },
      { 'value' : 6, 'action' : D },
      { 'value' : 7, 'action' : D },
      { 'value' : 8, 'action' : D },
      { 'value' : 9, 'action' : D },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : '44',
    'values' : [4],
    'dealer' : [
      { 'value' : 2, 'action' : T },
      { 'value' : 3, 'action' : T },
      { 'value' : 4, 'action' : T },
      { 'value' : 5, 'action' : P },
      { 'value' : 6, 'action' : P },
      { 'value' : 7, 'action' : T },
      { 'value' : 8, 'action' : T },
      { 'value' : 9, 'action' : T },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : '22-33',
    'values' : [2, 3],
    'dealer' : [
      { 'value' : 2, 'action' : P },
      { 'value' : 3, 'action' : P },
      { 'value' : 4, 'action' : P },
      { 'value' : 5, 'action' : P },
      { 'value' : 6, 'action' : P },
      { 'value' : 7, 'action' : P },
      { 'value' : 8, 'action' : T },
      { 'value' : 9, 'action' : T },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }
];

export const aces = [
  {
    'name'   : 'A8-A10',
    'values' : [8, 9, 10],
    'dealer' : [
      { 'value' : 2, 'action' : R },
      { 'value' : 3, 'action' : R },
      { 'value' : 4, 'action' : R },
      { 'value' : 5, 'action' : R },
      { 'value' : 6, 'action' : R },
      { 'value' : 7, 'action' : R },
      { 'value' : 8, 'action' : R },
      { 'value' : 9, 'action' : R },
      { 'value' : 10, 'action' : R },
      { 'value' : 11, 'action' : R }
    ]
  }, {
    'name'   : 'A7',
    'values' : [7],
    'dealer' : [
      { 'value' : 2, 'action' : R },
      { 'value' : 3, 'action' : D },
      { 'value' : 4, 'action' : D },
      { 'value' : 5, 'action' : D },
      { 'value' : 6, 'action' : D },
      { 'value' : 7, 'action' : R },
      { 'value' : 8, 'action' : R },
      { 'value' : 9, 'action' : T },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : 'A6',
    'values' : [6],
    'dealer' : [
      { 'value' : 2, 'action' : T },
      { 'value' : 3, 'action' : D },
      { 'value' : 4, 'action' : D },
      { 'value' : 5, 'action' : D },
      { 'value' : 6, 'action' : D },
      { 'value' : 7, 'action' : T },
      { 'value' : 8, 'action' : T },
      { 'value' : 9, 'action' : T },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : 'A4-A5',
    'values' : [4, 5],
    'dealer' : [
      { 'value' : 2, 'action' : T },
      { 'value' : 3, 'action' : T },
      { 'value' : 4, 'action' : D },
      { 'value' : 5, 'action' : D },
      { 'value' : 6, 'action' : D },
      { 'value' : 7, 'action' : T },
      { 'value' : 8, 'action' : T },
      { 'value' : 9, 'action' : T },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }, {
    'name'   : 'A2-A3',
    'values' : [2, 3],
    'dealer' : [
      { 'value' : 2, 'action' : T },
      { 'value' : 3, 'action' : T },
      { 'value' : 4, 'action' : T },
      { 'value' : 5, 'action' : D },
      { 'value' : 6, 'action' : D },
      { 'value' : 7, 'action' : T },
      { 'value' : 8, 'action' : T },
      { 'value' : 9, 'action' : T },
      { 'value' : 10, 'action' : T },
      { 'value' : 11, 'action' : T }
    ]
  }
]
;
