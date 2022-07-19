import { Clients } from './components/Clients';
import { Footer } from './components/Footer';
import { FooterMenu } from './components/FooterMenu';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureContent } from './components/FeatureContent';
import { TextContent } from './content/text';
import { SouthPole } from './components/SouthPole';
import ScrollObserver from './contexts/ScrollContext';

function App() {
  return (
    <ScrollObserver>
      <Header />
      <Hero />
      <FeatureContent />
      <section className="w-full h-full bg-white text-blue transition-colors pl-[10%] pr-20 py-24 sm:py-36">
        <h1 className="text-2xl leading-[35px] sm:text-5xl sm:leading-[70px] font-medium  mb-16">
          {TextContent.CompanyGoal}
        </h1>
      </section>
      <Clients />
      {/*<Form />*/}
      <FooterMenu />
      <Footer />
    </ScrollObserver>
  );
}

export default App;
