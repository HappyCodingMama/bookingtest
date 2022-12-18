import './propertyList.scss';
import useFetch from '../../hooks/useFetch';

const PropertyList = () => {
  const { data, loading, error } = useFetch('/hotels/countbytype');

  console.log(data);

  const images = [
    'https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/roberto-nickson-emqnSQwQQDo-unsplash.jpg?alt=media&token=b270c464-7b7a-4d69-9770-2fcd5910e14c',
    'https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/toa-heftiba-FV3GConVSss-unsplash.jpg?alt=media&token=6297b6c2-23fb-4497-bc36-e767554a79d1',
    'https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/big-tiny-belly-XtnNrQYC7ts-unsplash.jpg?alt=media&token=1baf628d-c7df-4192-8ef3-dced226674ec',
    'https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/roberto-nickson-emqnSQwQQDo-unsplash.jpg?alt=media&token=b270c464-7b7a-4d69-9770-2fcd5910e14c',
    'https://firebasestorage.googleapis.com/v0/b/booking-hotels-91915.appspot.com/o/toa-heftiba-FV3GConVSss-unsplash.jpg?alt=media&token=6297b6c2-23fb-4497-bc36-e767554a79d1',
  ];

  return (
    <div className='nearbyContainer'>
      {loading ? (
        ' loading'
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className='nearbyListItem' key={i}>
                <div className='listImg'>
                  <img src={img} alt='' className='nearbyListTitles' />
                </div>
                <div className='listTexts'>
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
