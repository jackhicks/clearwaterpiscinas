import { Footer } from '../components/Footer';
import { FooterMenu } from '../components/FooterMenu';
import { Header } from '../components/Header';
import { politicaPrivacidad } from '../content/politicaPrivacidad';
import ScrollObserver from '../contexts/ScrollContext';

export default function PrivacyPolicy() {
  return (
    <main>
      <ScrollObserver>
        <Header />
        <div className="w-full text-justify h-full bg-white py-[20px] px-[60px] ">
          {politicaPrivacidad.map(item => (
            <>
              <h2 className="py-[20px] font-bold">{item.title}</h2>
              <p className="pt-[10px] empty:hidden">{item.p1}</p>
              <p className="pt-[10px] empty:hidden">{item.p2}</p>
              <p className="pt-[10px] empty:hidden">{item.p3}</p>
              <p className="pt-[10px] empty:hidden">{item.p4}</p>
            </>
          ))}
        </div>
        <FooterMenu />
        <Footer />
      </ScrollObserver>
    </main>
  );
}