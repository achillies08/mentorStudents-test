import * as React from "react";
import AdCard from "./adCard";
import "./App.css";
import Form from "./form";
import renderContext from "./renderContext";

function App() {
  const [ad, setAd] = React.useState([]);
  return (
    <div className="App">
      <renderContext.Provider value={{ad, setAd}}>
        <Form />
        <AdCard/>
      </renderContext.Provider>
    </div>
  );
}

export default App;
