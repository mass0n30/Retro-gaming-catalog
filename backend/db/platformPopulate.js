// prisma/seed.js
const { prisma } = require('./prismaClient');

const platforms = [
  { id: 32, name: "Sega Saturn", releaseOrder: 6, abbreviation: "Saturn", generation: 5, slug: "saturn", platformLogo: 49 },
  { id: 8, name: "PlayStation 2", releaseOrder: 10, abbreviation: "PS2", generation: 6, slug: "ps2", platformLogo: 254 },
  { id: 23, name: "Dreamcast", releaseOrder: 9,  abbreviation: "DC", generation: 6, slug: "dc", platformLogo: 270 },
  { id: 24, name: "Game Boy Advance", releaseOrder: 12, abbreviation: "GBA", generation: 6, slug: "gba", platformLogo: 256 },
  { id: 11, name: "Xbox", releaseOrder: 13, abbreviation: "XBOX", generation: 6, slug: "xbox", platformLogo: 266 },
  { id: 20, name: "Nintendo DS", releaseOrder: 14, abbreviation: "NDS", generation: 7, slug: "nds", platformLogo: 245 },
  { id: 22, name: "Game Boy Color", releaseOrder: 8, abbreviation: "GBC", generation: 5, slug: "gbc", platformLogo: 273 },
  { id: 18, name: "Nintendo Entertainment System", releaseOrder: 1,  abbreviation: "NES", generation: 3, slug: "nes", platformLogo: 816 },
  { id: 21, name: "Nintendo GameCube", releaseOrder: 11, abbreviation: "NGC", generation: 6, slug: "ngc", platformLogo: 262 },
  { id: 33, name: "Game Boy", releaseOrder: 3,  abbreviation: "Game Boy", generation: 4, slug: "gb", platformLogo: 274 },
  { id: 7, name: "PlayStation", releaseOrder: 5, abbreviation:"PS1", generation: 5, slug: "ps", platformLogo: 803 },
  { id: 29, name: "Sega Mega Drive/Genesis", releaseOrder:2 ,abbreviation: "Genesis/MegaDrive", generation: 4, slug: "genesis-slash-megadrive", platformLogo: null },
  { id: 4, name: "Nintendo 64", releaseOrder: 7, abbreviation: "N64", generation: 5, slug: "n64", platformLogo: 260 },
  { id: 19, name: "Super Nintendo Entertainment System", releaseOrder: 4, abbreviation: "SNES", generation: 4, slug: "snes", platformLogo: 106 },
  { id: 5, name: "Wii", releaseOrder:15, abbreviation: "Wii", generation: 7, slug: "wii", platformLogo: 326 }
];

async function seed() {
  for (const platform of platforms) {
    await prisma.platform.upsert({
      where: { id: platform.id },
      update: {},
      create: platform
    });
  }
  console.log("All platforms seeded");
}

seed()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect());

  module.exports = {allPlatFormsData:platforms};
