# otto2.0

written in node reeeeee

A rewrite of @retep's Otto iMessages bot in NodeJS

We're just doing basic framework and testing right now. I will be
doing a bunch of work on this soon enough, becuase exams are coming up
in a few days and I don't feel like studying. 

# Only runs on MacOS!
We're using MacOS 10.13 High Sierra

# Install
`npm install` should be fine


- We use [osa-imessage](https://www.npmjs.com/package/osa-imessage) to
do the things, it seems pretty great :ok_hand:
- However, after exploring the chat database, maybe we will have to
  write our own code to handle attachments and such. Hmmm.

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


