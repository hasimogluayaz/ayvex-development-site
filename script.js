/* ============================================================
   AYVEX DEVELOPMENT — script.js
   Aurora canvas · 3D tilt · Magnetic buttons · Scroll progress
   ============================================================ */

/* ─── i18n Translations ─────────────────────────────────── */
const translations = {
  tr: {
    "nav.projects":  "Ürünler",
    "nav.services":  "Hizmetler",
    "nav.why":       "Neden Biz",
    "nav.process":   "Süreç",
    "nav.faq":       "SSS",
    "nav.cta":       "Teklif Al",

    "hero.eyebrow":      "Web · Mobil · SaaS Ürün Stüdyosu",
    "hero.titleLine1":   "Dijital ürününüzü",
    "hero.titleLine2":   "uçtan uca kurarız.",
    "hero.titleLine3":   "Sonra onu yayına çıkarırız.",
    "hero.titleLine3a":  "Sonra onu",
    "hero.rot1":         "yayına çıkarırız.",
    "hero.rot2":         "hızlandırırız.",
    "hero.rot3":         "ölçekleriz.",
    "hero.rot4":         "büyütürüz.",
    "hero.text":         "AyveX Development; web sitesi, mobil uygulama ve SaaS ürünleri için strateji, arayüz, yazılım ve yayına alma sürecini tek ekipte toplar. Hızlı açılan, güvenilir ve ölçeklenebilir ürünler geliştirir; yayından sonra bakım ve büyüme tarafını da yönetiriz.",
    "hero.primaryCta":   "Projeni Başlatalım",
    "hero.secondaryCta": "Canlı İşleri Gör",

    "hero.metric1Text":  "Canlı ürün deneyimi",
    "hero.metric2Text":  "Tarayıcı aracı",
    "hero.metric3Text":  "İlk dönüş hedefi",

    "hero.panelTitle":  "Ürün Komuta Merkezi",
    "hero.panel1Label": "Loguna",
    "hero.panel1Value": "Canlı",
    "hero.panel2Label": "ZapFile",
    "hero.panel2Value": "Canlı",
    "hero.panel3Label": "Platform",
    "hero.panel3Value": "Web + Mobil",
    "hero.panel4Label": "Operasyon",
    "hero.panel4Value": "Deploy + Bakım",

    "trust.text": "Çalıştığımız teknolojiler:",
    "trust.live": "Ürün hızında teknoloji seçimi",

    "work.eyebrow":    "Ürünlerimiz",
    "work.title":      "Canlı ürünler, gerçek sonuçlar.",
    "work.text":       "Sadece vitrin tasarlamıyoruz; kullanılan, ölçülen ve geliştirilen dijital ürünler kuruyoruz. Aşağıda bu yaklaşımın çalışan örnekleri var.",
    "work.card1Type":  "Eğitim Teknolojisi",
    "work.card1Title": "Loguna",
    "work.card1Text":  "TYT, AYT ve LGS öğrencileri için akıllı çalışma asistanı: müfredat takibi, net analizi, haftalık plan ve hata defteri. Mobil + web, tek ürün — ücretsiz.",
    "work.card1Link1": "↗ loguna.com.tr",
    "work.card1Link2": "↗ Play Store",
    "work.card2Type":  "Tarayıcı Araçları",
    "work.card2Title": "ZapFile",
    "work.card2Text":  "Tarayıcıda çalışan 71 dosya aracı: dönüştürme, sıkıştırma, düzenleme. Dosyalarınız cihazınızda kalır, sunucuya yüklenmez. Sınırsız ve ücretsiz.",
    "work.card2Link1": "↗ zapfile.xyz",
    "work.card3Type":  "Kurumsal Site",
    "work.card3Title": "AyveX Development",
    "work.card3Text":  "Şu an gezindiğiniz site: hızlı statik mimari, iki dilli içerik, modern animasyonlar ve Vercel üzerinde production deploy.",
    "work.card3Link1": "↗ Bu Site",

    "services.eyebrow":    "Hizmetler",
    "services.title":      "Stratejiden yayına, tek teknik ekip.",
    "services.text":       "Marka sitesi, web uygulaması, mobil uygulama veya SaaS aracınız için doğru kapsamı çıkarır; tasarım, geliştirme, deploy ve bakım adımlarını tek planda yönetiriz.",
    "services.card1Title": "Yüksek Performanslı Web Siteleri",
    "services.card1Text":  "Güven veren, hızlı açılan, SEO uyumlu ve yönetilebilir web siteleri. Sadece güzel değil, ölçülebilir.",
    "services.card2Title": "Mobil ve Web Uygulamaları",
    "services.card2Text":  "Kullanıcı hesabı, panel, bildirim, abonelik ve içerik akışlarını aynı ürün deneyiminde kurgularız.",
    "services.card3Title": "SaaS ve İç Araçlar",
    "services.card3Text":  "Dashboard, otomasyon, raporlama ve dosya işleme araçlarını ölçeklenebilir mimariyle geliştiririz.",
    "services.card4Title": "Yayın, Bakım ve Büyüme",
    "services.card4Text":  "Domain, SSL, CDN, analytics, monitoring ve güncelleme süreci. Yayına aldıktan sonra da yalnız bırakmayız.",

    "why.eyebrow":    "Neden AyveX",
    "why.title":      "Teknolojiyi gösteriş için değil, sonuç için kullanıyoruz.",
    "why.text":       "Animasyon, performans, SEO, analytics ve temiz kod aynı hedefe hizmet eder: kullanıcı güveni, hızlı deneyim ve dönüşüm.",
    "why.card1Title": "Ürün mantığıyla geliştiririz",
    "why.card1Text":  "Her ekranı sadece güzel görünsün diye değil, kullanıcıyı doğru aksiyona taşısın diye tasarlarız. Hedef, hız ve dönüşüm aynı planda ilerler.",
    "why.card2Title": "Doğru teknoloji, temiz mimari",
    "why.card2Text":  "Next.js, React, Flutter, Node.js, Vercel, Cloudflare ve modern veri araçlarını ihtiyaca göre seçeriz. Gereksiz teknoloji kalabalığı değil, doğru çözüm.",
    "why.card3Title": "Yayından sonra da yanınızdayız",
    "why.card3Text":  "Deploy sonrası performans, analytics, SEO, içerik güncellemeleri ve bakım sürecini takip ederiz. Ürün yayına çıkınca iş bitmez; başlar.",

    "process.eyebrow":    "Çalışma Modeli",
    "process.title":      "Fikirden yayına net ve ölçülebilir süreç.",
    "process.text":       "Kapsamı, tasarımı, geliştirmeyi ve yayını adım adım planlarız; her aşamada neyin ne zaman teslim edileceği nettir.",
    "process.step1Title": "Keşif · 2-3 gün",
    "process.step1Text":  "Hedef kitle, kapsam, zaman çizelgesi ve bütçe netleşir. Yazılı teklif gelir.",
    "process.step2Title": "Tasarım · 1-2 hafta",
    "process.step2Text":  "Figma'da komponent bazlı tasarım sistemi. Her sayfa prototip olarak onaylanır.",
    "process.step3Title": "Geliştirme · 2-4 hafta",
    "process.step3Text":  "Responsive kodlama, performans optimizasyonu, iç test ve staging ortamı.",
    "process.step4Title": "Yayın + Destek",
    "process.step4Text":  "Domain, SSL, analytics, monitoring kurulur. Sonrasında içerik ve büyüme desteği sürer.",

    "faq.eyebrow": "Sık Sorulan Sorular",
    "faq.title":   "Aklınıza takılan ilk sorular.",
    "faq.q1":      "Fiyatlandırma nasıl çalışıyor?",
    "faq.a1":      "Sabit fiyat veriyoruz. Keşif görüşmesinden sonra projenin kapsamına göre net bir teklif hazırlıyoruz. Küçük landing page'ler için daha ekonomik, tam uygulama için kapsamlı paketler.",
    "faq.q2":      "Bir proje ne kadar sürede biter?",
    "faq.a2":      "Basit kurumsal site: 1-2 hafta. Özellikli web uygulaması: 3-6 hafta. Mobil + web kombinasyonu: 6-10 hafta. Keşif aşamasında net süre paylaşılır.",
    "faq.q3":      "Yayına aldıktan sonra destek veriyor musunuz?",
    "faq.a3":      "Evet. 1 aylık garanti süresi standart. Sonrası için aylık bakım paketleri (içerik güncellemesi, güvenlik, analytics raporu) sunuyoruz.",
    "faq.q4":      "Kodun sahipliği kimde?",
    "faq.a4":      "Sizde. Teslim sonrası kod tamamen size ait. İsterseniz başka bir ekiple devam edebilirsiniz. Repo, domain, hosting hesapları sizin adınıza açılır.",
    "faq.q5":      "Tasarımını ben yaptım, sadece geliştirme yapar mısınız?",
    "faq.a5":      "Yaparız. Figma dosyası veya mevcut bir tasarımınız varsa sadece geliştirme + deploy adımlarında da çalışabiliriz.",

    "contact.eyebrow": "İletişim",
    "contact.title":   "Projenizi netleştirelim, doğru teknolojiyle başlatalım.",
    "contact.text":    "Kısa bir mesaj atın; hedefi, kapsamı ve en doğru teknik yolu birlikte netleştirelim. Size süre, bütçe ve ilk adımları içeren somut bir planla dönelim.",

    "footer.note":        "Bağımsız yazılım stüdyosu · Tüm hakları saklıdır.",
    "footer.tagline":     "Web, mobil ve SaaS ürünleri için strateji, tasarım, yazılım ve deploy stüdyosu.",
    "footer.colNav":      "Keşfet",
    "footer.colProducts": "Ürünlerimiz",
    "footer.colContact":  "İletişim",
    "footer.location":    "İstanbul, Türkiye",
    "footer.hours":       "Hafta içi · 09:00 – 19:00",

    "stats.label1":  "Canlı ürün",
    "stats.label2":  "ZapFile aracı",
    "stats.label3":  "Loguna içeriği",
    "stats.label4":  "Ortalama yanıt süresi",

    "a11y.skipLink": "İçeriğe geç",
    "cookie.text":   "Bu site yalnızca temel çalışma için tarayıcı depolamasını kullanır (dil tercihi). İzleme çerezi kullanmıyoruz.",
    "cookie.accept": "Tamam",
    "cookie.more":   "Detay",
  },

  en: {
    "nav.projects":  "Products",
    "nav.services":  "Services",
    "nav.why":       "Why Us",
    "nav.process":   "Process",
    "nav.faq":       "FAQ",
    "nav.cta":       "Get Quote",

    "hero.eyebrow":      "Web · Mobile · SaaS Product Studio",
    "hero.titleLine1":   "We build your",
    "hero.titleLine2":   "digital product end-to-end.",
    "hero.titleLine3":   "Then we launch it.",
    "hero.titleLine3a":  "Then we",
    "hero.rot1":         "launch it.",
    "hero.rot2":         "speed it up.",
    "hero.rot3":         "scale it.",
    "hero.rot4":         "grow it.",
    "hero.text":         "AyveX Development brings strategy, interface design, software development and deployment into one team for websites, mobile apps and SaaS products. We build fast, reliable and scalable products, then support maintenance and growth after launch.",
    "hero.primaryCta":   "Start Your Project",
    "hero.secondaryCta": "See Live Work",

    "hero.metric1Text":  "Live product experience",
    "hero.metric2Text":  "Browser tools",
    "hero.metric3Text":  "First reply target",

    "hero.panelTitle":  "Product Command Center",
    "hero.panel1Label": "Loguna",
    "hero.panel1Value": "Online",
    "hero.panel2Label": "ZapFile",
    "hero.panel2Value": "Online",
    "hero.panel3Label": "Platform",
    "hero.panel3Value": "Web + Mobile",
    "hero.panel4Label": "Operations",
    "hero.panel4Value": "Deploy + Care",

    "trust.text": "Technologies we work with:",
    "trust.live": "Product-speed stack choices",

    "work.eyebrow":    "Our Products",
    "work.title":      "Live products, real outcomes.",
    "work.text":       "We do not build static showcases; we build digital products that are used, measured and improved. Below are working examples of that approach.",
    "work.card1Type":  "Education Technology",
    "work.card1Title": "Loguna",
    "work.card1Text":  "Smart study assistant for TYT, AYT and LGS students: curriculum tracking, net analysis, weekly plans and error journal. Mobile + web, one product — free.",
    "work.card1Link1": "↗ loguna.com.tr",
    "work.card1Link2": "↗ Play Store",
    "work.card2Type":  "Browser Tools",
    "work.card2Title": "ZapFile",
    "work.card2Text":  "71 file tools running in the browser: conversion, compression, editing. Your files stay on your device, nothing is uploaded. Unlimited and free.",
    "work.card2Link1": "↗ zapfile.xyz",
    "work.card3Type":  "Company Site",
    "work.card3Title": "AyveX Development",
    "work.card3Text":  "The site you are on: fast static architecture, bilingual content, modern animations and production deployment on Vercel.",
    "work.card3Link1": "↗ This Site",

    "services.eyebrow":    "Services",
    "services.title":      "One technical team, strategy to launch.",
    "services.text":       "For brand sites, web apps, mobile apps or SaaS tools, we define the right scope and manage design, development, deployment and maintenance in one plan.",
    "services.card1Title": "High-Performance Websites",
    "services.card1Text":  "Trustworthy, fast-loading, SEO-ready and manageable websites. Not just polished, measurable.",
    "services.card2Title": "Mobile and Web Apps",
    "services.card2Text":  "Accounts, dashboards, notifications, subscriptions and content flows designed as one product experience.",
    "services.card3Title": "SaaS and Internal Tools",
    "services.card3Text":  "Dashboards, automations, reporting and file-processing tools built on scalable architecture.",
    "services.card4Title": "Launch, Care and Growth",
    "services.card4Text":  "Domain, SSL, CDN, analytics, monitoring and updates. We do not leave after launch.",

    "why.eyebrow":    "Why AyveX",
    "why.title":      "We use technology for outcomes, not decoration.",
    "why.text":       "Animation, performance, SEO, analytics and clean code serve one goal: trust, speed and conversion.",
    "why.card1Title": "We build with product logic",
    "why.card1Text":  "Every screen is designed not only to look good, but to move users toward the right action. Goals, speed and conversion move together.",
    "why.card2Title": "Right stack, clean architecture",
    "why.card2Text":  "Next.js, React, Flutter, Node.js, Vercel, Cloudflare and modern data tools are selected by need. No tech clutter, just the right solution.",
    "why.card3Title": "We stay after launch",
    "why.card3Text":  "After deploy, we track performance, analytics, SEO, content updates and maintenance. Launch is not the end of the product; it is the start.",

    "process.eyebrow":    "Workflow",
    "process.title":      "A clear, measurable path from idea to launch.",
    "process.text":       "We plan scope, design, development and release step by step; every stage has a clear delivery target.",
    "process.step1Title": "Discovery · 2-3 days",
    "process.step1Text":  "Audience, scope, timeline and budget get clear. Written proposal follows.",
    "process.step2Title": "Design · 1-2 weeks",
    "process.step2Text":  "Component-based design system in Figma. Every page approved as a prototype.",
    "process.step3Title": "Development · 2-4 weeks",
    "process.step3Text":  "Responsive coding, performance optimization, internal QA and a staging environment.",
    "process.step4Title": "Launch + Support",
    "process.step4Text":  "Domain, SSL, analytics, monitoring set up. Content and growth support continues afterwards.",

    "faq.eyebrow": "FAQ",
    "faq.title":   "The first questions people ask.",
    "faq.q1":      "How does pricing work?",
    "faq.a1":      "We quote fixed prices. After a discovery call, we prepare a clear proposal based on scope. Smaller landing pages are more affordable; full apps come with comprehensive packages.",
    "faq.q2":      "How long does a project take?",
    "faq.a2":      "Simple corporate site: 1-2 weeks. Feature-rich web app: 3-6 weeks. Mobile + web combo: 6-10 weeks. Exact timing is shared at discovery.",
    "faq.q3":      "Do you support after launch?",
    "faq.a3":      "Yes. 1 month warranty is standard. Beyond that, we offer monthly maintenance packages (content updates, security, analytics reports).",
    "faq.q4":      "Who owns the code?",
    "faq.a4":      "You do. The code is entirely yours after delivery. You can continue with any team. Repos, domains and hosting accounts are created in your name.",
    "faq.q5":      "I already have a design, can you just build it?",
    "faq.a5":      "Yes. If you have a Figma file or existing design, we can work only on development + deploy phases.",

    "contact.eyebrow": "Contact",
    "contact.title":   "Let's define the product and start with the right stack.",
    "contact.text":    "Send a short message; we will clarify the goal, scope and technical route, then reply with a concrete plan covering timeline, budget and first steps.",

    "footer.note":        "Independent software studio · All rights reserved.",
    "footer.tagline":     "Strategy, design, software and deployment studio for web, mobile and SaaS products.",
    "footer.colNav":      "Explore",
    "footer.colProducts": "Our Products",
    "footer.colContact":  "Contact",
    "footer.location":    "Istanbul, Turkey",
    "footer.hours":       "Weekdays · 09:00 – 19:00",

    "stats.label1":  "Live products",
    "stats.label2":  "ZapFile tools",
    "stats.label3":  "Loguna topics",
    "stats.label4":  "Average reply time",

    "a11y.skipLink": "Skip to content",
    "cookie.text":   "This site only uses browser storage for essentials (language preference). No tracking cookies.",
    "cookie.accept": "Got it",
    "cookie.more":   "Details",
  }
};

