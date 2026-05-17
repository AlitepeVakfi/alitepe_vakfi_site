# 🖼️ Görsel ve Metin Referans Rehberi

## 📍 Tüm Görsellerin Konumları

### Ana Görseller

| Görsel Adı | Dosya Yolu | Nerede Kullanılıyor | Boyut Önerisi |
|------------|------------|---------------------|---------------|
| **Ana Logo** | `public/logo-removebg-preview.png` | Header, Footer, Members fallback | 256x256px (şeffaf PNG) |
| **Favicon** | `public/vite.svg` | Tarayıcı sekmesi ikonu | 32x32px (SVG) |
| **Ali Tepe Fotoğrafı** | `public/ali-tepe-photo.jpg` | Özgeçmiş sayfası | 400x500px |
| **Hakkımızda Görseli** | `public/logo.jpg` | Ana sayfa - Biz Kimiz | 400x400px |
| **Ana Görsel** | `public/main.png` | Çeşitli sayfalarda | 800x600px |
| **Etkinlik Görseli** | `public/event.png` | Etkinlik sayfaları | 800x600px |

---

### Mütevelli Heyeti Fotoğrafları

| Dosya Adı | Dosya Yolu | Üye Pozisyonu |
|-----------|------------|---------------|
| Member 1 | `public/members/mutevelli/member1.jpg` | Heyet Başkanı |
| Member 2 | `public/members/mutevelli/member2.jpg` | Heyet Üyesi |
| Member 3 | `public/members/mutevelli/member3.jpg` | Heyet Üyesi |

**Önerilen Boyut:** 400x400px (kare, profil fotoğrafı)

---

### Destekçi/İş Ortağı Logoları

**Klasör:** `public/collaborators/`

| Dosya Adı | Kurum |
|-----------|-------|
| `gazi.jpg` | Gazi Üniversitesi |
| `teknoloji_fak.jpg` | Teknoloji Fakültesi |
| `unides.jpg` | Unides |
| `cti_academy_ortaklik.jpeg` | CTI Academy |
| `ine_ortaklik.jpg` | INE |
| `siber_anadolu_topluluklari_ortaklik.png` | Siber Anadolu Toplulukları |

**Ek Destekçi Logoları:**
- `public/siberay-removebg-preview.png`
- `public/siberay.jpg`

**Önerilen Boyut:** 200x100px (şeffaf PNG tercih edilir)

---

### Hakkımızda Bölümü Görselleri

**Klasör:** `public/aboutUs/`

| Dosya Adı | Açıklama |
|-----------|----------|
| `arastirma_gelistirme.jpeg` | Araştırma Geliştirme 1 |
| `arastirma_gelistirme2.jpeg` | Araştırma Geliştirme 2 |
| `basari1.jpeg` | Başarı Hikayesi |
| `workshop.jpg` | Workshop Görseli 1 |
| `workshop2.jpeg` | Workshop Görseli 2 |
| `yarisma.jpeg` | Yarışma Görseli |

**Önerilen Boyut:** 800x600px

---

## 📝 Tüm Metin İçerikleri ve Konumları

### 1. Site Geneli

| Metin | Konum (Dosya) | Satır | Mevcut Değer |
|-------|---------------|-------|--------------|
| **Site Başlığı** | `index.html` | 7 | "Ali Tepe Vakfı" |
| **Site Dili** | `index.html` | 2 | "tr" |
| **Header Logo Yazısı** | `src/components/layouts/Header.jsx` | 122 | "Ali Tepe Vakfı" |
| **Footer Logo Yazısı** | `src/components/layouts/Footer.jsx` | 33 | "Ali Tepe Vakfı" |
| **Footer Açıklama** | `src/components/layouts/Footer.jsx` | 36-39 | Vakıf tanıtım metni |

---

### 2. Navigasyon Menüsü

**Dosya:** `src/components/layouts/Header.jsx` (Satır 17-45)

```javascript
{ text: "Ana Sayfa", href: "/" }
{ text: "Ali Tepe Özgeçmiş", href: "/ali-tepe" }
{ text: "Mütevelli Heyeti", href: "/mutevelli-heyeti" }
{ text: "Etkinlikler", ... }  // Dropdown
{ text: "Destekçiler", href: "/collaborators" }
{ text: "İletişim", href: "/contact" }
```

---

### 3. Ana Sayfa (Home)

#### Hero Bölümü
**Dosya:** `src/components/Home/Hero.jsx`

| Metin | Satır | İçerik |
|-------|-------|--------|
| **Ana Başlık Satır 1** | 13 | "Topluma Değer Katmak" |
| **Ana Başlık Satır 2** | 14 | "Geleceğe Umut Olmak" |
| **Alt Açıklama** | 16-17 | "Ali Tepe Vakfı olarak..." |
| **Buton 1** | 25 | "Etkinliklerimiz" |
| **Buton 2** | 32 | "Faaliyetlerimiz" |
| **Scroll Metni** | 41 | "Keşfetmeye başla" |

#### Biz Kimiz Bölümü
**Dosya:** `src/components/Home/WhoAreWe.jsx`

| Metin | Satır | İçerik |
|-------|-------|--------|
| **Başlık** | 11 | "Biz Kimiz?" |
| **Açıklama** | 14-18 | Lorem ipsum metni (değiştirilmeli) |
| **Görsel** | 6 | "logo.jpg" |

---

### 4. Ali Tepe Özgeçmiş Sayfası

**Dosya:** `src/pages/AliTepeBio.jsx`

