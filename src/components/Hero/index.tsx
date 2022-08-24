import { useTheme } from '../../hooks/useTheme';
import { Button } from '../Button';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { setTheme, colorTheme } = useTheme();
  const { t, i18n } = useTranslation();

  return (
    <section className="w-full h-full bg-white dark:bg-blue dark:text-white transition-colors pl-[10%] pr-20 py-24 sm:py-36 text-blue ">
      <h1 className="text-2xl leading-[35px] sm:text-5xl sm:leading-[70px] font-medium  mb-16">
        {t('Company.Mission')}
      </h1>
      <h2 className="text-blue dark:text-white text-m sm:text-2xl mb-8 font-serif">
        {t('Company.Vision')}
      </h2>
      <Button
        id="contact-email"
        className="dark:text-white dark:border-white dark:bg-blue dark:hover:text-blue dark:hover:bg-white border-blue text-blue bg-white hover:bg-blue hover:text-white"
        onClick={() => {
          setTheme(colorTheme);
          window.location.href = 'mailto:info@clearwaterpicinas.com';
        }}
      >
        {t('Buttons.ContactUs')}
      </Button>
    </section>
  );
};
