console.log("hello world")

var slugify = require('slugify')

let a =slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b=slugify('some string ath4 434 #$%^#$ theid ', '_')  // some_string
console.log(b)