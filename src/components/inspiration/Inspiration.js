import './inspiration.scss';
import { FiMusic } from 'react-icons/fi';
import { TbLocation } from 'react-icons/tb';
import { GrLinkNext } from 'react-icons/gr';

const Inspiration = () => {
  return (
    <div className='inspirationContainer'>
      <div className='inspirationBox'>
        <div className='inspirationContent'>
          <div className='inspirationImg'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/marissa-daeger-aX2C4tk9LR0-unsplash.jpg?alt=media&token=ee0f8b0b-280a-446c-b6c6-8f8a0c9adafe'
              alt=''
            />
          </div>
          <div className='inspirationItems'>
            <div className='itemTitle'>
              <h2>48 Hours in New York City</h2>

              <p>
                You’ll make the most of the time you have and get a taste of the
                city.
              </p>
            </div>
            <div className='itemBox'>
              <div className='itemDetails'>
                <div className='detailText'>
                  <TbLocation className='detailIcon' />
                  Concorde Hotel NY
                </div>
                <div className='detailText'>
                  <FiMusic className='detailIcon' />
                  The ultimate NYC playlist
                </div>
              </div>
              <div className='itemNext'>
                <GrLinkNext className='nextIcon' />
              </div>
            </div>
          </div>
        </div>
        <div className='inspirationContent'>
          <div className='inspirationImg'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/marissa-daeger-aX2C4tk9LR0-unsplash.jpg?alt=media&token=ee0f8b0b-280a-446c-b6c6-8f8a0c9adafe'
              alt=''
            />
          </div>
          <div className='inspirationItems'>
            <div className='itemTitle'>
              <h2>48 Hours in New York City</h2>

              <p>
                You’ll make the most of the time you have and get a taste of the
                city.
              </p>
            </div>
            <div className='itemBox'>
              <div className='itemDetails'>
                <div className='detailText'>
                  <TbLocation className='detailIcon' />
                  Concorde Hotel NY
                </div>
                <div className='detailText'>
                  <FiMusic className='detailIcon' />
                  The ultimate NYC playlist
                </div>
              </div>
              <div className='itemNext'>
                <GrLinkNext className='nextIcon' />
              </div>
            </div>
          </div>
        </div>
        <div className='inspirationContent'>
          <div className='inspirationImg'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/marissa-daeger-aX2C4tk9LR0-unsplash.jpg?alt=media&token=ee0f8b0b-280a-446c-b6c6-8f8a0c9adafe'
              alt=''
            />
          </div>
          <div className='inspirationItems'>
            <div className='itemTitle'>
              <h2>48 Hours in New York City</h2>

              <p>
                You’ll make the most of the time you have and get a taste of the
                city.
              </p>
            </div>
            <div className='itemBox'>
              <div className='itemDetails'>
                <div className='detailText'>
                  <TbLocation className='detailIcon' />
                  Concorde Hotel NY
                </div>
                <div className='detailText'>
                  <FiMusic className='detailIcon' />
                  The ultimate NYC playlist
                </div>
              </div>
              <div className='itemNext'>
                <GrLinkNext className='nextIcon' />
              </div>
            </div>
          </div>
        </div>
        <div className='inspirationContent'>
          <div className='inspirationImg'>
            <img
              src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/josh-hild-cvi752mY6eA-unsplash.jpg?alt=media&token=7f06145f-c429-4ab0-a465-e4ab5b9d30bc'
              alt=''
            />
          </div>
          <div className='inspirationItems'>
            <div className='itemTitle'>
              <h2>The coziest stays in the US</h2>

              <p>
                Traveling to a special setting doesn't mean you can't also feel
                right at home.
              </p>
            </div>
            <div className='itemBox'>
              <div className='itemDetails'>
                <div className='detailText'>
                  <TbLocation className='detailIcon' />
                  The bowery
                </div>
                <div className='detailText'>
                  <FiMusic className='detailIcon' />
                  The US pop hits 100
                </div>
              </div>
              <div className='itemNext'>
                <GrLinkNext className='nextIcon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
