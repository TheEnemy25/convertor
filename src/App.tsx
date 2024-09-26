import React from "react";
import Header from "./components/Header";
import CurrencyConvertor from "./pages/CurrencyConvertor";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <CurrencyConvertor />
      </main>
    </>
  );
};

export default App;
