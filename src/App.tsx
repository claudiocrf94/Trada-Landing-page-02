/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntegrationsMarquee from './components/IntegrationsMarquee';
import FeaturesHorizontal from './components/FeaturesHorizontal';
import PricingCarousel from './components/PricingCarousel';
import SocialProof from './components/SocialProof';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-rich-black text-flash-white font-sans">
      <Navbar />
      <Hero />
      <IntegrationsMarquee />
      <FeaturesHorizontal />
      <SocialProof />
      <PricingCarousel />
      <Footer />
    </div>
  );
}
