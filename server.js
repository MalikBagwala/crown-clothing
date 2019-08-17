const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
if (process.env.NODE_ENV == 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(PORT, err => {
  if (err) throw err;
  console.log('Server Running on port : ' + PORT);
});

app.post('/payment', (req, res) => {
  console.log(req.body);
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd'
  };

  stripe.charges.create(body, (stripeError, stripeResponse) => {
    if (stripeError) {
      console.log(stripeResponse, stripeError);
      res.status(500).send({ error: stripeError });
    } else res.status(200).send({ success: stripeResponse });
  });
});
