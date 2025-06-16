import React from 'react'

const Rounded = ({img, par}) => {
  return (
	 <div className='flex flex-col items-center my-[100px]'>
		<img className='w-[100px]' src={img} alt="" />
		<p>{par}</p>
	 </div>
  )
}

export default Rounded