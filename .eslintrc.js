module.exports = {
  root          : true,
  parserOptions : {
    'parser' : 'babel-eslint'
  },
  env           : {
    browser : true,
    node    : true,
    jest    : true,
    es6     : true
  },
  extends       : ['google', 'plugin:vue/recommended'],
  // required to lint *.vue files
  plugins       : [
    'vue'
  ],
  // add your custom rules here
  rules         : {
    'no-console'           : 2,
    // allow debugger during development
    'no-debugger'          : process.env.NODE_ENV === 'production' ? 2 : 0,
    // no jsdoc required
    'require-jsdoc'        : 0,
    // maximum 200 characters per line
    'max-len'              : [2, {
      code          : 120,
      tabWidth      : 2,
      ignoreUrls    : true,
      ignorePattern : '^goog\.(module|require)'
    }],
    'new-cap'              : 0,
    'space-infix-ops'      : ['error', { 'int32Hint' : false }],
    'comma-dangle'         : ['error', 'never'],
    'no-else-return'       : 'error',
    'no-multi-spaces'      : [
      'error',
      {
        'exceptions' : {
          'AssignmentExpression' : true,
          'VariableDeclarator'   : true,
          'Property'             : true
        }
      }
    ],
    // Specific rule
    'no-undef'             : 'error',
    'object-curly-spacing' : ['error', 'always'],
    'key-spacing'          : ['error', {
      'beforeColon' : true,
      'afterColon'  : true,
      'align'       : 'colon'
    }],
    'vue/script-indent'    : ['error', 2, {
      'baseIndent' : 1,
      'switchCase' : 1
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }],
    'quote-props'     : [2,'consistent'],
  },
  overrides     : [
    {
      'files' : ['*.vue'],
      'rules' : {
        'indent' : 'off'
      }
    },
    {
      'files' : ['*.js'],
      'rules' : {
        'indent' : 'off'
      }
    }
  ],
  globals       : {
    '_' : false,
    '$' : false
  }
};
