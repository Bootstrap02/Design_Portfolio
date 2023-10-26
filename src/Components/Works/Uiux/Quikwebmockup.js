import React from 'react';
import images from '../../../Constants/Images';

const Quikwebmockup = () => {



    return(
       <div className='p-4 max-lg:p-2 flex flex-wrap justify-between'>
         {images.uiuxquikweb.map ( (image) => {
            return(
       
<div className='flex  w-[40%] m-6 max-lg:w-[100%] ' key={image.title} >
<div className = 'flex flex-col justify-center '>
<img className='my-6 max-lg:my-3' src = {image.mockup} loading='lazy'/>
<div className='text-bold text-2xl bg-black text-white p-4 rounded-lg'><h3 >{image.title}</h3></div>
</div>

</div>)
        })}
       </div>
    
    )
  
}

export default Quikwebmockup