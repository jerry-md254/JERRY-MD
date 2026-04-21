const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With JERRY-MD Here
SESSION_ID: process.env.SESSION_ID || "JERRY-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUU2SXo0TkhOSkJzeXR5Yk12WjI3T3c1UllWUDNVbW9YWmlOUmdRQWEwVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3JVRXlxdDBMWTNQQzY1Z2FrT0MyNytOUzBpc0JaOXZlU3VaNTh4cTlsMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RDhreGZoTkVlNGJhb2N1MjJGMlJORXk5Y2hyU3B2WWVUQU1lQVNaV2tFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPK2xjZlV5djFITjNYYjVQT1BDUFp6c1VRQUw4WjY3RCt6Nk9QUTBOakZJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtCenA2TmozZGVrU2YrRERHcGZhTUY4ZUxFQ1dNMXRtWExkbVY4R05jVTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldXTmEwMEFpT0pwbVRMaDVCa05GWDdybFFXUFJqM3AyVEFHQW1udjVlRWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUZLMEZMQmFPR1NKdXN3dGR0V0RxTzZOZXRMRVRkdXZNdmRFaWhsdUYyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0tLVzJ4bTdzbk94VFR1d0JSdkRqMlJ0c1ZrcXNkVXEzTm1Yalc5ZVdtaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpPN0dOSTRKZW1zYzBIWGVnWDVPQUxkQWw0eFUyV0tMV090dS9OYXIwWVVMYWtQUDZoTmZwckIrenJCMG5OZWVHYkIySXJ6SENaZlFKWWM1S1FnVkJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjIsImFkdlNlY3JldEtleSI6Ikg5ZDBZVUoyaTRCalV3MmI5UWNWd21QSkhHQUlKN1grdG82MmhGMXhobkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiVldGSjJTU0ciLCJtZSI6eyJpZCI6IjIyODcwNDM3NjI4OjY3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCThqkg8J2QifCdkITwnZCR8J2QkfCdkJgg8J2QivCdkIjwnZCN8J2QhiDwk4aqIiwibGlkIjoiMTA0ODc5NDYwNzUzNjI3OjY3QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSkxkLzY0RkVNdnVtODhHR0VVZ0FTZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZmZpRVcyNThmS1hCb25HNEd5MzJFWVMwbFZNaGhqUXZPT25WY2ZaclluND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiN0VmWDIxNVZkZkZvWHlBVkhqMStPZWZUTTN2WU5vZjVZdVRPNmNGZDJ3ZFJkcHFGdnJ1UUUxclZtRXF2NnR5dFBSRFpXa0hyOFVjR280VzZQTXVYRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IjJUZXp5WlBxV3dLcWJxU0xwZ3llODdyUmZvNDFsR014K0F1ZmpEaGVzU1Zmb2FwcEZWUmd3RVNRZGF3Z0VZSGM1djkyeno5SjBUMGNleUhucXF1Q0RBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTA0ODc5NDYwNzUzNjI3OjY3QGxpZCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYMzRoRnR1Zkh5bHdhSnh1QnN0OWhHRXRKVlRJWVkwTHpqcDFYSDJhMkorIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQXNJRWdnTiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzY3NDQyNzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQUJJIn0=",
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







