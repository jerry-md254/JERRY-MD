const fs = require('fs');
if (fs.existsSync('bot.env')) require('dotenv').config({ path: './bot.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
BOT_URL: process.env.BOT_URL || "https://raw.githubusercontent.com/jerry-md254/JERRY-MD-DATA/refs/heads/main/datafile.json",
AUTO_SITE: process.env.AUTO_SITE || "https://arslan-apis.vercel.app",
BAND_URL: process.env.BAND_URL || "https://raw.githubusercontent.com/jerry-md254/JERRY-MD-DATA/refs/heads/main/bandusers.json",
REPO_LINK: process.env.REPO_LINK || "https://github.com/jerry-md254/JERRY-MD",
REPO_NAME: process.env.REPO_NAME || "JERRY-MD",
BOT_NAME: process.env.BOT_NAME || "JERRY-MD",
DESCRIPTION: process.env.DESCRIPTION || "JERRY MD POWERFULL WHATSAPP BOT",
OWNER_NUMBER: process.env.OWNER_NUMBER || "22870437628",
OWNER_NAME: process.env.OWNER_NAME || "JERRY KING",
ST_SAVE: process.env.ST_SAVE || "JERRY-MD-STATUS-SERVER",
BIO_TEXT: process.env.BIO_TEXT || "JERRY-MD-BY-JERRY-KING-OFFICIAL",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*`STATUS SEEN BY JERRY-MD`* _*POWERD BY*_ *JERRY KING Official Whtsapp Bot*",
FOOTER: process.env.FOOTER || "JERRY-MD",
COPYRIGHT: process.env.COPYRIGHT || "*㋛ JERRY-MD BY JERRY-KING OFFICIAL*",
VERSION: process.env.VERSION || "9.0.0",
NEWSLETTER: process.env.NEWSLETTER || "120363406741941705@newsletter",
WA_CHANNEL: process.env.WA_CHANNEL || "https://whatsapp.com/channel/0029Vb6wIFEATRSwqmwEky2m",
INSTA: process.env.INSTA || "https://Instagram.com/visie_10",
ALIVE_IMG: process.env.ALIVE_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
OWNER_IMG: process.env.OWNER_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
CONVERT_IMG: process.env.CONVERT_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
AI_IMG: process.env.AI_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
SEARCH_IMG: process.env.SEARCH_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
DOWNLOAD_IMG: process.env.DOWNLOAD_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
MAIN_IMG: process.env.MAIN_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
GROUP_IMG: process.env.GROUP_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
FUN_IMG: process.env.FUN_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
TOOLS_IMG: process.env.TOOLS_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
OTHER_IMG: process.env.OTHER_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
MOVIE_IMG: process.env.MOVIE_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
NEWS_IMG: process.env.NEWS_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png",
PP_IMG: process.env.PP_IMG || "https://img.sanishtech.com/u/82c5beb887a5952725c5210e28cc6a87.png"
};
