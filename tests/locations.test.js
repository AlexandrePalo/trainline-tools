const { searchLocations } = require('../src/api/locations')

test('expect', () => {
    expect(
        (() => {
            return 1
        })()
    ).toBe(1)
})
