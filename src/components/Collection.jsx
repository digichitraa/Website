import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import './Collection.css'
import { 
  FaSearch, 
  FaFilter, 
  FaHeart, 
  FaRegHeart, 
  FaShoppingCart, 
  FaEye, 
  FaDownload,
  FaTh,
  FaThList,
  FaSortAmountDown,
  FaTag,
  FaExpand,
  FaTimes
} from 'react-icons/fa'
import './Collection.css'

const Collection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeFilter, setActiveFilter] = useState('all')
  const [sortBy, setSortBy] = useState('newest')
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [favorites, setFavorites] = useState([])
  const [selectedPoster, setSelectedPoster] = useState(null)
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(12)
  
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Enhanced collection data with more details
  const collectionItems = [
    {
      id: 1,
      title: 'Motivational Quote',
      description: 'Inspirational wall art with powerful messaging',
      category: 'quotes',
      tags: ['motivation', 'inspiration', 'typography', 'modern'],
      image: 'motivation.jpeg',
      price: '$49',
      originalPrice: '$69',
      discount: '29%',
      rating: 4.8,
      reviews: 156,
      sizes: ['12x16', '16x20', '18x24', '24x36'],
      colors: ['original', 'sepia', 'monochrome'],
      dateAdded: '2024-01-15',
      popularity: 95,
      featured: true
    },
    {
      id: 2,
      title: 'Ganpati Bappa',
      description: 'Sacred Ganesh artwork for spiritual spaces',
      category: 'devotional',
      tags: ['ganesh', 'hindu', 'spiritual', 'traditional', 'colorful'],
      image: 'abstract-poster-1',
      price: '$59',
      originalPrice: '$79',
      discount: '25%',
      rating: 4.9,
      reviews: 203,
      sizes: ['16x20', '18x24', '24x36', '30x40'],
      colors: ['original', 'vibrant', 'gold-accent'],
      dateAdded: '2024-01-10',
      popularity: 88,
      featured: true
    },
    {
      id: 3,
      title: 'Shiva Linga',
      description: 'Powerful Shiva meditation artwork',
      category: 'devotional',
      tags: ['shiva', 'meditation', 'spiritual', 'peace', 'sacred'],
      image: 'movie-poster-1',
      price: '$55',
      originalPrice: '$75',
      discount: '27%',
      rating: 4.7,
      reviews: 142,
      sizes: ['12x16', '16x20', '24x36'],
      colors: ['original', 'blue-tone', 'earth-tone'],
      dateAdded: '2024-01-08',
      popularity: 92,
      featured: false
    },
    {
      id: 4,
      title: 'Porsche 911',
      description: 'Classic sports car vintage poster',
      category: 'cars',
      tags: ['porsche', 'vintage', 'automotive', 'classic', 'garage'],
      image: 'custom-poster-1',
      price: '$65',
      originalPrice: '$85',
      discount: '24%',
      rating: 4.6,
      reviews: 89,
      sizes: ['16x20', '18x24', '24x36', '36x48'],
      colors: ['original', 'vintage', 'black-white'],
      dateAdded: '2024-01-05',
      popularity: 78,
      featured: false
    },
    {
      id: 5,
      title: 'Trust The Process',
      description: 'Motivational mindset poster',
      category: 'quotes',
      tags: ['process', 'motivation', 'mindset', 'success', 'journey'],
      image: 'quote-poster-2',
      price: '$45',
      originalPrice: '$65',
      discount: '31%',
      rating: 4.8,
      reviews: 178,
      sizes: ['12x16', '16x20', '18x24'],
      colors: ['original', 'minimalist', 'bold'],
      dateAdded: '2024-01-12',
      popularity: 85,
      featured: true
    },
    {
      id: 6,
      title: 'Muscle Car Power',
      description: 'High-octane muscle car artwork',
      category: 'cars',
      tags: ['muscle-car', 'power', 'automotive', 'american', 'speed'],
      image: 'abstract-poster-2',
      price: '$58',
      originalPrice: '$78',
      discount: '26%',
      rating: 4.5,
      reviews: 67,
      sizes: ['16x20', '24x36', '30x40'],
      colors: ['original', 'chrome', 'fire-red'],
      dateAdded: '2024-01-03',
      popularity: 73,
      featured: false
    },
    {
      id: 7,
      title: 'Iron Man',
      description: 'Iconic Marvel superhero poster',
      category: 'super-heroes',
      tags: ['ironman', 'marvel', 'superhero', 'tech', 'action'],
      image: 'music-poster-1',
      price: '$52',
      originalPrice: '$72',
      discount: '28%',
      rating: 4.9,
      reviews: 245,
      sizes: ['12x16', '16x20', '18x24', '24x36'],
      colors: ['original', 'dark-mode', 'neon'],
      dateAdded: '2024-01-18',
      popularity: 98,
      featured: true
    },
    {
      id: 8,
      title: 'Deadpool',
      description: 'Anti-hero comedy superhero art',
      category: 'super-heroes',
      tags: ['deadpool', 'marvel', 'comedy', 'anti-hero', 'red'],
      image: 'custom-poster-2',
      price: '$48',
      originalPrice: '$68',
      discount: '29%',
      rating: 4.7,
      reviews: 189,
      sizes: ['16x20', '18x24', '24x36'],
      colors: ['original', 'comic-style', 'retro'],
      dateAdded: '2024-01-20',
      popularity: 91,
      featured: false
    },
    // Additional items for better pagination demo
    {
      id: 9,
      title: 'Om Sacred Symbol',
      description: 'Divine Om symbol spiritual art',
      category: 'devotional',
      tags: ['om', 'spiritual', 'yoga', 'meditation', 'sacred'],
      image: 'geometric-design-jpeg',
      price: '$42',
      originalPrice: '$62',
      discount: '32%',
      rating: 4.8,
      reviews: 167,
      sizes: ['12x16', '16x20', '24x36'],
      colors: ['original', 'gold', 'silver'],
      dateAdded: '2024-01-25',
      popularity: 89,
      featured: true
    },
    {
      id: 10,
      title: 'Meditation Peace',
      description: 'Serene meditation artwork',
      category: 'devotional',
      tags: ['meditation', 'peace', 'zen', 'mindfulness', 'calm'],
      image: 'pop-culture-1-jpeg',
      price: '$46',
      originalPrice: '$66',
      discount: '30%',
      rating: 4.6,
      reviews: 134,
      sizes: ['16x20', '18x24', '24x36'],
      colors: ['original', 'soft-blue', 'earth-tone'],
      dateAdded: '2024-01-22',
      popularity: 76,
      featured: false
    }
  ]

  const categories = [
    { key: 'all', label: 'All Categories', count: collectionItems.length },
    { key: 'quotes', label: 'Motivational Quotes', count: collectionItems.filter(item => item.category === 'quotes').length },
    { key: 'devotional', label: 'Devotional Art', count: collectionItems.filter(item => item.category === 'devotional').length },
    { key: 'cars', label: 'Automotive', count: collectionItems.filter(item => item.category === 'cars').length },
    { key: 'super-heroes', label: 'Superheroes', count: collectionItems.filter(item => item.category === 'super-heroes').length }
  ]

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('posterFavorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('posterFavorites', JSON.stringify(favorites))
  }, [favorites])

  // Filter and sort logic
  const filteredAndSortedItems = () => {
    let filtered = collectionItems

    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(item => item.category === activeFilter)
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
        break
      case 'oldest':
        filtered.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded))
        break
      case 'price-low':
        filtered.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')))
        break
      case 'price-high':
        filtered.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')))
        break
      case 'popular':
        filtered.sort((a, b) => b.popularity - a.popularity)
        break
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return filtered
  }

  // Pagination logic
  const filteredItems = filteredAndSortedItems()
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentItems = filteredItems.slice(startIndex, startIndex + itemsPerPage)

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [activeFilter, searchTerm, sortBy])

  const toggleFavorite = (posterId) => {
    setFavorites(prev => 
      prev.includes(posterId) 
        ? prev.filter(id => id !== posterId)
        : [...prev, posterId]
    )
  }

  const handleQuickView = (poster) => {
    setSelectedPoster(poster)
    setIsQuickViewOpen(true)
  }

  const handleOrderPoster = (poster) => {
    // Store selected poster in localStorage for the contact form
    localStorage.setItem('selectedPoster', poster.title)
    
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
    <section id="collection" className="collection" ref={ref}>
      <div className="container">
        {/* Page Header */}
        <motion.div
          className="collection-header"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1>Explore Our Collection</h1>
          <p>Discover premium poster designs crafted for modern spaces. From motivational quotes to spiritual art, find the perfect piece for your wall.</p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="collection-controls"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Search Bar */}
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search posters, themes, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* View Mode Toggle */}
          <div className="view-controls">
            <div className="view-mode">
              <button
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <FaTh />
              </button>
              <button
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <FaThList />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="sort-dropdown">
              <FaSortAmountDown className="sort-icon" />
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="category-filters"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              className={`category-btn ${activeFilter === category.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.key)}
            >
              <span>{category.label}</span>
              <span className="count">({category.count})</span>
            </button>
          ))}
        </motion.div>

        {/* Results Info */}
        <motion.div
          className="results-info"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>
            Showing {startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredItems.length)} of {filteredItems.length} posters
          </p>
        </motion.div>

        {/* Collection Grid/List */}
        <motion.div
          className={`collection-grid ${viewMode}`}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                className="collection-item"
                variants={itemVariants}
                layout
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {item.featured && <div className="featured-badge">Featured</div>}
                {item.discount && <div className="discount-badge">{item.discount} OFF</div>}
                
                <div className="item-image">
                  <div className={`poster-placeholder ${item.image}`}></div>
                  
                  <div className="item-overlay">
                    <div className="overlay-actions">
                      <button
                        className="action-btn"
                        onClick={() => handleQuickView(item)}
                        title="Quick View"
                      >
                        <FaEye />
                      </button>
                      <button
                        className={`action-btn favorite-btn ${favorites.includes(item.id) ? 'active' : ''}`}
                        onClick={() => toggleFavorite(item.id)}
                        title={favorites.includes(item.id) ? 'Remove from favorites' : 'Add to favorites'}
                      >
                        {favorites.includes(item.id) ? <FaHeart /> : <FaRegHeart />}
                      </button>
                      <button
                        className="action-btn"
                        onClick={() => handleOrderPoster(item)}
                        title="Order Now"
                      >
                        <FaShoppingCart />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="item-content">
                  <div className="item-header">
                    <h3>{item.title}</h3>
                    <div className="item-rating">
                      <span className="rating-stars">★★★★★</span>
                      <span className="rating-value">({item.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="item-description">{item.description}</p>
                  
                  <div className="item-tags">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="tag">
                        <FaTag />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="item-footer">
                    <div className="price-section">
                      <span className="current-price">{item.price}</span>
                      {item.originalPrice && (
                        <span className="original-price">{item.originalPrice}</span>
                      )}
                    </div>
                    
                    <button
                      className="btn order-btn"
                      onClick={() => handleOrderPoster(item)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="pagination"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button
              className="page-btn"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </button>
            ))}
            
            <button
              className="page-btn"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="collection-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3>Don't see what you're looking for?</h3>
          <p>We create custom designs tailored to your vision and space requirements</p>
          <a href="#contact" className="btn btn-large">Request Custom Design</a>
        </motion.div>
      </div>

      {/* Quick View Modal */}
      <AnimatePresence>
        {isQuickViewOpen && selectedPoster && (
          <motion.div
            className="quick-view-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsQuickViewOpen(false)}
          >
            <motion.div
              className="quick-view-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setIsQuickViewOpen(false)}
              >
                <FaTimes />
              </button>

              <div className="modal-content">
                <div className="modal-image">
                  <div className={`poster-placeholder ${selectedPoster.image}`}></div>
                </div>
                
                <div className="modal-details">
                  <h2>{selectedPoster.title}</h2>
                  <div className="modal-rating">
                    <span className="rating-stars">★★★★★</span>
                    <span className="rating-value">{selectedPoster.rating} ({selectedPoster.reviews} reviews)</span>
                  </div>
                  
                  <p className="modal-description">{selectedPoster.description}</p>
                  
                  <div className="modal-tags">
                    {selectedPoster.tags.map((tag, index) => (
                      <span key={index} className="tag">#{tag}</span>
                    ))}
                  </div>

                  <div className="modal-options">
                    <div className="size-options">
                      <h4>Available Sizes:</h4>
                      <div className="options-grid">
                        {selectedPoster.sizes.map((size, index) => (
                          <span key={index} className="option">{size}"</span>
                        ))}
                      </div>
                    </div>

                    <div className="color-options">
                      <h4>Color Variations:</h4>
                      <div className="options-grid">
                        {selectedPoster.colors.map((color, index) => (
                          <span key={index} className="option">{color}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="modal-price">
                    <span className="current-price">{selectedPoster.price}</span>
                    {selectedPoster.originalPrice && (
                      <span className="original-price">{selectedPoster.originalPrice}</span>
                    )}
                    {selectedPoster.discount && (
                      <span className="discount">Save {selectedPoster.discount}</span>
                    )}
                  </div>

                  <div className="modal-actions">
                    <button
                      className={`btn-favorite ${favorites.includes(selectedPoster.id) ? 'active' : ''}`}
                      onClick={() => toggleFavorite(selectedPoster.id)}
                    >
                      {favorites.includes(selectedPoster.id) ? <FaHeart /> : <FaRegHeart />}
                      {favorites.includes(selectedPoster.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                    </button>
                    <button
                      className="btn btn-large"
                      onClick={() => {
                        handleOrderPoster(selectedPoster)
                        setIsQuickViewOpen(false)
                      }}
                    >
                      <FaShoppingCart />
                      Order This Poster
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Collection
