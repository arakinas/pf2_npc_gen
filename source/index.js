let classTypes = [
  "Alchemist",
  "Barbarian",
  "Bard",
  "Champion",
  "Cleric",
  "Druid",
  "Fighter",
  "Investigator",
  "Monk",
  "Oracle",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Swashbuckler",
  "Witch",
  "Wizard",
];

let ancesteryTypes = [
  "Dwarf",
  "Elf",
  "Gnome",
  "Goblin",
  "Halfling",
  "Human",
  "Catfolk",
  "Kobold",
  "Orc",
  "Ratfolk",
  "Tengu",
  "Leshy",
  "Lizardfolk",
  "Hobgoblin",
  "Shoony",
];

let npcAncesterySelector = document.getElementById("selectNpcAncestery");
let npcLevelSelector = document.getElementById("selectNpcLevel");
let npcTypeSelector = document.getElementById("selectNpcType");
let testResultsList = document.getElementById("textareaResults");

function PopulateOptions(optionsToPopulate, control) {
  for (let i = 0; i < optionsToPopulate.length; i++) {
    let option = optionsToPopulate[i];
    let element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    control.appendChild(element);
  }
}

function PopulateDropDowns() {
  PopulateOptions(GenerateLevels(), npcLevelSelector);
  PopulateOptions(classTypes, npcTypeSelector);
  PopulateOptions(ancesteryTypes, npcAncesterySelector);
}

function GenerateLevels() {
  let levels = [];

  for (let i = 1; i < 21; i++) {
    levels.push(i);
  }
  return levels;
}

function ClearResults() {
  testResultsList.value = "";
}

function GenerateNpc() {
    let npcClass = npcTypeSelector.value;
  let npcLevel = npcLevelSelector.value;
  let npcAncestery = npcAncesterySelector.value;

  // if (npcAncesterySelector.selectedIndex < 1) {
  //   npcAncestery = "Random";
  // }

  let newNpc = new CreateNpc(npcClass, npcLevel, npcAncestery);

  addResultWithLine("Creating New Npc:");
  addResultWithLine(
    newNpc.npcName +
      ", the level " +
      newNpc.npcLevel +
      " " +
      newNpc.npcAncestery +
      " " +
      newNpc.npcClass +
      "!"
  );
  addResultWithLine("Background: " + newNpc.npcBackGround[0]);
  LogStats(
    newNpc.charisma,
    newNpc.constitution,
    newNpc.dexterity,
    newNpc.intelligence,
    newNpc.strength,
    newNpc.wisdom
  );

  console.log(newNpc.npcName + " generated");
}

function ResetSelections() {  
  npcTypeSelector.selectedIndex = 0;
  npcLevelSelector.selectedIndex = 0;
  npcAncesterySelector.selectedIndex = 0;
}

document
  .getElementById("btnClearResults")
  .addEventListener("click", ClearResults);
document
  .getElementById("btnGenerateNpc")
  .addEventListener("click", GenerateNpc);
document
  .getElementById("btnResetSelections")
  .addEventListener("click", ResetSelections);

document.onload = PopulateDropDowns();

function addResultWithLine(textToAdd) {
  testResultsList.value += textToAdd + "\n";
}

//Test Method
function LogStats(
  charisma,
  constitution,
  dexterity,
  intelligence,
  strength,
  wisdom
) {
  addResultWithLine(
    "Strength:" +
      strength +
      ", Dexterity:" +
      dexterity +
      ", Constitution:" +
      constitution
  );
  addResultWithLine(
    "Intelligence:" +
      intelligence +
      " Wisdom:" +
      wisdom +
      " Charisma:" +
      charisma
  );
}

