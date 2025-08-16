import { motion } from 'framer-motion'
import { 
  FaInstagram, 
  FaFacebook, 
  FaTwitter, 
  FaLinkedin, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt,
  FaHeart
} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaInstagram />, href: 'https://instagram.com/digichitraa', label: 'Instagram' },
    { icon: <FaFacebook />, href: 'https://facebook.com/digichitraa', label: 'Facebook' },
    { icon: <FaTwitter />, href: 'https://twitter.com/digichitraa', label: 'Twitter' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/company/digichitraa', label: 'LinkedIn' }
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' }
  ]

  const policies = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Shipping & Returns', href: '#' },
    { name: 'Quality Guarantee', href: '#' }
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section brand-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-logo">DigiChitraa</h3>
            <p className="brand-tagline">Print Your Imagination</p>
            <p className="brand-description">
              Transforming spaces with premium quality custom posters. 
              From concept to creation, we bring your artistic vision to life.
            </p>
            
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt />
                <span>Pune,MH,IN</span>
              </div>
              <div className="contact-item">
                <FaPhone />
                <span>TBD</span>
              </div>
              <div className="contact-item">
                <FaEnvelope />
                <span>digichitraa@gmail.com</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Customer Care</h4>
            <ul>
              {policies.map((policy) => (
                <li key={policy.name}>
                  <a href={policy.href}>{policy.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Follow Us</h4>
            <p>Stay connected for design inspiration and updates</p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <div className="newsletter">
              <h5>Newsletter</h5>
              <p>Get design tips and exclusive offers</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p>
              © {currentYear} DigiChitraa. All rights reserved. Made with{' '}
              <FaHeart className="heart-icon" /> for creative souls.
            </p>
            <div className="footer-badges">
              <span className="badge">Premium Quality</span>
              <span className="badge">Fast Shipping</span>
              <span className="badge">100% Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
