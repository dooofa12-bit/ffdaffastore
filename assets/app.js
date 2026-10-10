/* FFdaffastore - app.js */
/* Reads window.SITE_CONFIG and renders all dynamic sections */

const D = window.SITE_CONFIG;
let lang = localStorage.getItem("ffdaffa_lang") || "en";
let activeFilter = "all";
let activeTestiTab = "all";
let showAllReviews = false;

// ─── i18n strings ───────────────────────────────────────────────────────────
const i18n = {
  en: {
    "nav.store": "Toko Itemku",
    "nav.request": "Request Account",
    "hero.eyebrow": "Verified Direct Store & Trusted Escrow",
    "hero.line1": "Honkai: Star Rail",
    "hero.line2": "Verified Store",
    "hero.desc": "Browse verified accounts. Fast direct transactions or safe marketplace escrow. Full 3-month coverage.",
    "hero.cta1": "Browse Catalog",
    "hero.cta2": "Contact Seller",
    "stat.sold": "Accounts Sold",
    "stat.stock": "In Stock Now",
    "stat.satisfaction": "Satisfaction",
    "stat.process": "Avg Handover",
    "catalog.eyebrow": "Catalog",
    "catalog.title": "Current Listings",
    "catalog.desc": "Each account is vetted, clean history, backed by a 3-month warranty with replacement or 100% refund.",
    "catalog.filterAll": "All (3)",
    "catalog.filterAvail": "Available (3)",
    "catalog.filterReserved": "Reserved (0)",
    "catalog.available": "Available",
    "catalog.reserved": "Reserved",
    "catalog.clickDetail": "Details",
    "modal.tl": "Trailblaze Level",
    "modal.server": "Server",
    "modal.limited": "Limited Chars",
    "modal.sign": "Signature Lightcone",
    "modal.price": "Price",
    "modal.waPre": "Hi, I'm interested in account ",
    "testi.eyebrow": "Proof",
    "testi.title": "Transaction History",
    "testi.desc": "Confirmed handovers from real buyers across direct orders and escrow platforms.",
    "testi.tabAll": "All Proof",
    "testi.tabReviews": "Itemku Reviews (547)",
    "testi.tabChats": "Buyer Chats",
    "testi.showMore": "Show more reviews",
    "testi.showLess": "Show less",
    "guar.eyebrow": "Security",
    "guar.title": "Buyer Protection",
    "faq.title": "Common Questions",
    "contact.eyebrow": "Get in Touch",
    "contact.title": "Ready to Buy?",
    "contact.desc": "Reach out directly for faster checkout, or request escrow via itemku.",
    "footer.disc": "Not affiliated with HoYoverse / miHoYo.",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy"
  },
  id: {
    "nav.store": "Toko Itemku",
    "nav.request": "Request Akun",
    "hero.eyebrow": "Toko Resmi Terverifikasi & Opsi Escrow",
    "hero.line1": "Honkai: Star Rail",
    "hero.line2": "Toko Akun Resmi",
    "hero.desc": "Telusuri akun terverifikasi. Transaksi langsung cepat atau via escrow itemku. Garansi penuh 3 bulan.",
    "hero.cta1": "Lihat Katalog",
    "hero.cta2": "Hubungi Penjual",
    "stat.sold": "Akun Terjual",
    "stat.stock": "Stok Tersedia",
    "stat.satisfaction": "Kepuasan Pembeli",
    "stat.process": "Rata-rata Serah Terima",
    "catalog.eyebrow": "Katalog",
    "catalog.title": "Listing Saat Ini",
    "catalog.desc": "Setiap akun sudah dicek riwayatnya, dilindungi garansi 3 bulan: opsi ganti unit baru atau 100% full refund.",
    "catalog.filterAll": "Semua (3)",
    "catalog.filterAvail": "Tersedia (3)",
    "catalog.filterReserved": "Tereservasi (0)",
    "catalog.available": "Tersedia",
    "catalog.reserved": "Tereservasi",
    "catalog.clickDetail": "Detail",
    "modal.tl": "Level Trailblaze",
    "modal.server": "Server",
    "modal.limited": "Karakter Limited",
    "modal.sign": "Lightcone Signature",
    "modal.price": "Harga",
    "modal.waPre": "Halo min, saya tertarik dengan akun ",
    "testi.eyebrow": "Bukti",
    "testi.title": "Riwayat Transaksi",
    "testi.desc": "Bukti serah terima sukses dari pembeli langsung maupun platform escrow.",
    "testi.tabAll": "Semua Bukti",
    "testi.tabReviews": "Ulasan Itemku (547)",
    "testi.tabChats": "Chat Pembeli",
    "testi.showMore": "Tampilkan lebih banyak",
    "testi.showLess": "Tampilkan lebih sedikit",
    "guar.eyebrow": "Keamanan",
    "guar.title": "Perlindungan Pembeli",
    "faq.title": "Pertanyaan Umum",
    "contact.eyebrow": "Hubungi Kami",
    "contact.title": "Siap Beli?",
    "contact.desc": "Hubungi langsung untuk proses kilat tanpa biaya admin, atau minta via rekber itemku.",
    "footer.disc": "Tidak terafiliasi dengan HoYoverse / miHoYo.",
    "footer.terms": "Syarat & Ketentuan",
    "footer.privacy": "Kebijakan Privasi"
  }
};

