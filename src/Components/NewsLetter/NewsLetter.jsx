import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exlusive Offers On Your Email</h1>
        <p>Subscribe to our nesletter and stay updated</p>
        <div>
            <input type="email" placeholder='your Email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter