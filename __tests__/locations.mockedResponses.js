// Generated from Firefox 08/11/2020 12:11
/*
fetch("https://www.thetrainline.com/api/locations-search/v1/search?searchTerm=met&lang=fr&scopes%5B0%5D=atoconly&scopes%5B1%5D=eurostaronly&scopes%5B2%5D=sncf&scopes%5B3%5D=benerail&scopes%5B4%5D=trenitalia&scopes%5B5%5D=renfe&scopes%5B6%5D=ntv&scopes%5B7%5D=busbud&scopes%5B8%5D=flixbus&scopes%5B9%5D=dbfull&scopes%5B10%5D=ouigo&scopes%5B11%5D=obb&scopes%5B12%5D=cff&scopes%5B13%5D=westbahn&scopes%5B14%5D=distribusion&scopes%5B15%5D=busbudfull&size=30&country=FR&locationType%5B0%5D=station&locationType%5B1%5D=stationGroup&locationType%5B2%5D=city", {
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0",
        "Accept": "application/json",
        "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "referrer": "https://www.thetrainline.com/book/results?origin=f5504cde449b725d50296f244eb9da5e&destination=69b59b70a73b72302eff45627aeef377&outwardDate=2020-10-24T16%3A45%3A00&outwardDateType=departAfter&journeySearchType=single&passengers[]=1993-10-24|7d5827a9-6190-4524-bbb2-06ec89e9c58b&selectedOutward=xOIFOA1ZD6E%3D%3A2Tl4KirUWCk%3D%3AStandard",
    "method": "GET",
    "mode": "cors"
});
*/
export const locationPotJSONResponseWhenTermIsMetz = {
    requestedCountry: [
        {
            id: '07aa3b52315cce18285a3c61693ccc5f',
            code: 'urn:trainline:generic:loc:114',
            cityLocal: '',
            city: '',
            defaultLanguage: 'fr',
            locationType: 'station',
            name: 'Metz',
            properties: [],
            scopes: [
                'Sncf',
                'Benerail',
                'Renfe',
                'Busbud',
                'BusbudFull',
                'Flixbus',
                'Db',
                'DbFull',
                'Ouigo',
                'Distribusion',
            ],
            connections: [
                'urn:trainline:connection:benerail',
                'urn:trainline:connection:db',
                'urn:trainline:connection:db_affiliate',
                'urn:trainline:connection:pao_ouigo',
                'urn:trainline:connection:renfe',
                'urn:trainline:connection:pao_sncf',
                'urn:trainline:connection:busbud',
                'urn:trainline:connection:busbud_affiliate',
                'urn:trainline:connection:distribusion',
                'urn:trainline:connection:flixbus_affiliate',
            ],
            countryCode: 'FR',
            latitude: 49.1095,
            longitude: 6.1766,
            aliases: [
                '8700019',
                '8700023',
                'FRADE',
                'Main Station',
                'Gare Centrale',
                'Hauptbahnhof',
                'Stazione Centrale',
                'Estación central',
            ],
            score: 0.04270365089178085,
        },
        {
            id: '813ac2162dfc503769d5d93798e1a7a5',
            code: 'urn:trainline:generic:loc:2094',
            cityLocal: '',
            city: '',
            defaultLanguage: 'fr',
            locationType: 'station',
            name: 'Lorraine TGV',
            properties: [],
            scopes: [
                'Sncf',
                'Benerail',
                'Db',
                'DbFull',
                'Ouigo',
                'Distribusion',
            ],
            connections: [
                'urn:trainline:connection:benerail',
                'urn:trainline:connection:distribusion',
                'urn:trainline:connection:pao_ouigo',
                'urn:trainline:connection:pao_sncf',
            ],
            countryCode: 'FR',
            latitude: 48.9478,
            longitude: 6.1698,
            aliases: ['EAM', '8700729', 'FREAM', 'FRLOV'],
            score: 0.0035674329847097397,
        },
        {
            id: '995d736016c1d11c01e993b47b266c7c',
            code: 'urn:trainline:generic:loc:4828',
            cityLocal: '',
            city: '',
            defaultLanguage: 'fr',
            locationType: 'station',
            name: 'Metz Nord',
            properties: [],
            scopes: [
                'Sncf',
                'Busbud',
                'BusbudFull',
                'Flixbus',
                'Db',
                'DbFull',
                'Obb',
                'Distribusion',
            ],
            connections: [
                'urn:trainline:connection:obb',
                'urn:trainline:connection:pao_sncf',
                'urn:trainline:connection:busbud',
                'urn:trainline:connection:busbud_affiliate',
                'urn:trainline:connection:distribusion',
                'urn:trainline:connection:flixbus_affiliate',
            ],
            countryCode: 'FR',
            latitude: 49.1367,
            longitude: 6.1679,
            aliases: ['8701651', 'FRMZN'],
            score: 0.000928799097891897,
        },
        {
            id: 'dc8bd38d0c51a0be7f16bebccd165a3b',
            code: 'urn:trainline:generic:loc:814',
            cityLocal: '',
            city: '',
            defaultLanguage: 'fr',
            locationType: 'station',
            name: 'Maizières-lès-Metz',
            properties: [],
            scopes: [
                'Sncf',
                'Busbud',
                'BusbudFull',
                'Db',
                'DbFull',
                'Obb',
                'Distribusion',
            ],
            connections: [
                'urn:trainline:connection:busbud',
                'urn:trainline:connection:busbud_affiliate',
                'urn:trainline:connection:db',
                'urn:trainline:connection:db_affiliate',
                'urn:trainline:connection:distribusion',
                'urn:trainline:connection:obb',
                'urn:trainline:connection:pao_sncf',
            ],
            countryCode: 'FR',
            latitude: 49.2155,
            longitude: 6.1589,
            aliases: ['8701650', 'FRBNP', 'FRMLM', 'u0srun'],
            score: 0.0008021446992643178,
        },
        {
            id: 'a54f921f2b37c692dd216e691fda239f',
            code: 'urn:trainline:generic:loc:773',
            cityLocal: '',
            city: '',
            defaultLanguage: 'fr',
            locationType: 'station',
            name: 'Metzéral',
            properties: [],
            scopes: ['Sncf', 'Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:obb',
                'urn:trainline:connection:pao_sncf',
            ],
            countryCode: 'FR',
            latitude: 48.0133,
            longitude: 7.0733,
            aliases: ['8700541', 'FRBLF'],
            score: 0.0003377451212145388,
        },
        {
            id: '18b679666c41fc39b5e632f24660d26f',
            code: 'urn:trainline:generic:loc:MCE7725gb',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Metrocentre',
            properties: [],
            scopes: ['Atoc', 'AtocOnly'],
            connections: ['urn:trainline:connection:atoc'],
            shortName: 'MCE',
            countryCode: 'GB',
            latitude: 54.9587,
            longitude: -1.6656,
            aliases: ['MCE'],
            score: 0.0001899816415971145,
        },
        {
            id: '6822d5f240dc5b99c9b8dd34d6541560',
            code: 'urn:trainline:generic:loc:MGM6297gb',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Metheringham',
            properties: [],
            scopes: ['Atoc', 'AtocOnly'],
            connections: ['urn:trainline:connection:atoc'],
            shortName: 'MGM',
            countryCode: 'GB',
            latitude: 53.1389,
            longitude: -0.3914,
            aliases: ['MGM'],
            score: 0.00012665442773140967,
        },
        {
            id: 'c1dfe78be777c3847de7a7a86c7e1b6f',
            code: 'urn:trainline:generic:loc:7085',
            cityLocal: 'Metzingen',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Metzingen (Württ)',
            properties: [],
            scopes: ['Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:benerail',
                'urn:trainline:connection:db',
                'urn:trainline:connection:db_affiliate',
                'urn:trainline:connection:obb',
                'urn:trainline:connection:pao_sncf',
            ],
            countryCode: 'DE',
            latitude: 48.5397,
            longitude: 9.2902,
            aliases: [
                '8004009',
                'DEAPC',
                'Metzingen (Wuertt)',
                'Main Station',
                'Gare Centrale',
                'Hauptbahnhof',
                'Stazione Centrale',
                'Estación central',
            ],
            score: 0.0000844362803036347,
        },
        {
            id: 'ed797e59403ef715e6cbb4a97c30297e',
            code: 'urn:trainline:generic:loc:19881',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Metaponto',
            properties: [],
            scopes: [
                'Trenitalia',
                'Busbud',
                'BusbudFull',
                'Flixbus',
                'Db',
                'DbFull',
                'Obb',
                'Distribusion',
            ],
            connections: [
                'urn:trainline:connection:busbud',
                'urn:trainline:connection:busbud_affiliate',
                'urn:trainline:connection:distribusion',
                'urn:trainline:connection:flixbus_affiliate',
                'urn:trainline:connection:obb',
                'urn:trainline:connection:pao_sncf',
                'urn:trainline:connection:trenitalia',
            ],
            countryCode: 'IT',
            latitude: 40.3686,
            longitude: 16.815,
            aliases: [
                '27811',
                '8300413',
                '8311461',
                'ITMET',
                'ITMTP',
                'sr5vwt',
            ],
            score: 0.00006332721386570483,
        },
        {
            id: 'a25e8763d5d00d60def0e19442575f48',
            code: 'urn:trainline:generic:loc:37762',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'city',
            name: 'Meta',
            properties: [],
            scopes: ['Distribusion'],
            connections: ['urn:trainline:connection:distribusion'],
            countryCode: 'IT',
            latitude: 40.6417,
            longitude: 14.4179,
            aliases: ['ITMTA'],
            score: 0,
        },
        {
            id: '534b8a7fac0c265b002e16b578beddb5',
            code: 'urn:trainline:generic:loc:37721',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'city',
            name: 'Methoni',
            properties: [],
            scopes: ['Distribusion'],
            connections: ['urn:trainline:connection:distribusion'],
            countryCode: 'GR',
            latitude: 40.4465,
            longitude: 22.5879,
            aliases: ['GRMET'],
            score: 0,
        },
        {
            id: '5faf48084cb4d09c15c893645077f722',
            code: 'urn:trainline:generic:loc:29600',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'city',
            name: 'Metković',
            properties: [],
            scopes: ['Busbud', 'BusbudFull', 'Flixbus', 'Distribusion'],
            connections: [
                'urn:trainline:connection:busbud',
                'urn:trainline:connection:busbud_affiliate',
                'urn:trainline:connection:distribusion',
                'urn:trainline:connection:flixbus_affiliate',
            ],
            countryCode: 'HR',
            latitude: 43.0533,
            longitude: 17.6493,
            aliases: ['9728', 'HRMET', 'srssct'],
            score: 0,
        },
        {
            id: 'f50b548d1a3d8caeb969b9ddf384cbc5',
            code: 'urn:trainline:generic:loc:29398',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'city',
            name: 'Metzingen',
            properties: [],
            scopes: ['Busbud', 'BusbudFull', 'Flixbus'],
            connections: [
                'urn:trainline:connection:busbud',
                'urn:trainline:connection:busbud_affiliate',
                'urn:trainline:connection:flixbus_affiliate',
            ],
            countryCode: 'DE',
            latitude: 48.5399,
            longitude: 9.2864,
            aliases: ['574', 'u0ws56'],
            score: 0,
        },
        {
            id: '603da6e889cf18b38529cf1b18ed9e58',
            code: 'urn:trainline:generic:loc:32251',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'city',
            name: 'Tivat',
            properties: [],
            scopes: ['Flixbus', 'Distribusion'],
            connections: [
                'urn:trainline:connection:busbud',
                'urn:trainline:connection:busbud_affiliate',
                'urn:trainline:connection:distribusion',
                'urn:trainline:connection:flixbus_affiliate',
            ],
            countryCode: 'ME',
            latitude: 42.435,
            longitude: 18.7066,
            aliases: ['14608', 'METIV', 'srt33f'],
            score: 0,
        },
        {
            id: '9a14804ba7450391e0a92c96aaf75c96',
            code: 'urn:trainline:generic:loc:12711',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Metelen Land',
            properties: [],
            scopes: ['Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:db',
                'urn:trainline:connection:db_affiliate',
                'urn:trainline:connection:obb',
            ],
            countryCode: 'DE',
            latitude: 52.1625,
            longitude: 7.2542,
            aliases: ['8004001'],
            score: 0,
        },
        {
            id: 'a9e8e73ec753eade18059e6ec2abd2bb',
            code: 'urn:trainline:generic:loc:12712',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Mettenheim',
            properties: [],
            scopes: ['Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:db',
                'urn:trainline:connection:db_affiliate',
                'urn:trainline:connection:obb',
            ],
            countryCode: 'DE',
            latitude: 49.7396,
            longitude: 8.3339,
            aliases: ['8004003'],
            score: 0,
        },
        {
            id: 'b745254721d3fa7546ab4215037ff933',
            code: 'urn:trainline:generic:loc:39080',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Mettenheim Rathaus',
            properties: [],
            scopes: ['Db', 'DbFull'],
            connections: [
                'urn:trainline:connection:db',
                'urn:trainline:connection:db_affiliate',
            ],
            countryCode: 'DE',
            latitude: 49.7402,
            longitude: 8.3263,
            aliases: ['8070872'],
            score: 0,
        },
        {
            id: 'd8150ce3780542f88a5a2802e1d3a7f5',
            code: 'urn:trainline:generic:loc:7107',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Mettlach',
            properties: [],
            scopes: ['Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:benerail',
                'urn:trainline:connection:db',
                'urn:trainline:connection:db_affiliate',
                'urn:trainline:connection:obb',
                'urn:trainline:connection:pao_sncf',
            ],
            countryCode: 'DE',
            latitude: 49.4955,
            longitude: 6.5983,
            aliases: ['8004004', 'DEAPY'],
            score: 0,
        },
        {
            id: '2793f77cb594698eaebcee4f29d0f8dc',
            code: 'urn:trainline:generic:loc:12713',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Mettmann Stadtwald',
            properties: [],
            scopes: ['Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:db',
                'urn:trainline:connection:db_affiliate',
                'urn:trainline:connection:obb',
            ],
            countryCode: 'DE',
            latitude: 51.251,
            longitude: 6.9871,
            aliases: ['8004005'],
            score: 0,
        },
        {
            id: 'cdefd8fcd1db046b453cacab77fc2b7f',
            code: 'urn:trainline:generic:loc:12714',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Mettmann Zentrum',
            properties: [],
            scopes: ['Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:db',
                'urn:trainline:connection:db_affiliate',
                'urn:trainline:connection:obb',
            ],
            countryCode: 'DE',
            latitude: 51.2489,
            longitude: 6.9801,
            aliases: ['8004007'],
            score: 0,
        },
        {
            id: 'de50a76b1b12b850704b23824f4041ba',
            code: 'urn:trainline:generic:loc:36649',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Mettmenstetten',
            properties: [],
            scopes: ['Obb', 'Cff'],
            connections: [
                'urn:trainline:connection:cff',
                'urn:trainline:connection:obb',
            ],
            countryCode: 'CH',
            latitude: 47.2441,
            longitude: 8.4574,
            aliases: ['8502225'],
            score: 0,
        },
        {
            id: 'd46430e682632407de2536e508f1cba1',
            code: 'urn:trainline:generic:loc:819',
            cityLocal: '',
            city: '',
            defaultLanguage: 'fr',
            locationType: 'station',
            name: 'Metzeresche',
            properties: [],
            scopes: ['Sncf', 'Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:obb',
                'urn:trainline:connection:pao_sncf',
            ],
            countryCode: 'FR',
            latitude: 49.3,
            longitude: 6.3167,
            aliases: ['8701648', 'FRBNV'],
            score: 0,
        },
        {
            id: '402cc75d6f911dd592d9b2d052f1e3cf',
            code: 'urn:trainline:generic:loc:823',
            cityLocal: '',
            city: '',
            defaultLanguage: 'fr',
            locationType: 'station',
            name: 'Metzervisse',
            properties: [],
            scopes: ['Sncf', 'Db', 'DbFull'],
            connections: ['urn:trainline:connection:pao_sncf'],
            countryCode: 'FR',
            latitude: 49.318,
            longitude: 6.2839,
            aliases: ['8701627', 'FRBNZ'],
            score: 0,
        },
        {
            id: 'f1cbde555f508f9d5ab83601e1cfdecf',
            code: 'urn:trainline:generic:loc:895',
            cityLocal: '',
            city: '',
            defaultLanguage: 'fr',
            locationType: 'station',
            name: 'Metzing',
            properties: [],
            scopes: ['Sncf', 'Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:obb',
                'urn:trainline:connection:pao_sncf',
            ],
            countryCode: 'FR',
            latitude: 49.1,
            longitude: 6.9667,
            aliases: ['8701611', 'FRBSB'],
            score: 0,
        },
        {
            id: '491695c6967d129eef9a90fc914060e8',
            code: 'urn:trainline:generic:loc:16057',
            cityLocal: 'Metzingen',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Metzingen-Neuhausen',
            properties: [],
            scopes: ['Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:db',
                'urn:trainline:connection:db_affiliate',
                'urn:trainline:connection:obb',
            ],
            countryCode: 'DE',
            latitude: 48.5326,
            longitude: 9.3071,
            aliases: ['8070678'],
            score: 0,
        },
        {
            id: '2f3c1258fb4600d77dd22a6c844b7d8d',
            code: 'urn:trainline:generic:loc:36364',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Biel Mett',
            properties: [],
            scopes: ['Obb', 'Cff'],
            connections: [
                'urn:trainline:connection:cff',
                'urn:trainline:connection:obb',
            ],
            countryCode: 'CH',
            latitude: 47.1447,
            longitude: 7.2725,
            aliases: ['8504419'],
            score: 0,
        },
        {
            id: '2bf65a87b845c6659a85aa7d3b52e78e',
            code: 'urn:trainline:generic:loc:11688',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Esslingen-Mettingen',
            properties: [],
            scopes: ['Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:db',
                'urn:trainline:connection:db_affiliate',
                'urn:trainline:connection:obb',
            ],
            countryCode: 'DE',
            latitude: 48.7471,
            longitude: 9.2758,
            aliases: ['8001921'],
            score: 0,
        },
        {
            id: '1713150750ba0e3c5f6347b2a0814395',
            code: 'urn:trainline:generic:loc:36343',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Hüttlingen-Mettendorf',
            properties: [],
            scopes: ['Obb', 'Cff'],
            connections: [
                'urn:trainline:connection:cff',
                'urn:trainline:connection:obb',
            ],
            countryCode: 'CH',
            latitude: 47.5823,
            longitude: 8.9745,
            aliases: ['8506102', 'Huettlingen-Mettendorf'],
            score: 0,
        },
        {
            id: 'f8dd1f3e70da963696052488ba8e22cd',
            code: 'urn:trainline:generic:loc:12285',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Kamen-Methler',
            properties: [],
            scopes: ['Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:db',
                'urn:trainline:connection:db_affiliate',
                'urn:trainline:connection:obb',
            ],
            countryCode: 'DE',
            latitude: 51.5672,
            longitude: 7.6126,
            aliases: ['8003169'],
            score: 0,
        },
        {
            id: 'f4e6e9ce7c4bb5ec411c71b4132dbac2',
            code: 'urn:trainline:generic:loc:28061',
            cityLocal: '',
            city: '',
            defaultLanguage: 'en',
            locationType: 'station',
            name: 'Nove Město nad Metuji',
            properties: [],
            scopes: ['Db', 'DbFull', 'Obb'],
            connections: [
                'urn:trainline:connection:benerail',
                'urn:trainline:connection:obb',
            ],
            countryCode: 'CZ',
            latitude: 50.3534,
            longitude: 16.1378,
            aliases: ['5400281', 'CZALM'],
            score: 0,
        },
    ],
    restOfWorld: [],
    createdAt: 1604461288,
}

