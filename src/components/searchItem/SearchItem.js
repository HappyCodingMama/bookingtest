import './searchItem.scss';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/nils-nedel-ONpGBpns3cs-unsplash.jpg?alt=media&token=83738de7-d970-4b2a-ac10-58de7388f6f5'
        alt=''
        className='searchImg'
      />
      <div className='searchDesc'>
        <h1 className='searchTitle'>Tower Street Apartment</h1>
        <span className='searchDistance'>500m from center</span>
        <span className='searchTaxiOption'>Free airport taxi</span>
        <span className='searchSubtitle'>
          Studio Apartment with Air conditioning
        </span>
        <span className='searchFeatures'>
          Entire studioㆍ1 bathroomㆍ21m2 1 full bed
        </span>
        <div className='searchCancelOption'>
          <IoMdCheckmarkCircleOutline />
          <span> Free Cancellation</span>
        </div>
        <span className='searchCancelSubtitle'>
          You can canel later, so lock in this great price today!
        </span>
      </div>
      <div className='searchDetails'>
        <div className='searchRating'>
          <div className='ratingBox'>
            <AiFillStar />
            <span>4.3</span>
          </div>
        </div>
        <div className='searchDetailTexts'>
          <span className='searchPrice'>$124</span>
          <span className='searchTaxOption'>Includes taxes and fees</span>
          <button className='searchCheckButton'>View Prices</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
