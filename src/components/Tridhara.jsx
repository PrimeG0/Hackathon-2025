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
  "https://media.indulgexpress.com/indulgexpress%2F2025-09-24%2Flyq91x8r%2FIMG9400-1.JPG", 
  "https://imgs.etvbharat.com/etvbharat/prod-images/28-09-2025/wb-kol-tridhara-7211146_25092025152851_2509f_1758794331_564_2809newsroom_1759055899_1018.jpg", 
  "https://imgs.etvbharat.com/etvbharat/prod-images/28-09-2025/wb-kol-tridhara-7211146_25092025152851_2509f_1758794331_328_2809newsroom_1759055899_676.jpg", 
  "https://imgs.etvbharat.com/etvbharat/prod-images/28-09-2025/wb-kol-66pally-7211146_21092025164511_2109f_1758453311_752_2809newsroom_1759055899_715.jpg"
];


const Tridhara = () => {
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
                <img className='th' src="https://media.indulgexpress.com/indulgexpress%2F2025-09-24%2Flyq91x8r%2FIMG9400-1.JPG" alt="" />
                <h1>TRIDHARA</h1>

                <div className='snap'>
                    <h2 className='snaptxt'>Watch our <span>Snapshots</span> </h2>
                    <div className='pic'>
                        <img id='s' className='p' src="https://static.toiimg.com/thumb/imgsize-23456,msid-124087047,width-600,resizemode-4/photo-2025-09-23-09-44-50.jpg" alt="" />
                        <img id='o' className='p' src="https://tsg-prod.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/09/28041319/1758993187_629_Durga-Puja-2025-Kolkata039s-Tridhara-Akalbodhan-remembers-ancestors-with-cave.jpg" alt="" />
                        <img id='p' className='p' src="https://media.indulgexpress.com/indulgexpress%2F2025-09-29%2F4ksg7j21%2FRanveer-Allahbadia-ranveerallahbadia-aka-beerbiceps-just-pulled-up-at-Tridhara-Akalbodhan-it.jpg?w=480&auto=format%2Ccompress&fit=max" alt="" />
                    </div>
                </div>
                
                <div className="bentogrid">
                    <div className='fl'>
      <div className="bentocard">
        <h2 className="pandalname">Tridhara</h2>
        <p className="pandallocation">📍 107, Manoharpukur, Kalighat, Kolkata, West Bengal 700029</p>
        <p className="pandaltheme">
          🎨 <strong>Theme 2025:</strong> For the 2025 Durga Puja, the Tridhara Sammilani pandal's theme was "Shiv Suleman Dhwani," a black-themed pandal showcasing the divine energies of Shiva, Suleman (Suleiman), and the power of Kali through a combination of cave art, ancient symbols, and a connection to the eternal triad of creation, preservation, and destruction. The theme also featured live performances, including a Shiv Tandav performance and even live dance by aghoris, which sparked varied reactions among visitors
        </p>
        <p className="pandaltime">🕒 6 AM – Midnight</p>
        <p className="pandalspecial">✨Blend of classical motifs with contemporary designs, innovative lighting, strong cultural storytelling</p>
        <p className="pandalfood">🍴 Must Try: Puchkas, Egg Rolls, Mishti Doi</p>
      </div>
      <img src="https://media.indulgexpress.com/indulgexpress%2F2025-09-24%2Flyq91x8r%2FIMG9400-1.JPG" alt="" />
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

export default Tridhara