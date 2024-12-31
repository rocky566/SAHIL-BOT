module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.1",
    credits: "𝙈𝙧 𝙎𝙖𝙝𝙞𝙡",
    description: "Notification of bots or people entering groups with random gif/photo/video",
    dependencies: {
        "fs-extra": "",
        "path": "",
        "pidusage": ""
    }
};
 
module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
 
    const path = join(__dirname, "cache", "joinvideo");
    if (existsSync(path)) mkdirSync(path, { recursive: true }); 
 
    const path2 = join(__dirname, "cache", "joinvideo", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });
 
    return;
}
 
 
module.exports.run = async function({ api, event }) {
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? " " : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
        const fs = require("fs");
        return api.sendMessage("", event.threadID, () => api.sendMessage({body: `🍒💙•••Ɓ❍ʈ Ƈøɳɳɛƈʈɛɗ•••💞🌿
        
🕊️🌸...Ɦɛɭɭ❍ Ɠɣus Ɱɣ Ɲɑɱɛ Is 🍒💙•••✦𝙢𝙖𝙛𝙞𝙖-𝙗𝙤𝙩 ✦•••💞🌿




 ✨💞Ɱɣ Ꭾɽɛfɪᵡ ɪs / 


\n\nƬɣƥɛ${global.config.PREFIX}ꞪɛɭᎮ Ƭ❍ søø Ɱɣ Ƈøɱɱɑɳɗ ɭɪsʈ...🤍💫\n
\nƐxɑɱƥɭɛ :\n

${global.config.PREFIX}Sɧɑɣɽɪ..💜(Ƭɛxʈ)\n${global.config.PREFIX} (Ƥɧøʈø)🌬️🌳🌊

🦋🌸Ƭɣƥɛ${global.config.PREFIX}Ɦɛɭƥ2 (Ɑɭɭ Ƈøɱɱɑɳɗʂ)...☃️💌

${global.config.PREFIX} ɪɳfø (ɑɗɱɪɳ Iɳføɽɱɑʈɪøɳ)👀✍️
...🍫🥀Ɱɣ ❍wɳɛɽ ɪs Ɱɽ 𝛅𝗮ⴙı͢͞ıɭ...🕊️☃️

${global.config.PREFIX}🌺🍃Ƈɑɭɭɑɗ føɽ Ɑɳɣ ɪʂʂuɛ 
<<<<<------------------------------>>>>>
𝗔𝗻𝗱 𝗙𝗼𝗿 𝗔𝗻𝘆 𝗥𝗲𝗽𝗼𝗿𝘁 𝗢𝗥 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗕𝗼𝘁 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿....💙🍫

💝🥀𝐎𝐖𝐍𝐄𝐑 ➣  𝙈𝙧 𝙎𝙖𝙝𝙞𝙡 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝕊𝕒𝕙𝕚𝕝🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ https://www.facebook.com/profile.php?id=61567164537951&mibextid=ZbWKw/n


✮☸✮
✮┼💞┼✮
☸🕊️━━•🌸•━━🕊️☸
✮☸✮
✮┼🍫┼✮
☸🎀━━•🧸•━━🎀☸
✮┼🦢┼✮
✮☸✮
☸🌈━━•🤍•━━🌈☸
✮☸✮
✮┼❄️┼✮

┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓🌸✦✧✧✧✧✰🍒ℙ𝕣𝕚𝕪𝕒𝕟𝕤𝕙🌿✰✧✧✧✧✦🌸  ┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛
`, attachment: fs.createReadStream(__dirname + "/cache/botjoin.mp4")} ,threadID));
    }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);
 
            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
            const path = join(__dirname, "cache", "joinvideo");
            const pathGif = join(path, `${threadID}.video`);
 
            var mentions = [], nameArray = [], memLength = [], i = 0;
            
            for (id in event.logMessageData.addedParticipants) {
                const userName = event.logMessageData.addedParticipants[id].fullName;
                nameArray.push(userName);
                mentions.push({ tag: userName, id });
                memLength.push(participantIDs.length - i++);
            }
            memLength.sort((a, b) => a - b);
            
            (typeof threadData.customJoin == "undefined") ? msg = "Hello Mr/Miss {name},\n─────────────────\n You're The {soThanhVien}Member ─────────────────\nOf {threadName} Group\n─────────────────\nPlease Enjoy Your Stay\n─────────────────\nAnd Make Lots Of Friends =)\n──────-°°__𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐 °__!!>☁️✨❤️ My Owner  ✦͙͙͙͙❥⃝∗⁎.ʚ Priyansh Rajput ɞ.⁎∗❥⃝**͙✦͙͙͙ ❤️ Love you 😘 ummmma ❤️😍" : msg = threadData.customJoin;
            msg = msg
            .replace(/\{name}/g, nameArray.join(', '))
            .replace(/\{type}/g, (memLength.length > 1) ?  'Friends' : 'Friend')
            .replace(/\{soThanhVien}/g, memLength.join(', '))
            .replace(/\{threadName}/g, threadName);
 
            if (existsSync(path)) mkdirSync(path, { recursive: true });
 
            const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));
 
            if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathvideo), mentions }
            else if (randomPath.length != 0) {
                const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
                formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
            }
            else formPush = { body: msg, mentions }
 
            return api.sendMessage(formPush, threadID);
        } catch (e) { return console.log(e) };
    }
              }
