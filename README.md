# Ali Tepe Vakfı Web Sitesi

[www.alitepevakfi.org.tr](https://www.alitepevakfi.org.tr) — React + Vite + Tailwind CSS ile hazırlanmış, GitHub Pages üzerinde yayınlanan vakıf sitesi.
`main` dalına yapılan her push, GitHub Actions ile siteyi otomatik olarak yeniden yayınlar.

## Geliştirme

```bash
npm install
npm run dev      # yerel sunucu
npm run build    # yayın paketi (dist/)
```

## İçerik nasıl güncellenir?

| Ne değişecek? | Dosya |
| --- | --- |
| E-posta, adres, çalışma saatleri, sosyal medya, menü | `src/data/site.js` |
| Haberler (ana sayfa, haber listesi ve detay sayfaları) | `src/data/news.js` |
| Mütevelli heyeti üyeleri | `src/data/board.js` |
| Kurucumuz Ali Tepe sayfasındaki metinler | `src/pages/AliTepeBio.jsx` |
| Renkler ve yazı tipleri | `src/index.css`, `index.html` |

### Yeni haber eklemek

1. Fotoğrafları [AlitepeVakfi/cdn](https://github.com/AlitepeVakfi/cdn) reposunda `events/<klasör-adı>/foto_1.webp`, `foto_2.webp` … şeklinde yükleyin, kapak görselini de `events/` altına koyun.
2. `src/data/news.js` içindeki bir haberi kopyalayıp düzenleyin: `slug` (adres), `title`, `category`, `date` (`YYYY-AA-GG`), `summary`, `body` (her eleman bir paragraf) ve `gallery` (`folder`, `count`).
3. Haberler tarihe göre kendiliğinden sıralanır; en yenisi ana sayfada öne çıkar.

### Mütevelli heyetine üye eklemek

Fotoğrafı CDN reposunda `members/mutevelli/` altına yükleyip `src/data/board.js` içine yeni bir kayıt ekleyin.
`focus: [soldan %, üstten %]` yüzün fotoğraftaki yerini belirtir; yüz küçük kalıyorsa `zoom: 1.5` gibi bir değer verin.

## Görseller

- İçerik fotoğrafları ayrı bir repoda tutulur: `https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/...`
- Logo, sekme simgeleri (favicon) ve sosyal medya paylaşım görseli (`og-image.jpg`) bu reponun `public/` klasöründedir.
