import './GetStarted.css';
import { Hiker } from '../constants';
import { RightArrow } from '../assets/icons';
const GetStarted = () => {
  return (
    <section className='get-started'>
      
      <div className='full-container'>
      <div className='left-container'>
      <div className="line">
        <div className='number'>
        <h2>{Hiker.number}</h2>
        </div>
      <hr />
      <p>{Hiker.lineTitle}</p>
      </div>
      <div className="hiker">
      <h2>{Hiker.title}</h2>
      <p>{Hiker.para}</p>
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
        <img src={Hiker.imgURL} alt={Hiker.imgText} 
        width={566}
        height={720}
        />
      </div>
      </div>
    </section>
  )
}

export default GetStarted;