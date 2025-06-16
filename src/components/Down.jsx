import React from 'react'

const Down = ({img, name, desc}) => {
  return (
	 <div className=' my-[100px] flex flex-wrap flex-col items-center'>
		<img className='' src={img} alt="" />
		<h3>{name}</h3>
		<center>
		<p>{desc}</p>
		</center>
	 </div>
  )
}

export default Down