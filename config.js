// CREDIT MargaTzy

const fs = require("fs")

//===========================//

const {
smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize
} = require("./system/lib/myfunction")

//===========================//

global.d = new Date()
global.calender = d.toLocaleDateString("id")

//===========================//

global.prefa = ["","!",".",",","🎭","〽️"]
global.owner = ["6289516636775"]
global.ownMain = "6289516636775"
global.botNumber = "6289516636775" 
global.NamaOwner = "decode.id"
global.usePairingCode = true
global.filenames = "PakTzy.js"
global.namabot = "𝐕𝐗𝚯 ☇ 𝐙𝐀𝚸"
global.author = "K̵̢̨̨̧̡̨̧̡̨̡̢̨̡̢̧̢̛̛̛͚͔̹̜̣̭̘̱̱̲͕͓̯̩̦͉͚̻͕̗̗̹̣̹̮̦͉͕̺̗̼͉̘̰̼̩͕̺̪̞͍̺̹͕̲͇̰̮͖͕͉̺̣̖̩͕̺̺̝̜͕̰̣̝̥̥̯̫̟̠͖͍̯̼͓̱̯̭̮͕̼̪̦̜̺̭͚̰͚̭̦̮̗̣̖̠̼̖̦͓̞̯̥̪͓̼͉̠͖̘̖͚͉͉̫̱͇̘̲̝̪͙͍̩̻̰̰̣̬̦̮̣̫̰͖̞͎̮̽̃̀͗̿́͗͊̔͋͒͌͋́̇͒̏͗̔̓͐̾̓͛̎̔̍̂̈̌̂̈́͌͊̂͂̓͗̍͒̋͂͂̀̓̐̏̽̅͒͌̃̅͌̉̔̔͋̋́͋̀̔͊̂͐̑̾̎̓͆͗̐̑̓͐̀̓̚̕͜͜͝͝͝͝͝͠͝ͅͅͅͅͅͅͅͅͅì̸̛̛̤̉̾̿̾͐̓̓̅̒̔͐̋͌̇͆͗͆̊͛͂̂͂̎̓̎͛̇́̐͐̋̓̌͊͛͌̂̎̐̑͐̍̉͑͋̊̏̆͌̏͒̂͋͊̑͠͝͝͝͝n̷̨̡̢̡̢̡̢̧̨̛͇̱͉͖͕̻͙̠̖̘̻̞̲̳͚̬̥̠̠̯͉͎̪̦͓͕̼̖̟͇͎̣̟̻̱͙̙͚͍͍̰̮̞̫̠̭͓̰͈͔̫̟̼̻̩̾͛̀͗̊͑̓̈́̔͋̓̇̄̇̓̃̒͋̽̄͋̔̈͆̋͌̈́͒́̊͋̾̂̈́̎̏̃̎̔̉̀̍́̓́̇̒̿͗̓́̀̿̕͝͠͝c̴̡̧̧̢̨̨̨̧̡̡̡̡̧̢̨̢̧̧̧̛̛͚̝͇͕̭̺͚̳̬̬̭̺̬͓̹͇̩̬̣̳͈͙͎̮̞̟̮͕̯̠̯̺̜̞̪̳̘͇̰͔̗͕̯̦̳̱͖͇̫̖̹̠̥̹͍̭̫̳͈̣̘̞̭͍̹̺̦̯̯̣̘̝̲̭̗̥̟̣̠͙͍̪̮̤̠̬̙͕͈͈͉̩̺̠̟̱̯̭̜̰̼͕͕̱̗̺̠̘̲͓̲͉̩͎̻̜͈̖͚̣̹͈̱̜̘͈̳͖̻͉̳͙̮̟̪̠̭̼̙̼̹̟̤̠̮̠̘̻̫̙̥̳̞̲̬͙̪̠̣͈̽̑̈̈́̈́́͗̂́͋̆̈̂̓̓͛̋͒̾͛̌́̎̔̑̃͌͒̈̅͛́̆͗̈́̈̑̾̓̎͋̐͑̒̇͆̆́̈́͊̊̈̉̿̈̈́͐̊̂̾͂͑͌͑̓̎̀̑̒͑̄͛̉̎̇̈́͌͑̈́̓̓̎̃́̍͊̇̔̂̍̈́̒̈̂̈́͊̃̈́͗̏̔͒̍̍̀̽̏̏̓̌̈́̌͑̑̾̓́̈́̕̚̕̕̕͘̚̕̕͜͜͝͠͠͝͝͠͠͠͠͝͝͠͠͝͝ͅh̷̡̨̧̨̨̢̨̢̨̡̢̧̡̨͕͎͔̖̥̱͙̜̹̰̝͎̞͔͕͉̠̞̱͎̮̺̙̻̯̪̱̙̺̪͉̯̤̰̖̳̬͇̝͔̤͚͔̬͙̗̩̺͇̖̮̬̼̹̘̯͙̹͖̯̰͎͚̖͔͇̦̞̦̬̥͚͓͇̻̮̫̦̦̦̫̯̙̻̠͚̱̳̫̝̯̳̮͇̜̞̝̼͔̝͍̗͚̺̳͈̲̺̋̐̌͑̌̐́́̑̒̑̀̾́͒͛̊̽́̌̐̎̃͘͜͜͜͜͠ͅͅͅa̷̡̨̡̢̛̻͕̤̗̫͇̩̠͖͓͔͇̥̫̤̪͇̜̳͉̭̬̭͂̓͑͒͊̈́͛̈́̄̀̆̆̊̀̈́̈́͋̃̀̈́̄́̓͆͋̋̑̂̑̆͊̊̅͛͂̊͛͛͘̚͘̚͝͝͝͠͝n̷̨̡̨͖͇͎̯͈̺̭̗͙̳͚͕̠͖̱͓͚͙̩͈̤̥͎̩̝͚͎̞̹̂̒͆̏̃̒͊̄͋̊̔͑͒̏̎͘̕͘̚͜͜͝͠͝͝"
global.packname = "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
global.yt = "https://youtube.com/@PakTzy"
global.hiasan = `	◦  `
global.gris = '`'

