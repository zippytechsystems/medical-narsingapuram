/**
 * ==========================================================================
 * Pallavi Medical Store - Interactive Frontend Application Logic
 * ==========================================================================
 * Handles i18n, responsive drawer, WhatsApp order triggers, veterinary enquiries,
 * human medicine queries, and clinic token bookings.
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Internationalization (i18n)
  if (window.I18N) {
    window.I18N.init();
  }

  // 2. Mobile Menu Navigation Drawer Toggle
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileNavDrawer = document.getElementById("mobileNavDrawer");
  if (mobileMenuToggle && mobileNavDrawer) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileNavDrawer.classList.toggle("active");
      const isActive = mobileNavDrawer.classList.contains("active");
      mobileMenuToggle.innerHTML = isActive ? "✕" : "☰";
      mobileMenuToggle.setAttribute("aria-expanded", isActive ? "true" : "false");
    });

    // Close drawer when clicking a link
    mobileNavDrawer.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNavDrawer.classList.remove("active");
        mobileMenuToggle.innerHTML = "☰";
        mobileMenuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 3. Language Toggle Button
  const langToggleBtn = document.getElementById("langToggleBtn");
  if (langToggleBtn && window.I18N) {
    langToggleBtn.addEventListener("click", () => {
      window.I18N.toggleLang();
      populateConfigData();
    });
  }

  // 4. Populate Config Data & Links across page elements
  populateConfigData();

  // 5. Setup FAQ Accordion Handlers
  setupFaqAccordions();

  // 6. Setup Form Handlers (Prescription, Vet, Human Medicine, Clinic, Delivery)
  setupPrescriptionHandlers();
  setupVeterinaryEnquiryHandler();
  setupHumanMedicineEnquiryHandler();
  setupClinicBookingHandlers();
  setupDeliveryOrderHandler();

  // 7. Register Dynamic Render Hook for Language Changes
  window.renderDynamicContent = () => {
    populateConfigData();
    if (window.renderPageSpecificData) {
      window.renderPageSpecificData();
    }
  };

  // Run initial page-specific renderer if defined
  if (window.renderPageSpecificData) {
    window.renderPageSpecificData();
  }
});

/**
 * Injects dynamic phone links, addresses, doctor details and licence numbers from config.js
 */
