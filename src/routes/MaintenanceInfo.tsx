import { useEffect } from 'react';
import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import ScrollObserver from '../contexts/ScrollContext';
import { useTranslation } from 'react-i18next';

export default function MaintenanceInfo() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.title = t('titleShort') + ' - ' + t('MaintenanceInfo.title');
  });
  return (
    <main>
      <ScrollObserver>
        <Header />
        <section className="w-full text-justify h-full bg-white pl-[10%] pr-[10%] ">
          <h2 className="text-2xl text-left leading-[60px] text-blue ">
            {t('MaintenanceInfo.title')}
          </h2>
          <div className="grid grid-2">
            <p>{t('MaintenanceInfo.MaintenanceInfo1')}</p>
            <p>
              <br />
              <br />
            </p>
            <p>
              <p>{t('MaintenanceInfo.MaintenanceInfo2')}</p>
            </p>
          </div>
          <p>
            <br />
            <br />
          </p>
          <p>
            <p>{t('MaintenanceInfo.MaintenanceInfo3')}</p>
          </p>
          <p>
            <br />
            <br />
          </p>
          <p>
            <p>{t('MaintenanceInfo.MaintenanceInfo4')}</p>
          </p>
          <p>
            <br />
            <br />
          </p>
          <p>
            <p>{t('MaintenanceInfo.MaintenanceInfo5')}</p>
          </p>
          <p>
            <br />
            <br />
          </p>
          <p>
            <p>{t('MaintenanceInfo.MaintenanceInfo6')}</p>
          </p>
          <p>
            <br />
            <br />
          </p>
          <p>
            <p>{t('MaintenanceInfo.MaintenanceInfo7')}</p>
          </p>
          <p>
            <br />
            <br />
          </p>
          <div className="h-full flex flex-col sm:my-2 justify-center">
            <p>{t('MaintenanceInfo.QrLink')}</p>
            <img
              src="/business/QR-PoolGuide.png"
              alt={t('MaintenanceInfo.QrAlt')}
              className="w-48 select-none pointer-events-none"
            />
          </div>
        </section>
        <FooterMenu />
        <Footer />
      </ScrollObserver>
    </main>
  );
}
