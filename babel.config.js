module.exports = {
  presets: [
    '@babel/preset-env',
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [process.env.NODE_ENV !== 'production' && require.resolve('react-refresh/babel')].filter(Boolean),
};
