import './App.css';
import AppFooter from './components/AppFooter';
import AppNav from './components/AppNav';
import About from './pages/About';
import About2 from './pages/About2';
import Explore from './pages/Explore';
import FAQ from './pages/FAQ';
import Header from './pages/Header';
import ParallaxSec from './pages/ParallaxSec';
import Stats from './pages/Stats';
import Subscribe from './pages/Subscribe';
import Testimonials from './pages/Testimonials';
import VideoSection from './pages/VideoSection';

function App() {
  return (
    <div className="App">
      <AppNav />
      <Header />
      <Stats />
      <About />
      <About2 />
      <VideoSection />
      <Explore />
      <Testimonials />
      <FAQ />
      <ParallaxSec />
      <Subscribe />
      <AppFooter />
    </div>
  );
}

export default App;
