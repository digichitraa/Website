import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaInstagram, FaHeart, FaComment } from 'react-icons/fa'
import './InstagramFeed.css'

const InstagramFeed = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  // Instagram posts with actual images from assets
  const instagramPosts = [
    {
      id: 1,
      image: 'damru-png',
      caption: `🪘 Feel the Cosmic Rhythm \n
Invoke the energy of Shiva with this beautifully hand-crafted Damru artwork. A symbol of creation, rhythm, and divine vibration – now on your walls. Let your space echo the beats of spirituality. 🎨 Museum-quality poster 🖼️ Perfect for spiritual corners, studios, and gifting.`,
      likes: 234,
      comments: 18
    },
    {
      id: 2,
      image: 'abstract-1-jpeg',
      caption: '✨ Divine Art Meets Modern Elegance ✨ Bring the powerful presence of Lord Shiva into your space with this mesmerizing artwork—crafted with emotion, devotion, and detail.📿 High-quality posters | 🖼️ Perfect for home, office & gifting | 💫 Made with spiritual love.',
      likes: 189,
      comments: 12
    },
    {
      id: 3,
      image: 'quote-1-jpeg',
      caption: `🏔️ Mount Kailash – The Abode of the Divine
Majestic. Mystical. Sacred.
Bring home the divine serenity of Mount Kailash — a symbol of peace, power, and spiritual awakening. This premium poster captures the soul of the Himalayas in every brushstroke.

✨ High-definition art poster.`,
      likes: 156,
      comments: 9
    },
    {
      id: 4,
      image: 'pop-culture-1-jpeg',
      caption: `🧘‍♂️ Peace Begins Within
Transform your space into a sanctuary of stillness with this serene meditation artwork. Designed to soothe the soul and center the mind — perfect for your yoga corner, home, or workspace.

🎨 Elegant spiritual design.`,
      likes: 298,
      comments: 25
    },
    {
      id: 5,
      image: 'family-portrait-jpeg',
      caption: `🎨 Divine in Every Hue
Celebrate the eternal charm of Lord Krishna with this powerful and colorful artwork. A perfect blend of devotion and vibrant energy — this poster brings joy, love, and positivity wherever it's placed.

✨ Premium poster | 💙 Vivid colors | 🕉️ Spiritually enriching.`,
      likes: 312,
      comments: 31
    },
    {
      id: 6,
      image: 'geometric-design-jpeg',
      caption: `🕉️ Om – The Sound of the Universe
Elevate your space with the sacred vibration of Om. This elegant watercolor poster blends art with spirituality, bringing calm, clarity, and cosmic energy to your home or meditation space.

✨ Premium poster quality.`,
      likes: 187,
      comments: 14
    }
  ]

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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="instagram" className="instagram-feed" ref={ref}>
      <div className="container">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>
            <FaInstagram className="instagram-icon" />
            Follow @digichitraa
          </h2>
          <p>See our latest creations and customer transformations</p>
        </motion.div>

        <motion.div
          className="instagram-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              className="instagram-post"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="post-image">
                <div className={`image-placeholder ${post.image}`}></div>
                <div className="post-overlay">
                  <div className="post-stats">
                    <div className="stat">
                      <FaHeart />
                      <span>{post.likes}</span>
                    </div>
                    <div className="stat">
                      <FaComment />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-caption">
                <p>{post.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="instagram-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3>Join our creative community</h3>
          <p>Follow us for design inspiration and behind-the-scenes content</p>
          <div className="social-buttons">
            <a 
              href="https://instagram.com/digichitraa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn instagram-btn"
            >
              <FaInstagram />
              Follow on Instagram
            </a>
            <a href="#contact" className="btn btn-outline">
              Share Your Space
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default InstagramFeed
