// All this is to test sending attachments.
// Send function is copied from osa-imessage, all credit goes there.
// Link in README.md

const assert = require('assert')
const osa = require('osa2')

let sendAttachment = (handle, message) => {
  assert(typeof handle == 'string', 'handle must be a string')
  return osa((handle, message) => {
    const Messages = Application('Messages')

    let target

    try {
      target = Messages.buddies.whose({ handle: handle })[0]
    } catch (e) {}

    try {
      target = Messages.textChats.byId('iMessage;+;' + handle)()
    } catch (e) {}

    try {
      Messages.send(Path(message), { to: target })
    } catch (e) {
      throw new Error(e)
    }
  })(handle, message)
}

const imessage = require('osa-imessage')

console.log('Loading...')

console.log('Done!')

console.log('Listening for Messages.')

imessage.listen().on('message', async (msg) => {
  if (msg) {
    console.log(`${msg.date}: ${await imessage.nameForHandle(msg.handle)} said "${msg.text}" in group ${msg.group}`)
    sendAttachment('+17048801223', '~/Desktop/IMG_9551.JPG')
  }
})

