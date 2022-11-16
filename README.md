# nodejs-tut-dave-gray

This repo contains the code written while following along [Dave Gray's Nodejs](https://www.youtube.com/watch?v=f2EqECiTBL8) tutorial. They are divided into different chapters corresponding to the different chapters of the course.

### [Chapter 1: Start Here [01TUT]](https://github.com/sthitaprajna-mishra/nodejs-tut-dave-gray/tree/master/01TUT)

- Basic introduction about 2 CommonJS modules - os and path
- How to export and import local modules

### [Chapter 2: Read and Write Files [02TUT]](https://github.com/sthitaprajna-mishra/nodejs-tut-dave-gray/tree/master/02TUT)

- Intro to CommonJS module - fs (filesystem)
- readFile, writeFile, appendFile, rename, unlink (delete)
- Handle uncaught exceptions
- Streams and pipe

### [Chapter 3: NPM Modules [03TUT]](https://github.com/sthitaprajna-mishra/nodejs-tut-dave-gray/tree/master/03TUT)

- npm packages
- date-fns, uuid, nodemon

### [Chapter 4: Event Emitter [04TUT]](https://github.com/sthitaprajna-mishra/nodejs-tut-dave-gray/tree/master/04TUT)

- CommonJS module - events, to emit and listen for events emitted
- Create a logger using date-fns, uuid, and events

### [Chapter 5: Build a Web Server [05TUT]](https://github.com/sthitaprajna-mishra/nodejs-tut-dave-gray/tree/master/05TUT)

- CommonJS module - http
- How to set up a basic server using raw NodeJS

### [Chapter 6: Intro to Express JS framework [06TUT]](https://github.com/sthitaprajna-mishra/nodejs-tut-dave-gray/tree/master/06TUT)

- Intro to Express JS framework
- Routing with the help of regex
- Serve html files and raw text
- Chain route handlers

### [Chapter 7: Middleware [07TUT]](https://github.com/sthitaprajna-mishra/nodejs-tut-dave-gray/tree/master/07TUT)

- 3 types of middleware - built-in, custom, 3rd party
- Built-in middlware examples - handle form data, handle json, serve static files
- Custom - user defined routes
- 3rd party - CORS
- CORS (Cross Origin Resource Sharing)
- How to add IPs in whitelist to allow access using CORS
- Integrating logger for handling requests and logging errors with server

### [Chapter 8: Routing [08TUT]](https://github.com/sthitaprajna-mishra/nodejs-tut-dave-gray/tree/master/08TUT)

- Created file structure for routes
- Used express.Router() for routing
- Created basic GET,POST,PUT,DELETE routes
- Used ThunderClient as an alternative to Postman

### [Chapter 9: Routing [09TUT]](https://github.com/sthitaprajna-mishra/nodejs-tut-dave-gray/tree/master/09TUT)

- Cleaned up code a bit more
- Created config file for CORS
- Wrote logic inside controller for different API methods

### [Chapter 10: Authentication [10TUT]](https://github.com/sthitaprajna-mishra/nodejs-tut-dave-gray/tree/master/10TUT)

- Intro to bcrypt - a hashing package to store passwords securely
- Created endpoints for new route and added controllers

### [Chapter 11: JWT Auth [11TUT]](https://github.com/sthitaprajna-mishra/nodejs-tut-dave-gray/tree/master/11TUT)

- JWT Auth
- Access token and Refresh token
