# otto2.0

A rewrite of @retep's Otto iMessages bot in NodeJS

# Only runs on MacOS!
We're using MacOS 10.13 High Sierra

# Install
`npm install` should be fine


- We use [osa-imessage](https://www.npmjs.com/package/osa-imessage) to
do the things, it seems pretty great :ok_hand:

# TO DO
- [ ] Get basic framework ready
  - [x] Test out sending/receiving module
  - [x] Convert handles to real names *somehow* (Creator of
    `osa-imessage` actually added this in lol)
  - [x] Test out importing external files
  - [ ] Allow use of library.js for all functions that Otto can do
  - [ ] Configurations/settings also in library.js (Location of
    contacts library, etc.)
  - [ ] Allow logging, in a separate file, as an option in library.js
    config section
  - [ ] Support for multiple DMs and/or group chats
- [ ] Write all functions
- [ ] Finish up, allow easy adding of custom functions


# Peter's Wishlist
- [ ] Standard Function Format
- [ ] library.js
  - [ ] split into multiple subcategories if too big
- [ ] config.json
  - [ ] configurate which functions for which group chats
  - [ ] create trigger to function mappings
  - [ ] settings
- [ ] main.js doesn't need to be modified later in time

```json
"settings":{},
"chats":{
"CHATID":
{"trigger":function}
}
```
