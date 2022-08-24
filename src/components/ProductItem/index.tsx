import { ProductContentItems } from '../../content/products';
import { useParams, Navigate } from 'react-router-dom';
import { BackButton } from '../Button/Back';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const ProductItem = () => {
  const { id } = useParams();
  const filteredItems = ProductContentItems.filter(item => item.pageLink == id);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = 'Clear water piscinas - ' + id;
  });
  return (
    <>
      <div className="bg-white">
        <BackButton />
      </div>
      <div className="bg-white pt-8 px-16 flex flex-col ">
        {filteredItems.length == 0 ? (
          <Navigate to="/Products" />
        ) : (
          filteredItems.map(item => (
            <section
              key={item.pageLink}
              className="flex flex-col md:flex-row text-s font-serif"
            >
              <div className="mb-4 flex md:flex-row-reverse justify-center md:justify-start basis-full md:basis-1/2 ">
                <img className=" max-w-[300px]" src={item.image} alt="item" />
              </div>
              <div className="mb-4 flex-col basis-full md:basis-1/2 text-blue font-serif">
                <h1 className="md:mx-8 mb-8 text-3xl text-blue font-serif">
                  {t(item.type + '.' + item.pageLink + '.title')}
                </h1>
                <div className="md:mx-8 mb-8 text-justify text-blue font-serif">
                  <p>{t(item.type + '.' + item.pageLink + '.description')}</p>
                </div>
              </div>
            </section>
          ))
        )}
      </div>
    </>
  );
};
