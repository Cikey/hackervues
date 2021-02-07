module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb-base',
    'prettier',
    'prettier/vue',
    'plugin:vue/vue3-recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'vue/singleline-html-element-content-newline': 'off',
    'no-param-reassign': [
      'error',
      {
        ignorePropertyModificationsFor: ['state']
      }
    ]
  }
};
