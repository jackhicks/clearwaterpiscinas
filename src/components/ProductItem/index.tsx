import { ProductContentItems } from '../../content/products';
import { useParams, Navigate } from 'react-router-dom';
import { BackButton } from '../Button/Back';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../Button';

export const ProductItem = () => {
  const { id } = useParams();
  const filteredItems = ProductContentItems.filter(item => item.pageLink == id);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('titleShort') + ' - ' + id;
  });

  const buyButtonHandle = () => {
    alert('Do something');
  };

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
            <div>
              <section
                key={item.pageLink}
                className="flex flex-col md:flex-row text-s font-serif"
              >
                <div className="mb-4 flex md:flex-row-reverse justify-center md:justify-start basis-full md:basis-1/2 ">
                  <img
                    className="max-h-[300px] max-w-[300px] "
                    src={item.image}
                    alt="item"
                  />
                </div>
                <div className="mb-4 flex-col basis-full md:basis-1/2 text-blue font-serif">
                  <h1 className="md:mx-8 mb-8 text-3xl text-blue font-serif">
                    {t(item.type + '.' + item.pageLink + '.title')}
                  </h1>
                  <div className="md:mx-8 mb-8 text-justify text-blue font-serif">
                    <p>
                      {t(item.type + '.' + item.pageLink + '.shortDescription')}
                    </p>
                  </div>

                  <div className="BuyPrice flex flex-row md:mx-8 mb-8 place-content-between text-justify text-blue font-serif">
                    <div>
                      <p>{item.details.price}€</p>
                    </div>
                    <Button onClick={buyButtonHandle}>
                      {t('Buttons.BuyNow')}
                    </Button>
                  </div>
                </div>
              </section>
              <section
                key={item.pageLink}
                className="flex flex-col text-s font-serif"
              >
                <div>
                  <h1 className="md:mx-8 mb-8 text-xl text-blue font-serif">
                    {t('pageStructure.DetailedDescription')}
                  </h1>
                  <div className="md:mx-8 mb-8 text-justify text-blue font-serif">
                    <p>{t(item.type + '.' + item.pageLink + '.description')}</p>
                  </div>
                </div>
                <div>
                  <h1 className="md:mx-8 mb-8 text-xl text-blue font-serif">
                    {t('pageStructure.TechDetailsName')}
                  </h1>
                  <div className="md:mx-8 mb-8 text-justify text-blue font-serif">
                    {Object.keys(item.details.tech).length == 0
                      ? null
                      : Object.keys(item.details.tech).map(TechItem => (
                          <p>
                            {t('pageStructure.TechDetails.' + TechItem)}:{' '}
                            {item.details.tech[TechItem]}
                          </p>
                        ))}
                  </div>
                </div>
              </section>
            </div>
          ))
        )}
      </div>
    </>
  );
};
