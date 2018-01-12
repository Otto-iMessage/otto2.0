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

sendAttachment('handle', "~/Desktop/Screen\ Shot\ 2017-04-12\ at\ 3.04.45\ PM.png")
