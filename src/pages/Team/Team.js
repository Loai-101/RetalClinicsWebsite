import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './Team.css';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  useEffect(() => {
    // Set visible immediately when component mounts
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('team');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const doctors = [
    {
      id: 1,
      name: {
        en: "Dr. Ahmed Riyadh",
        ar: "د. أحمد رياض"
      },
      jobTitle: {
        en: "Dental Implant Specialist & Cosmetic Dentist",
        ar: "أخصائي زراعة الأسنان وطبيب أسنان تجميل"
      },
      experience: {
        en: "15+ years",
        ar: "أكثر من 15 سنة"
      },
      specialty: {
        en: "Dental Implants & Cosmetic Dentistry",
        ar: "زراعة الأسنان وطب الأسنان التجميلي"
      },
      specialties: {
        en: ["Dental Implants", "Cosmetic Dentistry", "Porcelain Veneers", "Teeth Whitening", "Smile Design", "Full Mouth Rehabilitation"],
        ar: ["زراعة الأسنان", "طب الأسنان التجميلي", "قشور خزفية", "تبييض الأسنان", "تصميم الابتسامة", "إعادة تأهيل الفم الكامل"]
      },
      description: {
        en: "Highly experienced in dental implants and cosmetic dentistry with over 15 years of practice. Specializes in creating beautiful, natural-looking smiles using advanced techniques and premium materials.",
        ar: "يتمتع بخبرة واسعة في زراعة الأسنان وطب الأسنان التجميلي لأكثر من 15 عامًا. متخصص في إنشاء ابتسامات جميلة وطبيعية المظهر باستخدام تقنيات متقدمة ومواد عالية الجودة."
      },
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690091/1_swdxn0.png"
    },
    {
      id: 2,
      name: {
        en: "Dr. Abdullah Ibrahim",
        ar: "د. عبدالله إبراهيم"
      },
      jobTitle: {
        en: "Prosthodontist & Dental Implant Specialist",
        ar: "أخصائي التعويضات السنية وأخصائي زراعة الأسنان"
      },
      experience: {
        en: "12+ years",
        ar: "أكثر من 12 سنة"
      },
      specialty: {
        en: "Prosthodontics & Dental Implants",
        ar: "التعويضات السنية وزراعة الأسنان"
      },
      specialties: {
        en: ["Dental Implants", "Crowns & Bridges", "Dentures", "Full Mouth Reconstruction", "Zircon Crowns", "Dental Prosthetics"],
        ar: ["زراعة الأسنان", "التيجان والجسور", "أطقم الأسنان", "إعادة بناء الفم الكامل", "تيجان زركون", "التعويضات السنية"]
      },
      description: {
        en: "Expert in prosthodontics and dental implants with 12+ years of experience. Known for precision work in crowns, bridges, and full mouth rehabilitation, helping patients restore their smiles and oral function.",
        ar: "خبير في التعويضات السنية وزراعة الأسنان مع أكثر من 12 عامًا من الخبرة. معروف بعمله الدقيق في التيجان والجسور وإعادة تأهيل الفم الكامل، مما يساعد المرضى على استعادة ابتسامتهم ووظيفة الفم."
      },
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690107/2_xfceb6.png"
    },
    {
      id: 3,
      name: {
        en: "Dr. Azhar Alaradi",
        ar: "د. أزهار الراضي"
      },
      jobTitle: {
        en: "Pediatric Dentist, General Dentist & Oral Surgeon",
        ar: "طبيب أسنان أطفال، طبيب أسنان عام وجراح فم"
      },
      experience: {
        en: "10+ years",
        ar: "أكثر من 10 سنوات"
      },
      specialty: {
        en: "Pediatric Dentistry, General Dentistry & Oral Surgery",
        ar: "طب أسنان الأطفال، طب الأسنان العام وجراحة الفم"
      },
      specialties: {
        en: ["Pediatric Dentistry", "General Dentistry", "Tooth Extraction", "Root Canal Treatment", "Emergency Dental Care", "Oral Surgery", "Children's Dental Care", "Preventive Dentistry"],
        ar: ["طب أسنان الأطفال", "طب الأسنان العام", "خلع الأسنان", "علاج جذور الأسنان", "الرعاية الطارئة للأسنان", "جراحة الفم", "رعاية أسنان الأطفال", "طب الأسنان الوقائي"]
      },
      description: {
        en: "Versatile dentist with 10+ years of experience specializing in pediatric dentistry, general dentistry, and oral surgery. Provides comprehensive dental care for patients of all ages, from children to adults, with expertise in emergency treatments and surgical procedures.",
        ar: "طبيب أسنان متعدد التخصصات مع أكثر من 10 سنوات من الخبرة متخصص في طب أسنان الأطفال وطب الأسنان العام وجراحة الفم. يقدم رعاية أسنان شاملة للمرضى من جميع الأعمار، من الأطفال إلى البالغين، مع خبرة في العلاجات الطارئة والإجراءات الجراحية."
      },
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690124/4_ihev83.png"
    },
    {
      id: 4,
      name: {
        en: "Ahmed Al Mubarak",
        ar: "أحمد المبارك"
      },
      jobTitle: {
        en: "Dental Hygienist & Cosmetic Dentist",
        ar: "أخصائي صحة أسنان وطبيب أسنان تجميل"
      },
      experience: {
        en: "7+ years",
        ar: "أكثر من 7 سنوات"
      },
      specialty: {
        en: "Dental Hygiene & Cosmetic Dentistry",
        ar: "صحة الأسنان وطب الأسنان التجميلي"
      },
      specialties: {
        en: ["Teeth Whitening", "Dental Cleaning & Polishing", "Preventive Care", "Oral Hygiene", "Cosmetic Procedures", "Fluoride Treatment"],
        ar: ["تبييض الأسنان", "تنظيف وتلميع الأسنان", "الرعاية الوقائية", "نظافة الفم", "الإجراءات التجميلية", "علاج الفلورايد"]
      },
      description: {
        en: "Experienced dental hygienist and cosmetic dentist with 7+ years of practice. Specializes in professional dental cleaning, teeth whitening, and preventive care to help patients achieve and maintain healthy, bright smiles.",
        ar: "أخصائي صحة أسنان وطبيب أسنان تجميل ذو خبرة مع أكثر من 7 سنوات من الممارسة. متخصص في التنظيف المهني للأسنان وتبييض الأسنان والرعاية الوقائية لمساعدة المرضى على تحقيق والحفاظ على ابتسامات صحية ومشرقة."
      },
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690117/3_bx3vnz.png"
    }
  ];

  const openPopup = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closePopup = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="team-page">
      {/* Team Hero Section */}
      <section className="team-hero">
        <div className="team-hero-container">
          <div className="team-hero-content">
            {/* Social Media Icons */}
            <div className="team-hero-social-icons">
              <a 
                href="https://www.instagram.com/retalclinics?utm_source=ig_web_button_share_sheet&igsh=dHl4cjJlZW52OXFk"
                target="_blank"
                rel="noopener noreferrer"
                className="team-hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.tiktok.com/@retalclinics?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="team-hero-social-icon"
                title="Follow us on TikTok"
              >
                <FaTiktok />
              </a>
              
              <a 
                href="https://wa.me/97338831160"
                target="_blank"
                rel="noopener noreferrer"
                className="team-hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className={`team ${isVisible ? 'team-visible' : ''}`}>
        <div className="team-container">
          <div className="team-header">
            <h1 className="team-title">
              {currentLanguage === 'ar' ? 'فريقنا الطبي' : 'Our Medical Team'}
            </h1>
          </div>
          
          <div className="team-content">
            <div className="doctors-grid">
              {doctors.map((doctor, index) => (
                <div 
                  key={doctor.id}
                  className="doctor-card"
                  onClick={() => openPopup(doctor)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="doctor-image">
                    {doctor.image && doctor.image.startsWith('http') ? (
                      <img 
                        src={doctor.image} 
                        alt={doctor.name && doctor.name[currentLanguage] ? doctor.name[currentLanguage] : doctor.name?.en || 'Doctor'}
                        className="doctor-avatar-image"
                      />
                    ) : (
                      <span className="doctor-avatar">{doctor.image || 'DR'}</span>
                    )}
                  </div>
                  
                  <div className="doctor-info">
                    <h3 className="doctor-name">
                      {doctor.name && doctor.name[currentLanguage] ? doctor.name[currentLanguage] : doctor.name?.en || 'Doctor'}
                    </h3>
                    <p className="doctor-specialty">
                      {doctor.jobTitle && doctor.jobTitle[currentLanguage] ? doctor.jobTitle[currentLanguage] : doctor.jobTitle?.en || 'Specialist'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Moving Bar */}
      <section className="insurance-moving-bar">
        <div className="insurance-section">
          <h3 className="insurance-title">
            {currentLanguage === 'ar' ? 'شركات التأمين' : 'Insurance Company'}
          </h3>
          <div className="insurance-moving-content">
            <img src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1756214645/Screenshot_2025-08-26_100548_goqlap.png" alt="Insurance Company" className="insurance-logo" />
            <img src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1762691206/saico_hviojg.png" alt="SAICO Insurance" className="insurance-logo" />
          </div>
        </div>
      </section>

      {/* Doctor Popup */}
      {selectedDoctor && (
        <div className="doctor-popup-overlay" onClick={closePopup}>
          <div className="doctor-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={closePopup}>×</button>
            
            <div className="popup-content">
                             <div className="popup-header">
                 {selectedDoctor.image.startsWith('http') ? (
                   <img 
                     src={selectedDoctor.image} 
                     alt={selectedDoctor.name}
                     className="popup-avatar-image"
                   />
                 ) : (
                   <span className="popup-avatar">{selectedDoctor.image}</span>
                 )}
                 <h3 className="popup-name">
                   {selectedDoctor.name && selectedDoctor.name[currentLanguage] ? selectedDoctor.name[currentLanguage] : selectedDoctor.name?.en || 'Doctor'}
                 </h3>
                 <p className="popup-specialty">
                   {selectedDoctor.jobTitle && selectedDoctor.jobTitle[currentLanguage] ? selectedDoctor.jobTitle[currentLanguage] : selectedDoctor.jobTitle?.en || 'Specialist'}
                 </p>
               </div>
              
              <div className="popup-details">
                <div className="popup-experience">
                  <h4>{currentLanguage === 'ar' ? 'الخبرة' : 'Experience'}</h4>
                  <p>
                    {selectedDoctor.experience && selectedDoctor.experience[currentLanguage] 
                      ? selectedDoctor.experience[currentLanguage] 
                      : selectedDoctor.experience?.en || 'Experience not available'}
                  </p>
                </div>
                
                <div className="popup-description">
                  <h4>{currentLanguage === 'ar' ? 'الوصف' : 'Description'}</h4>
                  <p>
                    {selectedDoctor.description && selectedDoctor.description[currentLanguage] 
                      ? selectedDoctor.description[currentLanguage] 
                      : selectedDoctor.description?.en || 'Description not available'}
                  </p>
                </div>
                
                {selectedDoctor.specialties && selectedDoctor.specialties[currentLanguage] && Array.isArray(selectedDoctor.specialties[currentLanguage]) && (
                  <div className="popup-specialties">
                    <h4>{currentLanguage === 'ar' ? 'التخصصات' : 'Specialties'}</h4>
                    <div className="specialties-grid">
                      {selectedDoctor.specialties[currentLanguage].map((specialty, index) => (
                        <span key={index} className="specialty-tag">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Team;
