import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import { isMobile } from 'react-device-detect';

function App() {
  const [BGcolor, setColor] = useState('bg-white');

  const handleColorChange = (color) => {
    setColor(color);
  };

  return isMobile ? (
    <div className='p-2 h-fit'>
      <div className='flex max-w-6xl mx-auto justify-end mt-10'>
        <div className='flex justify-between mb-2'>
          <button
            type='button'
            className={`bg-white rounded-full h-6 w-6 border ${
              BGcolor === 'bg-white' ? 'border-stone-800' : 'border-gray-200'
            } p-2`}
            onClick={(e) => handleColorChange('bg-white')}
          ></button>
          <button
            type='button'
            className={`bg-green-200 rounded-full h-6 w-6 border ml-2 ${
              BGcolor === 'bg-green-200'
                ? 'border-stone-800'
                : 'border-gray-200'
            } p-2`}
            onClick={(e) => handleColorChange('bg-green-200')}
          ></button>
          <button
            type='button'
            className={`bg-blue-200 rounded-full h-6 w-6 border ml-2 ${
              BGcolor === 'bg-blue-200' ? 'border-stone-800' : 'border-gray-200'
            } p-2`}
            onClick={(e) => handleColorChange('bg-blue-200')}
          ></button>
          <button
            type='button'
            className={`bg-red-200 rounded-full h-6 w-6 border ml-2 ${
              BGcolor === 'bg-red-200' ? 'border-stone-800' : ''
            } p-2`}
            onClick={(e) => handleColorChange('bg-red-200')}
          ></button>
        </div>
      </div>
      <div
        className={`max-w-6xl mx-auto border drop-shadow-md ${BGcolor} rounded h-fit p-2 mb-24`}
      >
        <Header />
        <Skills />
      </div>
    </div>
  ) : (
    <>
      <div className='flex max-w-6xl mx-auto justify-end mt-10'>
        <div className='flex justify-between mb-2'>
          <button
            type='button'
            className={`bg-white rounded-full h-6 w-6 border ${
              BGcolor === 'bg-white' ? 'border-stone-800' : 'border-gray-200'
            } p-2`}
            onClick={(e) => handleColorChange('bg-white')}
          ></button>
          <button
            type='button'
            className={`bg-green-200 rounded-full h-6 w-6 border ml-2 ${
              BGcolor === 'bg-green-200'
                ? 'border-stone-800'
                : 'border-gray-200'
            } p-2`}
            onClick={(e) => handleColorChange('bg-green-200')}
          ></button>
          <button
            type='button'
            className={`bg-blue-200 rounded-full h-6 w-6 border ml-2 ${
              BGcolor === 'bg-blue-200' ? 'border-stone-800' : 'border-gray-200'
            } p-2`}
            onClick={(e) => handleColorChange('bg-blue-200')}
          ></button>
          <button
            type='button'
            className={`bg-red-200 rounded-full h-6 w-6 border ml-2 ${
              BGcolor === 'bg-red-200' ? 'border-stone-800' : ''
            } p-2`}
            onClick={(e) => handleColorChange('bg-red-200')}
          ></button>
        </div>
      </div>
      <div
        className={`max-w-6xl mx-auto border drop-shadow-md ${BGcolor} rounded h-fit p-10 mb-24`}
      >
        <Header />
        <Skills />
      </div>
    </>
  );
}

export default App;
