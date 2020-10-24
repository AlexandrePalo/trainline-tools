const { searchStation } = require('../dist/bundle')

searchStation('Met').then((stations) => console.log(stations))
