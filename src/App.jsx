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

import TiltedCard from './components/TiltedCard'
import Footer from './components/Footel'


import { Routes, Route, useNavigate } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";
import Pandals from './components/Pandals'
import Tridhara from './components/Tridhara'
import Ekdalia from './components/Ekdalia'
import Sreebhumi from './components/Sreebhumi'
import Cursor from './components/Cursor'
import Gallery from './components/Gallery'
import About from './components/About'
import ScrollToTop from './components/ScrollToTop'
import RollingGallery from './components/RollingGallery' 

//HOME PAGE this is where the magic happens (FOR MORE INFO CHECK OUT MY GITHUB PAGE)

function App() {
  const navigate = useNavigate();
  useGSAP(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".whath1", { x: -50, opacity: 0, }, {
      x: 0, opacity: 1, duration: 1, scrollTrigger: {
        trigger: '.whath1',
        start: 'botttom bottom',
        scrub: true
      }
    });
    gsap.fromTo(".art", { x: 0, }, {
      y: -10, opacity: 1, duration: 0.5, scrollTrigger: {
        trigger: '.art',
        start: 'top top',
        scrub: true
      }
    });
    gsap.fromTo(".PujaArt", { scale: 0.5, y: 20 }, {
      scale: 1, duration: 0.5, scrollTrigger: {
        trigger: '.PujaArt',
        start: 'bottom bottom',
        scrub: true
      }
    });
    gsap.fromTo(".Joinnow", { scale: 0.5, x: -20, opacity: 0 }, {
      scale: 1, duration: 0.5, x: 0, opacity: 1, scrollTrigger: {
        trigger: '.Joinnow',
        start: 'bottom bottom',
        scrub: true
      }
    });
    gsap.fromTo(".what", { scale: 0.5, x: -20, opacity: 0 }, {
      scale: 1, duration: 0.5, x: 0, opacity: 1, scrollTrigger: {
        trigger: '.what',
        start: 'bottom bottom',
        scrub: true
      }
    });

  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>

        <Route path='/' element={
          <>
            <Cursor />
            <Nav></Nav>
            <Hero></Hero>

            <div className='MainCont'>

              <div className='what'>
                <h1 className='whath1'>
                  Welcome to <span className='whtxt'>DURGA ONLINE</span>
                </h1>
                <p>
                  Durga Online is your digital companion to Kolkata’s grand Durga Pujo celebrations. Discover the most iconic pandals, find the best street food, follow festival routes, and experience the rhythm of dhaaks and lights — all from the comfort of your screen.
                </p>
              </div>

              <div className='art' >
                <h1 className='dart'>
                  what is  <span className='whtxt'> Durga Puja Art  </span>
                </h1>
                <div className='dart-cont'>
                  <p>Durga Puja Art is the soul of Kolkata’s grand festival — a fusion of tradition and innovation. From clay idols crafted by skilled artisans to elaborate pandals designed around unique yearly themes, every creation is an expression of devotion and imagination. </p>

                  <img src="https://static.vecteezy.com/system/resources/previews/017/146/795/large_2x/1st-october-2022-kolkata-west-bengal-india-maa-durga-idol-of-66-pally-kalighat-free-photo.JPG" alt="" />


                </div>
                <div className='PujaArt'>
                  <TiltedCard
                    imageSrc="https://i.pinimg.com/736x/77/f4/ce/77f4ceb0c8d526cc71fb8b0eb6db5078.jpg"
                    altText="Contemporary durga puja Art"
                    captionText="Contemporary durga puja Art"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="400px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Contemporary durga puja Art
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc="https://www.getbengal.com/uploads/story_image/Agomoni-2-cover.jpg"
                    altText="traditional durga puja Art"
                    captionText="Traditional durga puja Art"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="400px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Traditional durga puja Art
                      </p>
                    }
                  />
                  <TiltedCard
                    imageSrc="https://kinjalbose.wordpress.com/wp-content/uploads/2018/10/img_78162.jpg"
                    altText="Bonedi bari durga puja Art"
                    captionText="Bonedi bari durga puja Art"
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="400px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text">
                        Bonedi bari durga puja Art
                      </p>
                    }
                  />
                </div>
                <div className='infiniteslider'>
                  <h4>Our Sponsers</h4>
                  <div class="logos">
                    <div class="logos-slide">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Logo_UNESCO_2021.svg/2560px-Logo_UNESCO_2021.svg.png" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/British_Council_Logo.png" />
                      <img src="https://i.pinimg.com/736x/12/b3/7c/12b37c56014bf9d0a30ecdd2fea39260.jpg" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ABP_logo.svg/1280px-ABP_logo.svg.png" />
                      <img src="https://www.wowmomo.com/wp-content/uploads/2022/03/Wow-Momo-Logo-300x158.png" />


                    </div>
                    <div class="logos-slide">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Logo_UNESCO_2021.svg/2560px-Logo_UNESCO_2021.svg.png" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5c/British_Council_Logo.png" />
                      <img src="https://i.pinimg.com/736x/12/b3/7c/12b37c56014bf9d0a30ecdd2fea39260.jpg" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/ABP_logo.svg/1280px-ABP_logo.svg.png" />
                      <img src="https://www.wowmomo.com/wp-content/uploads/2022/03/Wow-Momo-Logo-300x158.png" />


                    </div>
                  </div>

                </div>
                <div className='Joinnow'>
                  <h2>Join The Celebration <span>Now</span></h2>
                  <div className='joincont'>
                    <p>
                      Join Now and be part of Kolkata’s grandest celebration — Durga Puja 2025! Experience the magic of vibrant pandals, dazzling lights, and the divine presence of Maa Durga, all brought alive in a digital journey like never before. From the biggest pujas to hidden gems, from iconic food stalls to cultural highlights, explore it all at your fingertips. By joining, you step into a community that celebrates creativity, tradition, and togetherness. Don’t just witness Pujo — live it, share it, and feel it. ✨
                      Join today and celebrate the spirit of Pujo with us!
                    </p>
                    <button onClick={() => navigate('/pandals')} >Join Us</button>
                  </div>

                </div>
              </div>
            </div>
            <div className='hsnap'>
              <h1 className='dart'>
                Our<span className='whtxt'> Snapshots  </span>
              </h1>
              <RollingGallery autoplay={true} pauseOnHover={true} />
              <p onClick={() => navigate('/gallery')}>For more visit our Gallery <span>&#8594;</span></p>
            </div>
            <Footer></Footer>
          </>
        } />
        <Route path="/pandals" element={<Pandals />} />
        <Route path="/tridhara" element={<Tridhara />} />
        <Route path="/ekdalia" element={<Ekdalia />} />
        <Route path="/sreebhumi" element={<Sreebhumi />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
