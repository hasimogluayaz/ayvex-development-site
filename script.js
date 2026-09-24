/* ============================================================
   AYVEX DEVELOPMENT — script.js
   Aurora canvas · 3D tilt · Magnetic buttons · Scroll progress
   ============================================================ */

/* ─── i18n Translations ─────────────────────────────────── */
const translations = {
  tr: {
    "nav.projects": "Projeler",
    "nav.services": "Hizmetler",
    "nav.why": "Neden Biz",
    "nav.process": "Süreç",
    "nav.faq": "SSS",
    "nav.cta": "Teklif Al",
    "nav.formCta": "Form",
    "hero.eyebrow": "Web · Mobil · SaaS Geliştirme Stüdyosu",
    "hero.titleLine1": "Dijital ürününüzü",
    "hero.titleLine2": "uçtan uca kurarız.",
    "hero.titleLine3": "Sonra onu yayına çıkarırız.",
    "hero.titleLine3a": "Sonra onu",
    "hero.rot1": "yayına çıkarırız.",
    "hero.rot2": "hızlandırırız.",
    "hero.rot3": "ölçekleriz.",
    "hero.rot4": "büyütürüz.",
    "hero.text": "AyveX Development; markalar, girişimler ve uzman ekipler için web sitesi, mobil uygulama ve SaaS projelerini strateji, arayüz, yazılım ve yayına alma dahil uçtan uca geliştirir. Gerektiğinde bakım ve büyüme tarafını da tek ekipte yönetiriz.",
    "hero.primaryCta": "Projeni Başlatalım",
    "hero.secondaryCta": "Canlı İşleri Gör",
    "hero.metric1Text": "Yayındaki proje",
    "hero.metric2Text": "Canlı araç",
    "hero.metric3Text": "İlk dönüş hedefi",
    "hero.liveStatus": "Şu an canlı · 3 yayındaki iş, 71 araç aktif",
    "hero.panelTitle": "Teslim ve Operasyon",
    "hero.panel1Label": "Loguna",
    "hero.panel1Value": "Canlı",
    "hero.panel2Label": "ZapFile",
    "hero.panel2Value": "Canlı",
    "hero.panel3Label": "Platform",
    "hero.panel3Value": "Web + Mobil",
    "hero.panel4Label": "Operasyon",
    "hero.panel4Value": "Deploy + Bakım",
    "trust.text": "Çalıştığımız teknolojiler:",
    "trust.live": "İşe göre teknoloji seçimi",
    "work.eyebrow": "Projeler",
    "work.title": "Müşteriler için tasarladık, geliştirdik, yayına aldık.",
    "work.text": "Markalar, girişimler ve uzman ekipler için sıfırdan kurguladığımız; tasarım, yazılım ve yayın süreçlerini uçtan uca yönettiğimiz seçili işler.",
    "work.card1Type": "Eğitim Platformu · Müşteri Projesi",
    "work.card1Title": "Loguna",
    "work.card1Text": "Loguna ekibi için uçtan uca ürün tasarımı ve geliştirme: Next.js web uygulaması, Flutter mobil uygulama, içerik kurgusu ve Play Store yayını.",
    "work.card1Link1": "↗ loguna.com.tr",
    "work.card1Link2": "↗ Play Store",
    "work.card2Type": "SaaS Platformu · Müşteri Projesi",
    "work.card2Title": "ZapFile",
    "work.card2Text": "ZapFile için tarayıcı içinde çalışan 71 araçlık ürün deneyimini sıfırdan kurduk: bilgi mimarisi, arayüz sistemi, performans optimizasyonu ve production deploy.",
    "work.card2Link1": "↗ zapfile.xyz",
    "work.card3Type": "Kurumsal Site · Müşteri Projesi",
    "work.card3Title": "Haşimoğlu Yapı ve Mantolama",
    "work.card3Text": "Haşimoğlu Yapı ve Mantolama için marka diliyle uyumlu, SEO odaklı ve mobil öncelikli kurumsal siteyi tasarlayıp geliştirerek yayına aldık.",
    "work.card3Link1": "↗ hasimogluyapimantolama.com",
    "services.eyebrow": "Hizmetler",
    "services.title": "Stratejiden yayına, tek teknik ekip.",
    "services.text": "Marka sitesi, web uygulaması, mobil uygulama veya SaaS aracınız için doğru kapsamı çıkarır; tasarım, geliştirme, deploy ve bakım adımlarını tek planda yönetiriz.",
    "services.card1Title": "Yüksek Performanslı Web Siteleri",
    "services.card1Text": "Güven veren, hızlı açılan, SEO uyumlu ve yönetilebilir web siteleri. Sadece güzel değil, ölçülebilir.",
    "services.card2Title": "Mobil ve Web Uygulamaları",
    "services.card2Text": "Kullanıcı hesabı, panel, bildirim, abonelik ve içerik akışlarını aynı ürün deneyiminde kurgularız.",
    "services.card3Title": "SaaS ve İç Araçlar",
    "services.card3Text": "Dashboard, otomasyon, raporlama ve dosya işleme araçlarını ölçeklenebilir mimariyle geliştiririz.",
    "services.card4Title": "Yayın, Bakım ve Büyüme",
    "services.card4Text": "Domain, SSL, CDN, analytics, monitoring ve güncelleme süreci. Yayına aldıktan sonra da yalnız bırakmayız.",
    "why.eyebrow": "Neden AyveX",
    "why.title": "Teknolojiyi gösteriş için değil, sonuç için kullanıyoruz.",
    "why.text": "Animasyon, performans, SEO, analytics ve temiz kod aynı hedefe hizmet eder: kullanıcı güveni, hızlı deneyim ve dönüşüm.",
    "why.card1Title": "Ürün mantığıyla geliştiririz",
    "why.card1Text": "Her ekranı sadece güzel görünsün diye değil, kullanıcıyı doğru aksiyona taşısın diye tasarlarız. Hedef, hız ve dönüşüm aynı planda ilerler.",
    "why.card2Title": "Doğru teknoloji, temiz mimari",
    "why.card2Text": "Next.js, React, Flutter, Node.js, Vercel, Cloudflare ve modern veri araçlarını ihtiyaca göre seçeriz. Gereksiz teknoloji kalabalığı değil, doğru çözüm.",
    "why.card3Title": "Yayından sonra da yanınızdayız",
    "why.card3Text": "Deploy sonrası performans, analytics, SEO, içerik güncellemeleri ve bakım sürecini takip ederiz. Ürün yayına çıkınca iş bitmez; başlar.",
    "process.eyebrow": "Çalışma Modeli",
    "process.title": "Fikirden yayına net ve ölçülebilir süreç.",
    "process.text": "Kapsamı, tasarımı, geliştirmeyi ve yayını adım adım planlarız; her aşamada neyin ne zaman teslim edileceği nettir.",
    "process.step1Title": "Keşif · 2-3 gün",
    "process.step1Text": "Hedef kitle, kapsam, zaman çizelgesi ve bütçe netleşir. Yazılı teklif gelir.",
    "process.step2Title": "Tasarım · 1-2 hafta",
    "process.step2Text": "Figma'da komponent bazlı tasarım sistemi. Her sayfa prototip olarak onaylanır.",
    "process.step3Title": "Geliştirme · 2-4 hafta",
    "process.step3Text": "Responsive kodlama, performans optimizasyonu, iç test ve staging ortamı.",
    "process.step4Title": "Yayın + Destek",
    "process.step4Text": "Domain, SSL, analytics, monitoring kurulur. Sonrasında içerik ve büyüme desteği sürer.",
    "process.step1d1": "Keşif görüşmesi (45-60 dk, Google Meet)",
    "process.step1d2": "Hedef ve başarı metriklerinin çıkarılması",
    "process.step1d3": "Kapsam dokümanı + yazılı sabit fiyat teklifi",
    "process.step2d1": "Wireframe + bilgi mimarisi",
    "process.step2d2": "Figma'da komponent kütüphanesi",
    "process.step2d3": "Prototip tarama, mobil + masaüstü onayı",
    "process.step3d1": "Next.js / React / Flutter — ihtiyaca göre",
    "process.step3d2": "Lighthouse 95+ ve Core Web Vitals optimizasyonu",
    "process.step3d3": "Staging ortamı, iç QA ve kabul testleri",
    "process.step4d1": "Vercel / Cloudflare üzerine production deploy",
    "process.step4d2": "Plausible / GA4 + uptime monitoring kurulumu",
    "process.step4d3": "1 ay garanti, sonrası aylık bakım paketi",
    "faq.eyebrow": "Sık Sorulan Sorular",
    "faq.title": "Aklınıza takılan ilk sorular.",
    "faq.q1": "Fiyatlandırma nasıl çalışıyor?",
    "faq.a1": "Sabit fiyat veriyoruz. Keşif görüşmesinden sonra projenin kapsamına göre net bir teklif hazırlıyoruz. Küçük landing page'ler için daha ekonomik, tam uygulama için kapsamlı paketler.",
    "faq.q2": "Bir proje ne kadar sürede biter?",
    "faq.a2": "Basit kurumsal site: 1-2 hafta. Özellikli web uygulaması: 3-6 hafta. Mobil + web kombinasyonu: 6-10 hafta. Keşif aşamasında net süre paylaşılır.",
    "faq.q3": "Yayına aldıktan sonra destek veriyor musunuz?",
    "faq.a3": "Evet. 1 aylık garanti süresi standart. Sonrası için aylık bakım paketleri (içerik güncellemesi, güvenlik, analytics raporu) sunuyoruz.",
    "faq.q4": "Kodun sahipliği kimde?",
    "faq.a4": "Sizde. Teslim sonrası kod tamamen size ait. İsterseniz başka bir ekiple devam edebilirsiniz. Repo, domain, hosting hesapları sizin adınıza açılır.",
    "faq.q5": "Tasarımını ben yaptım, sadece geliştirme yapar mısınız?",
    "faq.a5": "Yaparız. Figma dosyası veya mevcut bir tasarımınız varsa sadece geliştirme + deploy adımlarında da çalışabiliriz.",
    "contact.eyebrow": "İletişim",
    "contact.title": "Projeyi netleştirelim, kapsamı doğru kuralım.",
    "contact.text": "Hedefinizi ve mevcut durumu paylaşın. Biz de kapsamı, teknik yaklaşımı ve ilk zaman planını net bir çerçeveyle size geri dönelim.",
    "contact.formKicker": "Proje bilgileri",
    "contact.formHelper": "Kısa bilgiler, size net bir ilk teklif çerçevesi hazırlamamız için yeterli.",
    "contact.summaryAria": "İlk iletişim çerçevesi",
    "contact.summary1Label": "İlk yanıt",
    "contact.summary1Value": "24 saat içinde",
    "contact.summary2Label": "İlk çıktı",
    "contact.summary2Value": "Kapsam ve teslim yaklaşımı",
    "contact.summary3Label": "E-posta",
    "contact.summary3Value": "info@ayvexdevelopment.com",
    "contact.fieldName": "Adınız",
    "contact.fieldEmail": "E-posta",
    "contact.fieldCompany": "Şirket / Marka",
    "contact.fieldProjectType": "Proje tipi",
    "contact.fieldBudget": "Bütçe aralığı",
    "contact.fieldTimeline": "Başlangıç zamanı",
    "contact.fieldMessage": "Kısaca ne yapmak istiyorsunuz?",
    "contact.placeholderName": "Adınız",
    "contact.placeholderEmail": "ornek@marka.com",
    "contact.placeholderCompany": "Marka adı",
    "contact.placeholderMessage": "Hedefinizi, istediğiniz özellikleri ve mevcut durumu birkaç cümleyle yazın.",
    "contact.projectTypePlaceholder": "Bir kategori seçin",
    "contact.projectTypeWebsite": "Kurumsal web sitesi",
    "contact.projectTypeSaas": "SaaS / panel",
    "contact.projectTypeMobile": "Mobil uygulama",
    "contact.projectTypeWebMobile": "Web + mobil ürün",
    "contact.projectTypeOther": "Diğer",
    "contact.budgetPlaceholder": "Henüz net değil",
    "contact.budget1": "50.000 TL altı",
    "contact.budget2": "50.000 – 150.000 TL",
    "contact.budget3": "150.000 – 300.000 TL",
    "contact.budget4": "300.000 TL+",
    "contact.timelinePlaceholder": "Yaklaşık zamanı seçin",
    "contact.timeline1": "Hemen / bu hafta",
    "contact.timeline2": "2-4 hafta içinde",
    "contact.timeline3": "1-2 ay içinde",
    "contact.timeline4": "Planlama aşamasındayım",
    "contact.note": "Gönderim, varsayılan e-posta uygulamanızda hazır bir proje e-postası açar.",
    "contact.submit": "Proje talebini hazırla",
    "contact.directLabel": "Doğrudan yazmak isterseniz",
    "contact.validationProjectType": "Lütfen proje tipini seçin.",
    "contact.statusOpening": "E-posta taslağı açılıyor. Açılmazsa doğrudan info@ayvexdevelopment.com adresine yazabilirsiniz.",
    "footer.note": "Bağımsız geliştirme stüdyosu · Tüm hakları saklıdır.",
    "footer.tagline": "Markalar ve girişimler için web, mobil ve SaaS projelerini tasarlayıp geliştiren bağımsız stüdyo.",
    "footer.colNav": "Keşfet",
    "footer.colProducts": "Ürünlerimiz",
    "footer.colContact": "İletişim",
    "footer.location": "İstanbul, Türkiye",
    "footer.hours": "Hafta içi · 09:00 – 17:00",
    "stats.label1": "Yayındaki proje",
    "stats.label2": "Canlı araç",
    "stats.label3": "Yayınlanan içerik öğesi",
    "stats.label4": "Ortalama ilk dönüş",
    "a11y.skipLink": "İçeriğe geç",
    "cookie.text": "Bu site yalnızca temel çalışma için tarayıcı depolaması ve dil tercihi çerezi kullanır. İzleme veya reklam çerezi kullanmıyoruz.",
    "cookie.accept": "Tamam",
    "cookie.more": "Gizlilik",
    "testimonials.eyebrow": "Müşteri Yorumları",
    "testimonials.title": "Birlikte çalıştığımız ekiplerden.",
    "testimonials.q1": "\"Kurumsal sitemizin hem güven veren hem de teklif getiren bir yapıda olmasını istiyorduk. AyveX tasarım ve geliştirme tarafını tek noktadan yönetti; süreç netti, teslim de beklediğimizden hızlı oldu.\"",
    "testimonials.role1": "Kurucu · Haşimoğlu Yapı",
    "testimonials.q2": "\"Ortada sadece bir fikir vardı; AyveX bunu gerçek bir web + mobil ürüne çevirdi. Tasarım kararlarından Play Store yayınına kadar tüm teknik süreci sahiplenmeleri bizim için büyük fark yarattı.\"",
    "testimonials.role2": "Kurucu Ekip · Loguna",
    "testimonials.q3": "\"ZapFile tarafında geniş bir araç kütüphanesini hızlı ama düzenli bir ürün deneyimine çevirmemiz gerekiyordu. AyveX mimariyi, arayüz sistemini ve yayın akışını çok temiz kurdu.\"",
    "testimonials.role3": "Ürün Sahibi · ZapFile",
    "footer.colWork": "Seçili Projeler",
    "footer.colLegal": "Yasal",
    "footer.privacy": "Gizlilik Politikası",
    "footer.terms": "Kullanım Şartları",
    "footer.kvkk": "KVKK Aydınlatma Metni",
    "footer.copyMail": "E-postayı kopyala",
    "footer.copied": "Kopyalandı",
    "a11y.menuOpen": "Menüyü aç",
    "a11y.menuClose": "Menüyü kapat",
    "a11y.backToTop": "Yukarı çık",
    "a11y.cookieBanner": "Çerez bilgilendirmesi",
    "a11y.stackPrimary": "Teknoloji altyapımız",
    "a11y.stackSecondary": "Üretim ve büyüme kabiliyetlerimiz",
    "a11y.switchToEnglish": "Dili İngilizceye çevir",
    "a11y.switchToTurkish": "Dili Türkçeye çevir",
    "a11y.languageSwitcher": "Dil seçimi",
  },

  en: {
    "nav.projects": "Work",
    "nav.services": "Services",
    "nav.why": "Why Us",
    "nav.process": "Process",
    "nav.faq": "FAQ",
    "nav.cta": "Get Quote",
    "nav.formCta": "Form",
    "hero.eyebrow": "Web · Mobile · SaaS Development Studio",
    "hero.titleLine1": "We build your",
    "hero.titleLine2": "digital product end-to-end.",
    "hero.titleLine3": "Then we launch it.",
    "hero.titleLine3a": "Then we",
    "hero.rot1": "launch it.",
    "hero.rot2": "speed it up.",
    "hero.rot3": "scale it.",
    "hero.rot4": "grow it.",
    "hero.text": "AyveX Development helps brands, founders and specialist teams turn ideas into shipped websites, mobile apps and SaaS products. Strategy, interface design, software delivery, launch and post-launch care are handled in one technical team.",
    "hero.primaryCta": "Start Your Project",
    "hero.secondaryCta": "See Live Work",
    "hero.metric1Text": "Live client launches",
    "hero.metric2Text": "Live tools",
    "hero.metric3Text": "First reply target",
    "hero.liveStatus": "Live now · 3 launched projects, 71 tools active",
    "hero.panelTitle": "Delivery & Operations",
    "hero.panel1Label": "Loguna",
    "hero.panel1Value": "Online",
    "hero.panel2Label": "ZapFile",
    "hero.panel2Value": "Online",
    "hero.panel3Label": "Platform",
    "hero.panel3Value": "Web + Mobile",
    "hero.panel4Label": "Operations",
    "hero.panel4Value": "Deploy + Care",
    "trust.text": "Technologies we work with:",
    "trust.live": "Stack choices matched to the job",
    "work.eyebrow": "Selected Work",
    "work.title": "Designed, built and launched for clients.",
    "work.text": "A selection of client work where we handled product thinking, design, development and release end-to-end.",
    "work.card1Type": "Education Platform · Client Project",
    "work.card1Title": "Loguna",
    "work.card1Text": "End-to-end product design and development for the Loguna team: Next.js web app, Flutter mobile app, content structure and Play Store release.",
    "work.card1Link1": "↗ loguna.com.tr",
    "work.card1Link2": "↗ Play Store",
    "work.card2Type": "SaaS Platform · Client Project",
    "work.card2Title": "ZapFile",
    "work.card2Text": "We built ZapFile's 71-tool browser experience from the ground up: information architecture, interface system, performance work and production deployment.",
    "work.card2Link1": "↗ zapfile.xyz",
    "work.card3Type": "Corporate Website · Client Project",
    "work.card3Title": "Haşimoğlu Yapı ve Mantolama",
    "work.card3Text": "We designed, developed and launched a mobile-first, SEO-ready corporate site for Haşimoğlu Yapı ve Mantolama.",
    "work.card3Link1": "↗ hasimogluyapimantolama.com",
    "services.eyebrow": "Services",
    "services.title": "One technical team, strategy to launch.",
    "services.text": "For brand sites, web apps, mobile apps or SaaS tools, we define the right scope and manage design, development, deployment and maintenance in one plan.",
    "services.card1Title": "High-Performance Websites",
    "services.card1Text": "Trustworthy, fast-loading, SEO-ready and manageable websites. Not just polished, measurable.",
    "services.card2Title": "Mobile and Web Apps",
    "services.card2Text": "Accounts, dashboards, notifications, subscriptions and content flows designed as one product experience.",
    "services.card3Title": "SaaS and Internal Tools",
    "services.card3Text": "Dashboards, automations, reporting and file-processing tools built on scalable architecture.",
    "services.card4Title": "Launch, Care and Growth",
    "services.card4Text": "Domain, SSL, CDN, analytics, monitoring and updates. We do not leave after launch.",
    "why.eyebrow": "Why AyveX",
    "why.title": "We use technology for outcomes, not decoration.",
    "why.text": "Animation, performance, SEO, analytics and clean code serve one goal: trust, speed and conversion.",
    "why.card1Title": "We build with product logic",
    "why.card1Text": "Every screen is designed not only to look good, but to move users toward the right action. Goals, speed and conversion move together.",
    "why.card2Title": "Right stack, clean architecture",
    "why.card2Text": "Next.js, React, Flutter, Node.js, Vercel, Cloudflare and modern data tools are selected by need. No tech clutter, just the right solution.",
    "why.card3Title": "We stay after launch",
    "why.card3Text": "After deploy, we track performance, analytics, SEO, content updates and maintenance. Launch is not the end of the product; it is the start.",
    "process.eyebrow": "Workflow",
    "process.title": "A clear, measurable path from idea to launch.",
    "process.text": "We plan scope, design, development and release step by step; every stage has a clear delivery target.",
    "process.step1Title": "Discovery · 2-3 days",
    "process.step1Text": "Audience, scope, timeline and budget get clear. Written proposal follows.",
    "process.step2Title": "Design · 1-2 weeks",
    "process.step2Text": "Component-based design system in Figma. Every page approved as a prototype.",
    "process.step3Title": "Development · 2-4 weeks",
    "process.step3Text": "Responsive coding, performance optimization, internal QA and a staging environment.",
    "process.step4Title": "Launch + Support",
    "process.step4Text": "Domain, SSL, analytics, monitoring set up. Content and growth support continues afterwards.",
    "process.step1d1": "Discovery call (45-60 min, Google Meet)",
    "process.step1d2": "Goal definition and success metrics",
    "process.step1d3": "Scope document + written fixed-price quote",
    "process.step2d1": "Wireframes + information architecture",
    "process.step2d2": "Component library in Figma",
    "process.step2d3": "Prototype walkthrough, mobile + desktop sign-off",
    "process.step3d1": "Next.js / React / Flutter — per project needs",
    "process.step3d2": "Lighthouse 95+ and Core Web Vitals tuning",
    "process.step3d3": "Staging environment, internal QA and acceptance tests",
    "process.step4d1": "Production deploy on Vercel / Cloudflare",
    "process.step4d2": "Plausible / GA4 + uptime monitoring setup",
    "process.step4d3": "1 month warranty, then monthly care plans",
    "faq.eyebrow": "FAQ",
    "faq.title": "The first questions people ask.",
    "faq.q1": "How does pricing work?",
    "faq.a1": "We quote fixed prices. After a discovery call, we prepare a clear proposal based on scope. Smaller landing pages are more affordable; full apps come with comprehensive packages.",
    "faq.q2": "How long does a project take?",
    "faq.a2": "Simple corporate site: 1-2 weeks. Feature-rich web app: 3-6 weeks. Mobile + web combo: 6-10 weeks. Exact timing is shared at discovery.",
    "faq.q3": "Do you support after launch?",
    "faq.a3": "Yes. 1 month warranty is standard. Beyond that, we offer monthly maintenance packages (content updates, security, analytics reports).",
    "faq.q4": "Who owns the code?",
    "faq.a4": "You do. The code is entirely yours after delivery. You can continue with any team. Repos, domains and hosting accounts are created in your name.",
    "faq.q5": "I already have a design, can you just build it?",
    "faq.a5": "Yes. If you have a Figma file or existing design, we can work only on development + deploy phases.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's define the project and frame the scope clearly.",
    "contact.text": "Share your goal and current stage. We will respond with a clear first frame around scope, technical direction and timing.",
    "contact.formKicker": "Project details",
    "contact.formHelper": "These short details are enough for us to prepare a clear first proposal frame.",
    "contact.summaryAria": "Initial contact frame",
    "contact.summary1Label": "First reply",
    "contact.summary1Value": "Within 24 hours",
    "contact.summary2Label": "First output",
    "contact.summary2Value": "Scope and delivery approach",
    "contact.summary3Label": "Email",
    "contact.summary3Value": "info@ayvexdevelopment.com",
    "contact.fieldName": "Your name",
    "contact.fieldEmail": "Email",
    "contact.fieldCompany": "Company / Brand",
    "contact.fieldProjectType": "Project type",
    "contact.fieldBudget": "Budget range",
    "contact.fieldTimeline": "Preferred start time",
    "contact.fieldMessage": "What are you trying to build?",
    "contact.placeholderName": "Your name",
    "contact.placeholderEmail": "hello@brand.com",
    "contact.placeholderCompany": "Brand name",
    "contact.placeholderMessage": "Describe the goal, desired features and current stage in a few sentences.",
    "contact.projectTypePlaceholder": "Choose a category",
    "contact.projectTypeWebsite": "Corporate website",
    "contact.projectTypeSaas": "SaaS / dashboard",
    "contact.projectTypeMobile": "Mobile app",
    "contact.projectTypeWebMobile": "Web + mobile product",
    "contact.projectTypeOther": "Other",
    "contact.budgetPlaceholder": "Not clear yet",
    "contact.budget1": "Under TRY 50,000",
    "contact.budget2": "TRY 50,000 – 150,000",
    "contact.budget3": "TRY 150,000 – 300,000",
    "contact.budget4": "TRY 300,000+",
    "contact.timelinePlaceholder": "Choose an approximate time",
    "contact.timeline1": "ASAP / this week",
    "contact.timeline2": "Within 2-4 weeks",
    "contact.timeline3": "Within 1-2 months",
    "contact.timeline4": "Still planning",
    "contact.note": "Submitting opens a prepared project email in your default mail app.",
    "contact.submit": "Prepare project inquiry",
    "contact.directLabel": "If you prefer to write directly",
    "contact.validationProjectType": "Please choose a project type.",
    "contact.statusOpening": "Opening your draft. If nothing opens, you can write directly to info@ayvexdevelopment.com.",
    "footer.note": "Independent development studio · All rights reserved.",
    "footer.tagline": "Independent studio designing and building web, mobile and SaaS projects for brands and founders.",
    "footer.colNav": "Explore",
    "footer.colProducts": "Our Products",
    "footer.colContact": "Contact",
    "footer.location": "Istanbul, Turkey",
    "footer.hours": "Weekdays · 09:00 – 17:00",
    "stats.label1": "Live launches",
    "stats.label2": "Live tools",
    "stats.label3": "Published content items",
    "stats.label4": "Average first reply",
    "a11y.skipLink": "Skip to content",
    "cookie.text": "This site only uses essential browser storage and a language-preference cookie. No tracking or marketing cookies.",
    "cookie.accept": "Got it",
    "cookie.more": "Privacy",
    "testimonials.eyebrow": "Client Reviews",
    "testimonials.title": "From teams that hired AyveX.",
    "testimonials.q1": "\"We wanted a site that looked credible, ranked locally and worked cleanly on mobile. AyveX handled design and delivery end-to-end and got us live much faster than expected.\"",
    "testimonials.role1": "Founder · Haşimoğlu Yapı",
    "testimonials.q2": "\"We brought AyveX a product idea, not a finished brief. They turned it into a real web + mobile product and managed everything from UI decisions to Play Store launch.\"",
    "testimonials.role2": "Founding Team · Loguna",
    "testimonials.q3": "\"ZapFile needed a broad tool library without feeling heavy or messy. AyveX solved the architecture, interface system and launch workflow with a very clear process.\"",
    "testimonials.role3": "Product Owner · ZapFile",
    "footer.colWork": "Selected Work",
    "footer.colLegal": "Legal",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Use",
    "footer.kvkk": "KVKK Notice",
    "footer.copyMail": "Copy email",
    "footer.copied": "Copied",
    "a11y.menuOpen": "Open menu",
    "a11y.menuClose": "Close menu",
    "a11y.backToTop": "Back to top",
    "a11y.cookieBanner": "Cookie notice",
    "a11y.stackPrimary": "Our core technology stack",
    "a11y.stackSecondary": "Our delivery and growth capabilities",
    "a11y.switchToEnglish": "Switch language to English",
    "a11y.switchToTurkish": "Switch language to Turkish",
    "a11y.languageSwitcher": "Language selector",
  }
};

