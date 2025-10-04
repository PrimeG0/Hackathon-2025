import React from 'react'
import './Pandals.css'
import Nav from './Nav'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import Tridhara from './Tridhara';

import { Routes, Route, useNavigate } from 'react-router-dom'
import Ekdalia from './Ekdalia';
import Sreebhumi from './Sreebhumi';
import Footer from './Footel';







const Pandals = () => {
     useGSAP(() => {

    gsap.registerPlugin(SplitText);


    let split = SplitText.create(".txt", {
      type: "words",
      mask: "lines",


    });
    gsap.from(split.words, {
      y: 20,
      autoAlpha: 0,
      stagger: 0.5
    })

    gsap.to('.txt', {
      opacity: 1, y:0, delay: 0.2, stagger: {
        each: 0.2,

      }
    });
    gsap.to('.hero', {
      y:-100 , scrollTrigger:{
        trigger:'.hero',
        start:'top top',
        scrub:true
      }
    });
    gsap.fromTo('.Pandals', {
      x:-100 , opacity:0
      ,
    },{
        x:0,scrollTrigger:{
        trigger:'.Pandals',
        start:'top top',
            scrub:true},stagger:1,opacity:1
    });
  }, []);
     const navigate = useNavigate();
  return (
    <>
    <Nav></Nav>
    <div className='Pandalhero'>
   <video width="100%" height="80%" autoPlay preload='video.mp4' loop muted className='PandalVid' >
                <source src="src\assets\videoplayback (1).mp4" type="video/mp4"/>
                    
            </video>
            <div className='herotxt'><span id='durga' className='txt'>LIVE</span> <br />
                <div id='online' className='txt'>PANDALS</div>
            </div>
            <div className='PandalCont'>
                <div className='what'>
          <h1 className='whath1'>
            Welcome to <span className='whtxt'>LIVE PANDALS</span>
          </h1>
          <p>Step into the heart of Durga Puja with Live Pandals. Explore Kolkata’s most iconic pandals in real-time, discover their unique themes, and feel the festive energy as if you were right there.</p>
          </div>
            </div>
        
        <div className='bento'>
            <li>
                <div className='Pandals' onClick={() => navigate('/tridhara')}>
                    <h2>TRIDHARA</h2>
                    <h3>Click to explore</h3>
                    <img src="https://i.ytimg.com/vi/G-jWvWgO2bc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAtb0OjWigtukeWeUkl33hwSXqDnQ" alt="" />
                    
                </div>
            </li>
             <li>
                <div className='Pandals'onClick={() => navigate('/ekdalia')}>
                    <h2>EKDALIA</h2>
                    <h3>Click to explore</h3>
                    <img src="https://media.assettype.com/freepressjournal/2025-09-16/7y53hdfs/Untitled-design-2025-09-16T122233.910.jpg" alt="" />
                    
                </div>
            </li>
             <li>
                <div className='Pandals' onClick={() => navigate('/sreebhumi')}>
                    <h2>SHREEBHUMI</h2>
                    <h3>Click to explore</h3>
                    <img src="https://cf-img-a-in.tosshub.com/lingo/atbn/images/story/202506/68614259b86ed-durga-puja-122509995-16x9.jpg?size=948:533" alt="" />
                    
                </div>
            </li>
            Coming Soon...
        </div>

    </div>
    <Footer></Footer>
    </>
  )
}

export default Pandals