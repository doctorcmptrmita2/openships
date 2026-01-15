# OpenShip.io - Proje Analiz Raporu

## 🎯 Motto
> "Stop waiting, start shipping. The open directory for the next generation of builders."

---

## 📊 Rakip Analizi

### 1. Shipybara.com
| Özellik | Detay |
|---------|-------|
| **Free Plan** | $0 - 18 slot/hafta, homepage featured, dofollow backlink (Top 3), 180 gün scheduling |
| **Premium** | $18 - Priority access, garantili dofollow backlink, 10 premium slot/hafta |
| **SEO Package** | $69-79 - SEO makalesi + premium launch, yüksek DA backlink |
| **Directory Submission** | $99 (30 dir), $149 (60 dir), $199-249 (100+ dir) |
| **Güçlü Yanlar** | SEO odaklı, dofollow backlink, haftalık launch sistemi |
| **Zayıf Yanlar** | Premium özellikler pahalı, topluluk etkileşimi düşük |

### 2. PeerPush.net
| Özellik | Detay |
|---------|-------|
| **DR (Domain Rating)** | 68 - Yüksek SEO değeri |
| **Aylık Ziyaretçi** | ~135,000+ |
| **Model** | Freemium - Ücretsiz listeleme + Sponsored ads |
| **Öne Çıkan** | AI Search, Hot/Live/Recent filtreleri, Trending badges |
| **Kategoriler** | AI Tools, Developer Tools, Marketing, Fintech vb. |
| **Güçlü Yanlar** | Yüksek trafik, aktif topluluk, AI arama |
| **Zayıf Yanlar** | Sponsored post fiyatları belirsiz |

### 3. Product Hunt (Referans)
| Özellik | Detay |
|---------|-------|
| **Model** | Ücretsiz listeleme, günlük yarışma |
| **Sorun** | Aşırı kalabalık, manipülasyon, büyük şirketlere avantaj |
| **Fırsat** | Küçük girişimciler için alternatif alan |

---

## 💡 OpenShip.io Farklılaşma Stratejisi

### Fiyatlandırma Avantajı
| Hizmet | OpenShip.io | Shipybara | PeerPush |
|--------|-------------|-----------|----------|
| Standart Listeleme | **ÜCRETSİZ** | $0 (sınırlı) | Ücretsiz |
| Featured Post (24h) | **$9.99** | $18+ | ~$50+ |
| Newsletter Sponsor | **$19.99** | N/A | Belirsiz |
| Verified Badge | **$4.99** | N/A | N/A |

### Benzersiz Özellikler
1. **Bariyersiz Listeleme** - Onay süreci yok, topluluk denetimi
2. **Daily/Weekly Upvote** - "Ship of the Day" sistemi
3. **Verified Shipper Rozeti** - Güven mekanizması
4. **Girişimci Portfolyosu** - Kişisel profil sayfaları
5. **İndirimli Araçlar** - AWS, OpenAI, Stripe kredileri

---

## 🏗️ Teknik Mimari

```
openship.io/
├── apps/
│   ├── web/                 # Next.js 14 (App Router)
│   │   ├── app/
│   │   │   ├── (landing)/   # Landing page
│   │   │   ├── (dashboard)/ # Admin panel
│   │   │   ├── products/    # Ürün listeleme
│   │   │   ├── profile/     # Kullanıcı profilleri
│   │   │   └── api/         # API routes
│   │   └── components/
│   └── docs/                # Docusaurus (docs.openship.io)
├── packages/
│   ├── database/            # Prisma + PostgreSQL
│   ├── ui/                  # Shared UI components
│   └── config/              # Shared configs
└── scripts/
    └── scraper/             # Python scraper
```

### Tech Stack
| Katman | Teknoloji |
|--------|-----------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS, Shadcn/ui |
| Backend | Next.js API Routes, tRPC (opsiyonel) |
| Database | PostgreSQL + Prisma ORM |
| Auth | NextAuth.js (GitHub, Google, Email) |
| Ödeme | LemonSqueezy |
| Email | Resend + React Email |
| Hosting | Vercel |
| Analytics | Plausible / PostHog |

---

