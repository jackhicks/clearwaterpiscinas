import { ServiceContentItems } from '../../content/services';
import { useParams, Navigate } from 'react-router-dom';
import { BackButton } from '../Button/Back';

export const ServiceItem = () => {
  const { id } = useParams();

  const filteredItems = ServiceContentItems.filter(item => item.pageLink == id);

  return (
    <>
      <div className="bg-white">
        <BackButton />
      </div>
      <div className="bg-white pt-8 px-16 flex flex-col ">
        {filteredItems.length == 0 ? (
          <Navigate to="/Services" />
        ) : (
          filteredItems.map(item => (
            <section className="flex flex-col md:flex-row text-s font-serif">
              <div className="mb-4 flex md:flex-row-reverse justify-center md:justify-start basis-full md:basis-1/2 ">
                <img className=" max-w-[300px]" src={item.image} alt="item" />
              </div>
              <div className="mb-4 flex-col basis-full md:basis-1/2 text-blue font-serif">
                <h1 className="md:mx-8 mb-8 text-3xl text-blue font-serif">
                  {item.title}
                </h1>
                <div className="md:mx-8 mb-8 text-justify text-blue font-serif">
                  <p>{item.description}</p>
                </div>
              </div>
            </section>
          ))
        )}
      </div>
    </>
  );
};
