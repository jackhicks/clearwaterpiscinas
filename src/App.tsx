import { Clients } from './components/Clients';
import { Footer } from './components/Footer';
import { FooterMenu } from './components/FooterMenu';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Main } from './components/Main';
import { TextContent } from './content/text'
import { SouthPole } from './components/SouthPole';
import ScrollObserver from './contexts/ScrollContext';

function App() {
  return (
    <ScrollObserver>
      <Header />
      <Hero />
      <Main />      
      <section className="w-full h-full bg-white pl-[10%] pr-20 py-36 text-gray-200 transition-colors">
        <h1 className="text-5xl font-medium leading-[70px] mb-8">
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
