module.exports = {
    plugins: [
        // '@babel/plugin-transform-block-scoping',
        // '@babel/plugin-transform-arrow-functions',
        // '@babel/plugin-transform-strict-mode'
    ],
    presets: [
        // './my-babel-preset.js',
        ['@babel/preset-env', {
            targets: {
                chrome : '79',
                ie: '11'
            },
            useBuiltIns: 'usage', //'entry', false
            corejs: {
                version : 2, //recently 3
            }
        }]
    ]
}