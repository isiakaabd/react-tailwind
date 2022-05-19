import "./App.css";
import { Navbar, Pricing, AllInOne, Hero, Support, About } from "components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
    </>
  );
};

export default App;
