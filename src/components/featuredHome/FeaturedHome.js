import './featuredHome.scss';
import { AiFillStar } from 'react-icons/ai';
import useFetch from '../../hooks/useFetch';

const FeaturedHome = () => {
  const { data, loading, error } = useFetch('/hotels?featured=true&limit=4');

  return (
    <div className='featuredHomeContainer'>
      <div className='featuredHomeCard'>
        <div className='featuredHomeItems'>
          <div className='featuredHomeImg'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/element5-digital-2cwqJgtQ3D0-unsplash.jpg?alt=media&token=9bd74ad7-e655-45ee-85b4-9fff9e7886ec'
              alt=''
            />
            <div className='price'>
              <span className='featuredHomePrice'>$120</span>
            </div>

            <div className='featuredHomeCardTexts'>
              <span className='featuredHomeCity'>Cape Town, South Africa</span>
              <div className='typeRating'>
                <span className='featuredHomeType'>Two Room Flat</span>
                <div className='featuredHomeRating'>
                  <AiFillStar />
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='featuredHomeCard'>
        <div className='featuredHomeItems'>
          <div className='featuredHomeImg'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/spacejoy-yoSb_GcodHo-unsplash.jpg?alt=media&token=ddcb091a-cba1-4596-b3c5-a41280ae3b73'
              alt=''
            />
            <div className='price'>
              <span className='featuredHomePrice'>$175</span>
            </div>

            <div className='featuredHomeCardTexts'>
              <span className='featuredHomeCity'>Rodia, Greece</span>
              <div className='typeRating'>
                <span className='featuredHomeType'>House</span>
                <div className='featuredHomeRating'>
                  <AiFillStar />
                  <span>4.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='featuredHomeCard'>
        <div className='featuredHomeItems'>
          <div className='featuredHomeImg'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/minh-pham-7pCFUybP_P8-unsplash.jpg?alt=media&token=bd427c11-2fb7-4b90-917d-6791e2bb18f6'
              alt=''
            />
            <div className='price'>
              <span className='featuredHomePrice'>$110</span>
            </div>

            <div className='featuredHomeCardTexts'>
              <span className='featuredHomeCity'>Coco, Costa Rica</span>
              <div className='typeRating'>
                <span className='featuredHomeType'>Stylish Rooftop</span>
                <div className='featuredHomeRating'>
                  <AiFillStar />
                  <span>3,9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='featuredHomeCard'>
        <div className='featuredHomeItems'>
          <div className='featuredHomeImg'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/minh-pham-OtXADkUh3-I-unsplash.jpg?alt=media&token=791a6e2c-09ad-4eff-b4a8-0a6973dfa203'
              alt=''
            />
            <div className='price'>
              <span className='featuredHomePrice'>$240</span>
            </div>

            <div className='featuredHomeCardTexts'>
              <span className='featuredHomeCity'>Marbella, Spain</span>
              <div className='typeRating'>
                <span className='featuredHomeType'>Guest Room</span>
                <div className='featuredHomeRating'>
                  <AiFillStar />
                  <span>4.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedHome;
