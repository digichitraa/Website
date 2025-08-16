import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaSearch, FaPaintBrush, FaShippingFast } from 'react-icons/fa'
import './HowItWorks.css'

const HowItWorks = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const steps = [
    {
      number: '01',
      icon: <FaSearch />,
      title: 'Choose',
      description: 'Browse our collection or describe your vision. Select size, style, and materials that match your space.',
      details: ['Explore gallery categories', 'Select poster dimensions', 'Choose paper quality', 'Pick framing options']
    },
    {
      number: '02',
      icon: <FaPaintBrush />,
      title: 'Customize',
      description: 'Work with our designers to perfect your poster. Upload images, adjust colors, and review proofs.',
      details: ['Upload your images', 'Collaborate with designers', 'Review digital proofs', 'Approve final design']
    },
    {
      number: '03',
      icon: <FaShippingFast />,
      title: 'Print & Deliver',
      description: 'We print your poster with premium quality and ship it securely to your doorstep.',
      details: ['High-resolution printing', 'Quality control check', 'Secure packaging', 'Fast delivery']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="how-it-works" className="how-it-works" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>How It Works</h2>
          <p>Simple 3-step process to get your perfect poster</p>
        </motion.div>

        <motion.div
          className="steps-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-item"
              variants={itemVariants}
            >
              <div className="step-number">
                {step.number}
              </div>
              
              <div className="step-content">
                <div className="step-icon">
                  {step.icon}
                </div>
                
                <h3>{step.title}</h3>
                <p className="step-description">{step.description}</p>
                
                <ul className="step-details">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>

              {index < steps.length - 1 && (
                <div className="step-connector">
                  <div className="connector-line"></div>
                  <div className="connector-arrow">→</div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="process-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3>Ready to start your poster journey?</h3>
          <p>Join thousands of satisfied customers who transformed their spaces</p>
          <a href="#contact" className="btn">Start Your Order</a>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
