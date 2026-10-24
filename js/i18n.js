/**
 * ==========================================================================
 * Pallavi Medical Store - English & Telugu Internationalization (i18n) Engine
 * ==========================================================================
 * Designed specifically for rural Telangana residents, elderly patients,
 * and farmers on basic smartphones with large, clear typography.
 */

const I18N = {
  currentLang: "te", // Default to Telugu as primary language for rural Telangana, toggleable to English

  translations: {
    te: {
      langBtn: "English",
      emergencyBadge: "🚨 అత్యవసర సేవలు | 24 గంటలు ఫోన్ కాల్ ద్వారా మందులు లభించును: 8008200947 / 9603232767",
      
      // Navigation
      navHome: "ముఖచిత్రం",
      navHuman: "మనుషుల మందులు",
      navVet: "పశువుల మందులు",
      navClinic: "క్లినిక్ (మనుషులకు మాత్రమే)",
      navAbout: "మా గురించి",
      navDelivery: "హోమ్ డెలివరీ",
      navContact: "చిరునామా & ఫోన్",
      
      // Header Actions
      btnCallHeader: "ఫోన్ చేయండి",
      btnWhatsAppHeader: "వాట్సాప్ ఆర్డర్",
      btnUploadPrescription: "చీటీ (Prescription) పంపండి",
      
      // Hero Section
      heroTag: "నర్సింగాపూర్ & కొడకండ్ల మండల ప్రజలకు నమ్మకమైన నిలయం",
      heroTitle: "మీ కుటుంబ ఆరోగ్యం & మీ పాడి పశువుల సంరక్షణ",
      heroSubtitle: "మా వద్ద అన్ని రకాల మందులు లభించును. మనుషులకు అసలైన నాణ్యమైన మందులు, ఆవులు, గేదెలు, గొర్రెలు, మేకలకు ప్రత్యేక పశు మందులు, మరియు అనుభవజ్ఞులైన లేడీ డాక్టర్ [వైద్యురాలి పేరు], RMP గారి మనుషుల ప్రథమ చికిత్స క్లినిక్ — అన్నీ ఒకే చోట.",
      heroCtaMedicines: "మందుల వివరాలు చూడండి",
      heroCtaClinic: "మనుషుల క్లినిక్ సమయాలు",
      heroCtaWhatsApp: "వాట్సాప్‌లో మందులు ఆర్డర్ చేయండి",
      
      // Three Core Service Cards
      servicesHeading: "మా మూడు ప్రధాన సేవలు",
      servicesSubheading: "గ్రామీణ కుటుంబాలకు మరియు పాడి రైతులకు 15+ ఏళ్లుగా నమ్మకమైన నిలయం",
      
      card1Title: "1. మనుషుల మందులు (Human Medical)",
      card1Desc: "జనరల్ మరియు ప్రిస్క్రిప్షన్ మందులు: జ్వరం, దగ్గు, కడుపునొప్పి, బీపీ, షుగర్, నొప్పులు, విటమిన్లు, చిన్నారుల మందులు మరియు ప్రథమ చికిత్స సామాగ్రి.",
      card1Feature1: "✓ 100% అసలైన బ్యాచ్ సర్టిఫైడ్ మందులు",
      card1Feature2: "✓ ఫ్రిజ్‌లో భద్రపరిచే ఇన్సులిన్ & వ్యాక్సిన్లు",
      card1Feature3: "✓ పక్క గ్రామాలకు ఉచిత హోమ్ డెలివరీ సౌకర్యం",
      card1Btn: "మనుషుల మందుల వివరాలు ➔",
      
      card2Title: "2. పశువులు, గొర్రెలు, మేకల మందులు (Veterinary)",
      card2Desc: "మావద్ద పశువుల, గొర్రెల, మేకల మందులు లభించును: పాడి ఆవులు, గేదెలు, గొర్రెలు, మేకలు, కోళ్ళు, కుక్కలకు నట్టల మందులు (Deworming), కాల్షియం, మినరల్ మిక్చర్, పాల దిగుబడి టానిక్కులు.",
      card2Feature1: "✓ పాల దిగుబడి పెంచే హై-కాల్షియం జెల్స్ & టానిక్స్",
      card2Feature2: "✓ గొర్రెలు, మేకలకు నట్టల నివారణ మందులు (Dewormers)",
      card2Feature3: "✓ గోమార్లు, పేలు, ఈగల నివారణ స్ప్రేలు & సబ్బులు",
      card2Btn: "పశువుల మందుల వివరాలు ➔",
      
      card3Title: "3. క్లినిక్ (కేవలం మనుషులకు మాత్రమే!)",
      card3Desc: "అనుభవజ్ఞులైన లేడీ డాక్టర్ [వైద్యురాలి పేరు], RMP గారి పర్యవేక్షణలో కేవలం మనుషులకు మాత్రమే ప్రాథమిక వైద్య పరీక్షలు, బీపీ-షుగర్ చెకింగ్, గాయాలకు డ్రెస్సింగ్, జ్వరం చికిత్స. (పశువుల చికిత్స క్లినిక్‌లో చేయబడదు).",
      card3Feature1: "✓ 15+ ఏళ్ల అపార అనుభవజ్ఞురాలైన లేడీ RMP ప్రాక్టీషనర్",
      card3Feature2: "✓ మహిళలు, పిల్లలు & వృద్ధులకు ప్రత్యేక శ్రద్ధ",
      card3Feature3: "✓ సరసమైన కన్సల్టేషన్ ఫీజు (కేవలం ₹100)",
      card3Btn: "క్లినిక్ వివరాలు & సంప్రదింపులు ➔",
      
      // Why Choose Us
      whyTitle: "గ్రామస్థులు పల్లవి మెడికల్ స్టోర్‌నే ఎందుకు నమ్ముతారు?",
      whySubtitle: "గ్రామీణ ప్రజల ఆరోగ్యం మరియు పాడి సంపద సంరక్షణలో రాజీలేని నాణ్యత",
      why1Title: "15+ ఏళ్ల విశ్వసనీయత",
      why1Desc: "నర్సింగాపూర్ మరియు చుట్టుపక్కల గ్రామాల్లోని ప్రతి కుటుంబానికి చిరపరిచితమైన స్థానిక మెడికల్ షాప్.",
      why2Title: "100% అసలైన మందులు",
      why2Desc: "ప్రభుత్వ గుర్తింపు పొందిన డ్రగ్ లైసెన్స్ ద్వారా అసలైన కంపెనీ మందులు మాత్రమే విక్రయిస్తాము.",
      why3Title: "రైతులకు అందుబాటులో పశు ఔషధాలు",
      why3Desc: "గొర్రెల కాపరులకు, పాడి రైతులకు అవసరమైన అన్ని రకాల నట్టల మందులు, కాల్షియం ఎల్లప్పుడూ స్టాక్ అందుబాటులో ఉంటాయి.",
      why4Title: "లేడీ RMP డాక్టర్ సేవలు (మనుషులకు)",
      why4Desc: "మహిళలు, వృద్ధులు మరియు పిల్లల ఆరోగ్య సమస్యలను ఓపికగా విని ప్రాథమిక వైద్యం అందించే వైద్యురాలు.",
      
      // Doctor Highlight
      docBadge: "మనుషుల ప్రాథమిక క్లినిక్ (కేవలం మనుషులకు మాత్రమే)",
      docExperience: "15+ సంవత్సరాల గ్రామీణ వైద్య అనుభవం",
      docTimingsLabel: "క్లినిక్ రోజూ రెండు పూటలా తెరిచి ఉంటుంది:",
      docBookBtn: "క్లినిక్ సమాచారం / టోకెన్ కొరకు వాట్సాప్ చేయండి",
      
      // Home Delivery Notice
      deliveryTitle: "సమీప గ్రామాలకు మందుల హోమ్ డెలివరీ",
      deliveryDesc: "మీరు ఊరి నుండి మెడికల్ షాప్‌కు రావాల్సిన అవసరం లేదు. మీ డాక్టర్ ప్రిస్క్రిప్షన్ లేదా అవసరమైన మందుల వివరాలు వాట్సాప్‌లో పంపితే, మా సిబ్బంది మీ గ్రామానికి తెచ్చి ఇస్తారు.",
      deliveryVillagesLabel: "మేము డెలివరీ చేసే సమీప గ్రామాలు:",
      deliveryActionBtn: "ఇప్పుడే వాట్సాప్‌లో మందులు ఆర్డర్ చేయండి",
      
      // Testimonials
      reviewsTitle: "మా రైతులు & గ్రామస్థుల అభిప్రాయాలు",
      
      // Footer
      footerTagline: "మా వద్ద అన్ని రకాల మందులు లభించును • నర్సింగాపూర్, కొడకండ్ల మండలం, జనగామ జిల్లా",
      footerLicencesLabel: "ప్రభుత్వ గుర్తింపు & డ్రగ్ లైసెన్స్ నంబర్లు:",
      footerQuickLinks: "ముఖ్యమైన పేజీలు",
      footerTimings: "షాపు & క్లినిక్ వేళలు",
      footerEmergency: "24/7 అత్యవసర కాల్",
      footerRights: "సర్వ హక్కులు ప్రత్యేకించబడినవి. ప్రిస్క్రిప్షన్ మందులు డాక్టర్ చీటీ మేరకే ఇవ్వబడును."
    },

    en: {
      langBtn: "తెలుగు",
      emergencyBadge: "🚨 Emergency Medical Support | Medicines on Phone Call: 8008200947 / 9603232767",
      
      // Navigation
      navHome: "Home",
      navHuman: "Human Medicines",
      navVet: "Veterinary Medicines",
      navClinic: "Clinic (People Only)",
      navAbout: "About Us",
      navDelivery: "Home Delivery",
      navContact: "Visit & Contact",
      
      // Header Actions
      btnCallHeader: "Call Us",
      btnWhatsAppHeader: "WhatsApp Order",
      btnUploadPrescription: "Send Prescription",
      
      // Hero Section
      heroTag: "Serving Narsingapur Village & Kodakandla Mandal with Trust",
      heroTitle: "Care for You and Your Animals",
      heroSubtitle: "All kinds of medicines available here. Genuine human medicines, specialized veterinary medicines for dairy cattle, buffalo, sheep and goats, and primary healthcare clinic strictly for people by experienced lady practitioner [Doctor Name], RMP.",
      heroCtaMedicines: "Browse Medicines",
      heroCtaClinic: "Clinic & Timings (People Only)",
      heroCtaWhatsApp: "Order on WhatsApp",
      
      // Three Core Service Cards
      servicesHeading: "Our Three Essential Services",
      servicesSubheading: "Serving rural families and livestock farmers across Kodakandla Mandal for 15+ years",
      
      card1Title: "1. Human Medicines (మనుషుల మందులు)",
      card1Desc: "Comprehensive medicines for fever, cold, diabetes, BP, body pains, pediatric care, maternal care, and first-aid supplies.",
      card1Feature1: "✓ 100% Genuine batch-certified pharma stock",
      card1Feature2: "✓ Refrigerator cold-chain for Insulin & Vaccines",
      card1Feature3: "✓ Doorstep delivery to surrounding villages",
      card1Btn: "View Human Medicines ➔",
      
      card2Title: "2. Veterinary Medicines (పశువుల మందులు)",
      card2Desc: "Medicines for cattle, buffaloes, sheep, goats, poultry and pets: broad-spectrum dewormers, high-absorption calcium gels, mineral mixtures, and milk boosters.",
      card2Feature1: "✓ High-calcium supplements & milk yield boosters",
      card2Feature2: "✓ Broad-spectrum dewormers for sheep & goats",
      card2Feature3: "✓ Anti-tick sprays, powders & wound ointments",
      card2Btn: "View Veterinary Medicines ➔",
      
      card3Title: "3. Primary Clinic (People Only - కేవలం మనుషులకు)",
      card3Desc: "General health consultations, BP & blood sugar checks, wound dressing, and fever care strictly for people by experienced female practitioner [Doctor Name], RMP. (Animal treatment is NOT conducted in clinic).",
      card3Feature1: "✓ 15+ Years rural healthcare experience",
      card3Feature2: "✓ Compassionate care for women, children & seniors",
      card3Feature3: "✓ Affordable consultation fee (Just ₹100)",
      card3Btn: "View Clinic Details ➔",
      
      // Why Choose Us
      whyTitle: "Why Local Families & Farmers Choose Pallavi Medical Store",
      whySubtitle: "Uncompromising quality, genuine medicines, and ethical rural medical service",
      why1Title: "15+ Years of Trust",
      why1Desc: "A household name across Narsingapur and surrounding Kodakandla villages.",
      why2Title: "100% Genuine Medicines",
      why2Desc: "Sourced directly with valid drug licences; batch-verified with strict expiry monitoring.",
      why3Title: "Ready Stock for Farmers",
      why3Desc: "Ready availability of essential sheep/goat dewormers, cattle tonics, and calcium at fair prices.",
      why4Title: "Lady RMP Practitioner (People)",
      why4Desc: "Specialized empathetic clinic where village women and elders can consult with complete privacy.",
      
      // Doctor Highlight
      docBadge: "Primary Healthcare Clinic (Strictly for People)",
      docExperience: "15+ Years of Dedicated Clinical Practice",
      docTimingsLabel: "Clinic open in two convenient daily sessions:",
      docBookBtn: "Inquire or Request Clinic Slot on WhatsApp",
      
      // Home Delivery Notice
      deliveryTitle: "Medicine Home Delivery in Nearby Villages",
      deliveryDesc: "No need to travel to town when unwell. Send your prescription or required medicine names on WhatsApp, and our staff will deliver to your village doorstep.",
      deliveryVillagesLabel: "Surrounding villages covered:",
      deliveryActionBtn: "Order Medicines on WhatsApp Now",
      
      // Testimonials
      reviewsTitle: "What Local Farmers & Villagers Say",
      
      // Footer
      footerTagline: "All kinds of medicines available here • Narsingapur, Kodakandla Mandal, Jangaon Dist.",
      footerLicencesLabel: "Govt. Approved Drug Licences & Registrations:",
      footerQuickLinks: "Quick Navigation",
      footerTimings: "Store & Clinic Hours",
      footerEmergency: "24/7 Emergency Line",
      footerRights: "All Rights Reserved. Prescription drugs dispensed strictly against a registered practitioner's prescription."
    }
  },

  init() {
    const saved = localStorage.getItem("medshop_lang");
    if (saved === "te" || saved === "en") {
      this.currentLang = saved;
    }
    this.applyTranslations();
  },

  setLang(lang) {
    if (lang === "te" || lang === "en") {
      this.currentLang = lang;
      localStorage.setItem("medshop_lang", lang);
      this.applyTranslations();
    }
  },

  toggleLang() {
    const next = this.currentLang === "te" ? "en" : "te";
    this.setLang(next);
  },

  applyTranslations() {
    const lang = this.currentLang;
    const dict = this.translations[lang] || this.translations.te;

    // Update document language
    document.documentElement.lang = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update language toggle button text
    const langToggleBtn = document.getElementById("langToggleBtn");
    if (langToggleBtn) {
      langToggleBtn.textContent = dict.langBtn;
    }

    // Trigger dynamic component re-render if available
    if (window.renderDynamicContent) {
      window.renderDynamicContent();
    }
  }
};

// Export to window
if (typeof window !== "undefined") {
  window.I18N = I18N;
}
