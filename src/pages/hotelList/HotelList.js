import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import { format } from 'date-fns';
import './hotelList.scss';
import { DateRange } from 'react-date-range';
import { BsArrowDownRightSquare } from 'react-icons/bs';
import SearchItem from '../../components/searchItem/SearchItem';

const HotelList = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Header type='hotelList' />
      <div className='listContainer'>
        <div className='listBox'>
          <div className='listSearch'>
            <h1 className='listTitle'>Search</h1>
            <div className='listItem'>
              <label>Destination</label>
              <input type='text' placeholder={destination} />
            </div>
            <div className='listItem'>
              <label>Check-in Date</label>
              <div className='listDate' onClick={() => setOpenDate(!openDate)}>
                <span>
                  {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                    date[0].endDate,
                    'MM/dd/yyyy'
                  )}`}
                </span>
                <div className='dateIcon'>
                  <BsArrowDownRightSquare />
                </div>
              </div>

              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className='listItem'>
              <label>Options</label>
              <div className='listOptions'>
                <div className='listOptionItem'>
                  <span className='listOptionText'>
                    Min price <small>per night</small>
                  </span>
                  <input type='number' className='listOptionInput' />
                </div>
                <div className='listOptionItem'>
                  <span className='listOptionText'>
                    Max price <small>per night</small>
                  </span>
                  <input type='number' className='listOptionInput' />
                </div>
                <div className='listOptionItem'>
                  <span className='listOptionText'>Adult</span>
                  <input
                    type='number'
                    min={1}
                    className='listOptionInput'
                    placeholder={options.adult}
                  />
                </div>
                <div className='listOptionItem'>
                  <span className='listOptionText'>Children</span>
                  <input
                    type='number'
                    min={0}
                    className='listOptionInput'
                    placeholder={options.children}
                  />
                </div>
                <div className='listOptionItem'>
                  <span className='listOptionText'>Room</span>
                  <input
                    type='number'
                    min={1}
                    className='listOptionInput'
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className='listBtn'>Search</button>
          </div>
          <div className='listResult'>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelList;
