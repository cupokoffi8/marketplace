import React from 'react'; 
import { FeaturedProducts } from '../../components/FeaturedProducts/FeaturedProducts';
import { Slider } from '../../components/Slider/Slider'; 
import "./Home.scss"; 
import Categories from '../../components/Categories/Categories';
import Contact from '../../components/Contact/Contact';
import About from '../../components/About/About';

export const Home = () => {
  window.scrollTo(0, 0); 
  return (
    <div className="home" style={{maxWidth: "100vw"}}>
      <Slider /> 
      <About /> 
      <br /> 
      <div>
        <div style={{position: "relative"}}>
            <div class="custom-shape-divider-top-1687287121">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#DA3A3A" d="M40.3,-51.5C45.5,-35.1,38.5,-17.5,39.2,0.8C40,19.1,48.7,38.3,43.5,45.1C38.3,51.9,19.1,46.4,1.8,44.6C-15.6,42.8,-31.1,44.7,-45.2,37.9C-59.4,31.1,-72,15.6,-68.4,3.7C-64.7,-8.2,-44.7,-16.4,-30.5,-32.8C-16.4,-49.3,-8.2,-73.9,4.7,-78.6C17.5,-83.2,35.1,-67.9,40.3,-51.5Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <div style={{position: "relative"}}>
          <div class="custom-shape-divider-top-1687287122">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#DA3A3A" d="M43.1,-56.5C58.3,-48.4,74.5,-38.9,80.6,-25C86.7,-11.2,82.6,7.2,76.1,23.9C69.5,40.6,60.5,55.8,47.4,67.8C34.3,79.8,17.2,88.8,-0.5,89.5C-18.1,90.1,-36.3,82.5,-47.7,69.9C-59.1,57.3,-63.7,39.8,-68.2,22.9C-72.8,5.9,-77.2,-10.3,-74.1,-25.4C-71,-40.5,-60.3,-54.4,-46.7,-63C-33.1,-71.7,-16.5,-75,-1.3,-73.2C14,-71.5,28,-64.6,43.1,-56.5Z" transform="translate(100 100)" />
            </svg>
          </div>
        </div>

        <FeaturedProducts type="featured" /> 
      </div>
      <div>
        <div style={{position: "relative"}}>
          <div class="custom-shape-divider-bottom-1687458140">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
              </svg>
          </div> 
        </div>
        <Categories /> 
      </div>
      <div>
        <div style={{position: "relative"}}>
          <div class="custom-shape-divider-top-1687459024">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
              </svg>
          </div>
        </div>
      </div>
      <br /> 
      <FeaturedProducts type="trending" /> 
      <div style={{position: "relative"}}>
        <div class="custom-shape-divider-bottom-1687288090">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
      <Contact /> 
      <div style={{position: "relative"}}>
        <div class="custom-shape-divider-top-1687440419">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" class="shape-fill"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