/* ─── Language ──────────────────────────────────────────── */
const languageSwitchers = document.querySelectorAll("[data-language-switcher]");
const langSwitchButtons = Array.from(document.querySelectorAll("[data-lang-switch]"));
const translatable = document.querySelectorAll("[data-i18n]");
const ariaTranslatable = document.querySelectorAll("[data-i18n-aria-label]");
const placeholderTranslatable = document.querySelectorAll("[data-i18n-placeholder]");
const pageTitle = document.querySelector("title");
const pageMeta = document.querySelector('meta[name="description"]');
const canonicalLink = document.querySelector("#canonicalLink");
const alternateTrLink = document.querySelector("#alternateTr");
const alternateEnLink = document.querySelector("#alternateEn");
const ogTitle = document.querySelector("#ogTitle");
const ogDescription = document.querySelector("#ogDescription");
const ogUrl = document.querySelector("#ogUrl");
const ogLocale = document.querySelector("#ogLocale");
const ogLocaleAlternate = document.querySelector("#ogLocaleAlternate");
const twitterTitle = document.querySelector("#twitterTitle");
const twitterDescription = document.querySelector("#twitterDescription");
const orgSchema = document.querySelector("#orgSchema");
const faqSchema = document.querySelector("#faqSchema");
const menuToggleButton = document.querySelector(".menu-toggle");
const heroWordRotator = document.querySelector(".word-rotator");
const heroRotatorWords = heroWordRotator ? Array.from(heroWordRotator.querySelectorAll(".word")) : [];
let heroRotatorWidthFrame = null;
const LANGUAGE_STORAGE_KEY = "ayvex-language";
const LANGUAGE_COOKIE_KEY = "ayvex-language";

