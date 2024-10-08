const express = require('express');
const session = require('express-session');

const app = express()

const users = []

app.use(express.json())

//middleware verifes incomming cookie is it valid or not
app.use(session({
    secret: 'topsecretuseenvforit', // Secret key for signing session ID cookie.
    resave: false,                   // Do not save session if unmodified.
    saveUninitialized: true,         // Save new sessions even if empty.
    cookie: { secure: true }         // Cookie sent only over HTTPS. disable it to use postman 
}));

// when this route called session middleware create session 
app.get('/', (req, res) => {

    if (!req.session.views) {

        // for the first time views obj is created for user and automatcally cookie of session id send to client
        req.session.views = 1; 
    } else {

        // from cookie we get session id and from session id we can decode how many views we have for that user
        req.session.views++; 
    }
    res.send(` Your Number of views: ${req.session.views}`);
});


//dummy login route
app.post('/login', (req, res) => {

    const { username, password } = req.body;


    if (username === 'guri' && password === 'pass') {

        req.session.userId = username; // Store user info in session

        // session id is created autmatically and sent back to user as form of cookies under connect.sid

        console.log(req.session)

        res.send('Logged in!');

        return

    }

    res.send("passwrod  not correct")
});


// Protected route
app.get('/me', (req, res) => {

    if (req.session.userId) {
        res.send(`Welcome, ${req.session.userId}!`);
    } else {
        res.status(401).send('Please log in first');
    }
});

app.listen(3000)





