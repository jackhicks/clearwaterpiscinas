import { RiExternalLinkLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ProductContentItems } from '../../content/products';

export const Products = () => {
  return (
    <main className="grid grid-cols-2 sm:grid-cols-4 justify-center bg-white px-16 gap-16 transition-colors">
      {ProductContentItems.map(item => (
        <Link
          to={'/Product/' + item.pageLink}
          className="h-content my-8 flex flex-col justify-end gap-4 cursor-pointer hover:-translate-y-[0.30rem] "
          key={item.description}
        >
          <div className="flex items-start">
            <h3 className="mb-4 text-blue font-serif" title={item.description}>
              {' '}
              {item.title}{' '}
            </h3>
            <RiExternalLinkLine size={20} className="flex-shrink-0 text-blue" />
          </div>
          <img src={item.image} className="w-32 sm:w-48 transition-transform" />
        </Link>
      ))}
    </main>
  );
};
