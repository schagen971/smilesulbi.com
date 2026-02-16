const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = 'Gemini_Generated_Image_9rwsim9rwsim9rws (1).png';
const outputDir = 'src/app';
const outputFile = 'icon.webp';

async function processImage() {
  try {
    const inputPath = path.join(__dirname, inputFile);
    const outputPath = path.join(__dirname, outputDir, outputFile);

    console.log(`Processing ${inputPath}...`);

    // Rounded corners: We can create a rounded rectangle mask
    // But for simplicity and standard 'rounded corners', let's just use sharp's composite or resize
    // Actually, 'rounded corners' usually implies a mask.
    // Let's create a 512x512 image.

    const size = 512;
    const radius = 100; // Rounded corner radius

    // Create a rounded rectangle mask SVG
    const roundedCorners = Buffer.from(
      `<svg><rect x="0" y="0" width="${size}" height="${size}" rx="${radius}" ry="${radius}" /></svg>`,
    );

    await sharp(inputPath)
      .resize(size, size, { fit: 'cover' })
      .composite([
        {
          input: roundedCorners,
          blend: 'dest-in',
        },
      ])
      .webp({ quality: 80 }) // Compress/optimize
      .toFile(outputPath);

    console.log(`Favicon created at ${outputPath}`);

    // Also create a smaller public/favicon.ico just in case for legacy, but icon.webp in app dir handles most modernize
    // Next.js handles icon.webp in app/ automatically.
  } catch (error) {
    console.error('Error processing image:', error);
  }
}

processImage();
