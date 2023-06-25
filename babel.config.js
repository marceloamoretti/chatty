module.exports = {
  presets: ['module:metro-react-native-babel-preset', '@babel/preset-typescript'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.js', '.ios.js', '.android.js', '.json', '.ts', '.tsx'],
        alias: {
          '~assets': './assets',
          '~utils': './src/utils',
          '~moduls': './src/moduls',
          '~components': './src/components',
          '~screens': './src/screens',
        },
      },
    ],
  ],
};
