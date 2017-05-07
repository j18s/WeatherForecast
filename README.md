# WeatherForecast

### Hosting of solution

* The solution is hosted at Microsoft Azure public cloud.
* The server is running via background process.
* I hosted it at Ubuntu Server Virtual Machine.
* URL of site: http://myweatherforecast.southindia.cloudapp.azure.com/
* This solution is accessible at port 80.
* The other open port is 22 for SSH for admin (myself).

### Run tests
* Its very simple to run tests by firing below command.
~~~~
npm test
~~~~
* For testing I have used following
  * Mocha is a test framework running on node.js)
  * Chai is a BDD / TDD assertion library 
  * Nock is an HTTP mocking and expectations library for Node.js.
  * Supertest is a library written to test HTTP calls in node.js.
  

### Run 
* Below command is running at the Azure Ubuntu Server:
~~~~
npm start
~~~~
  * Internally `npm start` is doing two things. Setting up production environment variable and running the code.
  ~~~~
  NODE_ENV=production node ./bin/www
  ~~~~
  * By default code sets NODE_ENV variable to `development`. Hence, to run locally change as below:
  ~~~~
  node ./bin/www
  ~~~~
  
  
