import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="poster-grid">
          <div className="poster poster-1"></div>
          <div className="poster poster-2"></div>
          <div className="poster poster-3"></div>
          <div className="poster poster-4"></div>
          <div className="poster poster-5"></div>
          <div className="poster poster-6"></div>
        </div>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1>Bring Walls to Life with Art</h1>
            <p className="hero-subtitle">
              Print Your Imagination - Custom, high-quality posters made for modern walls
            </p>
            <div className="hero-cta">
              <motion.a 
                href="#contact" 
                className="btn btn-large"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Order Now
              </motion.a>
              <motion.a 
                href="#portfolio" 
                className="btn btn-outline btn-large"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Gallery
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}

export default Hero
