// Perakit situs statis: node build.mjs  ->  index.html
import fs from 'node:fs';
import { SITE, ICE_CREAM_PRICE, AYAM_PRICE, iceCream, menuBaru, ayam, nasiMie, snack, rotiCanai, favorit, barGroups, lainnya } from './data.mjs';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const num = (n) => Math.round(n).toLocaleString('id-ID');
const rp = (n) => `Rp${num(n)}`;
const price = (n, from) => `<span class="price">${from ? '<em>mulai</em>' : ''}<small>Rp</small>${num(n)}</span>`;
const img = (name, alt = '', extra = '') => `<img src="menu-layar/${name}.webp" alt="${esc(alt)}" width="420" height="560" loading="lazy" decoding="async"${extra}>`;

function dish(d, { isNew = false, featureOk = true } = {}) {
  const feature = featureOk && d.feature;
  const tiers = d.tiers ? `<ul class="tiers">${d.tiers.map(([l, p]) => `<li><span>${esc(l)}</span><b>${rp(p)}</b></li>`).join('')}</ul>` : '';
  return `<article class="dish rv${feature ? ' feature' : ''}">
  <div class="ph">${isNew ? '<span class="tag">Baru</span>' : ''}${img(d.photo, d.name)}</div>
  <div class="bd"><h3>${esc(d.name)}</h3>${d.desc ? `<p>${esc(d.desc)}</p>` : ''}${tiers}</div>
  <div class="ft"><i></i>${price(d.price, Boolean(d.tiers))}</div>
</article>`;
}

function head(no, kick, title, lead) {
  return `<header class="sec-head rv"><span class="no" aria-hidden="true">${no}</span><div><p class="kick">${esc(kick)}</p><h2>${esc(title)}</h2></div><p class="lead">${esc(lead)}</p></header>`;
}

function board(g, withPhotos = true) {
  const photos = withPhotos && g.photos?.length ? `<div class="meds" aria-hidden="true">${g.photos.map((p) => `<span>${img(p)}</span>`).join('')}</div>` : '';
  const lines = g.lines.map(([n, p, note]) => `<li><span>${esc(n)}${note ? `<small>${esc(note)}</small>` : ''}</span><i></i><b>${rp(p)}</b></li>`).join('');
  return `<div class="board rv"><h3>${esc(g.title)}</h3>${photos}<ul class="lines">${lines}</ul></div>`;
}

const navItems = [['es-krim', 'Es Krim'], ['menu-baru', 'Menu Baru'], ['ayam', 'Ayam'], ['nasi-mie', 'Nasi & Mie'], ['snack', 'Snack'], ['roti-canai', 'Roti Canai'], ['minuman', 'Minuman'], ['lainnya', 'Lainnya']];
const marquee = navItems.map(([, t]) => `<span>${esc(t)}</span>`).join('<i>◆</i>');

