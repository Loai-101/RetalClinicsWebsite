import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './SiteHold.css';

const PMI_LOGO_URL =
  'https://res.cloudinary.com/dvybb2xnc/image/upload/f_auto,q_auto/v1756121005/PMI_Purple_j8wvsj';

const PMI_WEBSITE = 'https://it-solutions.pmi-me.net/';

const content = {
  en: {
    heading: 'Website Suspended',
    paragraph1: 'This website has been suspended by PMI IT Solutions.',
    paragraph2:
      'If you have any inquiries or would like to reactivate the service, please contact the PMI IT Solutions team.',
    thankYou: 'Thank you for your understanding.',
    contactCta: 'Contact PMI IT Solutions',
  },
  ar: {
    heading: 'تم إيقاف الموقع',
    paragraph1: 'نود إعلامكم بأن هذا الموقع تم إيقافه من قبل PMI IT Solutions.',
    paragraph2:
      'في حال وجود أي استفسارات أو الحاجة إلى إعادة تفعيل الخدمة، يرجى التواصل مع فريق PMI IT Solutions.',
    thankYou: 'شكراً لتفهمكم.',
    contactCta: 'تواصل مع PMI IT Solutions',
  },
};

const SiteHold = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = content[language];

  return (
    <div className="site-hold" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="site-hold__backdrop" aria-hidden="true" />

      <div className="site-hold__lang">
        <button
          type="button"
          className={`site-hold__lang-btn ${language === 'en' ? 'active' : ''}`}
          onClick={() => toggleLanguage('en')}
        >
          English
        </button>
        <button
          type="button"
          className={`site-hold__lang-btn ${language === 'ar' ? 'active' : ''}`}
          onClick={() => toggleLanguage('ar')}
        >
          العربية
        </button>
      </div>

      <div className="site-hold__card">
        <div className="site-hold__icon-wrap">
          <img src={PMI_LOGO_URL} alt="PMI IT Solutions" className="site-hold__logo" />
        </div>

        <div className="site-hold__status">
          <span className="site-hold__status-dot" aria-hidden="true" />
          <span>PMI IT Solutions</span>
        </div>

        <h1 className="site-hold__heading">{t.heading}</h1>

        <div className="site-hold__body">
          <p>{t.paragraph1}</p>
          <p>{t.paragraph2}</p>
        </div>

        <p className="site-hold__thanks">{t.thankYou}</p>

        <a
          href={PMI_WEBSITE}
          className="site-hold__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.contactCta}
        </a>
      </div>
    </div>
  );
};

export default SiteHold;
