import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProductContentItems } from '../../content/products';
import { useTranslation } from 'react-i18next';

export const Products = () => {
  const filteredProductContent = ProductContentItems.filter(
    item => item.hidden == false,
  );

  useEffect(() => {
    document.title = 'Clear water piscinas - Products';
  });
  const { t, i18n } = useTranslation();

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center bg-white px-16 gap-16 transition-colors">
      {filteredProductContent.map(item => (
        <Link
          id={'Product-' + item.pageLink}
          to={'/Product/' + item.pageLink}
          className="h-content my-8 justify-end cursor-pointer hover:-translate-y-[0.30rem] "
          key={item.pageLink}
          title={t(item.type + '.' + item.pageLink + '.description')}
        >
          <div className="flex items-start">
            <h3 className="mb-4 text-blue font-serif">
              {' '}
              {t(item.type + '.' + item.pageLink + '.title')}
            </h3>
          </div>
          <img src={item.image} className="w-48 m-auto transition-transform" />
        </Link>
      ))}
    </main>
  );
};
