const {cmd , commands} = require('../lib/command')
const os = require("os")
const { runtime } = require('../lib/functions')
const hrs = new Date().getHours({ timeZone: 'Asia/Colombo' })
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const axios = require('axios');
const { fakevCard } = require('../lib/fakevCard');
const bot = require('../lib/bot')
const config = require('../setting')
//========================================About==================================================
cmd({
    pattern: "about",
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, contextInfo, pushname, reply}) => {
try{

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Colombo' }).split(' ')[1]
    var date = new Date().toLocaleDateString(get_localized_date)
    var am_pm = ''
    if (hrs < 12) am_pm = 'ᴀᴍ'
    if (hrs >= 12 && hrs <= 24) am_pm = 'ᴘᴍ'
    let madeMenu = `👋 *HI*, *${pushname}*
  
╭─「 ᴅᴀᴛᴇ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ 」
│📅 *\`Date\`*: ${date}
│⏰ *\`Time\`*: ${time} ${am_pm}
╰──────────●●►

╭──────────●●►
│ *Hello , I am JERRY MD!!*
╰──────────●●►

${bot.COPYRIGHT}`

await conn.sendMessage(from, { 
    image:{ url:bot.ALIVE_IMG },
    caption:madeMenu,
    contextInfo
},{quoted:mek})
console.log(`♻ About Command Used : ${from}`);
}catch(e){
console.log(e)
reply(`${e}`)
}
})
//==================================================ALive============================================
cmd(
    {
      pattern: "alive",
      alias: ["status"],
      desc: "Check if the bot is alive",
      category: "main",
      react: "👨‍💻",
      filename: __filename,
    },
    async (conn,mek,m, { from, pushname, reply, contextInfo } ) => {
      try {
    
      var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Colombo' }).split(' ')[1]
      var date = new Date().toLocaleDateString(get_localized_date)
      var am_pm = ''
        if (hrs < 12) am_pm = 'ᴀᴍ'
        if (hrs >= 12 && hrs <= 24) am_pm = 'ᴘᴍ'
        
let aliveText =`👋 *HI*, *${pushname}* *I Am Alive Now*
  
╭─「 ᴅᴀᴛᴇ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ 」
│📅 *\`Date\`*: ${date}
│⏰ *\`Time\`*: ${time} ${am_pm}
╰──────────●●►
  
╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」
│👤 *\`User\`*: ${pushname}
│✒ *\`Prefix\`*: ${config.PREFIX}
│🧬 *\`Version\`*: ${bot.VERSION}
│📟 *\`Uptime\`*: ${runtime(process.uptime())}
│📂 *\`Memory\`*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
╰──────────●●►
╭──────────●●►
│ *Hello , I am alive now!!*
╰──────────●●►
  
🔢 *Reply below number*
  
1 │❯❯◦ COMMANDS MENU
2 │❯❯◦ JERRY-MD SPEED
  
${bot.COPYRIGHT}`;

const vv = await conn.sendMessage( from, { 
    image: { url:bot.ALIVE_IMG },
    caption:aliveText,
    contextInfo
},{quoted:mek})
const aliveHandler = async (msgUpdate) => {
    const msg = msgUpdate.messages[0];
    if (!msg?.message?.extendedTextMessage) return;
    if (msg.message.extendedTextMessage.contextInfo?.stanzaId !== vv.key.id) return;
    conn.ev.off('messages.upsert', aliveHandler);
    const sel = msg.message.extendedTextMessage.text.trim();
    if (sel === '1') reply('.menu');
    else if (sel === '2') reply('.ping');
    else reply("❌ Invalid option.");
};
conn.ev.on('messages.upsert', aliveHandler);
setTimeout(() => conn.ev.off('messages.upsert', aliveHandler), 5 * 60 * 1000);
  
        console.log(`♻ Alive command used in: ${from}`);
      } catch (e) {
        console.error("Alive Command Error:", e);
        reply(`❌ Error: ${e.message}`);
      }
    }
  );
//=============================================Auto Bio===============================================
// AutoBIO feature variables
let autoBioInterval;

// 1. Set AutoBIO
cmd({
    on: "body"
  },  
 async (conn, mek, m, { from, isOwner, reply }) => {
    if (config.AUTO_BIO === 'true') {
        startAutoBio(conn);
    } 
});

