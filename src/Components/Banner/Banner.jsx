import React from 'react'
import './Banner.css'
import banner from '../Assets/anh_banner.png'
const Banner = () => {
  return (
    <div className='banner'>
      <h4>Crafting user-centric</h4>
      <h2>Empowering businesses</h2>
      <h2> with warehouse management tools</h2>
      <p>provides rental, management, operation, calculation tools,...</p>
      <p>and many other tools</p>
      <img src={banner}></img>
      <div className='banner-option'>
        <div>
            <h2>500+</h2>
            <h2>business</h2>
            <p>Through this website I can get a house with</p>
            <p>the type and specifications I want very</p>
        </div>
        <div >
            <h2>12k+</h2>
            <h2>Utilizer</h2>
            <p>Through this website I can get a house with</p>
            <p>the type and specifications I want very</p>
        </div>
        <div>
            <h2>500+</h2>
            <h2>HomeOwner</h2>
            <p>Through this website I can get a house with</p>
            <p>the type and specifications I want very</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
