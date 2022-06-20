import { RiExternalLinkLine } from 'react-icons/ri';
import { ServiceContentItems } from '../../content/services';
import { Link } from 'react-router-dom';

export const Services = () => {
  return (
    <main className="grid grid-cols-2 sm:grid-cols-4 justify-center px-16 gap-16 transition-colors">
      {ServiceContentItems.map(item => (
        <Link
          to={'/Service/' + item.pageLink}
          className="h-content mt-8 flex flex-col justify-end gap-4 cursor-pointer hover:-translate-y-[0.30rem] "
          key={item.description}
        >
          <div className="flex items-start">
            <h3
              className="mb-4 text-gray-200 font-serif"
              title={item.description}
            >
              {' '}
              {item.title}{' '}
            </h3>
            <RiExternalLinkLine
              size={20}
              className="flex-shrink-0 text-gray-200"
            />
          </div>
          <img src={item.image} className="w-32 sm:w-48 transition-transform" />
        </Link>
      ))}
    </main>
  );
};
