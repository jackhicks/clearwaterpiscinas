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
        buttonText="Aceptar"
        declineButtonText="Solo las necesarias"
        style={{
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
        Utilizamos cookies para optimizar nuestro sitio web y nuestro servicio.{' '}
        <a
          href=""
          target="blank"
          style={{ fontSize: '10px', color: '#24549b' }}
        >
          Leer más.
        </a>
      </CookieConsent>
    </>
  );
}

export default CookieBanner;
