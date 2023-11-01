import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    recipient_email: '', // New field for the recipient's email
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the email using emailjs-com
    const templateParams = {
      user_name: formData.user_name,
      user_email: formData.user_email,
      recipient_email: formData.recipient_email,
      message: formData.message,
    };
    emailjs
      .send('service_ce6bckh', 'template_8ocw5dj', templateParams, 'TtfW3WerFvai1V8ZU')
      .then((response) => {
        console.log('Email sent successfully!', response);
        // Reset the form after successful submission
        setFormData((prevData) => ({
          ...prevData,
          recipient_email: '', // Clear the recipient email field only
          message: '',
        }));
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center mb-5 shadow">Contact Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="user_name">Name</label>
              <input type="text" className="form-control" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange}required/>
            </div>
            <div className="form-group">
              <label htmlFor="user_email">Email</label>
              <input type="email" className="form-control" id="user_email" name="user_email" value={formData.user_email} onChange={handleChange} required/>
            </div>
            <div className="form-group"><label htmlFor="message">Message</label>
            <textarea className="form-control" id="message" name="message" value={formData.message} onChange={handleChange} rows="4"required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;