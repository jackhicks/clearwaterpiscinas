import { useContext, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ScrollContext } from '../../contexts/ScrollContext';
import { useTheme } from '../../hooks/useTheme';
import { navbarItems } from '../../content/navbar';
import { AnimatedTitle } from '../AnimatedTitle';
import { TextContent } from '../../content/text';
import { ClearwaterpiscinasLogo } from '../../assets/logos/ClearwaterpiscinasLogo';
import { ClearwaterpiscinasIsotipo } from '../../assets/logos/ClearwaterpiscinasIsotipo';

export const Header = () => {
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
      <a className="basis-1/2 md:basis-auto " href="/">
        <ClearwaterpiscinasIsotipo />
      </a>
      <a
        className="basis-1/2 flex md:flex-none flex-row-reverse md:flex-row md:basis-auto"
        href="/"
      >
        <ClearwaterpiscinasLogo />
      </a>
      <nav className="basis-1 md:basis-auto ">
        <ul className="flex gap-4">
          {navbarItems.map(item => (
            <Link
              to={item?.path}
              className="font-medium dark:text-white text-blue"
            >
              <AnimatedTitle first={item?.first} second={item?.second} />
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};
