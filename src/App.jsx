import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-on-surface font-display flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;