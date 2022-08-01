import TagManager from 'react-gtm-module';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';

const tagManagerArgs = {
  gtmId: 'GTM-KGCJQ9L',
};
const initGA = () => {
  if (getCookieConsentValue('clearwaterpiscinasCookies') === 'true') {
    TagManager.initialize(tagManagerArgs);
  }
};

function CookieBanner() {
  return (
    <>
      {initGA()}
      <CookieConsent
        cookieName="clearwaterpiscinasCookies"
        location="bottom"
        buttonText="Accept"
        declineButtonText="Only necessary cookies"
        style={{
          zIndex: '1001',
          fontSize: '18px',
          display: 'block',
          color: '#FFFFFF',
          background: '#2B373B',
        }}
        buttonStyle={{
          background: '#24549b',
          color: '#FFFFFF',
          fontSize: '13px',
        }}
        declineButtonStyle={{
          background: '#2B373B',
          color: '#24549b',
          fontSize: '13px',
        }}
        flipButtons
        overlay
        expires={150}
        enableDeclineButton
        onAccept={() => {
          initGA();
        }}
      >
        We use cookies to optimize our website and our service.{' '}
        <a
          href="/PrivacyPolicy"
          target="blank"
          style={{ fontSize: '10px', color: '#24549b' }}
        >
          Read more.
        </a>
      </CookieConsent>
    </>
  );
}

export default CookieBanner;
