import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterFill,
} from 'react-icons/ri';
import { address } from '../../utils/Address';

export const Footer = () => {
  return (
    <section className="pl-16 flex w-full flex-[2 1] mt-32 pb-20">
      <div className="w-1/3">
        <h1 className="mb-4">New business?</h1>
        <a href="" className="text-orange-100 hover:underline">
          Get in touch
        </a>
      </div>
      <div className="w-[60%]">
        <div className="grid grid-cols-4 gap-16">
          {address.map(address => (
            <div className="text-sm" key={address.city}>
              <h1
                className={`${
                  address.title === 'Amsterdam' &&
                  'text-orange-100 underline cursor-pointer'
                } mb-4 text-lg font-medium`}
              >
                {address.title}
              </h1>
              <p className="font-serif text-gray-150">{address.street}</p>
              <p className="font-serif text-gray-150">{address.complement}</p>
              <p className="font-serif text-gray-150">{address.city}</p>
              <p className="font-serif text-gray-150">{address.country}</p>
              <p className="font-serif text-gray-150">{address.phone}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex gap-3 pt-20 pb-10">
          <button className="hover:bg-orange-100 p-2 rounded-full bg-gray-100 text-white">
            <RiFacebookBoxFill size={35} />
          </button>
          <button className="hover:bg-orange-100 p-2 rounded-full bg-gray-100 text-white">
            <RiTwitterFill size={35} />
          </button>
          <button className="hover:bg-orange-100 p-2 rounded-full bg-gray-100 text-white">
            <RiLinkedinBoxFill size={35} />
          </button>
          <button className="hover:bg-orange-100 p-2 rounded-full bg-gray-100 text-white">
            <RiInstagramFill size={35} />
          </button>
        </div>
        <div>
          <p className="text-xs text-gray-150 max-w-2xl leading-5">
            (C) 2022 Clear water piscinas. Privacy policy: In{' '}
            <a href="/" className="underline">
              English{' '}
            </a>
            /
            <a href="/" className="underline">
              {' '}
              Spanish
            </a>
            <a href="/" className="underline block">
              Cookie Settings
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
