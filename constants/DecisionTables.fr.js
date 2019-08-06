import { actions } from '~/constants/Actions.fr';

const R = actions.STAY; // Rester
const T = actions.HIT; // Tirer
const D = actions.DOUBLE; // Doubler
const P = actions.SPLIT; // Partager

export const tot = [
  {
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
    'values' : [3, 2],
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
