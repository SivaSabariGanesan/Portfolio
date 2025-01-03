import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/contact', {  // Corrected endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Display success message
        setSuccessMessage('Your Message has Sent to Siva Sabari Ganesan Succesfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form fields
      } else {
        // Handle error response from backend
        setSuccessMessage('Error: Unable to send the message. Please try again.');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setSuccessMessage(`Error submitting form: ${error.message}`);
      } else {
        setSuccessMessage("An unknown error occurred");
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-black/95">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-primary mb-12 text-center"
        >
          Get In Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" size={24} />
                <div>
                  <p className="text-gray-400">Email</p>
                  <a href="mailto:contact@example.com" className="text-white hover:text-primary transition-colors">
                    asivasabariganesan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="text-primary" size={24} />
                <div>
                  <p className="text-gray-400">Phone</p>
                  <a href="tel: +91 9360832153" className="text-white hover:text-primary transition-colors">
                    +91 9360832153
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" size={24} />
                <div>
                  <p className="text-gray-400">Location</p>
                  <p className="text-white">Chennai, Tamil Nadu</p>
                </div>
              </div>

              <div className="flex space-x-4 pt-6">
                <a href="https://github.com/SivaSabariGanesan" className="text-gray-400 hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/siva-sabari-ganesan-a-b3288a28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-primary text-white"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-primary text-white"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                className="w-full px-4 py-2 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-primary text-white h-32"
                placeholder="Your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-primary text-black font-bold rounded-lg hover:bg-primary-light transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Success Message Below the Form */}
        {successMessage && (
          <div className="mt-8 text-center">
            <p className={`text-xl font-semibold ${successMessage.includes('Error') ? 'text-red-500' : 'text-yellow-400'}`}>
              {successMessage}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
