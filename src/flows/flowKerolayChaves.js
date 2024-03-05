const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
} = require("@bot-whatsapp/bot");

const path = require("path");

try {
  const flowKerolayChaves = addKeyword([
    "Kerolay Chaves",
    "kerolay chaves",
    "kerolay",
    "kerolai",
  ]).addAnswer("Aquí tienes tus imágenes *PILLIN*", {
    media:
      "C:/Users/User/OneDrive/Escritorio/base-baileys-postgres/src/public/img/kerolay/XzxMLOT1.jpeg",
  });
  return flowKerolayChaves;
} catch (error) {
  console.log(error);
}
module.exports = flowKerolayChaves;

// path.join(
//     __dirname,
//     "..",
//     "public",
//     "img",
//     "kerolay",
//     "XzxMLOT1.jpeg"
//   )
