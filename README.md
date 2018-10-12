# MetallicaApp

This project is developed using the MEAN Stack

M-- Mongoose Database

E --- Express for  Web Servers

A--  Angular for Front End

N --- NodeJs for Back End

## Steps to start Front end server- Angular App

- Navigate to gui folder using `cd gui` from root directory

-  Install the required dependencies using `npm install`

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. [ Make ensure you perform the below steps to start the NodeJs server before navigating to the application ]

## Steps to start the backend developed using Nodejs for Microservices'

- Navigate to `server` folder

-To start the authService - Navigate to authService folder using `cd authService`

-Install the required dependenices using `npm install`

- Run `node server.js` to start the auth service

## To start the other microservices namely `Api-gatewayService,TradeService,NotificationService,MarketData Service` , repeat the above steps

-- Navigate to each microservice folder under the `servers` folder and repeat the same steps performed  as done for auth Service

## Other alternative to start the front end and backend servers

-Make ensure all the required dependencies are installed using npm install for both gui and microservices 

-- From root directory, run `npm install`

-- Run `npm run gui-start` to start the front end

-- Run `npm run services-start` to start the back end OR  you can use run `pm2 start server/ecosystem.config.js` to start the servers as well.

## Running unit tests for Angular

Run `ng test`  under the `gui` folder to execute the unit tests via [Karma]


## Running unit tests for NodeJs using Mocha

For unit tests developed using Mocha

- Trade microservice , navigate to `server\tradeService` and run "npm test"

- Auth microservice ,  navigate to `server\authService` and run "npm test"

- Market Data microservice ,  navigate to `server\market-data` and run "npm test"

## Running end-to-end tests via Protractor

- Navigate to `testAutomation_Protractor` folder from the root directory

- Insatall all the req dependencies using `npm install`

- Run npm test to start the tests

- Allure reports are generated for the GUI tests .


