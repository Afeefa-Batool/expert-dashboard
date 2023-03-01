import React from 'react'
import Map from '../components/Map';

const location = () => {
    const apiKey = 'AIzaSyDKDVVNL5FeC6oEKMdVMascV7WDuglvu8c';

  return (
    <>
         <Map apiKey={apiKey}/>

    </>
  )
}

export default location