module.exports = {
  plugins: [
    require('autoprefixer')({}),
    require('postcss-discard-duplicates')({}),
    require('postcss-discard-comments')({}),
    require('postcss-font-magician')({
      foundries: 'bootstrap google',
    }),
  ],
};