## 📱 Sayfa Yapısı

### 1. Landing Page (openship.io)
- Hero section + CTA
- Günün/Haftanın en iyi projeleri
- Kategori filtreleri
- AI destekli arama
- Sponsor alanı
- Newsletter signup

### 2. Dashboard (openship.io/dashboard)
- Ürün ekleme/düzenleme
- Analytics (görüntülenme, upvote)
- Ödeme geçmişi
- Featured post satın alma

### 3. Profil Sayfası
- Kullanıcının tüm "ship"leri
- Verified badge durumu
- Sosyal linkler
- İstatistikler

---

## 📈 MVP Özellikleri (Faz 1)

### Must Have
- [x] Ürün listeleme (ücretsiz)
- [x] Upvote sistemi
- [x] Kategori filtreleme
- [x] Kullanıcı auth (GitHub/Google)
- [x] Basit profil sayfası
- [x] Responsive tasarım

### Nice to Have (Faz 2)
- [ ] AI arama
- [ ] Newsletter entegrasyonu
- [ ] LemonSqueezy ödeme
- [ ] Verified badge sistemi
- [ ] Featured post

---

## 🎨 UI/UX Referansları

PeerPush'tan ilham alınan özellikler:
- Temiz, minimal kart tasarımı
- Hot/Live/Recent filtreleri
- Trending badge'leri
- Kategori tag'leri
- Upvote/comment sayaçları
- Sponsor alanı entegrasyonu

---

## 🚀 Lansman Stratejisi

1. **Seed Data**: 100 popüler proje (curated)
2. **Beta Launch**: Twitter/X + Indie Hackers
3. **Product Hunt Launch**: İronik şekilde PH'da launch
4. **Content Marketing**: "Ücretsiz alternatif" SEO içerikleri

---

## 📅 Zaman Çizelgesi

| Hafta | Hedef |
|-------|-------|
| 1 | Temel altyapı + Auth |
| 2 | Ürün CRUD + Upvote |
| 3 | Landing page + Profiller |
| 4 | Polish + 100 seed data |
| 5 | Beta launch |

---

## ✅ Tamamlanan Dosyalar

### Proje Yapısı
```
openship/
├── src/
│   ├── app/
│   │   ├── page.tsx              ✅ Landing page
│   │   ├── layout.tsx            ✅ Root layout
│   │   ├── globals.css           ✅ Global styles
│   │   ├── submit/page.tsx       ✅ Ürün ekleme formu
│   │   ├── products/[slug]/      ✅ Ürün detay sayfası
│   │   ├── categories/page.tsx   ✅ Kategoriler
│   │   ├── deals/page.tsx        ✅ İndirimler
│   │   └── dashboard/page.tsx    ✅ Admin panel
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Header.tsx        ✅ Navbar
│   │   │   └── Footer.tsx        ✅ Footer
│   │   ├── home/
│   │   │   ├── HeroSection.tsx   ✅ Hero
│   │   │   ├── FilterTabs.tsx    ✅ Hot/Live/Recent
│   │   │   ├── CategoryFilter.tsx ✅ Kategori filtreleri
│   │   │   ├── Sidebar.tsx       ✅ Sağ sidebar
│   │   │   └── SponsoredCard.tsx ✅ Sponsor kartı
│   │   └── products/
│   │       ├── ProductCard.tsx   ✅ Ürün kartı
│   │       └── ProductList.tsx   ✅ Ürün listesi
│   └── lib/
│       ├── db.ts                 ✅ Prisma client
│       └── utils.ts              ✅ Utility fonksiyonlar
├── prisma/
│   ├── schema.prisma             ✅ Database şeması
│   └── seed.ts                   ✅ Seed data
├── package.json                  ✅
├── tailwind.config.ts            ✅
├── tsconfig.json                 ✅
└── README.md                     ✅
```

### Sonraki Adımlar
1. `npm install` - Bağımlılıkları yükle
2. `.env` dosyasını oluştur (DATABASE_URL ekle)
3. `npx prisma db push` - Database'i oluştur
4. `npm run db:seed` - Örnek verileri ekle
5. `npm run dev` - Geliştirme sunucusunu başlat
