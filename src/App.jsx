import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import ScrollReveal from './components/ScrollReveal'







function App() {
useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".whath1", {x:-50 , opacity:0 ,},{
  x:0 ,opacity:1 , duration:1 , scrollTrigger:{
    trigger:'.whath1',
    start:'botttom bottom',
    scrub:true
  }
});


  }, []);

  return (
    <>
    <Nav></Nav>
    <Hero></Hero>

    <div className='MainCont'>

    <div className='what'>
      <h1 className='whath1'>
        Welcome to <span className='whtxt'>DURGA ONLINE</span> 
      </h1>
    </div>
    <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  Durga Online is your digital companion to Kolkata’s grand Durga Pujo celebrations. Discover the most iconic pandals, find the best street food, follow festival routes, and experience the rhythm of dhaaks and lights — all from the comfort of your screen.
</ScrollReveal>
    </div>

    </>
  )
}

export default App
