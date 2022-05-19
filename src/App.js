import "./App.css";
import {
  Navbar,
  Footer,
  Pricing,
  AllInOne,
  Hero,
  Support,
  About,
} from "components";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;
