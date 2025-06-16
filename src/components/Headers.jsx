import React from 'react'

const Headers = ({num, gmail, sign, store, lang, country, logo, home, shop, product, page, blog, buy, icon1, icon2,icon3,icon4,icon5}) => {
  return (	
	 <div className=''>
		<div className="Up-Text flex justify-between items-center p-[12px] shadow-2xl ]">
			<div className=" flex gap-[10px]">
				<p>{num}</p>
			<p>{gmail}</p>
			</div>
		<h4>{sign}</h4>
		<div className="flex gap-[10px]">
			<p>{store}</p>
			<select name="" id="">
				<option value="">
					{lang}
				</option>
				<option value="">
					{lang}
				</option>
			</select>
			<select name="" id="">
				<option value="">
					{country}
				</option>
				<option value="">
					{country}
				</option>
			</select>
		</div>
		</div>
		<div className="Down-Text flex p-[10px] justify-between shadow-xl">
		<img src={logo} alt="" />
		<div className="flex gap-[10px]">
			<select name="" id="">
				<option value="">
					{home}
				</option>
				<option value="">
					{home}
				</option>
			</select>
			<select name="" id="">
				<option value="">
					{shop}
				</option>
				<option value="">
					{shop}
				</option>
			</select>
			<select name="" id="">
				<option value="">
					{product}
				</option>
				<option value="">
					{product}
				</option>
			</select>
			<select name="" id="">
				<option value="">
					{page}
				</option>
				<option value="">
					{page}
				</option>
			</select>
			<select name="" id="">
				<option value="">
					{blog}
				</option>
				<option value="">
					{blog}
				</option>
			</select>
			<select name="" id="">
				<option value="">
					{buy}
				</option>
				<option value="">
					{buy}
				</option>
			</select>
		</div>
		<div className="flex gap-[10px]">
			<img src={icon1} alt="" />
			<img src={icon2} alt="" />
			<img src={icon3} alt="" />
			<img src={icon4} alt="" />
			<img src={icon5} alt="" />
		</div>
		</div>
	 </div>
  )
}
export default Headers