import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import ScrollObserver from '../contexts/ScrollContext';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = 'Clear water piscinas - About us';
  });
  return (
    <main>
      <ScrollObserver>
        <Header />
        <section className="w-full text-justify h-full bg-white pl-[10%] pr-[10%] ">
          <h2 className="text-2xl leading-[60px] text-blue ">
            {t('AboutUs.WhatWeDoTitle')}
          </h2>
          <p>{t('AboutUs.US')}</p>
          <p>
            <br />
            <br />
          </p>
          <p className="pd-10px">
            <p>{t('AboutUs.WeDo')}</p>
          </p>
          <p>
            <br />
            <br />
          </p>
        </section>
        <section className="w-full text-justify h-full bg-white pl-[10%] pr-[10%] ">
          <h2 className="text-2xl text-left leading-[60px] text-blue ">
            {t('AboutUs.WhyPayTitle')}
          </h2>
          <div className="grid grid-2">
            <p>{t('AboutUs.WhyPay1')}</p>
            <p>
              <br />
              <br />
            </p>
            <p>
              <p>{t('AboutUs.WhyPay2')}</p>
            </p>
          </div>

          <p>
            <br />
            <br />
          </p>
          <p>
            <p>{t('AboutUs.WhyPay3')}</p>
          </p>
          <p>
            <br />
            <br />
          </p>
          <p>
            <p>{t('AboutUs.WhyPay4')}</p>
          </p>
          <p>
            <br />
            <br />
          </p>
          <p>
            <p>{t('AboutUs.WhyPay5')}</p>
          </p>
          <p>
            <br />
            <br />
          </p>
        </section>
        <FooterMenu />
        <Footer />
      </ScrollObserver>
    </main>
  );
}
