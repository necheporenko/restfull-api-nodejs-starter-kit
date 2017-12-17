# RESTfull Api Node.js Starter Kit

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
// server/config/config.js
export const PORT = process.env.PORT || <PUT_YOUR_PORT_HERE>;;
export const MONGODB_URL = process.env.MONGODB_URL || <PUT_YOUR_MONGODB_URL_HERE>;;
export const SECRET = process.env.SECRET || <PUT_YOUR_SECRET_HERE>;
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
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── server.js
└── yarn.lock
```