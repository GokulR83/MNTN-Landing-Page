import { logo } from '../assets/icons';
import './Footer.css';
import { footerLinks} from '../constants';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="social-container">
          <img src={logo} alt="logo"
          width={108}
          height={24}
          />
          <p className='description'>Get out there & discover your next slope,mountain & destination</p>
          <p className='copyright'>@Copyright 2020 MNTN, Inc. Terms & Privacy A concept by Kryston Schwarze</p>
        </div>
        <div className="link-container">
          {
            footerLinks.map((section)=>(
              <div key={section}>
                <h4 className="link">
                  {section.title}
                </h4>
                <ul>
                  {
                    section.links.map((link)=>(
                      <li key={link.name}>
                        <a href={link.link}>{link.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer;