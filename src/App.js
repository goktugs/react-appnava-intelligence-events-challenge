import './App.css';
import Filter from './components/Filter';
import Results from './components/Results';
import Events from './components/Events';
import { GlobalProvider } from './Context/GlobalContext';

function App() {
  return (
    <div className="bg-[#4b0082] h-screen">
      <div className="max-w-[1200px] mx-auto flex flex-row justify-center max-h-[700px] pt-32">
        <GlobalProvider>
          <div className="w-4/6 flex flex-col">
            <Filter />
            <Results />
          </div>
          <div className="w-2/6 flex flex-col ml-1">
            <Events />
          </div>
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
