import './travelConfidence.scss';
import { MdWash, MdOutlineSocialDistance } from 'react-icons/md';
const TravelConfidence = () => {
  return (
    <div className='confidenceContainer'>
      <div className='confidenceTexts'>
        <h2>Travel with confidence</h2>
        <p>
          Many properties have updated us about their enhanced health and safety
          measures. So, during your search, you may find details like:
        </p>
        <div className='texts'>
          <div className='textsItems'>
            <div className='textsIcon'>
              <MdOutlineSocialDistance />
            </div>
            <div className='text'>
              <h3>Social distancing</h3>
              <p>
                Contactless check-in and check-out along with other social
                distancing measures.
              </p>
            </div>
          </div>
          <div className='textsItems'>
            <div className='textsIcon'>
              <MdWash />
            </div>
            <div className='text'>
              <h3>Official health standards</h3>
              <p>
                Properties adhering to corporate/organizational sanitization
                guidelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelConfidence;
