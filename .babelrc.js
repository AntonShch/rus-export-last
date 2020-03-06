module.exports = {
    presets: [require('@babel/preset-env')],
    plugins: ['@babel/plugin-transform-async-to-generator'],
};
