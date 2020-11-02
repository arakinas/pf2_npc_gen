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
  console.log("clear Results clicked");
  //Current Bug! After clearing results the textArea won't populate again.
}

function GenerateNpc() {
  console.log("Generate Npc clicked");
  if (
    npcTypeSelector.selectedIndex == 0 ||
    npcLevelSelector.selectedIndex == 0
  ) {
    addResultWithLine("Please select a valid type and level");
    addResultWithLine(
      "Selected type: " +
        npcTypeSelector.value +
        " and level: " +
        npcLevelSelector.value
    );
    return;
  }
  let npcClass = npcTypeSelector.value;
  let npcLevel = npcLevelSelector.value;
  let npcAncestery = npcAncesterySelector.value;

  if(npcAncesterySelector.selectedIndex < 2){
      npcAncestery = "Random";
  }

  let newNpc = new CreateNpc(npcClass, npcLevel, npcAncestery);

  addResultWithLine("Creating New Npc:");
  addResultWithLine(GetNpcName() + ", the level " + newNpc.npcLevel + 
  " " + newNpc.npcAncestery +  " " + newNpc.npcClass + "!");

}

function ResetSelections() {
  console.log("Reset selection clicked");
  npcLevelSelector.selectedIndex = 0;
  npcLevelSelector.selectedIndex = 0;
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
  testResultsList.append(textToAdd + "\n");
}

class CreateNpc {
  constructor(npcClass, npcLevel, npcAncestery) {


    if ((npcAncestery == "Random") || (npcAncestery == "Select Ancestery")) {
        let ran = Math.floor(Math.random() * (ancesteryTypes.length));
    
        npcAncestery = ancesteryTypes[ran];
      }

      if ((npcClass == "Random") || (npcClass == "Select Type")) {
        let ran = Math.floor(Math.random() * (ancesteryTypes.length));
    
        npcClass = classTypes[ran];
      }

      if ((npcLevel == "Random") || (npcLevel == "Select Level")){
          let levels = GenerateLevels();
        let ran = Math.floor(Math.random() * (levels.length));
    
        npcLevel = levels[ran];
      }

      this.npcClass = npcClass;
      this.npcLevel = npcLevel;
      this.npcAncestery = npcAncestery;
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
