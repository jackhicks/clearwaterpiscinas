import { clientLogos } from '../../content/clientLogos';

export const Clients = () => {
  return (
    <section className="p-16">
      <h1 className=" mb-24">Selected partners</h1>
      <div className="grid grid-cols-4">
        {clientLogos.map(logo => (
          <div className="mb-16 flex" key={logo?.image}>
            <img
              src={logo?.image}
              alt=""
              className="w-48 sm:w-32 lg:w-48 select-none pointer-events-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
