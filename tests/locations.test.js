import fetch from 'node-fetch'
const { searchLocations } = require('../src/api/locations')

//jest.mock('fetch')

// Validation
test('ValidationError when empty term', () => {
    return expect(searchLocations('')).rejects.toThrow(
        "'term' string is mandatory"
    )
})
test('ValidationError when search term is not a string, number that can could converted to string', () => {
    return expect(searchLocations(1)).rejects.toThrow(
        "'term' string is mandatory"
    )
})
test('ValidationError when search term is not a string, object', () => {
    return expect(searchLocations({})).rejects.toThrow(
        "'term' string is mandatory"
    )
})

// API call
/*
test('testing mock fetch', () => {
    fetch.mockImplementationOnce(() => Promise.resolve('hello world'))
    return expect(fetch('')).resolves.toBe('hello world')
    //return expect(searchLocations('Metz').resolves.toBe('mocked result'))
})
*/
