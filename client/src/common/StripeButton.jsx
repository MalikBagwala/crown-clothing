import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
import axios from "axios";
const onToken = (token, amount) => {
  axios({
    url: "payment",
    method: "post",
    data: {
      amount,
      token
    }
  }).then(res => {
    toast.success('Payment done successfully!');
  }).catch(err => {
    toast.warn('There was an issue with your payment!');
  })
};
const StripeButton = ({ price }) => {
  const stripeCurrency = price * 100;
  const stripeKey = 'pk_test_n3D2VZA6D3a9Z6qOYGCUuv2N00ub4K4SsB';
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      description="Premium online retailer"
      panelLabel="Pay Now"
      image="http://svgshare.com/i/CUz.svg"
      stripeKey={stripeKey}
      amount={stripeCurrency}
      shippingAddress
      billingAddress={false}
      token={token => onToken(token, stripeCurrency)} // submit callback
    />
  );
};

export default StripeButton;
