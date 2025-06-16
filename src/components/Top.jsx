import React from 'react'

const Top = ({name, img, price , star}) => {
  return (
	 <div className=' my-[100px]'>
		<img className='w-[240px] h-[370px]' src={img} alt="" />
		<h3>{name}</h3>
		<h4>{star}</h4>
		<h2 className='text-[24px]'>{price}</h2>
	 </div>
  )
}

export default Top