import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ServiceContentItems } from '../../content/services';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const filteredServiceContent = ServiceContentItems.filter(
    item => item.hidden == false,
  );
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t('titleShort') + ' - ' + 'Services';
  });

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center bg-white px-16 gap-16 transition-colors">
      {filteredServiceContent.map(item => (
        <Link
          id={'Service-' + item.pageLink}
          to={'/Service/' + item.pageLink}
          className="h-content my-8 justify-end cursor-pointer hover:-translate-y-[0.30rem] "
          key={item.pageLink}
          title={t(item.type + '.' + item.pageLink + '.description')}
        >
          <div className="flex items-start">
            <h3 className="mb-4 text-blue font-serif">
              {' '}
              {t(item.type + '.' + item.pageLink + '.title')}{' '}
            </h3>
          </div>
          <img src={item.image} className="m-auto w-48 transition-transform" />
        </Link>
      ))}
    </main>
  );
};
