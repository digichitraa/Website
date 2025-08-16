import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import './Testimonials.css'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Interior Designer',
      image: 'customer-1',
      rating: 5,
      text: 'DigiChitraa transformed our office space with stunning custom posters. The quality is exceptional and the design process was seamless. Highly recommended!'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Café Owner',
      image: 'customer-2',
      rating: 5,
      text: 'We ordered a bulk set of motivational posters for our café. The team was professional, delivery was on time, and our customers love the artistic vibe.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Homeowner',
      image: 'customer-3',
      rating: 5,
      text: 'Perfect custom family portrait poster! The colors are vibrant, the quality is premium, and it became the centerpiece of our living room.'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Marketing Manager',
      image: 'customer-4',
      rating: 5,
      text: 'Outstanding service for our corporate event posters. Professional design, quick turnaround, and excellent communication throughout the process.'
    }
  ]

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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ))
  }

  return (
    <section id="testimonials" className="testimonials" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>What Our Customers Say</h2>
          <p>Real stories from satisfied customers who love their new posters</p>
        </motion.div>

        <motion.div
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="quote-icon">
                <FaQuoteLeft />
              </div>
              
              <div className="testimonial-content">
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="testimonial-text">
                  "{testimonial.text}"
                </p>
                
                <div className="customer-info">
                  <div className="customer-avatar">
                    <div className={`avatar-placeholder ${testimonial.image}`}></div>
                  </div>
                  <div className="customer-details">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="testimonials-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="stat-item">
            <h3>4.9/5</h3>
            <p>Average Rating</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat-item">
            <h3>99%</h3>
            <p>Satisfaction Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
