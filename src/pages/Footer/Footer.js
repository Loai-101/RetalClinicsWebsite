import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      aboutTitle: "About the Clinic",
      aboutText: "Retal clinics offers high-quality dental care using modern technology and gentle techniques. We specialize in implants, cosmetic dentistry, and smile restoration to give you a healthy, confident smile.",
      quickLinksTitle: "Quick Links",
      quickLinks: [
        { text: "Home Page", to: "/" },
        { text: "About Us", to: "/about" },
        { text: "Our Services", to: "/services" },
        { text: "Book an Appointment", to: "/appointment" },
        { text: "Contact Us", to: "/contact" },
        { text: "Our Medical Team", to: "/team" },
        { text: "FAQs (Frequently Asked Questions)", to: "/faq" }
      ],
      servicesTitle: "Our Services",
      serviceCategories: {
        "Cosmetic Dentistry": [
          "Hollywood Smile",
          "Teeth Whitening",
          "Porcelain Veneers",
          "Smile Makeover"
        ],
        "Restorative Dentistry": [
          "Dental Implants",
          "Zircon Crowns",
          "Dental Bridges",
          "Dentures"
        ],
        "General & Specialized": [
          "Root Canal Treatment",
          "Orthodontics (Braces)",
          "Pediatric Dentistry",
          "Gum Treatment"
        ]
      },
      contactTitle: "Contact Information",
      location: "Villa 160, Road 66, Block 362, New zinj, Bahrain",
      workingHours: "Saturday to Thursday: 9 AM – 9 PM",
      phone: "+97317001160",
      whatsapp: "+97338831160",
      instagram: "retalclinics"
    },
    ar: {
      aboutTitle: "عن العيادة",
      aboutText: "عيادة ريتال لطب الأسنان تقدم رعاية أسنان عالية الجودة باستخدام التكنولوجيا الحديثة والتقنيات اللطيفة. نتخصص في الزراعة وطب الأسنان التجميلي واستعادة الابتسامة لتمنحك ابتسامة صحية وواثقة.",
      quickLinksTitle: "روابط سريعة",
      quickLinks: [
        { text: "الصفحة الرئيسية", to: "/" },
        { text: "من نحن", to: "/about" },
        { text: "خدماتنا", to: "/services" },
        { text: "احجز موعد", to: "/appointment" },
        { text: "تواصل معنا", to: "/contact" },
        { text: "فريقنا الطبي", to: "/team" },
        { text: "الأسئلة الشائعة", to: "/faq" }
      ],
      servicesTitle: "خدماتنا",
      serviceCategories: {
        "طب الأسنان التجميلي": [
          "ابتسامة هوليوود",
          "تبييض الأسنان",
          "قشور خزفية",
          "تجميل الابتسامة"
        ],
        "طب الأسنان التعويضي": [
          "زراعة الأسنان",
          "تيجان زركون",
          "جسور الأسنان",
          "أطقم الأسنان"
        ],
        "الرعاية العامة والمتخصصة": [
          "علاج جذور الأسنان",
          "تقويم الأسنان",
          "طب أسنان الأطفال",
          "علاج اللثة"
        ]
      },
      contactTitle: "معلومات التواصل",
      location: "فيلا 160، شارع 66، مجمع 362، الزنج الجديدة، البحرين",
      workingHours: "السبت إلى الخميس: 9 صباحًا – 9 مساءً",
      phone: "+97317001160",
      whatsapp: "+97338831160",
      instagram: "retalclinics"
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3>{content[language].aboutTitle}</h3>
          <p>{content[language].aboutText}</p>
        </div>

        <div className="footer-section footer-quick-links">
          <h3>{content[language].quickLinksTitle}</h3>
          <ul className="footer-links">
            {content[language].quickLinks.map((link, index) => (
              <li key={index} className="footer-link-item">
                <Link to={link.to} className="footer-link">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section footer-services">
          <h3>{content[language].servicesTitle}</h3>
          <div className="footer-service-categories">
            {Object.entries(content[language].serviceCategories).map(([category, services]) => (
              <div key={category} className="footer-service-category">
                <h4 className="footer-category-title">{category}</h4>
                <ul className="footer-links">
                  {services.map((service, index) => (
                    <li key={index}>
                      <span className="footer-service-item">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-section footer-contact">
          <h3>{content[language].contactTitle}</h3>
          <p><FaMapMarkerAlt /> {content[language].location}</p>
          <p><FaClock /> {content[language].workingHours}</p>
          <div className="footer-contact-icons">
            <a href="tel:+97317001160" className="footer-contact-icon" title="Call Us">
              <FaPhone />
            </a>
            <a href="https://wa.me/97338831160" target="_blank" rel="noopener noreferrer" className="footer-contact-icon" title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a 
              href="https://www.instagram.com/retalclinics?utm_source=ig_web_button_share_sheet&igsh=dHl4cjJlZW52OXFk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-contact-icon"
              title="Follow on Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

             <div className="footer-bottom">
         <div className="footer-bottom-content">
           <span>&copy; 2024 Retal clinics. All rights reserved.</span>
           <span className="footer-separator">|</span>
           <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
           <span className="footer-separator">|</span>
           <a href="/terms-of-service" className="footer-link">Terms of Service</a>
           <span className="footer-separator">|</span>
                                   <a 
              href="https://it-solutions.pmi-me.net/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pmi-developer"
            >
              <span className="developed-by">Developed by PMI</span>
              <img 
                src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_auto,q_auto/v1756121005/PMI_Purple_j8wvsj" 
                alt="PMI Logo" 
                className="pmi-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline';
                }}
              />
              <span className="pmi-logo-text" style={{display: 'none'}}>PMI</span>
            </a>
         </div>
       </div>
    </footer>
  );
};

export default Footer;
