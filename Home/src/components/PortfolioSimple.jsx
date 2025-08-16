import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Portfolio.css'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const filters = [
    { key: 'all', label: 'All Posters' },
    { key: 'quotes', label: 'Quotes' },
    { key: 'Devotional', label: 'Devotional' },
    { key: 'Cars', label: 'Cars' },
    { key: 'Super-Heroes', label: 'Super-Heroes' }
  ]

  const portfolioItems = [
    {
      id: 1,
      category: 'quotes',
      title: 'Motivational Quote',
      description: 'Inspirational wall art',
      image: 'motivation.jpeg'
    },
    {
      id: 2,
      category: 'Devotional',
      title: 'Ganpati Bappa',
      description: 'Divine poster art',
      image: 'bappa.jpeg'
    },
    {
      id: 3,
      category: 'Cars',
      title: 'Porsche 911',
      description: 'Classic sports car',
      image: 'porsche.jpeg'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  const handleOrderDesign = (posterTitle) => {
    localStorage.setItem('selectedPoster', posterTitle)
    
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
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Portfolio</h2>
          <p>Explore our collection of stunning poster designs</p>
        </motion.div>

        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="portfolio-item"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="portfolio-image">
                <div className={`poster-placeholder ${item.image}`}></div>
                <div className="portfolio-overlay">
                  <div className="portfolio-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <button 
                      className="btn btn-outline"
                      onClick={() => handleOrderDesign(item.title)}
                    >
                      Order This Design
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Want to see more designs?</h3>
          <p>Browse our complete collection of 100+ poster designs or request a custom creation</p>
          <div className="cta-buttons">
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Portfolio.css'

// Import actual images
import motivationalImg from '../assets/motivational.jpeg'
import bappaImg from '../assets/bappa.jpeg'
import deadpoolImg from '../assets/Deadpool.jpeg'
import ironmanImg from '../assets/IronMan.jpeg'
import muscleCarImg from '../assets/Muscle car.webp'
import porscheImg from '../assets/Porsche 911.jpeg'
import shivaLingaImg from '../assets/ShivaLinga.jpeg'
import trustProcessImg from '../assets/Trustheprocess.jpeg'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [showCollectionModal, setShowCollectionModal] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Sample collection with real images
  const collectionItems = [
    { id: 1, title: 'Success Mindset', category: 'quotes', image: motivationalImg },
    { id: 2, title: 'Trust Process', category: 'quotes', image: trustProcessImg },
    { id: 3, title: 'Ganpati Bappa', category: 'devotional', image: bappaImg },
    { id: 4, title: 'Shiva Linga', category: 'devotional', image: shivaLingaImg },
    { id: 5, title: 'Porsche 911', category: 'cars', image: porscheImg },
    { id: 6, title: 'Muscle Car', category: 'cars', image: muscleCarImg },
    { id: 7, title: 'Deadpool', category: 'movies', image: deadpoolImg },
    { id: 8, title: 'Iron Man', category: 'movies', image: ironmanImg }
  ]

  const filters = [
    { key: 'all', label: 'All Posters' },
    { key: 'quotes', label: 'Quotes' },
    { key: 'Devotional', label: 'Devotional' },
    { key: 'Cars', label: 'Cars' },
    { key: 'Super-Heroes', label: 'Super-Heroes' }
  ]

  const portfolioItems = [
    {
      id: 1,
      category: 'quotes',
      title: 'Motivational Quote',
      description: 'Inspirational wall art',
      image: 'motivation.jpeg'
    },
    {
      id: 2,
      category: 'Devotional',
      title: 'Ganpati Bappa',
      description: 'Divine poster art',
      image: 'bappa.jpeg'
    },
    {
      id: 3,
      category: 'Cars',
      title: 'Porsche 911',
      description: 'Classic sports car',
      image: 'porsche.jpeg'
    }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  const handleOrderDesign = (posterTitle) => {
    localStorage.setItem('selectedPoster', posterTitle)
    
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
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <motion.div
          ref={ref}
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Portfolio</h2>
          <p>Explore our collection of stunning poster designs</p>
        </motion.div>

        <motion.div
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="portfolio-item"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="portfolio-image">
                <div className={`poster-placeholder ${item.image}`}></div>
                <div className="portfolio-overlay">
                  <div className="portfolio-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <button 
                      className="btn btn-outline"
                      onClick={() => handleOrderDesign(item.title)}
                    >
                      Order This Design
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="portfolio-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>Want to see more designs?</h3>
          <p>Browse our complete collection of 100+ poster designs or request a custom creation</p>
          <div className="cta-buttons">
            <button 
              className="btn"
              onClick={() => setShowCollectionModal(true)}
            >
              View Full Collection (100+)
            </button>
            <a href="#contact" className="btn btn-outline">Request Custom Design</a>
          </div>
        </motion.div>

        {/* Simple Collection Modal */}
        {showCollectionModal && (
          <div 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.9)',
              zIndex: 10000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={() => setShowCollectionModal(false)}
          >
            <div 
              style={{
                background: '#161616',
                borderRadius: '20px',
                padding: '30px',
                maxWidth: '1200px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
                border: '2px solid #eec667'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h2 style={{ color: '#eec667', margin: 0 }}>Complete Collection</h2>
                <button 
                  onClick={() => setShowCollectionModal(false)}
                  style={{
                    background: 'none',
                    border: '1px solid #eec667',
                    color: '#eec667',
                    padding: '10px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  ✕ Close
                </button>
              </div>
              
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px'
                }}
              >
                {collectionItems.map(item => (
                  <div 
                    key={item.id}
                    style={{
                      border: '1px solid #333',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      background: '#222'
                    }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover'
                      }}
                    />
                    <div style={{ padding: '15px' }}>
                      <h4 style={{ color: '#fff', margin: '0 0 5px 0', fontSize: '14px' }}>{item.title}</h4>
                      <p style={{ color: '#888', margin: '0 0 10px 0', fontSize: '12px' }}>#{item.category}</p>
                      <button 
                        style={{
                          background: '#eec667',
                          color: '#161616',
                          border: 'none',
                          padding: '8px 12px',
                          borderRadius: '5px',
                          cursor: 'pointer',
                          fontSize: '12px',
                          width: '100%'
                        }}
                        onClick={() => {
                          handleOrderDesign(item.title)
                          setShowCollectionModal(false)
                        }}
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Portfolio
            <a href="#contact" className="btn btn-outline">Request Custom Design</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
