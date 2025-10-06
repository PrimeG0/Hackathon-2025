import React from 'react'
import './Hero.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import ReactPlayer from 'react-player'


const Hero = () => {
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
      y:-10 , scrollTrigger:{
        trigger:'.hero',
        start:'top top',
        scrub:true
      }
    });
  }, []);
    return (
        <>
        <div className='hero'>
          
            <video src='\videos\video.mp4' width="100%" height="80%" autoPlay preload='video.mp4' loop muted className='heroVid' >

                    
            </video>
          
            <div className='herotxt'><span id='durga' className='txt'>DURGA</span> <br />
                <div id='online' className='txt'>ONLINE</div>
            </div>
        </div>
        </>
    )
}

export default Hero