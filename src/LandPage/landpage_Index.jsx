import './landpage.css';
import HeaderLandPage from './Header/Header';
import Footer from './Footer/Footer';
import HeroSection from './Hero/Hero';
import Features from './Features/FeaturesSection';
import WhoAreWe from './WhoAreWe/WhoAreWe';
import Team from './Team/TeamComponet';


export default function LandPageIndex() {

  return (<>

    <div className="landpage-main-container">

      <HeaderLandPage />
      <HeroSection />
      <WhoAreWe />
      <Features />
      <Team />
      {/* <PricingSection />

      <TestimonialsSection /> */}
      <Footer />
    </div>
  </>);
}