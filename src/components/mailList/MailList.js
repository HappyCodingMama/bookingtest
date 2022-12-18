import './mailList.scss';

const MailList = () => {
  return (
    <div className='mailContainer'>
      <h1 className='mailTitle'>Discovery the World with Us</h1>
      <span className='mailDesc'>
        Join our mailing list and receive awesome deals every day!
      </span>
      <div className='mailInputBox'>
        <input type='text' placeholder='Enter Your Email' />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
