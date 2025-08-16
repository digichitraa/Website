import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './About.css'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>About DigiChitraa</h2>
          <p>Transforming spaces with artistic vision and premium quality</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Bring Your Imagination to Life</h3>
            <p>
              DigiChitraa is a creative printing company that specializes in bold, 
              custom-designed posters for every space — homes, offices, cafés, and more. 
              We believe that walls should tell stories, inspire creativity, and reflect 
              personal style.
            </p>
            <p>
              Our mission is to elevate ordinary spaces into extraordinary environments 
              through high-quality, artistic posters. With exceptional attention to detail and vibrant, true-to-life colors, we transform your creative vision into stunning visual experiences.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>1000+</h4>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h4>5000+</h4>
                <p>Posters Printed</p>
              </div>
              <div className="stat">
                <h4>Available</h4>
                <p>Design Support</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="visual-grid">
              <div className="visual-item visual-1">
                <div className="visual-content">
                  <h4>Premium Quality</h4>
                  <p>High-resolution prints on premium paper</p>
                </div>
              </div>
              <div className="visual-item visual-2">
                <div className="visual-content">
                  <h4>Custom Designs</h4>
                  <p>Personalized artwork for every style</p>
                </div>
              </div>
              <div className="visual-item visual-3">
                <div className="visual-content">
                  <h4>Fast Delivery</h4>
                  <p>Quick turnaround with reliable shipping</p>
                </div>
              </div>
              <div className="visual-item visual-4">
                <div className="visual-content">
                  <h4>Expert Team</h4>
                  <p>Professional designers and print specialists</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
