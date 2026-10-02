import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const targetDirs = [
    'Beach',
    'Beach Activities',
    'BEDOUIN TENT',
    'Diving',
    'Gym',
    'Lobby',
    'Reciption',
    'Resturant',
    'Rooms',
    'salon',
    'Swimming pool',
    'Views'
];

const publicDir = path.resolve('public');

async function processDirectory(dirName) {
    const dirPath = path.join(publicDir, dirName);
    if (!fs.existsSync(dirPath)) {
        console.log(`Directory does not exist: ${dirPath}`);
        return;
    }

    const files = fs.readdirSync(dirPath);
    console.log(`Processing ${dirName} (${files.length} files)...`);

    for (const file of files) {
        if (!/\.(jpe?g|png)$/i.test(file)) continue;

        const filePath = path.join(dirPath, file);
        const inputBuffer = fs.readFileSync(filePath);
        const originalSizeKB = (inputBuffer.length / 1024).toFixed(1);

        try {
            const image = sharp(inputBuffer);
            const metadata = await image.metadata();

            // Resize down if wider than 1600px or taller than 1200px
            let pipeline = sharp(inputBuffer)
                .rotate() // auto-orient by EXIF
                .resize({
                    width: 1600,
                    height: 1200,
                    fit: 'inside',
                    withoutEnlargement: true
                });

            let outputBuffer;
            if (/\.png$/i.test(file)) {
                outputBuffer = await pipeline.png({ quality: 85, compressionLevel: 8 }).toBuffer();
            } else {
                outputBuffer = await pipeline.jpeg({ quality: 82, progressive: true, mozjpeg: true }).toBuffer();
            }

            fs.writeFileSync(filePath, outputBuffer);
            const newSizeKB = (outputBuffer.length / 1024).toFixed(1);
            const savings = (((inputBuffer.length - outputBuffer.length) / inputBuffer.length) * 100).toFixed(1);
            console.log(`  ✓ ${file}: ${originalSizeKB} KB -> ${newSizeKB} KB (${savings}% smaller, was ${metadata.width}x${metadata.height})`);
        } catch (err) {
            console.error(`  ✗ Error optimizing ${file}:`, err.message);
        }
    }
}

async function main() {
    console.log('Starting image optimization...');
    let totalInitial = 0;
    for (const dir of targetDirs) {
        await processDirectory(dir);
    }
    console.log('Image optimization complete!');
}

main();
