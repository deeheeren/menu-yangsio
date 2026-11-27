// Data menu Kedai Yangsio (situs coba-coba, terpisah dari yang terdaftar di Midtrans dan Duitku).
// Nama, harga, dan foto dari PDF menu Owner (27 Nov 2026). Deskripsi dengan tanda "~" adalah draf penulisan ulang: Owner boleh mengoreksi.
// Harga dalam rupiah penuh. Ubah di sini lalu jalankan: node build.mjs

export const SITE = {
  name: 'Kedai Yangsio',
  tagline: 'Kopi & Kongkow',
  address: 'Jl. Raya Medokan Sawah, Gn. Anyar, Surabaya',
  payment: 'Tunai dan QRIS, dibayar di kedai saat memesan.',
  tvSeconds: 12,
};

export const ICE_CREAM_PRICE = 10000;
export const AYAM_PRICE = 20000;

export const iceCream = [
  { name: 'Pistachio Kunafa', photo: 'es-krim-pistachio-kunafa', desc: 'Es krim lembut dengan saus pistachio dan remah kunafa renyah.' },
  { name: 'Strawberry Confetti', photo: 'es-krim-strawberry-confetti', desc: 'Es krim lembut, saus stroberi, dan taburan warna-warni.' },
  { name: 'Lotus Dream', photo: 'es-krim-lotus-dream', desc: 'Es krim lembut dengan remah biskuit Lotus yang karamel.' },
  { name: 'Milo Delice', photo: 'es-krim-milo-delice', desc: 'Es krim lembut dengan saus cokelat Milo dan remah renyah.' },
  { name: 'Icepresso', photo: 'es-krim-icepresso', desc: 'Es krim lembut dengan espresso dan saus karamel kopi.' },
  { name: 'McFlurreo', photo: 'es-krim-mcflurreo', desc: 'Es krim lembut dengan remah Oreo yang melimpah.' },
];

export const menuBaru = [
  { name: 'Mie Yangsio', photo: 'mie-yangsio', price: 17000, desc: 'Mie goreng dengan saus merah khas Yangsio, dimahkotai pangsit goreng yang renyah.', feature: true },
  { name: 'Mie Lada Hitam', photo: 'mie-lada-hitam', price: 17000, desc: 'Mie goreng berbumbu lada hitam yang wangi, dengan pangsit goreng.' },
  { name: 'Mie Ayam', photo: 'mie-ayam', price: 15000, desc: 'Mie hangat dengan topping ayam, sayur segar, dan pangsit goreng.' },
  { name: 'Nasi Goreng Jawa', photo: 'nasi-goreng-jawa', price: 17000, desc: 'Nasi goreng ala Jawa dengan telur dan kerupuk.' },
  { name: 'Nasi Goreng Yangsio', photo: 'nasi-goreng-yangsio', price: 17000, desc: 'Racikan nasi goreng khas Yangsio dengan telur mata sapi dan kerupuk.' },
];

export const ayam = [
  { name: 'Ayam Lada', photo: 'ayam-lada', price: AYAM_PRICE, desc: 'Ayam tumis lada hitam dengan paprika, bersama nasi putih.' },
  { name: 'Ayam Cabe Garam', photo: 'ayam-cabe-garam', price: AYAM_PRICE, desc: 'Ayam goreng renyah berbalut cabai garam, bersama nasi putih.' },
  { name: 'Ayam Koloke', photo: 'ayam-koloke', price: AYAM_PRICE, desc: 'Ayam saus asam manis dengan paprika, bersama nasi putih.' },
  { name: 'Ayam Telur Asin', photo: 'ayam-telur-asin', price: AYAM_PRICE, desc: 'Ayam goreng berbalut saus telur asin yang gurih, bersama nasi putih.' },
];