function populateConfigData() {
  const cfg = window.STORE_CONFIG;
  if (!cfg) return;

  const isTe = window.I18N && window.I18N.currentLang === "te";

  // Business Name
  document.querySelectorAll(".dyn-business-name").forEach(el => {
    el.textContent = isTe ? (cfg.shopNameTe || cfg.businessNameTe) : (cfg.shopNameEn || cfg.businessNameEn);
  });

  // Proprietor Name
  document.querySelectorAll(".dyn-proprietor").forEach(el => {
    el.textContent = isTe ? cfg.proprietorTe : cfg.proprietorEn;
  });

  // Business Tagline
  document.querySelectorAll(".dyn-tagline").forEach(el => {
    el.textContent = isTe ? cfg.taglineTe : cfg.taglineEn;
  });

  // Primary Phone Call Links (8008200947)
  document.querySelectorAll(".dyn-phone-link, .dyn-primary-phone").forEach(el => {
    el.href = `tel:${cfg.contact.primaryPhone}`;
    if (!el.hasAttribute("data-custom-label")) {
      el.innerHTML = `📞 ${cfg.contact.primaryPhoneDisplay || cfg.contact.primaryPhone}`;
    }
  });

  // Secondary Phone Call Links (9603232767)
  document.querySelectorAll(".dyn-secondary-phone, .dyn-emergency-link").forEach(el => {
    el.href = `tel:${cfg.contact.secondaryPhone}`;
    if (!el.hasAttribute("data-custom-label")) {
      el.innerHTML = `📞 ${cfg.contact.secondaryPhoneDisplay || cfg.contact.secondaryPhone}`;
    }
  });

  // WhatsApp Links (918008200947)
  document.querySelectorAll(".dyn-wa-link").forEach(el => {
    const defaultMsg = isTe
      ? `నమస్తే పల్లవి మెడికల్ స్టోర్ (నర్సింగాపూర్), నాకు మందుల వివరాలు కావాలి.`
      : `Hello Pallavi Medical Store (Narsingapur), I need information about medicines and availability.`;
    el.href = `https://api.whatsapp.com/send?phone=${cfg.contact.whatsappNumber}&text=${encodeURIComponent(defaultMsg)}`;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });

  // Doctor Details
  document.querySelectorAll(".dyn-doctor-name").forEach(el => {
    el.textContent = isTe ? cfg.doctor.nameTe : cfg.doctor.nameEn;
  });

  document.querySelectorAll(".dyn-doctor-designation").forEach(el => {
    el.textContent = isTe ? cfg.doctor.designationTe : cfg.doctor.designationEn;
  });

  document.querySelectorAll(".dyn-doctor-qualification").forEach(el => {
    el.textContent = isTe ? cfg.doctor.qualificationTe : cfg.doctor.qualificationEn;
  });

  document.querySelectorAll(".dyn-doctor-experience").forEach(el => {
    el.textContent = isTe ? cfg.doctor.experienceTe : cfg.doctor.experienceEn;
  });

  document.querySelectorAll(".dyn-doctor-fee").forEach(el => {
    el.textContent = isTe ? cfg.doctor.consultationFeeTe : cfg.doctor.consultationFeeEn;
  });

  // Full Address
  document.querySelectorAll(".dyn-address").forEach(el => {
    el.textContent = isTe ? cfg.location.fullAddressTe : cfg.location.fullAddressEn;
  });

  // Timings
  document.querySelectorAll(".dyn-timings-store").forEach(el => {
    el.textContent = isTe ? cfg.timings.shopTimingsTe : cfg.timings.shopTimingsEn;
  });

  document.querySelectorAll(".dyn-timings-clinic-morn").forEach(el => {
    el.textContent = isTe ? cfg.timings.clinicMorningTe : cfg.timings.clinicMorningEn;
  });

  document.querySelectorAll(".dyn-timings-clinic-eve").forEach(el => {
    el.textContent = isTe ? cfg.timings.clinicEveningTe : cfg.timings.clinicEveningEn;
  });

  document.querySelectorAll(".dyn-timings-clinic-sun").forEach(el => {
    el.textContent = isTe ? cfg.timings.clinicSundayTe : cfg.timings.clinicSundayEn;
  });

  // Licences
  document.querySelectorAll(".dyn-licence-drug").forEach(el => {
    el.textContent = cfg.licences.humanMedicinesLicence;
  });

  document.querySelectorAll(".dyn-licence-vet").forEach(el => {
    el.textContent = cfg.licences.veterinaryLicence;
  });

  document.querySelectorAll(".dyn-licence-rmp").forEach(el => {
    el.textContent = cfg.licences.rmpRegNo;
  });

  // Surrounding Delivery Villages
  const villagesContainer = document.getElementById("deliveryVillagesList");
  if (villagesContainer && (cfg.serviceVillages || cfg.deliveryVillages)) {
    const list = cfg.serviceVillages || cfg.deliveryVillages;
    villagesContainer.innerHTML = list.map(v => `
      <span class="village-tag">📍 ${isTe ? v.te : v.en} (${v.distance})</span>
    `).join("");
  }
}

/**
 * Setup FAQ collapsible accordions
 */
