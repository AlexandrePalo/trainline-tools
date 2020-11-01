import { location } from './location'

interface passenger {
    id?: string
    dateOfBirth: string
    cardIds: string[]
}

interface price {
    amount: number
    currencyCode: string
    currencyConversionApplied: boolean
}

interface journey {
    sections: any[]
    id: string
    direction: string
    legs: string[]
    departAt: string
    arriveAt: string
    duration: string
    unsellableReason: {
        code: string
        shortDescription: string
        longDescription: string
    }
    hash: string
}

interface alternative {
    id: string
    price: price
    fullPrice: price
    fares: string[]
    farePassengers: [
        {
            passengers: {
                id: string
                passengerType: string
            }[]

            fareId: string
        }
    ]
    isPartial: boolean
    flexibility: {
        code: string
        name: string
        language: string
    }
    selectedExtras: {
        id: string
        price: price
        selectionStateChangeable: false
        availableQuantity: 1
        extraType: {
            id: string
            code: string
            name: string
            description?: any
        }
        farePassengerIds: string[]
        legIds: string[]
    }[]
    comfortClassCorrelationToken: string
    billableUnits: {
        correlationToken: string
        fareLegIds: string[]
        originalPrice: price
        price: price
        passengerIds: string[]
    }[]
    hash: string
}

interface fare {
    id: string
    fareLegs: [
        {
            legId: string
            travelClass: {
                id: string
                code: string
                name: string
            }
            comfort: {
                id: string
                code: string
                name: string
                description: string
                allowsComfortChoice: boolean
            }
            reservationType: string
        }
    ]
    fareType: string
    cardIds: string[]
    origin: string
    destination: string
    availability: {
        status: string
    }
    vouchers: any[]
    hash: string
    deliveryOptions: any[]
}

interface fareType {
    id: string
    code: string
    name: string
    conditionsSummary: string
    conditions: {
        title: string
        description: string
    }[]
    secondaryFare?: any
    validityPeriods?: any
}

interface leg {
    id: string
    duration: string
    departAt: string
    arriveAt: string
    timetableId: string
    arrivalLocation: string
    departureLocation: string
    carrier: string
    vendorQuotaIdentifier: string
    transportMode: string
    brand: string
    co2EmissionInGramsPerPassenger: number
    hash: string
    callingPattern: boolean
}

interface section {
    alternatives: string[]
    mixedLegComforts: boolean
    id: string
}

interface brand {
    id: string
    code: string
    name: string
    language?: any
}

interface carrier {
    id: string
    code: string
    name: string
}

interface transportMode {
    id: string
    code: string
    name: string
    mode: string
}

interface passengerType {
    id: string
    name: string
    code: string
    ageRestriction: {
        lowerBound: number
    }
}

export interface journeyJSONBody {
    passengers: passenger[]
    isEurope: boolean
    cards: any[]
    transitDefinitions: [
        {
            direction: string
            origin: string
            destination: string
            journeyDate: { type: string; time: string }
        }
    ]
    type: string
    maximumJourneys: number
    includeRealtime: boolean
    transportModes: string[]
    applyFareDiscounts: boolean
    requestedCurrencyCode: string
}

export interface journeyJSONResponse {
    data: {
        journeySearch: {
            passengers: {
                [key: string]: passenger
            }
            journey: {
                [key: string]: journey
            }
            createdAt: string
            pagination: {
                next: { outward: boolean; inward: boolean }
                previous: { outward: boolean; inward: boolean }
            }
            id: string
            alternatives: {
                [key: string]: alternative
            }
            responseCard: any
            fares: { [key: string]: fare }
            legs: { [key: string]: leg }
            sections: { [key: string]: section }
            deliveryOptions: any
            inwardSearch: boolean
        }
        brands: { [key: string]: brand }
        carriers: { [key: string]: carrier }
        locations: { [key: string]: location }
        discountCards: any
        disruptions: any
        timetables: any
        fareTypes: { [key: string]: fareType }
        routeRestrictions: any
        fareCategories: any
        transportModes: { [key: string]: transportMode }
        passengerTypes: { [key: string]: passengerType }
    }
}
