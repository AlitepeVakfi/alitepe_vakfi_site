# Ali Tepe Vakfı - Site Yapılandırması

## 🎯 Yapılan Değişiklikler

### 1. ✅ Tema Değişikliği (Koyu → Açık)
- Arka plan: Beyaz/Açık tema
- Metin renkleri: Koyu renkler (okunabilirlik için)
- Tüm renkler açık tema için optimize edildi

### 2. ✅ Yeni Sayfalar Oluşturuldu

#### **Ali Tepe Özgeçmiş Sayfası** (`/ali-tepe`)
- Dosya: `src/pages/AliTepeBio.jsx`
- İçerik bölümleri:
  - Fotoğraf ve kısa bilgi kartı
  - Erken dönem ve eğitim
  - Kariyer ve başarılar
  - Hayırseverlik ve sosyal sorumluluk
  - Vizyon ve değerler
  - Ödüller ve takdirler

#### **Mütevelli Heyeti Sayfası** (`/mutevelli-heyeti`)
- Dosya: `src/pages/MutevelliHeyeti.jsx`
- Özellikleri:
  - Heyet üyeleri grid görünümü
  - Her üye için kart tasarımı
  - E-posta ve LinkedIn linkleri
  - Mütevelli heyeti hakkında bilgi bölümü

### 3. ✅ Navigasyon Güncellendi

**Yeni menü yapısı:**
- Ana Sayfa
- Ali Tepe Özgeçmiş
- Mütevelli Heyeti
- Etkinlikler (dropdown)
  - Aktif Etkinlikler
  - Geçmiş Etkinlikler
- Destekçiler
- İletişim

**Kaldırılan sayfalar:**
- Biz Kimiz
- Takımlar
- Üyeler (eski)

### 4. ✅ Site Başlığı Güncellendi
- Eski: "Gazi Siber"
- Yeni: "Ali Tepe Vakfı"
- HTML başlığı: "Ali Tepe Vakfı"
- Dil: Türkçe (tr)

---

## 📁 Resim ve Logo Yolları

### **Ana Logo**
📍 `public/logo-removebg-preview.png` - Header ve Footer'da kullanılıyor

### **Ali Tepe Fotoğrafı**
📍 `public/ali-tepe-photo.jpg` - Özgeçmiş sayfasında gösterilecek

### **Mütevelli Heyeti Fotoğrafları**
📍 `public/members/mutevelli/`
- `member1.jpg`
- `member2.jpg`
- `member3.jpg`
- (İstediğiniz kadar üye fotoğrafı ekleyebilirsiniz)

### **Favicon (Tarayıcı İkonu)**
📍 `public/vite.svg` - Tarayıcı sekmesinde görünen ikon

### **Diğer Görseller**
- **Etkinlik görselleri:** `public/aboutUs/`
- **Destekçi logoları:** `public/collaborators/`
- **Genel görseller:** `public/main.png`, `public/picture.png`, `public/event.png`

---

## 🔧 Yapmanız Gerekenler

### 1. **Görselleri Ekleyin**
```
public/
  ├── logo-removebg-preview.png    (Vakıf logosu)
  ├── ali-tepe-photo.jpg           (Ali Tepe fotoğrafı)
  └── members/
      └── mutevelli/
          ├── member1.jpg          (Heyet başkanı)
          ├── member2.jpg          (Heyet üyesi)
          └── member3.jpg          (Heyet üyesi)
```

### 2. **Mütevelli Heyeti Bilgilerini Güncelleyin**
`src/pages/MutevelliHeyeti.jsx` dosyasında, `boardMembers` dizisini düzenleyin:

```javascript
const [boardMembers] = useState([
  {
    id: 1,
    name: "Gerçek İsim",
    title: "Mütevelli Heyet Başkanı",
    photo: "/members/mutevelli/member1.jpg",
    bio: "Kısa bilgi...",
    email: "email@alitepevakfi.org",
    linkedin: "https://linkedin.com/in/..."
  },
  // Diğer üyeler...
]);
```

### 3. **Ali Tepe Özgeçmişini Doldurun**
`src/pages/AliTepeBio.jsx` dosyasındaki metin alanlarını güncelleyin:
- Kısa bilgi kartı (doğum, eğitim, meslek)
- Erken dönem ve eğitim
- Kariyer ve başarılar
- Hayırseverlik faaliyetleri
- Vizyon ve değerler
- Ödüller ve takdirler

### 4. **Ana Sayfa İçeriğini Güncelleyin**
`src/pages/Home.jsx` dosyasını vakfın amacına göre düzenleyin.

---

## 🚀 Sonraki Adımlar

1. **Görselleri yerleştirin** (yukarıdaki yollara)
2. **İçerikleri doldurun** (özgeçmiş ve heyet bilgileri)
3. **Ana sayfayı güncelleyin** (vakıf hakkında bilgiler)
4. **İletişim bilgilerini güncelleyin** (`src/pages/Contact.jsx`)
5. **Footer'ı güncelleyin** (`src/components/layouts/Footer.jsx`)

---

## 📝 Notlar

- Tüm sayfalar responsive tasarıma sahip
- Görseller yüklenemediğinde placeholder görseller görünecek
- Mütevelli heyeti üyelerini JSON dosyasına taşıyabilirsiniz (opsiyonel)
- Renk temaları `src/index.css` dosyasından özelleştirilebilir

---

**Site artık Ali Tepe Vakfı için hazır! 🎉**
