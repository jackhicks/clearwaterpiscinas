require('dotenv').config();
const cors = require('cors');
var express = require('express');
const bodyParser = require('body-parser');
var app = express();
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const corsOptions = {
  origin: 'http://localhost:5173',
};
const OS_URL = process.env.OS_URL;
const OS_DWP = process.env.OS_DWP;
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.post('/PaymentInfo', function (req, res) {
  fetch(OS_URL + '/PaymentRef', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: OS_DWP,
    },
    method: 'POST',
    body: JSON.stringify(req.body.payment),
  })
    .then(response => {
      console.log(response.status);
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      } else if (response.status === 200) {
        if (response.Updated === 'false') {
          res.status(300);
          return { error: 'Bill not updated' };
        }
      }
      return response.json();
    })
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(400).send(error);
    });
});

app.get('/BillInfo', (req, res) => {
  const { token } = req.query;
  console.log('Getting bill info for: ' + token);

  // Add your code here to retrieve bill info based on the token parameter
  fetch(OS_URL + '/BillInfo?BillId=' + token, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: OS_DWP,
    },
    method: 'GET',
  })
    .then(response => {
      console.log(response.status);
      if (response.status === 404) {
        res.status(404);
        return { Error: 'Bill not found' };
      } else if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(400).send(error);
    });
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
