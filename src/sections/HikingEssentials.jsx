import './HikingEssentials.css';
import { hikingGear } from '../constants';
import { RightArrow } from '../assets/icons';
const HikingEssentials = () => {
  return (
    <section className='hiking-essentials'>
      <div className='hiking-container'>
            <div className='left-container'>
              <div className="line">
                <div className='number'>
                <h2>{hikingGear.number}</h2>
                </div>
              <hr />
              <p>{hikingGear.lineTitle}</p>
              </div>
          <div className="hiker">
          <h2>{hikingGear.title}</h2>
          <p>{hikingGear.para}</p>
          </div>
          <div className="read-more">
            <p>read more</p>
            <img src={RightArrow} alt="right arrow"
            width={20}
            height={20}
            />
          </div>
        </div>
      <div className='img-container'>
        <img src={hikingGear.imgURL} alt={hikingGear.imgText} 
        width={566}
        height={720}
        />
      </div>
      </div>
    </section>
  )
}

export default HikingEssentials;