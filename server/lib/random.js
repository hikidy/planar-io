// Seed math
exports.random = x => x * Math.random()

exports.randomAngle = () => Math.PI * 2 * Math.random()

exports.randomRange = (min, max) => Math.random() * (max - min) + min

exports.irandom = i => {
  let max = Math.floor(i)
  return Math.floor(Math.random() * (max + 1)) //Inclusive
}

exports.irandomRange = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //Inclusive
}

exports.gauss = (mean, deviation) => {
  let x1, x2, w
  do {
    x1 = 2 * Math.random() - 1
    x2 = 2 * Math.random() - 1
    w = x1 * x1 + x2 * x2
  } while (0 == w || w >= 1)

  w = Math.sqrt((-2 * Math.log(w)) / w)
  return mean + deviation * x1 * w
}

exports.gaussInverse = (min, max, clustering) => {
  let range = max - min
  let output = exports.gauss(0, range / clustering)

  while (output < 0)
    output += range

  while (output > range)
    output -= range

  return output + min
}

exports.gaussRing = (radius, clustering) => {
  let r = exports.random(Math.PI * 2)
  let d = exports.gauss(radius, radius * clustering)
  return {
    x: d * Math.cos(r),
    y: d * Math.sin(r),
  }
}

exports.chance = prob => exports.random(1) < prob

exports.dice = sides => exports.random(sides) < 1

exports.choose = (arr) => arr[exports.irandom(arr.length - 1)]

exports.chooseN = (arr, n) => {
  let o = []
  for (let i = 0; i < n; i++)
    o.push(arr.splice(exports.irandom(arr.length - 1), 1)[0])
  return o
}

exports.chooseChance = (...arg) => {
  let totalProb = 0
  for (let value of arg)
    totalProb += value

  let answer = exports.random(totalProb)
  for (let i = 0; i < arg.length; i++) {
    if (answer < arg[i]) return i
    answer -= arg[i]
  }
}

