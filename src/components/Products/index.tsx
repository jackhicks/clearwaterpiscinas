import { Link } from 'react-router-dom';
import { ProductContentItems } from '../../content/products';

export const Products = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-8 justify-center bg-white px-16 gap-16 transition-colors">
      {ProductContentItems.map(item => (
        <Link
          to={'/Product/' + item.pageLink}
          className="h-content justify-end cursor-pointer hover:-translate-y-[0.30rem] "
          key={item.description}
        >
          <div className="flex items-start">
            <h3 className="mb-4 text-blue font-serif" title={item.description}>
              {' '}
              {item.title}{' '}
            </h3>
          </div>
          <img src={item.image} className="w-48 m-auto transition-transform" />
        </Link>
      ))}
    </main>
  );
};
