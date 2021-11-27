import React, { useState } from "react";
import "./App.css";
import i18n from "./translations/i18n.js";

import { Welcome } from "./components/Welcome";

function App() {
  const [language, setLanguage] = useState("en");

  const handleOnclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    setLanguage(target.value);
    i18n.changeLanguage(target.value);
  };

  console.log(language);

  return (
    <div className="App">
      <header className="App-header">
        <Welcome />
        <button value="en" onClick={handleOnclick}>
          English
        </button>
        <button value="de" onClick={handleOnclick}>
          Deutsch
        </button>
      </header>
    </div>
  );
}

export default App;