function parseLanguagePreference(value) {
  if (value === "en" || value === "tr") return value;
  return null;
}

function getLanguageCookie() {
  const match = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${LANGUAGE_COOKIE_KEY}=`));

  if (!match) return null;
  return parseLanguagePreference(decodeURIComponent(match.slice(LANGUAGE_COOKIE_KEY.length + 1)));
}

function setLanguageCookie(lang) {
  const secureFlag = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${LANGUAGE_COOKIE_KEY}=${encodeURIComponent(lang)}; Path=/; Max-Age=31536000; SameSite=Lax${secureFlag}`;
}

function getStoredValue(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function setStoredValue(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

function getBrowserDefaultLanguage() {
  const locales = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  const hasTurkeyRegion = locales.some((locale) => {
    if (!locale) return false;
    const parts = String(locale).replace("_", "-").split("-");
    return parts[1] && parts[1].toUpperCase() === "TR";
  });

  if (hasTurkeyRegion) return "tr";

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
  if (timezone === "Europe/Istanbul") return "tr";

  return "en";
}

function syncHeroRotatorWidth() {
  if (!heroWordRotator || !heroRotatorWords.length) return;
  let widest = 0;
  heroRotatorWords.forEach((word) => {
    widest = Math.max(widest, Math.ceil(word.getBoundingClientRect().width));
  });
  if (widest > 0) {
    heroWordRotator.style.setProperty("--rotator-width", `${widest}px`);
  }
}

function queueHeroRotatorWidthSync() {
  if (heroRotatorWidthFrame) cancelAnimationFrame(heroRotatorWidthFrame);
  heroRotatorWidthFrame = requestAnimationFrame(() => {
    heroRotatorWidthFrame = null;
    syncHeroRotatorWidth();
  });
}

const seoByLang = {
  tr: {
    title: "AyveX Development — Web, mobil ve SaaS geliştirme stüdyosu",
    description: "AyveX Development; markalar ve girişimler için web sitesi, mobil uygulama ve SaaS projelerini strateji, tasarım, yazılım, deploy ve bakım dahil uçtan uca geliştirir.",
    ogTitle: "AyveX Development — Web, mobil ve SaaS geliştirme stüdyosu",
    ogDescription: "Markalar ve girişimler için web sitesi, mobil uygulama ve SaaS projelerini tasarım, yazılım, deploy ve bakım dahil uçtan uca hayata geçiriyoruz.",
    twitterTitle: "AyveX Development — Web, mobil ve SaaS geliştirme stüdyosu",
    twitterDescription: "Web, mobil ve SaaS projeleri için strateji, tasarım, yazılım, deploy ve bakım desteği.",
    locale: "tr_TR",
    alternateLocale: "en_US"
  },
  en: {
    title: "AyveX Development — Web, mobile and SaaS development studio",
    description: "AyveX Development helps brands and founders launch websites, mobile apps and SaaS products with strategy, design, development, deployment and support in one team.",
    ogTitle: "AyveX Development — Web, mobile and SaaS development studio",
    ogDescription: "We design, build and launch websites, mobile apps and SaaS products for brands, founders and specialist teams.",
    twitterTitle: "AyveX Development — Web, mobile and SaaS development studio",
    twitterDescription: "Strategy, design, development, deployment and post-launch care for web, mobile and SaaS products.",
    locale: "en_US",
    alternateLocale: "tr_TR"
  }
};

function getLanguageUrl(lang) {
  const url = new URL(window.location.href);
  url.hash = "";
  if (lang === "en") url.searchParams.set("lang", "en");
  else url.searchParams.delete("lang");
  return url.toString();
}

function syncLanguageUrl(lang, replace = true) {
  const nextUrl = getLanguageUrl(lang);
  if (window.location.href === nextUrl) return;
  const updater = replace ? history.replaceState : history.pushState;
  updater.call(history, null, "", nextUrl);
}

function buildOrganizationSchema(lang) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ayvexdevelopment.com/#organization",
        name: "AyveX Development",
        alternateName: "AyveX",
        url: "https://ayvexdevelopment.com/",
        logo: "https://ayvexdevelopment.com/assets/ayvex-logo-alone.png",
        image: "https://ayvexdevelopment.com/assets/ayvex-logo-alone.png",
        email: "info@ayvexdevelopment.com",
        description: lang === "en"
          ? "Independent technology studio designing, building and launching websites, mobile apps and SaaS products for brands and founders."
          : "Markalar ve girişimler için web sitesi, mobil uygulama ve SaaS projelerini strateji, tasarım, yazılım ve yayına alma dahil uçtan uca geliştiren bağımsız teknoloji stüdyosu.",
        foundingLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" }
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "İstanbul",
          addressCountry: "TR"
        },
        contactPoint: {
          "@type": "ContactPoint",
          email: "info@ayvexdevelopment.com",
          contactType: "customer support",
          availableLanguage: ["Turkish", "English"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://ayvexdevelopment.com/#website",
        url: "https://ayvexdevelopment.com/",
        name: "AyveX Development",
        publisher: { "@id": "https://ayvexdevelopment.com/#organization" },
        inLanguage: lang
      }
    ]
  };
}

