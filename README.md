

# Backend Capstone Project
1. First **install npm dependencies** of **express** and **mongoose** using `npm install` command.
2. **Start the backend server** using `npm start` or `node src/index.js` command.
3. **We are using MONGODB CLOUD for database**

## HTTP request methods used in the project
1. GET http://localhost:3000/ → The client will see the “Welcome to page” message which is used to verify that application is working properly.

2. GET http://localhost:3000/trip → When the user hit this, **endpoint /trip**, the client will **get an array of all trip details in JSON format** from the database where the data is stored in local MongoDB database.

3. GET http://localhost:3000/state → When the user hit this, **endpoint /state** the client will to get an array of all data in JSON format with ** **All the  State and their district names**  ** from the database, where the data is stored in local MongoDB database.

4. GET http://localhost:3000/bus → When the user hit this, **endpoint /bus** the client will to get an array of all data in JSON format with ** **the user wil get all the bus operaters details** ** from the database, where the data is stored in local MongoDB database.

5. GET http://localhost:3000/something → when the user hit the unwanted route which is not mentioned above (which is used to handle all other requests), they will get an error message like Route not found in JSON format with an 404 error status code.

## Dependencies
The following dependencies are required to run the Get YouTube Subscribers :
```bash
NodeJs
ExpressJs
Mongoose
nodemon
```


##Deployed link of Backend
Click the link -[ (https://backend-api-r2s4.onrender.com/)].

