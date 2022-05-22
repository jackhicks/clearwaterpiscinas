import { useTheme } from '../../hooks/useTheme';
import { Button } from '../Button';
import { TextContent } from '../../content/text';

export const Hero = () => {
  const { setTheme, colorTheme } = useTheme();
  return (
    <>
      <section className="w-full h-full bg-white dark:bg-gray-200 pl-[10%] pr-20 py-36 text-gray-200 dark:text-white transition-colors">
        <h1 className="text-[3.2rem] font-medium leading-[70px] mb-16">
          {TextContent.CompanyMission}
        </h1>
        <h2 className="text-gray-200 dark:text-white text-2xl mb-8 font-serif">
          {TextContent.CompanyVision}
        </h2>
        <Button
          className="dark:text-white dark:border-white border-orange-100 text-orange-100 hover:text-white"
          onClick={() => setTheme(colorTheme)}
        >
          Get in touch
        </Button>
      </section>
    </>
  );
};
