import { 
  FaPalette, 
  FaLayerGroup, 
  FaPrint, 
  FaShippingFast,
  FaClock,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaTools,
  FaAward,
  FaRocket,
  FaShieldAlt
} from 'react-icons/fa'

const ServiceDetail = ({ service, onGetQuote, onContactUs }) => {
  const serviceDetails = {
    'Custom Poster Design': {
      intro: "Transform your ideas into stunning visual masterpieces with our custom poster design service. Our talented design team works closely with you to create unique, personalized artwork that perfectly captures your vision and enhances your space.",
      features: [
        {
          title: "Personal Design Consultation",
          description: "One-on-one session with our design experts to understand your vision, style preferences, and space requirements."
        },
        {
          title: "Multiple Design Concepts",
          description: "Receive 3-5 initial design concepts to choose from, each tailored to your specific needs and aesthetic."
        },
        {
          title: "Unlimited Revisions",
          description: "Refine your chosen design until it's perfect. We'll make adjustments until you're 100% satisfied."
        },
        {
          title: "High-Resolution Files",
          description: "Receive both print-ready and digital versions of your final design in multiple formats (PNG, JPG, PDF)."
        },
        {
          title: "Color Psychology Guidance",
          description: "Expert advice on color choices that complement your space and evoke the desired emotional response."
        },
        {
          title: "Typography Excellence",
          description: "Professional font selection and text layout that enhances readability and visual impact."
        }
      ],
      pricing: [
        { name: "Basic Design", price: "$149", note: "Single poster, 2 revisions" },
        { name: "Premium Design", price: "$249", note: "Complex artwork, unlimited revisions" },
        { name: "Deluxe Package", price: "$399", note: "Multiple sizes + digital assets" }
      ],
      process: [
        { step: 1, title: "Discovery Call", description: "We discuss your vision, requirements, and timeline in detail." },
        { step: 2, title: "Concept Creation", description: "Our designers create initial concepts based on your brief." },
        { step: 3, title: "Design Refinement", description: "We refine your chosen concept with your feedback and preferences." },
        { step: 4, title: "Final Approval", description: "You approve the final design and receive all files." },
        { step: 5, title: "Print & Delivery", description: "We print your poster and deliver it to your doorstep." }
      ]
    },
    'Bulk Orders': {
      intro: "Perfect for businesses, events, schools, and organizations needing multiple posters. Our bulk order service offers significant cost savings, dedicated project management, and consistent quality across all prints.",
      features: [
        {
          title: "Volume Discounts",
          description: "Substantial savings starting from 10+ posters. The more you order, the more you save."
        },
        {
          title: "Dedicated Account Manager",
          description: "A single point of contact who manages your entire project from start to finish."
        },
        {
          title: "Faster Turnaround",
          description: "Priority processing for bulk orders with expedited production timelines."
        },
        {
          title: "Consistent Quality Control",
          description: "Every poster undergoes rigorous quality checks to ensure uniformity across your order."
        },
        {
          title: "Flexible Sizing Options",
          description: "Mix and match different sizes within your order at no additional setup cost."
        },
        {
          title: "Corporate Invoicing",
          description: "Professional invoicing with payment terms suitable for business procurement processes."
        }
      ],
      pricing: [
        { name: "10-25 Posters", price: "15% off", note: "Standard processing" },
        { name: "26-50 Posters", price: "25% off", note: "Priority processing" },
        { name: "51+ Posters", price: "35% off", note: "Dedicated manager" }
      ],
      process: [
        { step: 1, title: "Bulk Quote Request", description: "Submit your requirements for a detailed quote and timeline." },
        { step: 2, title: "Project Planning", description: "Your account manager creates a detailed project plan and timeline." },
        { step: 3, title: "Design Approval", description: "Approve designs and specifications for your entire order." },
        { step: 4, title: "Production", description: "Your order enters our priority production queue." },
        { step: 5, title: "Quality Check & Delivery", description: "Final inspection and coordinated delivery to your location." }
      ]
    },
    'Framed & Unframed': {
      intro: "Choose the perfect presentation for your poster with our comprehensive framing options. From museum-quality frames to budget-friendly options, we have everything you need to display your artwork beautifully.",
      features: [
        {
          title: "Professional Framing",
          description: "Museum-quality frames crafted by experienced framers using archival materials."
        },
        {
          title: "Various Frame Styles",
          description: "Choose from modern, classic, rustic, and contemporary frame styles in multiple colors."
        },
        {
          title: "Museum-Quality Materials",
          description: "Acid-free matting, UV-protective glass, and archival mounting for longevity."
        },
        {
          title: "Custom Matting",
          description: "Professional matting in various colors and sizes to complement your poster."
        },
        {
          title: "Easy Hanging System",
          description: "All framed pieces come with professional hanging hardware and instructions."
        },
        {
          title: "Protective Packaging",
          description: "Secure packaging ensures your framed poster arrives in perfect condition."
        }
      ],
      pricing: [
        { name: "Basic Frame", price: "+$79", note: "Simple black/white frames" },
        { name: "Premium Frame", price: "+$149", note: "Designer frames + matting" },
        { name: "Museum Frame", price: "+$249", note: "Conservation framing" }
      ],
      process: [
        { step: 1, title: "Frame Selection", description: "Choose your frame style, color, and matting options." },
        { step: 2, title: "Professional Mounting", description: "Your poster is mounted using archival materials." },
        { step: 3, title: "Quality Framing", description: "Expert framers assemble your piece with precision." },
        { step: 4, title: "Final Inspection", description: "Each framed piece undergoes thorough quality inspection." },
        { step: 5, title: "Secure Shipping", description: "Careful packaging and shipping to ensure safe arrival." }
      ]
    },
    'High-Resolution Print': {
      intro: "Experience the ultimate in print quality with our state-of-the-art printing technology. Every poster is printed using professional-grade equipment and premium materials for exceptional color accuracy and longevity.",
      features: [
        {
          title: "4K+ Resolution Printing",
          description: "Ultra-high resolution printing at 300+ DPI for incredibly sharp and detailed images."
        },
        {
          title: "Color-Accurate Printing",
          description: "Calibrated printers and color management ensure your prints match your expectations."
        },
        {
          title: "Fade-Resistant Inks",
          description: "Archival-quality inks that resist fading for decades with proper care."
        },
        {
          title: "Premium Paper Options",
          description: "Choose from matte, glossy, canvas, and specialty papers for the perfect finish."
        },
        {
          title: "Large Format Capability",
          description: "Print sizes up to 60 inches wide for stunning large-scale artwork."
        },
        {
          title: "Color Proofing Available",
          description: "Optional color proof printing to preview your poster before final production."
        }
      ],
      pricing: [
        { name: "Standard Print", price: "$49", note: "Up to 24x36 inches" },
        { name: "Large Format", price: "$99", note: "Up to 40x60 inches" },
        { name: "Premium Paper", price: "+$25", note: "Canvas or specialty papers" }
      ],
      process: [
        { step: 1, title: "File Preparation", description: "We optimize your design files for the highest print quality." },
        { step: 2, title: "Color Calibration", description: "Colors are calibrated to ensure accuracy and vibrancy." },
        { step: 3, title: "Test Print (Optional)", description: "Request a color proof to preview the final result." },
        { step: 4, title: "Production Printing", description: "Your poster is printed using our premium equipment." },
        { step: 5, title: "Quality Control", description: "Final inspection and careful packaging for shipment." }
      ]
    }
  }

  const details = serviceDetails[service.title] || serviceDetails['Custom Poster Design']

  return (
    <div className="service-detail">
      <p className="service-detail-intro">{details.intro}</p>

      <div className="service-sections">
        {/* Features Section */}
        <div className="service-section">
          <h3>
            <FaCheckCircle className="service-section-icon" />
            What's Included
          </h3>
          <div className="service-features-grid">
            {details.features.map((feature, index) => (
              <div key={index} className="feature-item">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="service-section">
          <h3>
            <FaStar className="service-section-icon" />
            Pricing Options
          </h3>
          <div className="pricing-table">
            <div className="pricing-options">
              {details.pricing.map((option, index) => (
                <div key={index} className="pricing-option">
                  <h4>{option.name}</h4>
                  <div className="price">{option.price}</div>
                  <div className="price-note">{option.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="service-section">
          <h3>
            <FaRocket className="service-section-icon" />
            Our Process
          </h3>
          <div className="process-timeline">
            <div className="timeline-steps">
              {details.process.map((step, index) => (
                <div key={index} className="timeline-step">
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Guarantees */}
        <div className="service-section">
          <h3>
            <FaShieldAlt className="service-section-icon" />
            Our Guarantees
          </h3>
          <div className="service-features-grid">
            <div className="feature-item">
              <h4>100% Satisfaction Guarantee</h4>
              <p>If you're not completely happy with your poster, we'll make it right or provide a full refund.</p>
            </div>
            <div className="feature-item">
              <h4>Premium Quality Materials</h4>
              <p>We use only the finest papers, inks, and framing materials for lasting beauty and durability.</p>
            </div>
            <div className="feature-item">
              <h4>Fast Turnaround</h4>
              <p>Most orders completed within 5-7 business days, with rush options available.</p>
            </div>
            <div className="feature-item">
              <h4>Secure Shipping</h4>
              <p>Every poster is carefully packaged and shipped with tracking and insurance.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="modal-actions">
        <button 
          className="btn btn-primary"
          onClick={() => onGetQuote(service.title)}
        >
          <FaRocket />
          Get Free Quote
        </button>
        <button 
          className="btn btn-secondary"
          onClick={() => onContactUs(service.title)}
        >
          <FaUsers />
          Contact Expert
        </button>
      </div>
    </div>
  )
}

export default ServiceDetail
