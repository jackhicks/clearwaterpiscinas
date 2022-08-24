import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import { privacyPolicy } from '../content/privacyPolicy';
import ScrollObserver from '../contexts/ScrollContext';
import { useTranslation } from 'react-i18next';

export default function PrivacyPolicy() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = 'Clear water piscinas - Privacy Policy';
  });
  return (
    <main>
      <ScrollObserver>
        <Header />
        <div className="w-full text-justify h-full bg-white py-[20px] px-[60px] ">
          {privacyPolicy.map(item => (
            <div key={item.title}>
              <h2 className="py-[20px] font-bold">
                {t('PrivacyPolicy.' + item.section + '.title')}
              </h2>
              <p className="pt-[10px] empty:hidden">
                {t('PrivacyPolicy.' + item.section + '.p1')}
              </p>
              <p className="pt-[10px] empty:hidden">
                {t('PrivacyPolicy.' + item.section + '.p2')}
              </p>
              <p className="pt-[10px] empty:hidden">
                {t('PrivacyPolicy.' + item.section + '.p3')}
              </p>
              <p className="pt-[10px] empty:hidden">
                {t('PrivacyPolicy.' + item.section + '.p4')}
              </p>
            </div>
          ))}
        </div>
        <FooterMenu />
        <Footer />
      </ScrollObserver>
    </main>
  );
}