class CreateNpc {
  constructor(npcClass, npcLevel, npcAncestery) {
    if (npcAncestery == "Random") {
      let ran = Math.floor(Math.random() * ancesteryTypes.length);

      npcAncestery = ancesteryTypes[ran];
    }

    if (npcClass == "Random") {
      let ran = Math.floor(Math.random() * ancesteryTypes.length);

      npcClass = classTypes[ran];
    }

    if (npcLevel == "Random") {
      let levels = GenerateLevels();
      let ran = Math.floor(Math.random() * levels.length);

      npcLevel = levels[ran];
    }

    let charisma = 10;
    let constitution = 10;
    let dexterity = 10;
    let intelligence = 10;
    let strength = 10;
    let wisdom = 10;

    //Initializing this value, just as a precaution
    let primaryStat = "Constitution";
    if (
      npcClass == "Alchemist" ||
      npcClass == "Investigator" ||
      npcClass == "Witch" ||
      npcClass == "Wizard"
    ) {
      primaryStat = "Intelligence";
      intelligence += 2;
    } else if (
      npcClass == "Bard" ||
      npcClass == "Sorcerer" ||
      npcClass == "Oracle"
    ) {
      primaryStat = "Charisma";
      charisma += 2;
    } else if (npcClass == "Druid" || npcClass == "Cleric") {
      primaryStat = "Wisdom";
      wisdom += 2;
    } else if (
      npcClass == "Ranger" ||
      npcClass == "Rogue" ||
      npcClass == "Swashbuckler" ||
      npcClass == "Champion"
    ) {
      primaryStat = "Dexterity";
      dexterity += 2;
    } else if (
      npcClass == "Monk" ||
      npcClass == "Fighter" ||
      npcClass == "Barbarian"
    ) {
      primaryStat = "Strength";
      strength += 2;
    }

    if (primaryStat == "Constitution") {
      constitution += 2;
    }

    let npcBackground = GetBackground(primaryStat);
    this.npcBackGround = npcBackground;

    let npcAncesteryStats = GetAncestoryStats(npcAncestery, primaryStat);
    charisma += npcAncesteryStats[0];
    constitution += npcAncesteryStats[1];
    dexterity += npcAncesteryStats[2];
    intelligence += npcAncesteryStats[3];
    strength += npcAncesteryStats[4];
    wisdom += npcAncesteryStats[5];

    if (this.npcBackGround[1] == "Charisma") {
      charisma += 2;
    } else if (this.npcBackGround[1] == "Constitution") {
      constitution += 2;
    } else if (this.npcBackGround[1] == "Dexterity") {
      dexterity += 2;
    } else if (this.npcBackGround[1] == "Intelligence") {
      intelligence += 2;
    } else if (this.npcBackGround[1] == "Strength") {
      strength += 2;
    } else if (this.npcBackGround[1] == "Wisdom") {
      wisdom += 2;
    } else {
      console.log("Error in background primary stat: " + this.npcBackGround[1]);
    }

    if (this.npcBackGround[2] == "Charisma") {
      charisma += 2;
    } else if (this.npcBackGround[2] == "Constitution") {
      constitution += 2;
    } else if (this.npcBackGround[2] == "Dexterity") {
      dexterity += 2;
    } else if (this.npcBackGround[2] == "Intelligence") {
      intelligence += 2;
    } else if (this.npcBackGround[2] == "Strength") {
      strength += 2;
    } else if (this.npcBackGround[2] == "Wisdom") {
      wisdom += 2;
    } else {
      console.log(
        "Error in background secondary stat: " + this.npcBackGround[2]
      );
    }

    //Four free ability boosts, for last step.
    if (
      npcClass == "Alchemist" ||
      npcClass == "Witch" ||
      npcClass == "Wizard"
    ) {
      intelligence += 2;
      dexterity += 2;
      constitution += 2;
      wisdom += 2;
    } else if (npcClass == "Bard" || npcClass == "Sorcerer") {
      intelligence += 2;
      charisma += 2;
      dexterity += 2;
      wisdom += 2;
    } else if (
      npcClass == "Druid" ||
      npcClass == "Cleric" ||
      npcClass == "Oracle"
    ) {
      intelligence += 2;
      charisma += 2;
      strength += 2;
      wisdom += 2;
    } else if (
      npcClass == "Ranger" ||
      npcClass == "Swashbuckler" ||
      npcClass == "Champion"
    ) {
      strength += 2;
      dexterity += 2;
      charisma += 2;
      wisdom += 2;
    } else if (
      npcClass == "Monk" ||
      npcClass == "Fighter" ||
      npcClass == "Barbarian"
    ) {
      strength += 2;
      dexterity += 2;
      constitution += 2;
      wisdom += 2;
    } else if (npcClass == "Investigator" || npcClass == "Rogue") {
      intelligence += 2;
      dexterity += 2;
      strength += 2;
      wisdom += 2;
    }

    //Check for stat total for debug purposes
if((strength + dexterity + constitution + intelligence + wisdom + charisma)!= 78)
{
  let fullStats = (strength + dexterity + constitution + intelligence + wisdom + charisma);
  addResultWithLine(
    "Stat total is off. Total stats should be 78, but equals: " + fullStats);
  console.log("Full stats for character:" + fullStats);
  console.log("Ancestery Stats: " + npcAncesteryStats);
  console.log("Background: " + npcBackground);
}
    this.charisma = charisma;
    this.constitution = constitution;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
    this.strength = strength;
    this.wisdom = wisdom;
    this.npcClass = npcClass;
    this.npcLevel = npcLevel;
    this.npcAncestery = npcAncestery;
    this.npcName = GetNpcName();
  }
}