export const nasiMie = [
  { name: 'Gultik', photo: 'gultik', price: 17000, desc: 'Kuah gurih legit, daging empuk melintir. Resep legendaris yang selalu ngangenin di setiap suapan.', feature: true },
  { name: 'Ayam Geprek', photo: 'ayam-geprek', price: 15000, desc: 'Ayam goreng crispy dengan sambal geprek pedas yang gurih dan nikmat.' },
  { name: 'Nasi Goreng Seafood', photo: 'nasi-goreng-seafood', price: 17000, desc: 'Nasi goreng gurih dengan isian seafood pilihan, dimasak dengan bumbu khas yang kaya rasa.' },
  { name: 'Nasi Goreng Ayam Spesial', photo: 'nasi-goreng-ayam-spesial', price: 17000, desc: 'Nasi goreng gurih dengan potongan ayam dan bumbu spesial yang dimasak hingga harum dan kaya rasa.' },
  { name: 'Indomie Original', photo: 'indomie-original', price: 13000, desc: 'Indomie dengan cita rasa klasik favorit semua orang, disajikan lengkap dengan topping telur.' },
  { name: 'Mie Pakistan', photo: 'mie-alok', price: 15000, desc: 'Mie dengan kuah rempah khas yang gurih, sedikit pedas, dan kaya rasa.' },
  { name: 'Mie Alok', photo: 'mie-alok', price: 15000, desc: 'Mie dengan bumbu khas yang gurih dan nikmat, disajikan hangat dengan cita rasa yang bikin nagih.' },
  {
    name: 'Mie Banglades', photo: 'mie-banglades', price: 15000,
    desc: 'Mie dengan kuah kental berbumbu rempah, gurih, pedas, dan punya rasa yang kuat.',
    tiers: [
      ['Level 0-2', 15000], ['Level 3-4', 16000], ['Level 5', 17000],
      ['Jumbo level 0-2', 23000], ['Jumbo level 3-4', 24000], ['Jumbo level 5', 25000],
    ],
  },
];

export const snack = [
  { name: 'Mix Plater', photo: 'mix-plater', price: 25000, desc: 'Aneka camilan goreng dalam satu piring, pas untuk berbagi.', feature: true },
  { name: 'Martabak Mie', photo: 'martabak-mie', price: 15000, desc: 'Martabak isi mi yang gurih, dengan saus sambal.' },
  { name: 'Pisang Bom', photo: 'pisang-bom', price: 15000, desc: 'Pisang goreng bulat berbalut tepung renyah.' },
  { name: 'Martabak Telur Aceh', photo: 'martabak-telur-aceh', price: 12000, desc: 'Martabak telur gaya Aceh yang gurih.' },
  { name: 'Kentang Goreng', photo: 'kentang-goreng', price: 12000, desc: 'Kentang goreng renyah dengan saus.' },
  { name: 'Tahu Crispy', photo: 'tahu-crispy', price: 12000, desc: 'Tahu goreng tepung yang renyah di luar, lembut di dalam.' },
  { name: 'Jamur Crispy', photo: 'jamur-crispy', price: 12000, desc: 'Jamur goreng tepung yang renyah dan gurih.' },
  { name: 'Puding Telur', photo: 'puding-telur', price: 6000, desc: 'Puding telur yang lembut, penutup yang manis.' },
  { name: 'Telur Mata Sapi / Telur Dadar', photo: 'telur-mata-sapi', price: 5000, desc: 'Tambahan pelengkap nasi dan mie.' },
];

export const rotiCanai = [
  { name: 'Roti Canai Meses', photo: 'roti-canai-meses', price: 13000, desc: 'Roti canai renyah berlapis dengan cokelat dan taburan meses.', feature: true },
  { name: 'Roti Canai Original', photo: 'roti-canai-original', price: 10000, desc: 'Roti canai klasik, renyah berlapis.' },
  { name: 'Roti Canai Gula', photo: 'roti-canai-gula', price: 11000, desc: 'Roti canai dengan taburan gula halus.' },
  { name: 'Roti Canai SKM', photo: 'roti-canai-skm', price: 13000, desc: 'Roti canai dengan siraman susu kental manis.' },
  { name: 'Roti Canai Cokelat Keju', photo: 'roti-canai-cokelat-keju', price: 15000, desc: 'Roti canai dengan saus cokelat dan parutan keju.' },
  { name: 'Roti Canai Milo', photo: 'roti-canai-milo', price: 15000, desc: 'Roti canai dengan saus cokelat dan taburan Milo.' },
];