function t(key) { return i18n[lang][key] || i18n.en[key] || key; }

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
}

// ─── Navbar mobile toggle ────────────────────────────────────────────────────
document.getElementById("menuBtn").addEventListener("click", () => {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("hidden");
});

// Close mobile menu when any nav link clicked
document.querySelectorAll("#mobileMenu a").forEach(a => {
  a.addEventListener("click", () => document.getElementById("mobileMenu").classList.add("hidden"));
});

// Lang toggle
document.getElementById("langToggle").addEventListener("click", () => {
  lang = lang === "en" ? "id" : "en";
  localStorage.setItem("ffdaffa_lang", lang);
  document.getElementById("langToggle").textContent = lang === "en" ? "EN / ID" : "ID / EN";
  applyLang();
  renderSections();
});

// ─── Store link ──────────────────────────────────────────────────────────────
const storeUrl = D.links.itemkuStore;
document.getElementById("storeBtn").href = storeUrl;

// ─── Stats ───────────────────────────────────────────────────────────────────
document.getElementById("statSold").textContent        = D.stats.soldCount;
document.getElementById("statStock").textContent       = D.stats.activeStock;
document.getElementById("statSatisfaction").textContent = D.stats.satisfaction;
document.getElementById("statProcess").textContent     = D.stats.avgProcessMinutes;

// Footer year
document.getElementById("footerYear").textContent = new Date().getFullYear();

