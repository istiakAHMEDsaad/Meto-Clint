import { Carousel } from 'flowbite-react';
import { Button } from 'flowbite-react';
import React from 'react';
import banner1 from '../assets/Illustration1.svg';
import banner2 from '../assets/Illustration2.png';
import banner3 from '../assets/Illustration3.png';

const Home = () => {
  return (
    <div className='bg-neutralSilver'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
          
          {/* ------- banner 1 ------- */}
          <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
            <div>
              <img className='lg:w-[28rem] md:w-[24rem] w-[20rem]' src={banner1} alt='' />
            </div>
            <div className='md:w-1/2'>
              <h2 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                Lesson and insights{' '}
                <span className='text-tintOne leading-snug'>from 8 years</span>
              </h2>
              <p className='text-neutralDGrey text-base mb-8'>
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className='btn-primary'>
                Register
              </button>
            </div>
          </div>
          
          {/* ------- banner 2 ------- */}
          <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
            <div>
              <img className='lg:w-[28rem] md:w-[24rem] w-[20rem]' src={banner2} alt='' />
            </div>
            <div className='md:w-1/2'>
              <h2 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                Let&apos;s Learn and Earn{' '}
                <span className='text-tintOne leading-snug'>in 4 month</span>
              </h2>
              <p className='text-neutralDGrey text-base mb-8'>
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className='btn-primary'>
                Register
              </button>
            </div>
          </div>

          {/* ------- banner 3 ------- */}
          <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
            <div>
              <img className='lg:w-[40rem] md:w-[34rem] w-[30rem]' src={banner3} alt='' />
            </div>
            <div className='md:w-1/2'>
              <h2 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
              Let&apos;s Learn and Earn Money{' '}
                <span className='text-tintOne leading-snug'>from 8 years</span>
              </h2>
              <p className='text-neutralDGrey text-base mb-8'>
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <button className='btn-primary'>
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;

/*
<Button>Click me</Button>
*/
