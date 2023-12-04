/* eslint-disable max-lines */
import game1 from '../Games/1.png';
import game2 from '../Games/2.png';
import game3 from '../Games/3.png';
import game4 from '../Games/4.png';
import game5 from '../Games/5.png';
import game6 from '../Games/6.png';
import game7 from '../Games/7.png';
import game8 from '../Games/8.png';
import game9 from '../Games/9.png';
import game10 from '../Games/10.png';
import game11 from '../Games/11.png';
import game12 from '../Games/12.png';
import game13 from '../Games/13.png';
import game14 from '../Games/14.png';
import game15 from '../Games/15.png';
import game16 from '../Games/16.png';
import game17 from '../Games/17.png';
import game18 from '../Games/18.png';
import game19 from '../Games/19.png';
import game20 from '../Games/20.png';
import game21 from '../Games/21.png';
import game22 from '../Games/22.png';
import game23 from '../Games/23.png';
import game24 from '../Games/24.png';
import game25 from '../Games/25.png';
import game26 from '../Games/26.png';
import game27 from '../Games/27.png';
import game28 from '../Games/28.png';
import game29 from '../Games/29.png';
import game30 from '../Games/30.png';
import game31 from '../Games/31.png';
import game32 from '../Games/32.png';
import game33 from '../Games/33.png';
import game34 from '../Games/34.png';
import game35 from '../Games/35.png';
import game36 from '../Games/36.png';
import game37 from '../Games/37.png';
import game38 from '../Games/38.png';
import game39 from '../Games/39.png';
import game40 from '../Games/40.png';
import game41 from '../Games/41.png';
import game42 from '../Games/42.png';
import game43 from '../Games/43.png';

