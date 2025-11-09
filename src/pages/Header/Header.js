import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageDropdownOpen && !event.target.closest('.language-switcher') && !event.target.closest('.mobile-language-switcher')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isLanguageDropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const selectLanguage = (lang) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };


  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/" className="header-logo-link">
            <img 
              src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1762684308/Screenshot_2025-11-09_133136_zgpuja.png" 
              alt="Retal clinics Logo" 
              className="header-logo-image"
            />
            <h1 className="header-title">Retal clinics</h1>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Desktop Navigation */}
        <nav className="header-navigation desktop-nav">
          <ul className="header-nav-list">
            <li className="header-nav-item">
              <Link
                to="/"
                className={`header-nav-link ${location.pathname === '/' ? 'header-nav-link-active' : ''}`}
              >
                {language === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/services"
                className={`header-nav-link ${location.pathname === '/services' ? 'header-nav-link-active' : ''}`}
              >
                {language === 'ar' ? 'الخدمات' : 'Services'}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/team"
                className={`header-nav-link ${location.pathname === '/team' ? 'header-nav-link-active' : ''}`}
              >
                {language === 'ar' ? 'الفريق' : 'Team'}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/appointment"
                className={`header-nav-link ${location.pathname === '/appointment' ? 'header-nav-link-active' : ''}`}
              >
                {language === 'ar' ? 'حجز موعد' : 'Appointment'}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/contact"
                className={`header-nav-link ${location.pathname === '/contact' ? 'header-nav-link-active' : ''}`}
              >
                {language === 'ar' ? 'اتصل بنا' : 'Contact'}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/faq"
                className={`header-nav-link ${location.pathname === '/faq' ? 'header-nav-link-active' : ''}`}
              >
                {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
              </Link>
            </li>
          </ul>
          
          {/* Language Switcher */}
          <div className="language-switcher">
            <button 
              className="language-dropdown-btn"
              onClick={toggleLanguageDropdown}
            >
              <span className="language-icon">🌐</span>
              <span className="current-language">{language.toUpperCase()}</span>
              <span className={`dropdown-arrow ${isLanguageDropdownOpen ? 'open' : ''}`}>▼</span>
            </button>
            
            {isLanguageDropdownOpen && (
              <div className="language-dropdown">
                <button 
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => selectLanguage('en')}
                >
                  EN
                </button>
                <button 
                  className={`language-option ${language === 'ar' ? 'active' : ''}`}
                  onClick={() => selectLanguage('ar')}
                >
                  AR
                </button>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <nav className={`header-navigation mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul className="header-nav-list mobile-nav-list">
            <li className="header-nav-item">
              <Link
                to="/"
                className={`header-nav-link ${location.pathname === '/' ? 'header-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                {language === 'ar' ? 'الرئيسية' : 'Home'}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/services"
                className={`header-nav-link ${location.pathname === '/services' ? 'header-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                {language === 'ar' ? 'الخدمات' : 'Services'}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/team"
                className={`header-nav-link ${location.pathname === '/team' ? 'header-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                {language === 'ar' ? 'الفريق' : 'Team'}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/appointment"
                className={`header-nav-link ${location.pathname === '/appointment' ? 'header-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                {language === 'ar' ? 'حجز موعد' : 'Appointment'}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/contact"
                className={`header-nav-link ${location.pathname === '/contact' ? 'header-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                {language === 'ar' ? 'اتصل بنا' : 'Contact'}
              </Link>
            </li>
            <li className="header-nav-item">
              <Link
                to="/faq"
                className={`header-nav-link ${location.pathname === '/faq' ? 'header-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                {language === 'ar' ? 'الأسئلة الشائعة' : 'FAQ'}
              </Link>
            </li>
          </ul>
          
          {/* Mobile Language Switcher */}
          <div className="mobile-language-switcher">
            <button 
              className="mobile-language-dropdown-btn"
              onClick={toggleLanguageDropdown}
            >
              <span className="language-icon">🌐</span>
              <span className="current-language">{language.toUpperCase()}</span>
              <span className={`dropdown-arrow ${isLanguageDropdownOpen ? 'open' : ''}`}>▼</span>
            </button>
            
            {isLanguageDropdownOpen && (
              <div className="mobile-language-dropdown">
                <button 
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                  onClick={() => selectLanguage('en')}
                >
                  EN
                </button>
                <button 
                  className={`language-option ${language === 'ar' ? 'active' : ''}`}
                  onClick={() => selectLanguage('ar')}
                >
                  AR
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
