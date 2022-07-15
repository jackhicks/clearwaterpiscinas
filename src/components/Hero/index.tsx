import { useTheme } from '../../hooks/useTheme';
import { Button } from '../Button';
import { TextContent } from '../../content/text';

export const Hero = () => {
  const { setTheme, colorTheme } = useTheme();
  return (
    <section className="w-full h-full bg-white dark:bg-blue dark:text-white transition-colors pl-[10%] pr-20 py-24 sm:py-36 text-blue ">
      <h1 className="text-2xl leading-[35px] sm:text-5xl sm:leading-[70px] font-medium  mb-16">
        {TextContent.CompanyMission}
      </h1>
      <h2 className="text-blue dark:text-white text-m sm:text-2xl mb-8 font-serif">
        {TextContent.CompanyVision}
      </h2>
      <Button
        className="dark:text-white dark:border-white border-orange-100 text-orange-100 hover:text-white"
        onClick={() => {
          setTheme(colorTheme);
          window.location.href = 'mailto:info@clearwaterpicinas.com';
        }}
      >
        Get in touch
      </Button>
    </section>
  );
};
