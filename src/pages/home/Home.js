import './home.scss';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedHome from '../../components/featuredHome/FeaturedHome';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import Inspiration from '../../components/inspiration/Inspiration';
import Offers from '../../components/offers/Offers';
import Advisory from '../../components/advisory/Advisory';
import TravelConfidence from '../../components/travelConfidence/TravelConfidence';

const Home = () => {
  return (
    <div>
      <Header />
      <div className='homeContainer'>
        <Featured />
        <Advisory />
        <Offers />
        <h2 className='homeTitle'>Browse by Property Type</h2>
        <PropertyList />
        <TravelConfidence />
        <h2 className='homeTitle'>Book Homes From Local Hosts</h2>
        <FeaturedHome />
        <h2 className='homeTitle'>Get inspiration for your next trip</h2>
        <Inspiration />
        <MailList />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
