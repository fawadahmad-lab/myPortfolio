import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    from_name: '',
    to_name: 'Fawad Qureshi', // The recipient's name
    message: '',
    email: '',
  });
  const [response, setResponse] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_yxlef5p', // Replace with your actual service ID
      'template_e5zycit', // Replace with your actual template ID
      {
        from_name: formData.from_name,
        to_name: formData.to_name,
        message: formData.message,
        email: formData.email,
      },
      'yIFsypJHaUhYhjZqa' // Replace with your actual public key
    )
    .then(() => {
        setResponse('Message sent successfully!');
    })
    .catch(() => {
        setResponse('Failed to send message. Please try again.');
    });
  };

  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '0 auto',
        padding: '20px',
        background: darkMode ? '#333' : '#f9f9f9',
        color: darkMode ? '#fff' : '#000',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          value={formData.from_name}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            border: darkMode ? '1px solid #555' : '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: darkMode ? '#555' : '#fff',
            color: darkMode ? '#fff' : '#000',
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            border: darkMode ? '1px solid #555' : '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: darkMode ? '#555' : '#fff',
            color: darkMode ? '#fff' : '#000',
          }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            padding: '10px',
            border: darkMode ? '1px solid #555' : '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: darkMode ? '#555' : '#fff',
            color: darkMode ? '#fff' : '#000',
            minHeight: '100px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px',
            borderRadius: '4px',
            border: 'none',
            color: '#fff',
            backgroundColor: '#007bff',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          Send Message
        </button>
      </form>
      <p>{response}</p>
    </div>
  );
};

export default ContactForm;
