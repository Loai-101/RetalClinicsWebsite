import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const content = {
    en: {
      heroTitle: "Contact Us",
      heroDescription: "Get in touch with us to schedule your appointment or ask any questions about our dental services",
      heroButton1: "Call Now",
      heroButton2: "WhatsApp",
      address: {
        title: "Clinic's Official Address",
        clinic: "Retal clinics",
        details: "Villa 160, Road 66, Block 362",
        location: "New zinj, Bahrain"
      },
      contact: {
        title: "Contact Information",
        phone: "+97317001160",
        whatsapp: "+97338831160",
        email: "Retalclinics@gmail.com"
      },
      hours: {
        title: "Working Hours",
        weekdays: "Saturday to Thursday: 9 AM – 9 PM",
        friday: "Friday: Closed"
      },
      map: {
        title: "Find Us",
        subtitle: "Villa 160, Road 66, Block 362, New zinj, Bahrain",
        linkText: "Open in Google Maps"
      },
      movingBar: [
        "Retal clinics",
        "Villa 160, Road 66, Block 362",
        "New zinj, Bahrain",
        "Phone: +97317001160",
        "WhatsApp: +97338831160",
        "Saturday to Thursday: 9 AM – 9 PM",
        "Friday: Closed"
      ]
    },
    ar: {
      heroTitle: "تواصل معنا",
      heroDescription: "تواصل معنا لحجز موعدك أو طرح أي أسئلة حول خدمات طب الأسنان لدينا",
      heroButton1: "اتصل الآن",
      heroButton2: "واتساب",
      address: {
        title: "العنوان الرسمي للعيادة",
        clinic: "عيادة ريتال لطب الأسنان",
        details: "فيلا 160، شارع 66، مجمع 362",
        location: "الزنج الجديدة، البحرين"
      },
      contact: {
        title: "معلومات التواصل",
        phone: "+97317001160",
        whatsapp: "+97338831160",
        email: "Retalclinics@gmail.com"
      },
      hours: {
        title: "ساعات العمل",
        weekdays: "من السبت إلى الخميس: من الساعة 9 صباحًا حتى 9 مساءً",
        friday: "الجمعة: مغلق"
      },
      map: {
        title: "اعثر علينا",
        subtitle: "فيلا 160، شارع 66، مجمع 362، الزنج الجديدة، البحرين",
        linkText: "فتح في خرائط جوجل"
      },
      movingBar: [
        "عيادة ريتال لطب الأسنان",
        "فيلا 160، شارع 66، مجمع 362",
        "الزنج الجديدة، البحرين",
        "الهاتف: +97317001160",
        "الواتساب: +97338831160",
        "من السبت إلى الخميس: 9 صباحًا – 9 مساءً",
        "الجمعة: مغلق"
      ]
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-video">
          <img
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1762689739/Banner_dxn8j6.png"
            alt="Contact Hero"
            className="hero-video"
          />
        </div>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-container">
          <div className={`contact-hero-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="contact-hero-title">{content[language].heroTitle}</h1>
            <div className="contact-hero-buttons">
              <a href="tel:+97317001160" className="contact-hero-button-primary">
                {content[language].heroButton1}
              </a>
              <a href="https://wa.me/97338831160" className="contact-hero-button-secondary">
                {content[language].heroButton2}
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="contact-social-icons">
              <a 
                href="https://www.instagram.com/retalclinics?utm_source=ig_web_button_share_sheet&igsh=dHl4cjJlZW52OXFk"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.tiktok.com/@retalclinics?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="Follow us on TikTok"
              >
                <FaTiktok />
              </a>
              
              <a 
                href="https://wa.me/97338831160"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              
              <a 
                href="mailto:Retalclinics@gmail.com"
                className="contact-social-icon"
                title="Email us"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Bar */}
      <div className="contact-moving-bar">
        <div className={`contact-moving-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          {content[language].movingBar.map((item, index) => (
            <span key={index} className="contact-moving-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      <section id="contact" className={`contact ${isVisible ? 'contact-visible' : ''}`}>
        <div className="contact-container">
          <div className="contact-content">
                         <div className="contact-info">
               <div className="contact-cards">
                  <div className="contact-card">
                    <div className="contact-card-icon">📍</div>
                    <h4 className="contact-card-title">{content[language].address.title}</h4>
                    <div className="contact-card-value">
                      <strong>{content[language].address.clinic}</strong><br />
                      {content[language].address.details}<br />
                      {content[language].address.location}
                    </div>
                  </div>
                  
                  <div className="contact-card">
                    <div className="contact-card-icon">📞</div>
                    <h4 className="contact-card-title">{content[language].contact.title}</h4>
                    <div className="contact-card-value">
                      <a href={`tel:${content[language].contact.phone}`} className="contact-link">
                        📞 {content[language].contact.phone}
                      </a><br />
                      <a href={`https://wa.me/${content[language].contact.whatsapp.replace('+', '')}`} className="contact-link">
                        💬 {content[language].contact.whatsapp}
                      </a><br />
                      <a href={`mailto:${content[language].contact.email}`} className="contact-link">
                        ✉️ {content[language].contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-card">
                    <div className="contact-card-icon">🕘</div>
                    <h4 className="contact-card-title">{content[language].hours.title}</h4>
                    <div className="contact-card-value">
                      {content[language].hours.weekdays}<br />
                      {content[language].hours.friday}
                    </div>
                  </div>
               </div>
            </div>
            
                         {/* Map Section */}
             <div className="contact-map-section">
               <h3 className="map-title">{content[language].map.title}</h3>
               <p className="map-address">{content[language].map.subtitle}</p>
               <div className="map-container">
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d230120.0!2d50.5853!3d26.0667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbh!4v1234567890123"
                   width="100%"
                   height="400"
                   style={{ border: 0 }}
                   allowFullScreen=""
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Bahrain Map"
                   className="contact-map"
                 ></iframe>
                 <div className="map-overlay">
                  <a 
                    href="https://maps.app.goo.gl/V47og3KDGAdhe3iTA?g_st=ipc" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="map-link"
                  >
                     <div className="map-link-content">
                       <span className="map-link-icon">🗺️</span>
                       <span className="map-link-text">{content[language].map.linkText}</span>
                     </div>
                   </a>
                 </div>
               </div>
             </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
