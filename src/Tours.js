import React, {useState} from 'react';
import Tour from './Tour';

const Tours = ({ tours, removeTour, notInterested }) => {

  const [toggleTour, setToggleTour] = useState(true)

  return (
    <section>
      
        <div className='title'>
            <h2>Our Tours</h2>
            <div className='underline'></div>
            <button className='btn' onClick={() => {setToggleTour(!toggleTour)}}>{toggleTour ? 'Not Interested ' : 'Interested '}Tours</button>
        </div>
        <div>
        {
          
          toggleTour 
            ? tours.map((tour) =>  <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour> )  
            : notInterested.length < 1 
              ? <h4> No Not Interested Tour Found </h4>
              : notInterested.map((tour) =>  <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour> )

        }
        </div> 
       
  </section>
  );
};

export default Tours;
