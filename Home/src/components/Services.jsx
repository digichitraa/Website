import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPalette, FaLayerGroup, FaShippingFast, FaPrint } from 'react-icons/fa'
import Modal from './Modal'
import ServiceDetail from './ServiceDetail'
import './Services.css'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const services = [
    {
      icon: <FaPalette />,
      title: 'Custom Poster Design',
      description: 'Professional designers create unique artwork tailored to your vision and space requirements.',
      features: ['Personal consultation', 'Multiple design concepts', 'Unlimited revisions', 'High-resolution files']
    },
    {
      icon: <FaLayerGroup />,
      title: 'Bulk Orders',
      description: 'Special pricing and dedicated support for businesses, events, and large-scale projects.',
      features: ['Volume discounts', 'Faster turnaround', 'Dedicated account manager', 'Consistent quality']
    },
    {
      icon: <FaPrint />,
      title: 'Framed & Unframed',
      description: 'Choose from premium framing options or receive prints ready for your own display solution.',
      features: ['Professional framing', 'Various frame styles', 'Museum-quality materials', 'Easy hanging system']
    },
    {
      icon: <FaShippingFast />,
      title: 'High-Resolution Print',
      description: 'State-of-the-art printing technology ensures vibrant colors and sharp details on premium paper.',
      features: ['4K+ resolution', 'Color-accurate printing', 'Fade-resistant inks', 'Premium paper options']
    }
  ]

  const handleLearnMore = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedService(null)
  }

  const handleGetQuote = (serviceTitle) => {
    // Close modal and scroll to contact with pre-filled service info
    handleCloseModal()
    
    // Store service info for contact form
    localStorage.setItem('selectedService', JSON.stringify({
      type: 'Get Quote',
      service: serviceTitle,
      timestamp: Date.now()
    }))
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleContactUs = (serviceTitle) => {
    // Close modal and scroll to contact with expert consultation request
    handleCloseModal()
    
    // Store service info for contact form
    localStorage.setItem('selectedService', JSON.stringify({
      type: 'Expert Consultation',
      service: serviceTitle,
      timestamp: Date.now()
    }))
    
    // Scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Services</h2>
          <p>Comprehensive poster printing solutions for every need</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <button 
                  className="btn btn-outline"
                  onClick={() => handleLearnMore(service)}
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Ready to get started?</h3>
          <p>Contact us today to discuss your poster printing needs</p>
          <div className="cta-buttons">
            <a href="#contact" className="btn">Get Quote</a>
            <a href="#portfolio" className="btn btn-outline">View Samples</a>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <Modal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedService?.title || 'Service Details'}
      >
        {selectedService && (
          <ServiceDetail 
            service={selectedService}
            onGetQuote={handleGetQuote}
            onContactUs={handleContactUs}
          />
        )}
      </Modal>
    </section>
  )
}

export default Services
