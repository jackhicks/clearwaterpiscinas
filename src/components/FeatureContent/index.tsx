import { ServiceContentItems } from '../../content/services';
import { ProductContentItems } from '../../content/products';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const css = `
        .custom-dot-list-style{
          position: relative;
        } `;

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

export const FeatureContent = () => {
  const filteredFeatureContent = ServiceContentItems.concat(
    ProductContentItems,
  ).filter(item => item.feature == true && item.hidden == false);

  return (
    <main className="justify-center p-8 transition-colors bg-white">
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
        itemClass="carousel-item-padding-40-px"
        renderDotsOutside={true}
      >
        {filteredFeatureContent.length == 0
          ? null
          : filteredFeatureContent.map(item => (
              <div
                className="h-content sm:mt-8 justify-center gap-4 cursor-pointer hover:-translate-y-[0.30rem]"
                key={item.description}
              >
                <Link to={'/' + item.type + '/' + item.pageLink}>
                  <div className="w-full flex justify-center ">
                    <h3
                      className="mb-4 text-blue font-serif"
                      title={item.description}
                    >
                      {' '}
                      {item.title}{' '}
                    </h3>
                  </div>
                  <div className="w-full flex justify-center ">
                    <img
                      src={item.image}
                      className="w-48 transition-transform"
                    />
                  </div>
                </Link>
              </div>
            ))}
      </Carousel>
    </main>
  );
};
