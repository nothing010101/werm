const Se = 1e3
  , Oe = 110;
const a = {
    Invalid: 0,
    Gray_100: 1,
    Gray_200: 2,
    Gray_300: 3,
    Red_100: 4,
    Red_200: 5,
    Red_300: 6,
    Red_400: 7,
    Orange_100: 8,
    Orange_200: 9,
    Orange_300: 10,
    Orange_400: 11,
    Yellow_100: 12,
    Yellow_200: 13,
    Yellow_300: 14,
    Green_100: 15,
    Green_200: 16,
    Green_300: 17,
    Green_400: 18,
    Teal_100: 19,
    Teal_200: 20,
    Teal_300: 21,
    Blue_100: 22,
    Blue_200: 23,
    Blue_300: 24,
    Violet_100: 25,
    Violet_200: 26,
    Purple_100: 27,
    Purple_200: 28,
    Purple_300: 29,
    Purple_400: 30,
    Pink_100: 31,
    Pink_200: 32,
    Pink_300: 33,
    Pink_400: 34,
    Pink_1: 100,
    Green_1: 101,
    Purple_1: 102,
    Aqua_1: 103,
    Yellow_1: 104,
    Orange_1: 105,
    Red_1: 106,
    Special_Blitz: 110,
    Skin_Robot: 200,
    Skin_Genesis: 201,
    Skin_Origin: 202,
    Skin_0xGrsk: 203,
    Skin_Alucard: 204,
    Skin_Nata: 205,
    Skin_TurboCow: 206,
    Skin_TurboRacer: 207,
    Skin_Skull: 208,
    Skin_Frost: 209,
    Skin_Lightning: 210,
    Skin_PLACEHOLDER_1: 211,
    Skin_PLACEHOLDER_2: 212,
    Skin_PLACEHOLDER_3: 213,
    Skin_PLACEHOLDER_4: 214,
    Skin_PLACEHOLDER_5: 215,
    Skin_PLACEHOLDER_6: 216,
    Skin_PLACEHOLDER_7: 217,
    Skin_PLACEHOLDER_8: 218,
    Skin_PLACEHOLDER_9: 219
}
  , g = Object.fromEntries(Object.entries(a).map( ([n,r]) => [r, n]))
  , b = Object.values(a)
  , R = n => g[n] != null
  , K = n => 1e3 <= n && n <= 1109
  , Re = n => 1e3 <= n && n <= 1109
  , M = n => R(n) || K(n)
  , x = a.Gray_100
  , B = a.Pink_400
  , V = a.Pink_1
  , W = a.Red_1
  , E = a.Gray_100
  , p = a.Skin_Lightning
  , I = 1e3
  , L = 1109
  , U = n => x <= n && n <= B
  , F = n => V <= n && n <= W
  , De = b.filter(F)
  , Ae = b.filter(U)
  , $ = (n, r) => {
    const i = n >> 16 & 255
      , t = n >> 8 & 255
      , s = n >> 0 & 255;
    return `rgb(${i}, ${t}, ${s})`
}
  , pe = (n, r=!1) => `#${n.toString(16).padStart(r ? 8 : 6, "0")}`
  , T = {
    [a.Invalid]: 16711935,
    [a.Gray_100]: 14408932,
    [a.Gray_200]: 9934743,
    [a.Gray_300]: 5855577,
    [a.Red_100]: 16761281,
    [a.Red_200]: 16742785,
    [a.Red_300]: 12588600,
    [a.Red_400]: 6094861,
    [a.Orange_100]: 16758129,
    [a.Orange_200]: 16745788,
    [a.Orange_300]: 14176512,
    [a.Orange_400]: 8335360,
    [a.Yellow_100]: 16773513,
    [a.Yellow_200]: 16633362,
    [a.Yellow_300]: 13404930,
    [a.Green_100]: 8244866,
    [a.Green_200]: 6553506,
    [a.Green_300]: 62561,
    [a.Green_400]: 3050292,
    [a.Teal_100]: 6148057,
    [a.Teal_200]: 4576962,
    [a.Teal_300]: 2125694,
    [a.Blue_100]: 6532351,
    [a.Blue_200]: 30719,
    [a.Blue_300]: 18070,
    [a.Violet_100]: 11050495,
    [a.Violet_200]: 5652926,
    [a.Purple_100]: 14196223,
    [a.Purple_200]: 12276991,
    [a.Purple_300]: 9240811,
    [a.Purple_400]: 5046401,
    [a.Pink_100]: 16762601,
    [a.Pink_200]: 16744398,
    [a.Pink_300]: 16718515,
    [a.Pink_400]: 12189823,
    [a.Pink_1]: 15615604,
    [a.Green_1]: 8244866,
    [a.Purple_1]: 15499251,
    [a.Aqua_1]: 4179665,
    [a.Yellow_1]: 16633362,
    [a.Orange_1]: 16673297,
    [a.Red_1]: 16734039,
    [a.Special_Blitz]: 14374400,
    [a.Skin_Robot]: 12639458,
    [a.Skin_Genesis]: 16228096,
    [a.Skin_Origin]: 12500923,
    [a.Skin_0xGrsk]: 7893048,
    [a.Skin_Alucard]: 7952533,
    [a.Skin_Nata]: 4039763,
    [a.Skin_TurboCow]: 7353625,
    [a.Skin_TurboRacer]: 16336528,
    [a.Skin_Skull]: 15589570,
    [a.Skin_Frost]: 741781,
    [a.Skin_Lightning]: 15180544,
    [a.Skin_PLACEHOLDER_1]: 16711935,
    [a.Skin_PLACEHOLDER_2]: 16711935,
    [a.Skin_PLACEHOLDER_3]: 16711935,
    [a.Skin_PLACEHOLDER_4]: 16711935,
    [a.Skin_PLACEHOLDER_5]: 16711935,
    [a.Skin_PLACEHOLDER_6]: 16711935,
    [a.Skin_PLACEHOLDER_7]: 16711935,
    [a.Skin_PLACEHOLDER_8]: 16711935,
    [a.Skin_PLACEHOLDER_9]: 16711935
}
  , Ie = {
    [a.Invalid]: 16727295,
    [a.Gray_100]: 16185343,
    [a.Gray_200]: 11382189,
    [a.Gray_300]: 6974058,
    [a.Red_100]: 16767963,
    [a.Red_200]: 16748695,
    [a.Red_300]: 14037576,
    [a.Red_400]: 7148570,
    [a.Orange_100]: 16764552,
    [a.Orange_200]: 16751698,
    [a.Orange_300]: 15820060,
    [a.Orange_400]: 9584657,
    [a.Yellow_100]: 16777112,
    [a.Yellow_200]: 16771130,
    [a.Yellow_300]: 15048742,
    [a.Green_100]: 9824153,
    [a.Green_200]: 8585148,
    [a.Green_300]: 4718458,
    [a.Green_400]: 4562759,
    [a.Teal_100]: 7923954,
    [a.Teal_200]: 6615259,
    [a.Teal_300]: 3637648,
    [a.Blue_100]: 8307711,
    [a.Blue_200]: 4164351,
    [a.Blue_300]: 2577832,
    [a.Violet_100]: 12629247,
    [a.Violet_200]: 6967761,
    [a.Purple_100]: 15840767,
    [a.Purple_200]: 13789951,
    [a.Purple_300]: 10693119,
    [a.Purple_400]: 6166417,
    [a.Pink_100]: 16769279,
    [a.Pink_200]: 16750566,
    [a.Pink_300]: 16728521,
    [a.Pink_400]: 13576849,
    [a.Pink_1]: 16735880,
    [a.Green_1]: 9824153,
    [a.Purple_1]: 16750335,
    [a.Aqua_1]: 6217450,
    [a.Yellow_1]: 16771130,
    [a.Orange_1]: 16744492,
    [a.Red_1]: 16739947,
    [a.Special_Blitz]: 15492366,
    [a.Skin_Robot]: 14350333,
    [a.Skin_Genesis]: 16757544,
    [a.Skin_Origin]: 13224131,
    [a.Skin_0xGrsk]: 16777158,
    [a.Skin_Alucard]: 8939429,
    [a.Skin_Nata]: 2575641,
    [a.Skin_TurboCow]: 12543008,
    [a.Skin_TurboRacer]: 16604318,
    [a.Skin_Skull]: 15983818,
    [a.Skin_Frost]: 2923475,
    [a.Skin_Lightning]: 15841820,
    [a.Skin_PLACEHOLDER_1]: 16711935,
    [a.Skin_PLACEHOLDER_2]: 16711935,
    [a.Skin_PLACEHOLDER_3]: 16711935,
    [a.Skin_PLACEHOLDER_4]: 16711935,
    [a.Skin_PLACEHOLDER_5]: 16711935,
    [a.Skin_PLACEHOLDER_6]: 16711935,
    [a.Skin_PLACEHOLDER_7]: 16711935,
    [a.Skin_PLACEHOLDER_8]: 16711935,
    [a.Skin_PLACEHOLDER_9]: 16711935
}
  , Y = {
    ...g,
    [a.Skin_Robot]: "Robot",
    [a.Skin_Genesis]: "Genesis",
    [a.Skin_Origin]: "Origin",
    [a.Skin_0xGrsk]: "0xGrsk",
    [a.Skin_Alucard]: "Alucard",
    [a.Skin_Nata]: "Goatnataaaaa",
    [a.Skin_TurboCow]: "Turbo Cow",
    [a.Skin_TurboRacer]: "Turbo Racer",
    [a.Skin_Skull]: "Skull",
    [a.Skin_Frost]: "Frost",
    [a.Skin_Lightning]: "Lightning"
}
  , he = Object.fromEntries(Object.entries(T).map( ([n,r]) => [n, $(r)]))
  , G = n => 1e3 <= n && n <= 1009 ? 10113811 : 1010 <= n && n <= 1019 ? 4335333 : 1020 <= n && n <= 1029 ? 33717 : 1030 <= n && n <= 1039 ? 13197569 : 1040 <= n && n <= 1049 ? 2252572 : 1050 <= n && n <= 1059 ? 8672025 : 1060 <= n && n <= 1069 ? 13713665 : 1070 <= n && n <= 1079 ? 875989 : 1080 <= n && n <= 1089 ? 5788481 : 1090 <= n && n <= 1099 ? 8556054 : 1100 <= n && n <= 1109 ? 10552576 : 16711935
  , Ne = n => 1e3 <= n && n <= 1009 ? 15764494 : 1010 <= n && n <= 1019 ? 89306 : 1020 <= n && n <= 1029 ? 2288634 : 1030 <= n && n <= 1039 ? 15837184 : 1040 <= n && n <= 1049 ? 7456592 : 1050 <= n && n <= 1059 ? 12742682 : 1060 <= n && n <= 1069 ? 16609281 : 1070 <= n && n <= 1079 ? 420060 : 1080 <= n && n <= 1089 ? 8946024 : 1090 <= n && n <= 1099 ? 10066465 : 1100 <= n && n <= 1109 ? 16058112 : 16711935
  , He = n => R(n) ? T[n] : G(n)
  , ke = (n, r="en") => R(n) ? Y[n] : `NFT #${n - 1e3 + 1}`
  , f = (n, r) => {
    let i = n;
    do
        r > 0 ? i < E ? i = E : i === p ? i = I : i >= L ? i = E : i += 1 : i > L ? i = L : i === I ? i = p : i <= E ? i = L : i -= 1;
    while (!M(i));
    return i
}
  , ge = n => f(n, 1)
  , be = n => f(n, -1)
  , e = {
    Homeless: 1,
    Soldier: 2,
    Elite: 3,
    Spartan: 4,
    Commander: 5,
    GenesisTurbo: 10,
    GenesisChain: 11,
    GenesisFlame: 12,
    GenesisDefender: 13,
    GenesisGuardian: 14,
    SamuraiTraining: 20,
    Melody: 21,
    Alien: 22,
    FireGod: 23,
    WermWerm: 24,
    JujutsuKaisen: 25,
    Napoleon: 26,
    IceGod: 27,
    SamuraiRaid: 28,
    Meadow: 29,
    Void: 30,
    Praying: 31,
    Steampunk: 32,
    Sage: 33,
    Elizabeth: 34,
    PlatedHerald: 35,
    PlatedCapedHerald: 36,
    Pharaoh: 37,
    CyberDive: 38,
    Necromancer: 39,
    Commander2: 40,
    Granite: 41,
    Ronin: 42,
    Patriot: 43,
    Musketeer: 44,
    Phoenix: 45,
    SpecOps: 46,
    DJ: 47,
    Pilot: 48,
    Chef: 49,
    Origin: 50,
    _0xGrsk: 51,
    Alucard: 52,
    Nata: 53,
    TurboCow: 54,
    TurboRacer: 55,
    Skull: 56,
    Frost: 57,
    Lightning: 58,
    PLACEHOLDER_SKIN_1: 59,
    PLACEHOLDER_SKIN_2: 60,
    PLACEHOLDER_SKIN_3: 61,
    PLACEHOLDER_SKIN_4: 62,
    PLACEHOLDER_SKIN_5: 63,
    PLACEHOLDER_SKIN_6: 64,
    PLACEHOLDER_SKIN_7: 65,
    PLACEHOLDER_SKIN_8: 66,
    PLACEHOLDER_SKIN_9: 67,
    UndeadPirate: 100,
    PlagueDoctor: 101,
    Panda: 102,
    Corona: 103,
    PLACEHOLDER_215: 104,
    PLACEHOLDER_220: 105,
    PLACEHOLDER_225: 106,
    PLACEHOLDER_230: 107,
    PLACEHOLDER_235: 108,
    PLACEHOLDER_240: 109,
    PLACEHOLDER_245: 110,
    PLACEHOLDER_250: 111,
    PLACEHOLDER_255: 112
}
  , X = Object.values(e)
  , c = n => X.includes(n)
  , S = [[e.Homeless, 0], [e.Soldier, 10], [e.Elite, 20], [e.Spartan, 30], [e.Commander, 40], [e.SamuraiTraining, 45], [e.Melody, 50], [e.Alien, 55], [e.FireGod, 60], [e.WermWerm, 65], [e.JujutsuKaisen, 70], [e.Napoleon, 75], [e.IceGod, 80], [e.SamuraiRaid, 85], [e.Meadow, 90], [e.Void, 95], [e.Praying, 100], [e.Steampunk, 105], [e.Sage, 110], [e.Elizabeth, 115], [e.PlatedHerald, 120], [e.PlatedCapedHerald, 125], [e.Pharaoh, 130], [e.CyberDive, 135], [e.Necromancer, 140], [e.Commander2, 145], [e.Granite, 150], [e.Ronin, 155], [e.Patriot, 160], [e.Musketeer, 165], [e.Phoenix, 170], [e.SpecOps, 175], [e.DJ, 180], [e.Pilot, 185], [e.Chef, 190], [e.UndeadPirate, 195], [e.PlagueDoctor, 200], [e.Panda, 205], [e.Corona, 210], [e.PLACEHOLDER_215, 215], [e.PLACEHOLDER_220, 220], [e.PLACEHOLDER_225, 225], [e.PLACEHOLDER_230, 230], [e.PLACEHOLDER_235, 235], [e.PLACEHOLDER_240, 240], [e.PLACEHOLDER_245, 245], [e.PLACEHOLDER_250, 250], [e.PLACEHOLDER_255, 255]]
  , Te = S.map( ([n]) => n)
  , h = n => e.Homeless <= n && n <= e.Commander || e.SamuraiTraining <= n && n <= e.Chef || e.UndeadPirate <= n && n <= e.PLACEHOLDER_255
  , Ge = [e.PLACEHOLDER_215, e.PLACEHOLDER_220, e.PLACEHOLDER_225, e.PLACEHOLDER_230, e.PLACEHOLDER_235, e.PLACEHOLDER_240, e.PLACEHOLDER_245, e.PLACEHOLDER_250, e.PLACEHOLDER_255, e.PLACEHOLDER_SKIN_1, e.PLACEHOLDER_SKIN_2, e.PLACEHOLDER_SKIN_3, e.PLACEHOLDER_SKIN_4, e.PLACEHOLDER_SKIN_5, e.PLACEHOLDER_SKIN_6, e.PLACEHOLDER_SKIN_7, e.PLACEHOLDER_SKIN_8, e.PLACEHOLDER_SKIN_9]
  , z = {
    en: {
        [e.Homeless]: "Homeless werm",
        [e.Soldier]: "Soldier werm",
        [e.Elite]: "Elite werm",
        [e.Spartan]: "Spartan werm",
        [e.Commander]: "Commander werm",
        [e.GenesisTurbo]: "Eclipse Genesis werm",
        [e.GenesisChain]: "Eclipse Genesis werm",
        [e.GenesisFlame]: "Eclipse Genesis werm",
        [e.GenesisDefender]: "Eclipse Genesis werm",
        [e.GenesisGuardian]: "Eclipse Genesis werm",
        [e.SamuraiTraining]: "Samurai werm",
        [e.Melody]: "Builder werm",
        [e.Alien]: "Nova werm",
        [e.FireGod]: "Flaming warrior werm",
        [e.WermWerm]: "Werm werm werm",
        [e.JujutsuKaisen]: "Sojo Gatoru werm",
        [e.Napoleon]: "Napoleon werm",
        [e.IceGod]: "Poseidon werm",
        [e.SamuraiRaid]: "Samurai werm",
        [e.Meadow]: "Meadow werm",
        [e.Void]: "Void werm",
        [e.Praying]: "Praying werm",
        [e.Steampunk]: "Steampunk werm",
        [e.Sage]: "Sage werm",
        [e.Elizabeth]: "Elizabeth werm",
        [e.PlatedHerald]: "Armored werm",
        [e.PlatedCapedHerald]: "Admiral werm",
        [e.Pharaoh]: "Pharaoh werm",
        [e.CyberDive]: "Cyber werm",
        [e.Necromancer]: "Necromancer werm",
        [e.Commander2]: "Commander werm #2",
        [e.Granite]: "Granite werm",
        [e.Ronin]: "Ronin werm",
        [e.Patriot]: "Patriot werm",
        [e.Musketeer]: "Musketeer werm",
        [e.Phoenix]: "Phoenix werm",
        [e.SpecOps]: "Spec Ops werm",
        [e.DJ]: "DJ werm",
        [e.Pilot]: "Pilot werm",
        [e.Chef]: "Chef werm",
        [e.Origin]: "Origin werm",
        [e._0xGrsk]: "0xGrsk's custom werm",
        [e.Alucard]: "Alucard werm",
        [e.Nata]: "Goatnataaaaa werm",
        [e.TurboCow]: "Turbo Cow werm",
        [e.TurboRacer]: "Turbo Racer werm",
        [e.Skull]: "Skull werm",
        [e.Frost]: "Frost werm",
        [e.Lightning]: "Lightning werm",
        [e.PLACEHOLDER_SKIN_1]: "PLACEHOLDER SKIN 3",
        [e.PLACEHOLDER_SKIN_2]: "PLACEHOLDER SKIN 2",
        [e.PLACEHOLDER_SKIN_3]: "PLACEHOLDER SKIN 3",
        [e.PLACEHOLDER_SKIN_4]: "PLACEHOLDER SKIN 4",
        [e.PLACEHOLDER_SKIN_5]: "PLACEHOLDER SKIN 5",
        [e.PLACEHOLDER_SKIN_6]: "PLACEHOLDER SKIN 6",
        [e.PLACEHOLDER_SKIN_7]: "PLACEHOLDER SKIN 7",
        [e.PLACEHOLDER_SKIN_8]: "PLACEHOLDER SKIN 8",
        [e.PLACEHOLDER_SKIN_9]: "PLACEHOLDER SKIN 9",
        [e.UndeadPirate]: "Pirate captain werm",
        [e.PlagueDoctor]: "Plague doctor werm",
        [e.Panda]: "Panda werm",
        [e.Corona]: "Corona werm",
        [e.PLACEHOLDER_215]: "PLACEHOLDER LEVEL 215",
        [e.PLACEHOLDER_220]: "PLACEHOLDER LEVEL 220",
        [e.PLACEHOLDER_225]: "PLACEHOLDER LEVEL 225",
        [e.PLACEHOLDER_230]: "PLACEHOLDER LEVEL 230",
        [e.PLACEHOLDER_235]: "PLACEHOLDER LEVEL 235",
        [e.PLACEHOLDER_240]: "PLACEHOLDER LEVEL 240",
        [e.PLACEHOLDER_245]: "PLACEHOLDER LEVEL 245",
        [e.PLACEHOLDER_250]: "PLACEHOLDER LEVEL 250",
        [e.PLACEHOLDER_255]: "PLACEHOLDER LEVEL 255"
    }
}
  , j = {
    en: {
        [e.Homeless]: "Beginning the journey.",
        [e.Soldier]: "First steps.",
        [e.Elite]: "Moving up the ranks.",
        [e.Spartan]: "High-ranking soldier.",
        [e.Commander]: "Claiming victory!",
        [e.GenesisTurbo]: "Visiting Turbo.",
        [e.GenesisChain]: "The Chain's first breath.",
        [e.GenesisFlame]: "Sparking the Genesis flame.",
        [e.GenesisDefender]: "Defending the firewall.",
        [e.GenesisGuardian]: "Peaceful guardian.",
        [e.SamuraiTraining]: "Midnight training.",
        [e.Melody]: "Crafting melodies.",
        [e.Alien]: "Total lunar eclipse.",
        [e.FireGod]: "At home in fire.",
        [e.WermWerm]: "Grow the werm.",
        [e.JujutsuKaisen]: "Nah, I'd werm.",
        [e.Napoleon]: "Leading the charge…?",
        [e.IceGod]: "The calm inside the storm.",
        [e.SamuraiRaid]: "Air raid.",
        [e.Meadow]: "Peace and quiet.",
        [e.Void]: "Cosmic tea.",
        [e.Praying]: "Paying respects to God.",
        [e.Steampunk]: "Time to wermble.",
        [e.Sage]: "Nurturing slowly.",
        [e.Elizabeth]: "Is this even a werm?",
        [e.PlatedHerald]: "Rallying the troops.",
        [e.PlatedCapedHerald]: "Leading the troops.",
        [e.Pharaoh]: "Into the tomb.",
        [e.CyberDive]: "Diving into the code.",
        [e.Necromancer]: "The summoning.",
        [e.Commander2]: "Exploring ruins.",
        [e.Granite]: "Waking from a slumber.",
        [e.Ronin]: "Walking the lonely path.",
        [e.Patriot]: "Guns, God and Jesus.",
        [e.Musketeer]: "For king and glory!",
        [e.Phoenix]: "Wings of fire.",
        [e.SpecOps]: "Failure is not an option.",
        [e.DJ]: "Dropping the beat.",
        [e.Pilot]: "Travelling through time.",
        [e.Chef]: "Early Werm gets the bird.",
        [e.Origin]: "Born of the void.",
        [e._0xGrsk]: "The Survivor.",
        [e.Alucard]: "The people's king.",
        [e.Nata]: "Ride or die.",
        [e.TurboCow]: "Going to the moon!",
        [e.TurboRacer]: "Speed is life!",
        [e.Skull]: "Glory doesn't die.",
        [e.Frost]: "Cold-blooded.",
        [e.Lightning]: "Faster than light.",
        [e.UndeadPirate]: "Undead mooonwalk.",
        [e.PlagueDoctor]: "Experimenting…",
        [e.Panda]: "Working hard.",
        [e.Corona]: "Summoning the eclipse."
    }
}
  , J = {
    [e.GenesisFlame]: {
        criteria: "Reach level 30 during the challenge period."
    },
    [e.GenesisTurbo]: {
        criteria: "Reach level 40 during the challenge period."
    },
    [e.Origin]: {
        criteria: "Be in the top 20 in Free Game, Tournament, or Daily Blitz during the challenge period."
    },
    [e._0xGrsk]: {
        criteria: "Create the best skin concept on X."
    },
    [e.Alucard]: {
        criteria: "Get a score above 18,700 during the challenge period."
    },
    [e.Nata]: {
        criteria: "Get 20 arrow kills during the challenge period."
    },
    [e.TurboCow]: {
        criteria: "Earn $1 in cash games during the challenge period."
    },
    [e.TurboRacer]: {
        criteria: "Complete 10 Blitz runs during the challenge period."
    },
    [e.Skull]: {
        criteria: "Get 30 views on your kill card during the challenge period."
    },
    [e.Frost]: {
        criteria: "Get a score above 20,000 three days in a row during the challenge period."
    },
    [e.Lightning]: {
        criteria: "Score higher than 7,500 in Blitz during the challenge period."
    }
}
  , fe = Object.keys(J).length
  , q = {
    [e.Homeless]: 5710088,
    [e.Soldier]: 3942942,
    [e.Elite]: 7619882,
    [e.Spartan]: 7819304,
    [e.Commander]: 1268881,
    [e.GenesisTurbo]: 2586789,
    [e.GenesisChain]: 2586789,
    [e.GenesisFlame]: 2967339,
    [e.GenesisDefender]: 2586789,
    [e.GenesisGuardian]: 2586789,
    [e.SamuraiTraining]: 598843,
    [e.Melody]: 5976683,
    [e.Alien]: 1455957,
    [e.FireGod]: 10233856,
    [e.WermWerm]: 9653256,
    [e.JujutsuKaisen]: 2503230,
    [e.Napoleon]: 2695195,
    [e.IceGod]: 1201577,
    [e.SamuraiRaid]: 4924975,
    [e.Meadow]: 4684059,
    [e.Void]: 2234707,
    [e.Praying]: 3483932,
    [e.Steampunk]: 8406040,
    [e.Sage]: 4136966,
    [e.Elizabeth]: 1781311,
    [e.PlatedHerald]: 8804904,
    [e.PlatedCapedHerald]: 3023646,
    [e.Pharaoh]: 1650511,
    [e.CyberDive]: 397109,
    [e.Necromancer]: 3280494,
    [e.Commander2]: 1838856,
    [e.Granite]: 2307353,
    [e.Ronin]: 1384229,
    [e.Patriot]: 2501697,
    [e.Musketeer]: 398381,
    [e.Phoenix]: 203574,
    [e.SpecOps]: 131584,
    [e.DJ]: 6298750,
    [e.Pilot]: 3023645,
    [e.Chef]: 5058839,
    [e.Origin]: 3629178,
    [e._0xGrsk]: 6120521,
    [e.Alucard]: 2967339,
    [e.Nata]: 2575641,
    [e.TurboCow]: 83809,
    [e.TurboRacer]: 1120309,
    [e.Skull]: 2690310,
    [e.Frost]: 875394,
    [e.Lightning]: 82531,
    [e.PLACEHOLDER_SKIN_1]: 3355443,
    [e.PLACEHOLDER_SKIN_2]: 3355443,
    [e.PLACEHOLDER_SKIN_3]: 3355443,
    [e.PLACEHOLDER_SKIN_4]: 3355443,
    [e.PLACEHOLDER_SKIN_5]: 3355443,
    [e.PLACEHOLDER_SKIN_6]: 3355443,
    [e.PLACEHOLDER_SKIN_7]: 3355443,
    [e.PLACEHOLDER_SKIN_8]: 3355443,
    [e.PLACEHOLDER_SKIN_9]: 3355443,
    [e.UndeadPirate]: 1456952,
    [e.PlagueDoctor]: 21326,
    [e.Panda]: 4221226,
    [e.Corona]: 986636,
    [e.PLACEHOLDER_215]: 3355443,
    [e.PLACEHOLDER_220]: 3355443,
    [e.PLACEHOLDER_225]: 3355443,
    [e.PLACEHOLDER_230]: 3355443,
    [e.PLACEHOLDER_235]: 3355443,
    [e.PLACEHOLDER_240]: 3355443,
    [e.PLACEHOLDER_245]: 3355443,
    [e.PLACEHOLDER_250]: 3355443,
    [e.PLACEHOLDER_255]: 3355443
}
  , we = n => {
    const r = S.findIndex( ([t,s]) => n < s) - 1;
    if (r < 0)
        return [e.Homeless];
    const i = new Array(r + 1);
    for (let t = 0; t < i.length; t++)
        i[t] = S[r - t][0];
    return i
}
  , Q = {
    [e.GenesisTurbo]: a.Skin_Genesis,
    [e.GenesisChain]: a.Skin_Genesis,
    [e.GenesisFlame]: a.Skin_Genesis,
    [e.GenesisDefender]: a.Skin_Genesis,
    [e.GenesisGuardian]: a.Skin_Genesis,
    [e.Origin]: a.Skin_Origin,
    [e._0xGrsk]: a.Skin_0xGrsk,
    [e.Alucard]: a.Skin_Alucard,
    [e.Nata]: a.Skin_Nata,
    [e.TurboCow]: a.Skin_TurboCow,
    [e.TurboRacer]: a.Skin_TurboRacer,
    [e.Skull]: a.Skin_Skull,
    [e.Frost]: a.Skin_Frost,
    [e.Lightning]: a.Skin_Lightning,
    [e.PLACEHOLDER_SKIN_1]: a.Skin_PLACEHOLDER_1,
    [e.PLACEHOLDER_SKIN_2]: a.Skin_PLACEHOLDER_2,
    [e.PLACEHOLDER_SKIN_3]: a.Skin_PLACEHOLDER_3,
    [e.PLACEHOLDER_SKIN_4]: a.Skin_PLACEHOLDER_4,
    [e.PLACEHOLDER_SKIN_5]: a.Skin_PLACEHOLDER_5,
    [e.PLACEHOLDER_SKIN_6]: a.Skin_PLACEHOLDER_6,
    [e.PLACEHOLDER_SKIN_7]: a.Skin_PLACEHOLDER_7,
    [e.PLACEHOLDER_SKIN_8]: a.Skin_PLACEHOLDER_8,
    [e.PLACEHOLDER_SKIN_9]: a.Skin_PLACEHOLDER_9
}
  , ve = n => n.sort( (r, i) => {
    const t = !h(r)
      , s = !h(i);
    return t === s ? r - i : t ? 1 : -1
}
)
  , ye = n => c(n) ? Q[n] : n
  , Ke = (n, r="en") => c(n) ? z[r][n] : `NFT #${n - 1e3 + 1}`
  , Me = (n, r="en") => {
    if (c(n))
        return j[r][n]
}
  , xe = n => c(n) ? q[n] : G(n)
  , Z = ["svm", "evm"]
  , w = ["svm", "evm"]
  , d = ["solana", "eclipse"]
  , D = ["abstract", "base", "camp"]
  , _ = [...d, ...D]
  , Be = {
    svm: d,
    evm: D
}
  , Ve = ["solana", "eclipse", "abstract"];
