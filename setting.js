const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
// Add Your Session Id Start With JERRY-MD Hear
SESSION_ID: process.env.SESSION_ID || "JERRY-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUlZOERCd2Nzb0dVNHd3MlZsZ29tVkZ4T0UwaWp2Z1lGWlUyakovb01FZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTg4dTB0VVRaRWlwK2FhVEw5SDljQW44Uzh6Z3BaOVlvSXAzRlp2UG9IOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUC92c0FxMjlGTlVkOUNRalRyc1ZrOUpuMmVrRHROSGZlWk0vdFE4cDB3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUcUhDejlnR1Z0cGdLbkNIaEZ4eUk0dHVaend3S2RKcWw5MmNOUS9VOFJrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNJOG10amlmWnY4RWpXNlJLaVV4YWNZRTdzc2VDY2VRR3p4WFFMNXM1MVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNzaVVpWkcxejM2RnYvUGl2a0tFVEpOTENBQko4YlN2SWNaSlg3RHVLbTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0luWXdUTm1IOUVTRXlZMnlRVUpveXVVQmRFb0VGcmttM3dzT1Y4dWVtdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMFR0Zkpac1FwSXI5UWhxMUhhN3FJMmFzMWZIeGxoRzVRU29DaWdQc1F6VT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYwNnNnTTdRNFVxalo2UjZtWGVsaE9kKzU5TG44bm4wcTRISUNzWmNzT1YwNFo0OFh6S094Ymo3a3dwZzVReW5ranNPTnVXcktNMUhyUzBIVDNFaEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM5LCJhZHZTZWNyZXRLZXkiOiJpbWxkSGpxeFE0ZFlsclg1czdnM0JBaTJRRjdnRkhkUWpUU3J6WS84eGNjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IjQxRldHWEdDIiwibWUiOnsiaWQiOiIyMjg3MDQzNzYyODo3MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4apIPCdkInwnZCE8J2QkfCdkJHwnZCYIPCdkIrwnZCI8J2QjfCdkIYg8JOGqiIsImxpZCI6IjEwNDg3OTQ2MDc1MzYyNzo3MEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pMZC82NEZFSkhsbmM4R0dFZ2dBU2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZmaUVXMjU4ZktYQm9uRzRHeTMyRVlTMGxWTWhoalF2T09uVmNmWnJZbjQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkIraGoxTERlTHRJcTErUTdGaEkwYmlmOHdhRU9FQ3BxcDRjb1UvSThlOUZIOTRab2NLZVhQbGRXV2RPMk5tL0pJeVhaTFNKL0hzbUVFWjNYOHpSWUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzVjJ6eXhDb0M5V2FVbXZzZ1I3ZHhKZktCTDhEY2Z1alZ4SFVWREd3bHg2WnRtSzAzb3NGV1F4UnhVYjd6MkMrRE5MaDdiYmNlWENCcmxyZkNuL3RDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjEwNDg3OTQ2MDc1MzYyNzo3MEBsaWQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDM0aEZ0dWZIeWx3YUp4dUJzdDloR0V0SlZUSVlZMEx6anAxWEgyYTJKKyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FzSUVnZ04ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzc2Nzc1ODMyfQ==",
// KIRA MD Api Site Url
API_BASE: process.env.API_BASE || "https://arslan-apis.vercel.app/",
// KIRA MD Api Key -- Add This To Your Api Key Form Api Site
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







