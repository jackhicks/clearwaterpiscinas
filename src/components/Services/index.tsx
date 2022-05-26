import { RiExternalLinkLine } from 'react-icons/ri';
import { ServiceContentItems } from '../../content/services';

export const Services = () => {
  return (
    <main className="grid grid-cols-3 justify-center px-16 gap-16 transition-colors">
      {ServiceContentItems.map(item => (
        <div
          className="h-content mt-8 flex flex-col justify-end gap-4 cursor-pointer"
          key={item.description}
        >
          <div className="flex items-start">
            <h3 className="mb-4 text-gray-200 font-serif" title={item.description}> {item.title} </h3>
              <RiExternalLinkLine
                size={20}
                className="flex-shrink-0 text-gray-200"
              />
          </div>
          <img
            src={item.image}
            className="w-48 sm:w-32 lg:w-48 hover:-translate-y-[0.30rem] transition-transform "
          />
        </div>
      ))}
    </main>
  );
};
