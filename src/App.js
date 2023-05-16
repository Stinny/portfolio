import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';

function App() {
  return (
    <div className='max-w-6xl mx-auto border drop-shadow-md bg-white rounded h-fit p-10 mt-10 mb-24'>
      <Header />
      <Skills />
    </div>
  );
}

export default App;
