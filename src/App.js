import { BrowserRouter } from "react-router-dom";
import { Navbar, Home, Presentation, Missons, Event, Contact, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />  
        </div>
        <Home />
        <Presentation />
        <Missons />
        <Event />
        <div className='relative z-0'>
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;