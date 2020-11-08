import fetch from 'node-fetch'
const { searchLocations } = require('../src/api/locations')
import {
    locationPotJSONResponseWhenTermIsMetz,
    locationPotJSONResponseWhenTermIsXYZ,
} from './locations.mockedResponses'

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

// Complete calls, mocked fetch
jest.mock('node-fetch')
test('Result is OK when search term is "Metz", lots of results', () => {
    fetch.mockImplementationOnce(() =>
        Promise.resolve({
            json: () => Promise.resolve(locationPotJSONResponseWhenTermIsMetz),
        })
    )
    return searchLocations('Metz').then((res) =>
        expect(res).toEqual(
            expect.arrayContaining([
                expect.objectContaining({
                    id: expect.any(String),
                    code: expect.any(String),
                    locationType: expect.any(String),
                    name: expect.any(String),
                    shortName: expect.any(String),
                    latitude: expect.any(Number),
                    longitude: expect.any(Number),
                    countryCode: expect.any(String),
                    aliases: expect.anything(),
                    properties: expect.any(Array),
                    source: expect.any(String),
                }),
            ])
        )
    )
})
test('Result is OK when search term is "XYZ", no result', () => {
    fetch.mockImplementationOnce(() =>
        Promise.resolve({
            json: () => Promise.resolve(locationPotJSONResponseWhenTermIsXYZ),
        })
    )
    return searchLocations('XYZ').then((res) => expect(res).toEqual([]))
})
