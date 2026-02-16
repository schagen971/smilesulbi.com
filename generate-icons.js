const sharp = require('sharp');
const path = require('path');

const inputFile = 'fa.png';
const size = 512;
const radius = 100;

async function generateAll() {
  try {
    const inputPath = path.join(__dirname, inputFile);
    const roundedCorners = Buffer.from(
      `<svg><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" /></svg>`,
    );

    const base = sharp(inputPath).resize(size, size, { fit: 'cover' });

    // 1. public/favicon.ico (Legacy/Standard)
    await base
      .clone()
      .toFormat('png')
      .resize(32, 32)
      .toFile(path.join(__dirname, 'public/favicon.ico'));

    // 2. public/icon.png (Modern standard)
    await base
      .clone()
      .toFormat('png')
      .toFile(path.join(__dirname, 'public/icon.png'));

    console.log('Clean favicon.ico and icon.png generated in public/');
  } catch (err) {
    console.error(err);
  }
}

generateAll();
