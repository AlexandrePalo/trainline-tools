const ora = require('ora')
const chalk = require('chalk')
const { searchLocations } = require('../dist/bundle')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

console.log(chalk`
    {bold TRAINLINE TOOLS}
    {bold Search Location objects}
`)
readline.question(`Enter term: `, (term) => {
    console.log(chalk`
    Search Locations objects matching {red ${term}}
    `)

    const spinner = ora('Loading data').start()
    searchLocations(term).then((data) => {
        spinner.stop()
        console.log(chalk`
        {red ${data.length}} location${data.length > 1 && 's'} found!
        `)
        console.log(
            chalk`${data.slice(0, 5).reduce((displayed, l, i) => {
                if (i === 4 && data.length > 5) {
                    return `${displayed}, ${l.name}, and more...`
                } else if (i > 0) {
                    return `${displayed}, ${l.name}`
                } else {
                    return l.name
                }
            }, '')}`
        )
    })
})