//Generates Stats for the ancestery
//this contains positives and negatives, so an array will be returned
//stats in alphabetical order as a value set
function GetAncestoryStats(npcAncestery, primaryStat) {
  let charisma = 0;
  let constitution = 0;
  let dexterity = 0;
  let intelligence = 0;
  let strength = 0;
  let wisdom = 0;

  //humans not included here, but are accounted for below
  switch (npcAncestery) {
    case "Dwarf":
      constitution += 2;
      wisdom += 2;
      charisma -= 2;
      break;
    case "Elf":
      dexterity += 2;
      intelligence += 2;
      constitution -= 2;
      break;
    case "Gnome":
      constitution += 2;
      charisma += 2;
      strength -= 2;
      break;
    case "Goblin":
      dexterity += 2;
      charisma += 2;
      wisdom -= 2;
      break;
    case "Halfling":
      dexterity += 2;
      wisdom += 2;
      strength -= 2;
      break;
    case "Catfolk":
      dexterity += 2;
      charisma += 2;
      wisdom -= 2;
      break;
    case "Kobold":
      dexterity += 2;
      charisma += 2;
      constitution -= 2;
      break;
    case "Orc":
      strength += 2;
      break;
    case "Ratfolk":
      dexterity += 2;
      intelligence += 2;
      strength -= 2;
      break;
    case "Tengu":
      dexterity += 2;
      break;
    case "Leshy":
      constitution += 2;
      wisdom += 2;
      intelligence -= 2;
      break;
    case "Lizardfolk":
      strength += 2;
      wisdom += 2;
      intelligence -= 2;
      break;
    case "Hobgoblin":
      constitution += 2;
      intelligence += 2;
      wisdom -= 2;
      break;
    case "Shoony":
      dexterity += 2;
      charisma += 2;
      constitution -= 2;
      break;
  }
  //setting this before getting the free ability to help track selected boosts
  let ancesteryStats = [
    charisma,
    constitution,
    dexterity,
    intelligence,
    strength,
    wisdom,
  ];

  //humans get two "free" boosts
  if(npcAncestery=="Human"){ancesteryStats = selectAbilityBoost(ancesteryStats, primaryStat);}

  ancesteryStats = selectAbilityBoost(ancesteryStats, primaryStat);

  return ancesteryStats;
}

