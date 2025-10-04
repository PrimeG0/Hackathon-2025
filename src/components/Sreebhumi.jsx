import React from 'react'
import './Tridhara.css'
import Nav from './Nav'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import { useState } from 'react'
import Footer from './Footel';


const images = [
  "https://pbs.twimg.com/media/G1SqDbLbQAIR8AO.jpg", 
  "https://i0.wp.com/theunstumbled.com/wp-content/uploads/2025/09/durga-.jpg?fit=1200%2C800&ssl=1", 
  "https://imgmediagumlet.lbb.in/media/2025/09/68c94cf36d8b7f761bb6d868_1758022899421.jpg", 
  "https://i0.wp.com/theunstumbled.com/wp-content/uploads/2025/09/sreebhumi-theme-2025.jpg?resize=800%2C450&ssl=1"
];


const Sreebhumi = () => {
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
            <Nav></Nav>
            <div className='Tridhara'>
                <img className='th' src="https://pbs.twimg.com/media/G1SqDbLbQAIR8AO.jpg" alt="" />
                <h1>SREEBHUMI</h1>

                <div className='snap'>
                    <h2 className='snaptxt'>Watch our <span>Snapshots</span> </h2>
                    <div className='pic'>
                        <img id='s' className='p' src="https://i0.wp.com/theunstumbled.com/wp-content/uploads/2025/09/durga-.jpg?fit=1200%2C800&ssl=1" alt="" />
                        <img id='o' className='p' src="https://pbs.twimg.com/media/G1SqDbLbQAIR8AO.jpg" alt="" />
                        <img id='p' className='p' src="https://pbs.twimg.com/amplify_video_thumb/1969796582204698624/img/_4WiPCxvovPVfQnU.jpg:large" alt="" />
                    </div>
                </div>
                
                <div className="bentogrid">
                    <div className='fl'>
      <div className="bentocard">
        <h2 className="pandalname">Sribhumi Sporting</h2>
        <p className="pandallocation">📍Sreebhumi, Lake Town, Kolkata, West Bengal</p>
        <p className="pandaltheme">
          🎨 <strong>Theme 2025:</strong> The theme for the Sreebhumi Sporting Club's 2025 Durga Puja is the Swaminarayan Akshardham Temple. The magnificent pandal, crafted with extraordinary detail, aims to replicate the grandeur of the temple, creating a spectacular experience for visitors during the festival.  
        </p>
        <p className="pandaltime">🕒 6 AM – Midnight</p>
        <p className="pandalspecial">✨Massive blockbuster-style pandal, vibrant lighting, crowd-puller every year, often covered in national media.</p>
        <p className="pandalfood">🍴 Must Try: Puchkas, Egg Rolls, Mishti Doi</p>
      </div>
      <img src="https://www.livemint.com/lm-img/img/2025/09/25/600x338/PTI09-24-2025-000279A-0_1758781373832_1758781396754.jpg" alt="" />
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

export default Sreebhumi