// Test file for conversion of handles to names, by searching your
// address book. Doesn't work;
// If you console.log(rtn[0]) in the function, you get your name, but
// you can't do much with it. If it returns rtn[0], though, you just
// get 'undefined'. It's very annoying.

const applescript = require('applescript')

let handlevar = '<email/phonenumber>'
console.log(handlevar)

let getName = (handle) => {
  applescript.execString(`tell app "Contacts" to name of people where vcard contains "${handle}"`, (err, rtn) => {
    if (err) return console.log(err)
    return rtn[0]
  })
}

console.log(getName(handlevar)) // Returns 'undefined' pls help
