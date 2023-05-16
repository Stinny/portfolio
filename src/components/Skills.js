import React from 'react';
import { IoStorefrontOutline } from 'react-icons/io5';
import { AiOutlineCloudDownload } from 'react-icons/ai';
import { isMobile } from 'react-device-detect';

//mui
import Chip from '@mui/material/Chip';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';

const Skills = () => {
  return isMobile ? (
    <div className='w-full mx-auto flex flex-col mt-10'>
      <p className='text-stone-800 mt-4 font-medium'>Why Me?</p>
      <p className='mt-2'>
        Experienced web developer with a strong focus on the MERN stack
        (MongoDB, Express.js, React.js, Node.js). Skilled in developing
        responsive and dynamic web applications with a keen eye for user
        experience and intuitive design. Proficient in front-end and back-end
        development, utilizing modern tools and frameworks. Seeking
        opportunities to contribute my expertise and passion for web development
        to drive innovative and impactful projects.
      </p>
      <p className='text-stone-800 mt-6 font-medium'>My Interests</p>
      <div className='flex flex-wrap w-full mt-2'>
        <Chip
          label='Back-end Development'
          variant='outlined'
          icon={<SettingsIcon />}
        />
        <Chip
          label='Front-end Development'
          variant='outlined'
          className='ml-2'
          icon={<PersonIcon />}
        />
      </div>
      <p className='text-stone-800 mt-6 font-medium'>My Skills</p>
      <div className='flex flex-wrap w-full mt-2'>
        <Chip label='JavaScript' variant='outlined' className='ml-2 mt-2' />
        <Chip label='ReactJS' variant='outlined' className='ml-2 mt-2' />
        <Chip label='NodeJS' variant='outlined' className='ml-2 mt-2' />
        <Chip label='ExpressJS' variant='outlined' className='ml-2 mt-2' />
        <Chip label='MongoDB' variant='outlined' className='ml-2 mt-2' />
        <Chip label='AWS' variant='outlined' className='ml-2 mt-2' />
        <Chip label='Stripe' variant='outlined' className='ml-2 mt-2' />
        <Chip label='Netlify' variant='outlined' className='ml-2 mt-2' />
        <Chip label='Heroku' variant='outlined' className='ml-2 mt-2' />
        <Chip label='Postmark' variant='outlined' className='ml-2 mt-2' />
        <Chip label='Visual Studio' variant='outlined' className='ml-2 mt-2' />
        <Chip label='Github' variant='outlined' className='ml-2 mt-2' />
        <Chip label='Backend Dev' variant='outlined' className='ml-2 mt-2' />
        <Chip label='Frontend Dev' variant='outlined' className='ml-2 mt-2' />
      </div>

      <p className='text-stone-800 mt-6 font-medium'>My Biggest Projects</p>
      <div className='w-full border border-stone-800 rounded flex flex-col mt-4'>
        <div className='flex flex-col w-full p-2'>
          <div className='flex justify-between items-center'>
            <p className='text-3xl font-medium text-stone-800'>Fruntt</p>
            <a
              className='border-2 h-8 w-24 text-sm border-stone-800 flex items-center justify-center rounded'
              href='https://fruntt.com'
              target='_blank'
            >
              View here
            </a>
          </div>
          <p className='mt-4 text-stone-800'>
            An eCommerce platform for digital creators to sell their products.
            We allow creators to sell their digital products from customized
            pages while keeping 99% of what they earn.
          </p>

          <p className='text-stone-800 text-sm mt-4'>Built using</p>
          <div className='flex flex-wrap w-full mt-2'>
            <Chip label='ReactJS' variant='outlined' className='ml-2 mt-2' />
            <Chip label='NodeJS' variant='outlined' className='ml-2 mt-2' />
            <Chip label='ExpressJS' variant='outlined' className='ml-2 mt-2' />
            <Chip label='MongoDB' variant='outlined' className='ml-2 mt-2' />
            <Chip label='AWS' variant='outlined' className='ml-2 mt-2' />
            <Chip label='Stripe' variant='outlined' className='ml-2 mt-2' />
          </div>
        </div>
        <div className='w-full h-32 bg-gray-200 flex items-center justify-center'>
          <IoStorefrontOutline className='text-6xl' />
        </div>
      </div>

      <div className='w-full border border-stone-800 rounded flex flex-col mt-4'>
        <div className='flex flex-col w-full p-2'>
          <div className='flex justify-between items-center'>
            <p className='text-3xl font-medium text-stone-800'>FileUpDown</p>
            <a
              className='border-2 h-8 w-24 text-sm border-stone-800 flex items-center justify-center rounded'
              href='https://fruntt.com'
              target='_blank'
            >
              View here
            </a>
          </div>
          <p className='mt-4 text-stone-800'>
            Simple cloud storage for any of your files. Create an account with
            email and start storing your files right away.
          </p>

          <p className='text-stone-800 text-sm mt-4'>Built using</p>
          <div className='flex flex-wrap w-full mt-2'>
            <Chip label='ReactJS' variant='outlined' className='mt-2 ml-2' />
            <Chip label='NodeJS' variant='outlined' className='ml-2 mt-2' />
            <Chip label='ExpressJS' variant='outlined' className='ml-2 mt-2' />
            <Chip label='MongoDB' variant='outlined' className='ml-2 mt-2' />
            <Chip label='AWS' variant='outlined' className='ml-2 mt-2' />
          </div>
        </div>
        <div className='w-full h-32 bg-blue-400 flex items-center justify-center'>
          <AiOutlineCloudDownload className='text-6xl text-white' />
        </div>
      </div>
    </div>
  ) : (
    <div className='w-10/12 mx-auto flex flex-col mt-10'>
      <p className='text-stone-800 mt-4 font-medium'>Why Me?</p>
      <p className='mt-2'>
        Experienced web developer with a strong focus on the MERN stack
        (MongoDB, Express.js, React.js, Node.js). Skilled in developing
        responsive and dynamic web applications with a keen eye for user
        experience and intuitive design. Proficient in front-end and back-end
        development, utilizing modern tools and frameworks. Seeking
        opportunities to contribute my expertise and passion for web development
        to drive innovative and impactful projects.
      </p>
      <p className='text-stone-800 mt-6 font-medium'>My Interests</p>
      <div className='flex flex-wrap w-full mt-2'>
        <Chip
          label='Backend Development'
          variant='outlined'
          icon={<SettingsIcon />}
        />
        <Chip
          label='Frontend Development'
          variant='outlined'
          className='ml-2'
          icon={<PersonIcon />}
        />
      </div>
      <p className='text-stone-800 mt-6 font-medium'>My Skills</p>
      <div className='flex flex-wrap w-full mt-2'>
        <Chip label='JavaScript' variant='outlined' />
        <Chip label='React' variant='outlined' className='ml-2' />
        <Chip label='Nodejs' variant='outlined' className='ml-2' />
        <Chip label='Expressjs' variant='outlined' className='ml-2' />
        <Chip label='MongoDB' variant='outlined' className='ml-2' />
        <Chip label='AWS' variant='outlined' className='ml-2' />
        <Chip label='Stripe' variant='outlined' className='ml-2' />
        <Chip label='Netlify' variant='outlined' className='ml-2' />
        <Chip label='Heroku' variant='outlined' className='ml-2' />
        <Chip label='Postmark' variant='outlined' className='ml-2' />
        <Chip label='Visual Studio' variant='outlined' className='ml-2' />
        <Chip label='Github' variant='outlined' className='ml-2 mt-2' />
        <Chip label='Backend Dev' variant='outlined' className='ml-2 mt-2' />
        <Chip label='Frontend Dev' variant='outlined' className='ml-2 mt-2' />
      </div>

      <p className='text-stone-800 mt-6 font-medium'>My Biggest Projects</p>
      <div className='w-full border rounded flex mt-4'>
        <div className='flex flex-col w-8/12 p-2'>
          <div className='flex justify-between items-center'>
            <p className='text-3xl font-medium text-stone-800'>Fruntt</p>
            <a
              className='border-2 h-8 w-24 text-sm border-stone-800 flex items-center justify-center rounded'
              href='https://fruntt.com'
              target='_blank'
            >
              View here
            </a>
          </div>
          <p className='mt-4 text-stone-800'>
            An eCommerce platform for digital creators to sell their products.
            We allow creators to sell their digital products from customized
            pages while keeping 99% of what they earn.
          </p>

          <p className='text-gray-400 text-sm mt-4'>Built using</p>
          <div className='flex flex-wrap w-full mt-2'>
            <Chip label='Reactjs' variant='outlined' />
            <Chip label='Nodejs' variant='outlined' className='ml-2' />
            <Chip label='Expressjs' variant='outlined' className='ml-2' />
            <Chip label='MongoDB' variant='outlined' className='ml-2' />
            <Chip label='AWS' variant='outlined' className='ml-2' />
            <Chip label='Stripe' variant='outlined' className='ml-2' />
          </div>
        </div>
        <div className='w-4/12 bg-gray-200 flex items-center justify-center'>
          <IoStorefrontOutline className='text-6xl' />
        </div>
      </div>

      <div className='w-full border rounded flex mt-4'>
        <div className='flex flex-col w-8/12 p-2'>
          <div className='flex justify-between items-center'>
            <p className='text-3xl font-medium text-stone-800'>FileUpDown</p>
            <a
              className='border-2 h-8 w-24 text-sm border-stone-800 flex items-center justify-center rounded'
              href='https://fruntt.com'
              target='_blank'
            >
              View here
            </a>
          </div>
          <p className='mt-4 text-stone-800'>
            Simple cloud storage for any of your files. Create an account with
            email and start storing your files right away.
          </p>

          <p className='text-gray-400 text-sm mt-4'>Built using</p>
          <div className='flex flex-wrap w-full mt-2'>
            <Chip label='Reactjs' variant='outlined' />
            <Chip label='Nodejs' variant='outlined' className='ml-2' />
            <Chip label='Expressjs' variant='outlined' className='ml-2' />
            <Chip label='MongoDB' variant='outlined' className='ml-2' />
            <Chip label='AWS' variant='outlined' className='ml-2' />
          </div>
        </div>
        <div className='w-4/12 bg-blue-400 flex items-center justify-center'>
          <AiOutlineCloudDownload className='text-6xl text-white' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
