import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-sidebar-content">
        <a 
          href="https://www.instagram.com/retalclinics?utm_source=ig_web_button_share_sheet&igsh=dHl4cjJlZW52OXFk"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Follow us on Instagram"
        >
          <FaInstagram />
        </a>
        
        <a 
          href="https://www.tiktok.com/@retalclinics?is_from_webapp=1&sender_device=pc"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Follow us on TikTok"
        >
          <FaTiktok />
        </a>
        
        <a 
          href="https://wa.me/97338831160"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Contact us on WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
