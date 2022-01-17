const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const host = "192.168.0.101";
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/helloworld', (req, res) => {
    res.send('Hello World!');
});

app.post('/notify', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.listen(port, host, () => {
    console.log(`cli-nodejs-api listening at http://${host}:${port}`)
});