// Generated from Firefox 08/11/2020 13:58
/*
fetch("https://www.thetrainline.com/api/locations-search/v1/search?searchTerm=xyz&lang=fr&scopes%5B0%5D=atoconly&scopes%5B1%5D=eurostaronly&scopes%5B2%5D=sncf&scopes%5B3%5D=benerail&scopes%5B4%5D=trenitalia&scopes%5B5%5D=renfe&scopes%5B6%5D=ntv&scopes%5B7%5D=busbud&scopes%5B8%5D=flixbus&scopes%5B9%5D=dbfull&scopes%5B10%5D=ouigo&scopes%5B11%5D=obb&scopes%5B12%5D=cff&scopes%5B13%5D=westbahn&scopes%5B14%5D=distribusion&scopes%5B15%5D=busbudfull&size=30&country=FR&locationType%5B0%5D=station&locationType%5B1%5D=stationGroup&locationType%5B2%5D=city", {
    "headers": {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:82.0) Gecko/20100101 Firefox/82.0",
        "Accept": "application/json",
        "Accept-Language": "fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3",
        "Pragma": "no-cache",
        "Cache-Control": "no-cache"
    },
    "referrer": "https://www.thetrainline.com/book/results?origin=f5504cde449b725d50296f244eb9da5e&destination=69b59b70a73b72302eff45627aeef377&outwardDate=2020-10-24T16%3A45%3A00&outwardDateType=departAfter&journeySearchType=single&passengers[]=1993-10-24|7d5827a9-6190-4524-bbb2-06ec89e9c58b&selectedOutward=xOIFOA1ZD6E%3D%3A2Tl4KirUWCk%3D%3AStandard",
    "method": "GET",
    "mode": "cors"
});
*/
export const locationPotJSONResponseWhenTermIsXYZ = {
    requestedCountry: [],
    restOfWorld: [],
    createdAt: 1604840230,
}