import './header.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { MdLocationSearching } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSearch = () => {
    navigate('/hotels', { state: { destination, date, options } });
  };
  return (
    <div className={type === 'hotelList' ? 'header subMode' : 'header'}>
      <Navbar />
      <div className='headerContainer'>
        <div className='headerList'>
          {type !== 'hotelList' && (
            <>
              <div className='headerTitle'>
                <h1>Save 30% or more with Member Prices</h1>
                <p className='headerDesc'>Our Black Friday offers are here</p>
                <button className='headerBtn'>Register</button>

                <div className='headerSearch'>
                  <div className='headerSearchItems'>
                    <div className='headerSearchItem'>
                      <MdLocationSearching className='headerIcon' />
                      <input
                        type='text'
                        placeholder='Where are you going?'
                        className='"headerSearchInput'
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>
                    <div className='headerSearchItem'>
                      <AiOutlineCalendar className='headerIcon' />
                      <span
                        onClick={() => setOpenDate(!openDate)}
                        className='headerSearchText'
                      >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                        date[0].endDate,
                        'MM/dd/yyyy'
                      )}`}</span>
                      {openDate && (
                        <DateRange
                          editableDateInputs={true}
                          onChange={(item) => setDate([item.selection])}
                          moveRangeOnFirstSelection={false}
                          ranges={date}
                          className='date'
                          minDate={new Date()}
                        />
                      )}
                    </div>
                    <div className='headerSearchItem'>
                      <BsPerson className='headerIcon' />
                      <span
                        onClick={() => setOpenOptions(!openOptions)}
                        className='headerSearchText'
                      >
                        {`${options.adult} adultㆍ${options.children} childrenㆍ${options.room} room`}
                      </span>
                      {openOptions && (
                        <div className='options'>
                          <div className='optionItem'>
                            <span className='optionText'>Adult</span>
                            <div className='optionCounter'>
                              <button
                                disabled={options.adult <= 1}
                                className='optionCounterButton'
                                onClick={() => handleOption('adult', 'd')}
                              >
                                -
                              </button>
                              <span className='optionCounterNumber'>
                                {options.adult}
                              </span>
                              <button
                                className='optionCounterButton'
                                onClick={() => handleOption('adult', 'i')}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className='optionItem'>
                            <span className='optionText'>Children</span>
                            <div className='optionCounter'>
                              <button
                                disabled={options.children <= 0}
                                className='optionCounterButton'
                                onClick={() => handleOption('children', 'd')}
                              >
                                -
                              </button>
                              <span className='optionCounterNumber'>
                                {options.children}
                              </span>
                              <button
                                className='optionCounterButton'
                                onClick={() => handleOption('children', 'i')}
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className='optionItem'>
                            <span className='optionText'>Room</span>
                            <div className='optionCounter'>
                              <button
                                disabled={options.room <= 1}
                                className='optionCounterButton'
                                onClick={() => handleOption('room', 'd')}
                              >
                                -
                              </button>
                              <span className='optionCounterNumber'>
                                {options.room}
                              </span>
                              <button
                                className='optionCounterButton'
                                onClick={() => handleOption('room', 'i')}
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className='searchBtn' onClick={handleSearch}>
                    Search
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
