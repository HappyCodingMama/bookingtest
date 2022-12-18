import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import MailList from '../../components/mailList/MailList';
import React, { useState } from 'react';
import './hotel.scss';
import { AiFillStar } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsDoorClosed } from 'react-icons/bs';

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/spacejoy-yoSb_GcodHo-unsplash.jpg?alt=media&token=ddcb091a-cba1-4596-b3c5-a41280ae3b73',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/minh-pham-7pCFUybP_P8-unsplash.jpg?alt=media&token=bd427c11-2fb7-4b90-917d-6791e2bb18f6',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/minh-pham-OtXADkUh3-I-unsplash.jpg?alt=media&token=791a6e2c-09ad-4eff-b4a8-0a6973dfa203',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/element5-digital-2cwqJgtQ3D0-unsplash.jpg?alt=media&token=9bd74ad7-e655-45ee-85b4-9fff9e7886ec',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/axp-photography-Z6Wws60cAsE-unsplash.jpg?alt=media&token=93165d1e-0a16-438c-a87a-c8445f9d7241',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/ferdinand-asakome-oUdt2BJrLJE-unsplash.jpg?alt=media&token=92499dd8-ea38-4d7a-9695-a1e23e12b0fd',
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'l') {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Header type='hotelList' />
      <div className='hotelContainer'>
        {open && (
          <div className='slider'>
            <BsDoorClosed
              className='sliderClose'
              onClick={() => setOpen(false)}
            />
            <AiOutlineArrowLeft
              className='sliderArrow'
              onClick={() => handleMove('l')}
            />
            <div className='sliderWrapper'>
              <img src={photos[slideNumber].src} alt='' className='sliderImg' />
            </div>
            <AiOutlineArrowRight
              className='sliderArrow'
              onClick={() => handleMove('r')}
            />
          </div>
        )}

        <div className='hotelBox'>
          <button className='hotelBtn'>Book Now</button>
          <h1 className='hotelTitle'>Fairmont Hotel Vancouver</h1>
          <div className='hotelAddress'>
            <span>900 W Georgia St, Vancouver, BC V6C 2W6•(604) 684-3131</span>
          </div>
          <div className='hotelRating'>
            <span>Excellent</span>
            <AiFillStar className='ratingIcon' />
            <span> 4.3 | 4,709 reviews</span>
          </div>
          <span className='hotelDescription'>
            High-end rooms & suites in a polished hotel with a sophisticated
            restaurant, a spa & an indoor pool.
          </span>

          <div className='hotelImages'>
            {photos.map((photo, i) => (
              <div className='hotelImgBox'>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=''
                  className='hotelImg'
                />
              </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className='hotelDetailsTexts'>
              <h1 className='title'>About this hotel</h1>
              <p className='hotelDesc'>
                A 2-minute walk from the Vancouver Art Gallery and a 4-minute
                walk from Vancouver City Centre Station, this elegant hotel
                dating from 1939 is a 10-minute walk from the Canada Place
                convention centre.
              </p>
              <div className='checkInOut'>
                {' '}
                <span className='checkIn'>Check-in time: 3:00 PM</span>
                <span className='checkOut'>Check-out time: 12:00 PM</span>
              </div>
            </div>
            <div className='hotelDetailsPrice'>
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Commercial area with buzzy pubs, clubs & upmarket department
                stores, plus Canada Place terminal.
              </span>
              <h2>
                <b>$945 </b>(9 nights)
              </h2>
              <button>Book Now</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