const html = `<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Menu Yangsio | ${esc(SITE.name)} ${esc(SITE.tagline)}</title>
<meta name="description" content="Menu bergambar ${esc(SITE.name)}, Surabaya.">
<meta name="robots" content="noindex,nofollow">
<meta name="theme-color" content="#120B0B">
<link rel="icon" href="menu-layar/logo-gold.webp" type="image/webp">
<link rel="preload" href="fonts/playfair-display-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="styles.css">
<script>document.documentElement.classList.add('js')</script>
</head>
<body>
<header class="nav" id="top">
  <a class="brand" href="#top" aria-label="${esc(SITE.name)}"><img src="menu-layar/logo-ivory.webp" alt="${esc(SITE.name)}" width="183" height="95"></a>
  <nav aria-label="Bagian menu">${navItems.map(([id, t]) => `<a href="#${id}">${esc(t)}</a>`).join('')}</nav>
  <button type="button" class="tvbtn" id="ym-start">Mode layar TV</button>
</header>

<main>
<section class="hero" data-slide>
  <div class="hero-in">
    <div class="hero-txt">
      <p class="kick gold"><span class="rule"></span>${esc(SITE.tagline)} · Surabaya</p>
      <h1><span class="h1-sm">Menu</span>Yangsio</h1>
      <p class="hero-p">Kopi, mie, nasi, dan es krim, disajikan hangat untuk kongkow tanpa terburu-buru.</p>
      <div class="hero-cta"><a class="btn" href="#es-krim">Lihat menu</a><span class="chip">Es krim semua varian ${rp(ICE_CREAM_PRICE)}</span><span class="chip">Ayam nasi ${rp(AYAM_PRICE)}</span></div>
    </div>
    <div class="hero-art" aria-hidden="true">
      <div class="plate p1"><img src="menu-layar/ayam-koloke.webp" alt="" width="420" height="420"></div>
      <div class="plate p2"><img src="menu-layar/matcha-latte.webp" alt="" width="420" height="560"></div>
      <div class="plate p3"><img src="menu-layar/roti-canai-meses.webp" alt="" width="420" height="420"></div>
    </div>
  </div>
  <a class="scroll-cue" href="#es-krim" aria-label="Turun ke menu"><span></span></a>
</section>
<div class="marq" aria-hidden="true"><div>${marquee}<i>◆</i>${marquee}<i>◆</i>${marquee}<i>◆</i>${marquee}</div></div>

<section class="sec" id="es-krim" data-slide>
  <div class="wrap">
    ${head('01', 'Dingin dan manis', 'Ice Cream', 'Es krim lembut dengan topping pilihan. Enam varian, satu harga.')}
    <p class="banner rv">All variants only <b>${rp(ICE_CREAM_PRICE)}</b></p>
    <div class="posters">${iceCream.map((d) => `<figure class="poster rv"><div class="frame">${img(d.photo, d.name)}</div><figcaption><h3>${esc(d.name)}</h3><p>${esc(d.desc)}</p></figcaption></figure>`).join('')}</div>
  </div>
</section>

<section class="sec alt" id="menu-baru" data-slide>
  <div class="wrap">
    ${head('02', 'Baru di Yangsio', 'Menu Baru', 'Mie dan nasi goreng terbaru, diracik dengan bumbu khas kedai.')}
    <div class="dishes">${menuBaru.map((d) => dish(d, { isNew: true })).join('')}</div>
  </div>
</section>

<section class="sec" id="ayam" data-slide>
  <div class="wrap">
    ${head('03', 'Nasi dan ayam', 'Ayam', 'Empat racikan ayam, semuanya disajikan dengan nasi putih.')}
    <p class="banner rv">Semua pilihan <b>${rp(AYAM_PRICE)}</b></p>
    <div class="dishes four">${ayam.map((d) => dish(d, { featureOk: false })).join('')}</div>
  </div>
</section>

<section class="sec alt" id="nasi-mie" data-slide>
  <div class="wrap">
    ${head('04', 'Makanan utama', 'Nasi & Mie', 'Gultik, nasi goreng, dan mie berbumbu rempah yang jadi favorit pelanggan.')}
    <div class="dishes">${nasiMie.map((d) => dish(d)).join('')}</div>
  </div>
</section>

<section class="sec" id="snack" data-slide>
  <div class="wrap">
    ${head('05', 'Teman ngopi', 'Snack & Add On', 'Camilan hangat dan pelengkap untuk kongkow bareng.')}
    <div class="dishes">${snack.map((d) => dish(d)).join('')}</div>
  </div>
</section>

<section class="sec alt" id="roti-canai" data-slide>
  <div class="wrap">
    ${head('06', 'Gurih manis', 'Roti Canai', 'Roti canai renyah berlapis dengan enam pilihan rasa.')}
    <div class="dishes">${rotiCanai.map((d) => dish(d)).join('')}</div>
  </div>
</section>

<section class="sec" id="minuman" data-slide>
  <div class="wrap">
    ${head('07', 'Our favorite drink', 'Minuman Favorit', 'Yang paling sering dipesan di Kedai Yangsio.')}
    <div class="favs">${favorit.map((d) => `<figure class="fav rv"><div class="disc">${img(d.photo, d.name)}</div><figcaption><h3>${esc(d.name)}</h3>${price(d.price)}</figcaption></figure>`).join('')}</div>
  </div>
</section>

${[[barGroups[0], barGroups[1]], [barGroups[2], barGroups[3]], [barGroups[4], barGroups[5]]].map((pair, i) => `<section class="sec bar${i === 1 ? ' alt' : ''}" ${i === 0 ? 'id="bar"' : ''} data-slide>
  <div class="wrap">${i === 0 ? '<p class="kick gold rv"><span class="rule"></span>Bar menu</p>' : ''}<div class="boards">${pair.map((g) => board(g)).join('')}</div></div>
</section>`).join('\n')}

<section class="sec alt" id="lainnya" data-slide>
  <div class="wrap">
    ${head('08', 'Di kedai', 'Lainnya', 'Rokok eceran dan sewa PlayStation.')}
    <div class="boards">${lainnya.map((g) => board(g, false)).join('')}</div>
  </div>
</section>
</main>

<footer class="foot">
  <div class="wrap foot-in">
    <img src="menu-layar/logo-ivory.webp" alt="${esc(SITE.name)}" width="183" height="95">
    <div><h4>Alamat</h4><p>${esc(SITE.address)}</p></div>
    <div><h4>Pembayaran</h4><p>${esc(SITE.payment)}</p></div>
    <div><h4>Catatan</h4><p>Harga dalam Rupiah dan dapat berubah sewaktu-waktu. Harga di kasir saat memesan adalah harga yang berlaku.</p></div>
  </div>
</footer>

<div id="tvbar" aria-hidden="true"><i></i></div>
<button type="button" id="ym-exit">Keluar mode TV</button>
<script>window.YM_TV_SECONDS=${SITE.tvSeconds};</script>
<script src="app.js" defer></script>
</body>
</html>
`;
fs.writeFileSync(new URL('./index.html', import.meta.url), html);
console.log('index.html', Math.round(html.length / 1024), 'KB');
