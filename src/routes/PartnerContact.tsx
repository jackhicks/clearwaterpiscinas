import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import ScrollObserver from '../contexts/ScrollContext';

export default function PartnerContact() {
  return (
    <main style={{ padding: "1rem 0" }}>      
    <ScrollObserver>
      <Header />
      <h2>PartnerContact</h2>
      <FooterMenu />
      <Footer />
    </ScrollObserver>
    </main>
  );
}