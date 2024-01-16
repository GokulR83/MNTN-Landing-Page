import './Hero.css';
import { bgFinal, bgOne, bgTwo } from '../assets/images';
import { DownArrow } from '../assets/icons';
const Hero = () => {
  return (
    <section>
      <div className='Hero'>
      <img src={bgOne} alt="bg-one" id='bg-one'/> 
      <img src={bgTwo} alt="bg-three" id='bg-two'/>
      <div className='hero-container'>
        <div className='line'>
        <hr />
        <p>A HIKING GUIDE</p>
        </div>
        <h1 className='heading'>Be prepared for the Mountains and beyond!</h1>
        <div className='scroll-down'>
          <p>Scroll Down</p>
          <img src={DownArrow} alt="arrow" width={20}
        height={20}
        />
        </div>
      </div>   
      <img src={bgFinal} alt="bg-three" id='bg-final'/>
      </div>
    </section>
  )
}

export default Hero;