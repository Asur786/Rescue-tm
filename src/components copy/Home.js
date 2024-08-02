import React from 'react'
import MapboxMap from '../components/map'
import Alerts from './Alerts'
import MapComponent from './maps/MapComponent'

const Home = () => {
  return (
    <>
      <div>
        {/* <h1 className='text-4xl'>Home</h1> */}
        {/* <div className='h-96 w-96'>
          <MapComponent />
        </div> */}
      </div>
      <div className='' id='mapbox'>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1BRu-X8LIqIw7t4CG9cmPd0kt8XT3iDU&ehbc=2E312F" width="100%" height="600" allowFullScreen></iframe>
      </div>
      {/* <Alerts /> */}
    </>

  )
}

export default Home
