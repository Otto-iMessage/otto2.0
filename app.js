const imessage = require('osa-imessage')
const contacts = require('/Users/Ryan/lib/js/contacts.js')

console.log('Loading...')

let getName = (handle) => {
  return contacts[handle]
}

console.log('Done!')

console.log('Listening for Messages.')

imessage.listen().on('message', (msg) => {
  if (msg) {
    console.log(`${getName(msg.handle)}, or ${msg.handle}, said "${msg.text}"`)
  }
})



