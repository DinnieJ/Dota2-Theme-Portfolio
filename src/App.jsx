import React from 'react'
import BasicInfo from "./components/BasicInfo";
import StatBoard from './components/StatBoard';

const App = () => {
  return (
    <div id="portfolio-dota" className="bg-gradient-to-tr from-gray-700 via-gray-800 to-gray-400 w-full overflow-hidden">
      <BasicInfo/>
      <StatBoard/>
    </div>
  );
};

export default App;
