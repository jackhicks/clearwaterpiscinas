import { navbarItems } from '../../utils/navbarContent';
import { Link } from "react-router-dom";
import { AnimatedTitle } from '../AnimatedTitle';

export const FooterMenu = () => {
  return (
    <section className="w-full flex flex-col items-center pt-32">
      <div className="flex items-start gap-7">
        {navbarItems.map(item => (
          <Link to={item.path} className="font-medium dark:text-white text-gray-200"> 
            <AnimatedTitle key={item.title} first={item.first} second={item.second} />
          </Link>
        ))}
      </div>
    </section>
  );
};