/* ─── Language ──────────────────────────────────────────── */
const langToggle   = document.querySelector("#langToggle");
const translatable = document.querySelectorAll("[data-i18n]");
const pageTitle    = document.querySelector("title");
const pageMeta     = document.querySelector('meta[name="description"]');

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;
  translatable.forEach(el => {
    const val = dict[el.dataset.i18n];
    if (!val) return;
    const liveDot = el.querySelector(".live-dot");
    if (liveDot) {
      el.textContent = "";
      el.append(liveDot, document.createTextNode(` ${val}`));
      return;
    }
    el.textContent = val;
  });
  if (lang === "tr") {
    document.documentElement.lang = "tr";
    pageTitle.textContent = "AyveX Development — Web, mobil ve SaaS ürün stüdyosu";
    pageMeta.setAttribute("content", "AyveX Development; web sitesi, mobil uygulama ve SaaS ürünleri için strateji, arayüz, yazılım, deploy ve büyüme sürecini tek ekipte yönetir.");
    langToggle.textContent = "TR";
  } else {
    document.documentElement.lang = "en";
    pageTitle.textContent = "AyveX Development — Web, mobile and SaaS product studio";
    pageMeta.setAttribute("content", "AyveX Development manages strategy, interface design, software development, deployment and growth for websites, mobile apps and SaaS products.");
    langToggle.textContent = "EN";
  }
}

