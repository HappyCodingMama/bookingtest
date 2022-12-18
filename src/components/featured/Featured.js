import useFetch from '../../hooks/useFetch';
import './featured.scss';

const Featured = () => {
  const { data, loading, error } = useFetch(
    '/hotels/countbycity?cities=vancouver,berlin,london'
  );

  return (
    <div className='featuredContainer'>
      {loading ? (
        'Loading Please wait'
      ) : (
        <>
          <div className='featuredHeader'>
            <h2>Recommedation For Your Best Stay</h2>
            <p>We have lots of suggestion for you</p>
          </div>
          <div className='featuredGrid'>
            <div className='featuredItem'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/axp-photography-Z6Wws60cAsE-unsplash.jpg?alt=media&token=93165d1e-0a16-438c-a87a-c8445f9d7241'
                alt=''
              />
              <div className='featuredTitles'>
                <h1>Vancouver</h1>
                <h2>{data[0]} properties</h2>
              </div>
            </div>
            <div className='featuredItem'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/ferdinand-asakome-oUdt2BJrLJE-unsplash.jpg?alt=media&token=92499dd8-ea38-4d7a-9695-a1e23e12b0fd'
                alt=''
              />
              <div className='featuredTitles'>
                <h1>Berlin</h1>
                <h2>{data[1]} properties</h2>
              </div>
            </div>
            <div className='featuredItem'>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/edvin-johansson-rlwE8f8anOc-unsplash.jpg?alt=media&token=5f3290e3-f435-4e67-8375-bf1f50d19303'
                alt=''
              />
              <div className='featuredTitles'>
                <h1>London</h1>
                <h2>{data[2]} properties</h2>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