function buildFaqSchema(lang) {
  const dict = translations[lang] || translations.tr;
  const ids = [1, 2, 3, 4, 5];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ids.map((id) => ({
      "@type": "Question",
      name: dict["faq.q" + id],
      acceptedAnswer: {
        "@type": "Answer",
        text: dict["faq.a" + id]
      }
    }))
  };
}

function syncSeo(lang) {
  const seo = seoByLang[lang] || seoByLang.tr;
  const currentUrl = getLanguageUrl(lang);
  document.documentElement.lang = lang;
  if (pageTitle) pageTitle.textContent = seo.title;
  if (pageMeta) pageMeta.setAttribute("content", seo.description);
  if (canonicalLink) canonicalLink.setAttribute("href", currentUrl);
  if (alternateTrLink) alternateTrLink.setAttribute("href", getLanguageUrl("tr"));
  if (alternateEnLink) alternateEnLink.setAttribute("href", getLanguageUrl("en"));
  if (ogTitle) ogTitle.setAttribute("content", seo.ogTitle);
  if (ogDescription) ogDescription.setAttribute("content", seo.ogDescription);
  if (ogUrl) ogUrl.setAttribute("content", currentUrl);
  if (ogLocale) ogLocale.setAttribute("content", seo.locale);
  if (ogLocaleAlternate) ogLocaleAlternate.setAttribute("content", seo.alternateLocale);
  if (twitterTitle) twitterTitle.setAttribute("content", seo.twitterTitle);
  if (twitterDescription) twitterDescription.setAttribute("content", seo.twitterDescription);
}

