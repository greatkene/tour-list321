import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import axios from 'axios';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';

function App() {

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const [notInterested, setNotInterested] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      if(tour.id !== id) return true
      setNotInterested([...notInterested, tour]) 
      return false
    }); 
    setTours(newTours);

  }


  const fetchTours = async () => {
    try {
      const res = await axios.get(url)
      setLoading(false)
      setTours(res.data)
    } catch (error) {
      setLoading(false)
      console.error(`Error: ${error}`)
    }
  }


  // const fetchTours = () => {
  //   axios.get(url)
  //   .then((response) => {
  //     console.log(response);
  //     const tours = response.data;
  //     setLoading(false)
  //     setTours(tours);
  //   })
     
  //   .catch((err) => {
  //     setLoading(false)
  //     console.error(`Error: ${err}`)
  //   })
  // }

  useEffect(() => fetchTours(), []);

  if(loading) {
    return <main>
    <Loading />
    </main>
  }

  if(tours.length === 0) {
    return <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className='btn ' onClick={fetchTours}>Refresh</button>
      </div>
    </main>
  }

  return <main>
    <Tours tours={tours} removeTour={removeTour} notInterested={notInterested} />
  </main>
}

export default App
