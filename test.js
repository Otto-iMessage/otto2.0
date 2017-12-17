const applescript = require('applescript')

let handlevar = 'rdensmore365@gmail.com'
let name = []
console.log(handlevar)

let getName = (handle) => {
  applescript.execString(`tell app "Contacts" to name of people where vcard contains "${handle}"`, (err, rtn) => {
    if (err) return console.log(err)
    return rtn[0]
  })
}

console.log(getName(handlevar))
