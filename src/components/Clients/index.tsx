import { clientLogos } from '../../content/clientLogos';

export const Clients = () => {
  return (
    <section className="pt-16 px-16   ">
      <h1 className=" mb-16">Selected partners</h1>
      <div className="grid grid-cols-4">
        {clientLogos.map(logo => (
          <div className="mb-16 flex" key={logo?.image}>
            <a target="_blank" href={logo?.link}>
              <img
                src={logo?.image}
                alt={logo?.alt}
                className="w-48 sm:w-32 lg:w-48 select-none pointer-events-none"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
