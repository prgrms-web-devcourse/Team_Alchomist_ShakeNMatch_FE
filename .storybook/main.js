const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    config.resolve.alias['@base'] = path.resolve(
      __dirname,
      '../src/components/base'
    );
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      '../src/components'
    );
    config.resolve.alias['@hooks'] = path.resolve(__dirname, '../src/hooks');
    config.resolve.alias['@constants'] = path.resolve(
      __dirname,
      '../src/utils/constants'
    );
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils');
    config.resolve.alias['@'] = path.resolve(__dirname, '../src');
    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true
    }
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app'
  ]
};