function syncSchema(lang) {
  if (orgSchema) orgSchema.textContent = JSON.stringify(buildOrganizationSchema(lang), null, 2);
  if (faqSchema) faqSchema.textContent = JSON.stringify(buildFaqSchema(lang), null, 2);
}

function syncLangToggle(lang, dict) {
  if (!langSwitchButtons.length) return;

  languageSwitchers.forEach((switcher) => {
    switcher.setAttribute("aria-label", dict["a11y.languageSwitcher"]);
    switcher.dataset.activeLang = lang;
  });

  langSwitchButtons.forEach((button) => {
    const targetLang = button.dataset.langSwitch === "en" ? "en" : "tr";
    const isActive = targetLang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
    button.setAttribute("aria-label", targetLang === "tr" ? dict["a11y.switchToTurkish"] : dict["a11y.switchToEnglish"]);
  });
}

const customSelectRegistry = new Map();
let customSelectHandlersBound = false;

function closeCustomSelect(instance) {
  if (!instance) return;
  instance.root.classList.remove("is-open");
  instance.field.classList.remove("is-open");
  instance.trigger.setAttribute("aria-expanded", "false");

  const hasOpenSelect = Array.from(customSelectRegistry.values()).some((entry) => entry.root.classList.contains("is-open"));
  if (!hasOpenSelect) {
    document.body.classList.remove("has-select-open");
  }
}