[..._, ...w];
const We = {
    eclipse: "Eclipse",
    solana: "Solana",
    abstract: "Abstract",
    base: "Base",
    camp: "CAMP"
}
  , Ue = {
    eclipse: "ECLP",
    solana: "SOL",
    abstract: "ABS",
    base: "BASE",
    camp: "CAMP"
}
  , v = {
    solana: "svm",
    eclipse: "svm",
    abstract: "evm",
    base: "evm",
    camp: "evm"
}
  , A = {
    svm: "svm",
    evm: "evm"
};
const N = "11111111111111111111111111111111"
  , C = "0x0000000000000000000000000000000000000000"
  , Fe = n => l(n) ? A[n] === "evm" : D.includes(n)
  , $e = n => l(n) ? A[n] === "svm" : d.includes(n)
  , H = n => l(n) ? A[n] : d.includes(n) ? "svm" : "evm"
  , Ye = n => Z.includes(n)
  , Xe = {
    svm: "solana",
    evm: "eip155"
}
  , ze = "embeddedWallet";
_.reduce( (n, r) => {
    const i = v[r];
    return n[i] ? n[i].push(r) : n[i] = [r],
    n
}
, {});
const k = n => v[n]
  , l = n => w.includes(n)
  , je = n => _.includes(n)
  , Je = n => y.includes(n)
  , qe = (n, r) => {
    if (n === r)
        return !0;
    const i = l(n)
      , t = l(r);
    return !i && !t ? !1 : (i ? n : k(n)) === (t ? r : k(r))
}
  , Qe = {
    solana: {
        name: "Solana",
        symbol: "SOL",
        address: N,
        decimals: 9,
        minBalance: 890880
    },
    eclipse: {
        name: "Ethereum",
        symbol: "ETH",
        address: N,
        decimals: 9,
        minBalance: 8704
    },
    abstract: {
        name: "Ethereum",
        symbol: "ETH",
        address: C,
        decimals: 18,
        minBalance: 0
    },
    base: {
        name: "Base",
        symbol: "BASE",
        address: C,
        decimals: 18,
        minBalance: 0
    },
    camp: {
        name: "Camp",
        symbol: "CAMP",
        address: C,
        decimals: 18,
        minBalance: 0
    }
}
  , ee = ["mainnet", "testnet", "devnet"]
  , ne = ["solana:mainnet", "solana:testnet", "solana:devnet"]
  , ae = [...ne, "solana:localnet"]
  , re = ["eclipse:mainnet", "eclipse:testnet", "eclipse:devnet"]
  , ie = [...re, "eclipse:localnet"]
  , te = ["abstract:mainnet", "abstract:testnet"]
  , se = [...te, "abstract:localnet"]
  , oe = ["base:mainnet", "base:testnet"]
  , _e = [...oe, "base:localnet"]
  , le = ["camp:mainnet", "camp:testnet"]
  , Ee = [...le, "camp:localnet"]
  , y = [...ae, ...ie, ...se, ..._e, ...Ee]
  , Ze = n => n.endsWith(":localnet")
  , en = (n, r) => `${n}:${r}`
  , m = 8545
  , u = 31337
  , Le = {
    "abstract:mainnet": 2741,
    "abstract:testnet": 11124,
    "base:mainnet": 8453,
    "base:testnet": 84532,
    "camp:mainnet": 484,
    "camp:testnet": 123420001114,
    "abstract:localnet": u,
    "base:localnet": u,
    "camp:localnet": u
}
  , ce = {
    "solana:mainnet": "https://api.mainnet-beta.solana.com",
    "solana:testnet": "https://api.testnet.solana.com",
    "solana:devnet": "https://api.devnet.solana.com",
    "solana:localnet": "http://localhost:8899",
    "eclipse:mainnet": "https://mainnetbeta-rpc.eclipse.xyz",
    "eclipse:testnet": "https://testnet.dev2.eclipsenetwork.xyz",
    "eclipse:devnet": "https://staging-rpc.dev2.eclipsenetwork.xyz",
    "eclipse:localnet": "http://localhost:7799",
    "abstract:mainnet": "https://api.mainnet.abs.xyz",
    "abstract:testnet": "https://api.testnet.abs.xyz",
    "abstract:localnet": `http://localhost:${m}`,
    "base:mainnet": "https://mainnet.base.org",
    "base:testnet": "https://sepolia.base.org",
    "base:localnet": `http://localhost:${m}`,
    "camp:mainnet": "https://rpc.camp.raas.gelato.cloud",
    "camp:testnet": "https://rpc.basecamp.t.raas.gelato.cloud",
    "camp:localnet": `http://localhost:${m}`
}
  , de = {
    "camp:mainnet": "wss://ws.camp.raas.gelato.cloud",
    "camp:testnet": "wss://ws.basecamp.t.raas.gelato.cloud"
}
  , nn = {
    "camp:mainnet": "https://camp.cloud.blockscout.com"
}
  , an = Object.fromEntries(Object.entries(Le).map( ([n,r]) => [r, n]))
  , Ce = n => {
    if (n)
        return n.endsWith("mainnet-beta") && (n = n.slice(0, -5)),
        ee.includes(n) ? `solana:${n}` : y.includes(n) ? n : null
}
  , me = n => {
    const r = n.split(":")[0];
    if (!r)
        throw new Error(`Unknown chain ID: ${n}`);
    if (!_.includes(r))
        throw new Error(`Unknown chain ID: ${n}`);
    return r
}
  , rn = ["WalletLoadError", "WalletConfigError", "WalletConnectionError", "WalletDisconnectedError", "WalletDisconnectionError", "WalletAccountError", "WalletPublicKeyError", "WalletKeypairError", "WalletNotConnectedError", "WalletSendTransactionError", "WalletSignTransactionError", "WalletSignMessageError", "WalletSignInError", "WalletTimeoutError", "WalletWindowBlockedError", "WalletWindowClosedError"]
  , P = {
    BASE_URL: "/",
    DEV: !1,
    MODE: "production",
    PROD: !0,
    SSR: !1,
    VITE_ABSTRACT_CHAIN_ID: "abstract:mainnet",
    VITE_BASE_CHAIN_ID: "base:mainnet",
    VITE_BUILD_DATE: "1760994155000",
    VITE_CAMP_CHAIN_ID: "camp:mainnet",
    VITE_DISCORD_URL: "https://discord.gg/TCK9EeXUbj",
    VITE_DYNAMIC_ENVIRONMENT_ID: "4d425977-00d7-4f2e-af40-f4cf0a770f7f",
    VITE_ECLIPSE_CHAIN_ID: "eclipse:mainnet",
    VITE_ENABLED_CHAIN_NAMES: "base",
    VITE_FARCASTER_URL: "https://farcaster.xyz/werm",
    VITE_GIT_HASH: "bff7831e8185cfac23b2c9bf2d552c048abef2e9",
    VITE_GOOGLE_ANALYTICS_ID: "G-3BRE6JHZNY",
    VITE_GOOGLE_TAG_MANAGER_ID: "GTM-K7SQ4D94",
    VITE_NO_DYNAMIC: "true",
    VITE_PRIMARY_CHAIN: "base",
    VITE_PUBLIC_ADDRESS: "https://werm.fun",
    VITE_SOLANA_CHAIN_ID: "solana:mainnet",
    VITE_SOLANA_RPC_URL: "https://solana-mainnet.api.syndica.io/api-key/2YBhLxtU2H1S9UEES9syS4kvDHHSvitWANQ5fPCHNEpG4aDrRG9wzYUHdXwzrtrQoaL12fGdMASPiw1MN85MqbCa4Z5ErqSyff4",
    VITE_TWITTER_URL: "https://x.com/werm_fun"
}
  , ue = "production"
  , tn = ue === "production"
  , O = {
    primaryChain: "base"
};
if (!_.includes(O.primaryChain))
    throw new Error(`Invalid primary chain: ${O.primaryChain}`);
