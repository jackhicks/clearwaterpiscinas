import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from 'react-icons/ri';
import { address } from '../../content/addresses';

export const Footer = () => {
  return (
    <section className="pl-16 flex w-full flex-[2 1] mt-8 pb-20">
      <div className="w-1/3 md:flex-col">
        <h1 className="mb-4">Want to be a partner?</h1>
        <a href="/PartnerContact" className="text-orange-100 hover:underline">
          Get in touch
        </a>
      </div>
      <div className="w-[60%]">
        <div className="grid grid-cols-4 gap-16  md:flex-col ">
          {address.map(address => (
            <div className="text-sm" key={address.city}>
              <h1
                className={`${
                  address.title === 'Chiclana' &&
                  'underline cursor-pointer'
                } mb-4 text-lg font-medium`}
              >
                {address.title}
              </h1>
              <p className="font-serif text-gray-200">{address.street}</p>
              <p className="font-serif text-gray-200">{address.complement}</p>
              <p className="font-serif text-gray-200">{address.city}</p>
              <p className="font-serif text-gray-200">{address.country}</p>
              <p className="font-serif text-gray-200">{address.phone}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex gap-3 pt-20 pb-10">
          <a className="hover:bg-gray-200 p-2 rounded-full bg-gray-100 text-white" target="_blank" href='https://www.instagram.com/clearskypiscinas'>
            <RiFacebookBoxFill size={35}  />
          </a>
          <a className="hover:bg-gray-200 p-2 rounded-full bg-gray-100 text-white"  target="_blank" href='https://www.instagram.com/clearskypiscinas'>
            <RiLinkedinBoxFill size={35}/>
          </a>
          <a className="hover:bg-gray-200 p-2 rounded-full bg-gray-100 text-white"  target="_blank" href='https://www.instagram.com/clearskypiscinas'>
            <RiInstagramFill size={35}/>
          </a>
        </div>
        <div>
          <p className="text-xs text-gray-150 max-w-2xl leading-5">
            (C) 2022 Clear water piscinas.  
            <a href="/PrivacyPolicy" className="underline">
             Privacy policy 
            </a>
            /
            <a href="/CookieSettings" className="underline">
             Cookie Settings 
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