function closeAllCustomSelects(except = null) {
  customSelectRegistry.forEach((instance) => {
    if (instance !== except) closeCustomSelect(instance);
  });
}

function syncCustomSelectInstance(instance) {
  const options = Array.from(instance.select.options);
  const selectedOption = options.find((option) => option.selected) || options[0];

  instance.value.textContent = selectedOption ? selectedOption.textContent.trim() : "";
  instance.trigger.classList.toggle("is-placeholder", !instance.select.value);

  instance.menu.innerHTML = "";

  options.forEach((option, index) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "contact-select-option";
    optionButton.dataset.value = option.value;
    optionButton.textContent = option.textContent.trim();
    optionButton.setAttribute("role", "option");
    optionButton.setAttribute("aria-selected", option.value === instance.select.value ? "true" : "false");

    if (index === 0) optionButton.classList.add("is-placeholder");
    if (option.value === instance.select.value) optionButton.classList.add("is-selected");

    optionButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      instance.select.value = option.value;
      instance.select.dispatchEvent(new Event("change", { bubbles: true }));
      closeCustomSelect(instance);
    });

    instance.menu.appendChild(optionButton);
  });
}

function syncCustomSelects() {
  customSelectRegistry.forEach((instance) => syncCustomSelectInstance(instance));
}

