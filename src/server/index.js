const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require("node-fetch")

const app = express()

app.use(express.static('dist'))

console.log(__dirname)


//API setup
const baseURl = 'http://api.meaningcloud.com/sentiment-2.1';
const API_KEY = process.env.API_KEY 
console.log(`Your API key is ${process.env.API_KEY}`);


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});

app.post('/api', async (req, res) => {
    const apiURL = `${baseURL}key=${apiKey}$url=${req.body.url}$lang=en`;
  
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    res.send(data);

})
    app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
