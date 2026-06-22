import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollToTop } from './components/ScrollToTop';
import { CustomCursor } from './components/CustomCursor';
import { ScrollButterfly } from './components/ScrollButterfly';
import { Home } from './pages/Home';
import { About } from './pages/about/About';
import { Team } from './pages/about/Team';
import { Ethics } from './pages/about/Ethics';
import { TaxReturns } from './pages/about/TaxReturns';
import { Newsletters } from './pages/about/Newsletters';
import { WhatIsVTS } from './pages/vts/WhatIsVTS';
import { Diagnosing } from './pages/vts/Diagnosing';
import { Treatment } from './pages/vts/Treatment';
import { KeyTerms } from './pages/vts/KeyTerms';
import { KnowledgeHub } from './pages/knowledge/KnowledgeHub';
import { Literature } from './pages/knowledge/Literature';
import { Partners } from './pages/knowledge/Partners';
import { PeerSupport } from './pages/knowledge/PeerSupport';
import { Stories } from './pages/knowledge/Stories';
import { Shop } from './pages/Shop';
import { Donate } from './pages/Donate';
import { Volunteer } from './pages/Volunteer';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressBar />
      <ScrollToTop />
      <CustomCursor />
      <ScrollButterfly />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/team" element={<Team />} />
          <Route path="/about/ethics" element={<Ethics />} />
          <Route path="/about/tax-returns" element={<TaxReturns />} />
          <Route path="/about/newsletters" element={<Newsletters />} />
          <Route path="/what-is-vts" element={<WhatIsVTS />} />
          <Route path="/what-is-vts/diagnosing" element={<Diagnosing />} />
          <Route path="/what-is-vts/treatment" element={<Treatment />} />
          <Route path="/what-is-vts/key-terms" element={<KeyTerms />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/knowledge-hub/literature" element={<Literature />} />
          <Route path="/knowledge-hub/partners" element={<Partners />} />
          <Route path="/knowledge-hub/peer-support" element={<PeerSupport />} />
          <Route path="/knowledge-hub/stories" element={<Stories />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
