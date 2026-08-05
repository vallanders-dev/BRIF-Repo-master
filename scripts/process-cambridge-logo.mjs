import sharp from 'sharp';

const input = 'public/images/cambridge-international.png';
const output = 'public/images/cambridge-international-white.png';

const img = sharp(input).ensureAlpha();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const a = data[i + 3];

  if (a === 0) continue;

  const min = Math.min(r, g, b);
  const max = Math.max(r, g, b);
  const isAchromatic = (max - min) < 18;

  if (isAchromatic) {
    data[i] = 255;
    data[i + 1] = 255;
    data[i + 2] = 255;
  }
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(output);

console.log('done', width, height);
