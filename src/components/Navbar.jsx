import React, { useEffect, useState } from 'react';
import logo from '../assets/Meto-Clint-Logo.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenueOpen, setIsMenueOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //TODO2: --------------> Toggle Menue <--------------
  const toggleMenue = () => {
    setIsMenueOpen(!isMenueOpen);
  };

  //TODO1: --------------> Scroll Screen <--------------
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });

  //*========== Nav Items ==========
  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Service', path: 'service' },
    { link: 'About', path: 'about' },
    { link: 'Product', path: 'product' },
    { link: 'Testimonial', path: 'testimonial' },
  ];
  return (
    <header className='w-full fixed top-0 left-0 right-0'>
      <nav>
        <div className=''>
          <a className='flex items-center space-x-3 text-2xl font-bold' href=''><img className='w-6 inline-block items-center' src={logo} alt='logo' /><span className='text-neutralBlack'>Meto Clint</span></a>

          {/* Large Device */}
          <ul className='md:flex space-x-16'>
            {
              navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-lg text-neutralDGrey hover:text-primaryPrimary first:font-medium cursor-pointer transition-all'>{link}</Link>) 
            }
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
