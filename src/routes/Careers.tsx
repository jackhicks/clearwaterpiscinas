import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import ScrollObserver from '../contexts/ScrollContext';

import { useTranslation } from 'react-i18next';
import i18next, { t } from 'i18next';

export default function Careers() {
  const { t, i18n } = useTranslation();
  return (
    <main>
      <ScrollObserver>
        <Header />
        <h2>Careers</h2>
        <FooterMenu />
        <Footer />
      </ScrollObserver>
    </main>
  );
}
