import { navbarItems } from '../../content/navbar';
import { Link } from 'react-router-dom';
import { AnimatedTitle } from '../AnimatedTitle';
import { useTranslation } from 'react-i18next';

export const FooterMenu = () => {
  const { t, i18n } = useTranslation();
  return (
    <section className="w-full flex flex-col md:flex-row justify-center items-center my-8 ">
      <div className="flex items-start gap-7"></div>

      {navbarItems.length > 0
        ? navbarItems.map(item => (
            <Link
              to={item.path}
              key={item.title}
              className="font-medium footer-menu menu-item text-blue"
            >
              <AnimatedTitle
                title={t('navbarItems.' + item?.title)}
                key={item.title}
                first={item.first}
                second={item.second}
              />
            </Link>
          ))
        : null}
    </section>
  );
};
