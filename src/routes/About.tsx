import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import ScrollObserver from '../contexts/ScrollContext';

export default function About() {
  return (
    <main>
      <ScrollObserver>
        <Header />
        <section className="w-full text-justify h-full bg-white pl-[10%] pr-[10%] ">
          <h2 className="text-2xl leading-[60px] text-blue ">What we do</h2>
          <p>
            Here at Clear Water Pools we offer a professional cleaning and
            maintenance service for swimming pool owners in the Chiclana and
            Conil areas of the Costa De La Luz. We provide pool care for holiday
            homes & residential home owners. We carry out all the essential
            chemical testing and maintenance to ,keep your pool crystal clear
            and free from all impurities.We will take care of every facet of
            pool care and advise the best and most economical approach to the
            ongoing maintenance of your investment.
          </p>
          <p>
            <br />
            <br />
          </p>
          <p className="pd-10px">
            At Clear Water Pools we know how important the pool is to your
            holiday. Regular maintenance is essential to keep your pool in a
            clean and healthy condition at all times. We provide a quality
            service that is designed to meet individual customer and pool needs.
            Every aspect is professionally managed to ensure the highest
            standards are reached, and maintained.
          </p>
          <p>
            <br />
            <br />
          </p>
        </section>
        <section className="w-full text-justify h-full bg-white pl-[10%] pr-[10%] ">
          <h2 className="text-2xl text-left leading-[60px] text-blue ">
            Why should you pay to professionally maintain your pool
          </h2>
          <div className="grid grid-2">
            <p>
              The physical cleanliness of your pool and its filtration equipment
              is more important than you think. In fact its crucial. Why? Well
              let’s look at two points. The physical effects and the chemical
              implications of a dirty pool. Dirt, soil, sand etc in your pool
              effects the pH of the water. Usually alkaline it will increase
              your water’s pH, cause irritation to bathers, inhibit the
              effectiveness of the chlorine and allow the water to deposit
              minerals and metals in the pool.
            </p>
            <p>
              <br />
              <br />
            </p>
            <p>
              Organic stuff, leaves and the like will leave stains on grout and
              combine with the chlorine in the pool reducing its effectiveness
              to kill bacteria. If you allow skimmer baskets to fill with the
              floating detritus from the pool water’s surface it restricts flow
              through the filter and reduces the amount of chlorine being
              administered to the pool from the multi action tablets. Text books
              tell us up to 80% of the pollution in pool water passes into the
              skimmers, so they need to be clean, the filtration system will
              work more effectively.
            </p>
            <img className="w-32" src="public\pool-chemistry.jpg"></img>
          </div>

          <p>
            <br />
            <br />
          </p>
          <p>
            A lot of pool owners neglect to clean the next filter in line in the
            pool’s filtration system, the pre-filter. This critical trap catches
            all the stuff that would damage the pump and block the sand filter
            system. It strains the water taken from the pool through small
            holes. Great, but when it blocks or fills with leaves, seeds etc
            this reduces the flow through the whole system. We clean all filters
            as part of our weekly visit. The sand filter is the heart of your
            pool’s cleaning system. It traps smaller particles in the pool water
            and ensures good water clarity. It needs to regularly cleaned. We
            backwash the filter when the pressure in the vessel rises or after
            every Hoover. If the sand becomes so dirty that it restricts the
            flow, again you are impeding the efficiency of the whole system.
          </p>
          <p>
            <br />
            <br />
          </p>
          <p>
            Your pool water’s chemistry and the filtration equipment can only do
            its job when its clean and free from obstruction. Pre-empt problems
            by employing a regular cleaning schedule.
          </p>
          <p>
            <br />
            <br />
          </p>
          <p>
            Swimming pool chemicals are vital to your pool. There are many
            products available used to treat swimming pool water, including
            sanitizers, algaecide, stabilizers, balancers and shocks. If
            chemicals are imbalanced, it can not only be harmful to swimmers,
            but also to your filtering system and the pool itself. The best way
            to save money is to correctly balance your pool water and use less
            pool chemicals. A pool should look clear and be clean to maintain
            appropriate levels. A correct pH level is essential. Pool chemicals
            are serious business! We make sure chemicals are securely stored in
            the proper environment. We never mix chemicals old, new, variations
            of the same or different types.
          </p>
          <p>
            <br />
            <br />
          </p>
        </section>
        <FooterMenu />
        <Footer />
      </ScrollObserver>
    </main>
  );
}
