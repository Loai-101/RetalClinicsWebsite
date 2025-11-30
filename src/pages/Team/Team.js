import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
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
        en: "9 years",
        ar: "9 سنوات"
      },
      specialty: {
        en: "Dental Implants & Cosmetic Dentistry",
        ar: "زراعة الأسنان وطب الأسنان التجميلي"
      },
      specialties: {
        en: ["Dental Implant", "Cosmetic Dentistry (Veneers)", "Laser Dentistry", "Biomimetic Fillings", "Root Canal Treatment", "Extraction", "Teeth Whitening"],
        ar: ["زراعة الأسنان", "طب الأسنان التجميلي (قشور)", "طب الأسنان بالليزر", "حشوات بيوميمتيك", "علاج قناة الجذر", "خلع الأسنان", "تبييض الأسنان"]
      },
      description: {
        en: "With 9 years of experience, Dr. Ahmed combines expertise in implants, dental lasers, and cosmetic dentistry to create healthy, beautiful smiles. Passionate about veneers and smile makeovers, Dr. Ahmed helps every patient feel confident and cared for.",
        ar: "مع 9 سنوات من الخبرة، يجمع د. أحمد بين الخبرة في الزراعة وأشعة الليزر وطب الأسنان التجميلي لإنشاء ابتسامات صحية وجميلة. شغوف بقشور الأسنان وتحويلات الابتسامة، يساعد د. أحمد كل مريض على الشعور بالثقة والرعاية."
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
        en: "Dental Implant Specialist & Cosmetic Dentist",
        ar: "أخصائي زراعة الأسنان وطبيب أسنان تجميل"
      },
      experience: {
        en: "12+ years",
        ar: "أكثر من 12 سنة"
      },
      specialty: {
        en: "Laser Dentistry & Dental Implants",
        ar: "طب الأسنان بالليزر وزراعة الأسنان"
      },
      specialties: {
        en: ["Dental Implants", "Cosmetic Dentistry", "Veneers", "Root Canal Treatments", "Laser Dentistry"],
        ar: ["زراعة الأسنان", "طب الأسنان التجميلي", "قشور خزفية", "علاج قناة الجذر", "طب الأسنان بالليزر"]
      },
      description: {
        en: "Experienced and have professional diplomas in Root canal, cosmetic dentistry and dental implants. Specialized in Laser dentistry and dental implants.",
        ar: "ذو خبرة وحاصل على دبلومات مهنية في علاج قناة الجذر وطب الأسنان التجميلي وزراعة الأسنان. متخصص في طب الأسنان بالليزر وزراعة الأسنان."
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
        en: "11 years",
        ar: "11 سنة"
      },
      specialty: {
        en: "Cosmetic Dentistry, Laser Dentistry & Biomimetic Dentistry",
        ar: "طب الأسنان التجميلي، طب الأسنان بالليزر وطب الأسنان البيوميمتيكي"
      },
      specialties: {
        en: ["Cosmetic dentistry (veneers)", "Laser dentistry", "Biomimetic fillings", "Root canal treatment", "Extraction", "Teeth whitening"],
        ar: ["طب الأسنان التجميلي (قشور)", "طب الأسنان بالليزر", "حشوات بيوميمتيك", "علاج قناة الجذر", "خلع الأسنان", "تبييض الأسنان"]
      },
      description: {
        en: "With 11 years of clinical excellence, Dr. Azhar blends advanced expertise in dental lasers, and cosmetic dentistry to craft natural, long-lasting, and beautifully balanced smiles. Renowned for a refined approach to veneers and smile makeovers, Dr. Azhar is dedicated to delivering exceptional results with a patient-centered experience that feels comfortable, confident, and truly personalized.",
        ar: "مع 11 عامًا من التميز السريري، يجمع د. أزهار بين الخبرة المتقدمة في أجهزة الليزر وطب الأسنان التجميلي لصياغة ابتسامات طبيعية ودائمة ومتوازنة بشكل جميل. معروف بمنهج متقن في القشور وتحويلات الابتسامة، د. أزهار ملتزم بتقديم نتائج استثنائية مع تجربة تركز على المريض تشعر بالراحة والثقة والشخصية حقًا."
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
        en: "5+ years",
        ar: "أكثر من 5 سنوات"
      },
      specialty: {
        en: "Dental Hygiene & Cosmetic Dentistry",
        ar: "صحة الأسنان وطب الأسنان التجميلي"
      },
      specialties: {
        en: ["Teeth Whitening", "Periodontal Treatments", "Prevention Care", "Prevention Instructions"],
        ar: ["تبييض الأسنان", "علاجات اللثة", "الرعاية الوقائية", "تعليمات الوقاية"]
      },
      description: {
        en: "Advanced experience in periodontal treatments and protective care with over 5 years of practice. Specializes in prevention methods and treatments to create healthy smiles using oral hygiene instructions and habits.",
        ar: "خبرة متقدمة في علاجات اللثة والرعاية الوقائية مع أكثر من 5 سنوات من الممارسة. متخصص في طرق الوقاية والعلاجات لإنشاء ابتسامات صحية باستخدام تعليمات وعادات نظافة الفم."
      },
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690117/3_bx3vnz.png"
    },
    {
      id: 5,
      name: {
        en: "Dr. Soorya",
        ar: "د. سوريا"
      },
      jobTitle: {
        en: "Orthodontist",
        ar: "أخصائي تقويم الأسنان"
      },
      experience: {
        en: "14+ years",
        ar: "أكثر من 14 سنة"
      },
      specialty: {
        en: "Orthodontics",
        ar: "تقويم الأسنان"
      },
      specialties: {
        en: ["Metal Braces", "Ceramic Braces", "Damon Braces", "Clear Aligners", "Growth Modifications", "Surgical Orthodontics", "Temporary Anchorage Devices", "Interdisciplinary Orthodontics"],
        ar: ["تقويم معدني", "تقويم خزفي", "تقويم دامون", "تقويم شفاف", "تعديلات النمو", "تقويم جراحي", "أجهزة التثبيت المؤقتة", "تقويم متعدد التخصصات"]
      },
      description: {
        en: "Experienced orthodontist specialised in tooth alignment and jaw irregularities. Obtained her Masters in Orthodontics and Dentofacial Orthopedics from KUHS, India, and Fellowship in Orthodontics from RCS, Edinburgh. Skilled in conventional orthodontics, clear aligners, damon system, myofunctional and orthopedic appliances.",
        ar: "أخصائي تقويم أسنان ذو خبرة متخصص في محاذاة الأسنان وعدم انتظام الفك. حصلت على درجة الماجستير في تقويم الأسنان وتقويم الوجه والفكين من KUHS، الهند، وزمالة في تقويم الأسنان من RCS، إدنبرة. ماهرة في تقويم الأسنان التقليدي، والتقويم الشفاف، ونظام دامون، وأجهزة العضلات الوظيفية وتقويم العظام."
      },
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1763019602/5_tzehwb.png"
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
              
              <a 
                href="mailto:Retalclinics@gmail.com"
                className="team-hero-social-icon"
                title="Email us"
              >
                <FaEnvelope />
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
