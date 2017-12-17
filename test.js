const osascript = require('node-osascript')

let handlevar = 'rdensmore365@gmail.com'

let getName = (handle) => {
  osascript.execute(`tell app "Contacts" to name of people where vcard contains "${handle}"`, (err, result, raw) => {
    if (err) return console.error(err)
    return result
  })
}

console.log(getName(handlevar))
