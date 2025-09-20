import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img className='mb-5 w-32' src={assets.logo} alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum numquam consequatur quasi explicabo officiis eveniet architecto quo id eius exercitationem eos repudiandae rerum non totam error, voluptas saepe ad, magni dicta laudantium! Tempore placeat labore excepturi sint, adipisci voluptatem!
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-455-7895</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>
      </div>

        <div>
            <hr />
            <p className="py-5 text-sm text-center">&copy;2025@forever.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
