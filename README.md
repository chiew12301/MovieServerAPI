Movie Application Simulation
REST API

## Tasks

1. Create a HTTP server to service requests from clients​
2. Create a db.json file to hold the REST resource data ​
3. Run the db.json file as a server on a specified port​
4. Define all http methods like GET, POST, PUT and DELETE​
5. Define routes to​
    - Get all the movies​
    - Get a movie by movieId​
    - Create a new movie and post the data​
    - Update the details of a specific movie​
    - Delete a movie by movieId​
6. Test the output in the REST Client Postman​


# Instructions

1. Download and unzip the boilerplate code.
2. Run the command `npm install` to install the dependencies.
3. Open the boilerplate code in VSCode to develop the solution.
4. The resource data is present in the **data** folder as **movies.json** file
5. Write the logic for the application in the **moviesService.js** file in the **src** folder
6. Write logic to read the request body data in the **utils.js** file in the **src** folder
7. Create the server in the **app.js** file and use the functions of the **moviesService.js**

## Running the code

- Run the `json-server -w data/movies.json` command
- Execute the `npm start` command to start the application
- Test all REST end points on **POSTMAN**

## Testing the application

- Run the test scripts available under **src/test** by giving `npm run test` command in the terminal to test locally.
- Refactor the solution to ensure all test cases are passing.
- Zip the solution code with the name same as assignment name.
- Upload the zipped solution for submission.
