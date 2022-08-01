import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import ScrollObserver from '../contexts/ScrollContext';

export default function CookieSettings() {
  return (
    <main>
      <ScrollObserver>
        <Header />
        <h2>CookieSettings</h2>
        <FooterMenu />
        <Footer />
      </ScrollObserver>
    </main>
  );
}
