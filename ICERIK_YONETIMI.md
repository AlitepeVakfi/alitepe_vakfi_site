# 📝 İçerik Yönetim Rehberi - Ali Tepe Vakfı

## 🎯 Kolay İçerik Yönetimi

Tüm site metinleri ve görsel yolları artık **tek bir dosyada** toplanmıştır:

### 📄 Ana İçerik Dosyası
**Dosya Yolu:** `src/data/siteContent.json`

Bu dosyada site genelindeki tüm metinleri ve görsel yollarını kolayca düzenleyebilirsiniz!

---

## 📖 İçerik Dosyası Kullanım Kılavuzu

### 1️⃣ **Site Genel Bilgileri** (`siteInfo`)

```json
"siteInfo": {
  "name": "Ali Tepe Vakfı",
  "tagline": "Topluma Değer Katmak, Geleceğe Umut Olmak",
  "email": "info@alitepevakfi.org",
  "phone": "+90 (XXX) XXX XX XX",
  "address": "Adres bilgisi buraya gelecek"
}
```

**Değiştirilebilir:**
- Vakıf adı
- Slogan
- E-posta adresi
- Telefon numarası
- Fiziksel adres
- Sosyal medya linkleri

---

### 2️⃣ **Görseller** (`images`)

Tüm görsellerin yolları burada tanımlı:

```json
"images": {
  "logo": {
    "path": "/logo-removebg-preview.png",
    "alt": "Ali Tepe Vakfı Logo"
  },
  "aliTepe": {
    "path": "/ali-tepe-photo.jpg",
    "alt": "Ali Tepe"
  }
}
```

**Görsel değiştirmek için:**
1. Yeni görseli `public/` klasörüne ekleyin
2. JSON dosyasında `path` değerini güncelleyin

---

### 3️⃣ **Ana Sayfa İçerikleri** (`homePage`)

#### Hero Bölümü
```json
"hero": {
  "title": {
    "line1": "Topluma Değer Katmak",
    "line2": "Geleceğe Umut Olmak"
  },
  "description": "Ali Tepe Vakfı olarak...",
  "buttons": [...]
}
```

#### Biz Kimiz Bölümü
```json
"whoAreWe": {
  "title": "Biz Kimiz?",
  "description": "Ali Tepe Vakfı, topluma...",
  "image": "/logo.jpg"
}
```

#### Neden Biz Bölümü
```json
"whyUs": {
  "title": "Neden Biz?",
  "values": [
    {
      "title": "Şeffaflık",
      "description": "Tüm faaliyetlerimizi şeffaf..."
    }
  ]
}
```

---

### 4️⃣ **Ali Tepe Özgeçmiş** (`aliTepePage`)

```json
"aliTepePage": {
  "title": "Ali Tepe",
  "subtitle": "Özgeçmiş",
  "photo": "/ali-tepe-photo.jpg",
  "quickInfo": {
    "birthDate": "Doğum tarihi bilgisi",
    "education": "Eğitim bilgisi",
    "profession": "Meslek bilgisi"
  },
  "sections": {
    "earlyLife": {
      "title": "Erken Dönem ve Eğitim",
      "content": "Ali Tepe'nin erken yaşam..."
    },
    "career": { ... },
    "philanthropy": { ... }
  }
}
```

**Düzenlenebilir:**
- Fotoğraf yolu
- Kısa bilgiler (doğum, eğitim, meslek)
- Her bölümün başlığı ve içeriği
- Ödüller listesi

---

### 5️⃣ **Mütevelli Heyeti** (`mutevelliHeyetiPage`)

```json
"mutevelliHeyetiPage": {
  "title": "Mütevelli Heyeti",
  "members": [
    {
      "id": 1,
      "name": "Üye İsmi 1",
      "title": "Mütevelli Heyet Başkanı",
      "photo": "/members/mutevelli/member1.jpg",
      "bio": "Kısa bilgi...",
      "email": "uye1@alitepevakfi.org",
      "linkedin": ""
    }
  ]
}
```

**Yeni üye eklemek için:**
1. `members` dizisine yeni bir obje ekleyin
2. `id` değerini artırın
3. Üye fotoğrafını `public/members/mutevelli/` klasörüne ekleyin

---

## 🔧 Bileşenlerde İçerik Dosyasını Kullanma

### Örnek Kullanım

