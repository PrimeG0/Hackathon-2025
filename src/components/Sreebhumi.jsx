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
import BounceCards from './BounceCards';

//Srheebhumi section of our Pandal tab

const img = [
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
  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A6%AC%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0_%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%9C%E0%A6%A8%E0%A7%80%E0%A6%A8_%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A7%8B%E0%A7%8E%E0%A6%B8%E0%A6%AC_%E0%A7%A8%E0%A7%A6%E0%A7%A7%E0%A7%AE.jpg/960px-%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A6%AC%E0%A6%BE%E0%A6%9C%E0%A6%BE%E0%A6%B0_%E0%A6%B8%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%AC%E0%A6%9C%E0%A6%A8%E0%A7%80%E0%A6%A8_%E0%A6%A6%E0%A7%81%E0%A6%B0%E0%A7%8D%E0%A6%97%E0%A7%8B%E0%A7%8E%E0%A6%B8%E0%A6%AC_%E0%A7%A8%E0%A7%A6%E0%A7%A7%E0%A7%AE.jpg",
    "https://5.imimg.com/data5/ANDROID/Default/2023/6/318481978/KF/ZU/GM/75123854/product-jpeg.jpg",
    "https://5.imimg.com/data5/ANDROID/Default/2021/8/UD/AX/MD/39222140/product-jpeg.jpg",
    "https://www.plutusart.com/wp-content/uploads/2020/03/durga-14.jpg",
    "https://media.istockphoto.com/id/1347313501/photo/idol-of-goddess-durga-inside-a-puja-pandal-during-durga-puja.jpg?s=612x612&w=0&k=20&c=nH5u2zWhLEmqmNxY5IRrdkyVPSk1XCKAMb2qmMKdjw8="
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  const image = [
    "https://www.whiskaffair.com/wp-content/uploads/2024/01/Mughlai-Chicken-Stew-2-3.jpg",
    "https://notoutofthebox.in/wp-content/uploads/2014/09/c11-500x500.jpg",
    "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",

    "https://simshomekitchen.com/wp-content/uploads/2022/04/tandoori-skewers.png"
  ];
  return (

    <>
      <Cursor />
      <Nav></Nav>
      <div className='Tridhara'>
        <img className='th' src="https://pbs.twimg.com/media/G1SqDbLbQAIR8AO.jpg" alt="" />
        <h1>SREEBHUMI</h1>

        <div className='snap'>
          <h2 className='snaptxt'>Watch our <span>Snapshots</span> </h2>
          <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={500}
            containerHeight={250}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        </div>

        <div className="bentogrid">
          <div className='fl'>
            <div className="bentocard">
              <h2 className="pandalname">Sreebhumi Sporting</h2>
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
        <div>
          <h2 className='snaptxt'>Taste Some delicious <span>FOOD</span> </h2>

          <BounceCards
            className="custom-bounceCards"
            images={image}
            containerWidth={500}
            containerHeight={250}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={true}
          />
        </div>
        <h2 className='snaptxt'>Our <span>Gallery</span> </h2>
        <div className="slider">
          {img.map((img, index) => (
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