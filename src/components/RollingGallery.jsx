import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useAnimation, useTransform } from 'motion/react';
import './RollingGallery.css';

const IMGS = [
  'https://phool.co/cdn/shop/articles/1727818018529how-many-durga-puja-pandals-in-kolkata-exploring-the-enchanting-festival-of-lights_dc195623-5bb6-4658-990e-fe09645529b5_1024x1024.jpg?v=1728039304',
  'https://images.hindustantimes.com/img/2022/09/30/1600x900/durga_puja_1664502025274_1664502025551_1664502025551.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6e/Durga_Puja_2013_at_Ramakrishna_Mission_in_Dhaka_005.jpg',
  'https://www.taneira.com/on/demandware.static/-/Sites-Taneira-Library/default/dwabcf8b85/images/blog/durga-puja-celebration/Durga_02.jpg',
  'https://media.istockphoto.com/id/2168143551/photo/durga-idol-during-durga-puja-festival-in-india-it-is-very-popular-traditional-hindu-religious.jpg?s=612x612&w=0&k=20&c=4eAlH9OjL-uO_9Yejk9xjWYAj78KK6I24uSiUQaKpYo=',
  'https://www.orissapost.com/wp-content/uploads/2019/09/29808-000_sr8ux-20170929080030.jpg',
  'https://media.istockphoto.com/id/611294762/photo/interior-of-decorated-durga-puja-pandal-kolkata-west-bengal-india.jpg?s=612x612&w=0&k=20&c=AG5ITwXTBjhoiUF0KZvjH17UUGLAz0xqnbewoxcj8Pc=',

];

const RollingGallery = ({ autoplay = false, pauseOnHover = false, images = [] }) => {
  images = IMGS;
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  const cylinderWidth = isScreenSizeSm ? 1100 : 1800;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const dragFactor = 0.05;
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: 'spring', stiffness: 60, damping: 20, mass: 0.1, ease: 'easeOut' }
    });
  };

  const transform = useTransform(rotation, value => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: 'linear' }
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2000);

      return () => clearInterval(autoplayRef.current);
    }
  }, [autoplay, rotation, controls, faceCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - 360 / faceCount,
        transition: { duration: 2, ease: 'linear' }
      });
      rotation.set(rotation.get() - 360 / faceCount);

      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: 'linear' }
        });
        rotation.set(rotation.get() - 360 / faceCount);
      }, 2000);
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: 'preserve-3d'
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`
              }}
            >
              <img src={url} alt="gallery" className="gallery-img" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
