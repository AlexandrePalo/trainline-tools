import fetch from 'node-fetch'
import { locationPotJSONResponse, location } from './interface/location'
import { TrainlineError, ValidationError } from '../errors'

// https://github.com/trainline-eu/stations

export const searchLocations = async (
    term: string
): Promise<location[] | Error> => {
    // From: web scrapping

    if (!term || typeof term !== 'string') {
        throw new ValidationError("'term' string is mandatory")
    }

    const scopes = [
        'atoconly',
        'eurostaronly',
        'sncf',
        'benerail',
        'trenitalia',
        'renfe',
        'ntv',
        'busbud',
        'flixbus',
        'dbfull',
        'ouigo',
        'obb',
        'cff',
        'westbahn',
        'distribusion',
        'busbudfull',
    ]
    const locationTypes = ['station', 'stationGroup', 'city']

    const options: {
        [key: string]: number | string
    } = {
        searchTerm: term,
        lang: 'fr',
        scopes: scopes.reduce((string, scope) => {
            return string !== '' ? `${string},${scope}` : scope
        }, ''),
        size: 30,
        country: 'FR',
        locationType: locationTypes.reduce((string, locationType) => {
            return string !== '' ? `${string},${locationType}` : locationType
        }, ''),
    }

    const url = `https://www.thetrainline.com/api/locations-pot/search?${Object.keys(
        options
    ).reduce((string, key) => {
        return string !== ''
            ? `${string}&${key}=${options[key]}`
            : `${key}=${options[key]}`
    }, '')}`

    return fetch(url, { method: 'GET' })
        .then((res) => res.json())
        .then((json: locationPotJSONResponse) => {
            return [
                ...json.requestedCountry.map((l) => ({
                    ...l,
                    source: 'requested-country',
                })),
                ...json.restOfWorld.map((l) => ({
                    ...l,
                    source: 'rest-of-world',
                })),
            ]
        })
        .catch((err) => {
            throw new TrainlineError(err)
        })
}