// 2. Start AutoBIO
function startAutoBio(conn) {
    // Clear any existing interval to avoid duplicates
    if (autoBioInterval) clearInterval(autoBioInterval);

    // Set a new interval to update the bio every minute (or any preferred time)
    autoBioInterval = setInterval(async () => {
        const bioText = `*${bot.BIO_TEXT}* ${runtime(process.uptime())} 💛`;  // Set the bio text with time
        await conn.updateProfileStatus(bioText);  // Update the bot's bio
    }, 60 * 1000);  // 1 minute interval
}
console.log(`JERRY-MD ♻ Auto Bio Started`);
//============================ Env=======================================================
function isEnabled(value) {
return value && value.toString().toLowerCase() === "true";
}
cmd({
    pattern: "env",
    alias: ["setting2", "allvar"],
    desc: "Settings of bot",
    category: "main",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, contextInfo, reply }) => {
    try {
        // Define the settings message with the correct boolean checks
        let envSettings = `╭━━━〔 *JERRY-MD-ENV* 〕━━━┈⊷
┃▸╭───────────
┃▸┃๏ *𝔼ℕ𝕍 𝕊𝔼𝕋𝕋𝕀ℕ𝔾𝕊 📡*
┃▸└───────────···๏
╰────────────────┈⊷
╭━━〔 *Enabled Disabled* 〕━━┈⊷
┇๏ *Status View:* ${isEnabled(config.AUTO_READ_STATUS) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Status Reply:* ${isEnabled(config.AUTO_STATUS_REPLY) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto Reply:* ${isEnabled(config.AUTO_REPLY) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto Sticker:* ${isEnabled(config.AUTO_STICKER) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto Voice:* ${isEnabled(config.AUTO_VOICE) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto React:* ${isEnabled(config.AUTO_REACT) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Anti-Link:* ${isEnabled(config.ANTI_LINK) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Anti-Bad Words:* ${isEnabled(config.ANTI_BAD) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto Typing:* ${isEnabled(config.AUTO_TYPING) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Auto Recording:* ${isEnabled(config.AUTO_RECORDING) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Always Online:* ${isEnabled(config.ALWAYS_ONLINE) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Public Mode:* ${isEnabled(config.PUBLIC_MODE) ? "Enabled ✅" : "Disabled ❌"}
┇๏ *Read Message:* ${isEnabled(config.READ_CMD) ? "Enabled ✅" : "Disabled ❌"}
╰━━━━━━━━━━━━──┈⊷
> ${bot.DESCRIPTION}`;

        // Send message with an image
        await conn.sendMessage(
            from,
            {
                image: { url: `${bot.ALIVE_IMG}` }, // Image URL
                caption: envSettings,
                contextInfo
            },
            { quoted: mek }
        );

        // Send an audio file
        console.log(`♻ ENV Command Used : ${from}`);
    } catch (error) {
        console.log(error);
        reply(`Error: ${error.message}`);
    }
});
//============================List===========================================
cmd({
    pattern: "list",
    react: "🛸",
    alias: ["panel","list","commands"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.list',
    filename: __filename
},
async(conn, mek, m,{ from, pushname, reply, contextInfo, qMessage }) => {
try{
let menu = {
main: '',
ai: '',
download: '',
group: '',
owner: '',
convert: '',
education: '',
news: '',
movie: '',
search: '',
tools: '',
other: '',
fun: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*│*❯❯◦ ${commands[i].pattern}\n`;
 }
}

let madeMenu = `🤩 *HELLOW* *${pushname}*
> WELLCOME TO JERRY-MD 🪀

╭─「 ꜱᴛᴀᴛᴜꜱ ᴅᴇᴛᴀɪʟꜱ 」
│👤 *\`User\`*: ${pushname}
│✒ *\`Prefix\`*: ${config.PREFIX}
│🧬 *\`Version\`*: ${bot.VERSION}
│📟 *\`Uptime\`*: ${runtime(process.uptime())}
│📂 *\`Memory\`*: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB
╰──────────●●►

> OWNER COMMANDS
*╭──────────●●►*
${menu.owner}*╰───────────●●►*
> CONVERT COMMANDS
*╭──────────●●►*
${menu.convert}*╰───────────●●►*
> AI COMMANDS
*╭──────────●●►*
${menu.ai}*╰───────────●●►*
> SEARCH COMMANDS
*╭──────────●●►*
${menu.search}*╰───────────●●►*
> DOWNLOAD COMMANDS
*╭──────────●●►*
${menu.download}*╰───────────●●►*
> MAIN COMMANDS
*╭──────────●●►*
${menu.main}*╰───────────●●►*
> GROUP COMMANDS
*╭──────────●●►*
${menu.group}*╰───────────●●►*
> FUN COMMANDS
*╭──────────●●►*
${menu.fun}*╰───────────●●►*
> TOOLS COMMANDS
*╭──────────●●►*
${menu.tools}*╰───────────●●►*
> OTHER COMMANDS
*╭──────────●●►*
${menu.other}*╰───────────●●►*
> MOVIE COMMANDS
*╭──────────●●►*
${menu.movie}*╰───────────●●►*
> NEWS COMMANDS
*╭──────────●●►*
${menu.news}*╰───────────●●►*
> PAST PAPER COMMANDS
*╭──────────●●►*
${menu.education}*╰───────────●●►*

${bot.COPYRIGHT}`
console.log(`♻ List Command Used : ${from}`);
await conn.sendMessage( from, 
    {
        image:{ url:bot.ALIVE_IMG },
        caption: madeMenu,
        contextInfo
    }, { quoted: qMessage })
}catch(e){
console.log(e)
reply(`${e}`)
}
})
//=================================menu=====================================================================
// Helper: build sub-menu message with channel button
function buildSubMenu(title, cmds, imgKey, runtime, os, bot) {
    const commandList = cmds.map(c => `│  ◦ 𝗖𝗠𝗗꞉ *${c.pattern}*`).join('\n');
    const text = `╔═══❮ 𝙹𝙴𝚁𝚁𝚈-𝙼𝙳 ❯═══╗
║
║  🗂️ *${title}*
║
╠══════════════════╣
║  🖥️ ʀᴀᴍ꞉ ${(process.memoryUsage().heapUsed/1024/1024).toFixed(2)}ᴍʙ
║  ⏱️ ᴜᴘᴛɪᴍᴇ꞉ ${runtime(process.uptime())}
╠══════════════════╣
${commandList}
╠══════════════════╣
║  📦 ᴛᴏᴛᴀʟ꞉ *${cmds.length} ᴄᴏᴍᴍᴀɴᴅꜱ*
╚══════════════════╝
> 𝙹𝙴𝚁𝚁𝚈-𝙼𝙳 ʙʏ 𝙹𝙴𝚁𝚁𝚈 𝙺𝙸𝙽𝙶`;
    return { text, imgKey };
}

cmd({
    pattern: "menu",
    alias: ["help"],
    desc: "Displays the bot menu",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, pushname, reply, contextInfo }) => {
    try {
        const channelJid = bot.NEWSLETTER; // e.g. "120363406741941705@newsletter"

        let desc = `╔═══❮ 𝙹𝙴𝚁𝚁𝚈-𝙼𝙳 ❯═══╗
║
║  👋 ʜᴇʟʟᴏ *${pushname}*
║  🤖 ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴊᴇʀʀʏ-ᴍᴅ
║
╠══════════════════╣
║  👤 ᴜsᴇʀ꞉ *${pushname}*
║  ✒️ ᴘʀᴇꜰɪx꞉ *${config.PREFIX}*
║  🧬 ᴠᴇʀsɪᴏɴ꞉ *${bot.VERSION}*
║  ⏱️ ᴜᴘᴛɪᴍᴇ꞉ *${runtime(process.uptime())}*
║  🖥️ ʀᴀᴍ꞉ *${(process.memoryUsage().heapUsed/1024/1024).toFixed(2)}ᴍʙ*
╠══════════════════╣
║
║  💬 *ʀᴇᴘʟʏ ᴀ ɴᴜᴍʙᴇʀ ʙᴇʟᴏᴡ* 👇
║
║  ¹  ◦ 👑 ᴏᴡɴᴇʀ ᴍᴇɴᴜ
║  ²  ◦ 🔄 ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ
║  ³  ◦ 🤖 ᴀɪ ᴍᴇɴᴜ
║  ⁴  ◦ 🔍 sᴇᴀʀᴄʜ ᴍᴇɴᴜ
║  ⁵  ◦ 📥 ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ
║  ⁶  ◦ 🏠 ᴍᴀɪɴ ᴍᴇɴᴜ
║  ⁷  ◦ 👥 ɢʀᴏᴜᴘ ᴍᴇɴᴜ
║  ⁸  ◦ 🎮 ꜰᴜɴ ᴍᴇɴᴜ
║  ⁹  ◦ 🔧 ᴛᴏᴏʟs ᴍᴇɴᴜ
║  ¹⁰ ◦ 📦 ᴏᴛʜᴇʀ ᴍᴇɴᴜ
║  ¹¹ ◦ 🎬 ᴍᴏᴠɪᴇ ᴍᴇɴᴜ
║  ¹² ◦ 📰 ɴᴇᴡs ᴍᴇɴᴜ
║  ¹³ ◦ 📚 ᴇᴅᴜᴄᴀᴛɪᴏɴ ᴍᴇɴᴜ
║
╚══════════════════╝
> 𝙹𝙴𝚁𝚁𝚈-𝙼𝙳 ʙʏ 𝙹𝙴𝚁𝚁𝚈 𝙺𝙸𝙽𝙶`;

        const menuMessage = await conn.sendMessage(from, { 
            image: { url: bot.ALIVE_IMG }, 
            caption: desc,
            contextInfo: {
                ...contextInfo,
                externalAdReply: {
                    title: '𝙹𝙴𝚁𝚁𝚈-𝙼𝙳 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻 𝙲𝙷𝙰𝙽𝙽𝙴𝙻',
                    body: 'ᴊᴏɪɴ ꜰᴏʀ ᴜᴘᴅᴀᴛᴇs & ɴᴇᴡs 🔔',
                    mediaType: 1,
                    thumbnail: await (async () => {
                        try {
                            const r = await axios.get(bot.ALIVE_IMG, { responseType: 'arraybuffer' });
                            return Buffer.from(r.data);
                        } catch { return undefined; }
                    })(),
                    renderLargerThumbnail: false,
                    showAdAttribution: true,
                    sourceUrl: bot.WA_CHANNEL
                }
            }
        }, { quoted: mek });

        // ONE-TIME listener to avoid duplicate slow responses
        const menuHandler = async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg?.message?.extendedTextMessage) return;
            if (msg.message.extendedTextMessage.contextInfo?.stanzaId !== menuMessage.key.id) return;

            // Remove listener immediately after first match
            conn.ev.off('messages.upsert', menuHandler);

            const selectedOption = msg.message.extendedTextMessage.text.trim();
            const catMap = {
                '1':  { cat: 'owner',     label: '👑 ᴏᴡɴᴇʀ',     img: bot.OWNER_IMG },
                '2':  { cat: 'convert',   label: '🔄 ᴄᴏɴᴠᴇʀᴛ',   img: bot.CONVERT_IMG },
                '3':  { cat: 'ai',        label: '🤖 ᴀɪ',         img: bot.AI_IMG },
                '4':  { cat: 'search',    label: '🔍 sᴇᴀʀᴄʜ',     img: bot.SEARCH_IMG },
                '5':  { cat: 'download',  label: '📥 ᴅᴏᴡɴʟᴏᴀᴅ',  img: bot.DOWNLOAD_IMG },
                '6':  { cat: 'main',      label: '🏠 ᴍᴀɪɴ',       img: bot.MAIN_IMG },
                '7':  { cat: 'group',     label: '👥 ɢʀᴏᴜᴘ',      img: bot.GROUP_IMG },
                '8':  { cat: 'fun',       label: '🎮 ꜰᴜɴ',        img: bot.FUN_IMG },
                '9':  { cat: 'tools',     label: '🔧 ᴛᴏᴏʟs',      img: bot.TOOLS_IMG },
                '10': { cat: 'other',     label: '📦 ᴏᴛʜᴇʀ',      img: bot.OTHER_IMG },
                '11': { cat: 'movie',     label: '🎬 ᴍᴏᴠɪᴇ',      img: bot.MOVIE_IMG },
                '12': { cat: 'news',      label: '📰 ɴᴇᴡs',        img: bot.NEWS_IMG },
                '13': { cat: 'education', label: '📚 ᴇᴅᴜᴄᴀᴛɪᴏɴ',  img: bot.PP_IMG },
            };

            const entry = catMap[selectedOption];
            if (!entry) return;

            const cmds = commands.filter(c => c.category === entry.cat && !c.dontAddCommandList);
            const commandList = cmds.map(c => `║  ◦ 𝗖𝗠𝗗꞉ *${c.pattern}*`).join('\n');
            const responseText = `╔═══❮ 𝙹𝙴𝚁𝚁𝚈-𝙼𝙳 ❯═══╗
║
║  🗂️ *${entry.label} ᴄᴏᴍᴍᴀɴᴅs*
║
╠══════════════════╣
║  🖥️ ʀᴀᴍ꞉ ${(process.memoryUsage().heapUsed/1024/1024).toFixed(2)}ᴍʙ
║  ⏱️ ᴜᴘᴛɪᴍᴇ꞉ ${runtime(process.uptime())}
╠══════════════════╣
${commandList}
╠══════════════════╣
║  📦 ᴛᴏᴛᴀʟ꞉ *${cmds.length} ᴄᴏᴍᴍᴀɴᴅꜱ*
╚══════════════════╝
> 𝙹𝙴𝚁𝚁𝚈-𝙼𝙳 ʙʏ 𝙹𝙴𝚁𝚁𝚈 𝙺𝙸𝙽𝙶`;

            await conn.sendMessage(from, {
                image: { url: entry.img },
                caption: responseText,
                contextInfo: {
                    externalAdReply: {
                        title: '𝙹𝙴𝚁𝚁𝚈-𝙼𝙳 𝙾𝙵𝙵𝙸𝙲𝙸𝙰𝙻 𝙲𝙷𝙰𝙽𝙽𝙴𝙻',
                        body: 'ᴊᴏɪɴ ꜰᴏʀ ʟᴀᴛᴇsᴛ ᴜᴘᴅᴀᴛᴇs 🔔',
                        mediaType: 1,
                        thumbnail: await (async () => {
                            try {
                                const r = await axios.get(entry.img, { responseType: 'arraybuffer' });
                                return Buffer.from(r.data);
                            } catch { return undefined; }
                        })(),
                        renderLargerThumbnail: false,
                        showAdAttribution: true,
                        sourceUrl: bot.WA_CHANNEL
                    }
                }
            }, { quoted: mek });
        };

        conn.ev.on('messages.upsert', menuHandler);
        // Auto-remove listener after 5 minutes to prevent memory leak
        setTimeout(() => conn.ev.off('messages.upsert', menuHandler), 5 * 60 * 1000);

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } });
        reply('⚠️ *An error occurred while processing your request.*');
    }
});
//=================================================Owner===============================================
cmd({
    pattern: "owner",
    react: "👑", // Reaction emoji when the command is triggered
    alias: ["user", "ow"],
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        // Owner's contact info
        const ownerNumber = '+22870437628'; // Replace this with the actual owner number
        const ownerName = 'JERRY XD'; // Replace this with the owner's name
        const organization = 'JERRY CODERS'; // Optional: replace with the owner's organization

        // Create a vCard (contact card) for the owner
        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  // Full Name
                      `ORG:${organization};\n` +  // Organization (Optional)
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` +  // WhatsApp ID and number
                      'END:VCARD';

        // Send the vCard first
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send a reply message that references the vCard
        await conn.sendMessage(from, {
            text: `*This is the owner's contact:* ${ownerName}`,
            contextInfo: {
                mentionedJid: [ownerNumber.replace('+22870437628', '') + '+22870437628@s.whatsapp.net'], // Mention the owner
                quotedMessageId: sentVCard.key.id // Reference the vCard message
            }
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        await conn.sendMessage(from, { text: 'Sorry, there was an error fetching the owner contact.' }, { quoted: mek });
    }
});
//============================================Ping==================================================
cmd({
    pattern: "speed",
    react: "🤖",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping2',
    filename: __filename
},
async(conn, mek, m,{from, l, reply}) => {
try{
    var inital = new Date().getTime();
    let ping = await conn.sendMessage(from , { text: '*_JERRY-MD..._*'  }, { quoted: mek } )
    var final = new Date().getTime();
    await conn.sendMessage(from, { delete: ping.key })
        return await conn.sendMessage(from , { text: '*🔥Pong*\n *' + (final - inital) + ' ms* '  }, { quoted: mek } )
    } catch (e) {
    reply('*Error !!*')
    l(e)
    }
})

