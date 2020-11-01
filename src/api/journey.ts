import fetch from 'node-fetch'
import { journeyJSONBody, journeyJSONResponse } from './interface/journey'

export const searchJourneys = async (): Promise<any> => {
    // From: web scraping

    const url = 'https://www.thetrainline.com/api/journey-search/'

    const body: journeyJSONBody = {
        passengers: [{ dateOfBirth: '1993-10-23', cardIds: [] }],
        isEurope: true,
        cards: [],
        transitDefinitions: [
            {
                direction: 'outward',
                origin: '69b59b70a73b72302eff45627aeef377',
                destination: '125ec15eac5cb6bada68a032804cef37',
                journeyDate: {
                    type: 'departAfter',
                    time: '2020-10-28T06:00:00',
                },
            },
        ],
        type: 'single',
        maximumJourneys: 5,
        includeRealtime: true,
        transportModes: ['mixed'],
        applyFareDiscounts: false,
        requestedCurrencyCode: 'EUR',
    }

    return await fetch(url, {
        headers: {
            'User-Agent':
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0',
            Accept: 'application/json',
            'Accept-Language': 'fr-FR',
            'x-version': '2.0',
            'Content-Type': 'text/plain;charset=UTF-8',
            Pragma: 'no-cache',
            'Cache-Control': 'no-cache',
        },
        method: 'POST',
        body: JSON.stringify(body),
    })
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            return { a: true }
        })
}
