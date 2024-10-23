import React from 'react';
import logo1 from '../assets/company_logo/Logo1.svg';
import logo2 from '../assets/company_logo/Logo2.svg';
import logo3 from '../assets/company_logo/Logo3.svg';
import logo4 from '../assets/company_logo/Logo4.svg';
import logo5 from '../assets/company_logo/Logo5.svg';
import logo6 from '../assets/company_logo/Logo6.svg';
import logo7 from '../assets/company_logo/Logo7.svg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Membership Organisations',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
      img: '/src/assets/card/card1.svg',
    },
    {
      id: 2,
      title: 'National Associations',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
      img: '/src/assets/card/card2.svg',
    },
    {
      id: 3,
      title: 'National Associations',
      description:
        'Our membership management software provides full automation of membership renewals and payments',
      img: '/src/assets/card/card3.svg',
    },
  ];
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
      {/* ---------- Logo ---------- */}
      <div className='text-center my-8'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>
          Our Clint
        </h2>
        <p className='text-neutralDGrey'>
          We have been working with some Fortune 500+ clients
        </p>
        {/* ---------- Logo ---------- */}
        <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
          <img src={logo1} alt='company_logo' />
          <img src={logo2} alt='company_logo' />
          <img src={logo3} alt='company_logo' />
          <img src={logo4} alt='company_logo' />
          <img src={logo5} alt='company_logo' />
          <img src={logo6} alt='company_logo' />
          <img src={logo7} alt='company_logo' />
        </div>
      </div>

      {/* Services card */}
      <div className='mt-20 md:w-1/2 max-auto text-center mx-auto'>
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>
          Manage your entire community in a single system
        </h2>
        <p className='text-neutralDGrey'>Who is Nextcent suitable for?</p>
      </div>

      {/* Card */}
      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {services.map((service) => (
          <div
            key={service.id}
            className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'
          >
            <div>
              <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                <img className='-ml-2' src={service.img} alt='logo' />
              </div>
              <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>
                {service.title}
              </h4>
              <p className='text-sm text-neutralGrey'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
