# React building proccess

## HTML request

- Browser makes a first request to the server
- Server answer with an index.html file
- Browser makes a new request
- Server answer with the bundle file

## App build flow

- Babel: tool to turn JSX into normal JS code
- Webpack: Tool to merge all project files into a single file
- Bundle.js: final file which is sent to the browser

## Required app files

- index.js: first file that gets executed when our app runs
- index.html: skeleton for the React app
- package.json: lists dependencies our app needs
- package-lock.json: lists dependencies our app needs
- node-modules: contains dependencies our app needs