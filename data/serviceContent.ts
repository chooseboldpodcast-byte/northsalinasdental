import { ServiceContentMap } from '@/types/serviceTypes';

export const serviceContent: any = {
  cleaning: {
    en: {
      title: "Cleaning & Prevention in Salinas, CA",
      description: "Regular cleanings and preventive care are the foundation of excellent oral health. Our proactive approach helps you avoid costly procedures while keeping your smile healthy and bright for years to come. We use state-of-the-art technology to detect issues early and provide gentle, thorough cleanings that leave your teeth feeling fresh.",
      treatmentsTitle: "Our Preventive Services Include:",
      treatments: [
        "Professional teeth cleaning and polishing",
        "Comprehensive oral examinations",
        "Digital X-rays with minimal radiation",
        "Fluoride treatments for cavity prevention",
        "Dental sealants for children and adults",
        "Oral cancer screenings",
        "Periodontal (gum) disease evaluation and treatment",
        "Customized home care recommendations"
      ],
      benefitsTitle: "Benefits of Regular Preventive Care:",
      benefits: [
        "Early detection of dental problems before they become serious",
        "Reduced risk of cavities, gum disease, and tooth loss",
        "Fresh breath and a brighter, cleaner smile",
        "Lower long-term dental costs by preventing major issues",
        "Improved overall health (oral health is linked to heart health, diabetes, and more)"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "How often should I get my teeth cleaned?",
          answer: "Most patients benefit from professional cleanings every 6 months. However, if you have gum disease or other risk factors, we may recommend cleanings every 3-4 months."
        },
        {
          question: "Are dental X-rays safe?",
          answer: "Yes! We use digital X-rays that emit up to 90% less radiation than traditional film X-rays. They're an essential tool for detecting problems that aren't visible during a visual exam."
        },
        {
          question: "Do cleanings hurt?",
          answer: "Most patients find cleanings comfortable. If you have sensitive teeth or gum disease, we can use numbing gel or other comfort measures to ensure a pain-free experience."
        },
        {
          question: "What's the difference between a regular cleaning and deep cleaning?",
          answer: "A regular cleaning focuses on the tooth surfaces above the gum line. A deep cleaning (scaling and root planing) is needed when gum disease has caused pockets to form, requiring cleaning below the gum line."
        }
      ],
      ctaButton: "Schedule Your Cleaning",
      image: "/images/services/cleaning-detail.jpg"
      // Suggested image: https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800 (Dental cleaning)
    },
    es: {
      title: "Limpieza y Prevención en Salinas, CA",
      description: "Las limpiezas regulares y el cuidado preventivo son la base de una excelente salud bucal. Nuestro enfoque proactivo le ayuda a evitar procedimientos costosos mientras mantiene su sonrisa saludable y brillante durante años. Utilizamos tecnología de vanguardia para detectar problemas temprano y proporcionar limpiezas suaves y exhaustivas que dejan sus dientes frescos.",
      treatmentsTitle: "Nuestros Servicios Preventivos Incluyen:",
      treatments: [
        "Limpieza y pulido profesional de dientes",
        "Exámenes orales completos",
        "Radiografías digitales con radiación mínima",
        "Tratamientos de flúor para prevención de caries",
        "Selladores dentales para niños y adultos",
        "Detección de cáncer oral",
        "Evaluación y tratamiento de enfermedad periodontal (encías)",
        "Recomendaciones personalizadas de cuidado en casa"
      ],
      benefitsTitle: "Beneficios del Cuidado Preventivo Regular:",
      benefits: [
        "Detección temprana de problemas dentales antes de que se vuelvan serios",
        "Riesgo reducido de caries, enfermedad de encías y pérdida de dientes",
        "Aliento fresco y una sonrisa más brillante y limpia",
        "Costos dentales a largo plazo más bajos al prevenir problemas mayores",
        "Mejor salud general (la salud bucal está relacionada con la salud cardíaca, diabetes y más)"
      ],
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          question: "¿Con qué frecuencia debo limpiarme los dientes?",
          answer: "La mayoría de los pacientes se benefician de limpiezas profesionales cada 6 meses. Sin embargo, si tiene enfermedad de las encías u otros factores de riesgo, podemos recomendar limpiezas cada 3-4 meses."
        },
        {
          question: "¿Son seguras las radiografías dentales?",
          answer: "¡Sí! Utilizamos radiografías digitales que emiten hasta un 90% menos de radiación que las radiografías tradicionales de película. Son una herramienta esencial para detectar problemas que no son visibles durante un examen visual."
        },
        {
          question: "¿Duelen las limpiezas?",
          answer: "La mayoría de los pacientes encuentran las limpiezas cómodas. Si tiene dientes sensibles o enfermedad de las encías, podemos usar gel anestésico u otras medidas de comodidad para garantizar una experiencia sin dolor."
        },
        {
          question: "¿Cuál es la diferencia entre una limpieza regular y una limpieza profunda?",
          answer: "Una limpieza regular se enfoca en las superficies de los dientes por encima de la línea de las encías. Una limpieza profunda (raspado y alisado radicular) es necesaria cuando la enfermedad de las encías ha causado que se formen bolsas, requiriendo limpieza debajo de la línea de las encías."
        }
      ],
      ctaButton: "Programe Su Limpieza",
      image: "/images/services/cleaning-detail.jpg"
    }
  },

  family: {
    en: {
      title: "Family Dentistry in Salinas, CA",
      description: "From toddlers to grandparents, we provide comprehensive dental care for every member of your family. Our warm, welcoming environment makes dental visits comfortable and stress-free for patients of all ages. We believe in building lasting relationships with families and helping establish healthy dental habits that last a lifetime.",
      treatmentsTitle: "Family Services We Provide:",
      treatments: [
        "Pediatric dentistry for children of all ages",
        "Routine checkups and cleanings for adults",
        "Dental care for seniors and special needs patients",
        "Sports mouthguards and night guards",
        "Cavity fillings with tooth-colored materials",
        "Root canal therapy",
        "Tooth extractions when necessary",
        "Emergency dental care"
      ],
      benefitsTitle: "Why Choose Family Dentistry:",
      benefits: [
        "Convenient care for the whole family in one location",
        "Build trust with a dentist who knows your family's dental history",
        "Teach children good oral hygiene habits early",
        "Flexible scheduling for busy families",
        "Comfortable, kid-friendly environment that reduces anxiety"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "When should I bring my child in for their first dental visit?",
          answer: "We recommend scheduling your child's first visit by their first birthday or within 6 months of their first tooth erupting. Early visits help children become comfortable with the dentist and allow us to catch any developmental issues early."
        },
        {
          question: "Do you accept patients of all ages?",
          answer: "Yes! We provide care for patients from toddlers to seniors. Our team is trained to address the unique dental needs of every age group."
        },
        {
          question: "How can I help my child feel comfortable at the dentist?",
          answer: "Talk positively about dental visits at home, read books about going to the dentist, and avoid using the dentist as a threat. Our team is experienced in working with anxious children and will take extra time to make them feel safe and comfortable."
        },
        {
          question: "Do you offer sedation for children?",
          answer: "Yes, we offer safe sedation options for children who experience severe anxiety or need extensive dental work. We'll discuss the best option for your child's needs and comfort level."
        }
      ],
      ctaButton: "Book a Family Appointment",
      image: "/images/services/family-detail.jpg"
      // Suggested image: https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800 (Family at dentist)
    },
    es: {
      title: "Odontología Familiar en Salinas, CA",
      description: "Desde niños pequeños hasta abuelos, brindamos atención dental integral para cada miembro de su familia. Nuestro ambiente cálido y acogedor hace que las visitas dentales sean cómodas y sin estrés para pacientes de todas las edades. Creemos en construir relaciones duraderas con las familias y ayudar a establecer hábitos dentales saludables que duren toda la vida.",
      treatmentsTitle: "Servicios Familiares que Proporcionamos:",
      treatments: [
        "Odontología pediátrica para niños de todas las edades",
        "Chequeos de rutina y limpiezas para adultos",
        "Cuidado dental para personas mayores y pacientes con necesidades especiales",
        "Protectores bucales deportivos y guardas nocturnas",
        "Empastes de caries con materiales del color del diente",
        "Terapia de conducto radicular",
        "Extracciones de dientes cuando sea necesario",
        "Atención dental de emergencia"
      ],
      benefitsTitle: "Por Qué Elegir Odontología Familiar:",
      benefits: [
        "Atención conveniente para toda la familia en un solo lugar",
        "Construya confianza con un dentista que conoce el historial dental de su familia",
        "Enseñe buenos hábitos de higiene oral a los niños temprano",
        "Programación flexible para familias ocupadas",
        "Ambiente cómodo y amigable para niños que reduce la ansiedad"
      ],
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          question: "¿Cuándo debo traer a mi hijo para su primera visita dental?",
          answer: "Recomendamos programar la primera visita de su hijo antes de su primer cumpleaños o dentro de los 6 meses de la erupción de su primer diente. Las visitas tempranas ayudan a los niños a sentirse cómodos con el dentista y nos permiten detectar cualquier problema de desarrollo temprano."
        },
        {
          question: "¿Aceptan pacientes de todas las edades?",
          answer: "¡Sí! Brindamos atención a pacientes desde niños pequeños hasta personas mayores. Nuestro equipo está capacitado para abordar las necesidades dentales únicas de cada grupo de edad."
        },
        {
          question: "¿Cómo puedo ayudar a mi hijo a sentirse cómodo en el dentista?",
          answer: "Hable positivamente sobre las visitas dentales en casa, lea libros sobre ir al dentista y evite usar al dentista como una amenaza. Nuestro equipo tiene experiencia trabajando con niños ansiosos y se tomará el tiempo extra para que se sientan seguros y cómodos."
        },
        {
          question: "¿Ofrecen sedación para niños?",
          answer: "Sí, ofrecemos opciones de sedación seguras para niños que experimentan ansiedad severa o necesitan trabajo dental extenso. Discutiremos la mejor opción para las necesidades y el nivel de comodidad de su hijo."
        }
      ],
      ctaButton: "Reserve una Cita Familiar",
      image: "/images/services/family-detail.jpg"
    }
  },

  cosmetic: {
    en: {
      title: "Cosmetic Dentistry in Salinas, CA",
      description: "Your smile is one of your most powerful assets. Whether you want whiter teeth, a straighter appearance, or a complete smile makeover, our cosmetic treatments help you feel confident in every interaction. We combine artistry with advanced dental techniques to create naturally beautiful results that enhance your unique features.",
      treatmentsTitle: "Cosmetic Treatments We Offer:",
      treatments: [
        "Professional teeth whitening (in-office and take-home)",
        "Porcelain veneers for dramatic transformations",
        "Dental bonding for chips and gaps",
        "Gum contouring for a balanced smile",
        "Smile makeovers combining multiple treatments",
        "Clear aligners for discreet straightening",
        "Tooth-colored fillings that blend seamlessly",
        "Crown lengthening procedures"
      ],
      benefitsTitle: "Benefits of Cosmetic Dentistry:",
      benefits: [
        "Boost your confidence and self-esteem",
        "Make a positive first impression in personal and professional settings",
        "Look younger with a brighter, more vibrant smile",
        "Improve facial symmetry and aesthetics",
        "Long-lasting results with proper care"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "How long does teeth whitening last?",
          answer: "Professional whitening can last 1-3 years depending on your habits. Avoiding staining foods and beverages (coffee, red wine, tobacco) and maintaining good oral hygiene helps results last longer."
        },
        {
          question: "Are veneers permanent?",
          answer: "Veneers typically last 10-15 years with proper care. While they're considered a permanent treatment because a small amount of enamel is removed, they can be replaced when needed."
        },
        {
          question: "Is cosmetic dentistry painful?",
          answer: "Most cosmetic procedures are minimally invasive and cause little to no discomfort. We use local anesthesia when needed and offer sedation options for anxious patients."
        },
        {
          question: "How much does a smile makeover cost?",
          answer: "The cost varies based on which treatments you need and choose. During your consultation, we'll create a personalized treatment plan with transparent pricing. We also offer financing options to make your dream smile affordable."
        }
      ],
      ctaButton: "Get Your Dream Smile",
      image: "/images/services/cosmetic-detail.jpg"
      // Suggested image: https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800 (Beautiful smile)
    },
    es: {
      title: "Odontología Cosmética en Salinas, CA",
      description: "Su sonrisa es uno de sus activos más poderosos. Ya sea que desee dientes más blancos, una apariencia más recta o una transformación completa de la sonrisa, nuestros tratamientos cosméticos le ayudan a sentirse seguro en cada interacción. Combinamos arte con técnicas dentales avanzadas para crear resultados naturalmente hermosos que realzan sus características únicas.",
      treatmentsTitle: "Tratamientos Cosméticos que Ofrecemos:",
      treatments: [
        "Blanqueamiento dental profesional (en consultorio y para llevar a casa)",
        "Carillas de porcelana para transformaciones dramáticas",
        "Adhesión dental para astillas y espacios",
        "Contorneado de encías para una sonrisa equilibrada",
        "Transformaciones de sonrisa combinando múltiples tratamientos",
        "Alineadores transparentes para enderezamiento discreto",
        "Empastes del color del diente que se mezclan sin problemas",
        "Procedimientos de alargamiento de corona"
      ],
      benefitsTitle: "Beneficios de la Odontología Cosmética:",
      benefits: [
        "Aumente su confianza y autoestima",
        "Cause una primera impresión positiva en entornos personales y profesionales",
        "Luzca más joven con una sonrisa más brillante y vibrante",
        "Mejore la simetría facial y la estética",
        "Resultados duraderos con el cuidado adecuado"
      ],
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          question: "¿Cuánto dura el blanqueamiento dental?",
          answer: "El blanqueamiento profesional puede durar de 1 a 3 años dependiendo de sus hábitos. Evitar alimentos y bebidas que manchan (café, vino tinto, tabaco) y mantener una buena higiene oral ayuda a que los resultados duren más."
        },
        {
          question: "¿Son permanentes las carillas?",
          answer: "Las carillas típicamente duran de 10 a 15 años con el cuidado adecuado. Aunque se consideran un tratamiento permanente porque se elimina una pequeña cantidad de esmalte, pueden reemplazarse cuando sea necesario."
        },
        {
          question: "¿Es dolorosa la odontología cosmética?",
          answer: "La mayoría de los procedimientos cosméticos son mínimamente invasivos y causan poca o ninguna molestia. Usamos anestesia local cuando es necesario y ofrecemos opciones de sedación para pacientes ansiosos."
        },
        {
          question: "¿Cuánto cuesta una transformación de sonrisa?",
          answer: "El costo varía según los tratamientos que necesite y elija. Durante su consulta, crearemos un plan de tratamiento personalizado con precios transparentes. También ofrecemos opciones de financiamiento para hacer que su sonrisa soñada sea asequible."
        }
      ],
      ctaButton: "Obtenga Su Sonrisa Soñada",
      image: "/images/services/cosmetic-detail.jpg"
    }
  },

  replacement: {
    en: {
      title: "Tooth Replacement in Salinas, CA",
      description: "Missing teeth affect both function and appearance. We offer advanced solutions including dental implants, bridges, and dentures to restore your complete smile and ability to eat, speak, and laugh without hesitation. Our tooth replacement options are designed to look, feel, and function just like your natural teeth.",
      treatmentsTitle: "Replacement Options We Provide:",
      treatments: [
        "Dental implants (single tooth, multiple teeth, or full mouth)",
        "Implant-supported dentures for superior stability",
        "Traditional and partial dentures",
        "Fixed dental bridges",
        "All-on-4 dental implants",
        "Implant-retained crowns",
        "Bone grafting for implant preparation",
        "Same-day tooth replacement options"
      ],
      benefitsTitle: "Benefits of Tooth Replacement:",
      benefits: [
        "Restore your ability to chew and speak properly",
        "Prevent bone loss and facial sagging",
        "Maintain alignment of surrounding teeth",
        "Regain confidence in your smile and appearance",
        "Improve nutrition by being able to eat all foods comfortably"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "What's the difference between implants, bridges, and dentures?",
          answer: "Dental implants are titanium posts surgically placed in your jawbone that act like tooth roots. Bridges are fixed restorations that use adjacent teeth for support. Dentures are removable replacements for missing teeth. Implants offer the most natural feel and help preserve bone, while bridges and dentures are less invasive options."
        },
        {
          question: "How long do dental implants last?",
          answer: "With proper care, dental implants can last 25 years or even a lifetime. The crown attached to the implant may need replacement after 10-15 years due to normal wear."
        },
        {
          question: "Am I a candidate for dental implants?",
          answer: "Most people with good overall health and adequate bone density are candidates for implants. During your consultation, we'll evaluate your bone structure, oral health, and medical history to determine if implants are right for you."
        },
        {
          question: "How long does the implant process take?",
          answer: "The complete implant process typically takes 3-6 months. This includes healing time for the implant to fuse with your bone (osseointegration). We can provide temporary teeth during this period so you're never without a complete smile."
        }
      ],
      ctaButton: "Restore Your Smile",
      image: "/images/services/replacement-detail.jpg"
      // Suggested image: https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800 (Dental implant)
    },
    es: {
      title: "Reemplazo de Dientes en Salinas, CA",
      description: "Los dientes faltantes afectan tanto la función como la apariencia. Ofrecemos soluciones avanzadas que incluyen implantes dentales, puentes y dentaduras para restaurar su sonrisa completa y su capacidad de comer, hablar y reír sin dudarlo. Nuestras opciones de reemplazo de dientes están diseñadas para verse, sentirse y funcionar como sus dientes naturales.",
      treatmentsTitle: "Opciones de Reemplazo que Proporcionamos:",
      treatments: [
        "Implantes dentales (un diente, múltiples dientes o boca completa)",
        "Dentaduras soportadas por implantes para estabilidad superior",
        "Dentaduras tradicionales y parciales",
        "Puentes dentales fijos",
        "Implantes dentales All-on-4",
        "Coronas retenidas por implantes",
        "Injerto óseo para preparación de implantes",
        "Opciones de reemplazo de dientes el mismo día"
      ],
      benefitsTitle: "Beneficios del Reemplazo de Dientes:",
      benefits: [
        "Restaure su capacidad de masticar y hablar correctamente",
        "Prevenga la pérdida ósea y el hundimiento facial",
        "Mantenga la alineación de los dientes circundantes",
        "Recupere la confianza en su sonrisa y apariencia",
        "Mejore la nutrición al poder comer todos los alimentos cómodamente"
      ],
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          question: "¿Cuál es la diferencia entre implantes, puentes y dentaduras?",
          answer: "Los implantes dentales son postes de titanio colocados quirúrgicamente en su mandíbula que actúan como raíces de dientes. Los puentes son restauraciones fijas que usan dientes adyacentes para apoyo. Las dentaduras son reemplazos removibles para dientes faltantes. Los implantes ofrecen la sensación más natural y ayudan a preservar el hueso, mientras que los puentes y dentaduras son opciones menos invasivas."
        },
        {
          question: "¿Cuánto duran los implantes dentales?",
          answer: "Con el cuidado adecuado, los implantes dentales pueden durar 25 años o incluso toda la vida. La corona adjunta al implante puede necesitar reemplazo después de 10-15 años debido al desgaste normal."
        },
        {
          question: "¿Soy candidato para implantes dentales?",
          answer: "La mayoría de las personas con buena salud general y densidad ósea adecuada son candidatos para implantes. Durante su consulta, evaluaremos su estructura ósea, salud oral e historial médico para determinar si los implantes son adecuados para usted."
        },
        {
          question: "¿Cuánto tiempo toma el proceso de implante?",
          answer: "El proceso completo de implante típicamente toma de 3 a 6 meses. Esto incluye tiempo de curación para que el implante se fusione con su hueso (osteointegración). Podemos proporcionar dientes temporales durante este período para que nunca esté sin una sonrisa completa."
        }
      ],
      ctaButton: "Restaure Su Sonrisa",
      image: "/images/services/replacement-detail.jpg"
    }
  },

  extraction: {
    en: {
      title: "Extraction & Preservation in Salinas, CA",
      description: "Sometimes removing a tooth is necessary for your overall oral health. From wisdom teeth to overcrowded teeth, we perform extractions with precision and care, always prioritizing bone preservation for future treatment options. Our gentle techniques and sedation options ensure a comfortable experience.",
      treatmentsTitle: "Extraction Services Include:",
      treatments: [
        "Wisdom teeth removal (simple and surgical)",
        "General tooth extractions",
        "Socket preservation to maintain bone volume",
        "Emergency tooth extraction",
        "Pre-orthodontic extractions",
        "Removal of damaged or infected teeth",
        "Bone grafting after extraction",
        "Immediate tooth replacement planning"
      ],
      benefitsTitle: "Why Choose Us for Extractions:",
      benefits: [
        "Experienced in gentle, minimally traumatic techniques",
        "Sedation options for anxiety-free procedures",
        "Socket preservation to maintain bone for future implants",
        "Same-day emergency extractions available",
        "Comprehensive aftercare instructions and support"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "When do wisdom teeth need to be removed?",
          answer: "Wisdom teeth should be removed if they're impacted, causing pain, crowding other teeth, or at risk for infection or cysts. Many dentists recommend removal in late teens or early twenties before roots fully develop."
        },
        {
          question: "How long is recovery after an extraction?",
          answer: "Most people recover from simple extractions in 3-5 days. Surgical extractions (like impacted wisdom teeth) may take 1-2 weeks. We'll provide detailed aftercare instructions to ensure smooth healing."
        },
        {
          question: "Will I need sedation for an extraction?",
          answer: "Local anesthesia is typically sufficient for simple extractions. For surgical extractions or anxious patients, we offer sedation options including nitrous oxide, oral sedation, or IV sedation."
        },
        {
          question: "What is socket preservation and why is it important?",
          answer: "Socket preservation involves placing bone graft material in the empty socket after extraction. This maintains bone volume and density, making future implant placement easier and more successful. Without preservation, you can lose up to 50% of bone width within the first year."
        }
      ],
      ctaButton: "Schedule Consultation",
      image: "/images/services/extraction-detail.jpg"
      // Suggested image: https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800 (Dental procedure)
    },
    es: {
      title: "Extracción y Preservación en Salinas, CA",
      description: "A veces es necesario extraer un diente para su salud bucal general. Desde muelas del juicio hasta dientes apiñados, realizamos extracciones con precisión y cuidado, siempre priorizando la preservación ósea para futuras opciones de tratamiento. Nuestras técnicas suaves y opciones de sedación aseguran una experiencia cómoda.",
      treatmentsTitle: "Los Servicios de Extracción Incluyen:",
      treatments: [
        "Extracción de muelas del juicio (simple y quirúrgica)",
        "Extracciones dentales generales",
        "Preservación de alvéolo para mantener el volumen óseo",
        "Extracción dental de emergencia",
        "Extracciones pre-ortodóncicas",
        "Extracción de dientes dañados o infectados",
        "Injerto óseo después de la extracción",
        "Planificación de reemplazo dental inmediato"
      ],
      benefitsTitle: "Por Qué Elegirnos para Extracciones:",
      benefits: [
        "Experiencia en técnicas suaves y mínimamente traumáticas",
        "Opciones de sedación para procedimientos sin ansiedad",
        "Preservación de alvéolo para mantener hueso para futuros implantes",
        "Extracciones de emergencia el mismo día disponibles",
        "Instrucciones y apoyo integral de cuidado posterior"
      ],
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          question: "¿Cuándo necesitan extraerse las muelas del juicio?",
          answer: "Las muelas del juicio deben extraerse si están impactadas, causan dolor, apiñan otros dientes, o están en riesgo de infección o quistes. Muchos dentistas recomiendan la extracción a finales de la adolescencia o principios de los veinte antes de que las raíces se desarrollen completamente."
        },
        {
          question: "¿Cuánto tiempo es la recuperación después de una extracción?",
          answer: "La mayoría de las personas se recuperan de extracciones simples en 3-5 días. Las extracciones quirúrgicas (como muelas del juicio impactadas) pueden tomar 1-2 semanas. Proporcionaremos instrucciones detalladas de cuidado posterior para asegurar una curación suave."
        },
        {
          question: "¿Necesitaré sedación para una extracción?",
          answer: "La anestesia local es típicamente suficiente para extracciones simples. Para extracciones quirúrgicas o pacientes ansiosos, ofrecemos opciones de sedación incluyendo óxido nitroso, sedación oral o sedación IV."
        },
        {
          question: "¿Qué es la preservación de alvéolo y por qué es importante?",
          answer: "La preservación de alvéolo implica colocar material de injerto óseo en el alvéolo vacío después de la extracción. Esto mantiene el volumen y densidad ósea, haciendo que la colocación futura de implantes sea más fácil y exitosa. Sin preservación, puede perder hasta el 50% del ancho del hueso dentro del primer año."
        }
      ],
      ctaButton: "Programe Consulta",
      image: "/images/services/extraction-detail.jpg"
    }
  },

  veneers: {
    en: {
      title: "Porcelain Veneers in Salinas, CA",
      description: "Veneers offer an excellent way to enhance your smile while preserving most of your tooth's natural structure. These custom-crafted porcelain shells are designed to match the exact shape and contour of each tooth, providing a seamless, natural appearance. Whether you're dealing with chips, cracks, discoloration, or misshapen teeth, veneers can deliver the beautiful, confident smile you've always wanted.",
      treatmentsTitle: "Ideal Candidates for Veneers:",
      treatments: [
        "Misshapen teeth that need improved contour and symmetry",
        "Cracked or fractured teeth from injury or wear",
        "Chipped or broken teeth requiring restoration",
        "Worn teeth due to grinding or bruxism",
        "Discolored teeth that don't respond to whitening treatments",
        "Minor gaps or spacing between teeth",
        "Uneven or irregular tooth surfaces"
      ],
      benefitsTitle: "Benefits of Porcelain Veneers:",
      benefits: [
        "Durable and long-lasting with proper care—often 10-15 years or more",
        "Natural appearance that mimics real tooth enamel",
        "Stain-resistant porcelain maintains brightness over time",
        "Minimally invasive compared to crowns",
        "Customized to match your desired shade and shape"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "How long do veneers last?",
          answer: "With proper care and good oral hygiene, porcelain veneers typically last 10-15 years or longer. Avoiding habits like biting hard objects and wearing a night guard if you grind your teeth can help extend their lifespan."
        },
        {
          question: "What is the veneer procedure like?",
          answer: "The process typically requires two visits. During the first visit, we prepare your teeth by removing a thin layer of enamel and take precise impressions. Your custom veneers are then crafted in a dental laboratory. At your second visit, we bond the veneers to your teeth and make any final adjustments for a perfect fit."
        },
        {
          question: "Do veneers look natural?",
          answer: "Yes! Modern porcelain veneers are crafted to perfectly mimic natural tooth enamel, including its translucency and light-reflecting properties. We customize the shade, shape, and size to complement your facial features and create a naturally beautiful smile."
        },
        {
          question: "Are veneers right for me?",
          answer: "Veneers are an excellent option for many cosmetic concerns. During your consultation, we'll evaluate your oral health, discuss your goals, and determine if veneers are the best solution for achieving your ideal smile. Call us at 831.449.8363 to schedule your consultation."
        }
      ],
      ctaButton: "Schedule Your Consultation",
      image: "/images/services/veneers-detail.jpg"
    },
    es: {
      title: "Carillas de Porcelana en Salinas, CA",
      description: "Las carillas ofrecen una excelente manera de mejorar su sonrisa mientras preservan la mayor parte de la estructura natural de sus dientes. Estas láminas de porcelana personalizadas están diseñadas para coincidir exactamente con la forma y contorno de cada diente, proporcionando una apariencia natural y perfecta. Ya sea que tenga astillas, grietas, decoloración o dientes mal formados, las carillas pueden brindarle la sonrisa hermosa y segura que siempre ha deseado.",
      treatmentsTitle: "Candidatos Ideales para Carillas:",
      treatments: [
        "Dientes mal formados que necesitan mejor contorno y simetría",
        "Dientes agrietados o fracturados por lesión o desgaste",
        "Dientes astillados o rotos que requieren restauración",
        "Dientes desgastados debido al rechinar o bruxismo",
        "Dientes descoloridos que no responden a tratamientos de blanqueamiento",
        "Pequeños espacios o separaciones entre dientes",
        "Superficies dentales irregulares o desiguales"
      ],
      benefitsTitle: "Beneficios de las Carillas de Porcelana:",
      benefits: [
        "Duraderas y de larga duración con el cuidado adecuado—a menudo 10-15 años o más",
        "Apariencia natural que imita el esmalte dental real",
        "La porcelana resistente a manchas mantiene el brillo con el tiempo",
        "Mínimamente invasivas comparadas con las coronas",
        "Personalizadas para coincidir con el tono y forma deseados"
      ],
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          question: "¿Cuánto duran las carillas?",
          answer: "Con el cuidado adecuado y buena higiene oral, las carillas de porcelana típicamente duran de 10 a 15 años o más. Evitar hábitos como morder objetos duros y usar un protector nocturno si rechina los dientes puede ayudar a extender su vida útil."
        },
        {
          question: "¿Cómo es el procedimiento de carillas?",
          answer: "El proceso típicamente requiere dos visitas. Durante la primera visita, preparamos sus dientes removiendo una fina capa de esmalte y tomamos impresiones precisas. Sus carillas personalizadas se fabrican en un laboratorio dental. En su segunda visita, adherimos las carillas a sus dientes y hacemos los ajustes finales para un ajuste perfecto."
        },
        {
          question: "¿Las carillas se ven naturales?",
          answer: "¡Sí! Las carillas de porcelana modernas están diseñadas para imitar perfectamente el esmalte dental natural, incluyendo su translucidez y propiedades de reflexión de luz. Personalizamos el tono, forma y tamaño para complementar sus rasgos faciales y crear una sonrisa naturalmente hermosa."
        },
        {
          question: "¿Son las carillas adecuadas para mí?",
          answer: "Las carillas son una excelente opción para muchas preocupaciones cosméticas. Durante su consulta, evaluaremos su salud oral, discutiremos sus objetivos y determinaremos si las carillas son la mejor solución para lograr su sonrisa ideal. Llámenos al 831.449.8363 para programar su consulta."
        }
      ],
      ctaButton: "Programe Su Consulta",
      image: "/images/services/veneers-detail.jpg"
    }
  },

  "same-day-crowns": {
    en: {
      title: "Same Day Crowns in Salinas, CA",
      description: "Experience the convenience of modern dentistry with our CEREC same-day crown technology. Using advanced computer-aided design and precision milling, we create custom ceramic crowns, inlays, onlays, and other restorations right in our office—all in a single appointment. No more messy impressions, temporary crowns, or waiting weeks for your permanent restoration.",
      treatmentsTitle: "How Same Day Crowns Work:",
      treatments: [
        "Digital scanning captures precise 3D images of your tooth—no gooey impressions",
        "Computer-aided design creates your custom restoration on-screen",
        "In-office milling machine crafts your crown from dental-grade ceramic",
        "Same-day placement means you leave with your permanent crown",
        "Works for crowns, veneers, inlays, and onlays",
        "Color-matched to blend seamlessly with your natural teeth"
      ],
      benefitsTitle: "Advantages of CEREC Technology:",
      benefits: [
        "Complete your restoration in one visit—no second appointment needed",
        "Skip the temporary crown and its potential complications",
        "Digital impressions are more comfortable than traditional molds",
        "Highly precise fit thanks to detailed 3D imaging",
        "Metal-free ceramic material eliminates allergy concerns",
        "Minimal tooth preparation preserves more natural structure",
        "Same strength and durability as traditional lab-made crowns"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "How long does a same-day crown appointment take?",
          answer: "Most same-day crown procedures are completed in about 1-2 hours. This includes the digital scan, design, milling, and final placement. You'll walk out with your permanent restoration the same day."
        },
        {
          question: "Are same-day crowns as durable as traditional crowns?",
          answer: "Yes! CEREC crowns are made from the same high-quality dental ceramic used in traditional lab-fabricated crowns. They offer the same strength, durability, and natural appearance, with the added benefit of convenience."
        },
        {
          question: "Is the digital scanning process uncomfortable?",
          answer: "Not at all. Digital scanning uses a small handheld wand that captures images of your teeth without any discomfort. It's much more pleasant than biting into traditional impression material."
        },
        {
          question: "Who is a good candidate for same-day crowns?",
          answer: "Most patients needing crowns, inlays, or onlays are excellent candidates for CEREC technology. During your consultation, we'll evaluate your specific needs and confirm if same-day restoration is right for you. Call us at 831.449.8363 to learn more."
        }
      ],
      ctaButton: "Schedule Your Visit",
      image: "/images/services/same-day-crowns-detail.jpg"
    },
    es: {
      title: "Coronas en el Mismo Día en Salinas, CA",
      description: "Experimente la conveniencia de la odontología moderna con nuestra tecnología de coronas CEREC del mismo día. Utilizando diseño asistido por computadora avanzado y fresado de precisión, creamos coronas de cerámica personalizadas, inlays, onlays y otras restauraciones directamente en nuestro consultorio—todo en una sola cita. Sin más impresiones desagradables, coronas temporales o esperas de semanas por su restauración permanente.",
      treatmentsTitle: "Cómo Funcionan las Coronas del Mismo Día:",
      treatments: [
        "El escaneo digital captura imágenes 3D precisas de su diente—sin impresiones pastosas",
        "El diseño asistido por computadora crea su restauración personalizada en pantalla",
        "La fresadora en consultorio fabrica su corona de cerámica de grado dental",
        "La colocación el mismo día significa que se va con su corona permanente",
        "Funciona para coronas, carillas, inlays y onlays",
        "Color combinado para mezclarse perfectamente con sus dientes naturales"
      ],
      benefitsTitle: "Ventajas de la Tecnología CEREC:",
      benefits: [
        "Complete su restauración en una visita—sin necesidad de segunda cita",
        "Evite la corona temporal y sus posibles complicaciones",
        "Las impresiones digitales son más cómodas que los moldes tradicionales",
        "Ajuste altamente preciso gracias a las imágenes 3D detalladas",
        "Material cerámico libre de metal elimina preocupaciones de alergias",
        "Preparación dental mínima preserva más estructura natural",
        "Misma resistencia y durabilidad que las coronas tradicionales de laboratorio"
      ],
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          question: "¿Cuánto tiempo toma una cita de corona del mismo día?",
          answer: "La mayoría de los procedimientos de corona del mismo día se completan en aproximadamente 1-2 horas. Esto incluye el escaneo digital, diseño, fresado y colocación final. Saldrá con su restauración permanente el mismo día."
        },
        {
          question: "¿Son las coronas del mismo día tan duraderas como las tradicionales?",
          answer: "¡Sí! Las coronas CEREC están hechas de la misma cerámica dental de alta calidad utilizada en las coronas tradicionales fabricadas en laboratorio. Ofrecen la misma resistencia, durabilidad y apariencia natural, con el beneficio adicional de la conveniencia."
        },
        {
          question: "¿Es incómodo el proceso de escaneo digital?",
          answer: "Para nada. El escaneo digital utiliza una pequeña varita de mano que captura imágenes de sus dientes sin ninguna incomodidad. Es mucho más agradable que morder el material de impresión tradicional."
        },
        {
          question: "¿Quién es un buen candidato para coronas del mismo día?",
          answer: "La mayoría de los pacientes que necesitan coronas, inlays u onlays son excelentes candidatos para la tecnología CEREC. Durante su consulta, evaluaremos sus necesidades específicas y confirmaremos si la restauración del mismo día es adecuada para usted. Llámenos al 831.449.8363 para más información."
        }
      ],
      ctaButton: "Programe Su Visita",
      image: "/images/services/same-day-crowns-detail.jpg"
    }
  },

  invisalign: {
    en: {
      title: "Invisalign Clear Aligners in Salinas, CA",
      description: "Say goodbye to traditional metal braces. Invisalign offers a modern, nearly invisible way to straighten your teeth using smooth, comfortable plastic aligners custom-made for you. These clear trays gradually shift your teeth into their ideal positions, giving you the confident smile you've always wanted—without the brackets and wires.",
      treatmentsTitle: "Why Choose Invisalign:",
      treatments: [
        "Virtually invisible aligners for discreet treatment",
        "Custom-made trays designed specifically for your smile",
        "Removable for eating, brushing, and flossing",
        "Smooth, comfortable plastic with no metal irritation",
        "Gradual, predictable tooth movement",
        "Fewer office visits than traditional braces",
        "Ideal for adults and teens committed to wearing aligners"
      ],
      benefitsTitle: "Benefits for Adults and Teens:",
      benefits: [
        "Straighten teeth without anyone noticing your treatment",
        "Remove aligners to enjoy your favorite foods without restrictions",
        "Easy cleaning—simply brush and floss normally",
        "No food getting stuck in brackets or wires",
        "More comfortable than traditional metal braces",
        "See your projected results before treatment begins"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "Does Invisalign hurt?",
          answer: "Most patients feel some tightness or mild pressure when switching to a new aligner. This sensation typically fades within a few days and is actually a sign that your aligners are working to move your teeth into position."
        },
        {
          question: "How many hours a day should I wear my aligners?",
          answer: "For optimal results, wear your Invisalign aligners at least 22 hours per day. Remove them only for eating, drinking anything other than water, brushing, and flossing."
        },
        {
          question: "How do I maintain my results after treatment?",
          answer: "After completing your Invisalign treatment, you'll wear a retainer to keep your teeth in their new positions. This prevents them from gradually shifting back. We offer various retainer options to fit your lifestyle."
        },
        {
          question: "Does dental insurance cover Invisalign?",
          answer: "Many dental insurance plans cover a portion of Invisalign treatment, similar to traditional braces. We recommend contacting your insurance provider to check your orthodontic coverage. Call us at 831.449.8363 to discuss financing options."
        }
      ],
      ctaButton: "Start Your Invisalign Journey",
      image: "/images/services/invisalign-detail.jpg"
    },
    es: {
      title: "Alineadores Transparentes Invisalign en Salinas, CA",
      description: "Despídase de los brackets metálicos tradicionales. Invisalign ofrece una forma moderna y casi invisible de enderezar sus dientes usando alineadores de plástico suaves y cómodos hechos a su medida. Estas bandejas transparentes mueven gradualmente sus dientes a sus posiciones ideales, dándole la sonrisa segura que siempre ha deseado—sin brackets ni alambres.",
      treatmentsTitle: "Por Qué Elegir Invisalign:",
      treatments: [
        "Alineadores prácticamente invisibles para tratamiento discreto",
        "Bandejas personalizadas diseñadas específicamente para su sonrisa",
        "Removibles para comer, cepillarse y usar hilo dental",
        "Plástico suave y cómodo sin irritación metálica",
        "Movimiento dental gradual y predecible",
        "Menos visitas al consultorio que los brackets tradicionales",
        "Ideal para adultos y adolescentes comprometidos a usar los alineadores"
      ],
      benefitsTitle: "Beneficios para Adultos y Adolescentes:",
      benefits: [
        "Enderece sus dientes sin que nadie note su tratamiento",
        "Retire los alineadores para disfrutar sus comidas favoritas sin restricciones",
        "Limpieza fácil—simplemente cepíllese y use hilo dental normalmente",
        "Sin comida atascada en brackets o alambres",
        "Más cómodo que los brackets metálicos tradicionales",
        "Vea sus resultados proyectados antes de comenzar el tratamiento"
      ],
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          question: "¿Duele Invisalign?",
          answer: "La mayoría de los pacientes sienten algo de tensión o presión leve al cambiar a un nuevo alineador. Esta sensación típicamente desaparece en unos días y es en realidad una señal de que sus alineadores están funcionando para mover sus dientes a su posición."
        },
        {
          question: "¿Cuántas horas al día debo usar mis alineadores?",
          answer: "Para resultados óptimos, use sus alineadores Invisalign al menos 22 horas por día. Retírelos solo para comer, beber cualquier cosa que no sea agua, cepillarse y usar hilo dental."
        },
        {
          question: "¿Cómo mantengo mis resultados después del tratamiento?",
          answer: "Después de completar su tratamiento Invisalign, usará un retenedor para mantener sus dientes en sus nuevas posiciones. Esto evita que se muevan gradualmente de vuelta. Ofrecemos varias opciones de retenedores para adaptarse a su estilo de vida."
        },
        {
          question: "¿El seguro dental cubre Invisalign?",
          answer: "Muchos planes de seguro dental cubren una porción del tratamiento Invisalign, similar a los brackets tradicionales. Recomendamos contactar a su proveedor de seguros para verificar su cobertura ortodóncica. Llámenos al 831.449.8363 para discutir opciones de financiamiento."
        }
      ],
      ctaButton: "Comience Su Viaje Invisalign",
      image: "/images/services/invisalign-detail.jpg"
    }
  },

  orthodontics: {
    en: {
      title: "Orthodontics in Salinas, CA",
      description: "Straight teeth aren't just about aesthetics—proper alignment improves your bite, oral hygiene, and long-term dental health. We offer modern orthodontic solutions that blend beauty with functional results, including clear aligners and traditional braces for patients of all ages.",
      treatmentsTitle: "Orthodontic Options:",
      treatments: [
        "Clear aligner therapy (Invisalign and similar systems)",
        "Traditional metal braces",
        "Ceramic (clear) braces",
        "Early orthodontic intervention for children",
        "Adult orthodontics",
        "Bite correction and TMJ treatment",
        "Retainers to maintain results",
        "Accelerated orthodontic options"
      ],
      benefitsTitle: "Benefits of Orthodontic Treatment:",
      benefits: [
        "Improved bite function and reduced wear on teeth",
        "Easier cleaning and better oral health",
        "Enhanced facial aesthetics and smile confidence",
        "Reduced risk of TMJ disorders and headaches",
        "Long-term preservation of your natural teeth"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "Am I too old for braces?",
          answer: "No! We treat patients of all ages. In fact, about 1 in 4 orthodontic patients is an adult. Modern options like clear aligners make treatment discreet for professional adults."
        },
        {
          question: "How long does orthodontic treatment take?",
          answer: "Treatment time varies from 6 months to 2+ years depending on the complexity of your case. Most patients complete treatment in 12-18 months. We'll give you a personalized timeline during your consultation."
        },
        {
          question: "Are clear aligners as effective as braces?",
          answer: "Clear aligners can effectively treat many orthodontic issues, including crowding, spacing, and mild to moderate bite problems. Complex cases may require traditional braces. We'll recommend the best option for your specific needs."
        },
        {
          question: "Will treatment be painful?",
          answer: "You may experience some discomfort when braces are first placed or aligners are changed, but this is temporary and manageable with over-the-counter pain relief. Most patients adjust quickly."
        }
      ],
      ctaButton: "Start Your Smile Journey",
      image: "/images/services/orthodontics-detail.jpg"
      // Suggested image: https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800 (Orthodontic treatment)
    },
    es: {
      title: "Ortodoncia en Salinas, CA",
      description: "Los dientes rectos no son solo estética: la alineación adecuada mejora su mordida, higiene bucal y salud dental a largo plazo. Ofrecemos soluciones ortodóncticas modernas que combinan belleza con resultados funcionales, incluyendo alineadores transparentes y frenillos tradicionales para pacientes de todas las edades.",
      treatmentsTitle: "Opciones de Ortodoncia:",
      treatments: [
        "Terapia de alineadores transparentes (Invisalign y sistemas similares)",
        "Frenillos metálicos tradicionales",
        "Frenillos de cerámica (transparentes)",
        "Intervención ortodóncica temprana para niños",
        "Ortodoncia para adultos",
        "Corrección de mordida y tratamiento de ATM",
        "Retenedores para mantener resultados",
        "Opciones de ortodoncia acelerada"
      ],
      benefitsTitle: "Beneficios del Tratamiento Ortodóncico:",
      benefits: [
        "Función de mordida mejorada y desgaste reducido en los dientes",
        "Limpieza más fácil y mejor salud bucal",
        "Estética facial mejorada y confianza en la sonrisa",
        "Riesgo reducido de trastornos de ATM y dolores de cabeza",
        "Preservación a largo plazo de sus dientes naturales"
      ],
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          question: "¿Soy demasiado viejo para frenillos?",
          answer: "¡No! Tratamos pacientes de todas las edades. De hecho, aproximadamente 1 de cada 4 pacientes de ortodoncia es un adulto. Las opciones modernas como los alineadores transparentes hacen que el tratamiento sea discreto para adultos profesionales."
        },
        {
          question: "¿Cuánto tiempo toma el tratamiento ortodóncico?",
          answer: "El tiempo de tratamiento varía de 6 meses a más de 2 años dependiendo de la complejidad de su caso. La mayoría de los pacientes completan el tratamiento en 12-18 meses. Le daremos un cronograma personalizado durante su consulta."
        },
        {
          question: "¿Son los alineadores transparentes tan efectivos como los frenillos?",
          answer: "Los alineadores transparentes pueden tratar eficazmente muchos problemas ortodóncicos, incluyendo apiñamiento, espaciado y problemas de mordida leves a moderados. Los casos complejos pueden requerir frenillos tradicionales. Recomendaremos la mejor opción para sus necesidades específicas."
        },
        {
          question: "¿Será doloroso el tratamiento?",
          answer: "Puede experimentar algo de incomodidad cuando se colocan los frenillos por primera vez o se cambian los alineadores, pero esto es temporal y manejable con alivio del dolor de venta libre. La mayoría de los pacientes se ajustan rápidamente."
        }
      ],
      ctaButton: "Comience Su Viaje de Sonrisa",
      image: "/images/services/orthodontics-detail.jpg"
    }
  },

  sedation: {
    en: {
      title: "Sedation Dentistry in Salinas, CA",
      description: "Dental anxiety shouldn't keep you from the care you need. We offer multiple sedation options tailored to your comfort level, ensuring a relaxed and anxiety-free experience during your treatment. Our trained team prioritizes your safety while helping you overcome fear and receive the dental care you deserve.",
      treatmentsTitle: "Sedation Options Available:",
      treatments: [
        "Nitrous oxide (laughing gas) for mild anxiety",
        "Oral conscious sedation for moderate anxiety",
        "IV sedation for deep relaxation",
        "General anesthesia for complex procedures",
        "Combination sedation approaches",
        "Pediatric sedation for anxious children",
        "Sedation for patients with special needs",
        "Same-day sedation appointments available"
      ],
      benefitsTitle: "Benefits of Sedation Dentistry:",
      benefits: [
        "Overcome dental anxiety and phobia",
        "Complete multiple procedures in one visit",
        "Minimal memory of the procedure",
        "Reduced gag reflex and increased comfort",
        "Safe and monitored by experienced professionals"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "What's the difference between the sedation types?",
          answer: "Nitrous oxide provides light relaxation while you remain fully conscious. Oral sedation creates a deeper state of relaxation. IV sedation allows for precise control and deeper sedation. We'll recommend the best option based on your anxiety level and the procedure being performed."
        },
        {
          question: "Is sedation dentistry safe?",
          answer: "Yes! We follow strict safety protocols and continuously monitor your vital signs throughout the procedure. Our team is trained in sedation dentistry and emergency response."
        },
        {
          question: "Will I be unconscious?",
          answer: "Most dental sedation keeps you in a relaxed, drowsy state where you can still respond to questions and requests. Only general anesthesia renders you completely unconscious, which is reserved for complex surgical procedures."
        },
        {
          question: "How long does it take to recover from sedation?",
          answer: "Nitrous oxide wears off within minutes. Oral and IV sedation require a recovery period of several hours. You'll need someone to drive you home, and we recommend taking the rest of the day to relax."
        }
      ],
      ctaButton: "Learn About Sedation",
      image: "/images/services/sedation-detail.jpg"
      // Suggested image: https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800 (Calm dental environment)
    },
    es: {
      title: "Odontología con Sedación en Salinas, CA",
      description: "La ansiedad dental no debe impedirle recibir la atención que necesita. Ofrecemos múltiples opciones de sedación adaptadas a su nivel de comodidad, asegurando una experiencia relajada y sin ansiedad durante su tratamiento. Nuestro equipo capacitado prioriza su seguridad mientras le ayuda a superar el miedo y recibir la atención dental que merece.",
      treatmentsTitle: "Opciones de Sedación Disponibles:",
      treatments: [
        "Óxido nitroso (gas de la risa) para ansiedad leve",
        "Sedación consciente oral para ansiedad moderada",
        "Sedación IV para relajación profunda",
        "Anestesia general para procedimientos complejos",
        "Enfoques de sedación combinada",
        "Sedación pediátrica para niños ansiosos",
        "Sedación para pacientes con necesidades especiales",
        "Citas de sedación el mismo día disponibles"
      ],
      benefitsTitle: "Beneficios de la Odontología con Sedación:",
      benefits: [
        "Supere la ansiedad y fobia dental",
        "Complete múltiples procedimientos en una visita",
        "Memoria mínima del procedimiento",
        "Reflejo nauseoso reducido y mayor comodidad",
        "Seguro y monitoreado por profesionales experimentados"
      ],
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          question: "¿Cuál es la diferencia entre los tipos de sedación?",
          answer: "El óxido nitroso proporciona relajación ligera mientras permanece completamente consciente. La sedación oral crea un estado de relajación más profundo. La sedación IV permite un control preciso y sedación más profunda. Recomendaremos la mejor opción según su nivel de ansiedad y el procedimiento que se está realizando."
        },
        {
          question: "¿Es segura la odontología con sedación?",
          answer: "¡Sí! Seguimos protocolos de seguridad estrictos y monitoreamos continuamente sus signos vitales durante todo el procedimiento. Nuestro equipo está capacitado en odontología con sedación y respuesta de emergencia."
        },
        {
          question: "¿Estaré inconsciente?",
          answer: "La mayoría de la sedación dental lo mantiene en un estado relajado y somnoliento donde aún puede responder a preguntas y solicitudes. Solo la anestesia general lo deja completamente inconsciente, que está reservada para procedimientos quirúrgicos complejos."
        },
        {
          question: "¿Cuánto tiempo toma recuperarse de la sedación?",
          answer: "El óxido nitroso desaparece en minutos. La sedación oral e IV requieren un período de recuperación de varias horas. Necesitará que alguien lo lleve a casa, y recomendamos tomar el resto del día para relajarse."
        }
      ],
      ctaButton: "Aprenda Sobre Sedación",
      image: "/images/services/sedation-detail.jpg"
    }
  },

  technology: {
    en: {
      title: "Advanced Technology in Salinas, CA",
      description: "We invest in proven, state-of-the-art technology that enhances accuracy, comfort, and treatment outcomes. From digital imaging to laser dentistry, our advanced tools deliver superior care with minimal discomfort. Technology allows us to diagnose problems earlier, treat them more precisely, and give you a better overall experience.",
      treatmentsTitle: "Technologies We Use:",
      treatments: [
        "Digital X-rays with 90% less radiation",
        "Intraoral cameras for real-time viewing",
        "3D cone beam CT imaging for implant planning",
        "Laser dentistry for gentle, precise treatments",
        "CAD/CAM technology for same-day crowns",
        "Digital impressions (no messy molds)",
        "Air abrasion for minimally invasive cavity treatment",
        "Soft tissue lasers for gum procedures"
      ],
      benefitsTitle: "Benefits of Advanced Technology:",
      benefits: [
        "More accurate diagnoses and treatment planning",
        "Faster procedures with less chair time",
        "Reduced discomfort and faster healing",
        "Better treatment outcomes and longer-lasting results",
        "Environmentally friendly digital records"
      ],
      faqTitle: "Frequently Asked Questions",
      faqs: [
        {
          question: "How is laser dentistry different from traditional methods?",
          answer: "Dental lasers use focused light energy to perform procedures with extreme precision. They often eliminate the need for drills and scalpels, resulting in less pain, bleeding, and swelling. Many laser procedures don't require anesthesia."
        },
        {
          question: "What is CAD/CAM technology?",
          answer: "CAD/CAM (Computer-Aided Design/Computer-Aided Manufacturing) allows us to design and create dental restorations like crowns in a single visit. We take digital impressions, design your restoration on a computer, and mill it from a ceramic block—all in our office."
        },
        {
          question: "Are digital X-rays really safer?",
          answer: "Yes! Digital X-rays emit up to 90% less radiation than traditional film X-rays. They're also better for the environment, provide instant results, and can be enhanced for better diagnosis."
        },
        {
          question: "Does advanced technology make treatment more expensive?",
          answer: "While the initial investment in technology is significant, it often makes treatment more efficient, reducing overall costs. Many procedures that used to require multiple visits can now be completed in one, saving you time and money."
        }
      ],
      ctaButton: "Experience Modern Dentistry",
      image: "/images/services/technology-detail.jpg"
      // Suggested image: https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800 (Dental technology)
    },
    es: {
      title: "Tecnología Avanzada en Salinas, CA",
      description: "Invertimos en tecnología de vanguardia comprobada que mejora la precisión, comodidad y resultados del tratamiento. Desde imágenes digitales hasta odontología láser, nuestras herramientas avanzadas brindan atención superior con molestias mínimas. La tecnología nos permite diagnosticar problemas más temprano, tratarlos con mayor precisión y brindarle una mejor experiencia general.",
      treatmentsTitle: "Tecnologías que Usamos:",
      treatments: [
        "Radiografías digitales con 90% menos radiación",
        "Cámaras intraorales para visualización en tiempo real",
        "Imágenes TC de haz cónico 3D para planificación de implantes",
        "Odontología láser para tratamientos suaves y precisos",
        "Tecnología CAD/CAM para coronas el mismo día",
        "Impresiones digitales (sin moldes desordenados)",
        "Abrasión de aire para tratamiento de caries mínimamente invasivo",
        "Láseres de tejido blando para procedimientos de encías"
      ],
      benefitsTitle: "Beneficios de la Tecnología Avanzada:",
      benefits: [
        "Diagnósticos y planificación de tratamiento más precisos",
        "Procedimientos más rápidos con menos tiempo en la silla",
        "Molestias reducidas y curación más rápida",
        "Mejores resultados de tratamiento y resultados más duraderos",
        "Registros digitales ecológicos"
      ],
      faqTitle: "Preguntas Frecuentes",
      faqs: [
        {
          question: "¿En qué se diferencia la odontología láser de los métodos tradicionales?",
          answer: "Los láseres dentales usan energía de luz enfocada para realizar procedimientos con extrema precisión. A menudo eliminan la necesidad de taladros y bisturís, resultando en menos dolor, sangrado e hinchazón. Muchos procedimientos láser no requieren anestesia."
        },
        {
          question: "¿Qué es la tecnología CAD/CAM?",
          answer: "CAD/CAM (Diseño Asistido por Computadora/Fabricación Asistida por Computadora) nos permite diseñar y crear restauraciones dentales como coronas en una sola visita. Tomamos impresiones digitales, diseñamos su restauración en una computadora y la fresamos de un bloque de cerámica, todo en nuestra oficina."
        },
        {
          question: "¿Son realmente más seguras las radiografías digitales?",
          answer: "¡Sí! Las radiografías digitales emiten hasta un 90% menos radiación que las radiografías tradicionales de película. También son mejores para el medio ambiente, proporcionan resultados instantáneos y pueden mejorarse para un mejor diagnóstico."
        },
        {
          question: "¿La tecnología avanzada hace que el tratamiento sea más caro?",
          answer: "Aunque la inversión inicial en tecnología es significativa, a menudo hace que el tratamiento sea más eficiente, reduciendo los costos generales. Muchos procedimientos que solían requerir múltiples visitas ahora pueden completarse en una, ahorrándole tiempo y dinero."
        }
      ],
      ctaButton: "Experimente Odontología Moderna",
      image: "/images/services/technology-detail.jpg"
    }
  }
};