function initCustomSelects() {
  document.querySelectorAll("select[data-custom-select]").forEach((select) => {
    if (customSelectRegistry.has(select)) {
      syncCustomSelectInstance(customSelectRegistry.get(select));
      return;
    }

    const field = select.closest(".contact-field");
    if (!field) return;

    field.classList.add("has-custom-select");
    select.classList.add("contact-native-select");

    const root = document.createElement("div");
    root.className = "contact-select";

    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "contact-select-trigger is-placeholder";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");

    const value = document.createElement("span");
    value.className = "contact-select-value";
    trigger.appendChild(value);

    const menu = document.createElement("div");
    menu.className = "contact-select-menu";
    menu.setAttribute("role", "listbox");

    root.append(trigger, menu);
    select.insertAdjacentElement("afterend", root);

    const instance = { field, menu, root, select, trigger, value };
    customSelectRegistry.set(select, instance);

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const isOpen = root.classList.contains("is-open");
      closeAllCustomSelects(isOpen ? null : instance);

      if (isOpen) {
        closeCustomSelect(instance);
        return;
      }

      root.classList.add("is-open");
      field.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
      document.body.classList.add("has-select-open");
    });

    select.addEventListener("change", () => {
      field.classList.remove("is-invalid");
      syncCustomSelectInstance(instance);
    });

    syncCustomSelectInstance(instance);
  });

  if (customSelectHandlersBound) return;
  customSelectHandlersBound = true;

  document.addEventListener("click", (event) => {
    if (event.target.closest(".contact-select")) return;
    closeAllCustomSelects();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAllCustomSelects();
  });
}

function applyLanguage(lang) {
  const dict = translations[lang];
  if (!dict) return;

  translatable.forEach((el) => {
    const val = dict[el.dataset.i18n];
    if (!val) return;
    const liveDot = el.querySelector(".live-dot");
    if (liveDot) {
      el.textContent = "";
      el.append(liveDot, document.createTextNode(" " + val));
      return;
    }
    el.textContent = val;
  });

  ariaTranslatable.forEach((el) => {
    const val = dict[el.dataset.i18nAriaLabel];
    if (val) el.setAttribute("aria-label", val);
  });

  placeholderTranslatable.forEach((el) => {
    const val = dict[el.dataset.i18nPlaceholder];
    if (val) el.setAttribute("placeholder", val);
  });

  syncSeo(lang);
  syncSchema(lang);
  syncLangToggle(lang, dict);
  syncCustomSelects();
  queueHeroRotatorWidthSync();

  if (menuToggleButton) {
    const expanded = menuToggleButton.getAttribute("aria-expanded") === "true";
    menuToggleButton.setAttribute("aria-label", expanded ? dict["a11y.menuClose"] : dict["a11y.menuOpen"]);
  }
}

function setLanguage(lang, options = {}) {
  const normalized = lang === "en" ? "en" : "tr";
  setStoredValue(LANGUAGE_STORAGE_KEY, normalized);
  setLanguageCookie(normalized);
  applyLanguage(normalized);
  if (options.syncUrl !== false) {
    syncLanguageUrl(normalized, options.replaceUrl !== false);
  }
}

const urlParams = new URLSearchParams(window.location.search);
const urlLang = urlParams.get("lang") === "en" ? "en" : "tr";
const storedLang = parseLanguagePreference(getStoredValue(LANGUAGE_STORAGE_KEY));
const cookieLang = getLanguageCookie();
const initialLang = urlParams.has("lang")
  ? urlLang
  : (storedLang || cookieLang || getBrowserDefaultLanguage());
setLanguage(initialLang, { replaceUrl: true, syncUrl: true });
initCustomSelects();
queueHeroRotatorWidthSync();

window.addEventListener("resize", queueHeroRotatorWidthSync, { passive: true });

if (document.fonts?.ready) {
  document.fonts.ready.then(() => {
    queueHeroRotatorWidthSync();
  });
}

langSwitchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetLang = button.dataset.langSwitch === "en" ? "en" : "tr";
    const currentLang = document.documentElement.lang === "en" ? "en" : "tr";
    if (targetLang === currentLang) return;
    setLanguage(targetLang, { replaceUrl: false, syncUrl: true });
  });
});

window.addEventListener("popstate", () => {
  const nextLang = new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "tr";
  setStoredValue(LANGUAGE_STORAGE_KEY, nextLang);
  setLanguageCookie(nextLang);
  applyLanguage(nextLang);
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
  if (heroRotatorWords.length < 2) return;
  let idx = 0;
  setInterval(() => {
    const current = heroRotatorWords[idx];
    idx = (idx + 1) % heroRotatorWords.length;
    const next = heroRotatorWords[idx];
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
  if (!getStoredValue(KEY)) {
    const revealBanner = () => {
      banner.hidden = false;
      window.removeEventListener("scroll", revealOnScroll);
      if (revealTimer) clearTimeout(revealTimer);
    };
    const revealOnScroll = () => {
      if (window.scrollY > revealOffset) revealBanner();
    };
    let revealTimer = null;
    const isMobile = window.matchMedia("(max-width: 560px)").matches;
    const revealOffset = isMobile ? Math.max(window.innerHeight * 1.35, 720) : 180;
    if (isMobile) {
      revealTimer = setTimeout(revealBanner, 8200);
    } else {
      window.addEventListener("scroll", revealOnScroll, { passive: true });
      revealTimer = setTimeout(revealBanner, 1600);
    }
  }
  accept.addEventListener("click", () => {
    setStoredValue(KEY, "1");
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

  const currentDict = () => translations[document.documentElement.lang === "en" ? "en" : "tr"] || translations.tr;
  const setToggleLabel = (expanded) => {
    const dict = currentDict();
    toggle.setAttribute("aria-label", expanded ? dict["a11y.menuClose"] : dict["a11y.menuOpen"]);
  };

  const closeMenu = () => {
    header.classList.remove("is-menu-open");
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    setToggleLabel(false);
  };

  const openMenu = () => {
    header.classList.add("is-menu-open");
    document.body.classList.add("menu-open");
    toggle.setAttribute("aria-expanded", "true");
    setToggleLabel(true);
  };

  toggle.addEventListener("click", () => {
    if (header.classList.contains("is-menu-open")) closeMenu();
    else openMenu();
  });

  panel.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!header.classList.contains("is-menu-open")) return;
    if (panel.contains(event.target) || toggle.contains(event.target)) return;
    closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.classList.contains("is-menu-open")) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMenu();
  }, { passive: true });

  setToggleLabel(false);
})();