const objGames = [
  {
    name: 'Spider Man',
    src: game1,
    link: 'https://store.playstation.com/pt-br/product/UP9000-CUSA02299_00-MARVELSSMGOTY000',
    plan: 'intermediario',
  },
  {
    name: 'Spider Man Miles Morales',
    src: game2,
    link: 'https://www.playstation.com/pt-br/games/marvels-spider-man-miles-morales/?emcid=pa-co-473107&gad_source=1&gclid=Cj0KCQiAgqGrBhDtARIsAM5s0_kvvaNi6-dUr6Ux2dx5WVnqnauFzRDdv-lrLPiLcR4q5DcHJ_n_I50aAj_MEALw_wcB',
    plan: 'intermediario',
  },
  {
    name: 'Spider Man 2',
    src: game3,
    link: 'https://www.playstation.com/pt-br/games/marvels-spider-man-2/',
    plan: 'supermassivo',
  },
  {
    name: 'Horizon Zero Dawn',
    src: game4,
    link: 'https://store.steampowered.com/agecheck/app/1151640/',
    plan: 'estelar',
  }, {
    name: 'Nioh',
    src: game5,
    link: 'https://store.steampowered.com/app/485510/Nioh_Complete_Edition/',
    plan: 'estelar',
  },
  {
    name: 'CupHead',
    src: game6,
    link: 'https://store.steampowered.com/app/268910/Cuphead/',
    plan: 'estelar',
  }, {
    name: 'Uncharted 4 A Thiefs End',
    src: game7,
    link: 'https://www.playstation.com/pt-br/games/uncharted-4-a-thiefs-end/',
    plan: 'estelar',
  },
  {
    name: 'Final Fantasy XV',
    src: game8,
    link: 'https://www.xbox.com/pt-BR/games/store/final-fantasy-xv/C45D79QVKZTP',
    plan: 'estelar',
  }, {
    name: 'The Witness',
    src: game9,
    link: 'https://store.steampowered.com/app/210970/The_Witness/',
    plan: 'estelar',
  },
  {
    name: 'Rise Of The Tomb Raider',
    src: game10,
    link: 'https://store.steampowered.com/app/391220/Rise_of_the_Tomb_Raider/',
    plan: 'estelar',
  }, {
    name: 'Fallout 4',
    src: game11,
    link: 'https://store.steampowered.com/agecheck/app/377160/',
    plan: 'estelar',
  },
  {
    name: 'The Witcher 3 Wild Hunt',
    src: game12,
    link: 'https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/',
    plan: 'estelar',
  }, {
    name: 'Watch Dogs',
    src: game13,
    link: 'https://store.steampowered.com/app/243470/Watch_Dogs/',
    plan: 'estelar',
  },
  {
    name: 'Far Cry 4',
    src: game14,
    link: 'https://www.ubisoft.com/pt-br/game/far-cry/far-cry-4',
    plan: 'estelar',
  }, {
    name: 'The Last Of Us',
    src: game15,
    link: 'https://store.playstation.com/pt-br/product/UP9000-CUSA00552_00-THELASTOFUS00000',
    plan: 'estelar',
  },
  {
    name: 'Bioshock Infinite',
    src: game16,
    link: 'https://store.steampowered.com/agecheck/app/8870/',
    plan: 'estelar',
  }, {
    name: 'Rayman Legends',
    src: game17,
    link: 'https://www.ubisoft.com/pt-br/game/rayman/legends',
    plan: 'estelar',
  },
  {
    name: 'Devil May Cry',
    src: game18,
    link: 'https://store.playstation.com/pt-br/product/UP0102-CUSA01013_00-DMCDEFINITIVE000',
    plan: 'estelar',
  }, {
    name: 'Red Dead Redemption 2',
    src: game19,
    link: 'https://www.rockstargames.com/br/reddeadredemption2',
    plan: 'intermediario',
  },
  {
    name: 'God Of War',
    src: game20,
    link: 'https://store.steampowered.com/agecheck/app/1593500/',
    plan: 'intermediario',
  },
  {
    name: 'Sekiro Shadows Die Twice',
    src: game21,
    link: 'https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice__GOTY_Edition/',
    plan: 'intermediario',
  },
  {
    name: 'Death Stranding',
    src: game22,
    link: 'https://store.epicgames.com/pt-BR/p/death-stranding',
    plan: 'intermediario',
  },
  {
    name: 'Control',
    src: game23,
    link: 'https://store.epicgames.com/pt-BR/p/control',
    plan: 'intermediario',
  },
  {
    name: 'The Last Of Us Part 2',
    src: game24,
    link: 'https://store.playstation.com/pt-br/product/UP9000-CUSA07820_00-THELASTOFUSPART2',
    plan: 'intermediario',
  },
  {
    name: 'CyberPunk 2077',
    src: game25,
    link: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
    plan: 'intermediario',
  },
  {
    name: 'Ori And The Will Of The Wisps',
    src: game26,
    link: 'https://store.steampowered.com/app/1057090/Ori_and_the_Will_of_the_Wisps/',
    plan: 'intermediario',
  },

  {
    name: 'It Takes Two',
    src: game27,
    link: 'https://store.steampowered.com/app/1426210/It_Takes_Two/',
    plan: 'intermediario',
  },
  {
    name: 'Psychonauts 2',
    src: game28,
    link: 'https://store.steampowered.com/app/607080/Psychonauts_2/',
    plan: 'intermediario',
  },
  {
    name: 'Inscryption',
    src: game29,
    link: 'https://store.steampowered.com/app/1092790/Inscryption/',
    plan: 'intermediario',
  },
  {
    name: 'God Of War Ragnarok',
    src: game30,
    link: 'https://www.playstation.com/pt-br/games/god-of-war-ragnarok/',
    plan: 'intermediario',
  },
  {
    name: 'Elden Ring',
    src: game31,
    link: 'https://store.steampowered.com/app/1245620/ELDEN_RING/',
    plan: 'intermediario',
  },
  {
    name: 'Stray',
    src: game32,
    link: 'https://store.steampowered.com/app/1332010/Stray/',
    plan: 'intermediario',
  },
  {
    name: 'Baldurs Gate 3',
    src: game33,
    link: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    plan: 'supermassivo',
  },
  {
    name: 'Starfield',
    src: game34,
    link: 'https://bethesda.net/pt/game/starfield',
    plan: 'supermassivo',
  },
  {
    name: 'Suicide Squad',
    src: game35,
    link: 'https://www.suicidesquadgame.com/pt-br',
    plan: 'supermassivo',
  },
  {
    name: 'Hades 2',
    src: game36,
    link: 'https://store.steampowered.com/app/1145350/Hades_II/',
    plan: 'supermassivo',
  },
  {
    name: 'Star Wars Outlaws',
    src: game37,
    link: 'https://www.ubisoft.com/en-gb/game/star-wars/outlaws',
    plan: 'supermassivo',
  },
  {
    name: 'Resident Evil 4',
    src: game38,
    link: 'https://store.playstation.com/pt-br/product/UP0102-CUSA04885_00-BH4HD00000000001',
    plan: 'supermassivo',
  },
  {
    name: 'Dark Souls',
    src: game39,
    link: 'https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/',
    plan: 'supermassivo',
  },
  {
    name: 'Castlevania: Symphony of the Night',
    src: game40,
    link: 'https://www.xbox.com/pt-BR/games/store/castlevania-symphony-of-the-night/bstm3283756m',
    plan: 'supermassivo',
  },
  {
    name: 'Dead Space',
    src: game41,
    link: 'https://store.steampowered.com/app/17470/Dead_Space_2008/',
    plan: 'supermassivo',
  },
  {
    name: 'The Elder Scrolls V',
    src: game42,
    link: 'https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/',
    plan: 'supermassivo',
  },
  {
    name: 'God Of War',
    src: game43,
    link: 'https://www.google.com/search?q=god+of+war+2005&sca_esv=586734894&tbm=shop&sxsrf=AM9HkKn3dPDw8wDOs4IYVhhlbXOgVXCZJQ:1701381356297&source=lnms&sa=X&ved=2ahUKEwj35vm62-yCAxW0kZUCHb7RDhwQ_AUoA3oECAMQBQ&biw=1920&bih=1003&dpr=1',
    plan: 'supermassivo',
  },
];

export { objGames };
