const imessage = require('osa-imessage')
const osascript = require('node-osascript')

console.log('Loading...')

let getName = (handle) => {
  let name = osascript.execute(`osascript -e 'tell app "Contacts" to name of people where vcard contains "${handle}"'`, function(err, result, raw) {
    if (err) return console.error(err)
      return result
  })
  return name
}

console.log('Done!')

console.log('Listening for Messages.')

imessage.listen().on('message', (msg) => {
  if (msg) {
    console.log(`${getName(msg.handle)}, or ${msg.handle}, said "${msg.text}"`)
  }
})



