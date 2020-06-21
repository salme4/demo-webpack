module.exports = function myBebelPreset() {
    return {
        plugins: [
            '@babel/plugin-transform-block-scoping', //let, const -> var
            '@babel/plugin-transform-arrow-functions', //=> -> func{}
            '@babel/plugin-transform-strict-mode' //'use strict' 추가
        ]
    }
}
