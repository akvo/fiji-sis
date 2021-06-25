# Prototype: Fiji REDD+ SIS

# Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Production

## System requirements

* Web server - [nginx](https://nginx.org/en/) or [Apache HTTP Server](https://httpd.apache.org/)
* [Node.js](https://nginx.org/en/) and [Yarn](https://classic.yarnpkg.com/en/) for building the code
  and producing a `build/` folder

## Steps

1. Execute `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

2. Copy the content of the `build` folder to the to the webserver's root directory

3. Your application is ready to be served
