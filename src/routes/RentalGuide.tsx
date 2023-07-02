import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import ScrollObserver from '../contexts/ScrollContext';
import { useTranslation } from 'react-i18next';

export default function RentalGuide() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = t('title') + " - " + t('RentalGuide.title');
  });
  return (
    <main>
      <ScrollObserver>
        <Header />
        <section className="w-full text-justify h-full bg-white pl-[10%] pr-[10%] ">
          <h2 className="text-2xl leading-[60px] text-blue ">
            {t('RentalGuide.WhatWeDoTitle')}
          </h2>
          <p>{t('RentalGuide.US')}</p>
          <p>
            <br />
            <br />
          </p>
          <p className="pd-10px">
            <p>{t('RentalGuide.WeDo')}</p>
          </p>
          <p>
            <br />
            <br />
          </p>
        </section>
        <section className="w-full text-justify h-full bg-white pl-[10%] pr-[10%] ">
          <h2 className="text-2xl text-left leading-[60px] text-blue ">
            {t('RentalGuide.WhyPayTitle')}
          </h2>
          <div className="grid grid-2">
            <p>{t('RentalGuide.WhyPay1')}</p>
            <p>
              <br />
              <br />
            </p>
            <p>
              <p>{t('RentalGuide.WhyPay2')}</p>
            </p>
          </div>

          <p>
            <br />
            <br />
          </p>
          <p>
            <p>{t('RentalGuide.WhyPay3')}</p>
          </p>
          <p>
            <br />
            <br />
          </p>
          <p>
            <p>{t('RentalGuide.WhyPay4')}</p>
          </p>
          <p>
            <br />
            <br />
          </p>
          <p>
            <p>{t('RentalGuide.WhyPay5')}</p>
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
