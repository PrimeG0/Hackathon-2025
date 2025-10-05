import React from 'react'
import './About.css'
import Nav from './Nav'
import Cursor from './Cursor'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import Footer from './Footel';


const About = () => {

  return (
    <>
    <Cursor/>
    <Nav></Nav>
        
<div className='Abouth'>
<img src="https://as1.ftcdn.net/jpg/05/35/40/08/1000_F_535400842_8kY5t0wMA6YlXTj2d7rLw7H4jmaEKIg6.jpg" alt="" />
<div className='herotxt'><span id='durga' className='txt'>ABOUT US</span> <br />
                <div id='online' className='txt'>ONLINE</div>
                <h1 className='dart'>
            Let's talk<span className='whtxt'> ABOUT US </span>
            
          </h1>

            </div>
            <p className='ap'>
               Welcome to Durga Online, your one-stop destination for experiencing the magic of Durga Puja from anywhere in the world. We bring you exclusive updates, images, and information about pandals, idols, and events—all at your fingertips.

Our mission is simple: to connect devotees, art lovers, and Puja enthusiasts with the grandeur of this festival, no matter where they are. From iconic Kolkata pandals to local community celebrations, Durga Online ensures you never miss the creativity, culture, and devotion that make Durga Puja truly special.

With curated galleries, festival highlights, and real-time pandal insights, we are here to make Durga Puja accessible, engaging, and unforgettable—online.

Join us in celebrating Maa Durga, her divine power, and the joy of togetherness through the digital world!
            </p>
</div>
<Footer></Footer>
    </>

  )
}

export default About