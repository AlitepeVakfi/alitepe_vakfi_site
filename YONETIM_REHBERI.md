# Ali Tepe Vakfı Website - Yönetim Rehberi

## 📋 İçerik Güncelleme Rehberi

### 1. Mütevelli Heyeti Üyelerini Güncelleme

**Dosya:** `src/pages/MutevelliHeyeti.jsx`

Satır 6'dan itibaren üye bilgilerini güncelleyin:

```javascript
const [boardMembers] = useState([
  {
    id: 1,
    name: "Mehmet Yılmaz",                          // Üye adı
    title: "Mütevelli Heyet Başkanı",               // Ünvan
    photo: "/members/mutevelli/mehmet-yilmaz.jpg",  // Fotoğraf yolu
    bio: "20 yılı aşkın iş deneyimi...",            // Kısa biyografi
    email: "mehmet@alitepevakfi.org",               // E-posta
    linkedin: "https://linkedin.com/in/..."         // LinkedIn profili (opsiyonel)
  },
  // Yeni üyeler eklemek için kopyalayın
]);
```

**Fotoğrafları şuraya ekleyin:** `public/members/mutevelli/`

---

### 2. Ali Tepe Özgeçmişini Güncelleme

**Dosya:** `src/pages/AliTepeBio.jsx`

#### a) Ana Fotoğraf
- **Yol:** `public/ali-tepe-photo.jpg`
- Önerilen boyut: 400x500 piksel

#### b) Kısa Bilgi Kartı (Satır 41-52)
```javascript
<div>
  <span className="font-medium text-foreground/70">Doğum:</span>
  <p className="text-foreground">1 Ocak 1970, İstanbul</p>
</div>
```

#### c) Biyografi Bölümleri
Her bölümün içeriğini güncelleyin:
- **Erken Dönem ve Eğitim** (Satır 61-67)
- **Kariyer ve Başarılar** (Satır 72-78)
- **Hayırseverlik** (Satır 83-89)
- **Vizyon ve Değerler** (Satır 94-100)
- **Ödüller** (Satır 105-115)

---

### 3. Ana Sayfa İçeriğini Güncelleme

**Dosya:** `src/pages/Home.jsx`

Vakfın misyonu, vizyonu ve faaliyetlerini bu dosyada güncelleyin.

---

### 4. İletişim Bilgilerini Güncelleme

**Dosya:** `src/pages/Contact.jsx`

- Adres
- Telefon
- E-posta
- Sosyal medya linkleri

---

### 5. Logo ve Görselleri Değiştirme

| Dosya | Konum | Açıklama |
|-------|-------|----------|
| Ana Logo | `public/logo-removebg-preview.png` | Header ve Footer'da görünür |
| Favicon | `public/vite.svg` | Tarayıcı sekmesi ikonu |
| Ali Tepe Fotoğrafı | `public/ali-tepe-photo.jpg` | Özgeçmiş sayfası |
| Heyet Fotoğrafları | `public/members/mutevelli/*.jpg` | Mütevelli heyeti sayfası |

**İpucu:** Aynı dosya isimlerini kullanırsanız kod değişikliği yapmanıza gerek yok!

---

### 6. Tema Renklerini Özelleştirme

**Dosya:** `src/index.css`

Satır 55-65'te renkleri değiştirin:

```css
--color-background: oklch(98% 0.005 250);  /* Arka plan */
--color-foreground: oklch(20% 0.02 250);   /* Metin rengi */
--color-primary: oklch(45% 0.18 250);      /* Ana renk (mavi) */
--color-secondary: oklch(55% 0.22 200);    /* İkincil renk (cyan) */
```

---

## 🚀 Geliştirme Komutları

### Geliştirme Sunucusunu Başlatma
```bash
npm run dev
```
Tarayıcıda: `http://localhost:5173`

### Üretim İçin Build Alma
```bash
npm run build
```

### Build'i Önizleme
```bash
npm run preview
```

---

## 📁 Önemli Dosyalar ve Klasörler

```
alitepe_vakfi_site/
├── public/                          # Statik dosyalar
│   ├── logo-removebg-preview.png   # Ana logo
│   ├── ali-tepe-photo.jpg          # Ali Tepe fotoğrafı
│   ├── members/
│   │   └── mutevelli/              # Heyet fotoğrafları
│   └── collaborators/              # Destekçi logoları
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx                # Ana sayfa
│   │   ├── AliTepeBio.jsx          # Ali Tepe özgeçmiş
│   │   ├── MutevelliHeyeti.jsx     # Mütevelli heyeti
│   │   └── Contact.jsx             # İletişim
│   │
│   ├── components/
│   │   └── layouts/
│   │       ├── Header.jsx          # Üst menü
│   │       └── Footer.jsx          # Alt bilgi
│   │
│   └── index.css                   # Tema ve renkler
│
└── SITE_YAPISI.md                  # Detaylı dokümantasyon
```

---

## 💡 Hızlı İpuçları

1. **Yeni sayfa eklemek için:**
   - `src/pages/` altında yeni dosya oluşturun
   - `src/App.jsx` dosyasına route ekleyin
   - `src/components/layouts/Header.jsx` menüye ekleyin

2. **Fotoğraf eklerken:**
   - JPG formatı önerilir (dosya boyutu için)
   - PNG formatı şeffaf arka plan için
   - Fotoğrafları optimize edin (TinyPNG gibi araçlarla)

3. **Yedek almayı unutmayın:**
   - Değişiklik yapmadan önce dosyaları yedekleyin
   - Git kullanıyorsanız commit yapın

---

## 🆘 Sorun Giderme

**Sayfalar yüklenmiyor:**
```bash
npm install
npm run dev
```

**Görseller görünmüyor:**
- Dosya yollarını kontrol edin (`public/` klasörü için `/` ile başlamalı)
- Dosya isimlerinin doğru olduğundan emin olun

**Renkler değişmedi:**
- Tarayıcı cache'ini temizleyin (Ctrl + F5)
- Geliştirme sunucusunu yeniden başlatın

---

## 📞 Destek

Sorularınız için: [İletişim sayfası](/contact)

**Site başarıyla Ali Tepe Vakfı için yapılandırıldı! 🎉**
