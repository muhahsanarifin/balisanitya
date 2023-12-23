import * as Assets from "../utils/assets";
import { SiInstagram, SiFacebook } from "react-icons/si";

export const Header = {
  alt: "Balisanitya",
  image: Assets.Image.BSS,
  lists: [
    { id: 1, title: "Services", path: ["/services", "/services/admin"] },
    { id: 2, title: "News", path: ["/news", "/news/admin"] },
    { id: 3, title: "About", path: ["/about", "/about/admin"] },
  ],
};

export const Footer = {
  componyGroups: [
    {
      id: 1,
      alt: "Lumbung Deso",
      image: Assets.Image.lumbungDeso,
      website: "https://lumbungdeso.id/",
    },
    {
      id: 2,
      alt: "Ooh Miracle",
      image: Assets.Image.oohmiracle,
      website: "https://oohmiracle.au/",
    },
    {
      id: 3,
      alt: "Oohnz",
      image: Assets.Image.oohnz,
      website: "https://oohglobal.nz/",
    },
    {
      id: 4,
      alt: "apj",
      image: Assets.Image.apj,
      website: "",
    },
    {
      id: 5,
      alt: "Oohpl",
      image: Assets.Image.oohpl,
      website: "https://oohkopitu.pl/",
    },
    {
      id: 6,
      alt: "Oohid",
      image: Assets.Image.ohh,
      website: "https://ooh.co.id/",
    },
    {
      id: 7,
      alt: "Duta Fajar",
      image: Assets.Image.dutafajar,
      website: "",
    },
  ],
  mediaSocial: [
    { id: 1, title: "facebook", icon: <SiFacebook />, url: "#" },
    { id: 2, title: "instagram", icon: <SiInstagram />, url: "#" },
  ],
};

export const Introduction = [
  {
    title: "About Us",
    description: [
      "Kami adalah Lembaga Pelatihan Kerja (LPK) dan Lembaga Penyelenggara Pemagangan Luar Negeri Atau Sending Organisation (SO) , Kami berdiri pada tahun 2019 dan telah memiliki ijin resmi oleh instansi terkait yaitu Dinas Tenaga Kerja Kota dengan Nomor Ijin: AHU-0002336.AH.01.04 Tahun 2020 503-39/003/LPKS/DPMTSP/2020, 563/601/VIII/20202/164/HK.13/VII/2021 KEMNAKER. Pusat Lembaga Kami berlokasi di kota Buleleng yang mana kota tersebut adalah Pendidikan lebih tepatnya berlokasi di Jalan Raya Anturan Perum Mustika Laksmi Gang 1 No 1 Buleleng Bali . Kami memiliki motivasi mendirikan Yayasan Bali Sanitya Sejahtera ini adalah untuk menganggat dan membantu masyarakat kurang mampu yang ingin memperbaiki perekonomian keluarga mereka dan yang ingin berkiprah / berkarir secara internasional . Sehingga dengan adanya Lembaga ini kami menyediakan pelatihan singkat dengan biaya yang sangat terjangkau sehingga seluruh kalangan masyarakat khususnya menengah kebawah mampu mengikuti pelatihan sehingga mereka dapat merubah nasib dengan mengikuti program magang / training/ kerja keluar negeri . Beberapa program yang kami buka adalah Pelatihan Bahasa Inggris , Pelatihan Bahasa Jepang , Pelatihan Bahasa Korea , Pelatihan Bahasa Mandarin , dan Pelatihan Spa . Semua program yang kami buka adalah program yang telah kami rancang dengan langsung menyediakan lapangan kerja baik didalam maupun diluar negeri baik untuk magang/training atau bekerja dengan adanya banyak persaingan di dunia kerja maryarakat membutuhkan skill tambahan untuk dapat bersaing yaitu bekal Bahasa karena Bahasa adalah media pertama dalam komunikasi kita dengan seluruh maryarakat dunia dari semua mancanegara . Kami juga menyediakan beberapa layanan kepada seluruh masyarakat yang telah selesai mengikuti pelatihan bagi yang ingin melanjutkan sekolah diluar negeri kami menyediakan beberapa rekomendasi sekolah di beberapa negara dan tidak hanya kuliah mereka dapat bekerja paruh waktu sehingga mereka dapat berpenghasilan sendiri dan mampu membiayai sekolah mereka tanpa harus membebani keluarga mereka . Seluruh program kami telah terintegrasi dengan perusahaan diluar negeri untuk sebagai jaminan 100% seluruh lulusan dari sekolah kami mendapatkan tempat untuk berkarir.",
    ],
  },
  {
    title: "Vision",
    description: [
      "Menjadi Lembaga Pelatihan Kerja Dan Lembaga Penyelenggara Pemagangan Luar Negeri Nomor 1 Terbaik dan Terpercaya Di Bali.",
    ],
  },
  {
    title: "Mission",
    description: [
      "Menjadi Lembaga terpercaya untuk masyarakat dalam pengembangan skill.",
      "Menjadi Lembaga terpercaya dalam penyediaan informasi kerja international.",
      "Menjadi Lembaga yang berkomitmen dalam menjalankan tujuan sesuai visi dan misi.",
      "Menjadi Lembaga yang bisa memberikan layanan penuh dalam membantu perekonomian masyarakat.",
      "Menjadi Lembaga yang mampu menciptakan SDM yang berkopeten sehingga mampu bersaing di dunia kerja dalam skala internasional.",
    ],
  },
];

export const WhatsApp = {
  to: "6282136228269",
};