// ─── Catalog ─────────────────────────────────────────────────────────────────
function openModal(id) {
  const acc = D.catalog.find(c => c.id === id);
  if (!acc) return;
  const isAvail = acc.status === "Available";
  const badgeClass = isAvail
    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
    : "bg-amber-50 text-amber-700 border border-amber-200";

  document.getElementById("modalId").textContent = acc.id;
  document.getElementById("modalTitle").textContent = acc.title;

  const imgTag = document.getElementById("modalImgTag");
  const placeholder = document.getElementById("modalImgPlaceholder");
  if (acc.image) {
    imgTag.onload = () => { if (placeholder) placeholder.style.display = "none"; };
    imgTag.onerror = () => {
      imgTag.style.display = "none";
      if (placeholder) placeholder.style.display = "block";
    };
    imgTag.src = acc.image;
    imgTag.alt = acc.title;
    imgTag.style.display = "block";
    if (imgTag.complete && imgTag.naturalWidth > 0) {
      if (placeholder) placeholder.style.display = "none";
    }
  } else {
    imgTag.style.display = "none";
    if (placeholder) placeholder.style.display = "block";
  }

  const badge = document.getElementById("modalBadge");
  badge.textContent = isAvail ? t("catalog.available") : t("catalog.reserved");
  badge.className = `text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`;

  document.getElementById("modalStats").innerHTML = `
    <div class="bg-ink-50 p-3 rounded-xl border border-ink-100">
      <p class="text-[10px] text-ink-400 font-semibold uppercase tracking-wider">${t("modal.tl")}</p>
      <p class="font-heading text-lg font-bold text-ink-900 mt-0.5">TL ${acc.trailblazeLevel} • ${acc.server}</p>
    </div>
    <div class="bg-ink-50 p-3 rounded-xl border border-ink-100">
      <p class="text-[10px] text-ink-400 font-semibold uppercase tracking-wider">${t("modal.price")}</p>
      <p class="font-heading text-lg font-bold text-gold-600 mt-0.5">${acc.price}</p>
    </div>
    <div class="bg-ink-50 p-3 rounded-xl border border-ink-100">
      <p class="text-[10px] text-ink-400 font-semibold uppercase tracking-wider">${t("modal.limited")}</p>
      <p class="font-heading text-lg font-bold text-ink-900 mt-0.5">${acc.limitedChars} Characters</p>
    </div>
    <div class="bg-ink-50 p-3 rounded-xl border border-ink-100">
      <p class="text-[10px] text-ink-400 font-semibold uppercase tracking-wider">${t("modal.sign")}</p>
      <p class="font-heading text-lg font-bold text-ink-900 mt-0.5">${acc.signWeapons} Lightcone</p>
    </div>
  `;

  const hl = lang === "id" ? acc.highlights : (acc.enHighlights || acc.highlights);
  document.getElementById("modalHighlights").innerHTML = hl.map(h => `
    <span class="text-xs font-medium bg-gold-50 text-gold-800 border border-gold-200 px-2.5 py-1 rounded-lg">✨ ${h}</span>
  `).join("");

  document.getElementById("modalDesc").textContent = lang === "id" ? acc.desc : (acc.enDesc || acc.desc);

  // Buttons with pre-filled text
  const waBtn = document.getElementById("modalWA");
  const waPre = encodeURIComponent(t("modal.waPre") + acc.id + " (" + acc.price + ")");
  waBtn.href = D.links.whatsapp ? `https://wa.me/${D.links.whatsapp.replace(/\D/g,"")}?text=${waPre}` : "#contact";
  document.getElementById("modalItemku").href = acc.itemkuUrl || D.links.itemkuStore || "#";

  const modal = document.getElementById("catalogModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeModal() {
  const modal = document.getElementById("catalogModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalBackdrop").addEventListener("click", closeModal);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

function renderCatalog() {
  const grid = document.getElementById("catalogGrid");
  const available = t("catalog.available");
  const reserved  = t("catalog.reserved");

  const filtered = activeFilter === "all"
    ? D.catalog
    : D.catalog.filter(c => c.status === activeFilter);

  grid.innerHTML = filtered.map(acc => {
    const isAvail = acc.status === "Available";
    const statusLabel = isAvail ? available : reserved;
    const statusClass = isAvail
      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
      : "bg-amber-50 text-amber-700 border border-amber-200";

    const pulseDot = isAvail
      ? `<span class="relative flex h-2 w-2 mr-1.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span></span>`
      : "";

    return `
      <article data-id="${acc.id}" class="catalog-card group bg-white border border-ink-200 rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between">
        <div>
          <div class="aspect-16-9 img-slot relative overflow-hidden">
            <img src="${acc.image}" alt="${acc.title}" loading="lazy"
                 onerror="this.style.display='none'; this.parentNode.setAttribute('data-empty','1')"
                 class="absolute inset-0 w-full h-full object-cover rounded-t-2xl transition-transform duration-300 group-hover:scale-105">
            <span class="placeholder-label text-ink-400 text-xs">Image</span>
            <div class="absolute bottom-2 left-2 text-[10px] font-semibold bg-ink-900/80 text-white backdrop-blur px-2 py-0.5 rounded-md">TL ${acc.trailblazeLevel}</div>
          </div>
          <div class="p-5 pb-2">
            <div class="flex items-center justify-between mb-1">
              <span class="text-xs text-ink-400 font-medium">${acc.id} • ${acc.server}</span>
              <span class="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusClass}">
                ${pulseDot}${statusLabel}
              </span>
            </div>
            <h3 class="font-heading text-xl font-bold text-ink-900 group-hover:text-gold-600 transition-colors">${acc.title}</h3>
            <p class="text-xs text-ink-500 mt-1 line-clamp-1">${acc.highlights.slice(0, 2).join(" • ")}</p>
          </div>
        </div>
        <div class="p-5 pt-3 border-t border-ink-100 flex items-center justify-between gap-2">
          <p class="font-heading text-xl sm:text-2xl font-bold text-ink-900">${acc.price}</p>
          <span class="text-xs font-semibold text-gold-700 bg-gold-50 border border-gold-200/70 px-2.5 py-1 rounded-lg group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500 transition-all inline-flex items-center gap-1 shrink-0">
            ${t("catalog.clickDetail")} →
          </span>
        </div>
      </article>`;
  }).join("");

  // Attach card click
  grid.querySelectorAll(".catalog-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.getAttribute("data-id")));
  });

  // Filter click handlers
  document.querySelectorAll("#catalogFilters .filter-btn").forEach(btn => {
    btn.onclick = () => {
      activeFilter = btn.getAttribute("data-filter");
      document.querySelectorAll("#catalogFilters .filter-btn").forEach(b => {
        b.className = "filter-btn text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer bg-white text-ink-600 border border-ink-200 hover:border-gold-400";
      });
      btn.className = "filter-btn active text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer bg-ink-900 text-white shadow-sm";
      renderCatalog();
    };
  });
}

// ─── Testimonials ────────────────────────────────────────────────────────────
function starsHtml(n) {
  let s = "";
  for (let i = 1; i <= 5; i++) {
    s += `<svg class="w-4 h-4 ${i <= n ? "text-amber-400" : "text-ink-200"}" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.445a1 1 0 00-1.176 0l-3.367 2.445c-.783.57-1.838-.196-1.538-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z"/></svg>`;
  }
  return s;
}

function renderTestimonials() {
  const grid = document.getElementById("testiGrid");
  const R = D.ratingSummary;

  // Rating strip
  const total = R.breakdown.reduce((a, b) => a + b.count, 0);
  const rows = R.breakdown.map(b => `
    <div class="flex items-center gap-2 text-xs text-ink-500">
      <span class="w-3 text-right">${b.stars}</span>
      <svg class="w-3.5 h-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.445a1 1 0 00-1.176 0l-3.367 2.445c-.783.57-1.838-.196-1.538-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z"/></svg>
      <div class="flex-1 h-1.5 bg-ink-100 rounded-full overflow-hidden min-w-[80px]">
        <div class="h-full bg-amber-400 rounded-full" style="width:${total ? Math.round(b.count / total * 100) : 0}%"></div>
      </div>
      <span class="w-8">${b.count}</span>
    </div>`).join("");

  // Review cards
  const displayedReviews = showAllReviews ? D.reviews : D.reviews.slice(0, 6);
  const reviews = displayedReviews.map(r => {
    const product = lang === "id" ? r.product : (r.enProduct || r.product);
    const commentHtml = r.comment ? `
      <p class="text-xs text-ink-800 font-medium italic bg-gold-50/70 border-l-2 border-gold-400 pl-3 py-1.5 my-2.5 rounded-r">
        “${r.comment}”
      </p>` : "";
    return `
      <div class="bg-white border border-ink-200 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2 min-w-0">
              <span class="w-8 h-8 rounded-full bg-gold-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">${r.name.charAt(0).toUpperCase()}</span>
              <p class="font-semibold text-ink-900 text-sm truncate">${r.name}</p>
              ${r.badges > 1 ? `<span class="text-[10px] font-semibold text-ink-500 bg-ink-100 rounded-full px-2 py-0.5 flex-shrink-0">${r.badges}</span>` : ""}
            </div>
            <span class="text-xs text-ink-400 flex-shrink-0">${r.date}</span>
          </div>
          <div class="flex gap-0.5 mb-2">${starsHtml(r.stars)}</div>
          ${commentHtml}
        </div>
        <p class="text-xs text-ink-500 leading-relaxed mt-2 pt-2 border-t border-ink-100">${lang === "id" ? "Ulasan untuk" : "Review for"}: <span class="text-ink-700">${product}</span></p>
      </div>`;
  }).join("");

  const showMoreBtn = D.reviews.length > 6 ? `
    <div class="sm:col-span-2 flex justify-center pt-2">
      <button id="showMoreBtn" class="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-xl border border-ink-300 text-ink-700 bg-white hover:border-gold-400 hover:text-gold-600 hover:bg-gold-50/30 transition-all duration-200 cursor-pointer shadow-sm">
        <span>${showAllReviews ? t("testi.showLess") : `${t("testi.showMore")} (${D.reviews.length})`}</span>
        <svg class="w-4 h-4 transition-transform duration-200 ${showAllReviews ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
      </button>
    </div>` : "";

  // Chat snippets
  const chatColors = {
    buyer:  "bg-white border border-ink-200 text-ink-800 rounded-2xl rounded-tl-sm self-start",
    seller: "bg-gold-500 text-white rounded-2xl rounded-tr-sm self-end"
  };
  const chats = D.chats.map(c => `
    <div class="bg-white border border-ink-200 rounded-2xl p-6">
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 rounded-full bg-gold-100 text-gold-700 text-xs font-bold flex items-center justify-center">${c.buyer.charAt(0).toUpperCase()}</span>
          <p class="font-semibold text-ink-900 text-sm">${c.buyer}</p>
          <span class="text-[10px] font-semibold text-ink-400">${c.flag}</span>
        </div>
        <span class="text-xs text-ink-400">${c.date}</span>
      </div>
      <div class="flex flex-col gap-2 max-w-[85%]">
        ${c.messages.map(m => `
          <div class="${chatColors[m.from]} px-4 py-2.5 text-sm leading-relaxed">${m.text}</div>
        `).join("")}
      </div>
    </div>`).join("");

  const ratingBlock = `
    <div class="md:col-span-1 bg-ink-50 border border-ink-200 rounded-2xl p-6 flex flex-col items-center justify-center">
      <svg class="w-10 h-10 text-amber-400 mb-2" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.539 1.118l-3.366-2.445a1 1 0 00-1.176 0l-3.367 2.445c-.783.57-1.838-.196-1.538-1.118l1.286-3.957a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z"/></svg>
      <p class="font-heading text-4xl font-bold text-ink-900">${R.score} <span class="text-ink-400 text-2xl">/ ${R.max}</span></p>
      <p class="text-sm text-ink-500 mt-1">${R.count} ${lang === "id" ? "ulasan" : "reviews"}</p>
      <div class="w-full max-w-[220px] mt-5 space-y-1.5">${rows}</div>
    </div>`;
  const reviewsBlock = `<div class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">${reviews}${showMoreBtn}</div>`;
  const chatsBlock = `<div class="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">${chats}</div>`;

  if (activeTestiTab === "reviews") {
    grid.innerHTML = ratingBlock + reviewsBlock;
  } else if (activeTestiTab === "chats") {
    grid.innerHTML = chatsBlock;
  } else {
    grid.innerHTML = ratingBlock + reviewsBlock + chatsBlock;
  }

  // Show more button handler
  const smBtn = document.getElementById("showMoreBtn");
  if (smBtn) {
    smBtn.onclick = () => {
      showAllReviews = !showAllReviews;
      renderTestimonials();
    };
  }

  // Tab click handlers
  document.querySelectorAll("#testiTabs .testi-tab").forEach(btn => {
    btn.onclick = () => {
      activeTestiTab = btn.getAttribute("data-tab");
      document.querySelectorAll("#testiTabs .testi-tab").forEach(b => {
        b.className = "testi-tab text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer bg-white text-ink-600 border border-ink-200 hover:border-gold-400";
      });
      btn.className = "testi-tab active text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer bg-ink-900 text-white shadow-sm";
      renderTestimonials();
    };
  });
}

// ─── Guarantees ──────────────────────────────────────────────────────────────
function renderGuarantees() {
  const grid = document.getElementById("guaranteeGrid");
  const icons = [
    `<svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    `<svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/></svg>`,
    `<svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>`,
    `<svg class="w-8 h-8 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"/></svg>`
  ];
  grid.innerHTML = D.guarantees.map((g, i) => `
    <div class="bg-white border border-ink-200 rounded-2xl p-8">
      <div class="mb-5">${icons[i]}</div>
      <h3 class="font-heading text-xl font-semibold text-ink-900 mb-3">${lang === "id" ? g.title : g.enTitle}</h3>
      <p class="text-ink-500 text-sm leading-relaxed">${lang === "id" ? g.desc : g.enDesc}</p>
    </div>`).join("");
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
function renderFAQ() {
  const list = document.getElementById("faqList");
  list.innerHTML = D.faq.map((f, i) => `
    <details class="border border-ink-200 rounded-2xl bg-white overflow-hidden" ${i === 0 ? "open" : ""}>
      <summary class="flex items-center justify-between px-6 py-5 cursor-pointer font-semibold text-ink-900 hover:text-gold-600 transition-colors duration-200 select-none">
        <span>${lang === "id" ? f.q : f.enQ}</span>
        <svg class="w-5 h-5 text-ink-400 transition-transform duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </summary>
      <p class="px-6 pb-6 text-ink-500 text-sm leading-relaxed border-t border-ink-100 pt-4">${lang === "id" ? f.a : f.enA}</p>
    </details>`).join("");
}

// ─── Contact ─────────────────────────────────────────────────────────────────
function renderContact() {
  const wrap = document.getElementById("contactLinks");
  const contacts = [];

  if (D.links.itemkuStore) contacts.push({
    label: "Itemku Store",
    href: D.links.itemkuStore,
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>`,
    primary: true
  });
  if (D.links.whatsapp) contacts.push({
    label: "WhatsApp",
    href: "https://wa.me/" + D.links.whatsapp.replace(/\D/g, ""),
    icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
    isWa: true
  });
  if (D.links.discord) contacts.push({
    label: "Discord",
    href: "https://discord.com/users/" + D.links.discord,
    icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z"/></svg>`
  });
  if (D.links.instagram) contacts.push({
    label: "Instagram",
    href: "https://instagram.com/" + D.links.instagram,
    icon: `<svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
  });
  if (D.links.email) contacts.push({
    label: D.links.email,
    href: "mailto:" + D.links.email,
    icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`
  });

  // Fallback if no contacts configured yet
  if (contacts.length === 0) {
    wrap.innerHTML = `<p class="text-ink-400 text-sm">[Contact links will appear here once configured in data.js]</p>`;
    return;
  }

  wrap.innerHTML = contacts.map(c => c.primary
    ? `<a href="${c.href}" target="_blank" rel="noopener" class="inline-flex items-center gap-3 bg-gold-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-gold-600 transition-colors duration-200 cursor-pointer">${c.icon} ${c.label}</a>`
    : c.isWa
    ? `<a href="${c.href}" target="_blank" rel="noopener" class="inline-flex items-center gap-3 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#1da851] transition-colors duration-200 cursor-pointer">${c.icon} ${c.label}</a>`
    : `<a href="${c.href}" target="_blank" rel="noopener" class="inline-flex items-center gap-3 border border-ink-300 text-ink-700 font-medium px-6 py-3 rounded-xl hover:border-ink-900 hover:bg-ink-900 hover:text-white transition-colors duration-200 cursor-pointer">${c.icon} ${c.label}</a>`
  ).join("");
}

// ─── Render all sections ──────────────────────────────────────────────────────
function renderSections() {
  renderCatalog();
  renderTestimonials();
  renderGuarantees();
  renderFAQ();
  renderContact();
  applyLang();
}

// ─── Init ─────────────────────────────────────────────────────────────────────
renderSections();

// ─── Navbar shadow on scroll ──────────────────────────────────────────────────
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.style.boxShadow = window.scrollY > 30
    ? "0 4px 24px -4px rgba(0,0,0,0.10)"
    : "";
}, { passive: true });

// ─── Scroll fade-up animations ────────────────────────────────────────────────
const fadeEls = document.querySelectorAll("header, section, footer");
fadeEls.forEach(el => { el.style.opacity = "0"; el.style.transform = "translateY(24px)"; el.style.transition = "opacity 0.6s ease, transform 0.6s ease"; });

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

fadeEls.forEach(el => observer.observe(el));


