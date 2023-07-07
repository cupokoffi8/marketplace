import React, {useState} from 'react'; 
import emailjs from 'emailjs-com'; 
import './Contact-Us.css'; 

const Result = () => {
  return (
    <p>Your message has been submitted!</p>
  )
}

function Contact() {
  const [result, showResult] = useState(false); 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wy6rvyq', 'template_pdwgvlh', e.target, 'user_uPPPTbDsFv1hhgaf9n8wH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
      e.target.reset(); 
      showResult(true); 
  }; 

  // Hide result 
  setTimeout(() => {
    showResult(false); 
  }, 5000); 

  return (
    <>
    <div id="contact">
    <div className="contact-us"> 

      <h1 id="contact-head">Let's Get in Touch!</h1> 
      <br /> 

      <form action="" onSubmit={sendEmail}> 
        <div className="formWord">

          <h2 id="fill-out">Have a question or concern? Send us a message and we will get back to you as soon as possible!</h2>

          <span id="the-span">Full Name*</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="fullName" 
            required 
            /> 

          <span id="the-span">Phone Number*</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="phone" 
            required 
            /> 

          <span id="the-span">Email*</span> 
          <br /> 
          <input 
            className="input100" 
            type="text" 
            name="email" 
            required 
            /> 

        </div>

        <div className="formWord">
          <span id="the-span">Message*</span> 
          <br /> 
          <textarea 
            name="message"
            required 
            >
            </textarea>
            <br /> 
            <div className='header-btns'>
                    <button className='cv-btn2'>Submit</button> 
                </div>
        </div>

        <div className="row">{result ? <Result /> : null}</div> 

      </form>
    </div>
    </div>
    </> 
  );
}

export default Contact;