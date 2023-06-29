import React from 'react';
import ReactDOM from 'react-dom';
import PayPalButton from 'react-paypal-button-v2';

function PayPalButtons({ amount }) {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      alert('Transaction completed by ' + details.payer.name.given_name);
    });
  };

  return (
    <PayPalButton
      createOrder={createOrder}
      onApprove={onApprove}
      catchError={error => {
        console.error('PayPal error', error);
      }}
      options={{
        clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
        currency: 'USD',
      }}
    />
  );
}
