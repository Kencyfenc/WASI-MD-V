//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkcwSG1pdUQzMUZlSzRaaVN4WVkydTY4UEpvNkgxUEJkS3RqRlBwMkRuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmZIT0NvMVBIT214SnM0eVY0TjdEdmZ4T0QrQWZlY01kTG45c0FUQ2V3WT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRVYwVTdLRHZCd3NvV2t1dnFzSHJTcWFjMFhub3A0aDE2RkRDcHJ2RzBFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3YVovMWVKS0g0V0E5N2Q1TW1uVjd5dFNEcldoeXpBMFcrWmwwOW5sQVNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitHWk9ud2UxZjdsM0s2bDlQaUJTQXg3amMzMUdjVDdVOVRkd29pU0pHWG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNPZ1lEaFpHOUlZU3l3cmk2MWQ4c0s0R3RTVXQveUF3NlJaUFRsRXA1aDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU9zdVRrNEczd2VhcnhmejBFbTZacmZjUXpRUjR5eGlhaUhWaWRxTGMydz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGZUUFp6alk1TzhJSjVGcVRad0dvSWtyVDcvbkNtamtMSjRqWWRaSHRnST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdVYVM5T2VnSHprU2FySXIzdHRIbzJtcjFZT1RKalpzWUlHeitQSlFxYTAvVERINmpWYWhTeVRQbkQ1Y1F3aVREdWlDZzN4M3JrV3FvWUoyaVM4WEFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM4LCJhZHZTZWNyZXRLZXkiOiJkSkJsNXQzaGpvamszU2VlU3kxQ2FkQS90S1VPazl4d1U1cU96YVV6N1JBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXYS04d0gweFNGcTlMZUxiRklZall3IiwicGhvbmVJZCI6IjhjNmExYjFkLWY3NGYtNGYxNS04MTQxLWU2MzhhNDQyOTUzYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKN1BlQmlNd0tKTGJ1eVhFdTFBaDdYd1ZzSkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaC9kNlJZbGZQM01LMHgvSFNSNHZpR3FiY1BvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjUxWVAxUTYzIiwibWUiOnsiaWQiOiIxNTYxNzEwMTA1MjozM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZel8J2XovCdl6XwnZei8J2XofCdl6LwnZeULi4u8J2Xly4uLvCdl6B78J2Xp/Cdl5fwnZeUfSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT2FFanJBSEVMek4zN2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNTExME5jd2tFM1dmU1pUWGZwQjZ1NUorR0FVRElUL1Z5d3VscWFyaytVTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVnFTY3o0WTBOU21ycGFVQi9KMGN0L2lrYzRIL0k1SytRYzRiajlYamtpUUxic3FONk5BMGtrd3RUWjVzeUFEeVh1ZjhLWm5ZZHdpakJSaGdhMlVqQVE9PSIsImRldmljZVNpZ25hdHVyZSI6IjV6WVo4K25abDB6a2lMWTRHTzBSY21pRHF3cXRyby8yRWdMeUtTOG5JR0tKVW1jYUhvMWJGNnFJOWtvdDluSzJMcVBHeUVxdDlIbDdaVUxMR045UUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTU2MTcxMDEwNTI6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZWRkZERYTUpCTjFuMG1VMTM2UWVydVNmaGdGQXlFLzFjc0xwYW1xNVBsRCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTYxOTY1N30=";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "15617101052@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "15617101052";
global.owner = process.env.OWNER_NUMBER || "15617101052";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUNsdGpYZ0trTWpMMVVCWDFHaVdJOUJvK0ZtRWNEQXBQdm9sSTVXdTlGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEhLd0lvdVdEcGxhdy9BN0hTQzBWNjhiTlFONnJCOVZ6UVZyNDdLN3B6ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIySXpIck1mSzk3SUx3SU5JUnFVMGRyK1RKTndibGxBQmNPZGxZYlpiZG44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3d1RXbkdsVmdkK3RLMjBUTFZZQkg5QzY0RUdWK3B5UEtRaHR4MTh2eG1BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVGbVhSM3JmdGsyRWNGeXVCRlcvWHdueWhxUnRnV0UzbTR2RkV2TkI4bTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZ0RWdLL1F3ZCtjTlNRRXJKdXFaWDVWQkFuWXpYbnY3NFJ1Z3RLZmY3UUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU1zNnlRZjc2aGQ3ekErTWFzV29SR3FyaDJBMVREbkZKdVd1NnlWYlFWST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTY5UFZaelN3dzdOSFNEeG1nL2RWWmlDUmZxKzNhRjVOTDd6RERNQ0dGbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktzVHBiQ0d6allxdUNlTFhNejFMRWRyOGFvUmVEMlJ5b21BVFJjOXpwdGJMR0FtSTBCSThCb09wUEdITzVEekNydW5ESDhFNkNHOExMVUtWb1FVT2l3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6IlY0c3JxODlQU2ZDR21SbzArRklqaDZVdW1ROGhQeVp6RFN2WkJJVFRkRWM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJOd0lwZTQ2UlhPYU1ZTUNJSXhzU1EiLCJwaG9uZUlkIjoiNGFhYzEzOTgtOThlZi00OTA4LWEyYzEtYjkwNTdjMjNkN2MwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikt3MmQ1Ui9obE5Zc28rMWQyUWRNQWIzQkxEMD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaWXF1cEEwRjNaRWZ1Z1cyNTliTC9CZTU0cVk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVEpRVDFLQTUiLCJtZSI6eyJpZCI6IjE1NjE3MTAxMDUyOjMwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdl6XwnZei8J2XpfCdl6LwnZeh8J2XovCdl5QuLi7wnZeXLi4u8J2XoHvwnZen8J2Xl/Cdl5R9In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOK0VqckFIRUlUKzNyZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1MTEwTmN3a0UzV2ZTWlRYZnBCNnU1SitHQVVESVQvVnl3dWxxYXJrK1VNPSIsImFjY291bnRTaWduYXR1cmUiOiI4T1RoUlV3ZzJBSFZJVVRLU29TYXVTUjBZTHlUNzRyYmJySFJ2SXAycUg5WEZCTS9mT09FajdCK21KYlRzU1FrRGRTWW11K0hUQzhaMTM5NG9CM3VBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiL21GVHhBQWdPNHVQNzVCWkp6b3dCSHJGOTc2eHlDdUF6Tk1PdlN2RW1ubm9xQjBrV2xjT0RnVS9zOTFwNDIxbHh0WndrendNVkplRXRqS2IzQ1BMaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxNTYxNzEwMTA1MjozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlZGRkRFhNSkJOMW4wbVUxMzZRZXJ1U2ZoZ0ZBeUUvMWNzTHBhbXE1UGxEIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NjA5NDkwfQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-RORONADM-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "WASO",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐖𝐀𝐒𝐈-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "WASI",
  errorChat: process.env.ERROR_CHAT || "15617101052",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
