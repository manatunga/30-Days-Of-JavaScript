let year = prompt('Enter a year:')
let month = prompt('Enter a month:').toLowerCase()

if (month == 'february') {
    if (year % 4 == 0) {
        console.log(`February in ${year} has 29 days.`)
    } else {
        console.log(`February in ${year} has 28 days.`)
    }
} else if (
    month == 'april' || month == 'june' || month == 'august' || month == 'september' || month == 'november'
) {
    console.log(`${month.charAt(0).toUpperCase()} in ${year} has 30 days.`)
} else {
    console.log(`${month.charAt(0).toUpperCase()} in ${year} has 31 days.`)
}