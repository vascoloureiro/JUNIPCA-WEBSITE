import './landpage.css';
import HeaderLandPage from './Header/Header.tsx';
import Footer from './Footer/Footer';
import HeroSection from './Hero/Hero.tsx';
import Features from './Features/FeaturesSection.tsx';
import WhoAreWe from './WhoAreWe/WhoAreWe.tsx';
import Team from './Team/team.tsx';


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