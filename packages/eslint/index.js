module.exports = {
  extends: ['airbnb'],
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'wyze'
  ],
  rules: {
    'function-paren-newline': ['error'],
    'space-before-function-paren': ['error', 'always'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'jsx-a11y/label-has-for': ['error', {
      components: ['label'],
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'max-len': [
      'error',
      {
        code: 80,
        tabWidth: 2,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'react/jsx-filename-extension': ['off'],
    'react/sort-prop-types': [
      'error',
      {
        sortShapeProp: true,
      },
    ],
    semi: ['error', 'never'],
    'no-multiple-empty-lines': ["error", {
      max: 1,
      maxEOF: 1
    }],
    'multiline-ternary': ['error', 'always'],
    'sort-keys': 'error',
    'wyze/sort-destructuring-keys': ['error', 'asc']
  },
}