function setLanguage(lang) {
  localStorage.setItem("ayvex-language", lang);
  applyLanguage(lang);
}

const storedLang = localStorage.getItem("ayvex-language");
setLanguage(storedLang === "en" ? "en" : "tr");

langToggle.addEventListener("click", () => {
  const cur = localStorage.getItem("ayvex-language") || "tr";
  setLanguage(cur === "tr" ? "en" : "tr");
});

/* ─── Footer year ───────────────────────────────────────── */
const yearSpan = document.getElementById("yearSpan");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

/* ─── Reduced motion detection ──────────────────────────── */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Cursor spotlight removed — body::after fixed layer caused compositor lag. */

/* ─── Hero word rotator ─────────────────────────────────── */
(() => {
  if (prefersReducedMotion) return;
  const words = document.querySelectorAll(".word-rotator .word");
  if (words.length < 2) return;
  let idx = 0;
  setInterval(() => {
    const current = words[idx];
    idx = (idx + 1) % words.length;
    const next = words[idx];
    current.classList.remove("is-active");
    current.classList.add("is-leaving");
    next.classList.add("is-active");
    setTimeout(() => current.classList.remove("is-leaving"), 500);
  }, 2800);
})();

/* ─── Count-up animation for stats + hero metrics ──────── */
(() => {
  const targets = document.querySelectorAll("[data-count-to]");
  if (!targets.length) return;

  const animateCount = (el) => {
    const to = parseInt(el.dataset.countTo, 10);
    const suffix = el.dataset.suffix || "";
    if (prefersReducedMotion || isNaN(to)) {
      el.textContent = to + suffix;
      return;
    }
    const duration = Math.min(1600, 400 + to * 2);
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const value = Math.round(to * ease(progress));
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const countOb = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countOb.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  targets.forEach(el => countOb.observe(el));
})();

/* ─── Back to top button ────────────────────────────────── */
(() => {
  const btn = document.getElementById("backToTop");
  if (!btn) return;
  const toggle = () => {
    if (window.scrollY > 600) btn.classList.add("is-visible");
    else btn.classList.remove("is-visible");
  };
  window.addEventListener("scroll", toggle, { passive: true });
  toggle();
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth"
    });
  });
})();

