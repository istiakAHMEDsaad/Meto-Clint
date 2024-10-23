import React, { useEffect, useState } from 'react';
import logo from '../assets/simple-meto-logo.svg';
import { Link } from 'react-scroll';
import { FaXmark, FaBars } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenueOpen, setIsMenueOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);


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

  //TODO2: --------------> Toggle Menue <--------------
  const toggleMenue = () => {
    setIsMenueOpen(!isMenueOpen);
  };

  //*========== Nav Items ==========
  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Service', path: 'service' },
    { link: 'About', path: 'about' },
    { link: 'Product', path: 'product' },
    { link: 'Testimonial', path: 'testimonial' },
  ];
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav
        className={`py-4 px-4 lg:px-14 ${
          isSticky
            ? 'sticky top-0 left-0 right-0 border-b bg-white duration-300'
            : ''
        }`}
      >
        <div className='flex justify-between items-center gap-8'>
          <a className='flex items-center space-x-2 text-2xl font-bold' href=''>
            <img
              className='w-6 inline-block items-center'
              src={logo}
              alt='logo'
            />
            <span className='text-neutralBlack'>Meto Clint</span>
          </a>

          {/* nav items for large device */}
          <ul className='md:flex space-x-12 hidden'>
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className='block text-lg text-neutralDGrey hover:text-primaryPrimary first:font-medium cursor-pointer transition-all'
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* button for large device */}
          <div className='space-x-10 hidden lg:flex items-center'>
            <a
              href='#'
              className='hidden lg:flex items-center text-actionSuccess hover:text-neutralDGrey'
            >
              Login
            </a>
            <button className='bg-actionSuccess text-white px-4 py-2 transition-all duration-300 rounded-md hover:bg-neutralDGrey'>
              Sign up
            </button>
          </div>

          {/* Menu button for mobile device */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenue}
              className='focus:outline-none text-neutralDGrey focus:text-neutralGrey'
            >
              {isMenueOpen ? (
                <FaXmark className='h-6 w-6'></FaXmark>
              ) : (
                <FaBars className='h-6 w-6'></FaBars>
              )}
            </button>
          </div>
        </div>

        {/* nav items for mobile device */}
        <div className={`space-y-4 px-4 mt-16 py-7 bg-primaryPrimary ${isMenueOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              spy={true}
              smooth={true}
              offset={-100}
              key={path}
              className='block text-lg text-white hover:text-gray-500 first:font-medium cursor-pointer transition-all'
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
