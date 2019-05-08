# express-mongo-jwt

Registration and login with Express, Mongo and Node technologies. Also used on this project: jwt, passport, passport-jwt, bcrypt, validator, body-parser.

## Usage 

After downloading the project, enter the root folder with terminal and use 

```bash
npm install
```

to install neccessary dependencies. 

To start the server use: 

```bash
npm start
```

Once the server is running, you can use Postman to test the api. You can find the Postman collection in the root folder of this project.

## NOTE ABOUT REGISTRATION

Please note that your passwords are hashed in the database with bcrypt! Just in case, use dummy passwords while testing this project.