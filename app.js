const imessage = require('osa-imessage')
const cmd = require('node-cmd')

console.log('Loading...')

let getName = (handle) => {
  let name = cmd.run(`osascript -e 'tell app "Contacts" to name of people where vcard contains "${handle}"'`)[0]
  return name
}

console.log('Done!')

console.log('Listening for Messages.')

imessage.listen().on('message', (msg) => {
  if (msg) {
    console.log(`${getName(msg.handle)}, or ${msg.handle}, said "${msg.text}"`)
  }
})



