console.log('im in another file');
const h = document.querySelectorAll('p');
console.log('dsadsad', h);
age = 300;
let format = require('prettier-eslint');

// notice, no semicolon in the original text
const sourceCode = 'const {foo} = bar';

const options = {
  text: sourceCode,
  eslintConfig: {
    parserOptions: {
      ecmaVersion: 7
    },
    rules: {
      semi: ['error', 'never']
    }
  },
  prettierOptions: {
    bracketSpacing: true
  },
  fallbackPrettierOptions: {
    singleQuote: false
  }
};

const formatted = format(options);

// notice no semicolon in the formatted text
formatted; // const { foo } = bar
