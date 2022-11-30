import About from "./components/layout/About";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import Home from "./components/layout/Home";
import Navigation from "./components/layout/Navigation";
import Portfolio from "./components/layout/Portfolio";
import { WaysPortfolioProvider } from "./context/WaysPortContext";


export default function App() {
  return (
    <WaysPortfolioProvider>
      <div className="App">
        <Navigation />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </WaysPortfolioProvider>
  );
}


