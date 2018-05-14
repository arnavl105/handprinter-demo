# Handprinter React Rewrite

A rewrite of the Handprinter homepage which can hopefully be branched off into the whole app.  

## Getting Started

Running `npm install` will install all the dependencies 

## Deployment

Currently sits on a GoDaddy hosting box. Running a simple `npm run build` will generate everything in the build folder which you can then copy over to any HTTP server.

## Documentation

In this repo you can find the wireframes and style guide for the project under the `/doc` directory. The wireframes include the redesign for the homepage as well as the proposed redesign of the app itself. It also includes the wireframes for a proposed onboarding process. 

Also in the docs are the original write ups on the handprinter personas as well as the 30 base action ideas with their corresponding LCA values. These also exist in the `testData.js` file but not as nicely formatted.

## Work to be done

* Authentication layer
* User Dashboard
* Node backend/api
* Onboarding process

## Code Explained

As far as actual pages go there is only the homepage currently. Under the hood however there are reducers and actions based around the core functions of the Handprinter app. 

Action Ideas are a data structure that gets passed through the reducer and can be taken by the user. There is built in functionality to read the time strings of any of these action ideas e.g. "5 minutes" and add that to the users 'Net Positivity Timer'. These are currently populated through the `testData.js` file but would ideally be fetched from a backend/database written in Node.

Initally the homepage spawned random ideas and had a countdown timer for Net Positivity but these features were decided against so a lot of the code still exists even though it is not being used.

## Built With

* React and Redux

## Authors

* **Arnav Luthra** - *Initial work* 