//===========================//

//===========================//

//API PREMIUM\\
global.APIs = {
	gsz: 'https://api.betabotz.eu.org'
}

global.APIKeys = {
	'https://https://api.betabotz.eu.org': 'GetsuzoZhiro'
}

global.gsz = 'GetsuzoZhiro'
global.logic = 'Saya adalah AI yang dirancang untuk membantu mahasiswa dalam pembahasan coding serta pelajaran umum seperti Matematika, Bahasa Indonesia, Bahasa Inggris, Fisika, Kimia, Rekayasa Perangkat Lunak, dan Basis Data dengan penjelasan yang mudah dipahami dan relevan'

//===========================//

global.xchannel = {
	jid: '120363298524333143@newsletter'
	}

//===========================//

global.country = `62`
global.system = {
gmail: `PakTzy@gmail.com`,
}

//===========================//

global.nick = {
aaa: "⭑̤⟅̊༑ ▾ 𝐙͢𝐍ͮ𝐗 ⿻ 𝐈𝐍͢𝐕𝚫𝐒𝐈͢𝚯𝚴 ▾ ༑̴⟆̊⿻‏‎‏‎‏‎‏",
sss: "𝐓𝐡𝐞𝐆𝐞𝐭𝐬𝐮𝐳𝐨𝐙𝐡𝐢𝐫𝐨🐉"
}

global.mess = {
 ingroup: '*𝘾𝙖𝙣 𝙊𝙣𝙡𝙮 𝘽𝙚 𝙐𝙨𝙚𝙙 𝙞𝙣 𝙂𝙧𝙤𝙪𝙥シ*',
 admin: '*𝘾𝙖𝙣 𝙊𝙣𝙡𝙮 𝘽𝙚 𝙐𝙨𝙚𝙙 𝘽𝙮 𝘼𝙙𝙢𝙞𝙣シ*',
 owner: '*𝘾𝙖𝙣 𝙊𝙣𝙡𝙮 𝘽𝙚 𝙐𝙨𝙚𝙙 𝘽𝙮 𝙊𝙬𝙣𝙚𝙧シ*',
 premium: '*𝘾𝙖𝙣 𝙊𝙣𝙡𝙮 𝘽𝙚 𝙐𝙨𝙚𝙙 𝙊𝙬𝙣𝙚𝙧 𝘼𝙣𝙙 𝙋𝙧𝙚𝙢𝙞𝙪𝙢 𝙐𝙨𝙚𝙧シ*',
 usingsetpp: '*𝙎𝙚𝙩𝙥𝙥 𝘾𝙖𝙣 𝙊𝙣𝙡𝙮 𝘽𝙚 𝙐𝙨𝙚𝙙 𝘽𝙮 𝙏𝙝𝙚 𝙊𝙬𝙣𝙚𝙧*',
 wait: '*𝙒𝙖𝙞𝙩𝙞𝙣𝙜 𝙁𝙤𝙧 𝙋𝙧𝙤𝙘𝙚𝙨𝙨𝙞𝙣𝙜🔥*',
 success: '*𝙎𝙪𝙘𝙘𝙚𝙨𝙨〽️*',
 bugrespon: '*𝙋𝙧𝙤𝙘𝙚𝙨𝙨⚡*'
}

//===========================//

global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})