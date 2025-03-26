import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Services from "./components/Sections";
import IndoorServices from "./components/IndoorServices";
import OutdoorServices from "./components/OutDoorServices";
import DevelopmentServices from "./components/DevelopmentServices";
import ConsultationPage from "./page/ConsultationPage";
import BookAppointment from "./page/BookAppointment";
import RequestDemo from "./page/DemoPage";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/indoor" element={<IndoorServices />} />
          <Route path="/services/outdoor" element={<OutdoorServices />} />
          <Route path="/services/development" element={<DevelopmentServices />} />
          <Route path="/consultation" element={<ConsultationPage />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/request-demo" element={<RequestDemo />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
