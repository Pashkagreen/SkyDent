module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['react-hooks', 'simple-import-sort'],
  settings: {
    'react-native/style-sheet-object-names': ['RNStyles'],
  },
  rules: {
    'no-shadow': 'off',
    'no-undef': 'off',
    'no-console': 'off',
    // 'no-unused-vars': 'off',
    'no-duplicate-imports': 'warn',
    'react-native/no-unused-styles': 2,
    'react-native/sort-styles': [
      'warn',
      'asc',
      {ignoreClassNames: true, ignoreStyleProperties: false},
    ],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-sort-props': [
      'warn',
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'ignore',
        ignoreCase: true,
        reservedFirst: true,
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'no-restricted-imports': [
      'warn',
      {
        paths: ['react-native-gesture-handler'],
      },
    ],
    'react-hooks/exhaustive-deps': 'off', // useEffect error disable
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react`
          ['^(react|react-native|react-redux)$'],

          // libs
          ['^[^.]*$'],

          //reducers/services
          ['reducer|service'],

          //views and components
          ['view$'],
          ['components'],

          //configs/utils
          ['config|utils'],

          // styles .
          ['localization$|styles'],
        ],
      },
    ],
  },
};
