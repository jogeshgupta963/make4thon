// const http = require('http');
const express = require('express');
const cors = require('cors');
const path = require('path');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(cors());
app.use(express.json())
app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/img', express.static(__dirname + '/img'))

app.post('/sms', (req, res) => {
    console.log(req.body);
    const twiml = new MessagingResponse();
    // twiml.message(req.body.text);
    twiml.message(req.body.text);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    // res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());

    // res.json(twiml.toString())
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/login.html'))
})
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})
app.get('/maps', (req, res) => {
    res.sendFile(path.join(__dirname, '/maps.html'))
})
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/contact.html'))
})
app.get('/supplies', (req, res) => {
    res.sendFile(path.join(__dirname, '/contact.html'))
})
app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, '/chat.html'))
})


app.listen(1337, () => {
    console.log('Express server listening on port 1337');
});
