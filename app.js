const imessage = require('osa-imessage')
const cmd = require('node-cmd')

console.log('Loading...')

let getName = (handle) => {
  return cmd.run(`osascript -e 'tell app "Contacts" to name of people where vcard contains "` + handle + `"'`)
}

console.log('Done!')

console.log('Listening for Messages.')

imessage.listen().on('message', (msg) => {
  if (!msg.fromMe) {
    console.log(msg.handle + ' said "' + msg.text + '"')
  }
})



