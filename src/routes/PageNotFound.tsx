import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import ScrollObserver from '../contexts/ScrollContext';
import { useTranslation } from 'react-i18next';

export default function PageNotFound() {
  const { t, i18n } = useTranslation();
  return (
    <main>
      <ScrollObserver>
        <Header />
        <h2>{t('Page not found')}</h2>
        <FooterMenu />
        <Footer />
      </ScrollObserver>
    </main>
  );
}
