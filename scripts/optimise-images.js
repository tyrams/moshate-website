const sharp = require("sharp");
const path = require("path");

const images = [
  { input: "public/assets/images/hero/hero-1.jpg", width: 1920 },
  { input: "public/assets/images/black-businesswoman-shaking-hands-with-male-partner.jpg", width: 1920 },
  { input: "public/assets/images/three-serious-partners-watching-presentation-digital-tablet.jpg", width: 1920 },
  { input: "public/assets/images/Homepage - picture 3.jpg", width: 1200 },
  { input: "public/assets/images/Strategy in Action - pictures.jpg", width: 1200 },
  { input: "public/assets/images/businessman-colleague-shaking-hands.jpg", width: 1200 },
  { input: "public/assets/images/standard-quality-control-concept-m - Operational Excellence.jpg", width: 1200 },
  { input: "public/assets/images/serious-diverse-business-colleagues-discussing-project - Partnership.jpg", width: 1200 },
  { input: "public/assets/images/entrepreneurs-shaking-hands-solar-panel-manufacturing-plant-after-reaching-agreement.jpg", width: 1200 },
  { input: "public/assets/images/hand-with-support-gears-isolated - Operational Excellence.jpg", width: 1200 },
  { input: "public/assets/images/homepage - 4 Pictures 2.jpg", width: 1200 },
  { input: "public/assets/images/Homepage - 4 pictures.jpg", width: 1200 },
  { input: "public/assets/images/Resource augmation.jpg", width: 1200 },
  { input: "public/assets/images/hero/banner-top.jpg", width: 1920 },
];

async function main() {
  await Promise.all(
    images.map(({ input, width }) =>
      sharp(input)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 80, effort: 4 })
        .toFile(input.replace(/\.(jpe?g)$/i, ".webp")),
    ),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
