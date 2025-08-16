import { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaUpload, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderType: '',
    portfolioPoster: '',
    message: '',
    file: null
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Listen for selected poster from portfolio
  useEffect(() => {
    const checkSelectedPoster = () => {
      const selectedPoster = localStorage.getItem('selectedPoster')
      if (selectedPoster) {
        setFormData(prev => ({
          ...prev,
          orderType: 'Recreate Portfolio Poster',
          portfolioPoster: selectedPoster
        }))
        // Clear the localStorage after setting
        localStorage.removeItem('selectedPoster')
      }
    }

    const checkSelectedService = () => {
      const selectedService = localStorage.getItem('selectedService')
      if (selectedService) {
        try {
          const serviceData = JSON.parse(selectedService)
          setFormData(prev => ({
            ...prev,
            orderType: serviceData.service,
            message: serviceData.type === 'Get Quote' 
              ? `Hi! I'm interested in getting a quote for ${serviceData.service}. Please provide me with detailed pricing information and next steps.`
              : `Hello! I'd like to schedule an expert consultation for ${serviceData.service}. Please let me know your availability for a detailed discussion about my project requirements.`
          }))
          // Clear the localStorage after setting
          localStorage.removeItem('selectedService')
        } catch (error) {
          console.error('Error parsing service data:', error)
          localStorage.removeItem('selectedService')
        }
      }
    }

    // Check immediately when contact section comes into view
    if (isInView) {
      checkSelectedPoster()
      checkSelectedService()
      
      // Set up polling to catch localStorage changes
      const interval = setInterval(() => {
        checkSelectedPoster()
        checkSelectedService()
      }, 100)
      
      // Clean up interval after 5 seconds (enough time for user interaction)
      const timeout = setTimeout(() => {
        clearInterval(interval)
      }, 5000)

      return () => {
        clearInterval(interval)
        clearTimeout(timeout)
      }
    }
  }, [isInView])

  const orderTypes = [
    'Custom Poster Design',
    'Recreate Portfolio Poster',
    'Bulk Order',
    'Framed Poster',
    'Unframed Poster',
    'High-Resolution Print',
    'Rush Order',
    'Expert Consultation',
    'Get Quote',
    'Other'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    setFormData(prev => ({
      ...prev,
      file: file
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Thank you for your inquiry! We\'ll get back to you within 24 hours.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        orderType: '',
        portfolioPoster: '',
        message: '',
        file: null
      })
    }, 2000)
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Get Your Custom Poster</h2>
          <p>Ready to transform your space? Let's create something amazing together</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's Talk About Your Vision</h3>
            <p>
              Whether you have a clear idea or need creative guidance, our team 
              is here to help bring your poster vision to life.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <FaEnvelope className="method-icon" />
                <div>
                  <h4>Email Us</h4>
                  <p>digichitraa@gmail.com</p>
                  <span>Response within 24 hours</span>
                </div>
              </div>

              <div className="contact-method">
                <FaPhone className="method-icon" />
                <div>
                  <h4>Call Us</h4>
                  <p>TBD</p>
                  <span>Mon-Fri, 9AM-6PM EST</span>
                </div>
              </div>
            </div>

            <div className="why-choose">
              <h4>Why Choose DigiChitraa?</h4>
              <ul>
                <li>✓ Premium quality materials</li>
                <li>✓ Expert design consultation</li>
                <li>✓ Fast turnaround times</li>
                <li>✓ 100% satisfaction guarantee</li>
                <li>✓ Competitive pricing</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  <FaUser />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    <FaEnvelope />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <FaPhone />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="orderType">Order Type *</label>
                <select
                  id="orderType"
                  name="orderType"
                  value={formData.orderType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select order type</option>
                  {orderTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {formData.orderType === 'Recreate Portfolio Poster' && (
                <div className="form-group">
                  <label htmlFor="portfolioPoster">Which Portfolio Poster? *</label>
                  <input
                    type="text"
                    id="portfolioPoster"
                    name="portfolioPoster"
                    value={formData.portfolioPoster}
                    onChange={handleInputChange}
                    required={formData.orderType === 'Recreate Portfolio Poster'}
                    placeholder="e.g., 'Iron Man poster', 'Shiva meditation design', or describe the poster"
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="file">
                  <FaUpload />
                  Upload Image/Reference (Optional)
                </label>
                <div className="file-upload">
                  <input
                    type="file"
                    id="file"
                    name="file"
                    onChange={handleFileChange}
                    accept="image/*,.pdf"
                  />
                  <label htmlFor="file" className="file-upload-label">
                    {formData.file ? formData.file.name : 'Choose file or drag & drop'}
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder={
                    formData.orderType === 'Recreate Portfolio Poster' 
                      ? `Great choice on "${formData.portfolioPoster}"! Let us know your preferred size, any modifications, framing options, and delivery timeline.`
                      : "Tell us about your project - size, style, colors, deadline, etc."
                  }
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
