import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import { ServiceItem } from '../components/ServiceItem';
import ScrollObserver from '../contexts/ScrollContext';

export default function serviceItem() {
  return (
    <main>
      <ScrollObserver>
        <Header />
        <ServiceItem />
        <FooterMenu />
        <Footer />
      </ScrollObserver>
    </main>
  );
}
