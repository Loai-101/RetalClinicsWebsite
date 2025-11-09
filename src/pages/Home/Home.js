import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    patients: 0,
    satisfaction: 0,
    emergency: 0
  });
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      heroTitle: "Welcome to Retal clinics",
      heroDescription: "A healthy and confident smile starts with professional dental care",
      ourServices: "Our Services",
      bookAppointment: "Book Appointment",
      movingText: [
        "Brighten your smile today at Retal clinics.",
        "Dental implants with natural results you can trust.",
        "Your smile is our passion at Retal clinics.",
        "Book your free dental consultation now!",
        "Get a confident smile with painless dental care.",
        "Special offer: Implant + Crown at only 230 JDs!",
        "Advanced dental technology for perfect results.",
        "Healthy teeth, happy life—visit Retal clinics today.",
        "Beautiful smiles begin with expert care.",
        "Restore your smile with high-quality dental implants."
      ],
      statistics: {
        experience: "12 years experience",
        patients: "1500 happy patients",
        satisfaction: "99% satisfaction rate",
        emergency: "6 days / week"
      }
    },
    ar: {
      heroTitle: "مرحباً بكم في عيادة ريتال لطب الأسنان",
      heroDescription: "ابتسامة صحية وواثقة تبدأ من رعاية أسنان احترافية",
      ourServices: "خدماتنا",
      bookAppointment: "احجز موعد",
      movingText: [
        "أضيء ابتسامتك اليوم في عيادة ريتال لطب الأسنان.",
        "زراعة الأسنان بنتائج طبيعية يمكنك الوثوق بها.",
        "ابتسامتك هي شغفنا في عيادة ريتال لطب الأسنان.",
        "احجز استشارة الأسنان المجانية الآن!",
        "احصل على ابتسامة واثقة برعاية أسنان خالية من الألم.",
        "عرض خاص: زراعة + تاج بسعر 230 دينار فقط!",
        "تقنية أسنان متقدمة لنتائج مثالية.",
        "أسنان صحية، حياة سعيدة—زر عيادة ريتال لطب الأسنان اليوم.",
        "الابتسامات الجميلة تبدأ برعاية خبيرة.",
        "استعد ابتسامتك بزراعة أسنان عالية الجودة."
      ],
      statistics: {
        experience: "12 سنة خبرة",
        patients: "1500 مريض سعيد",
        satisfaction: "99% نسبة رضا",
        emergency: "6 أيام في الأسبوع"
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          // Start counting animation only once when statistics section becomes visible
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      
      setCounts({
        experience: Math.floor(12 * progress),
        patients: Math.floor(1500 * progress),
        satisfaction: Math.floor(99 * progress),
        emergency: Math.floor(6 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        // Ensure final values are exact
        setCounts({
          experience: 12,
          patients: 1500,
          satisfaction: 99,
          emergency: 6
        });
      }
    }, stepDuration);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Video Background */}
        <div className="hero-video-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
            preload="auto"
          >
            <source 
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/q_auto:best,f_mp4/v1762685543/copy_1E2BAA65-6E7F-4B55-B3FF-15B5230660AF_qichhn.mov" 
              type="video/mp4" 
            />
            <source 
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/q_auto:best,f_webm/v1762685543/copy_1E2BAA65-6E7F-4B55-B3FF-15B5230660AF_qichhn.mov" 
              type="video/webm" 
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        
        <div className="hero-container">
          <div className={`hero-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="hero-title">
              {content[language].heroTitle}
            </h1>
            <p className="hero-description">
              {content[language].heroDescription}
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="hero-button hero-button-primary">
                {content[language].ourServices}
              </Link>
              <Link to="/appointment" className="hero-button hero-button-secondary">
                {content[language].bookAppointment}
              </Link>
            </div>
            
            {/* Social Media Icons */}
            <div className="hero-social-icons">
              <a 
                href="https://www.instagram.com/retalclinics?utm_source=ig_web_button_share_sheet&igsh=dHl4cjJlZW52OXFk"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.tiktok.com/@retalclinics?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="Follow us on TikTok"
              >
                <FaTiktok />
              </a>
              
              <a 
                href="https://wa.me/97338831160"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Text Bar */}
      <section className="moving-text-section">
        <div className="moving-text-container">
          <div className={`moving-text-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {content[language].movingText.map((text, index) => (
              <span key={index} className="moving-text-item">{text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{counts.experience}</div>
              <div className="stat-label">{language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.patients}</div>
              <div className="stat-label">{language === 'ar' ? 'مريض سعيد' : 'Happy Patients'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.satisfaction}%</div>
              <div className="stat-label">{language === 'ar' ? 'نسبة الرضا' : 'Satisfaction Rate'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.emergency}</div>
              <div className="stat-label">{language === 'ar' ? 'أيام في الأسبوع' : 'Days / Week'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about ${isVisible ? 'about-visible' : ''}`}>
        <div className="about-container">
            <div className="about-header">
              <h2 className="about-title">
                {language === 'ar' ? 'حول عيادتنا' : 'About Our Clinic'}
              </h2>
              <p className="about-description">
                {language === 'ar' 
                  ? "تقدم عيادة ريتال لطب الأسنان رعاية أسنان عالية الجودة باستخدام التكنولوجيا الحديثة والتقنيات اللطيفة. نتخصص في زراعة الأسنان، طب الأسنان التجميلي، واستعادة الابتسامة لتمنحك ابتسامة صحية وواثقة."
                  : "Retal clinics offers high-quality dental care using modern technology and gentle techniques. We specialize in implants, cosmetic dentistry, and smile restoration to give you a healthy, confident smile."
                }
              </p>
            </div>
          
          <div className="about-content">
            <div className="about-text">
              <div className="about-section">
                <h3 className="about-section-title">
                  {language === 'ar' ? 'لماذا تختار عيادتنا' : 'Why Choose Our Clinic'}
                </h3>
                <div className="about-features">
                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'فريق أسنان ذو خبرة ومؤهل' : 'Experienced and Highly Qualified Dental Team'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "فريقنا من أطباء الأسنان ذوي الخبرة والمؤهلين تأهيلاً عالياً يضمن لك أفضل رعاية أسنان ممكنة."
                          : "Our experienced and highly qualified dental team ensures you receive the best possible dental care."
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'تقنية متقدمة ومعدات حديثة' : 'Advanced Technology and Modern Equipment'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "نستخدم أحدث التقنيات والمعدات الحديثة لتقديم أفضل النتائج في علاج الأسنان."
                          : "We use the latest technology and modern equipment to deliver the best results in dental treatment."
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'معدل نجاح عالي في زراعة الأسنان' : 'High Success Rate in Dental Implants'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "نفتخر بمعدل نجاح عالي في زراعة الأسنان مع نتائج طبيعية وطويلة الأمد."
                          : "We pride ourselves on a high success rate in dental implants with natural and long-lasting results."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'خطط علاجية مخصصة لكل مريض' : 'Personalized Treatment Plans for Every Patient'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "نصمم خطط علاجية مخصصة لكل مريض وفقاً لاحتياجاته وأهدافه الخاصة."
                          : "We design personalized treatment plans for every patient according to their specific needs and goals."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'رعاية أسنان لطيفة ومريحة' : 'Gentle and Comfortable Dental Care Experience'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "نوفر تجربة رعاية أسنان لطيفة ومريحة لتجعلك تشعر بالراحة والاسترخاء أثناء العلاج."
                          : "We provide a gentle and comfortable dental care experience to make you feel at ease and relaxed during treatment."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'مواد عالية الجودة ومعايير دولية' : 'Premium Materials and International Standards'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "نستخدم مواد عالية الجودة ونتبع المعايير الدولية لضمان أفضل النتائج والسلامة."
                          : "We use premium materials and follow international standards to ensure the best results and safety."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'أسعار تنافسية مع قيمة ممتازة' : 'Competitive Prices with Excellent Value'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "نقدم أسعاراً تنافسية مع قيمة ممتازة لرعاية أسنان عالية الجودة."
                          : "We offer competitive prices with excellent value for high-quality dental care."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'متابعة استثنائية ودعم للمريض' : 'Exceptional Patient Follow-up and Support'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "نوفر متابعة استثنائية ودعماً شاملاً للمريض في كل مرحلة من مراحل العلاج."
                          : "We provide exceptional patient follow-up and comprehensive support at every stage of treatment."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'بيئة نظيفة وآمنة ومعقمة' : 'Clean, Safe, and Sterilized Environment'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "نحافظ على بيئة نظيفة وآمنة ومعقمة تماماً لضمان سلامة وصحة مرضانا."
                          : "We maintain a clean, safe, and fully sterilized environment to ensure the safety and health of our patients."
                        }
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
