import React, { useState } from "react";
import Modal from 'react-modal';
import '../asserts/css/datepicker.css';
import cb from '../asserts/img/chatbot-removebg-preview.png';
import closeIcon from '../asserts/img/cross.png'; // Import a close icon image

import MapComponent from './MapComponent';
import Navbar from './Navbar';

function RegistrationForm() {
  const [showm, setShowm] = useState(false);

  const show = () => {
    console.log('Toggling modal state. Current state:', showm);
    setShowm(!showm);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div>
      {/* Metadata and stylesheet links */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Experience the Wonders of History—Book Now!</title>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" />
      <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" type="text/css" href="slick/slick.css" />
      <link rel="stylesheet" type="text/css" href="slick/slick-theme.css" />
      <link rel="stylesheet" type="text/css" href="css/datepicker.css" />
      <link rel="stylesheet" href="css/tooplate-style.css" />

      <div>
        <Navbar />
        <div className="appbar-container">
          <p>Experience the Wonders of History—Book Now!</p>
          <div className="appbar">
            <div onClick={() => scrollToSection('tm-section-1')}>HOME</div>
            <div onClick={() => scrollToSection('tm-section-2')}>ABOUT</div>
            <div onClick={() => scrollToSection('tm-section-6')}>CONTACT US</div>
            <span></span>
          </div>
        </div>
        
        <div className="tm-section tm-bg-img" id="tm-section-1">

                <video
                autoPlay
                muted
                loop
                id="background-video"
          
              >
                <source src="https://ncsm.gov.in/storage/settings/ncsm-banner-video.webm?ver=1.9" type="video/webm" />
                Your browser does not support the video tag.
              </video>
          <h1 style={{ backgroundColor: 'transparent',zIndex:'-1', color: '#ffff', fontSize: '48px',fontWeight:'600',textShadow:'3px 3px 3px rgba(0, 2, 1, 0.5), 0 0 25px #ff0000', paddingTop: '5px', marginLeft: '20px' }}>
            Experience the Wonders of History—Book Now!
          </h1>
          
          <div className="tm-bg-white ie-container-width-fix-2">
            <div className="container ie-h-align-center-fix">
              <div className="row">
                <div className="col-xs-12 ml-auto mr-auto ie-container-width-fix"></div>
              </div>
            </div>
          </div>
          
          <div className="cbt" style={{ backgroundColor: '#ffff', width: '2%', cursor: 'pointer' }} onClick={show}>
            {showm ? (
              <img 
                src={closeIcon} 
                alt="Close ChatBot" 
                style={{ width: '55px', height: '55px', marginLeft: '74px', marginTop: '73px',   transition: 'transform 0.3s ease, opacity 0.3s ease', // Add transform and opacity transitions
                  transform: 'scale(1.1)',                 opacity: 1   }} 
              />
            ) : (
              <img 
                src={cb} 
                alt="Open ChatBot" 
                style={{ width: '110px', height: '110px', marginLeft: '49px', marginTop: '47px',transition: 'transform 0.3s ease, opacity 0.3s ease, border-radius 0.3s ease', 
                  transform: 'scale(0.9)', 
                  opacity: 0.8, 
                  borderRadius: '50%' }} 
              />
            )}
          </div>
        </div>
        
        <div className="tm-section-2" id="tm-section-2">
          <div className="container" style={{height:'8%'}}>
            <div className="row">
              <div className="col text-center">
                <h2 className="tm-section-title">About</h2>
                <p className="tm-color-white tm-section-subtitle">Ticket Booking</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="tm-section tm-position-relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 60" preserveAspectRatio="none" className="tm-section-down-arrow">
            <polygon fill="#0000" points="0,0  100,0  50,60" />
          </svg>
          <div className="container tm-pt-5 tm-pb-4" style={{ marginTop: '-6%' }}>
            <div className="text-center">
                <h2 className="tm-color-primary">Online Ticket Booking with ChatBot</h2>
              <article className="col-sm-12 col-md" style={{textAlign:'initial'}}>
                <p style={{ fontSize: '24px' }}>
                  Welcome to our Ticket booking system. We make it easy to secure your visit to our museum with a few simple clicks. Our platform offers a straightforward way to purchase tickets, with secure payment options and instant confirmation. Enjoy a hassle-free booking experience and look forward to exploring our exhibits with ease.
                </p>
              </article>
              <article className="col-sm-12 col-md" style={{textAlign:'initial'}}>
                <br />
                <p style={{ fontSize: '24px' }}>
                  Welcome to our innovative chatbot-based ticketing system, specially designed for museums. Our platform revolutionizes the way visitors book tickets, making the process seamless, efficient, and user-friendly.
                  <br />
                  With our chatbot, you can effortlessly book tickets for museum entry and various shows, ensuring a smooth and hassle-free experience from start to finish. Whether you're planning a visit or looking to attend a special exhibit, our system is here to assist you every step of the way.
                  <br />
                  Our solution not only enhances the visitor experience but also helps museums streamline their operations, reducing manual workload and operational costs. By leveraging the power of automation, we aim to improve overall visitor satisfaction and make ticket booking more accessible and convenient.
                  <br />
                  Thank you for choosing our platform. We are committed to making your museum visit memorable and enjoyable.
                </p>
              </article>
            </div>
          </div>
        </div>

        <div className="tm-section tm-section-pad tm-bg-img tm-position-relative" id="tm-section-6">
          <div className="container ie-h-align-center-fix">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-7">
<MapComponent/>
                <div id="google-map" />
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 mt-3 mt-md-0">
                <div className="tm-bg-white tm-p-4">
                  <form action="index.html" method="post" className="contact-form">
                    <div className="form-group">
                      <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                      <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <input type="text" id="contact_subject" name="contact_subject" className="form-control" placeholder="Subject" required />
                    </div>
                    <div className="form-group">
                      <textarea id="contact_message" name="contact_message" className="form-control" rows={9} placeholder="Message" required defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-primary tm-btn-primary">Send Message Now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <MapComponent /> */}
        <footer className="tm-bg-dark-blue">
          <div className="container">
            <div className="row">
              <p className="col-sm-12 text-center tm-font-light tm-color-white p-4 tm-margin-b-0">
                Copyright © <span className="tm-current-year">2018</span> Your Company
                - Design: <a rel="nofollow" href="https://www.tooplate.com" className="tm-color-primary tm-font-normal" target="_parent">Tooplate</a>
              </p>
            </div>
          </div>
        </footer>
      </div>

      {showm && (
        <Modal
          isOpen={showm}
          contentLabel="ChatBot Modal"
          style={{
            content: {
              top: '55%',
              left: '86%',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              width:'26%',
              padding:'0%',
              height:'68vh',
              boxShadow:'0 0 20px rgba(0, 0, 0, 0.566)',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
            },
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0)',
            }
          }}
        >
           {/* <iframe
              allow="microphone;"
              width="367.5"
              height="517.7"
              src="https://console.dialogflow.com/api-client/demo/embedded/f487f699-3974-4199-bb9a-ba2d2f0d7d80">
          </iframe> */}
          <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
<df-messenger
  intent="WELCOME"
  chat-title="Eco-Chatbot"
  agent-id="f487f699-3974-4199-bb9a-ba2d2f0d7d80"
  language-code="ta"
></df-messenger>
                 </Modal>
      )}
    </div>
  );
}

export default RegistrationForm;