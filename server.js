const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.get('/', function (req, res)
{
  app.use(express.static(__dirname + "/assets"));
  res.sendFile(__dirname + '/assets/index.html');
})

app.listen(port, function() {
    console.log("Server start!")
})