for (const n of _) {
    const r = n.toUpperCase()
      , i = P[`VITE_${r}_CHAIN_ID`];
    if (!i)
        continue;
    const t = Ce(i);
    if (t === null)
        throw new Error(`Invalid ${n} chain ID: ${i}`);
    if (H(n) !== H(me(t)))
        throw new Error(`Invalid chain ID for chain ${n}: ${i}`);
    let s = P[`VITE_${r}_RPC_URL`] ?? ce[t]
      , o = P[`VITE_${r}_WS_RPC_URL`] ?? de[t];
    if (o || (o = s.replace(/^http/, "ws")),
    o.toLowerCase() === "null" && (o = null),
    typeof URL.canParse == "function") {
        if (s && !URL.canParse(s))
            throw new Error(`Invalid VITE_${r}_RPC_URL '${s}': if set, must be a valid URL`);
        if (o && !URL.canParse(o))
            throw new Error(`Invalid VITE_${r}_WS_RPC_URL '${o}': if set, must be 'null' or a valid URL`)
    }
    O[n] = {
        chainId: t,
        rpcUrl: s,
        wsRpcUrl: o
    }
}
const sn = Number.parseInt("1760994155000")
  , on = "bff7831e8185cfac23b2c9bf2d552c048abef2e9"
  , _n = void 0
  , ln = !1
  , En = e.Lightning
  , Ln = n => {
    const r = {};
    for (const [i,t] of Object.entries(n)) {
        const s = i.replace(/-./g, o => o.charAt(1).toUpperCase());
        r[s] = t
    }
    return r
}
  , Pe = n => {
    let r;
    {
        const i = n instanceof Window ? n.location : n;
        i.protocol === "http:" ? r = `${i.protocol}//${i.hostname}:2567` : r = `${i.protocol}//${i.hostname}/api`
    }
    return r
}
  , cn = n => Pe(n).replace(/^http/, "ws");
export {be as $, u as A, Ge as B, O as C, Te as D, ln as E, De as F, _ as G, pe as H, a as I, he as J, cn as K, sn as L, on as M, p as N, b as O, e as P, R as Q, _n as R, T as S, Ie as T, G as U, Ne as V, En as W, U as X, Ae as Y, M as Z, ge as _, nn as a, Ue as a0, we as a1, xe as a2, Me as a3, ke as a4, ye as a5, ve as a6, en as a7, $e as a8, Se as a9, J as aa, Re as ab, Oe as ac, S as ad, fe as ae, qe as af, Be as ag, Pe as b, Qe as c, ce as d, Ve as e, We as f, He as g, $ as h, Le as i, m as j, D as k, Fe as l, an as m, me as n, je as o, H as p, Xe as q, ze as r, Ze as s, Je as t, Ye as u, rn as v, tn as w, Ln as x, c as y, Ke as z};
