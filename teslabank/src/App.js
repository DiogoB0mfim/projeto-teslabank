import GlobalStyle from "./GlobalStyle";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Benefits from "./pages/Benefits/Benefits";
import Advantages from "./pages/Advantages/Advantages";

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <Benefits/>
      <Advantages/>
    </>
  );
};

export default App;
