import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
const onToken = token => {
  toast.success('Payment done successfully!');
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
      token={onToken} // submit callback
    />
  );
};

export default StripeButton;
