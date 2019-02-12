# Introduction to Express

## Why express?

Writing server logic by hand is complicated!

Alternatives:

- Vanillia Node.js
- fastify
- restana
- koa
- restify
- sails.js

## Getting Started

### Installing Express

```
cd `directory-of-your-choice`
npm init -y
npm install -D nodemon
npm install express
```

### Setup package.json script for development

``` json
{
    ...,
    "scripts": {
        ...,
        "start": "nodemon index",
        ...
    },
    ...
}
```

### Create the index.js file and get ready for development

``` javascript
// index.js

// require express
const express = require('express');
// create an instance of express
const app = express();

// start the server
app.listen(3000);
```

Once you have this file created you are ready for development run the following command from the terminal.

``` bash
npm start
```

## Middleware

Middleware is the backbone of express!

When receiving a request your code will be sent through a series of middleware (functions), until you send a response to the request.

For more information about the request and response object in express checkout.
[https://expressjs.com/en/4x/api.html#req](https://expressjs.com/en/4x/api.html#req)
[https://expressjs.com/en/4x/api.html#res](https://expressjs.com/en/4x/api.html#res)

``` javascript
const express = require('express');
const app = express();

app.use( (req, res, next) => {
    res.send(`<h1> Hello From Express </h1>`);
});

app.listen(3000);
```

Middleware can also be used under specific routes as well.

``` javascript
const express = require('express');
const app = express();

// any url that starts with /home will get the following
app.use( '/home', (req, res, next) => {
    res.send(`<h1> Hello From Express </h1>`);
});
// i.e.
// /home
// /home/page

app.listen(3000);
```

In addition you can have multiple routes go through a single middleware function.

``` javascript
const express = require('express');
const app = express();

// any url that starts with /home or /start will get the following
app.use( ['/home', '/start'], (req, res, next) => {
    res.send(`<h1> Hello From Express </h1>`);
});
// i.e.
// /home
// /home/page
// /start
// /start/page

app.listen(3000);
```

There is also the ability to use existing middleware i.e.

``` javascript
const express = require('express');
const app = express()

// allows you to POST json to the express app
app.use(express.json());
...
```

## Routes

Routing allows you to define the endpoints of your application

``` javascript
...
// When a GET request is sent to /hello endpoint return hello string
app.get('/hello', (req, res) => {
    res.send('world');
});
...
```

``` javascript
...
app.use(express.json());
// When a POST request is sent to the /todos endpoint return a 204
app.post('/todos', (req, res) => {
    const todos = req.body;
    ... //save todos
    res.sendStatus(204)
});
```

``` javascript
// using the express router you can create a router middleware
const express = require('');
const app = express();
const todoRouter = express.Router();

const todos = [];

todoRouter.get('/', (req, res) => {
    res.send(todos);
});

app.use('/todos', todoRouter);
```
### Params

Params allow you to add a dynamic layer to your routing, allowing you to capture information.

``` javascript
// When a request comes in i.e. /todos/1 the 1 becomes a parameter that we can use to perform logic in our route
app.get('/todos/:id', (req, res) => {
    const todos = ...; // get the todos
    res.send(todos[req.params.id])
})
```

### Query Parameters

Query Parameters are additional parameters added to a request that you can take advantage of through the `query` property on the request object.

``` javascript
// When a request comes in i.e. /todos/1?titleOnly=true titleOnly will be a query parameter that you can use to perform additioanl logic in your route
app.get('/todos/:id', (req, res) => {
    const todos = ...; // get the todos

    const todo = todos[req.params.id];
    if(req.query.titleOnly) {
        return res.send(todo.title)
    }
    res.send(todo)
})
```

## Challenge

Create a router for todos 

1. GET /todos
    - returns a list of all todos
2. GET /todos/:id
    - returns a todo with a specific id
3. POST /todos
    - adds a todo
4. PUT /todos/:id
    - updates a todo
4. DELETE /todos/:id
    - remove the todo with a specific id