//selects an ability to boost. Removes items already selected from the options.
//Prefers primary stat.
function selectAbilityBoost(npcStats, primaryStat) {
  let charisma = npcStats[0];
  let constitution = npcStats[1];
  let dexterity = npcStats[2];
  let intelligence = npcStats[3];
  let strength = npcStats[4];
  let wisdom = npcStats[5];

  let statList = [
    "Charisma",
    "Constitution",
    "Dexterity",
    "Intelligence",
    "Strength",
    "Wisdom",
  ];
  
  if (charisma > 0) {
    statList.splice(statList.indexOf("Charisma"), 1);
  }
  if (constitution > 0) {
    statList.splice(statList.indexOf("Constitution"), 1);
  }
  if (dexterity > 0) {
    statList.splice(statList.indexOf("Dexterity"), 1);
  }
  if (intelligence > 0) {
    statList.splice(statList.indexOf("Intelligence"), 1);
  }
  if (strength > 0) {
    statList.splice(statList.indexOf("Strength"), 1);
  }
  if (wisdom > 0) {
    statList.splice(statList.indexOf("Wisdom"), 1);
  }

  let primaryIndex = statList.indexOf(primaryStat);
  let selectedStat = "";

  if (primaryIndex > -1) {
    selectedStat = statList[primaryIndex];
  } else {
    selectedStat = statList[Math.floor(Math.random() * statList.length)];
  }

  switch (selectedStat) {
    case "Charisma":
      charisma += 2;
      break;
    case "Constitution":
      constitution += 2;
      break;
    case "Dexterity":
      dexterity += 2;
      break;
    case "Intelligence":
      intelligence += 2;
      break;
    case "Strength":
      strength += 2;
      break;
    case "Wisdom":
      wisdom += 2;
      break;
  }

  let adjustedStats = [
    charisma,
    constitution,
    dexterity,
    intelligence,
    strength,
    wisdom,
  ];

  for(let i =0; i < adjustedStats.length; i++){
    if(adjustedStats[i] > 2){
      console.log("Stat chosen twice");
      console.log(adjustedStats);
    }
  }

  return adjustedStats;
}

