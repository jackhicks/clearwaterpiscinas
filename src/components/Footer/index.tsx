import { RiFacebookBoxFill, RiInstagramFill } from 'react-icons/ri';
import { address } from '../../content/addresses';
import CookieBanner from '../CookieBanner';

export const Footer = () => {
  return (
    <section className=" mt-8 pb-20 ">
      <div>
        <h2 className="flex justify-center">Location contacts:</h2>
        <div className="flex justify-center ">
          {address.map(address => (
            <div className="text-sm" key={address.city}>
              <h1 className="m-4 text-lg font-medium underline">
                {address.title}
              </h1>
              {/*
              <p className="font-serif text-blue">{address.street}</p>
              <p className="font-serif text-blue">{address.complement}</p>
              <p className="font-serif text-blue">{address.city}</p>
              <p className="font-serif text-blue">{address.country}</p>
              */}
              <p className="font-serif text-blue">{address.contactPerson}</p>
              <p className="font-serif text-blue">{address.phone}</p>
              <p className="font-serif text-blue">{address.email}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center pt-10 pb-10">
          <a
            className="hover:bg-blue p-2 rounded-full bg-gray-100 text-white"
            target="_blank"
            href="https://www.facebook.com/clearwaterpiscinas.es"
          >
            <RiFacebookBoxFill size={35} />
          </a>
          <a
            className="hover:bg-blue p-2 rounded-full bg-gray-100 text-white"
            target="_blank"
            href="https://www.instagram.com/clearskypiscinas"
          >
            <RiInstagramFill size={35} />
          </a>
        </div>
        <div className="flex justify-center ">
          <p className="text-xs text-black max-w-2xl leading-5">
            (C) 2022 Clear water piscinas.
            <a href="/PrivacyPolicy" className="underline">
              Privacy policy
            </a>
            {/*
            /
            <a href="/CookieSettings" className="underline">
            Cookie Settings
            </a>
            */}
          </p>
        </div>
      </div>
      <CookieBanner />
    </section>
  );
};
