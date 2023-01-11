import GlobalStyle from "./GlobalStyle";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Benefits from "./pages/Benefits/Benefits";
import Advantages from "./pages/Advantages/Advantages";
import Depositions from "./pages/Depositions/Depositions";
import Download from "./pages/Download/Download";
import Help from "./pages/Help/Help";

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Hero/>
      <Benefits/>
      <Advantages/>
      <Depositions/>
      <Download/>
      <Help/>
    </>
  );
};

export default App;
