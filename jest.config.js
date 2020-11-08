module.exports = {
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
    },
    // Above config is equivalent to this new plugin, see https://kulshekhar.github.io/ts-jest/user/config/
    /*
    preset: 'ts-jest/presets/js-with-babel'
    */
    testRegex: '/__tests__/.*\\.test\\.js$',
}
