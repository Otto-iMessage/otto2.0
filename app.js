const imessage = require('osa-imessage')
const osascript = require('node-osascript')

console.log('Loading...')

let getName = (handle) => {
	osascript.execute(`tell app "Contacts" to name of people where vcard contains "${handle}"`, (err, result, raw) => {
  	if (err) return console.error(err)
  	return result[0]
	})
}

console.log('Done!')

console.log('Listening for Messages.')

imessage.listen().on('message', (msg) => {
  if (msg) {
    console.log(`${getName(msg.handle)}, or ${msg.handle}, said "${msg.text}"`)
  }
})



