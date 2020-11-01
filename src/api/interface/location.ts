export interface location {
    id: string
    code: string
    locationType: string
    name: string
    shortName: string
    latitude: number
    longitude: number
    timezone?: string
    countryCode: string
    language?: string
    defaultLanguage?: string
    address?: any
    aliases: any[]
    properties: string[]
    city?: string
    cityLocal?: string
    scopes?: string[]
    connections?: string[]
    source?: string
    parents?: location[]
}

export interface locationPotJSONResponse {
    requestedCountry: location[]
    restOfWorld: location[]
    createdAt: number
}
