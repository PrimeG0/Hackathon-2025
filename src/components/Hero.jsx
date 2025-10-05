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
      y:-100 , scrollTrigger:{
        trigger:'.hero',
        start:'top top',
        scrub:true
      }
    });
  }, []);
    return (
        <>
        <div className='hero'>
          <ReactPlayer src='src\assets\video.mp4' width="100%" height="100%" autoPlay  loop muted className='heroVid' />
            
            <div className='herotxt'><span id='durga' className='txt'>DURGA</span> <br />
                <div id='online' className='txt'>ONLINE</div>
            </div>
        </div>
        </>
    )
}

export default Hero