# nosql-socialnetwork-maxblaul
Max's NOSQL social network application

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contents
  * [Description](#Description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Repo Link](#repolink)
  * [Screen Recording Link](#screenrecording)
  * [Resources](#resources)

## Description

This is a NOSQL social network Node.js application. It allows a user to perform CRUD operations on a social network data model using a NoSQL db. The data models include friends, users, thoughts, and reaction data models. They can all be retrieved by ID or all of them. This API is built using Node.js and Mongoose, and it provides an easy way to handle social networking without the rigidness of other relational databases.

## Installation

To install this app simply clone the repo from Github into your terminal or Gitbash. You will also have to run `npm i` to install all of the necesarry packages. 

## Usage

To use this application, you have to run `npm i` in the terminal. Next make sure the .gitignore has `.env` somewhere in it. To start the server run `npm server.js` in the terminal. Use Insomnia to test http://localhost:3001 with the following route end points API GET, POST, PUT, and DELETE routes for friends, thoughts, reactions and users.

These are all of the routes:
GET /api/users - get all users
GET /api/users/:userId - get a single user by ID
POST /api/users - create a new user
PUT /api/users/:userId - update a user by ID
DELETE /api/users/:userId - delete a user by ID
GET /api/thought - get all thought
GET /api/thought/:thoughtId - get a single thought by ID
POST /api/thought - create a new thought
PUT /api/thought/:thoughtId - update a thought by ID
DELETE /api/thought/:thoughtId - delete a thought by ID
POST /api/thought/:thoughtId/reactions - add a reaction to a thought
DELETE /api/thought/:thoughtId/reactions/:reactionId - remove reaction from a thought
POST /api/users/:userId/friends/:friendId - add a friend to a user's friend list
DELETE /api/users/:userId/friends/:friendId - remove a friend from a user's friend list

## Licenses

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributing

I don't think there is anything to contribute to this but if you want to, please fork it.

## Tests

Testing of the routes is shown below in the screen recording. I am aware that the Thought and Reaction routes don't work. I am going to ask a TA about that in office hours next class. The video stops at the CREATE Thought route becuase there really isn't anything else to show if that particular route is not working.

## Questions

Questions may be directed to Max Blaul via email at blaulmax@gmail.com.

## Repo Link

https://github.com/maxblaul/nosql-socialnetwork-maxblaul

## Screen Recording Link

UPDATED:

https://watch.screencastify.com/v/ovlzgjrZPQFQBW5D0s2h

## Resources

ChatGPT for syntax hanling and errors, Google and Fullstack Blog for logic and tips of file structure. 