| Bölüm | Satır | İçerik |
|-------|-------|--------|
| **Ana Başlık** | 8 | "Ali Tepe" |
| **Alt Başlık** | 11 | "Özgeçmiş" |
| **Fotoğraf** | 20 | "/ali-tepe-photo.jpg" |
| **Kısa Bilgi - Doğum** | 43-45 | Doldurulmalı |
| **Kısa Bilgi - Eğitim** | 47-49 | Doldurulmalı |
| **Kısa Bilgi - Meslek** | 51-53 | Doldurulmalı |
| **Erken Dönem Başlık** | 63-66 | "Erken Dönem ve Eğitim" |
| **Erken Dönem İçerik** | 69-71 | Doldurulmalı |
| **Kariyer Başlık** | 78-81 | "Kariyer ve Başarılar" |
| **Kariyer İçerik** | 84-86 | Doldurulmalı |
| **Hayırseverlik Başlık** | 93-96 | "Hayırseverlik ve Sosyal Sorumluluk" |
| **Hayırseverlik İçerik** | 99-101 | Doldurulmalı |
| **Vizyon Başlık** | 108-111 | "Vizyon ve Değerler" |
| **Vizyon İçerik** | 114-116 | Doldurulmalı |
| **Ödüller Başlık** | 123-126 | "Ödüller ve Takdirler" |
| **Ödüller Listesi** | 130-133 | Doldurulmalı |

---

### 5. Mütevelli Heyeti Sayfası

**Dosya:** `src/pages/MutevelliHeyeti.jsx`

| Bölüm | Satır | İçerik |
|-------|-------|--------|
| **Ana Başlık** | 100 | "Mütevelli Heyeti" |
| **Alt Başlık** | 103 | "Ali Tepe Vakfı'nı yöneten..." |
| **Hakkında Başlık** | 109 | "Mütevelli Heyeti Hakkında" |
| **Hakkında Paragraf 1** | 112-115 | Heyet açıklaması |
| **Hakkında Paragraf 2** | 116-119 | Heyet vizyonu |
| **Footer Notu** | 135-139 | Ek bilgi metni |

#### Üye Bilgileri (Satır 7-29)
```javascript
{
  name: "Örnek İsim 1",
  title: "Mütevelli Heyet Başkanı",
  photo: "/members/mutevelli/member1.jpg",
  bio: "Kısa bilgi",
  email: "ornek1@alitepevakfi.org",
  linkedin: ""
}
```

---

### 6. Footer Bölümü

**Dosya:** `src/components/layouts/Footer.jsx`

| Metin | Satır | İçerik |
|-------|-------|--------|
| **Logo Yazısı** | 33 | "Ali Tepe Vakfı" |
| **Açıklama** | 36-39 | Vakıf tanıtım metni |
| **Hızlı Linkler Başlık** | 49 | "Hızlı Linkler" |

**Quick Links** (Satır 6-21):
- Ali Tepe
- Mütevelli Heyeti
- Destekçiler
- İletişim

---

## 🎨 Renk Teması

**Dosya:** `src/index.css` (Satır 55-65)

| Renk Değişkeni | Hex Değeri | Kullanım Alanı |
|----------------|------------|----------------|
| `--color-background` | #dee3df | Arka plan (açık gri) |
| `--color-foreground` | #1a1a1a | Metin rengi (koyu) |
| `--color-primary` | #293c7e | Ana renk (koyu mavi - logo) |
| `--color-secondary` | #00a1bd | İkincil renk (cyan - logo) |
| `--color-third` | #1f2d5c | Vurgu rengi (daha koyu mavi) |

---

## 🔍 Hızlı Arama Tablosu

### Belirli Bir Metni Değiştirmek İstiyorsanız:

| Değiştirmek İstediğiniz | Dosya | Bölüm |
|-------------------------|-------|-------|
| Ana sayfa büyük başlık | `Hero.jsx` | Satır 13-14 |
| Vakıf adı (tüm site) | `Header.jsx`, `Footer.jsx`, `index.html` | Belirtilen satırlar |
| Mütevelli heyet üyeleri | `MutevelliHeyeti.jsx` | Satır 7-29 |
| Ali Tepe biyografisi | `AliTepeBio.jsx` | Belirtilen bölümler |
| Menü öğeleri | `Header.jsx` | Satır 17-45 |
| Footer açıklaması | `Footer.jsx` | Satır 36-39 |
| Buton metinleri | `Hero.jsx` | Satır 25, 32 |

---

## ✅ Görsel Değiştirme Checklist

- [ ] Ana logo değiştirildi (`public/logo-removebg-preview.png`)
- [ ] Favicon değiştirildi (`public/vite.svg`)
- [ ] Ali Tepe fotoğrafı eklendi (`public/ali-tepe-photo.jpg`)
- [ ] Mütevelli heyet fotoğrafları eklendi (`public/members/mutevelli/`)
- [ ] Hakkımızda görseli güncellendi (`public/logo.jpg`)

## ✅ Metin Değiştirme Checklist

- [ ] Site başlığı ve logo yazısı güncellendi
- [ ] Ana sayfa başlık ve açıklama düzenlendi
- [ ] Menü öğeleri kontrol edildi
- [ ] Ali Tepe özgeçmişi dolduruldu
- [ ] Mütevelli heyet üyeleri eklendi
- [ ] Footer açıklaması güncellendi
- [ ] İletişim bilgileri eklendi

---

**Bu rehber sayesinde site genelindeki tüm görselleri ve metinleri kolayca bulabilir ve değiştirebilirsiniz! 📚**
