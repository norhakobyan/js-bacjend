module.exports = {
  env: {
      browser: true,
      commonjs: true,
      es6: true,
      jest: true,
  },
  extends: ['airbnb-base', "plugin:sonarjs/recommended", "plugin:node/recommended"],
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
      ecmaVersion: 2018,
  },
  rules: {
      "no-unused-labels": "warn",
      "no-underscore-dangle": "off",
      "object-shorthand": "warn",
      "object-curly-newline": "warn",
      "prefer-destructuring": "warn",
      "no-bitwise": "off",
      "max-len": "warn",
      "no-prototype-builtins": "warn",
      "no-param-reassign": "warn",
      "camelcase": "warn",
      "node/exports-style": ["error", "module.exports"],
      "node/file-extension-in-import": ["error", "always"],
      "node/prefer-global/buffer": ["error", "always"],
      "node/prefer-global/console": ["error", "always"],
      "node/prefer-global/process": ["error", "always"],
      "node/prefer-global/url-search-params": ["error", "always"],
      "node/prefer-global/url": ["error", "always"],
      "node/prefer-promises/dns": "error",
      "node/prefer-promises/fs": "error",
      "promise/always-return": "error",
      "promise/no-return-wrap": "error",
      "promise/param-names": "error",
      "promise/catch-or-return": "error",
      "promise/no-native": "off",
      "promise/no-nesting": "warn",
      "promise/no-promise-in-callback": "warn",
      "promise/no-callback-in-promise": "warn",
      "promise/avoid-new": "warn",
      "promise/no-new-statics": "error",
      "promise/no-return-in-finally": "warn",
      "promise/valid-params": "warn",
      "strict": "off",
  },
  plugins: ["jest", "sonarjs", 'no-use-extend-native', 'node', "promise"]
};