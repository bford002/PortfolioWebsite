const express = require('express');
const session = require('express-session');
const path = require('path');


const app = express();


//  MIDDLEWARE  //

const CLIENT_PATH = path.resolve(__dirname, '../client/index.html');

app.use(express.json());
app.use(express.urlencoded({  extended: true }));
app.use(express.static(CLIENT_PATH));


app.get('/*', function (req, res) {
  res.sendFile(
    path.join(__dirname, '../client/index.html'),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server is listening at localhost:${port}`);
});