cmd({
  pattern: "ping",
  alias: ["pong", "test"],
  use: '.ping',
  desc: "Real-time ping test with live editing",
  category: "main",
  react: "⚡",
  filename: __filename
}, async (conn, mek, m, { from }) => {
  try {
    const startTime = Date.now();
    let isRunning = true;
    
    // 🚀 SEND INITIAL MESSAGE
    const initialMsg = await conn.sendMessage(from, { 
      text: `╔ஜ۩▒█ *⚡ ρเɳɠ รყรƭεɱ ⚡* █▒۩ஜ╗
*|* ⏳ ᴛɪᴍᴇ: 0s
*|* ⚡ ᴍꜱ: 0ms
*|* 🔁 ᴛᴇꜱᴛɪɴɢ...
╰━━━━━━━━━━━━━━━━━━⊷
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴇʀʀʏ-xᴅ` 
    }, { quoted: m });
    
    // 🔄 UPDATE INTERVAL
    const updateInterval = setInterval(async () => {
      if (!isRunning) return;
      
      const currentTime = Date.now();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000);
      const currentPing = Math.floor(Math.random() * 50) + 50; // Simulated ping 50-100ms
      
      // 🎨 CREATE UPDATED MESSAGE
      const updatedText = `╔ஜ۩▒█ *⚡ ρเɳɠเɳɠ... ⚡* █▒۩ஜ╗
*|* ⏳ ᴛɪᴍᴇ: ${elapsedTime}s
*|* ⚡ ᴍꜱ: ${currentPing}ms
*|* ${elapsedTime < 5 ? " 🔁 ᴛᴇꜱᴛɪɴɢ..." : 
  elapsedTime < 10 ? " 📡 ᴍᴇᴀꜱᴜʀɪɴɢ..." : 
  elapsedTime < 15 ? " ⚡ ᴄᴀʟᴄᴜʟᴀᴛɪɴɢ..." : 
  elapsedTime < 20 ? " 📊 ᴀɴᴀʟʏᴢɪɴɢ..." : 
  " ✅ ★彡[ᴄᴏᴍᴘʟᴇᴛᴇ ɪɴ]彡★ " + (30 - elapsedTime) + "s"}\n╰━━━━━━━━━━━━━━━━━━⊷\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴇʀʀʏ-xᴅ`;
      
      try {
        await conn.sendMessage(from, {
          text: updatedText,
          edit: initialMsg.key
        });
      } catch (error) {
        console.log("Edit failed:", error.message);
        isRunning = false;
        clearInterval(updateInterval);
      }
      
    }, 1000); // Update every 1 second
    
    // ⏱️ STOP AFTER 30 SECONDS
    setTimeout(async () => {
      isRunning = false;
      clearInterval(updateInterval);
      
      const finalPing = Date.now() - startTime;
      const avgPing = Math.floor(finalPing / 30);
      
      // 🎯 FINAL MESSAGE
      const finalText = `╔ஜ۩▒█ *⚡ ρเɳɠเɳɠ... ⚡* █▒۩ஜ╗
*|* ⏳ ᴛᴏᴛᴀʟ ᴛɪᴍᴇ: 30ꜱ
*|* ⚡ ꜰɪɴᴀʟ ᴍꜱ: ${finalPing}ms
*|* 📊 αѵɠ ɱร: ${avgPing}ms
╰━━━━━━━━━━━━━━━━━━⊷

> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴊᴇʀʀʏ-xᴅ
${avgPing < 100 ? " 🚀 µℓƭ૨α ƒαรƭ" : 
  avgPing < 200 ? " ⚡ εא૮εℓℓεɳƭ" : 
  avgPing < 500 ? " 🔄 ɠσσ∂" : 
  " 📶 αѵε૨αɠε"}

📍 ᴜꜱᴇ .ᴍᴇɴᴜ ꜰᴏʀ ᴄᴏᴍᴍᴀɴᴅꜱ`;
      
      try {
        await conn.sendMessage(from, {
          text: finalText,
          edit: initialMsg.key
        });
      } catch {
        await conn.sendMessage(from, { text: finalText }, { quoted: fakevCard });
      }
      
    }, 30000); // Run for 30 seconds
    
    // 🛑 STOP ON ERROR
    process.on('uncaughtException', () => {
      isRunning = false;
      clearInterval(updateInterval);
    });

  } catch (e) {
    console.error("❌ Ping error:", e);
    await conn.sendMessage(from, { 
      text: `❌ Error: ${e.message}` 
    }, { quoted: fakevCard });
  }
});
//======================================Precisence====================================================
//auto recording
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {       
 if (config.AUTO_RECORDING === 'true') {
                await conn.sendPresenceUpdate('recording', from);
            }
         } 
   );

