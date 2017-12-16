const osascript = require('node-osascript')

let handle = 'rdensmore365@gmail.com'

osascript.execute(`tell app "Contacts" to name of people where vcard contains "${handle}"`, (err, result, raw) => {
  if (err) return console.error(err)
  console.log(result[0])
})
