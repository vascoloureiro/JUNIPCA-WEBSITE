import './landpage.css';
import HeaderLandPage from './Header/Header.tsx';
import Footer from './Footer/Footer';
import HeroSection from './Hero/Hero.tsx';
import Features from './Features/FeaturesSection.tsx';
import WhoAreWe from './WhoAreWe/WhoAreWe.tsx';
import Team from './Team/team.tsx';


export default function LandPageIndex() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Services', ariaLabel: 'View our services', link: '/services' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
  ];

  const socialItems = [
    { label: 'Twitter', link: 'https://twitter.com' },
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' }
  ];

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