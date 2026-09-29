import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ApplicationForm from "./components/Applicationform";
import ScrollToTop from './ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Careers from './pages/Careers';
import ContactPage from './pages/ContactPage';

// Floating Chatbot
import Chatbot from './components/Chatbot';

function App() {
  return (
    <Router>
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/apply" element={<ApplicationForm />} />
        </Routes>
      </main>
      <ScrollToTop />
      <Chatbot />
      <Footer />
    </Router>
  );
}

export default App;