exports.chooseBotName = () => {
  return exports.choose([
    "Freddy fazbear!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
    "GRRRRRRRRRRRRR STOPO KILLING ME",
    "Hikidy123",
    "-KogaM-Scratch-",
    "Archimedes",
    "Akilina",
    "Anastasios",
    "Athena",
    "Alkaios",
    "Amyntas",
    "Aniketos",
    "Artemis",
    "Anaxagoras",
    "Apollon",
    "i died 2 die",
    "Rhombicosidodecahedron",
    "exodus is cool",
    "swaer woerd",
    "DUDE STOP KIL ME",
    "woomy arras is superior",
    "aps++ is funny",
    "ItsFunneh",
    "ItsNotFunneh",
    "you should kill yourself, NOW!",
    "gib token",
    "can i pls hav token",
    "PLEASE GIVE TOKEN",
    "GRRRRRRRRRRRRRRRRRRRRRRRR GIVE ME TOKEN!!!!",
    "boss",
    "definetly not an ai",
    "rude msan",
    "team?",
    "spin to team",
    "gen z",
    "don't squint your eyes",
    "die",
    "gfoguyhsdfg",
    "stop it",
    "team plox",
    "uwu",
    "Berezhany",
    "Lutsk",
    "Dobromyl",
    "Akkerman",
    "Palanok",
    "Zolochiv",
    "Palanok",
    "Mangup",
    "Olseko",
    "Brody",
    "Isiaslav",
    "Kaffa",
    "Bilhorod",
    "Vesta",
    "Juno",
    "Orcus",
    "Janus",
    "Minerva",
    "Ceres",
    "pluto",
    "kurwa",
    "poland cannot into space",
    "guten tag",
    "arena closer",
    "arena opener",
    "SUPER OP STRONG TANK",
    "Xx666Plaguama666xX",
    "plagueama",
    "sus",
    "king of diep",
    "not an ai",
    "LA2",
    "KA2",
    "U~UwU~!",
    "sexy",
    "ARENA CLOSER OF DOOM",
    "🔥fyre🔥",
    "susususususuusu",
    "🌸FlutterNova🌸",
    "GloboRythm🎵",
    "ZyxxVortex🌀",
    "🚀PlasmaWhiz🚀",
    "BloopBlitz💥",
    "🌙LuminaZing🌙",
    "WiggleWarp🔮",
    "YazzTechie🔧",
    "SploxGalaxy🌌",
    "🔥FlareGlimZ🔥",
    "QuaztPlunge🌊",
    "BazzleBoom💫",
    "🎮FunkFiz🎮",
    "ZippityZap⚡",
    "🎭WhimzorVibe🎭",
    "DazzlePlex🌟",
    "GlixoTwist🌀",
    "🌈JubiloRazz🌈",
    "SplurgeSpark💥",
    "WyrdoGlow🔮",
    "🔐SphinxRazzle🔐",
    "NebuloGrip🚀",
    "🌸TwirlGloFizz🌸",
    "ZingRazzmatazz🌠",
    "BizzWarp🌪️",
    "FizzBlipz🎶",
    "🔥fyre🔥",
    "ShimmerZing✨",
    "🚦ZapSpry🚦",
    "QuirkyQuazmo🤪",
    "RythmoRazzle🎶",
    "🎆GlimZest🎆",
    "ZorroZap⚡",
    "JazzleJinx🎸",
    "WhizZazzle🌠",
    "FloopVibra🎵",
    "🌊Zapparazz🌊",
    "MystiFizz🔮",
    "🎭ZanyZing🎭",
    "𝒻𝓁𝓊𝓉𝓉𝑒𝓇𝓃𝑜𝓋𝒶",
    "g𝓁𝑜𝒷𝑜𝓇𝓎𝓉𝒽𝓂🔮",
    "z𝓎𝓍𝓍𝓋𝑜𝓇𝓉𝑒𝓍",
    "𝒻𝓁𝓊𝓉𝓉𝑒𝓇𝓃𝑜𝓋𝒶🌟",
    "𝒷𝓁𝑜𝑜𝓅𝒷𝓁𝒾𝓉𝓏",
    "𝓁𝓊𝓂𝒾𝓃𝒶𝓏𝒾𝓃𝑔🎵",
    "w𝒾𝑔𝑔𝓁𝑒𝓌𝒶𝓇𝓅🚀",
    "y𝒶𝓏𝓏𝓉𝑒𝒸𝒽𝒾𝑒",
    "s𝓅𝓁𝑜𝓍𝒼𝑔𝒶𝓁𝒶𝓍𝓎",
    "𝒻𝓁𝒶𝓇𝑒𝑔𝓁𝒾𝓂𝓏",
    "q𝓊𝒶𝓏𝓉𝓅𝓁𝓊𝓃𝑔𝑒🔥",
    "b𝒶𝓏𝓏𝓁𝑒𝒷𝑜𝑜𝓂",
    "𝒻𝓊𝓃𝓀𝒻𝒾𝓏",
    "z𝒾𝓅𝓅𝒾𝓉𝓎𝓏𝒶𝓅🌙",
    "𝓁𝒶𝓂𝒶𝓉𝓁𝑒𝓉𝓈",
    "d𝒶𝓏𝓏𝓁𝑒𝓅𝓁𝑒𝓍",
    "g𝓁𝒾𝓍𝑜𝓉𝑒𝒸𝒽🌌",
    "s𝓅𝓁𝓊𝓇𝑔𝑔𝓈𝓅𝒶𝓇𝓀",
    "w𝓎𝓇𝒹𝑜𝑔𝓁𝑜𝓌🌈",
    "𝒻𝓁𝓊𝓂𝒾𝒹𝑔𝓁𝑜𝓌",
    "n𝑒𝒷𝓊𝓁𝑜𝑔𝓇𝒾𝓅🚦",
    "z𝒾𝓃𝑔𝓇𝒶𝓏𝓏𝓂𝒶𝓉𝒶𝓏𝓏",
    "b𝒾𝓏𝓓𝒾𝓈𝒸𝓄𝓋𝑒𝓇🌊",
    "f𝒾𝓏𝓏𝒷𝓁𝒾𝓅𝓏",
    "𝒻𝓁𝓊𝓎𝓇𝑒",
    "s𝒽𝒾𝓂𝓂𝑒𝓇𝒷𝓁𝒾𝓉𝓏",
    "q𝓊𝒾𝓇𝓀𝓎𝓆𝓊𝒶𝓏𝓂𝑜🎭",
    "j𝒶𝓏𝓏𝓁𝑒𝒿𝒾𝓃𝓍🎆",
    "w𝒽𝒾𝓏𝓏𝒶𝓈𝓅𝓁𝑒",
    "𝒻𝓁𝑜𝑜𝓅𝓋𝒾𝒷𝓇𝒶",
    "s𝓅𝓁𝒾𝓈𝓈𝒽𝓅𝓇𝓎",
    "w𝒽𝒾𝓏𝓏𝒶𝓈𝓅𝓇𝑒𝓈𝓈",
    "f𝓁𝑜𝑜𝓅𝓁𝒶𝓏",
    "m𝓎𝓈𝓉𝒾𝒻𝒾𝓏𝓏",
    "𝓏𝒾𝒹𝒹𝓁𝑒𝓉",
    "g𝓁𝒶𝓏𝓏𝓁𝒶𝓏𝓁𝑒",
    "That Guy","SOMEONE","꧁༺𝓘𝓷𝓼𝓪𝓷𝓲𝓽𝔂༻꧂","🅸 🅰🅼 🅶🅾🅳","I","jaffa calling","Ill Tear your eyes out..","Me-arac","Aniketos","🌌Miñe🌌","ℭ𝔬𝔣𝔣𝔢𝔢","Akilina","Mythical","exc","=","o o o o o o o o","!!!","Lixeiro do mal","Thanks M8","Frost? Mobile","Dream","We Do A Little Trolling","earth","NightFire","Free to insult","dino","AMOGUS??????????????","bruh","","No Surviors","<[AXS]> RASHOT","Pizza Bread","[lag]Armando","Gay Overlord","willim","Everything RAM Mobile","General","H̵͊̕ė̵̮l̷͎̈́l̵̅͛ơ̸͊","{WOF} Nightwing","footeloka","[⚔️wiki]₵₳V₳ⱠłɆⱤ","Jes;/;ter","Team Boom","🖤ISAAC🖤","naruto","занято42/Busybody42","A+","Raul39","Lety <3 :)","team protect","i will troll :D","heroy_105","[FBI]Σvi₺ℭℏἏ❀₴#1628","BigBadBoom","nope","glurip","ffk the desrtroy","Spin=Team","comrade","Alkali","Impact of TY-77","😈Stormys Domain😈","YOUR BAD = YOUR DEAD!!!","pushmetothe sancuary","Im not a tank","Snow","Hm","DanceTillYou'reDead","gmonster","Die!!!","developer","noob","zX-TwinChilla-Xz","[BK] [XC] PAKISTAN","Bryson","Musa♗ - The Shipwrecker","bob","Mothership Drone","t-rex vs raptor","mai","Arisu","gamer.io","RİKKET FAN","FOLLOW ME OCTO TANKS","XP_Toxic_CJS","TV","constructor","among us","jkl","XP_Toxic_CST","d","I love nahu","Spade","XxNicolas GamerxX","xAd_rian","FabianTu","Eminx","max","OOOOOOOOFfffffffffffffff","WalleeE"," KA2","MIKE","pedro :(","BEDROCK","Frostbite#6915","koishi","eu tenho a melhor mae^-^","asdfghjkl;:]@ouytrewq","😎👿david988😎👿","Zaphkiel","tryhard mode on !!!!!!!","⚰️🔥👻WITNESS ME👻🔥⚰️","[Σϰ][Ωϰ] ...","That Guy","Aniketos","Play wommy-arras.io","ARMADA","// jAX","🔱Ƒιяєωσяк🚫","DEATH TO TEAMERS","Milan","your worst lightmare","XxshadowxX Ilove u","Alkaios"," 🥧π🥧","🔱 𝓽𝓲𝓶𝓮𝓽𝓸𝓭𝓲𝓮 🚫","Can u see me? :D","Apollon","ok","Crazyattacker9YT","XtremeJoan","cz sk","give me your butt dude","[🌀]Brain𝐼nHalf","Hexagon Temple","-_-","You","CACA","Athena","Artemis","DOEBLE TOP!","the only one","hi (original)","SOMEONE","can you beat me smashey","s7ㅋㅋㅋ","pika :P","Fallen","Big Papa","m̸̐̽ᵃ𝔭ʟₑ౪🌸🎀🌺🌷🩰🧁","GONIALS","прівіт","lnwZa007","🐸🐌【HapPy】","Daluns the one?","CAMALEON","factory not op :(","/BIG BOYRockety","circus of the dead","𝒮𝔭00𝔡𝔢𝔯𝔪𝔞𝔫","hackercool","🔱⨊ $؋₲₥₳🚫","Go Away","Protector Of Worlds","me","vn","RAHAN","........................","Soviet Union","Flash","❰𝞑𝞡𝞣❱ 𝝙𝝼𝝴𝝶𝘂𝝴","🌌Miñe🌌","King Pikachu","EzzeKiel","h","Homeless man","Asdfghjkjjhgfdsdfghjhgfd","Felchas","starwarrior","Spin=Team","TERA BAAP✿AYA★💓Bhagwanmr noob","Dream","DIEGO","Lagmat YT = 🎷 channel","be dum like me","lagg","APplayer113","tiky","🇧🇷HUE🇧🇷","am low, I Need Backup!","Thunder(Tapenty)","Beeg Yoshi Squad","reeeeeeee",";]","Arena Closer","abd lhalim","Badaracco","emir","Türk  polisi","Paladin","stop plz","d","(❁´◡`❁)(*/ω＼*)(^///^):-)","glenn <3 rachel","[AI] Kidell","dan","I am milk","Türk'ün Gücü Adına🌸 OwO","҉s҉h҉u҉n҉a҉","Teuge","Dave","abbi_alin","im a joke","huy vn :D","🌊🦈🌊","scortt reach 1m friend","ET","vlasta","𝒰𝒞ℋİℋ𝒜","Nyroca","German","[ɨƙ]ɳøʘɗɫɚ","I'm so lag(sinbadx)","🇸🇦","asdf","X℘ExͥplͣoͫຮᎥveﾂ✔","Apollon","^^","I","natasha","no me mates amigos","dáwsda","FEWWW....","lol","A team with 💚 is doomed","Raul39","Noob AC","ddqdqwdqw","[MG] GLITCH TR","LemonTea","Party_CZE","Diep_daodan","What?","kuro","cute pet","demon","ALEXANDER👑💎","Cursed","copy The tank","","dsa.","Vinh HD","Mago","hi UwU","avn","d","naruto","ARRASMONSTER KILLYOUha5x","MICAH","Jotaro","king vn","𝕰𝖓𝖊𝖒𝖞_𝕯𝖔𝖌","Raoof","Leviathan","SUN","❬☬❭  ⚜️Ð𝐙𝕐 ッ 〜 🌷","FALLEN SWORD","🇧🇷HUE🇧🇷","BoyFriend [FnF]","motherhip","𝓼𝓮𝓻𝓲𝓸𝓾𝓼𝓵𝔂","lolera","Dark Devil","press F","Detective Conan","Pet","MAICROFT","Holy","IXGAMËSS","h","umm,dab?","Ihavelocty","ewqasd2021vinicius","[🇻🇳] Hùng","I Love you","Healer","hacker lololololol","boooster.io","dscem","bibi","TEAM POLICE","","jj","SHARK","arena closer","•长ąϮëąℓ⁀ᶜᵘᵗᵉ╰ ‿ ╯ ☂","Weяw𝕖𝐑ώ€я𝓺q2️⃣prankeo","nani?","OTTOMAN EMPİRE","------------------------","kr9ssy","not P","winnner","friendly","genocide BBB","HI","I'm poor:(fortnine duo","JSABJSAB","jmanplays","starwarrior","were","PLAYER","mothership protrector 1","Gamer🎮","6109","PRO","enr","_____P___E___N___E______","annialator","kaio","(UwU)","Arras.io","...","Denied","Paladin","Zaphkiel","Pikachu ^~^","ah~","Steve","{<:Void","AƓ Aηgєℓ#Use AƓ  Tag","Amyntas","⁄•⁄ω⁄•⁄卡比獸🖤","poui","PH - r҉a҉i҉n҉","A M O U G U S","idk bro","Artemis","Hey team","b T規RㄩIes矩W ˋ*ˊd","한국 Lime Lemon","phong fan vn!","me fan valt shu lui free","Mobile no work","Hi 香港😘> pls don't kill�","[/G]/O1D SL/Y3R","mil leches","Major Meowzer YT","Providence","Lore","ОХОТНИК","vordt","Linghtning McQueen","Pentagon Nest Miner","꧁☬☬😈꧁꧂ ☠HARSH ☠꧁꧂😈 ☬☬꧂","vovotthh","Nope :))","||||||||||||||||||||||||"," ꧁ℤ𝕖𝔱𝔥𝔢𝔯𝔫𝕚𝕒꧂","CTRL+W=godmode(viet nam)","🔱LordΛภ𝓰𝖑Ɇ🚫","1 + 1 = 3","XYZ","[PFF][|| ı'ɱ ცąცყ||]","Boop","RAPTURE","o","/.//.[]","","Roskarya","no. 9","Lost MvP#7777","Jon","🔱Saint LilY⚜🚫","Green.grey.purple.blue.",":P","C - 4 Spank Spank","VN","Snapwingfriendstriker007","overlord is:):)"," pluss亗","[Repsaj]ĎąŗĸMãştɛɾ","Phoenix_Gamer","Relatively Harmless Tonk","Array.io","Spin=Team","I am your shield :)","j","1","TheBasil","【The L1litle One】","X.Clamator .YT","ENDERMÉN","CC","BEST","Among Us","lobo","asky","Opan Come Go Note Yeah","Bowler","ad","haha bowler no 1M","Tin","[GZ]GESETA","woomy arras.io","Remuru Tempest","PvPok","Scarlet Rage(mobile)","nam","STRIKER007","[VN] MeltedGirl","100000000000000000000000","eee","Q","mắm tôm","REVENGE✨","Achi","AC Perú","bvnfgh","hi","Pet :3","little bitch","khang","lets be freinds guys!!!!","sans pro","phantanduy","[AC] VGamerZ","StevenUniverseFan","azen","Waffles","jesian","Ⱬł₭Ɽł₮₳Ӿ","Gay Overlord","pikachuboi124","mundo x bomb","ducky","🌀DESTROYER🌀","Stupid Overlord","++","phantantri","VoteOutRacists","Denied","floof","Bowler","Sinbadx","🎈IT🎈 APOCOLYPSE","ExpectMe2BeDeadCuzOfLag","Damage","Aniketos","⨝∑₮ξ₹ͶΛL⨝","Artemis","_","Archimedes","♪KING♫♕-dev#3917","no","Doofus","MINI defender","꧁✯[🕋]M RSHMÆLLØW 𖣘✯꧂","Alkaios","(・ω・＼)i am(/・ω・)/pinch!","Việt Cường 2A5","I Love you","fdsmn","!","R","you shall not pass!!","harmless shower","lol","Mythical","oath sign","finland","bob","hetman666","lio","VN~I LoVe You Chu Ca Mo","Your mom","Friendly","the protector","leave me alone pls","Grill my flippen butt","n o i c e","bo","onsen","._.","Frostbite#6915","💞","CTRL+W=godmode","noob","ad","Soviet Union","be freind","   HCM MUÔN NĂM",":P","FALLEN SWORD","anh tuấn anh nè tôm","fnf is a poop","Zp r oZ","꧁҈$ꫀꪖ  ,҉ℭն𝚌մꪑ𝜷ꫀ᥅ ༻","VN:P","margaret thatcha","[VN]Ảo Vãi Lồn🤔","ㅋㅋㄹㅃㅃ","pin h 3","Vỹ đẹp zai","Snapwingfriendstriker007","everybodybecomespike","a","1","vyde","Mothership Drone","op","click \"F\"","Noob","🐰chiro🐰","PJfd13","CELESTIAL","Team","Pet :3","FeZTiVAL","anime","t","C - 4 Spank Spank","Rockety","Valley","Im New,dont kill me pls","Friends?","하이루","KILL ME I DARE YOU","pet basic -(======>","pet","♕ ❤VIỆT NAM ❤♕","fuck","team ?","꧁༒☬✞😈VîLLãñ😈✞☬༒ ꧂","Công","Opan Come Go Note Yeah","1 + 1 = 3","Elite Knigh*","vn{CHP}","Dasher8162","Xlo-250","under_gamer092","VN","Mtp tv tiktoker","Denied","Paladin","『YT』Just𝕸𝖟𝖆𝖍ヅ","shame","Corrupt Y","spin= team","Please no more Y team","Syringe","Pickerel Frog","Bitter Dill","Your Triggering Me 🤬","117","FleRex","Archimedes","Neonlights","🌌Miñe🌌","〖-9999〗-҉R҉e҉X҉x҉X҉x҉X҉","FEWWW....","bob","0800 fighter¯_(ツ)_/¯","◯ . ◯⃨̅","𝕁𝕖𝕤𝕥𝕖𝕣","Apollon","Ɓṏṙḕd Ṗläÿệŕ {✨}","i never bin 1 mill","残念な人","KillerTMSJ","Дракон","[VN]Ảo Vãi Lồn🤔","😎","warrion","ARMADA","asd","alr-ight","AAAAAAAAAAAAAAAAAAAAAAAA","♣☆  ⓂⒶ𝓻s𝐇Ⓜ𝔼𝕝ᒪσω  ☯♚","FREJEA CELESTIAL 1.48MXyn","poker 567","C","4tomiX","meliodas","Việt Cường 2A5","(ZV) foricor","","Marxtu","me?? 😢","m̸̐̽ᵃ𝔭ʟₑ౪🌸🎀🌺🌷🩰🧁","PeaceKeeper","Eeeeeeva","diện","[MM]  Ⓕ𝓸𝓻𝓫𝓲𝓭𝓭𝓮𝓷","Doofus","TS/RRRR","Nothing.","🐶(X)~pit¥🐺te matare jajaja","⌿⏃⋏⎅⏃","go","[PFF][|| ı'ɱ ცąცყ||]","hola","polyagon","Galactic slush","9999999999999999999999dx","zaphkiel celestial","noob","$$$%$la plaga$%$$$","Sorry broh","Roberto","EHSY BAAA","Nnmnnnmmmnmmmm","use fighter plsss :)","Mini","spitandsteelfriend",";)","lol","Mobile player","the ultimate multitool","i vow to protect","oofania","hi","why am i here","H̵͊̕ė̵̮l̷͎̈́l̵̅͛ơ̸͊","A.L.","Hi","ONE SHOT","luis","saitan","Felchas","Im gonna knock you out","Aquiles TEAM LOVE","qwertyuiop",":3","diep.io","invisible drones","team plz:(","DIONAX","again and again","100000000000000000000000","nicolas123","JESUS E AMOR"

  ])
}

