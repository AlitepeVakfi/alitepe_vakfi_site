import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AliTepeBio from "./pages/AliTepeBio";
import MutevelliHeyeti from "./pages/MutevelliHeyeti";
import Faaliyetlerimiz from "./pages/Faaliyetlerimiz";
import LastEvents from "./pages/Events/LastEvents";
import EventDetails from "./pages/Events/EventDetails";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/ali-tepe" element={<AliTepeBio />} />
        <Route path="/mutevelli-heyeti" element={<MutevelliHeyeti />} />
        <Route path="/faaliyetlerimiz" element={<Faaliyetlerimiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/etkinlikler" element={<LastEvents />} />
        <Route path="/etkinlik/:eventId" element={<EventDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
