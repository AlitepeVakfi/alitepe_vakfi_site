const fs = require('fs');
const path = require('path');

const replaceInFile = (filePath) => {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  const replacements = [
    { from: /\/logo-removebg-preview\.png/g, to: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/logo-removebg-preview.webp" },
    { from: /\/ali-tepe-photo\.jpg/g, to: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/ali-tepe-photo.webp" },
    { from: /\/logo\.jpg/g, to: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/logo.webp" },
    { from: /\/logo\.jpeg/g, to: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/logo.webp" },
    { from: /\/sayfa_kapak\.jpg/g, to: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/sayfa_kapak.webp" },
    { from: /\/mission-photo\.jpg/g, to: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/mission-photo.webp" },
    { from: /\/events\/ali_tepe_anma_kapak\.jpg/g, to: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/events/ali_tepe_anma_kapak.webp" },
    { from: /\/events\/konferans_kapak_toplumsal_yasamda_hosgorunun_yeri\.jpg/g, to: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/events/konferans_kapak_toplumsal_yasamda_hosgorunun_yeri.webp" },
    { from: /\/members\/mutevelli\/(.*?)\.(jpg|jpeg|png)/g, to: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/members/mutevelli/$1.webp" },
    // For EventDetails gallery logic:
    // imageArray.push(`/events/${folderName}/foto_${i}.jpg`);
    { from: /\/events\/\$\{folderName\}\/foto_\$\{i\}\.jpg/g, to: "https://raw.githubusercontent.com/AlitepeVakfi/cdn/main/events/${folderName}/foto_${i}.webp" }
  ];

  for (const { from, to } of replacements) {
    content = content.replace(from, to);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
};

const filesToUpdate = [
  'src/data/siteContent.json',
  'src/data/events.json',
  'src/components/Home/Hero.jsx',
  'src/components/Home/Mission.jsx',
  'src/pages/Events/EventDetails.jsx',
  'src/components/layouts/Header.jsx',
  'src/components/layouts/Footer.jsx'
].map(f => path.join(__dirname, f));

filesToUpdate.forEach(replaceInFile);
