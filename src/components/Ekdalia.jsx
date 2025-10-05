import React from 'react'
import './Tridhara.css'
import Nav from './Nav'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { useState } from 'react'
import Footer from './Footel';
import Cursor from './Cursor'


const images = [
  "https://pbs.twimg.com/media/G13ZIb5WYAAP-0U.jpg", 
  "https://365pujo.com/durgapuja2023/assets/img/portfolio/ekdalia-evergreen-01.jpeg", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/DurgaPuja2017_-_Pandal_of_Ekdalia_Evergreen_Club_02.jpg/960px-DurgaPuja2017_-_Pandal_of_Ekdalia_Evergreen_Club_02.jpg", 
  "https://feeds.abplive.com/onecms/images/uploaded-images/2024/10/11/e62f92352a82336b6858bfeed8c43deb1b023.png"
];


const Ekdalia = () => {
     const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
    useGSAP(() => {
        
       gsap.registerPlugin(ScrollTrigger);
     
      gsap.fromTo(".snaptxt", { x: -50, opacity: 0, }, {
      x: 0, opacity: 1, duration: 1, scrollTrigger: {
        trigger: '.snaptxt',
        start: 'botttom bottom',
        scrub: true
      }
    });
    gsap.fromTo(".snap", { y: -50, opacity: 0, }, {
      y: 0, opacity: 1, duration: 1, scrollTrigger: {
        trigger: '.snap',
        start: 'botttom bottom',
        scrub: true
      }
    });

        
            
          }, []);
    return (
         
        <>
        <Cursor/>
            <Nav></Nav>
            <div className='Tridhara'>
                <img className='th' src="https://feeds.abplive.com/onecms/images/uploaded-images/2024/10/11/e62f92352a82336b6858bfeed8c43deb1b023.png" alt="" />
                <h1>EKDALIA</h1>

                <div className='snap'>
                    <h2 className='snaptxt'>Watch our <span>Snapshots</span> </h2>
                    <div className='pic'>
                        <img id='s' className='p' src="https://thefederal.com/h-upload/2025/09/28/566398-ekdalia-evergreen11zon.webp" alt="" />
                        <img id='o' className='p' src="https://i.pinimg.com/736x/21/c3/33/21c333cf30a44c6201c061400d002194.jpg" alt="" />
                        <img id='p' className='p' src="https://d34vm3j4h7f97z.cloudfront.net/optimized/4X/f/b/d/fbd6539f7f7e7b98f69888fe38a7d3d0cfaff76d_2_1024x718.jpeg" alt="" />
                    </div>
                </div>
                
                <div className="bentogrid">
                    <div className='fl'>
      <div className="bentocard">
        <h2 className="pandalname">Ekdalia Evergreen Club</h2>
        <p className="pandallocation">📍 Location: 15, Ekdalia Rd, Ekdalia, Ballygunge, Kolkata.</p>
        <p className="pandaltheme">
          🎨 <strong>Theme 2025:</strong> Ekdalia Evergreen Club 2025 Pujo Pandal 🪷 🖼 Theme: Arunachaleswarar Temple, Tamil Nadu. 
        </p>
        <p className="pandaltime">🕒 6 AM – Midnight</p>
        <p className="pandalspecial">✨Traditional idol, towering temple-style pandal, nostalgic ambience that draws lakhs of visitors</p>
        <p className="pandalfood">🍴 Must Try: Puchkas, Egg Rolls, Mishti Doi</p>
      </div>
      <img src="https://thefederal.com/h-upload/2025/09/28/566398-ekdalia-evergreen11zon.webp" alt="" />
      </div>
    </div>
    <h2 className='snaptxt'>Our <span>Gallery</span> </h2>
        <div className="slider">
      {images.map((img, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && <img src={img} alt="Durga Puja" className="image" />}
        </div>
      ))}

      <button className="left-arrow" onClick={prevSlide}>
        ❮
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </div>

            </div>
            <Footer></Footer>
        </>
    )
}

export default Ekdalia