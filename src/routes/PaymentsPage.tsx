import { useEffect, useState, useCallback } from 'react';
import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import ScrollObserver from '../contexts/ScrollContext';
import { useTranslation } from 'react-i18next';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function Payments(testToken) {
  const [token, setToken] = useState('');
  const [paymentData, setPaymentData] = useState({
    Total: null,
    BillId: null,
    ref: null,
    success: null,
  });
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentError, setPaymentError] = useState(false);
  const [paymentRef, setPaymentRef] = useState('');
  const { t, i18n } = useTranslation();
  const OS_URL = import.meta.env.VITE_OS_URL;
  const OS_DWP = import.meta.env.VITE_OS_DWP;
  const REST_HEADER = {
    'Content-Type': 'application/json',
    Authorization: OS_DWP,
  };

  const handleBillPaid = async gguid => {
    const url = OS_URL + '/PaymentRef';

    let config: RequestInit = {
      method: 'POST',
      headers: REST_HEADER,
      body: JSON.stringify({
        bill_otp: token,
        payment_gguid: gguid,
      }),
    };

    const response = await fetch(url, config);
    const data = await response.json();
    if (response.status === 200) {
    } else if (response.status === 300) {
      alert(t('Payments.Messages.notSaved'));
    } else {
      alert(t('Payments.Messages.notSaved'));
    }
  };

  const handleFindBill = async () => {
    if (!token) {
      alert(t('Payments.Messages.missingToken'));
      return;
    }
    const url = OS_URL + '/BillInfo?BillId=' + token;

    let config: RequestInit = {
      method: 'GET',
      headers: REST_HEADER,
    };

    const response = await fetch(url, config);
    const data = await response.json();
    if (response.status === 200) {
      if (
        data.Total !== null &&
        (!paymentData || (paymentData && paymentData.Total !== data.Total))
      ) {
        setPaymentData({
          Total: data.Total,
          BillId: data.BillId,
          ref: null,
          success: null,
        });
      }
    } else if (response.status === 404) {
      alert(t('Payments.Messages.notfound'));
    } else if (response.status === 400) {
      alert(t('Payments.Messages.notSaved'));
      setPaymentData({
        Total: null,
        BillId: null,
        ref: null,
        success: null,
      });
      window.location.href = '/Payments';
    }
  };

  useEffect(() => {
    if (testToken === token && !paymentData) {
      handleFindBill();
    }
  }, [handleFindBill, paymentData, testToken, token]);

  useEffect(() => {
    if (testToken !== 'default' && testToken !== token && !paymentData) {
      setToken(testToken);
    }
  }, [paymentData, testToken, token]);
  const handleIdChange = e => {
    setToken(e.target.value);
  };

  const handlePayment = () => {
    // Here you would make an API call to process the payment and update the state accordingly.
    // For example:
    const paymentData = {
      success: true,
      ref: uuidv4(),
    };
    setPaymentSuccess(paymentData.success);
    setPaymentRef(paymentData.ref);
    handleBillPaid(paymentData.ref);
  };
  const handlePaymentError = () => {
    // Here you would make an API call to process the payment and update the state accordingly.
    // For example:
    const paymentData = {
      success: false,
      ref: uuidv4(),
    };
    setPaymentError(paymentData.success);
    setPaymentRef(paymentData.ref);
  };

  return (
    <div id="paymentsPage" className="bg-white pt-8 px-16 flex flex-col ">
      <section className="flex justify-center text-s font-serif">
        {paymentSuccess ? (
          <div className="mb-4 flex md:justify-start flex-col">
            <h2>{t('Payments.thankYou')}</h2>
            <p>
              {t('Payments.refNumber')}
              {paymentRef}
            </p>
          </div>
        ) : paymentError ? (
          <div className="mb-4 flex md:justify-start flex-col">
            <h2>{t('Payments.Messages.somethingWentWrong')}</h2>
            <p>{t('Payments.Messages.tryAgain')}</p>
          </div>
        ) : (
          <div>
            {testToken.testToken === 'default' ? (
              <div id="billFinder" className="mb-4 flex md:justify-center ">
                <p>{t('Payments.billInput')}</p>
                <input type="text" value={token} onChange={handleIdChange} />
                <button onClick={handleFindBill}>
                  {t('Payments.btnFind')}
                </button>
              </div>
            ) : (
              <div>Test</div>
            )}
            {paymentData.BillId != null && paymentData.Total != null && (
              <div id="billPayment">
                <h2>{t('Payments.billFound')}</h2>
                <p>
                  {t('Payments.billId')}
                  {paymentData.BillId}
                </p>
                <p>
                  {t('Payments.billTotal')}
                  {paymentData.Total}
                </p>
                <div>
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              value: paymentData.Total || '',
                            },
                          },
                        ],
                      });
                    }}
                    onApprove={(data, actions) => {
                      if (actions && actions.order) {
                        return actions.order.capture().then(function () {
                          // Your code here after capture the order
                          handlePayment();
                        });
                      } else {
                        handlePaymentError();
                        return Promise.resolve();
                      }
                    }}
                    onError={error => handlePaymentError()}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </div>
  );
}

export default function PaymentsPage() {
  const { t, i18n } = useTranslation();
  const { token3 = 'default' } = useParams();

  useEffect(() => {
    document.title = t('titleShort') + ' - ' + 'CWP - Payments';
  });
  return (
    <main>
      <ScrollObserver>
        <Header />
        <PayPalScriptProvider
          options={{
            'client-id': import.meta.env.VITE_CLIENT_ID,
            currency: 'EUR',
            'disable-funding': 'sofort',
          }}
        >
          <Payments testToken={token3} />
        </PayPalScriptProvider>
        <FooterMenu />
        <Footer />
      </ScrollObserver>
    </main>
  );
}
