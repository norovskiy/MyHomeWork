import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headers from './components/Headers'
import Rounded from './components/rounded'
import Top from './components/Top'
import Down from './components/Down'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Headers num="+222-1800-2628" gmail="blueskytechcompany@gmail.com" sign="Sign up for 10% off your first order: Sign Up" store="Our Stores" lang="English" country="United States (USD $)" logo="/src/img/Logo (6).png" home="Home" shop="Shop" product="Product" page="Page" blog="Blog" buy="Buy Umino!" icon1="/src/img/Search.svg" icon2="/src/img/Login.svg" icon3="/src/img/Recently viewed.svg" icon4="/src/img/Wishlist.svg" icon5="/src/img/Cart.svg"/>
    
    <div className="But">
      <div className="ml-[280px]">
        <h4 className='ml-[100px]'>Beautiful & Elegant</h4>
      <h1 className='text-[40px] '>Premium Bedroom</h1>
      <p className='ml-[138px]'>Products</p>
      <button className='border border-[white] rounded-3xl px-[20px] text-[black] bg-[white] py-[3px] ml-[110px] my-[20px]'>Shop Now</button>
      </div>
    </div>

    <div className="w-[90%] m-auto">
    
      <div className="flex flex-wrap justify-between">
        <Rounded img="/src/img/img (1).png " par="Living Room"/>
      <Rounded img="/src/img/img (2).png " par="special bedroom"/>
      <Rounded img="/src/img/img (3).png " par="Dining & Kitchen"/>
      <Rounded img="/src/img/img (1).png " par="Living Room"/>
      <Rounded img="/src/img/img (2).png " par="special bedroom"/>
      <Rounded img="/src/img/img (3).png " par="Dining & Kitchen"/>
      </div>
    </div>

    <div className=" w-[90%] m-auto">
     <center> <h1 className='text-[30px]'>Top Trending</h1>
      <p>Our products are designed for everyone, environmentally friendly.</p></center>
      <div className="flex justify-between flex-wrap">
        
        <Top img="/src/img/img (4).png" name="Form Chair Brass Base" star="⭐⭐⭐⭐⭐" price="569.00$"/>
        <Top img="/src/img/img (5).png" name="Form Chair Brass Base" star="⭐⭐⭐⭐⭐" price="569.00$"/>
        <Top img="/src/img/img (6).png" name="Form Chair Brass Base" star="⭐⭐⭐⭐⭐" price="569.00$"/>
        <Top img="/src/img/img (7).png" name="Form Chair Brass Base" star="⭐⭐⭐⭐⭐" price="569.00$"/>
        <Top img="/src/img/img (8).png" name="Form Chair Brass Base" star="⭐⭐⭐⭐⭐" price="569.00$"/>
        <Top img="/src/img/img (9).png" name="Form Chair Brass Base" star="⭐⭐⭐⭐⭐" price="569.00$"/>
        <Top img="/src/img/img (10).png" name="Form Chair Brass Base" star="⭐⭐⭐⭐⭐" price="569.00$"/>
        <Top img="/src/img/img (11).png" name="Form Chair Brass Base" star="⭐⭐⭐⭐⭐" price="569.00$"/>
      </div>
    </div>

    <div className="Bg">
      <div className="bg-white rounded-2xl w-[500px] p-10 ml-[500px]">
      <center><p>LIMITED EDITION</p>
      <h1 className='text-[28px]'>Unique Style</h1>
      <p>The watch is carefully designed with quality materials, such as the domed sapphire crystal, and the meticulous level of detail - from the dial to the delicate gold hour markers.</p>
      <button className='border border-solid bg-black text-white rounded-4xl py-2 px-3  mt-[10px] '>Discover Now</button></center>
      </div>
    </div>

    <div className="w-[90%] m-auto flex justify-between items-center">
      
      <Down img="/src/img/icon (1).svg" name="Free Shipping" desc="Get complimentary ground shipping on every order.
 Don't love it? Send it back, on us."/>
      <Down img="/src/img/icon (2).svg" name="Free Shipping" desc="Get complimentary ground shipping on every order.
 Don't love it? Send it back, on us."/>
      <Down img="/src/img/icon (3).svg" name="Free Shipping" desc="Get complimentary ground shipping on every order.
 Don't love it? Send it back, on us."/>

    </div>

    <div className="w-[90%] m-auto">
      <center><h1 className='text-3xl'>
        Follow Us
      </h1>
      <p>Inspire and let yourself be inspired, from one unique fashion to another.</p>
      </center>
      <div className="flex justify-between my-10 flex-wrap m-1">
      <img src="/src/img/2 (1).png" alt="" className='w-[150px]' />
      <img src="/src/img/3 (1).png" alt="" className='w-[150px]' />
      <img src="/src/img/4 (1).png" alt="" className='w-[150px]' />
      <img src="/src/img/5.png" alt="" className='w-[150px]' />
      <img src="/src/img/6 (1).png" alt="" className='w-[150px]' />
      <img src="/src/img/3 (1).png" alt="" className='w-[150px]' />
      <img src="/src/img/4 (1).png" alt="" className='w-[150px]' />
      </div>
    </div>

    <footer className="bg-gray-100 text-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">UMINO</h2>
          <p>268 St, South New York, NY 98944, United States</p>
          <p>+222-1800-2628</p>
          <p>blueskytechcompany@gmail.com</p>
          <div className="flex space-x-3 mt-4">
            <img src="/src/img/social (1).svg" alt="" className="" />
           
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Customer Service</h4>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li className="font-bold">Refund Policy</li>
            <li>Shipping & Return</li>
            <li>Term & Conditions</li>
            <li>Advanced Search</li>
            <li>Store Locations</li>
          </ul>
        </div>

        <div className=''>
          <h4 className="font-semibold mb-2">Shop By Categories</h4>
          <ul className="space-y-1 text-sm">
            <li>Smartphone</li>
            <li>Headphones</li>
            <li>Computer & Desktop</li>
            <li>Cameras & Photos</li>
            <li>Laptop & Ipad</li>
          </ul>
        </div>

        <div className='mr-20'>
          <h4 className="font-semibold mb-2">Sign Up to Newsletter</h4>
          <p className="text-sm mb-3">
            Enter your email address to get $10 off your first order and free shipping.
            Updates information on Sales and Offers.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex px-[2px] py-2 border rounded-md"
            />
            <button
              type="submit"
              className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="border-t mt-10 pt-4 flex flex-col md:flex-row justify-between items-center gap-2 px-2  ">
        <div className="flex items-center gap-2">
          <span>English</span>
          <span>|</span>
          <span>United States (USD $)</span>
        </div>
        <p>© 2022 Umino Store. All Rights Reserved.</p>
        <div className="flex">
          <img src="/src/img/payment.svg" alt="" className="" />
        </div>
      </div>
    </footer>
 

    </>

  )
}

export default App


// npx tailwindcss -i ./src/input.css -o ./src/output.css --watch