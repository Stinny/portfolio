import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import { isMobile } from 'react-device-detect';

function App() {
  return isMobile ? (
    <div className='p-2 h-fit'>
      <div className='max-w-6xl mx-auto border drop-shadow-md bg-white rounded h-fit p-2 mt-10 mb-24'>
        <Header />
        <Skills />
      </div>
    </div>
  ) : (
    <div className='max-w-6xl mx-auto border drop-shadow-md bg-white rounded h-fit p-10 mt-10 mb-24'>
      <Header />
      <Skills />
    </div>
  );
}

export default App;
