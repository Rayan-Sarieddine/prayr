import React from "react";
import "./style.css";
import { IoLocationOutline as LocationIcon } from "react-icons/io5";
import { MdOutlinePhone as PhoneIcon } from "react-icons/md";
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
function Contact() {
  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-left">
          <h3>Have a Question?</h3>
          <div>
            <h4>Contact us</h4>
          </div>
          <p>Feel free to reach out by phone or complete our contact form.</p>
          <p> We're eager to connect and assist you.</p>
          <div className="contact-left-informations">
            <div className="contact-left-information">
              <LocationIcon className="contact-left-information_icon" />
              <div>
                <p className="extra-bold">St. Charles City Center, 5th floor</p>
                <p>Omar Daouk Street,</p>
                <p>Beirut, Lebanon</p>
              </div>
            </div>
            <div className="contact-left-information">
              <PhoneIcon className="contact-left-information_icon" />
              <p className="bold">+961-81-00 33 88</p>
            </div>
            <div className="contact-left-information">
              <EmailIcon className="contact-left-information_icon" />
              <p className="bold">info@prayr.tech</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <div className="contact-right-firstrow">
            <label>First Name</label>
            <input type="text" placeholder="Enter your first name" />
            <label>Last Name</label>
            <input type="text" placeholder="Enter your last name" />
          </div>
          <div className="contact-right-contactrow">
            <label>Email</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="contact-right-contactrow">
            <label>Subject</label>
            <input type="text" placeholder="ex. Inquiry" />
          </div>
          <div className="contact-right-contactrow">
            <label>Message</label>
            <input type="text" placeholder="Enter your message here" />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
