import React from 'react';
import logo from './logo.svg';
import CalendarFacts from "./Components/CalendarFacts"
import {FactsContextProvider} from "./Context/FactsContext"
import FavouriteIcon from "./Components/FavouriteIcon"

function App() {
  return (
    <div className="h-screen flex items-center justify-around bg-slate-200">
      <FactsContextProvider>
        <FavouriteIcon/>
      <CalendarFacts/>
      </FactsContextProvider>
    </div>
  );
}

export default App;
