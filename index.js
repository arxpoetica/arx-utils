// string
export const camelToKebab = str => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
export const kebabToCamel = str => str.replace(/-([a-z])/g, $1 => $1[1].toUpperCase())
export const hyphenate = str => str.replace(/[^a-z0-9+]+/gi, ' ').trim().replace(/ /g, '-')

// object
export const fastClone = obj => JSON.parse(JSON.stringify(obj)) // https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript/5344074#5344074

// array
export const unique = arr => arr.filter((value, index, self) => self.indexOf(value) === index)

// maths
export const random = (lower, upper) => {
	// see: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
	lower = Math.ceil(lower)
	upper = Math.floor(upper)
	return Math.floor(Math.random() * (upper - lower + 1)) + lower
}

// date/time
import dayjs from 'dayjs'
export const randomTimestamp = () => dayjs()
	.set('date', random(0, 27))
	.set('month', random(0, 11))
	.set('year', random(2013, 2018))
	.set('hour', random(1, 24))
	.set('minute', random(0, 59))
	.set('second', random(0, 59))
export const datestamp = datetime => dayjs(datetime).format('MMMM DD, YYYY')
export const timestamp = datetime => dayjs(datetime).format('h:mma')
// TODO: 2 seconds ago, 20 seconds ago, 34 seconds ago, 1 minute ago, 55 minutes ago, 2 hours ago, 23 hours ago, 1 day ago, 2 days ago, 3 days ago, 7 days ago, March 19
export const formattedstamp = datetime => `Posted ${datestamp(datetime)} at ${timestamp(datetime)}`

// NOTE: might write my own helpers?
// https://medium.com/@abustamam/for-loops-vs-foreach-in-javascript-7a977278a39e
