import Button from "../reusable/Button";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com"
import { AiFillCheckCircle } from "react-icons/ai"
import WaysPortfolioContext from "../../context/WaysPortContext";

export default function Contact() {

  const {contactRef, contactInView} = useContext(WaysPortfolioContext)

  const form = useRef();
  const [ showSuccess, setShowSuccess ] = useState(false)

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_xntj62j', 'template_idj0jxb', form.current, 'zTkg27Ahp4AaPiT1q')
      .then((result) => {
          console.log(result.text);
          setShowSuccess(true)
          setTimeout(() => {
            setShowSuccess(false)
          }, 1000);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();  
  };

  return (
    <div id="contact" ref={contactRef}>
      <div className={`secHeader ${contactInView && "showSecHeaderAfter"}`}>
         <p>How To</p>
         <p>Contact Me</p>
      </div>
      <form onSubmit={sendEmail} ref={form}>
        <p className="contactIntro">Have a question or want to work together ?</p>
        <input type="text" name="name" placeholder="Name" required/>
        <input type="email" name="email" placeholder="Email" required/>
        <textarea name="message" placeholder="Your message" rows="10" required/>
        <Button version="noBackgroundBtn">SUBMIT</Button>
        {showSuccess && <p className="emailSent"><AiFillCheckCircle /> Submitted Successfully</p>}
      </form>
    </div>
  )
}
