# Backend Server application 

The application is a backend application, to receive data from client and insert data in the Database.

## Built with
TypesScript
ExpressJS
MONGODB

**Prerequisites**
Below are the prerequisites required to run the application.

1. VScode as an editor.
2. npm install
3. MONGODB Local installation

**Installation**
Below are the steps that could be used to setup the applciation locally.

1. Clone the repo : https://github.com/GouthamiMatavalam/app-server.git
3. Install NPM packages : npm install
4. Enter your Mongo DB URLL in api_links
const MONGO_DB_URL = 'ENTER YOUR DB';

Note :
The code also integrates with Front end application, to receive the data.
Please follow the instructions available for Frontend service setup available at - https://github.com/GouthamiMatavalam/movie-library-app/blob/master/README.md

After starting application, application would be running locally in the listener port. Provided in index.js, PORT.