//Generates a random background for the npc
//Primary stat is pulled in to help select stat selection
function GetBackground(primaryStat) {
  let firstStat = "";
  let secondStat = "";

  let backgrounds = [
    "Acrobat",
    "Acolyte",
    "Animal Whisperer",
    "Artisan",
    "Artist",
    "Barkeep",
    "Barrister",
    "Bounty Hunter",
    "Charlatan",
    "Criminal",
    "Detective",
    "Emissary",
    "Entertainer",
    "Farmhand",
    "Field Medic",
    "Fortune Teller",
    "Gambler",
    "Gladiator",
    "Guard",
    "Herbalist",
    "Hermit",
    "Hunter",
    "Laborer",
    "Martial Disciple",
    "Merchant",
    "Miner",
    "Noble",
    "Nomad",
    "Prisoner",
    "Sailor",
    "Scholar",
    "Scout",
    "Street Urchin",
    "Tinker",
    "Warrior",
  ];

  let background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  let firstStatIndex = Math.floor(Math.random());

  switch (background) {
    case "Acolyte":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Acrobat":
      if (firstStatIndex == 1) {
        firstStat = "Strength";
      } else {
        firstStat = "Dexterity";
      }
      break;
    case "Animal Whisperer":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Charisma";
      }
      break;
    case "Artisan":
      if (firstStatIndex == 1) {
        firstStat = "Strength";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Artist":
      if (firstStatIndex == 1) {
        firstStat = "Dexterity";
      } else {
        firstStat = "Charisma";
      }
      break;
    case "Barkeep":
      if (firstStatIndex == 1) {
        firstStat = "Constitution";
      } else {
        firstStat = "Charisma";
      }
      break;
    case "Barrister":
      if (firstStatIndex == 1) {
        firstStat = "Charisma";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Bounty Hunter":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Strength";
      }
      break;
    case "Charlatan":
      if (firstStatIndex == 1) {
        firstStat = "Charisma";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Criminal":
      if (firstStatIndex == 1) {
        firstStat = "Dexterity";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Detective":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Emissary":
      if (firstStatIndex == 1) {
        firstStat = "Charisma";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Entertainer":
      if (firstStatIndex == 1) {
        firstStat = "Charisma";
      } else {
        firstStat = "Dexterity";
      }
      break;
    case "Farmhand":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Constitution";
      }
      break;
    case "Field Medic":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Constitution";
      }
      break;
    case "Fortune Teller":
      if (firstStatIndex == 1) {
        firstStat = "Charisma";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Gambler":
      if (firstStatIndex == 1) {
        firstStat = "Dexterity";
      } else {
        firstStat = "Charisma";
      }
      break;
    case "Gladiator":
      if (firstStatIndex == 1) {
        firstStat = "Strength";
      } else {
        firstStat = "Charisma";
      }
      break;
    case "Guard":
      if (firstStatIndex == 1) {
        firstStat = "Strength";
      } else {
        firstStat = "Charisma";
      }
      break;
    case "Herbalist":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Constitution";
      }
      break;
    case "Hermit":
      if (firstStatIndex == 1) {
        firstStat = "Constitution";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Hunter":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Dexterity";
      }
      break;
    case "Laborer":
      if (firstStatIndex == 1) {
        firstStat = "Strength";
      } else {
        firstStat = "Constitution";
      }
      break;
    case "Martial Disciple":
      if (firstStatIndex == 1) {
        firstStat = "Strength";
      } else {
        firstStat = "Dexterity";
      }
      break;
    case "Merchant":
      if (firstStatIndex == 1) {
        firstStat = "Charisma";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Miner":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Strength";
      }
      break;
    case "Noble":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Nomad":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Constitution";
      }
      break;
    case "Prisoner":
      if (firstStatIndex == 1) {
        firstStat = "Strength";
      } else {
        firstStat = "Constitution";
      }
      break;
    case "Sailor":
      if (firstStatIndex == 1) {
        firstStat = "Strength";
      } else {
        firstStat = "Dexterity";
      }
      break;
    case "Scholar":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Scout":
      if (firstStatIndex == 1) {
        firstStat = "Wisdom";
      } else {
        firstStat = "Dexterity";
      }
      break;
    case "Street Urchin":
      if (firstStatIndex == 1) {
        firstStat = "Constitution";
      } else {
        firstStat = "Dexterity";
      }
      break;
    case "Tinker":
      if (firstStatIndex == 1) {
        firstStat = "Dexterity";
      } else {
        firstStat = "Intelligence";
      }
      break;
    case "Warrior":
      if (firstStatIndex == 1) {
        firstStat = "Strength";
      } else {
        firstStat = "Constitution";
      }
      break;
  }

  if (firstStat != primaryStat) {
    secondStat = primaryStat;

    //This bombs out if I don't have the value assigned to an array before returning.
    let _background = [background, firstStat, secondStat];

    return _background;
  } else {
    //Remove the first stat from the list,
    //you cannot select the same stat to raise at the same step twice.
    let secondStatList = [
      "Charisma",
      "Constitution",
      "Dexterity",
      "Intelligence",
      "Strength",
      "Wisdom",
    ];
    secondStatList.slice((secondStatList.indexOf(firstStat), 1));

    secondStat =secondStatList[Math.floor(Math.random() * secondStatList.length)];

    let combinedBackground =[background, firstStat, secondStat];

    if (background == null || firstStat == null || secondStat == null) {
      console.log("error with background");
      console.log(combinedBackground);
    }
    if (
      background == undefined ||
      firstStat == undefined ||
      secondStat == undefined
    ) {
      console.log("error with background");
      console.log(combinedBackground);
    }

    //return [background, firstStat, secondStat];
    return combinedBackground;
  }
}

