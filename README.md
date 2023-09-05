

# Backend Capstone Project
1. First **install npm dependencies** of **express** and **mongoose** using `npm install` command.
2. **Start the backend server** using `npm start` or `node src/index.js` command.
3. **We are using MONGODB CLOUD for database**

## HTTP request methods used in the project
1. GET http://localhost:3000/ → The client will see the “(Ashen-Karan)” message which is used to verify that application is working properly.

2. GET http://localhost:3000/subscribers → When the user hit this, **endpoint /subscribers**, the client will **get an array of all subscribers in JSON format** from the database where the data is stored in local MongoDB database.

3. GET http://localhost:3000/subscribers/names →When the user hit this, endpoint **/subscribers/names** the client will to get an array of all subscribers in JSON format with **only name and subscribed Channel fields** from the database, where the data is stored in local MongoDB database.

4. GET http://localhost:3000/subscribers/:id → When the user hit this, endpoint **/subscribers/:id** in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular **user’s details like name, subscribed Channel and subscribed Date** from the database, where the data is stored in local MongoDB database.

5. GET http://localhost:3000/subscribers/:id → When the client gives **incorrect USER’S ID instead of correct USER’S ID** (where the ID does not match) which is stored in database, the **Client will get an Error message like“ Subscriber doesn't exist with the given _id: sdijvrbv” in JSON format with 400 error status code.**

6. GET http://localhost:3000/something → when the user hit the unwanted route which is not mentioned above (which is used to handle all other requests), they will get an error message like Route not found in JSON format with an 404 error status code.

## Dependencies
The following dependencies are required to run the Get YouTube Subscribers :
```bash
NodeJs
ExpressJs
Mongoose
nodemon
```



## Demo
[Click here to Visit Site](https://backend-prc-ashen78.onrender.com/).