export const favorit = [
  { name: 'Americano', photo: 'americano', price: 10000 },
  { name: 'Lychee Tea', photo: 'lychee-tea', price: 9000 },
  { name: 'Teh Tarik', photo: 'teh-tarik', price: 12000 },
  { name: 'Matcha Latte', photo: 'matcha-latte', price: 15000 },
  { name: 'Iced Milo', photo: 'iced-milo', price: 9000 },
];

export const barGroups = [
  {
    id: 'coffee', title: 'Coffee Based', photos: ['kopi-1', 'kopi-2', 'kopi-3'],
    lines: [
      ['Kopi Hitam Racikan', 6000], ['Americano', 10000, '1 shot'], ['Aren Coffee Latte', 15000], ['Coffee Latte', 15000],
      ['Cappuccino', 15000], ['Hazelnut Coffee Latte', 15000], ['Mochaccino', 15000], ['Tiramisu Coffee Latte', 15000],
      ['Vanila Coffee Latte', 15000], ['Rum Coffee Latte', 15000],
    ],
  },
  {
    id: 'milk', title: 'Milk Based', photos: ['susu-1', 'susu-2', 'susu-3', 'susu-4'],
    lines: [
      ['Choco Latte', 15000], ['Matcha Latte', 15000, 'dengan crumbs Rp17.000'], ['Oreo Choco Latte', 16000],
      ['Red Velvet Latte', 15000, 'dengan crumbs Rp17.000'], ['Red Velvet Vanila Latte', 15000], ['Taro Latte', 15000],
    ],
  },
  {
    id: 'soda', title: 'Soda Based', photos: ['soda-1', 'soda-2', 'soda-3', 'soda-4', 'soda-5'],
    lines: [
      ['Hazelnut Fizz', 12000], ['Lychee Sparks', 12000], ['Strawberry Sparks', 12000], ['Strawberry Fizz', 12000],
      ['Vanila Sparks', 12000], ['Yakult Soda', 12000], ['Soda Gembira', 13000], ['Mango Yakult Fizz', 14000],
    ],
  },
  {
    id: 'tea', title: 'Tea & Friends', photos: ['tea-1', 'lychee-tea', 'teh-tarik'],
    lines: [
      ['Iced Tea', 7000], ['Hazelnut Tea', 9000], ['Lemon Tea', 9000], ['Lychee Tea', 9000], ['Manggo Tea', 9000],
      ['Orange Tea', 9000], ['Strawberry Tea', 9000], ['Tiramisu Tea', 9000], ['Vanila Tea', 9000], ['Yakult Tea', 9000],
      ['Rum Tea', 9000], ['Teh Tarik', 12000],
    ],
  },
  {
    id: 'lotus', title: 'Latte Lotus', photos: ['lotus-choco', 'lotus-taro', 'lotus-white'],
    lines: [['Lotus Choco Latte', 15000], ['Lotus Taro', 15000], ['Lotus White Rum', 17000]],
  },
  {
    id: 'lain', title: 'Other Drink', photos: ['coffee-beer', 'minuman-lain'],
    lines: [
      ['Air Mineral', 5000], ['Coffe Beer', 14000], ['Goodday Friz', 9000], ['Iced Milo', 9000],
      ['Bengbeng Drink', 9000], ['Chocolatos Drink', 9000], ['Joshua', 9000],
    ],
  },
];

export const lainnya = [
  {
    id: 'rokok', title: 'Rokok Eceran',
    lines: [
      ['76 Apel', 2000, 'per batang'], ['Apel Royal', 2000, 'per batang'], ['Black Matcha', 2000, 'per batang'],
      ['Chief', 2000, 'per batang'], ['Djarum Kretek', 2000, 'per batang'], ['Ultimo', 2000, 'per batang'],
      ['Djarum Filter', 3000, 'per batang'], ['La Ice', 3000, 'per batang'], ['Surya', 3000, 'per batang'],
    ],
  },
  {
    id: 'playstation', title: 'PlayStation (Playbox)',
    lines: [['1 jam', 10000], ['2 jam', 19000], ['3 jam', 28000], ['4 jam', 30000]],
  },
];