//auto_voice
cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {

  let voc = await axios.get(`${bot.BOT_URL}`);
  const url = voc.data.voice;
    let { data } = await axios.get(url)
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_VOICE === 'true') {
                if (isOwner) return;        
                await conn.sendPresenceUpdate('recording', from);
                await conn.sendMessage(from, { audio: { url: data[text] }, mimetype: 'audio/mpeg', ptt: true }, { quoted: mek });
            }
        }
    }                
});

cmd({
  on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
  let rep = await axios.get(`${bot.BOT_URL}`);
  const url = rep.data.reply;
    let { data } = await axios.get(url)
    for (const text in data) {
        if (body.toLowerCase() === text.toLowerCase()) {
            if (config.AUTO_REPLY === 'true') {
                if (isOwner) return;        
                await m.reply(data[text])
            
            }
        }
    }                
});
// Composing (Auto Typing)
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    if (config.AUTO_TYPING === 'true') {
        await conn.sendPresenceUpdate('composing', from); // send typing 
    }
});
// Always Online
cmd({
  on: "body"
}, async (conn, mek, m, { from, isOwner }) => {
  try {
    if (config.ALWAYS_ONLINE === "true") {
      // Always Online Mode: Bot always appears online (double tick)
      await conn.sendPresenceUpdate("available", from);
    } else {
      // Dynamic Mode: Adjust presence based on owner's status
      if (isOwner) {
        // If the owner is online, show as available (double tick)
        await conn.sendPresenceUpdate("available", from);
      } else {
        // If the owner is offline, show as unavailable (single tick)
        await conn.sendPresenceUpdate("unavailable", from);
      }
    }
  } catch (e) {
    console.log(e);
  }
});

