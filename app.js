const imessage = require('osa-imessage')
const contacts = require('/Users/Ryan/lib/js/contacts.js')

console.log('Loading...')

console.log('Done!')

console.log('Listening for Messages.')

imessage.listen().on('message', async (msg) => {
  if (msg) {
    console.log(`${msg.date}: ${await imessage.nameForHandle(msg.handle)} said "${msg.text}" in group ${msg.group}`)
  }
})



