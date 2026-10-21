// FFdaffastore - Site Data Configuration
// Relative time helper ("3 jam lalu" / "3 hours ago") — shared by app.js & product.js
window.timeAgo = function (iso, lang) {
  if (!iso) return "";
  var diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if (isNaN(diff) || diff < 0) diff = 0;
  var m = Math.floor(diff / 60), h = Math.floor(diff / 3600), d = Math.floor(diff / 86400);
  var en = lang === "en";
  if (m < 60) return en ? m + "m ago" : m + " menit lalu";
  if (h < 24) return en ? h + "h ago" : h + " jam lalu";
  return en ? d + "d ago" : d + " hari lalu";
};

window.SITE_CONFIG = {
  brand: {
    name: "FFdaffastore",
    tagline: "Honkai: Star Rail Verified Store",
    platform: "Direct Store & Trusted Escrow Available",
    established: "2023"
  },

  // Stats displayed on hero
  stats: {
    soldCount: "500+",
    activeStock: "6",
    satisfaction: "99.8%",
    avgProcessMinutes: "< 10m"
  },

  // Official store & contact links
  links: {
    itemkuStore: "https://www.itemku.com/id/t/ffdaffastore", // toko itemku resmi
    whatsapp: "+628973353831",
    discord: "",
    instagram: "",
    email: ""
  },

  // Catalog: accounts with detail specs for interactive modal
  catalog: [
    {
      id: "HSR-01",
      title: "HSR Account #01",
      server: "Asia",
      trailblazeLevel: 70,
      price: "Rp 550.000",
      image: "assets/img/catalog-1.webp",
      status: "Available",
      limitedChars: 29,
      signWeapons: 4,
      highlights: ["Sunday + Sign", "Phainon E1 + Sign", "UID Old 8030", "Story Planarcadia"],
      enHighlights: ["Sunday + Sign", "Phainon E1 + Sign", "Old UID 8030", "Planarcadia Story"],
      desc: "Akun HSR Asia TL70, 29 Limited, 4 Signature. Sunday Sign, Phainon E1 Sign, UID Old 8030, Story Planarcadia.",
      enDesc: "HSR Asia TL70 account, 29 Limited, 4 Signatures. Sunday Sign, Phainon E1 Sign, Old UID 8030, Planarcadia Story.",
      itemkuUrl: "https://www.itemku.com/id/dagangan/honkai-star-rail-asia-akun-hsr-asia-tl70-29-limit-4-sign-sunday-sign-phainon-e1-sign-uid-old-8030-story-planarcadia-termurah-ffdaffastore/4404834?from=product_list_page&fromAds=1&ads_placement=2",
      shots: [
        { src: "assets/img/shot/hsr01-hero.webp", label: "Pengalaman Trailblaze" },
        { src: "assets/img/shot/hsr01-roster1.webp", label: "Banner akun" },
        { src: "assets/img/shot/hsr01-lightcone.webp", label: "Light Cone" },
        { src: "assets/img/shot/hsr01-inventory.webp", label: "Inventory" },
        { src: "assets/img/shot/hsr01-profile.webp", label: "Profile" }
      ]
    },
    {
      id: "HSR-02",
      title: "HSR Account #02 (Premium)",
      server: "Asia",
      trailblazeLevel: 70,
      price: "Rp 850.000",
      image: "assets/img/catalog-2.webp",
      status: "Sold",
      soldAt: "2026-10-17T09:00:00Z",
      limitedChars: 39,
      signWeapons: 7,
      highlights: ["Evernight E2 + Sign", "Firefly Costume + Sign", "UID Sepuh 8010", "Story Amphoreus"],
      enHighlights: ["Evernight E2 + Sign", "Firefly Costume + Sign", "Veteran UID 8010", "Amphoreus Story"],
      desc: "Akun premium sepuh TL70, 39 Limited, 7 Signature. Evernight E2 Sign, Firefly Costume Sign, UID Sepuh 8010, Story Amphoreus.",
      enDesc: "Premium veteran account TL70, 39 Limited, 7 Signatures. Evernight E2 Sign, Firefly Costume Sign, Veteran UID 8010, Amphoreus Story.",
      itemkuUrl: "https://www.itemku.com/id/dagangan/honkai-star-rail-asia-akun-hsr-asia-tl70-premium-39-limit-7-sign-evernight-e2-sign-firefly-costume-sign-uid-sepuh-8010-story-amphoreus-termurah-ffdaffastore/4408195?from=shop_page",
      shots: [
        { src: "assets/img/shot/hsr02-hero.webp", label: "Pengalaman Trailblaze" },
        { src: "assets/img/shot/hsr02-roster1.webp", label: "Banner akun" },
        { src: "assets/img/shot/hsr02-lightcone.webp", label: "Light Cone" },
        { src: "assets/img/shot/hsr02-profile.webp", label: "Profile" },
        { src: "assets/img/shot/hsr02-power.webp", label: "Trailblaze Power" }
      ]
    },
    {
      id: "HSR-03",
      title: "HSR Account #03",
      server: "Asia",
      trailblazeLevel: 70,
      price: "Rp 499.999",
      image: "assets/img/catalog-3.webp",
      status: "Sold",
      soldAt: "2026-10-11T11:30:00Z",
      limitedChars: 28,
      signWeapons: 5,
      highlights: ["Archer E1 + Sign", "Castorice + Sign", "28 Limited 5 Sign", "Story Amphoreus"],
      enHighlights: ["Archer E1 + Sign", "Castorice + Sign", "28 Limited 5 Signs", "Amphoreus Story"],
      desc: "Akun HSR Asia TL70, 28 Limited, 5 Signature. Archer E1 Sign, Castorice Sign, Story Amphoreus.",
      enDesc: "HSR Asia TL70 account, 28 Limited, 5 Signatures. Archer E1 Sign, Castorice Sign, Amphoreus Story.",
      itemkuUrl: "https://www.itemku.com/id/dagangan/honkai-star-rail-asia-akun-hsr-asia-tl70-archer-e1-sign-castorice-sign-28-limit-5-sign-story-amphoreus-termurah-ffdaffastore/4408213?from=shop_page",
      shots: [
        { src: "assets/img/shot/hsr03-hero.webp", label: "Pengalaman Trailblaze" },
        { src: "assets/img/shot/hsr03-roster1.webp", label: "Banner akun" },
        { src: "assets/img/shot/hsr03-lightcone.webp", label: "Light Cone" },
        { src: "assets/img/shot/hsr03-profile.webp", label: "Profile" },
        { src: "assets/img/shot/hsr03-power.webp", label: "Trailblaze Power" }
      ]
    },
    {
      id: "HSR-04",
      title: "HSR Account #04 (Premium)",
      server: "Asia",
      trailblazeLevel: 70,
      price: "Rp 850.000",
      image: "assets/img/catalog-4.webp",
      status: "Available",
      limitedChars: 37,
      signWeapons: 9,
      highlights: ["Rin Tohsaka + Sign", "Archer + Sign", "Acheron E1 + Sign", "UID Sepuh 8034"],
      enHighlights: ["Rin Tohsaka + Sign", "Archer + Sign", "Acheron E1 + Sign", "Veteran UID 8034"],
      desc: "Akun HSR Asia TL70 Premium, 37 Limited, 9 Signature. Rin Tohsaka Sign, Archer Sign, Acheron E1 Sign, Robin E1, Blade E1, Rate On, UID Sepuh 8034, Story Amphoreus.",
      enDesc: "Premium HSR Asia TL70 account, 37 Limited, 9 Signatures. Rin Tohsaka Sign, Archer Sign, Acheron E1 Sign, Robin E1, Blade E1, Rate On, Veteran UID 8034, Amphoreus Story.",
      itemkuUrl: "https://www.itemku.com/id/dagangan/honkai-star-rail-asia-akun-hsr-asia-tl70-premium-37-limit-9-sign-archer-sign-rin-tohsaka-sign-rate-on-1x-gcs-temurah-ffdaffastore/4410715?from=product_list_page&fromAds=1&ads_placement=2",
      shots: [
        { src: "assets/img/shot/hsr04-hero.webp", label: "Banner akun" },
        { src: "assets/img/shot/hsr04-profile.webp", label: "Profile" },
        { src: "assets/img/shot/hsr04-lightcone.webp", label: "Light Cone" },
        { src: "assets/img/shot/hsr04-power.webp", label: "Trailblaze Power" },
        { src: "assets/img/shot/hsr04-story.webp", label: "Pengalaman Trailblaze" }
      ]
    },
    {
      id: "HSR-05",
      title: "HSR Account #05",
      server: "Asia",
      trailblazeLevel: 70,
      price: "Rp 600.000",
      image: "assets/img/catalog-5.webp",
      status: "Available",
      limitedChars: 29,
      signWeapons: 6,
      highlights: ["Cyrene E2 + Sign", "Acheron E1 + Sign", "Sparkle E1", "Rate On"],
      enHighlights: ["Cyrene E2 + Sign", "Acheron E1 + Sign", "Sparkle E1", "Rate On"],
      desc: "Akun HSR Asia TL70, 29 Limited, 6 Signature. Cyrene E2 Sign, Acheron E1 Sign, Himeko Nova Sign, The Herta Sign, Sunday Sign, Saber Sign, Ruan Mei E1, Rate On, Costume March 7th + Ruan Mei, Endgame Cleared, Story Planarcadia.",
      enDesc: "HSR Asia TL70 account, 29 Limited, 6 Signatures. Cyrene E2 + Acheron E1 Signs, Himeko Nova, The Herta, Sunday and Saber Signs, Ruan Mei E1, Rate On, March 7th + Ruan Mei costumes, Endgame Cleared, Planarcadia Story.",
      itemkuUrl: "https://www.itemku.com/id/dagangan/honkai-star-rail-asia-akun-hsr-asia-tl70-29-limit-6-sign-cyrene-e2-sign-acheron-e1-sign-rate-on-story-planarcadia-temurah-ffdaffastore/4417346",
      shots: [
        { src: "assets/img/shot/hsr05-hero.webp", label: "Profile akun" },
        { src: "assets/img/shot/hsr05-lightcone.webp", label: "Light Cone" },
        { src: "assets/img/shot/hsr05-power.webp", label: "Trailblaze Power" },
        { src: "assets/img/shot/hsr05-story.webp", label: "Pengalaman Trailblaze" }
      ]
    },
    {
      id: "HSR-06",
      title: "HSR Account #06 (Gacha Ready)",
      server: "Asia",
      trailblazeLevel: 70,
      price: "Rp 750.000",
      image: "assets/img/catalog-6.webp",
      status: "Available",
      limitedChars: 26,
      signWeapons: 11,
      highlights: ["170x Golden Ticket", "2x GCS", "Acheron E2 + Sign", "Castorice + Sign"],
      enHighlights: ["170x Golden Tickets", "2x GCS", "Acheron E2 + Sign", "Castorice + Sign"],
      desc: "Akun HSR Asia TL70 Gacha, 26 Limited, 11 Signature. 170x Golden Ticket, 2x Golden Companion Spirit, Acheron E2 Sign, Tribbie E1 Sign, Ruan Mei E1 Sign, Fugue Sign, Castorice Sign, Phainon Sign, Dan Heng PT Sign, Endgame Cleared, Story Planarcadia.",
      enDesc: "HSR Asia TL70 Gacha account, 26 Limited, 11 Signatures. 170x Golden Tickets, 2x Golden Companion Spirits, Acheron E2 + Tribbie E1 + Ruan Mei E1 Signs, Fugue, Castorice, Phainon and Dan Heng PT Signs, Endgame Cleared, Planarcadia Story.",
      itemkuUrl: "https://www.itemku.com/id/dagangan/honkai-star-rail-asia-akun-hsr-asia-tl70-gacha-26-limit-11-sign-170x-golden-ticket-2x-gcs-tribbie-e1-sign-acheron-e2-sign-story-planarcadia-termurah-ffdaffastore/4417385",
      shots: [
        { src: "assets/img/shot/hsr06-hero.webp", label: "Profile akun" },
        { src: "assets/img/shot/hsr06-lightcone.webp", label: "Light Cone" },
        { src: "assets/img/shot/hsr06-warp.webp", label: "Event Warp" },
        { src: "assets/img/shot/hsr06-power.webp", label: "Trailblaze Power" },
        { src: "assets/img/shot/hsr06-story.webp", label: "Pengalaman Trailblaze" }
      ]
    },
    {
      id: "HSR-07",
      title: "HSR Account #07",
      server: "Asia",
      trailblazeLevel: 70,
      price: "Rp 700.000",
      image: "assets/img/catalog-7.webp",
      status: "Available",
      limitedChars: 29,
      signWeapons: 7,
      highlights: ["Aventurine Waveflair + Sign", "Silver Wolf LV.999 + Sign", "Pity 70 On", "Elation Party"],
      enHighlights: ["Aventurine Waveflair + Sign", "Silver Wolf LV.999 + Sign", "Pity 70", "Elation Party"],
      desc: "Akun HSR Asia TL70, 29 Limited, 7 Signature. Aventurine Waveflair Sign, Silver Wolf LV.999 Sign, Phainon E1 Sign, Sunday E1 Sign, Yao Guang Sign, Archer Sign, Pity 70 On, Rate On, Costume March 7th + Ruan Mei, Endgame Cleared, Story Planarcadia.",
      enDesc: "HSR Asia TL70 account, 29 Limited, 7 Signatures. Aventurine Waveflair, Silver Wolf LV.999, Phainon E1, Sunday E1, Yao Guang and Archer Signs, Pity 70, Rate On, March 7th + Ruan Mei costumes, Endgame Cleared, Planarcadia Story.",
      itemkuUrl: "https://www.itemku.com/id/dagangan/honkai-star-rail-asia-akun-hsr-asia-tl70-29-limit-7-sign-aventurine-waveflair-sign-elation-party-pity-70-on-story-planarcadia-termurah-ffdaffastore/4417425",
      shots: [
        { src: "assets/img/shot/hsr07-hero.webp", label: "Profile akun" },
        { src: "assets/img/shot/hsr07-lightcone.webp", label: "Light Cone" },
        { src: "assets/img/shot/hsr07-power.webp", label: "Trailblaze Power" },
        { src: "assets/img/shot/hsr07-story.webp", label: "Pengalaman Trailblaze" }
      ]
    },
    {
      id: "HSR-08",
      title: "HSR Account #08 (Premium)",
      server: "Asia",
      trailblazeLevel: 70,
      price: "Rp 850.000",
      image: "assets/img/catalog-8.webp",
      status: "Available",
      limitedChars: 27,
      signWeapons: 12,
      highlights: ["Pearl (4.6)", "Castorice + Sign", "Evernight + Sign", "Hyacine + Sign", "Endgame Full Star"],
      enHighlights: ["Pearl (4.6)", "Castorice + Sign", "Evernight + Sign", "Hyacine + Sign", "Endgame Full Star"],
      desc: "Akun HSR Asia TL70 Premium, 27 Limited, 12 Signature. Castorice Sign, Evernight Sign, Hyacine Sign, Robin Sign, Firefly Sign, Fugue Sign, Saber Sign, Archer Sign, The Herta Sign, Silver Wolf LV.999 Sign, Pearl, Endgame Full Star, Costume March 7th + Ruan Mei, Story Planarcadia.",
      enDesc: "Premium HSR Asia TL70 account, 27 Limited, 12 Signatures. Castorice, Evernight, Hyacine, Robin, Firefly, Fugue, Saber, Archer, The Herta and Silver Wolf LV.999 Signs, Pearl, Endgame Full Star, March 7th + Ruan Mei costumes, Planarcadia Story.",
      itemkuUrl: "https://www.itemku.com/id/dagangan/honkai-star-rail-asia-akun-hsr-asia-tl70-premium-elation-team-rememberance-team-archer-team-27-limit-12-sign-endgame-fullstar-story-planarcadia-termurah-ffdaffastore/4417478",
      shots: [
        { src: "assets/img/shot/hsr08-hero.webp", label: "Profile akun" },
        { src: "assets/img/shot/hsr08-lightcone.webp", label: "Light Cone" },
        { src: "assets/img/shot/hsr08-endgame.webp", label: "Memory of Chaos" },
        { src: "assets/img/shot/hsr08-story.webp", label: "Pengalaman Trailblaze" }
      ]
    }
  ],

  // Testimonials: itemku rating summary + text reviews + chat snippets
  ratingSummary: {
    score: "4.9",
    max: "5.0",
    count: "549",
    breakdown: [
      { stars: 5, count: 523 },
      { stars: 4, count: 20 },
      { stars: 3, count: 3 },
      { stars: 2, count: 1 },
      { stars: 1, count: 2 }
    ]
  },

  reviews: [
    {
      id: "r1",
      name: "Rio Aldi Hendratomo",
      badges: 116,
      date: "04 Oct 2026",
      stars: 5,
      product: "Akun HSR Asia TL70 | 34 Limit 9 Sign | Ruanmei E2 Sign + Firefly Sign + Fu Xuan E2 Sign | Story Planarcadia | Uid Sepuh 8006",
      enProduct: "HSR Asia Account TL70 | 34 Limited 9 Signs | Ruanmei E2 + Firefly + Fu Xuan E2 Signs | Planarcadia Story | Veteran UID 8006"
    },
    {
      id: "r2",
      name: "Ramdani",
      badges: 36,
      date: "30 Sep 2026",
      stars: 5,
      product: "Akun HSR Asia TL70 | 28 Limit 6 Sign | Castorice + Hyacine Sign + Robin E1 | Uid Sepuh 8034 | Story Amphoreus",
      enProduct: "HSR Asia Account TL70 | 28 Limited 6 Signs | Castorice + Hyacine + Robin E1 Signs | Veteran UID 8034 | Amphoreus Story"
    },
    {
      id: "r3",
      name: "Thirsty Lucielle",
      badges: 1,
      date: "28 Sep 2026",
      stars: 5,
      product: "Akun HSR Asia TL70 PREMIUM++ | 36 Limit 15 Sign | Aventurine Waveflair + Castorice Sign | Clear Endgame | Uid Old 8088",
      enProduct: "HSR Asia Account TL70 PREMIUM++ | 36 Limited 15 Signs | Aventurine Waveflair + Castorice Sign | Endgame Clear | Old UID 8088"
    },
    {
      id: "r4",
      name: "Minadako221086131",
      badges: 1,
      date: "25 Sep 2026",
      stars: 5,
      product: "Akun HSR+ZZZ Asia TL70 | 31 Limited | 11 Sign | 2 GCS | 61x Gacha Ticket | Cyrene Sign + Siwol 99 Sign + Yao Guang Sign",
      enProduct: "HSR+ZZZ Asia Account TL70 | 31 Limited | 11 Signs | 2 GCS | 61x Gacha Tickets | Cyrene + Siwol 99 + Yao Guang Signs"
    },
    {
      id: "r5",
      name: "Erick",
      badges: 1,
      date: "18 Sep 2026",
      stars: 5,
      product: "Akun HSR Asia TL70 | 32 Limit 7 Sign | Saber E2 Sign + Archeron E2 Sign + Sunday Sign | Story Planarcadia | Rate On | Termurah",
      enProduct: "HSR Asia Account TL70 | 32 Limited 7 Signs | Saber E2 + Archeron E2 + Sunday Signs | Planarcadia Story | Rate On"
    },
    {
      id: "r6",
      name: "riimilky16",
      badges: 1,
      date: "06 Sep 2026",
      stars: 5,
      product: "Akun HSR Asia TL70 | 26 Limit 7 Sign | Archer E1 Sign + Saber E1 Sign + Yao Guang Sign | Story Planarcadia | Termurah",
      enProduct: "HSR Asia Account TL70 | 26 Limited 7 Signs | Archer E1 + Saber E1 + Yao Guang Signs | Planarcadia Story"
    },
    {
      id: "r7",
      name: "Cepi Casper",
      badges: 1,
      date: "23 Aug 2026",
      stars: 5,
      comment: "Madep akun nyah",
      product: "Akun Midgame 11 Limit | TL60 | Story Penacony | 20x Golden Ticket | Sparxie + Robin + Yao Guang + Archeron",
      enProduct: "Midgame Account 11 Limited | TL60 | Penacony Story | 20x Golden Tickets | Sparxie + Robin + Yao Guang + Archeron"
    },
    {
      id: "r8",
      name: "William Chewnaldo",
      badges: 1,
      date: "19 Jul 2026",
      stars: 5,
      product: "16 LIMIT, HYSILENS + KAFKA + BLACKSWAN + DANHENG PT + ROBIN + RUAN MEI + AGLAEA + HUOHUO + YAO GUANG + JY, UID SEPUH 8001, TL67",
      enProduct: "16 Limited, Hysilens + Kafka + Black Swan + Dan Heng PT + Robin + Ruan Mei + Huohuo + Yao Guang, Veteran UID 8001, TL67"
    },
    {
      id: "r9",
      name: "Ghifari Febriansyah",
      badges: 1,
      date: "17 Jul 2026",
      stars: 5,
      product: "Akun HSR Asia TL64 | Saber Sign + Archer Sign | 11 Limit | Anti-Hackback | Termurah",
      enProduct: "HSR Asia Account TL64 | Saber + Archer Signs | 11 Limited | Anti-Hackback"
    },
    {
      id: "r10",
      name: "Desta",
      badges: 1,
      date: "12 Jul 2026",
      stars: 5,
      product: "Akun HSR Asia TL64 | Mortenax Blade E2 Sign | 11 Limit | Anti-Hackback | Termurah",
      enProduct: "HSR Asia Account TL64 | Mortenax Blade E2 Sign | 11 Limited | Anti-Hackback"
    },
    {
      id: "r11",
      name: "Trabs",
      badges: 1,
      date: "11 Jul 2026",
      stars: 5,
      product: "Akun HSR Asia TL70 | Castorice, Robin Sign, Acheron Sign | 27 Limit | UID 8023 | Anti-Hackback | Termurah",
      enProduct: "HSR Asia Account TL70 | Castorice + Robin + Acheron Signs | 27 Limited | UID 8023 | Anti-Hackback"
    },
    {
      id: "r12",
      name: "rangemaker5",
      badges: 1,
      date: "01 Jul 2026",
      stars: 5,
      comment: "Harga akunnya murah Sellernya ramah dan fast respond juga di bimbing sampai bisa amanin akun yang di beli, recomended store",
      product: "15 LIMIT, ANAXA SIGN + EVANESCIA + YAOGUANG + HUOHUO + DANHENG PT + RUAN MEI + CERYDRA + HYACINE + SABER + SPARKLE + SUNDAY + ARCHER + YUNLI, TL70",
      enProduct: "15 Limited, Anaxa Sign + Evanescia + Yaoguang + Huohuo + Dan Heng PT + Ruan Mei + Hyacine + Saber + Sparkle + Sunday + Archer + Yunli, TL70"
    },
    {
      id: "r13",
      name: "Irul Osd",
      badges: 1,
      date: "27 Jun 2026",
      stars: 5,
      product: "17 LIMIT 6 SIGN, CYRENE E2 SIGN + YAO GUANG SIGN + PHAINON SIGN + THERTA SIGN + SABER SIGN + ARCHER SIGN, TL70",
      enProduct: "17 Limited 6 Signs, Cyrene E2 + Yao Guang + Phainon + Therta + Saber + Archer Signs, TL70"
    },
    {
      id: "r14",
      name: "yumessa123456789",
      badges: 1,
      date: "22 Jun 2026",
      stars: 5,
      product: "14 LIMIT, SUNDAY + SIWOL 99 + HUOHUO E1 + DANHENG PT + AGLAEA + RUAN MEI + ANAXA + SABER + SW + SPARKLE, TL67, UID SEPUH 8010, RATE ON",
      enProduct: "14 Limited, Sunday + Siwol 99 + Huohuo E1 + Dan Heng PT + Aglaea + Ruan Mei + Anaxa + Saber + SW + Sparkle, TL67, Veteran UID 8010, Rate On"
    }
  ],

  chats: [
    {
      id: "c1",
      buyer: "Minadako221086131",
      flag: "PH",
      date: "Sep 25",
      messages: [
        { from: "buyer", text: "All done thank you so much again :D" },
        { from: "buyer", text: "All done thank you again sir I will recommend you with my friends :D" },
        { from: "buyer", text: "If they want to buy hsr accounts i will recommend this shop" },
        { from: "seller", text: "Thank you very much! 😄 I really appreciate your support and recommendation. It means a lot to me. If you or your friends ever need anything, feel free to contact me anytime. Have a wonderful day! 🙏✨" }
      ]
    },
    {
      id: "c2",
      buyer: "Erick",
      flag: "ID",
      date: "Sep 18",
      messages: [
        { from: "buyer", text: "ini bisa langsung saya ganti min email sama passnya ?" },
        { from: "buyer", text: "udh bisa masuk min" },
        { from: "seller", text: "iyakah ganti aja" },
        { from: "seller", text: "kalau sudah masuk, tolong boleh tinggalkan rating bintang 5 ya kak" }
      ]
    }
  ],

  // Buyer Protection & Guarantees
  guarantees: [
    {
      title: "Garansi 3 Bulan Penuh",
      enTitle: "3-Month Full Coverage",
      desc: "Proteksi penuh selama 90 hari pertama sejak serah terima. Jika terjadi hackback atau kehilangan akses dari pihak kami, bebas pilih: ganti unit setara atau 100% full refund.",
      enDesc: "Full 90-day protection starting on delivery day. If access is lost or hacked back, you choose: an equivalent replacement unit or a 100% full refund."
    },
    {
      title: "Direct Order & Opsi Escrow",
      enTitle: "Direct Order & Escrow Option",
      desc: "Transaksi langsung lebih cepat dan hemat via transfer/QRIS, atau gunakan rekening bersama marketplace (Itemku) jika ingin perlindungan escrow tambahan.",
      enDesc: "Direct transfer for faster processing and lower fees, or use trusted platform escrow (Itemku) upon request."
    },
    {
      title: "Anti-Hackback & Clean History",
      enTitle: "Anti-Hackback & Clean History",
      desc: "Setiap akun melewati pengecekan ketat: bebas riwayat cheat, exploit, refund abuse, maupun minus stellar jade.",
      enDesc: "Every account is rigorously vetted: clean history, zero cheat flags, no negative stellar jade, zero refund abuse."
    },
    {
      title: "Pendampingan Serah Terima",
      enTitle: "Assisted Live Handover",
      desc: "Kami pandu langsung proses pengaitan email pribadi kamu, nomor telepon, dan pengamanan kredensial sampai tuntas.",
      enDesc: "We guide you live through binding your own personal email, phone number, and two-factor credentials."
    }
  ],

  // FAQ
  faq: [
    {
      q: "Apakah akun aman dari ban dan hackback?",
      enQ: "Is it safe from ban and hackback?",
      a: "Aman. Semua akun diperiksa ketat riwayatnya dan dilengkapi GARANSI 3 BULAN PERTAMA sejak akun kamu pegang. Jika ada kendala kehilangan akses atau hackback selama periode 90 hari tersebut, kami ganti unit akun baru yang setara atau dana kamu kami refund penuh 100%.",
      enA: "Safe. All accounts undergo thorough screening and come with a 3-MONTH FULL GUARANTEE from day one. If access is lost or hackback occurs within those 90 days, we either provide an equivalent replacement account or issue a 100% full refund."
    },
    {
      q: "Bagaimana cara melakukan pemesanan?",
      enQ: "How do I place an order?",
      a: "Pilih akun di katalog -> Hubungi kami via WhatsApp atau Discord -> Pilih metode transaksi (Direct Transfer cepat atau via Itemku Escrow) -> Pembayaran -> Serah terima data & bind email kamu langsung.",
      enA: "Choose an account from the catalog -> Reach us via WhatsApp or Discord -> Pick your payment method (Direct Transfer or Itemku Escrow) -> Payment -> Live credential handover and email binding."
    },
    {
      q: "Bagaimana proses pergantian email akun?",
      enQ: "How does the email binding process work?",
      a: "Fleksibel. Pembeli bisa melakukan bind mandiri secara langsung (kami berikan akses & teruskan kode verifikasinya), ATAU bisa minta bantuan penuh ke admin untuk dipandu/dipasangkan step-by-step sampai email pribadi resmi tertaut aman.",
      enA: "Fully flexible. Buyers can bind the account independently (we provide credentials and forward verification codes), OR request full admin assistance to be guided step-by-step until your personal email is securely linked."
    },
    {
      q: "Apa saja syarat klaim garansi 3 bulan?",
      enQ: "What are the terms for the 3-month warranty claim?",
      a: "Klaim berlaku jika akun mengalami kehilangan akses akibat masalah dari riwayat akun sebelumnya. Garansi tidak berlaku jika akun di-banned karena penggunaan program ilegal/cheat oleh pembeli, atau pembelian top-up ilegal pihak ketiga setelah serah terima.",
      enA: "Warranty applies to access loss or hackback stemming from pre-existing account origins. It is void if the ban results from unauthorized third-party cheats, mods, or illegal top-up chargebacks made after handover."
    }
  ]
};

