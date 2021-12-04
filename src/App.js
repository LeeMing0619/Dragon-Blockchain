import React, { useEffect } from "react";
import Footer from "./parts/base/Footer";
import Header from "./parts/base/Header";
import Main from "./parts/base/main/Main";
import WOW from "wowjs";
function App() {
  // Defining WOW
  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
