import React from "react";
import Header from "./components/Header";
import CurrencyConverter from "./pages/CurrencyConverter";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <CurrencyConverter />
      </main>
    </>
  );
};

export default App;