/* Scroll progress — transform:scaleX + cached total (no forced reflow) */
(() => {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  bar.style.transformOrigin = "0 50%";
  bar.style.width = "100%";

  let total = 0;
  let ticking = false;

  const recalcTotal = () => {
    total = document.documentElement.scrollHeight - window.innerHeight;
  };
  recalcTotal();
  window.addEventListener("resize", recalcTotal, { passive: true });
  // Recompute when fonts load / images lazy-size
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(recalcTotal);
  window.addEventListener("load", recalcTotal);

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const p = total > 0 ? Math.min(1, window.scrollY / total) : 0;
      bar.style.transform = `scaleX(${p})`;
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

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

/* Heavy pointer-follow and magnetic hover effects removed for performance.
   Kept lightweight interactions: reveal-on-scroll, word rotator,
   count-up, back-to-top, cookie banner, mobile menu and scroll progress. */

/* Remove aurora canvas element from DOM if present */
(function removeAurora() {
  const canvas = document.getElementById("aurora-canvas");
  if (canvas) canvas.remove();
})();

/* ─── Process Timeline — Expand/Collapse ────────────────── */
(() => {
  const items = document.querySelectorAll(".timeline-item");
  if (!items.length) return;

  items.forEach(item => {
    const toggle = item.querySelector(".timeline-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-expanded");
      // Close all others (accordion behavior)
      items.forEach(i => {
        i.classList.remove("is-expanded");
        const t = i.querySelector(".timeline-toggle");
        if (t) t.setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("is-expanded");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });
})();

/* ─── Contact form + mail copy ─────────────────────────── */
(() => {
  const leadForm = document.getElementById("leadForm");
  const contactStatus = document.getElementById("contactStatus");
  const mailCopyButtons = document.querySelectorAll(".mail-copy-button");
  const defaultMail = "info@ayvexdevelopment.com";

  const currentLang = () => document.documentElement.lang === "en" ? "en" : "tr";
  const currentDict = () => translations[currentLang()] || translations.tr;
  const setContactStatus = (message, isError = false) => {
    if (!contactStatus) return;
    contactStatus.textContent = message;
    contactStatus.classList.toggle("is-error", isError);
  };

  const fallbackCopy = (value) => {
    const textarea = document.createElement("textarea");
    textarea.value = value;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    try { document.execCommand("copy"); } catch {}
    textarea.remove();
  };

  const copyMail = async (button) => {
    const mail = button.dataset.copyMail || defaultMail;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(mail);
      } else {
        fallbackCopy(mail);
      }
    } catch {
      fallbackCopy(mail);
    }

    button.classList.add("is-copied");
    window.setTimeout(() => button.classList.remove("is-copied"), 1800);
  };

  const createLeadDraft = () => {
    const dict = currentDict();
    const lang = currentLang();
    const formData = new FormData(leadForm);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const company = (formData.get("company") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const projectType = leadForm.querySelector("#leadProjectType")?.selectedOptions?.[0]?.textContent?.trim() || "";
    const budget = leadForm.querySelector("#leadBudget")?.selectedOptions?.[0]?.textContent?.trim() || "";
    const timeline = leadForm.querySelector("#leadTimeline")?.selectedOptions?.[0]?.textContent?.trim() || "";

    const cleanValue = (value, placeholder) => {
      if (!value || value === placeholder) return "";
      return value;
    };

    const safeProjectType = cleanValue(projectType, dict["contact.projectTypePlaceholder"]);
    const safeBudget = cleanValue(budget, dict["contact.budgetPlaceholder"]);
    const safeTimeline = cleanValue(timeline, dict["contact.timelinePlaceholder"]);

    const subject = lang === "en"
      ? "New project inquiry" + (company ? " · " + company : "")
      : "Yeni proje talebi" + (company ? " · " + company : "");

    const lines = lang === "en"
      ? [
          "Hello AyveX Development,",
          "",
          "I would like to discuss a new project.",
          "",
          "Name: " + name,
          "Email: " + email,
          company ? "Company / Brand: " + company : "",
          safeProjectType ? "Project type: " + safeProjectType : "",
          safeBudget ? "Budget range: " + safeBudget : "",
          safeTimeline ? "Preferred start time: " + safeTimeline : "",
          "",
          "Project summary:",
          message
        ]
      : [
          "Merhaba AyveX Development,",
          "",
          "Yeni bir proje hakkında görüşmek istiyorum.",
          "",
          "Ad: " + name,
          "E-posta: " + email,
          company ? "Şirket / Marka: " + company : "",
          safeProjectType ? "Proje tipi: " + safeProjectType : "",
          safeBudget ? "Bütçe aralığı: " + safeBudget : "",
          safeTimeline ? "Başlangıç zamanı: " + safeTimeline : "",
          "",
          "Proje özeti:",
          message
        ];

    const body = lines.filter(Boolean).join("\r\n");
    const mailto = "mailto:" + defaultMail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    return { mailto, dict };
  };

  mailCopyButtons.forEach((button) => {
    button.addEventListener("click", () => copyMail(button));
  });

  if (!leadForm) return;

  const projectTypeSelect = leadForm.querySelector("#leadProjectType");
  projectTypeSelect?.addEventListener("change", () => {
    if (!projectTypeSelect.value || !contactStatus?.classList.contains("is-error")) return;
    setContactStatus("", false);
  });

  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    setContactStatus("", false);

    if (!leadForm.reportValidity()) return;

    if (projectTypeSelect && !projectTypeSelect.value) {
      projectTypeSelect.closest(".contact-field")?.classList.add("is-invalid");
      setContactStatus(currentDict()["contact.validationProjectType"], true);
      projectTypeSelect.parentElement?.querySelector(".contact-select-trigger")?.focus();
      return;
    }

    const draft = createLeadDraft();

    setContactStatus(draft.dict["contact.statusOpening"], false);

    window.location.href = draft.mailto;
  });
})();
