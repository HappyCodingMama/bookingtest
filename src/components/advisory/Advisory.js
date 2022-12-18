import './advisory.scss';
import { BsExclamationTriangle } from 'react-icons/bs';

const Advisory = () => {
  return (
    <div className='advisoryContainer'>
      <div className='advisoryIcon'>
        <BsExclamationTriangle />
      </div>
      <div className='advisoryTexts'>
        <h2> Active travel advisory</h2>
        <p>
          There's a government travel advisory related to coronavirus
          (COVID-19).
          <b>More details</b>
        </p>
      </div>
    </div>
  );
};

export default Advisory;
