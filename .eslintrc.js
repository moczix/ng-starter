/**
 * We are using the .JS version of an ESLint config file here so that we can
 * add lots of comments to better explain and document the setup.
 */
module.exports = {
  env: {
    browser: true,
    es6: true
  },
  globals: {
    Atomic: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  overrides: [
    {
      /**
       * See packages/eslint-plugin/src/configs/README.md
       * for what this recommended config contains.
       */
      files: ['*.ts'],
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
      ],
      plugins: ['@typescript-eslint', 'prettier', '@angular-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json'
      },
      rules: {
        // ORIGINAL tslint.json -> "directive-selector": [true, "attribute", "app", "camelCase"],
        '@angular-eslint/directive-selector': ['error', { type: 'attribute', style: 'camelCase' }],

        // ORIGINAL tslint.json -> "component-selector": [true, "element", "app", "kebab-case"],
        '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'bcf', style: 'kebab-case' }],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "@typescript-eslint/explicit-member-accessibility": ['error', { overrides: { constructors: 'no-public', properties: 'off', accessors: 'off' } }],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowHigherOrderFunctions: true
          }
        ],
        'brace-style': 'off',
        '@typescript-eslint/brace-style': ['error', '1tbs'],
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'memberLike',
            modifiers: ['private'],
            format: ['camelCase'],
            leadingUnderscore: 'require'
          },
          {
            selector: 'memberLike',
            modifiers: ['protected'],
            format: ['camelCase'],
            leadingUnderscore: 'require'
          },
          {
            selector: 'class',
            format: ['PascalCase'],
            leadingUnderscore: 'allow'
          },
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase']
          },
          {
            selector: 'parameter',
            format: ['camelCase'],
            leadingUnderscore: 'allow'
          },
          {
            selector: 'property',
            format: ['camelCase', 'PascalCase'],
            leadingUnderscore: 'allow'
          }
        ],
        '@typescript-eslint/member-delimiter-style': [
          'error',
          {
            multiline: {
              delimiter: 'semi',
              requireLast: true
            },
            singleline: {
              delimiter: 'semi',
              requireLast: false
            }
          }
        ],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-empty-function': ['error', { allow: ['methods'] }],
        '@typescript-eslint/await-thenable': ['error'],
        '@typescript-eslint/typedef': [
          'error',
          {
            arrayDestructuring: true,
            arrowParameter: true,
            memberVariableDeclaration: true,
            objectDestructuring: true,
            parameter: true,
            propertyDeclaration: true,
            variableDeclaration: true,
            variableDeclarationIgnoreFunction: true
          }
        ],
        'prettier/prettier': [
          'error',
          {
            endOfLine: 'auto'
          }
        ]
      }
    },
    {
      files: ['*.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        /**
         * Any template/HTML related rules you wish to use/reconfigure over and above the
         * recommended set provided by the @angular-eslint project would go here.
         */
      }
    }
  ]
};
