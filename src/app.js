const {
  createBot,
  createProvider,
  createFlow,
  addKeyword,
} = require("@bot-whatsapp/bot");
const QRPortalWeb = require("@bot-whatsapp/portal");
const BaileysProvider = require("@bot-whatsapp/provider/baileys");
const PostgreSQLAdapter = require("@bot-whatsapp/database/postgres");
require("dotenv").config();
const path = require("path");

// FLOWS
// const flowKerolayChaves = require("./flows/flowKerolayChaves");

// VARIABLES DE CONEXIÓN
const type = process.env.POSTGRES_DB_HOST;
const db_user = process.env.POSTGRES_DB_USER;
const db_pass = process.env.POSTGRES_DB_PASSWORD;
const db_name = process.env.POSTGRES_DB_NAME;
const db_port = process.env.POSTGRES_DB_PORT;

// const flowGracias = addKeyword(["gracias", "grac"]).addAnswer(
//   ["Hola guapo, espero lo disfrutes 🥵"],
//   null,
//   null,
//   null
// );

// const flowAdios = addKeyword(["adiós", "adios", "chao", "cerrar"]).addAnswer(
//   [
//     "De nada, tenga un buen día",
//     "Escriba *Iniciar* para volver al menú inicial.",
//   ],
//   null,
//   null,
//   null
// );

// const flowKerolayChaves = addKeyword([
//   "Kerolay Chaves",
//   "kerolay chaves",
//   "kerolay",
//   "kerolai",
// ]).addAnswer("Aquí tienes tus imágenes *PILLIN*", {
//   media:
//     "C:/Users/User/OneDrive/Escritorio/base-baileys-postgres/src/public/img/kerolay/XzxMLOT1.jpeg",
// });

const flowString = addKeyword(
  "Kerolay Chaves",
  "Kerolay Chavez",
  "Kerolay Chávez"
).addAnswer("Este mensaje envia una imagen", {
  media: "https://s40.erome.com/1359/e9O7SHex/yEjmvkwr.jpeg?v=1702853667",
});

const flowPrincipal = addKeyword(["hola", "ole", "alo"])
  .addAnswer("🙌 Hola bienvenido a este *Chatbot*")
  .addAnswer(
    [
      "te comparto los siguientes links de interes sobre cosas interesantes",
      "👉 *Kerolay Chaves*",
    ],
    null,
    null,
    [flowString]
  );

const main = async () => {
  const adapterDB = new PostgreSQLAdapter({
    host: "localhost",
    user: "postgres",
    database: "chatbot-wp",
    password: "123",
    port: 5432,
  });
  const adapterFlow = createFlow([flowPrincipal]);
  const adapterProvider = createProvider(BaileysProvider);
  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });
  QRPortalWeb();
};

main();
