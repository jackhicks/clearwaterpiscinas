import { navbarItems } from '../../content/navbar';
import { Link } from 'react-router-dom';
import { AnimatedTitle } from '../AnimatedTitle';

export const FooterMenu = () => {
  return (
    <section className="w-full flex flex-col items-center pt-8 ">
      <div className="flex items-start gap-7"></div>

      {navbarItems.length > 0
        ? navbarItems.map(item => (
            <Link to={item.path} className="font-medium text-gray-200">
              <AnimatedTitle
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