exports.chooseBossName = (code, n) => {
  switch (code) {
    case "a":
      return exports.chooseN(
        [
          "Archimedes",
          "Akilina",
          "Anastasios",
          "Athena",
          "Alkaios",
          "Amyntas",
          "Aniketos",
          "Artemis",
          "Anaxagoras",
          "Apollon",
        ],
        n
      )
    case "castle":
      return exports.chooseN(
        [
          "Berezhany",
          "Lutsk",
          "Dobromyl",
          "Akkerman",
          "Palanok",
          "Zolochiv",
          "Palanok",
          "Mangup",
          "Olseko",
          "Brody",
          "Isiaslav",
          "Kaffa",
          "Bilhorod",
        ],
        n
      )
    case "zaphkiel":
      return "Zaphkiel"
    case "paladin":
      return "Paladin"
    case "theia":
      return "Theia"
    case "freyja":
      return "Freyja"
    case "nyx":
      return "Nyx"
    case "alviss":
      return "Alviss"
    case "tyr":
      return "Tyr"
    case "fiolnir":
      return "Fiolnir"
    case "ragnarok":
      return "Ragnarok"
    case "kronos":
      return "Kronos"
    case "legion":
      return exports.chooseN(
        [
          "Vesta",
          "Juno",
          "Orcus",
          "Janus",
          "Minerva",
          "Ceres",
        ],
        n
      )
    case "pumpkin":
      return "Jack Skeleton"
    case "santa":
      return "Santa"
    case "krampus":
      return "Krampus"
    case "vesta":
      return "Vesta"
    default:
      return "missingno"
  }
}
