import React from 'react';
import './Banner.scss';
import { images } from './../../images/index';
const Banner = () => {
  return (
    <div>
      <div className='banner container'>
        <picture>
          <source media = "(max-wdith:767px)" srcSet={images.works_mobile}/>
          <img src={images.works_desktop} alt =""/>
        </picture>

        <div className="banner__wrapper">
          <div className = "title">
             <h2 className ="title1">Find Out More <br>
             
             </br>About How We Work</h2>  


          </div>
          <div className='button'>
            <button className='btn'>How we Work</button>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Banner;
