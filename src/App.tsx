import React from 'react';
import logo from './logo.svg';
import CalendarFacts from "./Components/CalendarFacts"
import {FactsContextProvider} from "./Context/FactsContext"
import FavouriteIcon from "./Components/FavouriteIcon"

function App() {
  return (
    <div className="h-screen flex flex-col items-center justify-start space-y-10 bg-slate-200 pt-40">
      <FactsContextProvider>
        <FavouriteIcon/>
      <CalendarFacts/>
      </FactsContextProvider>
    </div>
  );
}

export default App;
