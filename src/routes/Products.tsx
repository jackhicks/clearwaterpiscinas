import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import { Products } from '../components/Products';
import ScrollObserver from '../contexts/ScrollContext';

export default function products() {
  return (
    <main style={{ padding: "1rem 0" }}>      
    <ScrollObserver>
      <Header />
      <Products />
      <FooterMenu />
      <Footer />
    </ScrollObserver>
    </main>
  );
}