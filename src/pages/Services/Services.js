import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaInstagram,
  FaWhatsapp,
  FaEnvelope
} from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  // Moving bar services
  const movingBarServices = [
    { en: 'Dental Implants', ar: 'زراعة الأسنان' },
    { en: 'Hollywood Smile', ar: 'ابتسامة هوليوود' },
    { en: 'Porcelain Veneers', ar: 'قشور خزفية' },
    { en: 'Zircon Crowns', ar: 'تيجان زركون' },
    { en: 'Teeth Whitening', ar: 'تبييض الأسنان' },
    { en: 'Cosmetic Fillings', ar: 'حشوات تجميلية' },
    { en: 'Root Canal Treatment', ar: 'علاج جذور الأسنان' },
    { en: 'Orthodontics (Braces)', ar: 'تقويم الأسنان' },
    { en: 'Dental Cleaning & Polishing', ar: 'تنظيف وتلميع الأسنان' },
    { en: 'Gum Treatment', ar: 'علاج اللثة' },
    { en: 'Dental Bridges', ar: 'جسور الأسنان' },
    { en: 'Dentures', ar: 'أطقم الأسنان' },
    { en: 'Smile Makeover', ar: 'تجميل الابتسامة' },
    { en: 'Pediatric Dentistry', ar: 'طب أسنان الأطفال' },
    { en: 'Tooth Extraction', ar: 'خلع الأسنان' }
  ];

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

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const openServicePopup = (service) => {
    setSelectedService(service);
  };

  const closeServicePopup = () => {
    setSelectedService(null);
  };

  const services = [
    {
      id: 1,
      name: {
        en: "Dental Implants",
        ar: "زراعة الأسنان"
      },
      description: {
        en: "Restore missing teeth with natural-looking, long-lasting implants. A permanent solution for a confident smile.",
        ar: "استعد أسنانك المفقودة بزراعات طبيعية المظهر وطويلة الأمد. حل دائم لابتسامة واثقة."
      },
      provider: {
        en: "Dr. Ahmed Riyadh and Dr. Abdullah Ibrahim, Dental Implant Specialist",
        ar: "د. أحمد رياض ود. عبدالله إبراهيم، أخصائي زراعة الأسنان"
      },
      treatments: {
        en: [
          "Single Tooth Implant",
          "Multiple Implants",
          "Full Mouth Implants (All-on-4/6)",
          "Bone Grafting if needed"
        ],
        ar: [
          "زراعة سن واحد",
          "زراعات متعددة",
          "زراعة الفم الكامل (All-on-4/6)",
          "ترقيع العظام عند الحاجة"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Ahmed Riyadh",
            ar: "د. أحمد رياض"
          },
          specialty: {
            en: "Dental Implant Specialist",
            ar: "أخصائي زراعة الأسنان"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690091/1_swdxn0.png"
        },
        {
          name: {
            en: "Dr. Abdullah Ibrahim",
            ar: "د. عبدالله إبراهيم"
          },
          specialty: {
            en: "Dental Implant Specialist",
            ar: "أخصائي زراعة الأسنان"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690107/2_xfceb6.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839771/1_dp3kcm.png"
    },
    {
      id: 2,
      name: {
        en: "Hollywood Smile",
        ar: "ابتسامة هوليوود"
      },
      description: {
        en: "Achieve a perfect, bright smile with customized cosmetic treatments for an elegant appearance.",
        ar: "احصل على ابتسامة مثالية ومشرقة مع علاجات تجميلية مخصصة لمظهر أنيق."
      },
      provider: {
        en: "Dr. Ahmed Riyadh, Dr. Abdullah Ibrahim, and Dr. Azhar Alradi, Cosmetic Dentist",
        ar: "د. أحمد رياض، د. عبدالله إبراهيم، ود. أزهار الراضي، طبيب أسنان تجميل"
      },
      treatments: {
        en: [
          "Porcelain Veneers",
          "Teeth Whitening",
          "Smile Design",
          "Tooth Reshaping"
        ],
        ar: [
          "قشور خزفية",
          "تبييض الأسنان",
          "تصميم الابتسامة",
          "إعادة تشكيل الأسنان"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Ahmed Riyadh",
            ar: "د. أحمد رياض"
          },
          specialty: {
            en: "Cosmetic Dentist",
            ar: "طبيب أسنان تجميل"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690091/1_swdxn0.png"
        },
        {
          name: {
            en: "Dr. Abdullah Ibrahim",
            ar: "د. عبدالله إبراهيم"
          },
          specialty: {
            en: "Cosmetic Dentist",
            ar: "طبيب أسنان تجميل"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690107/2_xfceb6.png"
        },
        {
          name: {
            en: "Dr. Azhar Alradi",
            ar: "د. أزهار الراضي"
          },
          specialty: {
            en: "Cosmetic Dentist",
            ar: "طبيب أسنان تجميل"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690124/4_ihev83.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839849/15_c2nwdt.png"
    },
    {
      id: 3,
      name: {
        en: "Porcelain Veneers",
        ar: "قشور خزفية"
      },
      description: {
        en: "Thin, custom-made shells that cover the front surface of teeth to improve color, shape, and alignment.",
        ar: "قشور رقيقة مصنوعة خصيصاً تغطي السطح الأمامي للأسنان لتحسين اللون والشكل والمحاذاة."
      },
      provider: {
        en: "Dr. Ahmed Riyadh, Dr. Abdullah Ibrahim, and Dr. Azhar Alradi, Cosmetic Dentist",
        ar: "د. أحمد رياض، د. عبدالله إبراهيم، ود. أزهار الراضي، طبيب أسنان تجميل"
      },
      treatments: {
        en: [
          "Veneer Consultation & Planning",
          "Teeth Preparation",
          "Veneer Placement",
          "Polishing & Finishing"
        ],
        ar: [
          "استشارة وتخطيط القشور",
          "تحضير الأسنان",
          "تركيب القشور",
          "التلميع والإنهاء"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Ahmed Riyadh",
            ar: "د. أحمد رياض"
          },
          specialty: {
            en: "Cosmetic Dentist",
            ar: "طبيب أسنان تجميل"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690091/1_swdxn0.png"
        },
        {
          name: {
            en: "Dr. Abdullah Ibrahim",
            ar: "د. عبدالله إبراهيم"
          },
          specialty: {
            en: "Cosmetic Dentist",
            ar: "طبيب أسنان تجميل"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690107/2_xfceb6.png"
        },
        {
          name: {
            en: "Dr. Azhar Alradi",
            ar: "د. أزهار الراضي"
          },
          specialty: {
            en: "Cosmetic Dentist",
            ar: "طبيب أسنان تجميل"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690124/4_ihev83.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839807/8_qsvswm.png"
    },
    {
      id: 4,
      name: {
        en: "Zircon Crowns",
        ar: "تيجان زركون"
      },
      description: {
        en: "Strong, durable, and natural-looking crowns to restore damaged or decayed teeth.",
        ar: "تيجان قوية ومتينة وطبيعية المظهر لاستعادة الأسنان التالفة أو المتسوسة."
      },
      provider: {
        en: "Dr. Ahmed Riyadh, Dr. Abdullah Ibrahim, and Dr. Azhar Alradi, Prosthodontist",
        ar: "د. أحمد رياض، د. عبدالله إبراهيم، ود. أزهار الراضي، أخصائي التعويضات السنية"
      },
      treatments: {
        en: [
          "Tooth Preparation",
          "Digital Crown Design",
          "Crown Placement",
          "Follow-up Adjustment"
        ],
        ar: [
          "تحضير السن",
          "تصميم التاج الرقمي",
          "تركيب التاج",
          "متابعة وتعديل"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Ahmed Riyadh",
            ar: "د. أحمد رياض"
          },
          specialty: {
            en: "Prosthodontist",
            ar: "أخصائي التعويضات السنية"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690091/1_swdxn0.png"
        },
        {
          name: {
            en: "Dr. Abdullah Ibrahim",
            ar: "د. عبدالله إبراهيم"
          },
          specialty: {
            en: "Prosthodontist",
            ar: "أخصائي التعويضات السنية"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690107/2_xfceb6.png"
        },
        {
          name: {
            en: "Dr. Azhar Alradi",
            ar: "د. أزهار الراضي"
          },
          specialty: {
            en: "Prosthodontist",
            ar: "أخصائي التعويضات السنية"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690124/4_ihev83.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839787/4_sdpluu.png"
    },
    {
      id: 5,
      name: {
        en: "Teeth Whitening",
        ar: "تبييض الأسنان"
      },
      description: {
        en: "Brighten your smile with safe and effective whitening treatments for a radiant look.",
        ar: "أضف إشراقة لابتسامتك مع علاجات تبييض آمنة وفعالة لمظهر مشرق."
      },
      provider: {
        en: "Ahmed Al Mubarak, Dental Hygienist, Cosmetic Dentist",
        ar: "أحمد المبارك، أخصائي صحة أسنان، طبيب أسنان تجميل"
      },
      treatments: {
        en: [
          "In-Clinic Whitening",
          "Home Whitening Kits",
          "Touch-Up Sessions"
        ],
        ar: [
          "تبييض في العيادة",
          "أطقم التبييض المنزلية",
          "جلسات متابعة"
        ]
      },
      doctors: [
        {
          name: {
            en: "Ahmed Al Mubarak",
            ar: "أحمد المبارك"
          },
          specialty: {
            en: "Dental Hygienist, Cosmetic Dentist",
            ar: "أخصائي صحة أسنان، طبيب أسنان تجميل"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690117/3_bx3vnz.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839795/5_gxs6h5.png"
    },
    {
      id: 6,
      name: {
        en: "Cosmetic Fillings",
        ar: "حشوات تجميلية"
      },
      description: {
        en: "Repair cavities and improve tooth appearance with tooth-colored, natural-looking fillings.",
        ar: "إصلاح التجاويف وتحسين مظهر الأسنان بحشوات بلون الأسنان وطبيعية المظهر."
      },
      provider: {
        en: "Dr. Ahmed Riyadh, Dr. Abdullah Ibrahim, and Dr. Azhar Alradi, General Dentist",
        ar: "د. أحمد رياض، د. عبدالله إبراهيم، ود. أزهار الراضي، طبيب أسنان عام"
      },
      treatments: {
        en: [
          "Tooth Decay Removal",
          "Composite Filling Placement",
          "Polishing & Finishing"
        ],
        ar: [
          "إزالة التسوس",
          "وضع الحشوة المركبة",
          "التلميع والإنهاء"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Ahmed Riyadh",
            ar: "د. أحمد رياض"
          },
          specialty: {
            en: "General Dentist",
            ar: "طبيب أسنان عام"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690091/1_swdxn0.png"
        },
        {
          name: {
            en: "Dr. Abdullah Ibrahim",
            ar: "د. عبدالله إبراهيم"
          },
          specialty: {
            en: "General Dentist",
            ar: "طبيب أسنان عام"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690107/2_xfceb6.png"
        },
        {
          name: {
            en: "Dr. Azhar Alradi",
            ar: "د. أزهار الراضي"
          },
          specialty: {
            en: "General Dentist",
            ar: "طبيب أسنان عام"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690124/4_ihev83.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839838/13_qizu5o.png"
    },
    {
      id: 7,
      name: {
        en: "Root Canal Treatment",
        ar: "علاج جذور الأسنان"
      },
      description: {
        en: "Save infected or damaged teeth with painless root canal therapy.",
        ar: "أنقذ أسنانك المصابة أو التالفة مع علاج قناة الجذر بدون ألم."
      },
      provider: {
        en: "Dr. Ahmed Riyadh, Dr. Abdullah Ibrahim, and Dr. Azhar Alradi, Endodontist",
        ar: "د. أحمد رياض، د. عبدالله إبراهيم، ود. أزهار الراضي، أخصائي علاج الجذور"
      },
      treatments: {
        en: [
          "Tooth Cleaning & Shaping",
          "Infection Removal",
          "Canal Filling",
          "Crown Placement if needed"
        ],
        ar: [
          "تنظيف وتشكيل السن",
          "إزالة العدوى",
          "حشو القناة",
          "تركيب التاج عند الحاجة"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Ahmed Riyadh",
            ar: "د. أحمد رياض"
          },
          specialty: {
            en: "Endodontist",
            ar: "أخصائي علاج الجذور"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690091/1_swdxn0.png"
        },
        {
          name: {
            en: "Dr. Abdullah Ibrahim",
            ar: "د. عبدالله إبراهيم"
          },
          specialty: {
            en: "Endodontist",
            ar: "أخصائي علاج الجذور"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690107/2_xfceb6.png"
        },
        {
          name: {
            en: "Dr. Azhar Alradi",
            ar: "د. أزهار الراضي"
          },
          specialty: {
            en: "Endodontist",
            ar: "أخصائي علاج الجذور"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690124/4_ihev83.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839838/13_qizu5o.png"
    },
    {
      id: 8,
      name: {
        en: "Orthodontics (Braces)",
        ar: "تقويم الأسنان"
      },
      description: {
        en: "Correct misaligned teeth and bite issues for a healthier and more attractive smile.",
        ar: "صحح الأسنان الملتوية ومشاكل العض للحصول على ابتسامة أكثر صحة وجاذبية."
      },
      provider: {
        en: "Dr. Sorya, Orthodontist Specialist",
        ar: "د. سوريا، أخصائي تقويم أسنان"
      },
      treatments: {
        en: [
          "Traditional Metal Braces",
          "Ceramic Braces",
          "Invisalign / Clear Aligners",
          "Retainer Follow-Up"
        ],
        ar: [
          "تقويم معدني تقليدي",
          "تقويم خزفي",
          "إنفزلاين / محاذيات شفافة",
          "متابعة المثبت"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Sorya",
            ar: "د. سوريا"
          },
          specialty: {
            en: "Orthodontist Specialist",
            ar: "أخصائي تقويم أسنان"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690091/1_swdxn0.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839819/10_e1nqbc.png"
    },
    {
      id: 9,
      name: {
        en: "Dental Cleaning & Polishing",
        ar: "تنظيف وتلميع الأسنان"
      },
      description: {
        en: "Maintain oral health with professional cleaning to remove plaque, tartar, and stains.",
        ar: "حافظ على صحة الفم مع التنظيف المهني لإزالة البلاك والجير والبقع."
      },
      provider: {
        en: "Ahmed Al Mubarak, Dental Hygienist",
        ar: "أحمد المبارك، أخصائي صحة أسنان"
      },
      treatments: {
        en: [
          "Scaling & Polishing",
          "Fluoride Treatment",
          "Oral Hygiene Guidance"
        ],
        ar: [
          "كشط وتلميع",
          "علاج الفلورايد",
          "إرشادات نظافة الفم"
        ]
      },
      doctors: [
        {
          name: {
            en: "Ahmed Al Mubarak",
            ar: "أحمد المبارك"
          },
          specialty: {
            en: "Dental Hygienist",
            ar: "أخصائي صحة أسنان"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690117/3_bx3vnz.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839823/11_ogqpdm.png"
    },
    {
      id: 10,
      name: {
        en: "Gum Treatment",
        ar: "علاج اللثة"
      },
      description: {
        en: "Treat and prevent gum disease for healthier gums and long-lasting oral health.",
        ar: "عالج وامنع أمراض اللثة للحصول على لثة أكثر صحة وصحة فموية طويلة الأمد."
      },
      provider: {
        en: "Dr. Abdullah Ibrahim and Dr. Ahmed Riyadh",
        ar: "د. عبدالله إبراهيم ود. أحمد رياض"
      },
      treatments: {
        en: [
          "Gum Disease Diagnosis",
          "Scaling & Root Planing",
          "Laser Gum Therapy",
          "Gum Surgery if needed"
        ],
        ar: [
          "تشخيص أمراض اللثة",
          "كشط وتخطيط الجذر",
          "علاج اللثة بالليزر",
          "جراحة اللثة عند الحاجة"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Abdullah Ibrahim",
            ar: "د. عبدالله إبراهيم"
          },
          specialty: {
            en: "Periodontist",
            ar: "أخصائي أمراض اللثة"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690107/2_xfceb6.png"
        },
        {
          name: {
            en: "Dr. Ahmed Riyadh",
            ar: "د. أحمد رياض"
          },
          specialty: {
            en: "Periodontist",
            ar: "أخصائي أمراض اللثة"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690091/1_swdxn0.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839813/9_cizxrc.png"
    },
    {
      id: 11,
      name: {
        en: "Dental Bridges",
        ar: "جسور الأسنان"
      },
      description: {
        en: "Replace missing teeth by anchoring a bridge to adjacent teeth for a natural look.",
        ar: "استبدل الأسنان المفقودة بتثبيت جسر على الأسنان المجاورة لمظهر طبيعي."
      },
      provider: {
        en: "Dr. Abdullah Ibrahim, Prosthodontist",
        ar: "د. عبدالله إبراهيم، أخصائي التعويضات السنية"
      },
      treatments: {
        en: [
          "Tooth Preparation",
          "Bridge Fabrication",
          "Placement & Adjustment"
        ],
        ar: [
          "تحضير الأسنان",
          "تصنيع الجسر",
          "التركيب والتعديل"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Abdullah Ibrahim",
            ar: "د. عبدالله إبراهيم"
          },
          specialty: {
            en: "Prosthodontist",
            ar: "أخصائي التعويضات السنية"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690107/2_xfceb6.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839776/2_lhnqby.png"
    },
    {
      id: 12,
      name: {
        en: "Dentures",
        ar: "أطقم الأسنان"
      },
      description: {
        en: "Removable or fixed dentures to restore missing teeth and improve chewing and aesthetics.",
        ar: "أطقم أسنان قابلة للإزالة أو ثابتة لاستعادة الأسنان المفقودة وتحسين المضغ والجماليات."
      },
      provider: {
        en: "Dr. Abdullah Ibrahim, Prosthodontist",
        ar: "د. عبدالله إبراهيم، أخصائي التعويضات السنية"
      },
      treatments: {
        en: [
          "Full Dentures",
          "Partial Dentures",
          "Adjustment & Fitting"
        ],
        ar: [
          "أطقم كاملة",
          "أطقم جزئية",
          "التعديل والتركيب"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Abdullah Ibrahim",
            ar: "د. عبدالله إبراهيم"
          },
          specialty: {
            en: "Prosthodontist",
            ar: "أخصائي التعويضات السنية"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690107/2_xfceb6.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839857/16_iezzbj.png"
    },
    {
      id: 13,
      name: {
        en: "Pediatric Dentistry",
        ar: "طب أسنان الأطفال"
      },
      description: {
        en: "Gentle dental care for children, ensuring healthy teeth and a positive experience.",
        ar: "رعاية أسنان لطيفة للأطفال، لضمان أسنان صحية وتجربة إيجابية."
      },
      provider: {
        en: "Dr. Azhar Al Aradi, Pediatric Dentist",
        ar: "د. أزهار الراضي، طبيب أسنان أطفال"
      },
      treatments: {
        en: [
          "Regular Check-Ups",
          "Cavity Prevention & Fillings",
          "Sealants & Fluoride Treatment",
          "Tooth Extraction if needed"
        ],
        ar: [
          "فحوصات منتظمة",
          "الوقاية من التسوس والحشوات",
          "المواد السادة وعلاج الفلورايد",
          "خلع الأسنان عند الحاجة"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Azhar Al Aradi",
            ar: "د. أزهار الراضي"
          },
          specialty: {
            en: "Pediatric Dentist",
            ar: "طبيب أسنان أطفال"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690124/4_ihev83.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839861/17_wwngwr.png"
    },
    {
      id: 14,
      name: {
        en: "Tooth Extraction",
        ar: "خلع الأسنان"
      },
      description: {
        en: "Safe and painless removal of damaged or problematic teeth.",
        ar: "إزالة آمنة وغير مؤلمة للأسنان التالفة أو المشكلة."
      },
      provider: {
        en: "Dr. Ahmed Riyadh, Dr. Abdullah Ibrahim, and Dr. Azhar, Oral Surgeon",
        ar: "د. أحمد رياض، د. عبدالله إبراهيم، ود. أزهار، جراح فم"
      },
      treatments: {
        en: [
          "Simple Extraction",
          "Surgical Extraction",
          "Wisdom Tooth Removal",
          "Post-Extraction Care"
        ],
        ar: [
          "خلع بسيط",
          "خلع جراحي",
          "إزالة ضرس العقل",
          "الرعاية بعد الخلع"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Ahmed Riyadh",
            ar: "د. أحمد رياض"
          },
          specialty: {
            en: "Oral Surgeon",
            ar: "جراح فم"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690091/1_swdxn0.png"
        },
        {
          name: {
            en: "Dr. Abdullah Ibrahim",
            ar: "د. عبدالله إبراهيم"
          },
          specialty: {
            en: "Oral Surgeon",
            ar: "جراح فم"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690107/2_xfceb6.png"
        },
        {
          name: {
            en: "Dr. Azhar",
            ar: "د. أزهار"
          },
          specialty: {
            en: "Oral Surgeon",
            ar: "جراح فم"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690124/4_ihev83.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839844/14_rcbkqj.png"
    },
    {
      id: 15,
      name: {
        en: "Emergency Dental Care",
        ar: "الرعاية الطارئة للأسنان"
      },
      description: {
        en: "Immediate dental treatment for accidents, tooth pain, or urgent issues.",
        ar: "علاج أسنان فوري للحوادث وآلام الأسنان أو المشاكل الطارئة."
      },
      provider: {
        en: "Dr. Azhar Alaradi, General Dentist / On-Call Specialists",
        ar: "د. أزهار الراضي، طبيب أسنان عام / أخصائيون على الطلب"
      },
      treatments: {
        en: [
          "Toothache Treatment",
          "Broken or Knocked-Out Tooth Repair",
          "Trauma Care",
          "Pain Management"
        ],
        ar: [
          "علاج آلام الأسنان",
          "إصلاح الأسنان المكسورة أو المخلوعة",
          "رعاية الصدمات",
          "إدارة الألم"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dr. Azhar Alaradi",
            ar: "د. أزهار الراضي"
          },
          specialty: {
            en: "General Dentist / On-Call Specialists",
            ar: "طبيب أسنان عام / أخصائيون على الطلب"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762690124/4_ihev83.png"
        }
      ],
      iconImage: "https://res.cloudinary.com/dvybb2xnc/image/upload/v1762839781/3_njtyas.png"
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-video">
          <video autoPlay muted loop playsInline preload="auto">
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/q_auto:best,f_mp4/v1762689027/WhatsApp_Video_2025-11-09_at_14.03.54_0b7a02a4_lveddh.mp4"
              type="video/mp4"
            />
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/q_auto:best,f_webm/v1762689027/WhatsApp_Video_2025-11-09_at_14.03.54_0b7a02a4_lveddh.mp4"
              type="video/webm"
            />
          </video>
        </div>
        <div className="services-hero-overlay"></div>
        <div className="services-hero-container">
          <div className={`services-hero-content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="services-hero-title">
              {currentLanguage === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h1>
            <p className="services-hero-description">
              {currentLanguage === 'ar' 
                ? 'نقدم مجموعة شاملة من خدمات طب الأسنان المتخصصة لمساعدتك على الحصول على ابتسامة صحية وواثقة'
                : 'We provide a comprehensive range of specialized dental services to help you achieve a healthy and confident smile'
              }
            </p>
            <div className="services-hero-buttons">
              <Link to="/appointment" className="services-hero-button-primary">
                {currentLanguage === 'ar' ? 'احجز موعد' : 'Book Appointment'}
              </Link>
              <Link to="/team" className="services-hero-button-secondary">
                {currentLanguage === 'ar' ? 'فريقنا الطبي' : 'Our Medical Team'}
              </Link>
            </div>
            
            {/* Social Media Icons */}
            <div className="services-social-icons">
              <a 
                href="https://www.instagram.com/retalclinics?utm_source=ig_web_button_share_sheet&igsh=dHl4cjJlZW52OXFk"
                target="_blank"
                rel="noopener noreferrer"
                className="services-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.tiktok.com/@retalclinics?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="services-social-icon"
                title="Follow us on TikTok"
              >
                <FaTiktok />
              </a>
              
              <a 
                href="https://wa.me/97338831160"
                target="_blank"
                rel="noopener noreferrer"
                className="services-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              
              <a 
                href="mailto:Retalclinics@gmail.com"
                className="services-social-icon"
                title="Email us"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Services Bar */}
      <div className="moving-services-bar">
        <div className="moving-services-content">
          {movingBarServices.map((service, index) => (
            <React.Fragment key={index}>
              <span>{service[currentLanguage] || service.en}</span>
              <span>•</span>
            </React.Fragment>
          ))}
          {movingBarServices.map((service, index) => (
            <React.Fragment key={`repeat-${index}`}>
              <span>{service[currentLanguage] || service.en}</span>
              <span>•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className={`services ${isVisible ? 'services-visible' : ''}`}>
        <div className="services-container">
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card"
                onClick={() => openServicePopup(service)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  {service.iconImage ? (
                    <img 
                      src={service.iconImage} 
                      alt={service.name && service.name[currentLanguage] ? service.name[currentLanguage] : service.name?.en || 'Service'}
                      className="service-icon-image"
                    />
                  ) : (
                    <span className="service-icon-text">{service.icon}</span>
                  )}
                </div>
                
                <div className="service-content">
                  <h3 className="service-name">{service.name && service.name[currentLanguage] ? service.name[currentLanguage] : service.name?.en || 'Service'}</h3>
                  <p className="service-description">{service.description && service.description[currentLanguage] ? service.description[currentLanguage] : service.description?.en || 'Description not available'}</p>
                  

                  
                  <div className="service-features">
                    <h4 className="features-title">{currentLanguage === 'ar' ? 'العلاجات المشمولة:' : 'Included Treatments:'}</h4>
                    <ul className="features-list">
                      {service.treatments && service.treatments[currentLanguage] && service.treatments[currentLanguage].slice(0, 4).map((treatment, treatmentIndex) => (
                        <li key={treatmentIndex} className="feature-item">
                          {treatment}
                        </li>
                      ))}
                      {service.treatments && service.treatments[currentLanguage] && service.treatments[currentLanguage].length > 4 && (
                        <li className="feature-item more-treatments">
                          {currentLanguage === 'ar' ? `+${service.treatments[currentLanguage].length - 4} علاجات أخرى` : `+${service.treatments[currentLanguage].length - 4} more treatments`}
                        </li>
                      )}
                    </ul>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Doctors Popup */}
      {selectedService && selectedService.name && (
        <div className="service-popup-overlay" onClick={closeServicePopup}>
          <div className="service-popup" onClick={(e) => e.stopPropagation()}>
            <button className="service-popup-close-btn" onClick={closeServicePopup}>×</button>
            
            <div className="service-popup-content">
              <div className="service-popup-header">
                <div className="service-popup-icon">
                  {selectedService.iconImage ? (
                    <img 
                      src={selectedService.iconImage} 
                      alt={selectedService.name?.en || selectedService.name || 'Service'}
                      className="service-popup-icon-image"
                    />
                  ) : (
                    <span className="service-popup-icon-text">{selectedService.icon}</span>
                  )}
                </div>
                <h3 className="service-popup-name">{selectedService.name && selectedService.name[currentLanguage] ? selectedService.name[currentLanguage] : selectedService.name?.en || 'Service'}</h3>
                <p className="service-popup-description">{selectedService.description && selectedService.description[currentLanguage] ? selectedService.description[currentLanguage] : selectedService.description?.en || 'Description not available'}</p>
                
                {selectedService.provider && selectedService.provider[currentLanguage] && (
                  <div className="service-popup-provider">
                    <h4 className="provider-title">{currentLanguage === 'ar' ? 'المقدم:' : 'Provided by:'}</h4>
                    <p className="provider-text">{selectedService.provider[currentLanguage]}</p>
                  </div>
                )}
                
                {selectedService.treatments && selectedService.treatments[currentLanguage] && Array.isArray(selectedService.treatments[currentLanguage]) && (
                  <div className="service-popup-treatments">
                    <h4 className="treatments-title">{currentLanguage === 'ar' ? 'العلاجات المشمولة:' : 'Included Treatments:'}</h4>
                    <ul className="treatments-list">
                      {selectedService.treatments[currentLanguage].map((treatment, index) => (
                        <li key={index} className="treatment-item">
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Doctors who perform this service */}
              <div className="service-popup-doctors">
                <h4 className="doctors-title">{currentLanguage === 'ar' ? 'الأطباء الذين يقدمون هذه الخدمة:' : 'Doctors who perform this service:'}</h4>
                <div className="doctors-grid">
                  {selectedService.doctors && Array.isArray(selectedService.doctors) && selectedService.doctors.length > 0 ? (
                    selectedService.doctors.map((doctor, index) => {
                      return (
                        <div key={index} className="doctor-card-new">
                          <div className="doctor-image-new">
                            <img 
                              src={doctor.image || '/default-doctor.jpg'} 
                              alt={doctor.name && doctor.name[currentLanguage] ? doctor.name[currentLanguage] : 'Doctor'}
                              className="doctor-avatar-new"
                              onError={(e) => {
                                e.target.src = '/default-doctor.jpg';
                              }}
                            />
                          </div>
                          <div className="doctor-content-new">
                            <h5 className="doctor-name-new" style={{color: '#D99A3A', fontSize: '1.2rem', fontWeight: '700', display: 'block', visibility: 'visible', opacity: '1'}}>
                              {doctor.name && doctor.name[currentLanguage] ? doctor.name[currentLanguage] : 'Doctor Name'}
                            </h5>
                            <p className="doctor-specialty-new" style={{color: '#E8A84A', fontSize: '1rem', fontWeight: '500', display: 'block', visibility: 'visible', opacity: '1'}}>
                              {doctor.specialty && doctor.specialty[currentLanguage] ? doctor.specialty[currentLanguage] : 'Specialty'}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="no-doctors">{currentLanguage === 'ar' ? 'لا توجد معلومات الأطباء متاحة' : 'No doctor information available'}</p>
                  )}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Services;
