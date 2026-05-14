import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = path.join(process.cwd(), 'public', 'images');

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      await processDirectory(fullPath);
    } else if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.png')) {
      const tempPath = fullPath + '.tmp';
      try {
        console.log(`Compressing ${file}...`);
        await sharp(fullPath)
          .resize({ width: 1200, withoutEnlargement: true }) // Resize if larger than 1200px wide
          .jpeg({ quality: 60, progressive: true }) // Compress heavily
          .toFile(tempPath);
        
        fs.renameSync(tempPath, fullPath); // Replace original
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      }
    }
  }
}

async function start() {
  console.log('Starting image compression...');
  await processDirectory(directoryPath);
  console.log('Finished image compression!');
}

start();
