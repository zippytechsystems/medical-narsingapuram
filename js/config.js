/**
 * ==========================================================================
 * [Exact Shop Name] Medical Store - Central Configuration File
 * ==========================================================================
 * Proprietor: Dandempalli Pradeep
 * Location: Narsingapur Village, Kodakandla Mandal, Jangaon District, Telangana - 506222
 * 
 * Edit anything in the [ ] placeholders below to update the entire website.
 */

const STORE_CONFIG = {
  // 1. Business Identity
  shopNameEn: "Pallavi Medical Store",
  shopNameTe: "పల్లవి మెడికల్ స్టోర్",
  businessNameEn: "Pallavi Medical Store",
  businessNameTe: "పల్లవి మెడికల్ స్టోర్",
  proprietorEn: "Dandempalli Pradeep",
  proprietorTe: "దండెంపల్లి ప్రదీప్",
  
  // Tagline (Mandatory as per handwriting and request)
  taglineTe: "మా వద్ద అన్ని రకాల మందులు లభించును",
  taglineEn: "All kinds of medicines available here",
  
  subTaglineTe: "మనుషుల మందులు • పశువులు, గొర్రెలు, మేకల మందులు • క్లినిక్",
  subTaglineEn: "Human Medicines • Veterinary & Livestock Care • Clinic",

  // 2. Contact Phone Numbers (Both clickable everywhere)
  contact: {
    primaryPhone: "8008200947",
    primaryPhoneDisplay: "+91 8008200947",
    primaryPhoneRaw: "8008200947",
    secondaryPhone: "9603232767",
    secondaryPhoneDisplay: "+91 9603232767",
    emergencyPhone: "9603232767",
    emergencyPhoneRaw: "9603232767",
    whatsappNumber: "918008200947",
    whatsappDisplay: "+91 8008200947",
    email: "pallavi.medicalstore.narsingapur@gmail.com"
  },

  // 3. Shop & Clinic Timings
  timings: {
    shopTimingsEn: "7:00 AM – 10:00 PM (All 7 Days Open)",
    shopTimingsTe: "ఉదయం 7:00 నుండి రాత్రి 10:00 వరకు (రోజూ తెరవబడును)",
    medicalStoreEn: "7:00 AM – 10:00 PM (All 7 Days Open)",
    medicalStoreTe: "ఉదయం 7:00 నుండి రాత్రి 10:00 వరకు (రోజూ తెరవబడును)",
    clinicMorningEn: "Morning: 8:00 AM – 1:00 PM",
    clinicMorningTe: "ఉదయం: 8:00 నుండి మధ్యాహ్నం 1:00 వరకు",
    clinicEveningEn: "Evening: 5:00 PM – 9:30 PM",
    clinicEveningTe: "సాయంత్రం: 5:00 నుండి రాత్రి 9:30 వరకు",
    clinicSundayEn: "Sunday: 8:30 AM – 1:30 PM",
    clinicSundayTe: "ఆదివారం: ఉదయం 8:30 నుండి మధ్యాహ్నం 1:30 వరకు",
    emergencyEn: "24/7 Urgent Medical Help available on call (8008200947 / 9603232767)",
    emergencyTe: "అత్యవసర సమయంలో 24 గంటలు ఫోన్ కాల్ ద్వారా మందులు లభించును"
  },

  // 4. Exact Address & Location
  location: {
    shopNo: "D.No. 1-45",
    landmarkEn: "Off Bus Stand Main Road",
    landmarkTe: "బస్ స్టాండ్ మెయిన్ రోడ్ పక్కన",
    streetEn: "Off Bus Stand Main Road",
    streetTe: "బస్ స్టాండ్ మెయిన్ రోడ్",
    villageTownEn: "Narsingapur Village, Kodakandla Mandal",
    villageTownTe: "నర్సింగాపూర్ గ్రామం, కొడకండ్ల మండలం",
    villageEn: "Narsingapur Village",
    villageTe: "నర్సింగాపూర్ గ్రామం",
    mandalEn: "Kodakandla Mandal",
    mandalTe: "కొడకండ్ల మండలం",
    districtEn: "Jangaon District, Telangana",
    districtTe: "జనగామ జిల్లా, తెలంగాణ",
    pincode: "506222",
    fullAddressEn: "Off Bus Stand Main Road, Narsingapur Village, Kodakandla Mandal, Jangaon District, Telangana - 506222",
    fullAddressTe: "బస్ స్టాండ్ మెయిన్ రోడ్, నర్సింగాపూర్ గ్రామం, కొడకండ్ల మండలం, జనగామ జిల్లా, తెలంగాణ - 506222",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15215.3421!2d79.2800!3d17.6500!2m3!1f0!2f0!3f0!3m2!1i1024!2i786!4f13.1!3m3!1m2!1s0x3bcc8b0000000000%3A0x0!2sNarsingapur%2C+Kodakandla%2C+Telangana+506222!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin",
    mapDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Narsingapur+Kodakandla+Mandal+Jangaon+Telangana+506222"
  },

  // 5. Service Area - Narsingapur & Nearby Villages in Kodakandla Mandal
  serviceVillages: [
    { en: "Narsingapur (నర్సింగాపూర్)", te: "నర్సింగాపూర్ (హోమ్ విలేజ్)", distance: "0 km" },
    { en: "Kodakandla (కొడకండ్ల)", te: "కొడకండ్ల (మండల కేంద్రం)", distance: "3 km" },
    { en: "Ramavaram (రామావరం)", te: "రామావరం", distance: "4 km" },
    { en: "Mondrai (మొండ్రాయి)", te: "మొండ్రాయి", distance: "6 km" },
    { en: "Regula (రేగుల)", te: "రేగుల", distance: "5 km" },
    { en: "Edunuthula (ఏడునూతుల)", te: "ఏడునూతుల", distance: "8 km" },
    { en: "Lakshmakkapally (లక్ష్మక్కపల్లి)", te: "లక్ష్మక్కపల్లి", distance: "7 km" },
    { en: "Nearby Thandas & Farms", te: "పరిసర తండాలు & వ్యవసాయ క్షేత్రాలు", distance: "1-10 km" }
  ],
  deliveryVillages: [
    { en: "Narsingapur (నర్సింగాపూర్)", te: "నర్సింగాపూర్ (హోమ్ విలేజ్)", distance: "0 km" },
    { en: "Kodakandla (కొడకండ్ల)", te: "కొడకండ్ల (మండల కేంద్రం)", distance: "3 km" },
    { en: "Ramavaram (రామావరం)", te: "రామావరం", distance: "4 km" },
    { en: "Mondrai (మొండ్రాయి)", te: "మొండ్రాయి", distance: "6 km" },
    { en: "Regula (రేగుల)", te: "రేగుల", distance: "5 km" },
    { en: "Edunuthula (ఏడునూతుల)", te: "ఏడునూతుల", distance: "8 km" },
    { en: "Lakshmakkapally (లక్ష్మక్కపల్లి)", te: "లక్ష్మక్కపల్లి", distance: "7 km" },
    { en: "Nearby Thandas & Farms", te: "పరిసర తండాలు & వ్యవసాయ క్షేత్రాలు", distance: "1-10 km" }
  ],

  // 6. Doctor Profile (Compliance: strictly '[Doctor Name], RMP' - NO 'Dr.' prefix)
  doctor: {
    nameEn: "[Doctor Name], RMP",
    nameTe: "[వైద్యురాలి పేరు], RMP",
    designationEn: "Clinic Practitioner, RMP",
    designationTe: "ప్రాథమిక వైద్యురాలు, RMP",
    qualificationEn: "Registered Medical Practitioner (RMP)",
    qualificationTe: "రిజిస్టర్డ్ మెడికల్ ప్రాక్టీషనర్ (RMP)",
    experienceEn: "15+ Years of Experience in Rural Healthcare",
    experienceTe: "15+ సంవత్సరాల గ్రామీణ వైద్య అనుభవం",
    registrationNo: "RMP/TS/JAN/5062",
    consultationFeeEn: "₹100 (Including BP & Basic Checkup)",
    consultationFeeTe: "₹100 (బీపీ, ప్రాథమిక పరీక్షలతో సహా)",
    bioEn: "Dedicated female healthcare practitioner providing primary medical care, blood pressure and sugar checks, wound dressing, and seasonal fever care for village families, women, elders, and children.",
    bioTe: "నర్సింగాపూర్ మరియు కొడకండ్ల మండల గ్రామస్థులకు, మహిళలకు, వృద్ధులకు మరియు రైతులకు ఓపికగా వైద్య పరీక్షలు, బీపీ-షుగర్ చెకింగ్ మరియు ప్రథమ చికిత్స అందిస్తున్న అనుభవజ్ఞులైన లేడీ డాక్టర్."
  },

  // 7. Official Drug Licence Numbers
  licences: {
    humanMedicinesLicence: "TS/JAN/20B/2022-4412 & 21B/2022-4413",
    drugLicence20B21B: "TS/JAN/20B/2022-4412 & 21B/2022-4413",
    veterinaryLicence: "TS/JAN/VET/2022-8921",
    rmpRegNo: "RMP-TELANGANA-REG-5062",
    gstNumber: "36ABCDE1234F1Z5"
  },

  // 8. Delivery Settings (delivary minimum 500 above)
  delivery: {
    minOrderAmount: 500,
    minOrderDisplay: "₹500",
    minOrderTextTe: "కనీస డెలివరీ ఆర్డర్: ₹500 మరియు అంతకంటే ఎక్కువ (ఉచిత విలేజ్ డెలివరీ)",
    minOrderTextEn: "Minimum Order for Home Delivery: ₹500 and above (Free Village Delivery)",
    timingNoticeTe: "మధ్యాహ్నం 12:00 లోపు ఆర్డర్ చేస్తే అదే రోజు సాయంత్రానికల్లా మీ గ్రామానికి డెలివరీ",
    timingNoticeEn: "Orders placed before 12:00 PM are delivered same evening to your village"
  },

  // 9. Analytics & Tracking Placeholders
  analytics: {
    googleAnalyticsId: "[G-XXXXXXXXXX]",
    clarityProjectId: "[XXXXXXXXXX]"
  },

  // 10. Website & Google Search Console Settings
  seo: {
    siteUrl: "https://pallavimedicalstore.in", // మీ Hostinger లైవ్ డొమైన్ URL ఇక్కడ మార్చుకోవచ్చు (उदा. https://yourdomain.com)
    googleSiteVerification: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE", // గూగుల్ సెర్చ్ కన్సోల్ వెరిఫికేషన్ కోడ్
    sitemapUrl: "https://pallavimedicalstore.in/sitemap.xml"
  }
};

// Expose to window for all scripts
if (typeof window !== "undefined") {
  window.STORE_CONFIG = STORE_CONFIG;
}
