import { Routes, Route, useLocation } from 'react-router-dom';
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
import ConnectPage from './pages/ConnectPage';

function App() {
  const location = useLocation();
  const isConnect = location.pathname.startsWith('/connect');

  return (
    <div className="min-h-screen bg-dark-900 text-white font-sans selection:bg-safe-500 selection:text-white">
      <ScrollToTop />
      {!isConnect && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<AboutPage />} />
          <Route path="/ekibimiz" element={<TeamPage />} />
          <Route path="/iletisim" element={<ContactPage />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPage />} />
          <Route path="/kvkk-aydinlatma" element={<KVKKPage />} />
          <Route path="/kullanim-kosullari" element={<TermsPage />} />
          <Route path="/connect" element={<ConnectPage />} />
          <Route path="/connect/:slug" element={<ConnectPage />} />
        </Routes>
      </main>
      {!isConnect && <Contact />}
    </div>
  );
}

export default App;
