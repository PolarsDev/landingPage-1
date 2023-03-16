import React, {useRef, useState} from 'react'
import './style.css'
import emailjs from '@emailjs/browser';
import './subscribe.css'


const HeroSection = () => {

  const [user_email, setDepartment] = useState('');

  const form = useRef();

  const sendEmail = event => {

    //To send Mail
    emailjs.sendForm('service_kgc2jh8', 'template_pyl7ntg', form.current, 'fwVjw53fOy66fatzW')
    .then((result) => {
        console.log(result.text);
        console.log("message sent");
    }, (error) => {
        console.log(error.text);
    });

    // To prevent page refresh
    event.preventDefault();

    //clear input values after submit 
    setDepartment('');
};


  return <div className='hero-section-wrapper'>
    <div className='flex absolute-center flex-col hero-section max-width'>
      {/* -------------------------- Heading ------------------------- */}
      <div className='hero-heading'>
      PolarsDev Coming Soon!
      </div>

      {/* ----------------------- Sub-Heading ------------------------ */}
      <div className='hero-subheading'>
        Polaris for your Developement.
      </div>

<form ref={form} onSubmit={sendEmail}>
      <div className='wrapper'> 
      <input type="checkbox" id="click"/>
      <label class="btn-1" for="click">Subscribe</label>
      <div className='field'>
        <input type="email" id="user_email" name='user_email' value={user_email}  placeholder="Enter Your Email" onChange={event => setDepartment(event.target.value)}/>
        <input type="submit" for="click" class="btn-2" value="Subscribe" />
      </div>
      </div>
      </form>
    </div> 
    </div>
}

export default HeroSection;