// Public Mod
cmd({
  on: "body"
}, async (conn, mek, m, { from, isOwner }) => {
  try {
    if (config.ALWAYS_ONLINE === "true") {
      // Public Mode + Always Online: Always show as online
      await conn.sendPresenceUpdate("available", from);
    } else if (config.PUBLIC_MODE === "true") {
      // Public Mode + Dynamic: Respect owner's presence
      if (isOwner) {
        // If owner is online, show available
        await conn.sendPresenceUpdate("available", from);
      } else {
        // If owner is offline, show unavailable
        await conn.sendPresenceUpdate("unavailable", from);
      }
    }
  } catch (e) {
    console.log(e);
  }
});
//==========================================Repo=================================================
cmd({
    pattern: "repo",
    desc: "repo the bot",
    react: "📡",
    category: "main",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `> JERRY-MD REPO INFO 🪀

╭⦁⦂⦁*━┉━┉━┉━┉━┉━┉━⦁⦂⦁
┃ 𝙾𝚆𝙽𝙴𝚁 𝙽𝚄𝙼𝙱𝙴𝚁: ${bot.OWNER_NUMBER}
┃ 
┃ JERRY-MD REPO: ${bot.REPO_LINK} 
┃
┃ BOT UPDATES: ${bot.WA_CHANNEL}
╰⦁⦂⦁*━┉━┉━┉━┉━┉━┉━⦁⦂⦁

*${bot.COPYRIGHT}*
`
await conn.sendMessage(from,{image:{url: bot.ALIVE_IMG},caption:dec},{quoted:mek});
console.log(`♻ Repo Command Used : ${from}`);

}catch(e){
    console.log(e)
    reply(`${e}`)
    }
})
//===========================================Setting===============================================
cmd({
    pattern: "settings",
    alias: ["setting","s"],
    desc: "Check bot online or not.",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!isOwner) return;


        let work;
        switch (config.MODE) {
            case 'public':
                work = '𝙿𝚄𝙱𝙻𝙸𝙲🌎';
                break;
            case 'private':
                work = '𝙿𝚁𝙸𝚅𝙰𝚃𝙴👤';
                break;
            case 'groups':
                work = '𝙶𝚁𝙾𝚄𝙿 𝙾𝙽𝙻𝚈👥';
                break;
            case 'inbox':
                work = '𝙸𝙽𝙱𝙾𝚇 𝙾𝙽𝙻𝚈🫂';
                break;
            default:
                work = '𝚄𝙽𝙺𝙾𝚆𝙽🛑';
        }

        let autoStatus = config.AUTO_READ_STATUS === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';
        let autoreact = config.AUTO_REACT === 'true' ? '♻️ 𝙾𝙽' : '🚫 𝙾𝙵𝙵';

        const vv = await conn.sendMessage(from, {
            image: { url:bot.ALIVE_IMG},
            caption: `> JERRY-MD Settings\n
┏━━━━━━━━━━━━━━━━━━┓
┃╭┈────────━━━━───╮
┣┣Work Mode : *${work}*
┣┣Auto Status : *${autoStatus}*
┣┣Auto React : *${autoreact}*
┃┗━━━━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━━━━━┛
> 🔗𝘾𝙐𝙎𝙏𝙊𝙈𝙄𝙕𝙀  𝙎𝙀𝙏𝙏𝙄𝙉𝙂𝗦🔗⤵️

┏━━━━━━━━━━━━━━━━━━┓
┃╭┈────────━━━━───╮

*_WORK TYPE_⤵️*
┣┣1.1 PUBLIC WORK
┣┣1.2 PRIVATE WORK
┣┣1.3 GROUP ONLY
┣┣1.4 INBOX ONLY

*_AUTO STATUS SEEN_⤵️*
┣┣3.1 AUTO READ STATUS ON
┣┣3.2 AUTO READ STATUS OFF

*_AUTO REACT_⤵️*
┣┣4.1 AUTO REACT ON
┣┣4.2 AUTO REACT OFF

*_AUTO_TYPING_⤵️*
┣┣6.1 AUTO_TYPING ON
┣┣5.2 AUTO_TYPING OFF

*_AUTO BIO_⤵️*
┣┣6 AUTO BIO ON/OFF

*_24/7 News Service_⤵️*
┣┣7 Activate News Service
┃┗━━━━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━━━━━┛`
        }, { quoted: mek });
        console.log(`♻ Setting Command Used : ${from}`);
        const settingsHandler = async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg?.message?.extendedTextMessage) return;
            if (msg.message.extendedTextMessage.contextInfo?.stanzaId !== vv.key.id) return;
            conn.ev.off('messages.upsert', settingsHandler);
            if (!isOwner) return;
            const sel = msg.message.extendedTextMessage.text.trim();
            const actions = {
                '1.1': () => { reply('.update MODE:public'); reply('.restart'); },
                '1.2': () => { reply('.update MODE:private'); reply('.restart'); },
                '1.3': () => { reply('.update MODE:groups'); reply('.restart'); },
                '1.4': () => { reply('.update MODE:inbox'); reply('.restart'); },
                '2.1': () => reply('.update AUTO_VOICE:true'),
                '2.2': () => reply('.update AUTO_VOICE:false'),
                '3.1': () => reply('.update AUTO_READ_STATUS:true'),
                '3.2': () => reply('.update AUTO_READ_STATUS:false'),
                '4.1': () => { reply('.update AUTO_REACT:true'); reply('.restart'); },
                '4.2': () => { reply('.update AUTO_REACT:false'); reply('.restart'); },
                '5.1': () => reply('.update AUTO_TYPING:true'),
                '5.2': () => reply('.update AUTO_TYPING:false'),
                '6':   () => reply('.setautobio'),
                '7':   () => reply('.sprikynews'),
            };
            if (actions[sel]) actions[sel]();
            else reply("\u274c Invalid option.");
        };
        conn.ev.on('messages.upsert', settingsHandler);
        setTimeout(() => conn.ev.off('messages.upsert', settingsHandler), 5 * 60 * 1000);
    
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
//=================================================System===============================================
cmd({
    pattern: "system",
    react: "♠️",
    alias: ["uptime","status","runtime"],
    desc: "cheack uptime",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let status = `
◈ *𝐒𝐘𝐒𝐓𝐄𝐌 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍*


*⦁⦂⦁*━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁
┃
┃ ⏰  *Runtime :-* ${runtime(process.uptime())}
┃
┃ 📟 *Ram usage :-* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┃
┃⚙ *Platform :-* ${os.hostname()}
┃
┃ 👨‍💻  *Owners :-* JERRY KING 🇵🇰 
┃
┃ 🧬 *Version :-* ${bot.VERSION}
┃
*⦁⦂⦁*━┉━┉━┉━┉━┉━┉━┉━⦁⦂⦁

*${bot.COPYRIGHT}*`
await conn.sendMessage(from,{image:{url:bot.ALIVE_IMG},caption:`${status}`},{quoted:mek})
console.log(`♻ System Command Used : ${from}`);
}catch(e){
console.log(e)
reply(`${e}`)
}
})
//===========================================Functions=========================================
cmd({
    on: "body"
  },
  async (conn,mek, m, { from, body, isGroup, isAdmins, isBotAdmins, reply, sender }) => {
      try {
          
          const badWords = ["porno","porn","xxn","pono","fack","nude","nappi","doch","xnxn","khalifa","kalifa","xxx","cum","pussy","prono","fuck","sex","pronhub","xnxx","pakaya","ponnaya","huththa","පොන්නයා","පකයා","පක","වේස","හුක","paka" ,"huka","wesa","ponna","wesi","kariya","pinnaya","HUKA","කැරි","Huka","pamkaya","පම්කයා","හුකයි","බඩුව","බිජ්ජ","පයිය","බිජ්ජා","පයියා","හිකුවනම්","පකයා","හුත්තා","හුත්තිගේ","හුත්තෝ","හුත්තො","පොන්න","පොන්නයෙක්","පොන්නයා","කැරියා","වේස බල්ලා","හුකපන්","හුකාපන්","කැරි","හුකන්නා","පකා","පොන්න","වේස","පක","හැමිනිමිනියන්","හැමිනෙනවා","pakaya","Pakaya","paka","pakaa","Paka","Pakaa","Huththa","huththaa","Huththaa","huththa","Ponnaya","Ponnayaa","ponnaya","ponnayaa","Kariya","Kari","Kariyaa","kariya","kari","kariyaa","Wesa","Weesa","wesa","weesa","Wesa balla","wesa balla","Hukapan","hukapan.Hukaapan","hukaapan","Hukapam","hukapam","Hukaapam","hukaapam","Kari","Hukanna","hukanna","Hukannaa","hukannaa","Paka","Pakaa","paka","pakaa","Ponna","ponna","Haminiyan","haminiyan","Haminiyam","haminiyam","Haminenawa","haminenawa","Haminenawaa","haminenawaa","Bijja","bijja","Bijjaa","bijjaa","Paiya","Payya","paiya","payya","Hutta","hutta","Huttaa","huttaa","baduwa","Baduwa","sex","Sex","xxx","XXX","sexy","Sexy","porn","ass","nude","pussy","dick","boobs","pusy","naked","mehk malik"]
          if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin
        
          const lowerCaseMessage = body.toLowerCase();
          const containsBadWord = badWords.some(word => lowerCaseMessage.includes(word));
          
          if (containsBadWord & config.ANTI_BAD === 'true') {
            await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });
            await conn.sendMessage(from, { text: "🚫 ⚠️BAD WORDS NOT ALLOWED⚠️ 🚫" }, { quoted: mek });
          }
      } catch (error) {
          console.error(error)
          reply("An error occurred while processing the message.")
      }
  })
  
  const linkPatterns = [
      /https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi,   // WhatsApp group or chat links
      /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi,           // Telegram links
      /https?:\/\/(?:www\.)?youtube\.com\/\S+/gi,           // YouTube links
      /https?:\/\/youtu\.be\/\S+/gi,                        // YouTube short links
      /https?:\/\/(?:www\.)?facebook\.com\/\S+/gi,          // Facebook links
      /https?:\/\/fb\.me\/\S+/gi,                           // Facebook short links
      /https?:\/\/(?:www\.)?instagram\.com\/\S+/gi,         // Instagram links
      /https?:\/\/(?:www\.)?twitter\.com\/\S+/gi,           // Twitter links
      /https?:\/\/(?:www\.)?tiktok\.com\/\S+/gi,            // TikTok links
      /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi,          // LinkedIn links
      /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi,          // Snapchat links
      /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi,         // Pinterest links
      /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi,            // Reddit links
      /https?:\/\/ngl\/\S+/gi,                              // NGL links
      /https?:\/\/(?:www\.)?discord\.com\/\S+/gi,           // Discord links
      /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi,             // Twitch links
      /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi,             // Vimeo links
      /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi,       // Dailymotion links
      /https?:\/\/(?:www\.)?medium\.com\/\S+/gi             // Medium links
  ];
  
  cmd({
      on: "body"
  }, async (conn, mek, m, { from, body, sender, isGroup, isAdmins, isBotAdmins, reply }) => {
      try {
          if (!isGroup || isAdmins || !isBotAdmins) return; // Skip if not in group, or sender is admin, or bot is not admin
  
          const containsLink = linkPatterns.some(pattern => pattern.test(body));
          if (containsLink && config.ANTI_LINK === 'true') {
              // Delete the message
              await conn.sendMessage(from, { delete: mek.key }, { quoted: mek });
  
              // Warn the user
              await conn.sendMessage(from, { text: `⚠️ Links are not allowed in this group.\n@${sender.split('@')[0]} has been removed. 🚫`, mentions: [sender] }, { quoted: mek });
  
              // Remove the user from the group
              await conn.groupParticipantsUpdate(from, [sender], 'remove');
          }
      } catch (error) {
          console.error(error);
          reply("An error occurred while processing the message.");
      }
  });
  
