import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ScrollToTop } from './components/ScrollToTop';
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
import { PartnersResources } from './pages/knowledge/PartnersResources';
import { ForFamilies } from './pages/knowledge/partners/ForFamilies';
import { PrenatalChecklist } from './pages/knowledge/partners/PrenatalChecklist';
import { EducationPage } from './pages/knowledge/partners/EducationPage';
import { Memorialization } from './pages/knowledge/partners/Memorialization';
import { ForProviders } from './pages/knowledge/partners/ForProviders';
import { PrenatalProviderReference } from './pages/knowledge/partners/PrenatalProviderReference';
import { PeerSupport } from './pages/knowledge/PeerSupport';
import { Stories } from './pages/knowledge/Stories';
import { ShareYourStory } from './pages/knowledge/ShareYourStory';
import { Shop } from './pages/Shop';
import { Donate } from './pages/Donate';
import { Volunteer } from './pages/Volunteer';
import { Contact } from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgressBar />
      <ScrollToTop />
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
          <Route path="/knowledge-hub/partners" element={<PartnersResources />} />
          <Route path="/knowledge-hub/partners/families" element={<ForFamilies />} />
          <Route path="/knowledge-hub/partners/families/prenatal-checklist" element={<PrenatalChecklist />} />
          <Route path="/knowledge-hub/partners/families/education" element={<EducationPage />} />
          <Route path="/knowledge-hub/partners/memorialization" element={<Memorialization />} />
          <Route path="/knowledge-hub/partners/providers" element={<ForProviders />} />
          <Route path="/knowledge-hub/partners/providers/prenatal-reference" element={<PrenatalProviderReference />} />
          <Route path="/knowledge-hub/peer-support" element={<PeerSupport />} />
          <Route path="/knowledge-hub/stories" element={<Stories />} />
          <Route path="/knowledge-hub/stories/share" element={<ShareYourStory />} />
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
