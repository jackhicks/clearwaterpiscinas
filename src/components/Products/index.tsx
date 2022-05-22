import { RiExternalLinkLine } from 'react-icons/ri';
import { ProductContentItems } from '../../content/products';

export const Products = () => {
  return (
    <main className="grid grid-cols-3 justify-center px-16 gap-16 dark:bg-gray-200 dark:text-white transition-colors bg-white">
      {ProductContentItems.map(item => (
        <div
          className="h-[600px] flex flex-col justify-end gap-4 cursor-pointer"
          key={item.description}
        >         
         <div className="flex items-start">
            <h3 className="mb-4 text-gray-100 font-serif" title={item.description}> {item.title} </h3>
              <RiExternalLinkLine
                size={20}
                className="flex-shrink-0 text-gray-100"
              />
          </div>
          <img
            src={item.image}
            className="hover:-translate-y-[0.30rem] transition-transform"
          />
        </div>
      ))}
    </main>
  );
};
