import './offers.scss';

const Offers = () => {
  return (
    <div className='offersContainer'>
      <h2 className='homeTitle'>Special offers</h2>
      <p>Promotions, deals, and special offers for you</p>
      <div className='offersItems'>
        <div className='itemLeft'>
          <div className='offersImg'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/nils-nedel-ONpGBpns3cs-unsplash.jpg?alt=media&token=83738de7-d970-4b2a-ac10-58de7388f6f5'
              alt=''
            />
          </div>
          <div className='offersTexts'>
            <h3>Save 15% with Late Escape Deals</h3>
            <p> Check one more destination off your wishlist</p>
            <button className='deal'>Explore deals</button>
          </div>
        </div>
        <div className='itemRight'>
          <div className='offersImg'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/kal-visuals-bUtzPrCMj8Q-unsplash.jpg?alt=media&token=9d63e10e-5e16-4efb-ad8d-7fe008b45dea'
              alt=''
            />
          </div>
          <div className='offersTexts'>
            <h3>Fly away to your dream vacation</h3>
            <p> Get inspired – compare and book flights with flexibility</p>
            <button className='deal'>Search for flights</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