```javascript
import siteContent from '../data/siteContent.json';

function MyComponent() {
  return (
    <div>
      <h1>{siteContent.siteInfo.name}</h1>
      <p>{siteContent.homePage.hero.description}</p>
      <img src={siteContent.images.logo.path} alt={siteContent.images.logo.alt} />
    </div>
  );
}
```

---

## 📁 Görsel Dosyaları Yönetimi

### Görsel Klasör Yapısı

```
public/
├── logo-removebg-preview.png       # Ana logo
├── ali-tepe-photo.jpg              # Ali Tepe fotoğrafı
├── logo.jpg                        # Hakkımızda görseli
├── event.png                       # Etkinlik görseli
├── main.png                        # Ana görsel
│
├── members/
│   └── mutevelli/                  # Heyet üyeleri
│       ├── member1.jpg
│       ├── member2.jpg
│       └── member3.jpg
│
├── collaborators/                   # Destekçi logoları
│   ├── gazi.jpg
│   ├── teknoloji_fak.jpg
│   └── unides.jpg
│
└── aboutUs/                         # Hakkımızda görselleri
    ├── arastirma_gelistirme.jpeg
    └── workshop.jpg
```

### Görsel Ekleme Adımları

1. **Görseli `public/` klasörüne ekleyin**
   - Örnek: `public/yeni-gorsel.jpg`

2. **`siteContent.json` dosyasında tanımlayın**
   ```json
   "images": {
     "yeniGorsel": {
       "path": "/yeni-gorsel.jpg",
       "alt": "Yeni Görsel Açıklaması"
     }
   }
   ```

3. **Bileşende kullanın**
   ```javascript
   <img src={siteContent.images.yeniGorsel.path} 
        alt={siteContent.images.yeniGorsel.alt} />
   ```

---

## 🎨 Renk Teması Güncelleme

**Dosya:** `src/index.css` (Satır 55-65)

Mevcut tema (logo renklerine göre):
```css
--color-background: #dee3df;     /* Açık gri-beyaz */
--color-foreground: #1a1a1a;     /* Koyu siyah */
--color-primary: #293c7e;        /* Koyu mavi (logo) */
--color-secondary: #00a1bd;      /* Cyan (logo) */
--color-third: #1f2d5c;          /* Daha koyu mavi */
```

Renk değişiklikleri otomatik olarak tüm sitede uygulanır!

---

## 📝 Hızlı Değişiklik Listesi

### Sık Değiştirilen İçerikler

| İçerik | JSON Yolu | Açıklama |
|--------|-----------|----------|
| Site Adı | `siteInfo.name` | Header, Footer, Title |
| Ana Başlık | `homePage.hero.title` | Ana sayfa büyük başlık |
| Açıklama | `homePage.hero.description` | Ana sayfa açıklama |
| Logo | `images.logo.path` | Ana logo dosya yolu |
| İletişim | `siteInfo.email`, `siteInfo.phone` | İletişim bilgileri |
| Sosyal Medya | `siteInfo.socialMedia` | Sosyal medya linkleri |

---

## ⚠️ Önemli Notlar

1. **JSON formatına dikkat edin**
   - Her değer tırnak içinde olmalı
   - Virgülleri unutmayın
   - Son öğeden sonra virgül OLMAMALI

2. **Görsel yolları**
   - `public/` klasöründeki dosyalar için `/` ile başlayın
   - Örnek: `/logo.jpg` ✅
   - Örnek: `logo.jpg` ❌

3. **Değişikliklerden sonra**
   - Geliştirme sunucusunu yeniden başlatın
   - Tarayıcı cache'ini temizleyin (Ctrl + F5)

---

## 🚀 Sonraki Adımlar

1. ✅ `siteContent.json` dosyasındaki metinleri doldurun
2. ✅ Görselleri `public/` klasörüne ekleyin
3. ✅ Bileşenleri güncelleyerek JSON'dan veri çekin
4. ✅ Değişiklikleri test edin

---

## 📞 Yardım

Değişiklik yaparken sorun yaşarsanız:
1. JSON formatını kontrol edin ([JSONLint](https://jsonlint.com))
2. Tarayıcı konsolunu kontrol edin (F12)
3. Geliştirme sunucusunu yeniden başlatın

**Kolay içerik yönetimi için tüm sistem hazır! 🎉**
