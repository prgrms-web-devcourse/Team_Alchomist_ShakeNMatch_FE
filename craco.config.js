const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.path.json'
      }
    }
  ],
  babel: {
    presets: [
      '@emotion/babel-preset-css-prop',
      ['@babel/preset-react', { runtime: 'automatic' }]
    ]
  }
};
