import { useContext, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ScrollContext } from '../../contexts/ScrollContext';
import { useTheme } from '../../hooks/useTheme';
import { navbarItems } from '../../content/navbar';
import { AnimatedTitle } from '../AnimatedTitle';
import { ClearwaterpiscinasLogo } from '../../assets/logos/ClearwaterpiscinasLogo';
import { ClearwaterpiscinasIsotipo } from '../../assets/logos/ClearwaterpiscinasIsotipo';
import { ClearwaterpiscinasImagotipo } from '../../assets/logos/ClearwaterpiscinasImagotipo';
import { slide as Menu } from 'react-burger-menu';
import { useTranslation } from 'react-i18next';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import './menu.css';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const headerRef = useRef<HTMLElement>(null);
  const { scrollY } = useContext(ScrollContext);
  const { setTheme } = useTheme();

  useMemo(() => {
    if (scrollY >= 100) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [scrollY]);

  return (
    <header
      ref={headerRef}
      className="p-8 flex flex-wrap items-center justify-between bg-white dark:bg-blue transition-colors"
    >
      <a className="lg:hidden basis-1/2 lg:basis-auto " href="/">
        <ClearwaterpiscinasImagotipo />
      </a>
      <a className="hidden lg:flex basis-1/2 lg:basis-auto " href="/">
        <ClearwaterpiscinasIsotipo />
      </a>
      <div className="lg:hidden">
        <Menu
          right
          customBurgerIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="max-h-[45px] max-w-[45px] mt-[14px]"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />{' '}
            </svg>
          }
          customCrossIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          }
        >
          {navbarItems.map(item => (
            <div key={item.title}>
              <Link
                id={item?.title}
                to={item?.path}
                className="font-medium header-menu dark:text-white text-blue"
              >
                <AnimatedTitle
                  title={t('navbarItems.' + item?.title)}
                  first={item?.first}
                  second={item?.second}
                />
              </Link>
            </div>
          ))}
          <LanguageSelector isMobile={true} />
        </Menu>
      </div>
      <nav className="hidden lg:flex basis-1 lg:basis-auto ">
        <ul className="flex">
          {navbarItems.map(item => (
            <Link
              key={item.title}
              to={item?.path}
              className="menu-item font-medium header-menu dark:text-white text-blue"
            >
              <AnimatedTitle
                title={t('navbarItems.' + item?.title)}
                first={item?.first}
                second={item?.second}
              />
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden lg:flex basis-1/2 flex-row-reverse lg:flex-row lg:basis-auto">
        <LanguageSelector isMobile={false} />
        <a href="/">
          <ClearwaterpiscinasLogo />
        </a>
      </div>
    </header>
  );
};