function setupFaqAccordions() {
  document.querySelectorAll(".faq-question-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const parentItem = btn.closest(".faq-item");
      if (!parentItem) return;

      const wasActive = parentItem.classList.contains("active");

      // Close all other items
      document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");
        const b = item.querySelector(".faq-question-btn");
        if (b) b.setAttribute("aria-expanded", "false");
      });

      // Toggle current
      if (!wasActive) {
        parentItem.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * Setup prescription upload & WhatsApp quick forward
 */
function setupPrescriptionHandlers() {
  const form = document.getElementById("prescriptionUploadForm");
  if (!form) return;

  const fileInput = document.getElementById("prescriptionFile");
  const filePreview = document.getElementById("filePreview");

  if (fileInput && filePreview) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        filePreview.style.display = "block";
        filePreview.innerHTML = `<strong>Selected File:</strong> 📄 ${file.name} (${Math.round(file.size / 1024)} KB)`;
      } else {
        filePreview.style.display = "none";
      }
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cfg = window.STORE_CONFIG;
    const isTe = window.I18N && window.I18N.currentLang === "te";

    const name = document.getElementById("patientName")?.value || "";
    const phone = document.getElementById("patientPhone")?.value || "";
    const village = document.getElementById("patientVillage")?.value || "";
    const notes = document.getElementById("prescriptionNotes")?.value || "";

    const msg = isTe
      ? `నమస్తే పల్లవి మెడికల్ స్టోర్ (నర్సింగాపూర్),\n\nనేను మందుల ప్రిస్క్రిప్షన్ చీటీ పంపిస్తున్నాను.\n\n👤 పేరు: ${name}\n📞 ఫోన్: ${phone}\n🏡 గ్రామం: ${village}\n📝 వివరాలు: ${notes}\n\nదయచేసి మందులు ఉన్నాయో లేదో మరియు డెలివరీ సమయం తెలియజేయగలరు.`
      : `Hello Pallavi Medical Store (Narsingapur),\n\nI want to order medicines with doctor's prescription.\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n🏡 Village: ${village}\n📝 Details: ${notes}\n\nPlease confirm availability and delivery time.`;

    const waUrl = `https://api.whatsapp.com/send?phone=${cfg.contact.whatsappNumber}&text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  });
}

/**
 * Setup Veterinary Medicine Enquiry Form Handler
 */
function setupVeterinaryEnquiryHandler() {
  const form = document.getElementById("vetEnquiryForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cfg = window.STORE_CONFIG;
    const isTe = window.I18N && window.I18N.currentLang === "te";

    const animalType = document.getElementById("vetAnimalType")?.value || "";
    const count = document.getElementById("vetAnimalCount")?.value || "";
    const issue = document.getElementById("vetProblem")?.value || "";
    const village = document.getElementById("vetVillage")?.value || "";
    const farmerName = document.getElementById("vetFarmerName")?.value || "";

    const msg = isTe
      ? `నమస్తే పల్లవి మెడికల్ స్టోర్ (దండెంపల్లి ప్రదీప్ గారు),\n\nనేను పశువుల/జీవాల మందుల కోసం సంప్రదిస్తున్నాను.\n\n🐄 జీవం రకం: ${animalType}\n🔢 సంఖ్య: ${count}\n⚠️ సమస్య/అవసరమైన మందు: ${issue}\n🏡 గ్రామం: ${village}\n👤 రైతు పేరు: ${farmerName}\n\nదయచేసి మందుల వివరాలు మరియు లభ్యత తెలపగలరు.`
      : `Hello Pallavi Medical Store,\n\nI am inquiring about veterinary medicines for my animals.\n\n🐄 Animal Type: ${animalType}\n🔢 Number of Animals: ${count}\n⚠️ Health Problem/Requirement: ${issue}\n🏡 Village: ${village}\n👤 Farmer Name: ${farmerName}\n\nPlease provide medicine details and availability.`;

    const waUrl = `https://api.whatsapp.com/send?phone=${cfg.contact.whatsappNumber}&text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  });
}

/**
 * Setup Human Medicine Availability Enquiry Form Handler
 */
