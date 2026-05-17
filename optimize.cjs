const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'public');
const outputDir = path.join(__dirname, 'cdn');

// Function to recursively get all files in a directory
const getAllFiles = function(dirPath, arrayOfFiles) {
  let files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

// Ensure CDN directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = getAllFiles(inputDir);

const processFiles = async () => {
  for (const file of files) {
    // Only process images
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const relativePath = path.relative(inputDir, file);
      const parsedPath = path.parse(relativePath);
      
      // Construct output directory path
      const outDir = path.join(outputDir, parsedPath.dir);
      
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }

      const outFilePath = path.join(outDir, `${parsedPath.name}.webp`);

      try {
        await sharp(file)
          .webp({ quality: 80 })
          .toFile(outFilePath);
        console.log(`Optimized and converted: ${relativePath} -> ${path.join(parsedPath.dir, parsedPath.name + '.webp')}`);
        
        // Remove original file after successful conversion
        fs.unlinkSync(file);
        console.log(`Deleted original: ${relativePath}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
};

processFiles();
