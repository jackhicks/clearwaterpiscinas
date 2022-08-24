import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import { ProductItem } from '../components/ProductItem';
import ScrollObserver from '../contexts/ScrollContext';

export default function productItem() {
  return (
    <main>
      <ScrollObserver>
        <Header />
        <ProductItem />
        <FooterMenu />
        <Footer />
      </ScrollObserver>
    </main>
  );
}
