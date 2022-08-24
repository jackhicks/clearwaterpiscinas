import { Partners } from './components/Partners';
import { Footer } from './components/Footer';
import { FooterMenu } from './components/FooterMenu';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureContent } from './components/FeatureContent';
import ScrollObserver from './contexts/ScrollContext';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = 'Clear water piscinas - Home';
  });

  return (
    <ScrollObserver>
      <Header />
      <Hero />
      <FeatureContent />
      <section className="w-full h-full bg-white text-blue transition-colors pl-[10%] pr-20 py-24 sm:py-36">
        <h1 className="text-2xl leading-[35px] sm:text-5xl sm:leading-[70px] font-medium  mb-16">
          {t('Company.Goal')}
        </h1>
      </section>
      <Partners />
      {/*<Form />*/}
      <FooterMenu />
      <Footer />
    </ScrollObserver>
  );
}

export default App;
