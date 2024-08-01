
/***
 * 
 *         EXPRESS SERVER
 * 
 ***/


// reference https://www.npmjs.com/package/express


import express from "express";

import { shoesRouter } from "./shoes/shoes.router"

/** 
 *  IMPORT FOR ROUTERS
import { shoesRouter } from "./shoes/shoes.router"
import { customersRouter } from "./customers/customers.router"
import { ordersRouter } from "./orders/orders.router"
*/

//Bring in the express server and create application
const express = require('express');

// Establish Port
// Specify to pull PORT from environment OR if unavailable, default to PORT 3000
const PORT = process.env.PORT || 3000;

// Creates an Express application (and many other objects from this application object)
const app = express();

// register routes
const apiRouter = express.Router();

// Shoes router
apiRouter.use("/shoes", shoesRouter);


export const routes = express.Router();
routes.use("/api", apiRouter);
// ordersRouter.get("/:id", async(req, res)) >>> REST VERB

// success message
routes.get("/", (req, res) => {
  res.status(200).send("<h1>Server is ready!</h1>");
});


// pull module info
let shoeInfo = require('./info/shoeInfo');

// bring in export in case of errors
// let errorHelper = require('./helpers/errorHelpers');

// use the express Router object
const router = express.Router();

//Configure middleware to support JSON data parsing in request object
// support passing through JSON data via body of data
app.use(express.json());


// variable holds info pulling from module
// let shoes = shoeInfo.get();


// Create GET to return a list of all shoes
router.get('/', function (req, res, next) {

  // if goes to get and returns valid request, return 200 response code to signify success
    shoeInfo.get(function (data) {
        res.status(200).json({
            "status":200,
            "statusText": "OK",
            "message": "All shoes retrieved.",
            "data":data
        });
    }, function(err) {
        next(err);
    });
});



// Create GET/search?id=n&name=str to search for shoes by 'id' and/or 'name'
router.get('/search', function (req, res, next) {
  let searchObject = {
    "id": req.query.id,
    "name": req.query.name,
    "minbid": req.query.minbid
  };

  // go through the shoe JSON object and search for requested data
  shoeInfo.search(searchObject, function (data) {
    // successfully retrieving data will display 200 response with message as specified 
    res.status(200).json({
      "status": 200,
      "statusText": "OK",
      "message": "All shoes retrieved.",
      "data": data
    });
  }, function (err) {
    next(err);
  });
});




// Create GET/ID to return a single shoe
// map ":id" parameter to id of json for get request
router.get('/:id', function (req, res, next) {
  // dynamic id parameter 
    shoeInfo.getById(req.params.id, function (data) {
      // if real shoe object exists, 200 response
      if (data) {
        res.status(200).json({
          "status": 200,
          "statusText": "OK",
          "message": "Single pair of shoes retrieved.",
          "data": data
        });
      }
      // if object does not exist, create 404 NOT FOUND 
      else {
        res.status(404).send({
          "status": 404,
          "statusText": "Not Found",
          "message": "The pair '" + req.params.id + "' could not be found.",
          "error": {

            // code property established stating NOT_FOUND
            "code": "NOT_FOUND",
            "message": "The pair '" + req.params.id + "' could not be found."
          }
        });
      }
    }, function (err) {
      next(err);
    });
  });


 

// Configure router so all routes are prefixed with /api/v1
app.use('/api/', router);
// ALL REST APIs in this server are called:
// https://localhost:5000/api




// ADD EXCEPTION HANDLING
// EXCEPTION HANDLING NEEDS TO BE LAST, BEFORE SERVER APP

// 4 PARAMETERS, FIRST BEING ERROR OBJECT
app.use(function(err, req, res, next) {
  res.status(500).json({
    // OVERRIDE STANDARD ERROR OBJECT WITH OUR OWN
    "status": 500,
    "statusText": "Internal Server Error",
    "message": err.message,
    "error": {
      "code": "INTERNAL_SERVER_ERROR",
      "message": err.message
    }
  });
});




// Create Server to listen on port 3000 for web page?
let run = app.listen(PORT, (err) => {
  if(!err)
    console.log("Server is running and App is currently listening on port " + PORT + " at http://localhost:3000/")
  else
    console.log("ERROR has occurred: " + err);
  }
);


// Create server to listen on port 5000 to interact with API?
var server = app.listen(5000, function () {
    console.log('Node Server for API is running on http://localhost:5000/api.');
});