/* ─── Cookie banner (soft, dismissable) ─────────────────── */
(() => {
  const banner = document.getElementById("cookieBanner");
  const accept = document.getElementById("cookieAccept");
  if (!banner || !accept) return;
  const KEY = "ayvex_cookie_ack_v1";
  if (!localStorage.getItem(KEY)) {
    setTimeout(() => banner.hidden = false, 1200);
  }
  accept.addEventListener("click", () => {
    localStorage.setItem(KEY, "1");
    banner.style.animation = "cookie-in 300ms reverse";
    setTimeout(() => banner.hidden = true, 280);
  });
})();

/* ─── Scroll Progress Bar ───────────────────────────────── */
/* ─── Mobile menu ───────────────────────────────────────── */
(() => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const panel = document.getElementById("mobileMenu");
  if (!header || !toggle || !panel) return;

  const closeMenu = () => {
    header.classList.remove("is-menu-open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Menuyu ac");
  };

  const openMenu = () => {
    header.classList.add("is-menu-open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Menuyu kapat");
  };

  toggle.addEventListener("click", () => {
    if (header.classList.contains("is-menu-open")) closeMenu();
    else openMenu();
  });

  panel.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", event => {
    if (!header.classList.contains("is-menu-open")) return;
    if (panel.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  }, { passive: true });
})();

