import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import KVKKPage from './pages/KVKKPage';
import TermsPage from './pages/TermsPage';

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-safe-500 selection:text-white">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/ekibimiz" element={<TeamPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPage />} />
          <Route path="/kvkk-aydinlatma" element={<KVKKPage />} />
          <Route path="/kullanim-kosullari" element={<TermsPage />} />
        </Routes>
      </main>
      <Contact />
    </div>
  );
}

export default App;