//Returns a name based on a characters ancestery
function GetNpcName(ancestery) {
  let dwarfNames = [
    "Agna",
    "Bodill",
    "Dolgrin",
    "Edrukk",
    "Grunyar",
    "Ingra",
    "Kazmuk",
    "Kotri",
    "Lupp",
    "Morgrym",
    "Rogar",
    "Rusilka",
    "Torra",
    "Yangrit",
  ];
  let elfNames = [
    "Aerel",
    "Amrunelara",
    "Caladrel",
    "Dardlara",
    "Faunra",
    "Heldalel",
    "Jathal",
    "Lanliss",
    "Oparal",
    "Seldlon",
    "Soumral",
    "Talathel",
    "Tessara",
    "Variel",
    "Yalandlara",
    "Zordlon",
  ];
  let gnomeNames = [
    "Abroshtor",
    "Bastargre",
    "Besh",
    "Fijit",
    "Halungalom",
    "Krolmnite",
    "Neji",
    "Majet",
    "Pai",
    "Poshment",
    "Queck",
    "Trig",
    "Zarzuket",
    "Zatqualmie",
  ];
  let goblinNames = [
    "Ak",
    "Bokker",
    "Frum",
    "Guzmuk",
    "Krobby",
    "Loohi",
    "Mazmord",
    "Neeka",
    "Omgot",
    "Ranzak",
    "Rickle",
    "Tup",
    "Wakla",
    "Yonk",
    "Zibini",
  ];
  let haflingNames = [
    "Anafa",
    "Antal",
    "Bellis",
    "Boram",
    "Etune",
    "Filiu",
    "Jamir",
    "Kaleb",
    "Linna",
    "Marra",
    "Miro",
    "Rillka",
    "Sistra",
    "Sumak",
    "Yamyra",
  ];
  let catfolkNames = [
    "Alyara",
    "Crinto",
    "Drewan",
    "Espes",
    "Ferrus",
    "Gerran",
    "Halhat",
    "Hoya",
    "Ruun",
    "Sevastin",
    "Tespa",
    "Yonsol",
    "Zakkar",
    "Zathra",
  ];
  let hobgoblinNames = [
    "Aze",
    "Druknar",
    "Ghargam",
    "Hathkren",
    "Imakra",
    "Kralaeng",
    "Mazkol",
    "Olzu",
    "Rezal",
    "Sivkrag",
    "Volmak",
    "Zornum",
  ];
  let koboldNames = [
    "Azrnak",
    "Draahzin",
    "Enga",
    "Fazgyn",
    "Fazij",
    "Jekkajak",
    "Kib",
    "Kirrok",
    "Mirkol",
    "Tarka",
    "Urkak",
    "Varshez",
    "Vroklan",
    "Zekstikah",
    "Zgaz",
  ];
  let leshyNames = [
    "Scarlet in Summer",
    "Verdant Taleweaver",
    "Lurking Hunter",
    "Masterful Sun Drinker",
    "Noon Sky Evening Song",
    "Snowy Pine Branch",
    "Cascading Rapids",
  ];
  let lizardfolkNames = [
    "Arasheg",
    "Barashk",
    "Essaru",
    "Enshuk",
    "Gishkim",
    "Hazi",
    "Inishish",
    "Kutak",
    "Nasha",
    "Shulkuru",
    "Tizkar",
    "Utakish",
    "Zelkekek",
  ];
  let orcNames = [
    "Arkus",
    "Ausk",
    "Durra",
    "Grask",
    "Grillgiss",
    "Krugga",
    "Mahja",
    "Murdut",
    "Ollak",
    "Onyat",
    "Thurk",
    "Uirch",
    "Unach",
  ];
  let ratfolkNames = [
    "Arkus",
    "Ausk",
    "Durra",
    "Grask",
    "Grillgiss",
    "Krugga",
    "Mahja",
    "Murdut",
    "Ollak",
    "Onyat",
    "Thurk",
    "Uirch",
    "Unach",
  ];
  let shoonyNames = [
    "Ahogo",
    "Arnbin",
    "Bighmor",
    "Bondin",
    "Domwurd",
    "Ebmeur",
    "Gopor",
    "Gurna",
    "Hiemgur",
    "Mufurlo",
    "Oriog",
    "Pulumar",
    "Raliamar",
    "Ruggion",
    "Uhulrig",
    "Ungrin",
  ];
  let tenuNames = [
    "Arkkak",
    "Chuko",
    "Dolgra",
    "Dorodara",
    "Kakkariel",
    "Kora",
    "Marrak",
    "Mossarah",
    "Pularrka",
    "Rarorel",
    "Ruk",
    "Tak-Tak",
    "Tsukotarra",
  ];
  let humanNames = [
    "Herdis",
    "Hildigunn",
    "Hrefna",
    "Hrodyn",
    "Ingunn",
    "Ione",
    "Isidora",
    "Jillian",
    "Jorunn",
    "Jullana",
    "Katla",
    "Katrin",
    "Kelin",
    "Larisa",
    "Leilah",
    "Lyrisa",
    "Mizra",
    "Myriam",
    "Naomi",
    "Olya",
    "Radija",
    "Ragna",
    "Raisa",
    "Rannveig",
    "Rhora",
    "Saeunn",
    "Siglinde",
    "Sigrid",
    "Tatya",
    "Thora",
    "Thorfinna",
    "Thorgunna",
    "Thyri",
    "Tovi",
    "Ulira",
    "Unn",
    "Valya",
    "Vasha",
    "Yasimina",
    "Yrsa",
    "Aethel",
    "Agneir",
    "Alegan",
    "Alfgeir",
    "Alyth",
    "Arnlaug",
    "Aser",
    "Asgrim",
    "Bechir",
    "Bjorn",
    "Cerran",
    "Csaay",
    "Dakon",
    "Dalimyr",
    "Egil",
    "Elar",
    "Dolin",
    "Eldan",
    "Erradus",
    "Eteron",
    "Fjolnir",
    "Galoban",
    "Gellak",
    "Giliran",
    "Gremond",
    "Hassan",
    "Haulik",
    "Igor",
    "Ilia",
    "Isek",
    "Jens",
    "Jer",
    "Jethis",
    "J'gorl",
    "Kedrith",
    "Kerig",
    "Ketil",
    "Klobaen",
    "Lars",
    "Nydar",
    "Ogmund",
    "Onan",
    "Olis",
    "Otkel",
    "Rhalimon",
    "Rhorleif",
    "Rkykon",
    "Selim",
    "Sevaleyr",
    "Steinkel",
    "Tahir",
    "Thendas",
    "Ul'baenn",
    "Vagn",
    "Vestein",
    "Vigfus",
    "Vyeche",
    "Yevgenii",
  ];

  let nameList = [];

  switch (ancestery) {
    case "Dwarf":
      nameList = dwarfNames.slice();
      break;
    case "Elf":
      nameList = elfNames.slice();
      break;
    case "Gnome":
      nameList = gnomeNames.slice();
      break;
    case "Goblin":
      nameList = goblinNames.slice();
      break;
    case "Halfling":
      nameList = halflingNames.slice();
      break;
    case "Catfolk":
      nameList = catfolkNames.slice();
      break;
    case "Kobold":
      nameList = koboldNames.slice();
      break;
    case "Orc":
      nameList = orcNames.slice();
      break;
    case "Ratfolk":
      nameList = ratfolkNames.slice();
      break;
    case "Tengu":
      nameList = tenguNames.slice();
      break;
    case "Leshy":
      nameList = leshyNames.slice();
      break;
    case "Lizardfolk":
      nameList = lizardfolkNames.slice();
      break;
    case "Hobgoblin":
      nameList = hobgoblinNames.slice();
      break;
    case "Shoony":
      nameList = shoonyNames.slice();
      break;

    //considering humans as default
    //case  "Human":
    default:
      nameList = humanNames.slice();
      break;
  }

  let ranName = Math.floor(Math.random() * (nameList.length + 1));
  return nameList[ranName];
}