const progressBar = document.getElementById("scroll-progress");
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const total    = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (total > 0 ? (scrolled / total) * 100 : 0) + "%";
}, { passive: true });

/* ─── Reveal on Scroll ──────────────────────────────────── */
const reveals  = document.querySelectorAll(".reveal");
const revealOb = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealOb.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => revealOb.observe(el));

/* ─── Scrollspy: aktif nav link ─────────────────────────── */
const navLinks = document.querySelectorAll(".nav a[href^='#']");
const sectionMap = new Map();
navLinks.forEach(link => {
  const id = link.getAttribute("href").slice(1);
  const section = document.getElementById(id);
  if (section) sectionMap.set(section, link);
});

const spyOb = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const link = sectionMap.get(entry.target);
    if (!link) return;
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove("is-active"));
      link.classList.add("is-active");
    }
  });
}, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });

sectionMap.forEach((_, section) => spyOb.observe(section));

/* 3D tilt, magnetic buttons and aurora canvas removed for performance.
   Kept lightweight interactions: reveal-on-scroll, word rotator,
   count-up, back-to-top, cookie banner, mobile menu, scroll progress. */

/* Remove aurora canvas element from DOM if present */
(function removeAurora() {
  const canvas = document.getElementById("aurora-canvas");
  if (canvas) canvas.remove();
})();
