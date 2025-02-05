import React from 'react'

const Buttons = ({language}) => {
  return (
    <div>
        <div><button className='px-8 py-2 max-lg:p-2 bg-[#04AA0A] rounded-md'><strong className='max-lg:text-[20px]'>{language === "English"? "Hire me" : "Stellen Sie mich ein"}</strong></button></div>
    </div>
  )
}

export default Buttons