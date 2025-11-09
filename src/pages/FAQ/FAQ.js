import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './FAQ.css';

const FAQ = () => {
  const { language } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: {
        en: "What dental services do you offer?",
        ar: "ما هي خدمات طب الأسنان التي تقدمونها؟"
      },
      answer: {
        en: "We offer a comprehensive range of dental services including dental implants, Hollywood smile, porcelain veneers, zircon crowns, teeth whitening, cosmetic fillings, root canal treatment, orthodontics (braces), dental cleaning & polishing, gum treatment, dental bridges, dentures, smile makeover, pediatric dentistry, and tooth extraction. Our experienced team uses modern technology to provide high-quality dental care.",
        ar: "نقدم مجموعة شاملة من خدمات طب الأسنان تشمل زراعة الأسنان وابتسامة هوليوود وقشور خزفية وتيجان زركون وتبييض الأسنان وحشوات تجميلية وعلاج جذور الأسنان وتقويم الأسنان وتنظيف وتلميع الأسنان وعلاج اللثة وجسور الأسنان وأطقم الأسنان وتجميل الابتسامة وطب أسنان الأطفال وخلع الأسنان. يستخدم فريقنا ذو الخبرة التكنولوجيا الحديثة لتقديم رعاية أسنان عالية الجودة."
      }
    },
    {
      id: 2,
      question: {
        en: "How long does a dental appointment take?",
        ar: "كم تستغرق موعد طب الأسنان؟"
      },
      answer: {
        en: "The duration of a dental appointment varies depending on the type of treatment. A routine check-up and cleaning typically takes 30-45 minutes, while more complex procedures like dental implants or cosmetic treatments may take 1-2 hours. Your dentist will provide an estimated time during your consultation.",
        ar: "تختلف مدة موعد طب الأسنان حسب نوع العلاج. عادة ما يستغرق الفحص الروتيني والتنظيف 30-45 دقيقة، بينما قد تستغرق الإجراءات الأكثر تعقيداً مثل زراعة الأسنان أو العلاجات التجميلية ساعة إلى ساعتين. سيقدم لك طبيب الأسنان وقتاً تقديرياً خلال الاستشارة."
      }
    },
    {
      id: 3,
      question: {
        en: "Do I need a referral to visit your dental clinic?",
        ar: "هل أحتاج إلى إحالة لزيارة عيادة الأسنان؟"
      },
      answer: {
        en: "No referral is needed to visit our dental clinic. You can schedule a consultation directly with us. However, if you have dental insurance, some plans may require a referral for certain procedures. Our staff can help you verify your insurance coverage and requirements.",
        ar: "لا حاجة لإحالة لزيارة عيادة الأسنان. يمكنك تحديد موعد استشارة مباشرة معنا. ومع ذلك، إذا كان لديك تأمين أسنان، قد تتطلب بعض الخطط إحالة لإجراءات معينة. يمكن لموظفينا مساعدتك في التحقق من تغطية التأمين والمتطلبات."
      }
    },
    {
      id: 4,
      question: {
        en: "How should I prepare for my dental appointment?",
        ar: "كيف يجب أن أستعد لموعد طب الأسنان؟"
      },
      answer: {
        en: "Before your appointment, brush and floss your teeth, bring a list of any medications you're taking, and arrive 15 minutes early to complete any necessary paperwork. If you have dental X-rays from another clinic, bring them along. For cosmetic consultations, you may want to bring photos of smiles you admire.",
        ar: "قبل موعدك، نظف أسنانك بالفرشاة والخيط، وأحضر قائمة بأي أدوية تتناولها، ووصل قبل 15 دقيقة لإكمال أي أوراق ضرورية. إذا كان لديك أشعة سينية للأسنان من عيادة أخرى، أحضرها معك. للاستشارات التجميلية، قد ترغب في إحضار صور لابتسامات تعجبك."
      }
    },
    {
      id: 5,
      question: {
        en: "How many visits will I need for my treatment?",
        ar: "كم عدد الزيارات التي سأحتاجها للعلاج؟"
      },
      answer: {
        en: "The number of visits depends on your specific treatment. Simple procedures like cleanings or fillings may require just one visit, while complex treatments like dental implants or orthodontics require multiple visits over several months. Your dentist will create a personalized treatment plan and explain the timeline during your consultation.",
        ar: "يعتمد عدد الزيارات على علاجك المحدد. قد تتطلب الإجراءات البسيطة مثل التنظيف أو الحشوات زيارة واحدة فقط، بينما تتطلب العلاجات المعقدة مثل زراعة الأسنان أو تقويم الأسنان عدة زيارات على مدى عدة أشهر. سيضع طبيب الأسنان خطة علاج مخصصة ويشرح الجدول الزمني خلال الاستشارة."
      }
    },
    {
      id: 6,
      question: {
        en: "Will dental treatment be painful?",
        ar: "هل سيكون علاج الأسنان مؤلماً؟"
      },
      answer: {
        en: "We prioritize your comfort and use modern techniques to minimize pain. Most procedures are performed with local anesthesia, so you should feel little to no pain during treatment. Some procedures may cause mild discomfort afterward, which can be managed with over-the-counter pain relievers. We use gentle techniques and ensure you're comfortable throughout your visit.",
        ar: "نولي أولوية لراحتك ونستخدم تقنيات حديثة لتقليل الألم. يتم إجراء معظم الإجراءات تحت التخدير الموضعي، لذا يجب ألا تشعر بألم أو ألم قليل أثناء العلاج. قد تسبب بعض الإجراءات انزعاجاً خفيفاً بعد ذلك، يمكن إدارته بمسكنات الألم التي لا تستلزم وصفة طبية. نستخدم تقنيات لطيفة ونتأكد من راحتك طوال زيارتك."
      }
    },
    {
      id: 7,
      question: {
        en: "What dental problems can you treat?",
        ar: "ما هي مشاكل الأسنان التي يمكنكم علاجها؟"
      },
      answer: {
        en: "We treat a comprehensive range of dental issues including tooth decay, gum disease, missing teeth, misaligned teeth, discolored teeth, cracked or broken teeth, root canal problems, and oral infections. We also provide preventive care, cosmetic enhancements, and full mouth rehabilitation. Our team specializes in implants, cosmetic dentistry, pediatric care, and oral surgery.",
        ar: "نعالج مجموعة شاملة من مشاكل الأسنان بما في ذلك تسوس الأسنان وأمراض اللثة والأسنان المفقودة والأسنان الملتوية والأسنان المتغيرة اللون والأسنان المتشققة أو المكسورة ومشاكل قناة الجذر والتهابات الفم. نقدم أيضاً رعاية وقائية وتحسينات تجميلية وإعادة تأهيل الفم الكامل. يتخصص فريقنا في الزراعة وطب الأسنان التجميلي ورعاية الأطفال وجراحة الفم."
      }
    },
    {
      id: 8,
      question: {
        en: "Do you accept dental insurance?",
        ar: "هل تقبلون تأمين الأسنان؟"
      },
      answer: {
        en: "Yes, we work with most major dental insurance providers. We can help you verify your coverage and benefits before your visit. Please bring your insurance card to your appointment. Our staff will assist you with insurance verification, pre-authorizations, and billing questions to make the process as smooth as possible.",
        ar: "نعم، نعمل مع معظم شركات تأمين الأسنان الرئيسية. يمكننا مساعدتك في التحقق من تغطيتك ومزاياك قبل زيارتك. يرجى إحضار بطاقة التأمين إلى موعدك. سيساعدك موظفونا في التحقق من التأمين والتفويضات المسبقة وأسئلة الفواتير لجعل العملية سلسة قدر الإمكان."
      }
    },
    {
      id: 9,
      question: {
        en: "How can I maintain good oral health at home?",
        ar: "كيف يمكنني الحفاظ على صحة الفم الجيدة في المنزل؟"
      },
      answer: {
        en: "Maintain good oral health by brushing your teeth twice daily with fluoride toothpaste, flossing daily, using mouthwash, eating a balanced diet, limiting sugary snacks, and avoiding tobacco. Regular dental check-ups every 6 months are also essential. Our team will provide personalized oral hygiene instructions during your visit.",
        ar: "حافظ على صحة الفم الجيدة بتنظيف أسنانك مرتين يومياً بمعجون أسنان يحتوي على الفلورايد، واستخدام الخيط يومياً، واستخدام غسول الفم، وتناول نظام غذائي متوازن، والحد من الوجبات الخفيفة السكرية، وتجنب التبغ. فحوصات الأسنان المنتظمة كل 6 أشهر ضرورية أيضاً. سيقدم فريقنا تعليمات نظافة الفم المخصصة خلال زيارتك."
      }
    },
    {
      id: 10,
      question: {
        en: "How do I schedule a dental appointment?",
        ar: "كيف يمكنني تحديد موعد لطب الأسنان؟"
      },
      answer: {
        en: "You can schedule an appointment by calling us at +973 1700 1160, sending a WhatsApp message to +973 3883 1160, or visiting our clinic at Villa 160, Road 66, Block 362, New zinj, Bahrain. We're open Saturday to Thursday from 9 AM to 9 PM. You can also book online through our website or contact us through our social media channels.",
        ar: "يمكنك تحديد موعد بالاتصال بنا على +973 1700 1160 أو إرسال رسالة واتساب إلى +973 3883 1160 أو زيارة عيادتنا في فيلا 160، شارع 66، مجمع 362، الزنج الجديدة، البحرين. نحن مفتوحون من السبت إلى الخميس من 9 صباحاً إلى 9 مساءً. يمكنك أيضاً الحجز عبر الإنترنت من خلال موقعنا أو التواصل معنا عبر قنوات وسائل التواصل الاجتماعي."
      }
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <div className="faq-header">
          <h1 className="faq-title">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h1>
          <p className="faq-subtitle">
            {language === 'ar' 
              ? 'إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا وعلاجاتنا'
              : 'Answers to the most common questions about our services and treatments'
            }
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqData.map((faq) => (
              <div key={faq.id} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="faq-question-text">
                    {faq.question[language]}
                  </h3>
                  <span className={`faq-icon ${openFAQ === faq.id ? 'open' : ''}`}>
                    {language === 'ar' ? '−' : '+'}
                  </span>
                </div>
                <div className={`faq-answer ${openFAQ === faq.id ? 'open' : ''}`}>
                  <p className="faq-answer-text">
                    {faq.answer[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="faq-contact">
          <h3 className="faq-contact-title">
            {language === 'ar' ? 'هل لديك سؤال آخر؟' : 'Have Another Question?'}
          </h3>
          <p className="faq-contact-text">
            {language === 'ar' 
              ? 'لا تتردد في التواصل معنا للحصول على إجابات على أسئلتك'
              : "Don't hesitate to contact us for answers to your questions"
            }
          </p>
          <div className="faq-contact-buttons">
            <a href="tel:+97317001160" className="faq-contact-btn primary">
              {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
            </a>
            <a href="https://wa.me/97338831160" className="faq-contact-btn secondary">
              {language === 'ar' ? 'واتساب' : 'WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
