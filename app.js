const http = require('http');
const express = require('express');
const cors = require('cors');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(cors());
app.use(express.json())

app.post('/sms', (req, res) => {
    console.log(req.body);
    const twiml = new MessagingResponse();
    twiml.message(req.body.text);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());

    // res.json(twiml.toString())
});


app.listen(1337, () => {
    console.log('Express server listening on port 1337');
});
