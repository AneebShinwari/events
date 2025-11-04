import Hero from '../components/Hero';
import TeamSection from '../components/TeamSection';
import Introduction from '../components/Introduction';
import FeaturedEvent from '../components/FeaturedEvent';
import ServicesOverview from '../components/ServicesOverview';
import Capabilities from '../components/Capabilities';
import MissionValues from '../components/MissionValues';
import ExperientialMarketing from '../components/ExperientialMarketing';
import StaffSection from '../components/StaffSection';
import ClientLogos from '../components/ClientLogos';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <TeamSection />
      <Introduction />
      <FeaturedEvent />
      <ServicesOverview />
      <Capabilities />
      <MissionValues />
      <ExperientialMarketing />
      <StaffSection />
      <ClientLogos />
      <ContactCTA />
    </div>
  );
};

export default Home;
