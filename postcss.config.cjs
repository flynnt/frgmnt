module.exports = {
  plugins: {
    autoprefixer: {},
    '@csstools/postcss-global-data': {
      files: ['./src/assets/styles/settings/_custom-media.css'],
    },
    'postcss-custom-media': {},
  },
};
