/**
 * ==========================================================================
 * [Exact Shop Name] Medical Store - Central Data File
 * ==========================================================================
 * Proprietor: Dandempalli Pradeep
 * Location: Narsingapur Village, Kodakandla Mandal, Jangaon District - 506222
 * 
 * NOTE: 
 * - Clinic is ONLY for human patients (మనుషులకు మాత్రమే క్లినిక్)
 * - Medicines are for BOTH humans and animals (మనుషులు & పశువుల మందులు)
 * - In compliance with Indian medical regulations, no prices are shown
 *   for prescription medicines.
 */

const STORE_DATA = {
  // ========================================================================
  // 1. HUMAN MEDICINES (మనుషుల మందులు)
  // ========================================================================
  humanCategories: [
    {
      id: "general-prescription",
      nameEn: "Prescription Medicines",
      nameTe: "డాక్టర్ చీటీ మందులు (Prescription)",
      icon: "📋",
      descEn: "Medicines dispensed strictly as per registered doctor's prescription. Batch-verified authentic stock.",
      descTe: "డాక్టర్ రాసిన చీటీ ప్రకారం ఇచ్చే స్వచ్ఛమైన కంపెనీ మందులు. నాణ్యతలో ఎటువంటి రాజీ ఉండదు.",
      isPrescription: true,
      items: [
        { en: "High Blood Pressure (BP) Control Tablets", te: "రక్తపోటు (బీపీ) మాత్రలు" },
        { en: "Diabetes Sugar Control Formulations", te: "షుగర్ (మధుమేహం) నియంత్రణ మాత్రలు" },
        { en: "Antibiotic Tablets, Capsules & Syrups", te: "యాంటీబయాటిక్స్ మాత్రలు & సిరప్‌లు" },
        { en: "Thyroid & Hormone Care Tablets", te: "థైరాయిడ్ నియంత్రణ మందులు" },
        { en: "Gas, Acidity & Ulcer Medicines", te: "గ్యాస్, అసిడిటీ & కడుపులో మంట మందులు" },
        { en: "Heart & Kidney Care Medicines", te: "గుండె & కిడ్నీ సంరక్షణ మందులు" }
      ]
    },
    {
      id: "fever-cold",
      nameEn: "Fever, Cold & Cough",
      nameTe: "జ్వరం, జలుబు & దగ్గు మందులు",
      icon: "🌡️",
      descEn: "Quick relief for viral fevers, seasonal colds, running nose, wet and dry cough, and sore throat.",
      descTe: "సీజనల్ జ్వరాలు, జలుబు, ముక్కు కారడం, పొడి దగ్గు మరియు గొంతు నొప్పికి తక్షణ ఉపశమన మందులు.",
      isPrescription: false,
      items: [
        { en: "Paracetamol 500mg & 650mg Tablets", te: "పారాసిటమాల్ 500mg & 650mg మాత్రలు" },
        { en: "Herbal & Medicated Cough Syrups", te: "దగ్గు సిరప్‌లు (తడి & పొడి దగ్గుకు)" },
        { en: "Cold Inhalation Capsules & Balms", te: "ముక్కు దిబ్బడ బామ్‌లు & ఆవిరి క్యాప్సూల్స్" },
        { en: "Anti-Allergy Cetirizine Tablets", te: "ఎలర్జీ & తుమ్ముల మాత్రలు" },
        { en: "Throat Relief Lozenges & Gargles", te: "గొంతు గరగరకు ఉపశమన మాత్రలు" }
      ]
    },
    {
      id: "diabetes-bp-care",
      nameEn: "Diabetes & BP Care",
      nameTe: "బీపీ & షుగర్ కేర్ (Diabetes & BP)",
      icon: "🩸",
      descEn: "Long-term monthly medicine supplies, refrigerated insulin vials, and glucose test strips.",
      descTe: "నెలవారీ బీపీ, షుగర్ మందులు, ఫ్రిజ్‌లో భద్రపరిచే ఇన్సులిన్ మరియు షుగర్ టెస్ట్ స్ట్రిప్స్.",
      isPrescription: true,
      items: [
        { en: "Insulin Vials (Cold Chain Refrigerated)", te: "ఫ్రిజ్‌లో నిల్వ చేసిన ఇన్సులిన్" },
        { en: "Blood Glucose Test Strips (50 Pack)", te: "షుగర్ చెక్ చేసుకునే టెస్ట్ స్ట్రిప్స్" },
        { en: "Sugar-Free Nutritional Powders", te: "షుగర్-ఫ్రీ ప్రోటీన్ పౌడర్లు" },
        { en: "Diabetic Foot Care Lotions", te: "కాళ్ల పగుళ్లు & చర్మ సంరక్షణ లోషన్స్" }
      ]
    },
    {
      id: "pain-relief",
      nameEn: "Pain Relief & Joint Care",
      nameTe: "నొప్పులు & కీళ్ళ నొప్పుల మందులు",
      icon: "⚡",
      descEn: "Fast-acting sprays, balms, ayurvedic oils, and tablets for back pain, knee arthritis, and muscle sprains.",
      descTe: "వ్యవసాయ పనుల్లో వచ్చే నడుము నొప్పి, మోకాళ్ళ నొప్పులు, మెడ పట్టేతకు తైలాలు, స్ప్రేలు & మాత్రలు.",
      isPrescription: false,
      items: [
        { en: "Herbal Knee & Joint Pain Relief Oils", te: "ఆయుర్వేద కీళ్ళ నొప్పుల మర్దన నూనెలు" },
        { en: "Fast Action Pain Relief Sprays & Gels", te: "పెయిన్ రిలీఫ్ స్ప్రేలు & జెల్స్" },
        { en: "Body Pain & Headache Analgesic Tablets", te: "ఒంటి నొప్పులు & తలనొప్పి మాత్రలు" },
        { en: "Hot Water Bags & Medicated Patches", te: "వేడి నీళ్ల బ్యాగులు & పెయిన్ ప్యాచెస్" }
      ]
    },
    {
      id: "baby-mother-care",
      nameEn: "Baby & Mother Care",
      nameTe: "తల్లీ బిడ్డల సంరక్షణ",
      icon: "🍼",
      descEn: "Infant baby food, gripe water, baby soaps, massage oils, diapers, and pregnancy calcium/iron tonics.",
      descTe: "చిన్న పిల్లల ఆహారాలు, గైప్ వాటర్, సబ్బులు, మసాజ్ ఆయిల్స్, డైపర్లు మరియు బాలింతల పోషకాలు.",
      isPrescription: false,
      items: [
        { en: "Baby Milk Formulas & Cerelac", te: "బేబీ మిల్క్ పౌడర్లు & సెరెలాక్" },
        { en: "Gripe Water for Infant Digestion", te: "గైప్ వాటర్ & కడుపునొప్పి డ్రాప్స్" },
        { en: "Baby Diapers & Wet Wipes (All Sizes)", te: "బేబీ డైపర్లు & బేబీ వైప్స్" },
        { en: "Baby Massage Oil, Soaps & Powders", te: "పిల్లల సబ్బులు, నూనెలు & పౌడర్లు" },
        { en: "Pregnancy Calcium & Iron Tonics", te: "గర్భిణీలు & బాలింతల ఐరన్/కాల్షియం టానిక్స్" }
      ]
    },
    {
      id: "elderly-care",
      nameEn: "Elderly Healthcare",
      nameTe: "వృద్ధుల సంరక్షణ (Elderly Care)",
      icon: "👵",
      descEn: "Adult diapers, mobility walking sticks, knee caps, back belts, and monthly medicine organizers.",
      descTe: "నడవలేని పెద్దవారికి చేతికర్రలు, అడల్ట్ డైపర్లు, మోకాళ్ళ క్యాప్స్ మరియు నెలవారీ మందుల సదుపాయం.",
      isPrescription: false,
      items: [
        { en: "Adult Diapers & Underpads (M, L, XL)", te: "అడల్ట్ డైపర్లు & ప్రొటెక్టివ్ ప్యాడ్స్" },
        { en: "Walking Sticks & Quadripod Canes", te: "చేతి కర్రలు (వాకింగ్ స్టిక్స్)" },
        { en: "Knee Supports & Lumbar Back Belts", te: "మోకాళ్ళ క్యాప్స్ & నడుము బెల్టులు" },
        { en: "7-Day Medicine Box Organizers", te: "మందుల విభజన బాక్స్‌లు (Pill Box)" }
      ]
    },
    {
      id: "first-aid",
      nameEn: "First Aid & Wound Dressing",
      nameTe: "ప్రథమ చికిత్స & గాయాల రక్షణ",
      icon: "🩹",
      descEn: "Sterile gauze, betadine liquid, bandages, cotton, burn creams, and antiseptic lotions.",
      descTe: "పొలాల్లో తగిలే గాయాలు, కోతలకు శుభ్రపరిచే బెటాడిన్, స్పిరిట్, దూది, బ్యాండేజ్ కట్లు మరియు క్రీములు.",
      isPrescription: false,
      items: [
        { en: "Betadine Antiseptic Liquid & Ointments", te: "బెటాడిన్ ద్రావణం & ఆయింట్‌మెంట్" },
        { en: "Surgical Cotton Rolls & Bandages", te: "సర్జికల్ కాటన్ & బ్యాండేజ్ కట్లు" },
        { en: "Waterproof Adhesive Band-Aids", te: "వాటర్‌ప్రూఫ్ బ్యాండ్-ఎయిడ్స్" },
        { en: "Burn Healing Creams & Lotions", te: "కాలిన గాయాల ఉపశమన క్రీములు" },
        { en: "Hydrogen Peroxide & Surgical Spirit", te: "హైడ్రోజన్ పెరాక్సైడ్ & సర్జికల్ స్పిరిట్" }
      ]
    },
    {
      id: "vitamins-tonics",
      nameEn: "Vitamins, Tonics & Energy",
      nameTe: "విటమిన్లు, టానిక్స్ & బలవర్ధకాలు",
      icon: "💊",
      descEn: "B-Complex, Calcium + Vitamin D3, Iron blood-building tonics, appetite boosters, and glucose powder.",
      descTe: "రక్తహీనత నివారణ ఐరన్ టానిక్స్, కాల్షియం మాత్రలు, బి-కాంప్లెక్స్, గ్లూకోజ్ మరియు ఆకలి సిరప్‌లు.",
      isPrescription: false,
      items: [
        { en: "B-Complex + Zinc Energy Capsules", te: "బి-కాంప్లెక్స్ + జింక్ క్యాప్సూల్స్" },
        { en: "Calcium + D3 Tablets for Bone Strength", te: "ఎముకల బలం కొరకు కాల్షియం మాత్రలు" },
        { en: "Iron & Folic Acid Blood Tonics", te: "రక్తం పెరిగే ఐరన్ టానిక్స్" },
        { en: "Appetite Stimulant Syrups", te: "ఆకలి పెరిగే టానిక్స్ & లివర్ సిరప్‌లు" },
        { en: "Instant Energy Glucose D & ORS", te: "ఇన్‌స్టంట్ గ్లూకోజ్ & ఓ.ఆర్.ఎస్ (ORS)" }
      ]
    },
    {
      id: "health-devices",
      nameEn: "Health Devices & Monitors",
      nameTe: "ఆరోగ్య పరికరాలు & మానిటర్లు",
      icon: "🩺",
      descEn: "Simple home health machines with 1-touch operation: Digital BP monitors, glucometers, nebulizers, thermometers.",
      descTe: "ఇంటి వద్దే బీపీ, షుగర్ చూసుకునే డిజిటల్ యంత్రాలు, జ్వరం థర్మామీటర్లు మరియు ఆయాసం నెబ్యులైజర్లు.",
      isPrescription: false,
      items: [
        { en: "Automatic Digital Blood Pressure Monitor", te: "డిజిటల్ బీపీ మిషన్ (సులువుగా చెక్ చేసుకునేది)" },
        { en: "Digital Blood Glucose (Sugar) Testing Kit", te: "షుగర్ చెకింగ్ మిషన్ కిట్ (స్ట్రిప్స్‌తో)" },
        { en: "Digital Flexible Tip Fever Thermometer", te: "డిజిటల్ థర్మామీటర్ (జ్వరం కొలిచేది)" },
        { en: "Compressor Nebulizer for Asthma/Wheezing", te: "నెబ్యులైజర్ మెషిన్ (దమ్ము, ఆయాసానికి)" },
        { en: "Fingertip Pulse Oximeter", te: "పల్స్ ఆక్సిమీటర్ (ఆక్సిజన్ లెవెల్స్)" }
      ]
    }
  ],

  // ========================================================================
  // 2. VETERINARY MEDICINES (పశువుల, గొర్రెల, మేకల మందులు)
  // ========================================================================
  animalCategories: [
    {
      id: "cattle-buffalo",
      nameEn: "Cattle & Buffalo (ఆవులు, గేదెలు)",
      nameTe: "పాడి ఆవులు & గేదెలు",
      icon: "🐄",
      descEn: "High milk yield calcium gels, mineral mixtures, dewormers, mastitis udder care, digestive powders.",
      descTe: "పాల దిగుబడి పెంచే క్యాల్షియం జెల్స్, దాణా మిశ్రమాలు, పొదుగు వాపు నివారణ, జీర్ణక్రియ పౌడర్లు మరియు ఈతల బలం."
    },
    {
      id: "sheep-goats",
      nameEn: "Sheep & Goats (గొర్రెలు, మేకలు)",
      nameTe: "గొర్రెలు & మేకలు (జీవాల సంరక్షణ)",
      icon: "🐐",
      descEn: "Flock deworming liquids, weight gain tonics, respiratory treatments, and foot-rot sprays.",
      descTe: "మందల నట్టల నివారణ మందులు (Drench), బరువు పెరిగే టానిక్స్, గిట్టల వ్యాధి స్ప్రేలు మరియు జలుబు మందులు."
    },
    {
      id: "poultry-birds",
      nameEn: "Poultry & Country Birds (కోళ్ళు, నాటుకోళ్ళు)",
      nameTe: "కోళ్ల ఫారాలు & నాటుకోళ్ళు",
      icon: "🐔",
      descEn: "Egg shell calcium, anti-stress electrolytes, growth vitamins, and shed disinfectant solutions.",
      descTe: "గుడ్ల పెంకు బలానికి కాల్షియం, వడదెబ్బ నివారణ ఎలక్ట్రోలైట్స్, గ్రోత్ విటమిన్లు మరియు షెడ్ శానిటైజర్స్."
    },
    {
      id: "dogs-pets",
      nameEn: "Dogs, Cats & Pets (కుక్కలు, పెంపుడు జంతువులు)",
      nameTe: "కుక్కలు & పిల్లులు (పెంపుడు జీవాలు)",
      icon: "🐕",
      descEn: "Puppy dewormers, anti-tick soaps and shampoos, skin allergy lotions, and calcium bone chewables.",
      descTe: "పిల్ల కుక్కల నట్టల సిరప్‌లు, గోమార్ల సబ్బులు, ఎముకల బలం మాత్రలు మరియు చర్మ క్రీములు."
    }
  ],

  veterinaryMedicineTypes: [
    {
      id: "dewormers",
      titleEn: "Dewormers (నట్టల నివారణ మందులు)",
      titleTe: "నట్టల నివారణ మందులు (Dewormers)",
      icon: "🪱",
      descEn: "Seasonal broad-spectrum anthelmintics (Bolus, Liquid Drench, Powders) to kill stomach worms, flukes, and improve animal weight and milk.",
      descTe: "పశువులు, గొర్రెల కడుపులోని నట్టలు, ఏలికపాములను చంపి మేత బాగా మేసేలా, పాలు పెరిగేలా చేసే లిక్విడ్లు & బోలస్ మాత్రలు.",
      items: [
        "Albendazole / Fenbendazole Liquid Suspensions (గొర్రెలు & పశువులకు)",
        "Oxyclozanide + Levamisole Broad Spectrum Drench",
        "Ivermectin Bolus & Injections (పేలు, నట్టలకు)",
        "Puppy Deworming Drops for Dogs"
      ]
    },
    {
      id: "vitamins-minerals-calcium",
      titleEn: "Vitamins, Minerals & Calcium (క్యాల్షియం & విటమిన్లు)",
      titleTe: "క్యాల్షియం, విటమిన్లు & మినరల్ మిశ్రమాలు",
      icon: "🥛",
      descEn: "High-absorption oral calcium gels for calving cows, Chelated mineral mixtures for repeat breeding control, and AD3E fertility tonics.",
      descTe: "ఈనిన వెంటనే ఇచ్చే కాల్షియం జెల్, ఎముకల బలం, చూడు నిలబడేందుకు మినరల్ మిశ్రమాలు మరియు విటమిన్ AD3E టానిక్స్.",
      items: [
        "High Potency Oral Calcium Gels (300g Tube)",
        "Chelated Mineral Mixture for High Milk Yield (1kg / 5kg Pack)",
        "Vitamin AD3E + H Biotin Formulations for Udder Growth",
        "Veterinary Liver Tonics for Digestion & Appetite"
      ]
    },
    {
      id: "antibiotics",
      titleEn: "Veterinary Antibiotics (పశు యాంటీబయాటిక్స్)",
      titleTe: "పశు యాంటీబయాటిక్స్ & ఇంజెక్షన్లు",
      icon: "💉",
      descEn: "High-grade veterinary antibiotics dispensed strictly on prescription/guidance of a qualified Veterinary Doctor.",
      descTe: "తీవ్రమైన జ్వరం, శ్వాసకోశ ఇన్ఫెక్షన్లు మరియు గాయాలకు వెటర్నరీ డాక్టర్ సలహా మేరకు మాత్రమే ఇచ్చే ఔషధాలు.",
      items: [
        "Oxytetracycline Veterinary Injections",
        "Broad-spectrum Antibiotic Bolus for Cattle",
        "Antiseptic Healing Wound Sprays & Powders",
        "Anti-inflammatory Fever & Pain Injections"
      ]
    },
    {
      id: "tick-fly-control",
      titleEn: "Tick, Mite & Fly Control (పేలు & గోమార్ల నివారణ)",
      titleTe: "పేలు, గోమార్లు & ఈగల నివారణ",
      icon: "🦟",
      descEn: "Safe external dip liquids, pour-on solutions, and soaps to protect livestock from blood-sucking ticks and flies.",
      descTe: "పశువులు, గొర్రెల ఒంటిపై రక్తం తాగే గోమార్లు, పేలు, పిడుదులను నాశనం చేసే లిక్విడ్లు, స్ప్రేలు & సబ్బులు.",
      items: [
        "Amitraz / Deltamethrin Veterinary Dip Concentrates",
        "Pour-on External Parasiticides for Cattle",
        "Herbal Fly-repellent Wound Healing Sprays",
        "Anti-tick Soaps & Shampoos for Pets"
      ]
    },
    {
      id: "mastitis-care",
      titleEn: "Mastitis & Udder Care (పొదుగు వాపు నివారణ)",
      titleTe: "పొదుగు వాపు నివారణ & సంరక్షణ",
      icon: "🛡️",
      descEn: "Udder massage creams, teat dips, and intramammary tubes to prevent and treat mastitis in dairy cattle and buffaloes.",
      descTe: "పొదుగు గట్టిపడకుండా, పాలు చెడిపోకుండా కాపాడే మూలికా ఆయింట్‌మెంట్లు, స్ప్రేలు మరియు ట్యూబ్స్.",
      items: [
        "Intramammary Infusion Tubes (Doctor Advised)",
        "Herbal Udder Massage Creams & Soothing Ointments",
        "Teat Dip Disinfectant Solutions after Milking",
        "Somatic Cell Reducer & Udder Immunity Powders"
      ]
    },
    {
      id: "feed-supplements",
      titleEn: "Feed Supplements & Fat Boosters (దాణా పోషకాలు)",
      titleTe: "దాణా సప్లిమెంట్లు & వెన్న శాతం (FAT) పెంచేవి",
      icon: "🌾",
      descEn: "Bypass fat for higher butterfat (FAT & SNF) in milk, rumen buffers for bloating relief, and mineral lick salt blocks.",
      descTe: "పాలలో వెన్న శాతం (FAT & SNF) పెంచే బైపాస్ ఫ్యాట్, కడుపుబ్బరం తగ్గించే బఫర్ పౌడర్లు మరియు దాణా మిశ్రమాలు.",
      items: [
        "Bypass Fat 99% for Higher Milk Fat & SNF",
        "Live Yeast Culture Rumen Buffers for Digestion & Bloating",
        "Mineralized Lick Salt Blocks for Cattle & Goats",
        "Weight Gain Tonic Powders for Sheep & Lambs"
      ]
    }
  ],

  // ========================================================================
  // 3. CLINIC SERVICES (కేవలం మనుషులకే! - Clinic ONLY for People)
  // ========================================================================
  clinicServices: [
    {
      id: "general-checkup",
      titleEn: "General Health Checkup (సాధారణ వైద్య పరీక్ష)",
      titleTe: "సాధారణ ఆరోగ్య పరీక్ష & సంప్రదింపులు",
      icon: "🩺",
      descEn: "Physical checkup, blood pressure, pulse, temperature, and stethoscope chest examination by experienced female RMP practitioner.",
      descTe: "వృద్ధులు, మహిళలు, పిల్లలకు రక్తపోటు, జ్వరం, శ్వాస పరీక్షలు చేసి సాధారణ రోగ నిర్ధారణ చేయడం.",
      fee: "₹[100]"
    },
    {
      id: "bp-sugar-testing",
      titleEn: "Instant BP & Blood Sugar Testing",
      titleTe: "తక్షణ బీపీ & రక్తంలో షుగర్ పరీక్ష",
      icon: "🩸",
      descEn: "1-minute digital BP check and accurate instant capillary blood glucose test with hygiene disposable lancets.",
      descTe: "ఒక్క నిమిషంలో ఖచ్చితమైన బీపీ మరియు షుగర్ పరీక్ష. నెలవారీ రీడింగ్స్ రికార్డ్ కార్డు ఉచితంగా అందించబడుతుంది.",
      fee: "₹[50] / Free with monthly medicines"
    },
    {
      id: "wound-dressing",
      titleEn: "First Aid & Minor Wound Dressing",
      titleTe: "ప్రథమ చికిత్స & గాయాలకు డ్రెస్సింగ్",
      icon: "🩹",
      descEn: "Antiseptic cleaning, sterile gauze bandage dressing for cuts, farm thorns, abrasions, and burn injuries.",
      descTe: "వ్యవసాయ పనుల్లో తగిలే దెబ్బలు, కోతలు, ముల్లు గుచ్చుకోవడాలు, కాలిన గాయాలను యాంటీసెప్టిక్‌తో శుభ్రపరిచి పట్టీ కట్టడం.",
      fee: "₹[80 - 150]"
    },
    {
      id: "injections-drips",
      titleEn: "Injections & IV Saline Drips",
      titleTe: "ఇంజెక్షన్లు & సెలైన్ బాటిల్స్ ఎక్కించడం",
      icon: "💉",
      descEn: "Safe, sterile single-use syringe administration of prescribed injections and rehydration IV fluids.",
      descTe: "వైద్యుల సూచనల మేరకు సింగిల్-యూజ్ స్టెరైల్ సూదులతో మాత్రమే సురక్షితంగా ఇంజెక్షన్లు మరియు సెలైన్ బాటిల్స్ ఎక్కించడం.",
      fee: "₹[50 - 150]"
    },
    {
      id: "seasonal-fever",
      titleEn: "Seasonal Illness & Flu Care",
      titleTe: "సీజనల్ జ్వరాలు, జలుబు & దగ్గు ఉపశమనం",
      icon: "🌡️",
      descEn: "Prompt symptom diagnosis and relief for viral fevers, monsoon allergies, body pains, and weakness.",
      descTe: "వర్షాకాలం, చలికాలంలో వచ్చే జ్వరాలు, దగ్గు, ఆయాసం, ఒంటి నొప్పులకు తక్షణ ఉపశమన వైద్యం.",
      fee: "₹[100]"
    },
    {
      id: "emergency-stabilization",
      titleEn: "Rural Emergency Stabilization & Referral",
      titleTe: "అత్యవసర ప్రాథమిక సహాయం & హాస్పిటల్ గైడెన్స్",
      icon: "🚑",
      descEn: "First-responder stabilization for acute pain or injuries, with 108 ambulance coordination to Jangaon / District hospital.",
      descTe: "తీవ్రమైన అత్యవసర సమయాల్లో రోగిని స్థిరీకరించి, 108 అంబులెన్స్ పిలిపించి జిల్లా పెద్ద హాస్పిటల్స్‌కు పంపే మార్గదర్శకత్వం.",
      fee: "Immediate Priority Service"
    }
  ],

  // ========================================================================
  // 4. FAQS (తరచుగా అడిగే ప్రశ్నలు)
  // ========================================================================
  faqs: [
    {
      qEn: "Is the clinic for animals or only for people?",
      qTe: "క్లినిక్ పశువులకా లేక కేవలం మనుషులకేనా?",
      aEn: "Our clinic is strictly and exclusively for human patients (run by [Doctor Name], RMP). For animal sickness, we sell all veterinary medicines, calcium, and tonics, while farmers should consult their local veterinary doctor for animal treatments.",
      aTe: "మా క్లినిక్ కేవలం మనుషులకు మాత్రమే! (గ్రామ ప్రజలు, మహిళలు, వృద్ధులు, పిల్లల వైద్యం). పశువులకు సంబంధించి అన్ని రకాల మందులు మా వద్ద లభిస్తాయి, కానీ పశువుల చికిత్స కొరకు వెటర్నరీ డాక్టర్‌ను సంప్రదించాలి."
    },
    {
      qEn: "Do you deliver medicines to nearby villages in Kodakandla Mandal?",
      qTe: "కొడకండ్ల మండలంలోని సమీప గ్రామాలకు మందులు డెలివరీ చేస్తారా?",
      aEn: "Yes! We deliver medicines to Narsingapur, Kodakandla, Ramavaram, Mondrai, Regula, Edunuthula, Lakshmakkapally, and nearby thandas. Just call 8008200947 or send a photo on WhatsApp.",
      aTe: "అవును! నర్సింగాపూర్, కొడకండ్ల, రామావరం, మొండ్రాయి, రేగుల, ఏడునూతుల మరియు పరిసర తండాలకు హోమ్ డెలివరీ సదుపాయం కలదు. 8008200947 లేదా 9603232767 కి ఫోన్ చేయండి."
    },
    {
      qEn: "Can I buy prescription medicines without a doctor's slip?",
      qTe: "డాక్టర్ చీటీ (Prescription) లేకుండా మందులు ఇస్తారా?",
      aEn: "Prescription medicines for BP, sugar, cardiac, and scheduled drugs require a valid doctor's prescription. General medicines for mild fever, headache, first aid, and vitamins are available directly.",
      aTe: "చట్ట ప్రకారం బీపీ, షుగర్ మరియు యాంటీబయాటిక్స్ వంటి మందులకు డాక్టర్ చీటీ తప్పనిసరి. సాధారణ జ్వరం, తలనొప్పి, విటమిన్లు మరియు ప్రథమ చికిత్స మందులు నేరుగా లభిస్తాయి."
    },
    {
      qEn: "What are the clinic timings of the lady doctor?",
      qTe: "లేడీ డాక్టర్ గారి క్లినిక్ సమయాలు ఏమిటి?",
      aEn: "Clinic runs in two sessions: Morning [8:00 AM – 1:00 PM] and Evening [5:00 PM – 9:30 PM] (Sunday morning [8:30 AM – 1:30 PM]). Women and elderly patients can consult comfortably.",
      aTe: "క్లినిక్ రోజూ రెండు పూటలా నడుస్తుంది: ఉదయం [8:00 నుండి 1:00 వరకు], సాయంత్రం [5:00 నుండి రాత్రి 9:30 వరకు]. మహిళలు మరియు వృద్ధులకు ప్రత్యేక శ్రద్ధతో పరీక్షలు చేస్తారు."
    },
    {
      qEn: "What should I do in case of a late-night medical emergency?",
      qTe: "రాత్రి వేళల్లో అత్యవసరంగా మందులు అవసరమైతే ఎవరికి ఫోన్ చేయాలి?",
      aEn: "Call 8008200947 or 9603232767 immediately. Proprietor Dandempalli Pradeep and our team reside locally in Narsingapur and are available 24/7 for urgent life-saving medicines.",
      aTe: "వెంటనే 8008200947 లేదా 9603232767 కు కాల్ చేయండి. ప్రొప్రైటర్ దండెంపల్లి ప్రదీప్ గారు స్థానికంగానే ఉంటారు కాబట్టి రాత్రి వేళల్లో అత్యవసర మందులు అందిస్తారు."
    }
  ],

  // ========================================================================
  // 5. TESTIMONIALS (గ్రామస్థులు & రైతుల మాటలు)
  // ========================================================================
  testimonials: [
    {
      nameEn: "B. Mallaiah",
      nameTe: "బి. మల్లయ్య",
      villageEn: "Dairy Farmer, Kodakandla",
      villageTe: "పాడి రైతు, కొడకండ్ల",
      commentEn: "We buy calcium gels, deworming bolus, and mineral mixtures from Pradeep's shop for our 6 buffaloes. Milk yield has improved noticeably. Very honest shop for farmers!",
      commentTe: "మా 6 గేదెలకు నట్టల మందులు, కాల్షియం జెల్ ప్రదీప్ గారి షాప్‌లోనే తీసుకుంటాము. పాలల్లో వెన్న శాతం పెరిగింది. రైతులకు నమ్మకమైన షాప్."
    },
    {
      nameEn: "Smt. Renuka",
      nameTe: "శ్రీమతి రేణుక",
      villageEn: "Homemaker, Narsingapur",
      villageTe: "గృహిణి, నర్సింగాపూర్",
      commentEn: "Having an experienced lady doctor in our own village is a blessing. Women can talk about their health problems without hesitation. The medicines and treatment are very good.",
      commentTe: "మా నర్సింగాపూర్ ఊర్లోనే లేడీ డాక్టర్ ఉండటం మా మహిళలకు ఎంతో ఉపయోగం. ఏ సమస్య వచ్చినా నిస్సంకోచంగా చూపించుకుంటాము. ఫీజు కూడా చాలా తక్కువ."
    },
    {
      nameEn: "K. Narayana",
      nameTe: "కె. నారాయణ",
      villageEn: "Elderly Citizen (BP & Sugar Patient), Ramavaram",
      villageTe: "సీనియర్ సిటిజన్ (బీపీ & షుగర్ రోగి), రామావరం",
      commentEn: "I am 70 years old and cannot travel to town every month. They send my monthly BP and diabetes medicines directly to my home in Ramavaram with bill.",
      commentTe: "నాకు 70 ఏళ్ళు. ప్రతి నెలా పట్టణానికి వెళ్ళలేను. నా బీపీ, షుగర్ మందులను రామావరంలోని మా ఇంటికే తెచ్చి ఇస్తారు. 8008200947 కి ఫోన్ చేస్తే చాలు."
    }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.STORE_DATA = STORE_DATA;
}
