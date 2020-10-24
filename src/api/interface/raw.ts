export interface station {
    code: string
    latitude: number
    longitude: number
    defaultLanguage: string
    locationType: string
    name: string
    shortName: string
    aliases: any[]
    id: string
    city: string
    cityLocal: string
    scopes: string[]
    connections: string[]
    countryCode: string
    properties: string[]
    source?: string
}

export interface locationPotJSONResponse {
    requestedCountry: station[]
    restOfWorld: station[]
    createdAt: number
}
