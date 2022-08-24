import { clientLogos } from '../../content/clientLogos';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useTranslation } from 'react-i18next';

const css = `
        .custom-dot-list-style{
          position: relative;
        } 
        .custom-carousel-item{
          margin: auto;
        }
        `;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export const Partners = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="pt-16 px-16   ">
      <h1 className=" mb-[10px]">{t('Sections.Partners')}</h1>
      <style>{css}</style>
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true /*this.props.deviceType !== 'mobile' ? true : false*/}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        //deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px custom-carousel-item"
        renderDotsOutside={true}
      >
        {clientLogos.map(logo => (
          <div key={logo?.name}>
            {logo.link !== '' ? (
              <div className="h-full flex sm:my-2 justify-center cursor-pointer hover:-translate-y-[0.30rem]">
                <a
                  target="_blank"
                  id={'Clients-' + logo.name}
                  className="my-auto"
                  href={logo?.link}
                >
                  <img
                    src={logo?.image}
                    alt={logo?.alt}
                    title={logo?.alt}
                    className="w-48 select-none pointer-events-none"
                  />
                </a>
              </div>
            ) : (
              <div className="h-full flex sm:my-2 justify-center">
                <img
                  src={logo?.image}
                  alt={logo?.alt}
                  title={logo?.alt}
                  className="w-48 select-none pointer-events-none"
                />
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </section>
  );
};
