import { ServiceContentItems } from '../../content/services';
import { useParams, Navigate } from 'react-router-dom';

export const ServiceItem = () => {
  const { id } = useParams();

  const filteredItems = ServiceContentItems.filter(item => item.pageLink == id);

  return (
    <div className="h-content bg-white pt-8 px-16 flex flex-col justify-end gap-4 cursor-pointer">
      {filteredItems.length == 0 ? (
        <Navigate to="/Services" />
      ) : (
        filteredItems.map(item => (
          <section className="mb-4 flex w-full text-s font-serif">
            <div className="flex basis-1/2 transition-transform">
              <img
                className="w-32 sm:w-48 ml-48 mr-8 mb-8 "
                src={item.image}
                alt="item"
              />
            </div>
            <div className=" mb-4 flex-col basis-1/2 text-gray-200 font-serif">
              <h1 className=" ml-8 mb-8 text-3xl text-gray-200 font-serif">
                {item.title}
              </h1>
              <div className="mr-48 ml-8 mb-8  text-gray-200 font-serif">
                <p>{item.description}</p>
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
};
