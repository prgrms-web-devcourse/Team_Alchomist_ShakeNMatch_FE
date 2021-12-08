const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    config.resolve.alias['@components'] = path.resolve(
      __dirname,
      '../src/components'
    );
    config.resolve.alias['@base'] = path.resolve(
      __dirname,
      '../src/components/base'
    );
    config.resolve.alias['@compound'] = path.resolve(
      __dirname,
      '../src/components/compound'
    );
    config.resolve.alias['@domain'] = path.resolve(
      __dirname,
      '../src/components/domain'
    );
    config.resolve.alias['@pages'] = path.resolve(__dirname, '../src/pages');
    config.resolve.alias['@contexts'] = path.resolve(
      __dirname,
      '../src/contexts'
    );
    config.resolve.alias['@hooks'] = path.resolve(__dirname, '../src/hooks');
    config.resolve.alias['@constants'] = path.resolve(
      __dirname,
      '../src/utils/constants'
    );
    config.resolve.alias['@apis'] = path.resolve(
      __dirname,
      '../src/utils/apis'
    );
    config.resolve.alias['@libs'] = path.resolve(
      __dirname,
      '../src/utils/libs'
    );
    config.resolve.alias['@assets'] = path.resolve(__dirname, '../src/assets');
    config.resolve.alias['@models'] = path.resolve(__dirname, '../src/models');
    config.resolve.alias['@utils'] = path.resolve(__dirname, '../src/utils');
    config.resolve.alias['@routes'] = path.resolve(__dirname, '../src/routes');
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
