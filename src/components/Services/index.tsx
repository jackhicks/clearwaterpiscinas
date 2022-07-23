import { RiExternalLinkLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ServiceContentItems } from '../../content/services';

export const Services = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center bg-white px-16 gap-16 transition-colors">
      {ServiceContentItems.map(item => (
        <Link
          to={'/Service/' + item.pageLink}
          className="h-content my-8 justify-end cursor-pointer hover:-translate-y-[0.30rem] "
          key={item.description}
        >
          <div className="flex items-start">
            <h3 className="mb-4 text-blue font-serif" title={item.description}>
              {' '}
              {item.title}{' '}
            </h3>
          </div>
          <img src={item.image} className="m-auto w-48 transition-transform" />
        </Link>
      ))}
    </main>
  );
};
