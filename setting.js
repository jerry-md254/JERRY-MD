const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With JERRY-MD Here
SESSION_ID: process.env.SESSION_ID || "JERRY-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU9JQkNsQ1FEMjkxM3dRYUZuUldIWFM2S3FKKzhCSks0VDh1REFEVnlGND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDNxRFFoakhweXdnZmE1OU9rRnB2eUJMelB1Y1Y4S1M1YmVSeWNBVzZRZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5SHcyOU1Vek1hMVpJd0paR3F0R0JvVi9PMzBNaDB2dlN4MUNGSHJrUDNjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQU0yYlJHK1Qrc2g2WE1BV0ZyMFNKUXJoWWFMbU5LYjVwM25SQWRrMG5rPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktPOTNIRlppQlVEZCsvUHowM1VrZWxpT2RoRzhYRmZDaStOczBDUG40SGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind6Y2VNVFlVcUxhZmpzYWZxVmZ2b0JnSGJYOVM4c0t1NjByK3JFazlnVW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0owZ2FwSjNhcHA0NG9kMTl6R1V5MTRJeXVpSG9lZzVkVm1tVSs0bS9tQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic20yd1JlYWVjZUtUa0dWSEdZTzV0ZkFXalRHendobkFTbytWWXRmd0tDND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5rM0t6Q0wyV3B1elRBYVF5R1NXWWRHendldHJoNjJjNmU4ZWdSR1BLQjNkMnVwRXo1aVNKTXV3UGFsVG5Kd25tVE5uWXRmSFVFU0xMa0Nhb09MT0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6InZWU0NHTDhrZFJyd2twTTVVRXNVc1FiNHRqdWtOT05iWnZXaG8yQU1FOUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVkNGOFQzV0oiLCJtZSI6eyJpZCI6IjIyODcwNDM3NjI4OjY4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqkg8J2QifCdkITwnZCR8J2QkfCdkJgg8J2QivCdkIjwnZCN8J2QhiDwk4aqIiwibGlkIjoiMTA0ODc5NDYwNzUzNjI3OjY4QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkxkLzY0RkVJRHptODhHR0VZZ0FTZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZmZpRVcyNThmS1hCb25HNEd5MzJFWVMwbFZNaGhqUXZPT25WY2ZaclluND0iLCJhY2NvdW50U2lnbmF0dXJlIjoidy9ONkowNzBwS00yTlZzQWdRRDJ1NFQyZStHZzhwR21YdG1TN0ZCcVlmQk5hQnllZkhtZ21Nb0NVSlZmV2dWczRHTUMxM0h3REJFV1krZjdmaGd3QXc9PSIsImRldmljZVNpZ25hdHVyZSI6Ildoa0F5QVhDSWxEenF3a0N6MVRtSFVQb3ZzaUJBT2Joa2pHVFFQamw3MWlKSmp0SEQyNWg1Rmgyd2ZxUzBTUStDRHBJRFU0VEhxRjJydG9vU29uTkR3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTA0ODc5NDYwNzUzNjI3OjY4QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYMzRoRnR1Zkh5bHdhSnh1QnN0OWhHRXRKVlRJWVkwTHpqcDFYSDJhMkorIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQXNJRWdnTiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzY3NDQ4MzksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQUJJIn0=",
// JERRY MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// JERRY MD Api Key -- Add This To Your Api Key Form Api Site
API_KEY: process.env.API_KEY || "arslanmdofficialadmin",
// Auto Status Seen
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY JERRY-MD 🤍*",

AUTO_BIO: process.env.AUTO_BIO || "true",
// true if want welcome msg in groups
GOODBYE: process.env.GOODBYE || "false",
// true if want goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "JERRY-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "JERRY-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "22870437628",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "JERRY KING",

SEND_WELCOME: process.env.SEND_WELCOME || "true",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "true",
// make true for auto read message
READ_CMD_ONLY: process.env.READ_CMD_ONLY || "true",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti Calls
ANTI_CALL: process.env.ANTI_CALL || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 
 //Bot olways offline
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "22870437628",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",

ANTI_BOT: process.env.ANTI_BOT || "true",
// true for anti once view 

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// true for anti delete 
ANTI_DELETE_TYPE: process.env.ANTI_DELETE_TYPE || "same", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true",
// make it true for auto recoding 
AUTO_BLOCK: process.env.AUTO_BLOCK || "false"
// make it true for auto block
};







