import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import { Services } from '../components/Services';
import ScrollObserver from '../contexts/ScrollContext';

export default function services() {
  return (
    <main>
      <ScrollObserver>
        <Header />
        <Services />
        <FooterMenu />
        <Footer />
      </ScrollObserver>
    </main>
  );
}
