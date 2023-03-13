# API to create users using MongoDB

## How to run

To run the API, you need to firts install the dependencies using: `npm install`
Maybe you will need to run the following command too: `npm install --save has-flag`

After that, run: `npm run start` to start the server. Port: 3000

Then you can go to you Postman or the browser and use `localhost:3000/api` to use the routes.

## Routes

This API has the following routes:
 - '/' GET - get all users
 - '/' POST - create a user (must have body: {
  email: "asasa@asas.com",
  fName: "sasasas",
  lName: "asasasa",
  avatar: "asasasa"
 })
 - '/:userId' GET - get info from a specific user (the ID will be shown when the user is created)
 - '/:userId/avatar' GET - get the avatar and other info
 - '/:userId' PUT - update the user info (must have body: {
  email: "asasa@asas.com",
  fName: "sasasas",
  lName: "asasasa",
  avatar: "asasasa"
 })
 - '/:userId' DELETE - delete the user
 - '/userId/avatar' DETELE - delete avatar and other info

## Tests

There is only 1 test to run, and the commando you will use is: `npm run test`