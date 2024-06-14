import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Home, Presentation, Missions, Event, Contact, Footer, MentionsLegales } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-white'>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<>
            <Home />
            <Missions />
            <Event />
            <Presentation />
            <Contact />
          </>} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;