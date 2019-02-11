# RESTfull Api Node.js Starter Kit
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT) [![Maintainability](https://api.codeclimate.com/v1/badges/4286f11a88200108d3f8/maintainability)](https://codeclimate.com/github/necheporenko/restfull-api-nodejs-starter-kit/maintainability)

A boilerplate for Node.js, Express, Mongoose, JWT Authentication, mLab, Nodemon, and Babel.

## Getting Started

Clone the repo:

```sh
git clone https://github.com/necheporenko/restfull-api-nodejs-starter-kit.git
cd restfull-api-nodejs-starter-kit
```

Install yarn:

```js
npm install -g yarn
```

Install dependencies:

```sh
yarn
```

Start server:

```sh
yarn run dev
```

## Configuration

Default configuration

```js
// Please note, doesn't store your credentials in open access
// .env
PORT = <PUT_YOUR_PORT_HERE>;
MONGODB_URL = <PUT_YOUR_MONGODB_URL_HERE>;
SECRET = <PUT_YOUR_SECRET_HERE>;
```

## Directory Structure

```
.
├── server
│   ├── config
│   ├── controllers
│   ├── models
│   └── routes
├── .babelrc
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── yarn.lock
```