function setupHumanMedicineEnquiryHandler() {
  const form = document.getElementById("humanMedicineEnquiryForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cfg = window.STORE_CONFIG;
    const isTe = window.I18N && window.I18N.currentLang === "te";

    const medicineName = document.getElementById("medName")?.value || "";
    const quantity = document.getElementById("medQuantity")?.value || "";
    const personName = document.getElementById("medPersonName")?.value || "";
    const village = document.getElementById("medVillage")?.value || "";

    const msg = isTe
      ? `నమస్తే పల్లవి మెడికల్ స్టోర్ (నర్సింగాపూర్),\n\nనాకు ఈ మనుషుల మందులు కావాలి:\n\n💊 మందు పేరు: ${medicineName}\n🔢 పరిమాణం: ${quantity}\n👤 పేరు: ${personName}\n🏡 గ్రామం: ${village}\n\nదయచేసి ఈ మందులు స్టాక్ ఉన్నాయో లేదో తెలపగలరు.`
      : `Hello Pallavi Medical Store,\n\nI need following human medicines:\n\n💊 Medicine Name: ${medicineName}\n🔢 Quantity: ${quantity}\n👤 Name: ${personName}\n🏡 Village: ${village}\n\nPlease check availability in stock.`;

    const waUrl = `https://api.whatsapp.com/send?phone=${cfg.contact.whatsappNumber}&text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  });
}

/**
 * Setup clinic consultation token booking form (People Only!)
 */
function setupClinicBookingHandlers() {
  const form = document.getElementById("clinicBookingForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cfg = window.STORE_CONFIG;
    const isTe = window.I18N && window.I18N.currentLang === "te";

    const name = document.getElementById("bookPatientName")?.value || "";
    const age = document.getElementById("bookPatientAge")?.value || "";
    const gender = document.getElementById("bookPatientGender")?.value || "";
    const village = document.getElementById("bookPatientVillage")?.value || "";
    const slot = document.getElementById("bookTimeSlot")?.value || "";
    const reason = document.getElementById("bookReason")?.value || "";

    const msg = isTe
      ? `నమస్తే [వైద్యురాలి పేరు], RMP గారు (పల్లవి మెడికల్ స్టోర్ క్లినిక్),\n\nనేను మనుషుల క్లినిక్ సంప్రదింపుల కోసం టోకెన్ అడగాలనుకుంటున్నాను.\n\n👤 రోగి పేరు: ${name} (వయస్సు: ${age}, లింగం: ${gender})\n🏡 గ్రామం: ${village}\n⏰ సమయం: ${slot}\n🩺 సమస్య: ${reason}\n\nదయచేసి టోకెన్ సమయం తెలియజేయగలరు.`
      : `Hello [Doctor Name], RMP (Pallavi Medical Store Clinic),\n\nI would like to request a consultation slot at the people's clinic.\n\n👤 Patient Name: ${name} (Age: ${age}, Gender: ${gender})\n🏡 Village: ${village}\n⏰ Preferred Slot: ${slot}\n🩺 Health Concern: ${reason}\n\nPlease confirm consultation timing.`;

    const waUrl = `https://api.whatsapp.com/send?phone=${cfg.contact.whatsappNumber}&text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  });
}

/**
 * Setup home delivery order form
 */
function setupDeliveryOrderHandler() {
  const form = document.getElementById("deliveryOrderForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cfg = window.STORE_CONFIG;
    const isTe = window.I18N && window.I18N.currentLang === "te";

    const name = document.getElementById("delivName")?.value || "";
    const phone = document.getElementById("delivPhone")?.value || "";
    const village = document.getElementById("delivVillage")?.value || "";
    const items = document.getElementById("delivItems")?.value || "";

    const msg = isTe
      ? `నమస్తే పల్లవి మెడికల్ స్టోర్ (నర్సింగాపూర్),\n\nగ్రామానికి మందుల హోమ్ డెలివరీ ఆర్డర్:\n\n👤 పేరు: ${name}\n📞 ఫోన్: ${phone}\n🏡 గ్రామం: ${village}\n📦 కావలసిన మందులు: ${items}\n\nదయచేసి డెలివరీ ఎప్పుడు వస్తుందో చెప్పగలరు.`
      : `Hello Pallavi Medical Store,\n\nVillage Home Delivery Request:\n\n👤 Name: ${name}\n📞 Phone: ${phone}\n🏡 Village: ${village}\n📦 Required Items: ${items}\n\nPlease inform delivery time.`;

    const waUrl = `https://api.whatsapp.com/send?phone=${cfg.contact.whatsappNumber}&text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  });
}
