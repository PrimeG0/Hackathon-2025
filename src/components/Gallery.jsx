import React from 'react'
import './Gallery.css'
import DomeGallery from './DomeGallery'
import Footer from './Footel'
import Nav from './Nav'
import Cursor from './Cursor'
import BounceCards from './BounceCards'





const Gallery = () => {
  
  return (
    <>
    <Cursor/>
    <Nav></Nav>
   
    <div className='Galh'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Durga_Puja_image.jpg" alt="" />
        <div className='herotxt'><span id='durga' className='txt'>GALLERY</span> <br />
                <div id='online' className='txt'>ONLINE</div>
                <h1 className='dart'>
            Welcome to our  <span className='whtxt'> Gallery </span>
            
          </h1>

            </div>
            <p>
                Experience the vibrant spirit of Durga Puja through our curated gallery — capturing the grandeur of pandals, rituals, and joyous celebrations in every frame.
            </p>

            <div style={{ width: '100vw', height: '100vh' }}>
      <DomeGallery />
    </div>

    </div>
    <Footer></Footer>
    </>
  )
}

export default Gallery