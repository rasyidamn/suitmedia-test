import { BrowserRouter, Route, Routes } from "react-router"
import Header from "./components/Header"
import WorkPage from "./pages/WorkPage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import IdeasPage from "./pages/IdeasPage"
import CareersPage from "./pages/CareersPage"
import ContactPage from "./pages/ContactPage"



function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/ideas" element={<IdeasPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
