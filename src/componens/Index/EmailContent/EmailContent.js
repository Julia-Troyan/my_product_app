import react from "react";
import "./style_email.scss";
import Layer from './img/Layer.png';
import Shadow from './img/Shadow.png';
import Face from './img/Face.png'

const EmailContent = () => {
  return (
<section className="email-content">
    <div className="email-img">
    <img src={Layer} alt="Layer" />
      <div className="overlap">
      <img src={Shadow} alt="Shadow" />
      </div>
    </div>
    
    <div className="email-button">
      <div className="email_face">
      <img src={Face} alt="Face" />
        <div className="block-p"><p>“Vestibulum quis porttitor dui!Quisque viverra nunc mi,</p> <p  className="p1">a pulvinar purus condimentum“</p></div>
      </div>
      <div className="email-block">
        <h1>SUBSCRIBE</h1>
        <p>FOR OUR NEWSLETTER AND PROMOTION</p>
        <div className="email-btn">
          <form action="id" className="form">
            <input type="email" placeholder="Enter Your Email"/>
            <button type="submit">Subscribe</button>
          </form>
        </div>
        
      </div>
      </div>
    </section>
  );
};export default EmailContent;