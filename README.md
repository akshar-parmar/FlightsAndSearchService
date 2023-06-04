# Welcome to Flights Service

## Project Setup
- clone the project on your local
- Execute npm install on the same path as of your root directory of the download project
- Create a `.env` file in the root directory and add the following environment variable
    -  `PORT=3000`
- Inside the src/config folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Once you have added your db config as listed above , go to the src folder from your terminal and execute `npx sequelize db:create`

##DB Design
- Airplane Table
- Flight
- Airport
- City

- A flight belongs to an airplane but one airplane can be used in mutltiple flights
- A city has many airports but one airport belongs to a city
- one airport can have many flights but a flights can have one airport