import React, {useEffect} from 'react';
import Frontsend from './Works/Frontend'

const Frontend = ({language, setClick}) => {
  useEffect(()=>{
  setClick("frontend")
  },[])
  return (
    <div className='my-4'>
      <Frontsend language={language}/>
    </div>
  )
}

export default Frontend