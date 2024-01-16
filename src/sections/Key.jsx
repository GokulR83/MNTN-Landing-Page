import './Key.css';
import { yourMap } from '../constants';
import { RightArrow } from '../assets/icons';
const Key = () => {
  return (
    <section className='key-section'>
      <div className='full-container'>
      <div className='left-container'>
      <div className="line">
        <div className='number'>
        <h2>{yourMap.number}</h2>
        </div>
      <hr />
      <p>{yourMap.lineTitle}</p>
      </div>
      <div className="hiker">
      <h2>{yourMap.title}</h2>
      <p>{yourMap.para}</p>
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
        <img src={yourMap.imgURL} alt={yourMap.imgText} 
        width={566}
        height={720}
        />
      </div>
      </div>
    </section>
  )
}

export default Key