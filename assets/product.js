// FFdaffastore — dynamic product page renderer
(function () {
  "use strict";

  var D = window.SITE_CONFIG || {};
  var ROSTERS = window.ROSTERS || {};
  var catalog = D.catalog || [];

  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ?id=HSR-02  →  account; fallback to first
  var wanted = new URLSearchParams(location.search).get("id");
  var acc = catalog.filter(function (a) { return a.id === wanted; })[0] || catalog[0];

  if (!acc) {
    document.body.innerHTML = '<div style="padding:60px;text-align:center;font-family:sans-serif">Akun tidak ditemukan.</div>';
    return;
  }

  var roster = ROSTERS[acc.id] || { featured: [], others: [], cones: [] };
  var available = acc.status !== "Reserved";

  document.title = acc.id + " — " + (D.brand && D.brand.name ? D.brand.name : "FFdaffastore");

  /* ── header ── */
  $("dRibbon").textContent = acc.id + " • " + String(acc.server).toUpperCase();
  $("dCrumb").textContent = acc.id;
  $("dCode").textContent = acc.id;
  $("dTitle").textContent = acc.title;

  var badge = $("dBadge");
  badge.textContent = available ? "Tersedia" : "Tereservasi";
  if (!available) {
    badge.style.background = "#FEF3C7";
    badge.style.color = "#854D0E";
    badge.style.borderColor = "#FDE68A";
  }

  /* ── stat cards (mirror of the catalog modal) ── */
  $("dStats").innerHTML =
    stat("Level Trailblaze", "TL " + acc.trailblazeLevel + " • " + acc.server, false) +
    stat("Harga", acc.price, true) +
    stat("Karakter Limited", acc.limitedChars + " Characters", false) +
    stat("Lightcone Signature", acc.signWeapons + " Lightcone", false);

  function stat(label, value, gold) {
    return '<div class="stat"><div class="l">' + esc(label) + '</div>' +
           '<div class="v' + (gold ? " gold" : "") + '">' + esc(value) + "</div></div>";
  }

  /* ── highlight pills + description ── */
  $("dPills").innerHTML = (acc.highlights || []).map(function (h) {
    return '<span class="pill">✨ ' + esc(h) + "</span>";
  }).join("");
  $("dDesc").textContent = acc.desc || "";

  /* ── spec table ── */
  var uidHl = (acc.highlights || []).filter(function (h) { return /uid/i.test(h); })[0];
  $("dSpecs").innerHTML =
    row("Server", esc(acc.server)) +
    row("Trailblaze Level", esc(acc.trailblazeLevel)) +
    row("Limited 5★", acc.limitedChars + " karakter") +
    row("Signature Lightcone", acc.signWeapons + " (B5 limited)") +
    row("UID", esc(uidHl ? uidHl.replace(/^UID\s*/i, "") : "—")) +
    row("Status Binding", '<span class="tag">bisa ganti gmail pribadi</span>') +
    row("Akses", "Akun Google + seluruh invoice");

  function row(k, v) {
    return '<div class="spec-row"><span class="k">' + esc(k) +
           '</span><span class="v">' + v + "</span></div>";
  }

  /* ── character grids ── */
  function elIcon(el) {
    if (!el) return "";
    return '<span class="el"><img src="assets/img/el/' + esc(el) + '.webp" alt="' + esc(el) +
           '" loading="lazy" onerror="this.parentNode.remove()"></span>';
  }

  function charCard(c, tag, feat) {
    var por = '<img class="por" src="assets/img/char/p_' + c.id + '.webp" alt="' + esc(c.name) +
              '" loading="lazy" onerror="this.remove()">';
    var tg = tag ? '<span class="tg">' + esc(tag) + "</span>" : "";
    return '<div class="cc' + (feat ? " feat" : "") + '">' + elIcon(c.el) + tg + por +
           '<div class="nm">' + esc(c.name) + "</div></div>";
  }

  $("dFeat").innerHTML = roster.featured.map(function (c) {
    return charCard(c, c.tag, true);
  }).join("");
  $("dOther").innerHTML = roster.others.map(function (c) {
    return charCard(c, null, false);
  }).join("");

  /* ── signature lightcones ── */
  $("dCones").innerHTML = roster.cones.map(function (c) {
    return '<div class="cone"><span class="c5">5★</span>' +
           '<img class="cp" src="assets/img/lc/p_' + c.id + '.webp" alt="' + esc(c.name) +
           '" loading="lazy" onerror="this.remove()">' +
           '<div class="cb"><div class="cn">' + esc(c.name) + "</div>" +
           '<div class="co">Signature &middot; ' + esc(c.owner) + "</div></div></div>";
  }).join("");

  /* ── order card ── */
  $("dPrice").textContent = acc.price;
  $("dMeta").innerHTML =
    meta("Kode", esc(acc.id)) +
    meta("Server", esc(acc.server)) +
    meta("Status", available ? "Tersedia" : "Tereservasi", available ? "#047857" : "#B45309") +
    meta("Proses", "&lt; 10 menit");

  function meta(k, v, color) {
    return '<div class="ometa"><span class="k">' + esc(k) + '</span><span class="v"' +
           (color ? ' style="color:' + color + '"' : "") + ">" + v + "</span></div>";
  }

  var wa = D.links && D.links.whatsapp ? D.links.whatsapp.replace(/\D/g, "") : "";
  var msg = "Halo min, aku mau nanya akun " + acc.id + " (" + acc.price + ") masih ready?";
  $("dWA").href = wa ? "https://wa.me/" + wa + "?text=" + encodeURIComponent(msg) : "index.html#contact";
  $("dIK").href = acc.itemkuUrl || (D.links && D.links.itemkuStore) || "index.html#catalog";

  /* ── sibling accounts nav (if the section exists) ── */
  var sib = $("dSiblings");
  if (sib) {
    sib.innerHTML = catalog.map(function (a) {
      return '<a class="sib' + (a.id === acc.id ? " on" : "") + '" href="product.html?id=' +
             esc(a.id) + '"><b>' + esc(a.id) + "</b><span>" + esc(a.price) + "</span></a>";
    }).join("");
  }
})();
