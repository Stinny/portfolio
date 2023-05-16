import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';
import { BsStackOverflow } from 'react-icons/bs';
import { AiOutlineDownload } from 'react-icons/ai';
import img from '../images/justin.JPG';
import resume from '../images/MannResume2023.pdf';
import { isMobile } from 'react-device-detect';

//mui
import Avatar from '@mui/material/Avatar';

const Header = () => {
  return isMobile ? (
    <div className='w-full mx-auto flex flex-col'>
      <div className='flex items-center'>
        <Avatar
          src={img}
          sx={{ width: 60, height: 60 }}
          className='border border-stone-800'
        />
        <div className='flex flex-col border-l border-stone-800 pl-2 ml-4'>
          <p className='text-2xl font-medium'>Justin Mann</p>
          <p>Boston, MA | justinmann24@gmail.com | 781-956-6606</p>
        </div>
      </div>

      <div className='w-full flex justify-between items-center mt-2'>
        <div className='flex items-center justify-between text-2xl w-full'>
          <a
            href='https://www.linkedin.com/in/justin-mann-b4680024/'
            target='_blank'
          >
            <AiFillLinkedin className='hover:text-blue-700' />
          </a>
          <a href='https://github.com/Stinny'>
            <AiFillGithub className='hover:text-gray-500 ml-2' />
          </a>
          <a href='https://twitter.com/StinnyM'>
            <AiFillTwitterCircle className='hover:text-blue-500 ml-2' />
          </a>
          <a
            href='https://stackoverflow.com/users/9070108/stinny'
            target='_blank'
          >
            <BsStackOverflow className='hover:text-orange-500 ml-2' />
          </a>
        </div>
        <a
          className='w-full h-8 border-2 rounded border-stone-800 flex items-center justify-center ml-6'
          href={resume}
          download
        >
          My Resume <AiOutlineDownload className='ml-2 text-xl' />
        </a>
      </div>
    </div>
  ) : (
    <div className='w-11/12 mx-auto flex items-center justify-around'>
      <Avatar
        src={img}
        sx={{ width: 60, height: 60 }}
        className='border border-stone-800'
      />
      <div className='flex flex-col w-7/12 border-l border-stone-800 pl-2'>
        <p className='text-3xl font-medium'>Justin Mann</p>
        <p>Boston, MA | justinmann24@gmail.com | 781-956-6606</p>
      </div>

      <div className='w-2/12 flex flex-col'>
        <div className='flex items-center justify-between text-2xl w-full'>
          <a
            href='https://www.linkedin.com/in/justin-mann-b4680024/'
            target='_blank'
          >
            <AiFillLinkedin className='hover:text-blue-700' />
          </a>
          <a href='https://github.com/Stinny'>
            <AiFillGithub className='hover:text-gray-500 ml-2' />
          </a>
          <a href='https://twitter.com/StinnyM'>
            <AiFillTwitterCircle className='hover:text-blue-500 ml-2' />
          </a>
          <a
            href='https://stackoverflow.com/users/9070108/stinny'
            target='_blank'
          >
            <BsStackOverflow className='hover:text-orange-500 ml-2' />
          </a>
        </div>
        <a
          className='w-full h-8 border-2 rounded border-stone-800 flex items-center justify-center mt-2'
          href={resume}
          download
        >
          My Resume <AiOutlineDownload className='ml-2 text-xl' />
        </a>
      </div>
    </div>
  );
};

export default Header;
