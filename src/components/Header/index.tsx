import { useContext, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ClearwaterpiscinasLogo } from '../../assets/logos/ClearwaterpiscinasLogo';
import { ScrollContext } from '../../contexts/ScrollContext';
import { useTheme } from '../../hooks/useTheme';
import { navbarItems } from '../../content/navbar';
import { AnimatedTitle } from '../AnimatedTitle';
import { TextContent } from '../../content/text';

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
      className="p-8 flex items-center justify-between bg-white dark:bg-gray-200 transition-colors"
    >
      <a
        href="/"
        className="font-bold text-xl leading-6 px-8 dark:text-white text-gray-200"
      >
        {TextContent.CompanyName}
      </a>
      {/*
      <a href="/">
        <ClearwaterpiscinasLogo />
      </a>
      <nav>
        
      
        <ul className="flex gap-4">
          {navbarItems.map(item => (
            <Link to={item.path} className="font-medium dark:text-white text-gray-200"> 
              <AnimatedTitle first={item.first} second={item.second} />
            </Link>      
          ))}
        </ul>
      </nav>
          */}
    </header>
  );
};
