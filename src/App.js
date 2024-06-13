import { BrowserRouter } from "react-router-dom";
import { Navbar, Home, Presentation, Missions, Event, Contact,Slider, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />  
        </div>
        <Slider />
        <Missions />
        <Presentation />
        <Event />
        <Contact />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;