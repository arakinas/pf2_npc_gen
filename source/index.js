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

let savedNpcs = []; // Variable to hold saving the npcs

let npcAncesterySelector = document.getElementById("selectNpcAncestery");
let npcLevelSelector = document.getElementById("selectNpcLevel");
let npcTypeSelector = document.getElementById("selectNpcType");
let textareaGeneratedNpcs = document.getElementById("textareaGeneratedNpcs");

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

function AddResultWithLine(textToAdd) {
  if (textareaGeneratedNpcs.value == undefined) {
    textareaGeneratedNpcs.value = "";
  }
  textareaGeneratedNpcs.value += textToAdd + "\n";
}

function ClearResults() {
  textareaGeneratedNpcs.value = "";
}

function GenerateLevels() {
  let levels = [];

  for (let i = 1; i < 21; i++) {
    levels.push(i);
  }
  return levels;
}

function GenerateNpc() {
  let npcClass = npcTypeSelector.value;
  let npcLevel = npcLevelSelector.value;
  let npcAncestery = npcAncesterySelector.value;
  let newNpc = new CreateNpc(npcClass, npcLevel, npcAncestery);

  savedNpcs.push(newNpc);

  AddResultWithLine("Creating New Npc:");
  AddResultWithLine(
    newNpc.npcName +
      ", the level " +
      newNpc.npcLevel +
      " " +
      newNpc.npcAncestery +
      " " +
      newNpc.npcClass +
      "!"
  );
  AddResultWithLine("Background: " + newNpc.npcBackGround[0]);
  LogStats(
    newNpc.charisma,
    newNpc.constitution,
    newNpc.dexterity,
    newNpc.intelligence,
    newNpc.strength,
    newNpc.wisdom
  );

  for (let i = 0; i < newNpc.npcItems.length; i++) {
    let item = newNpc.npcItems[i];
    if (i > 0) {
      item = " " + item;
    }
    AddResultWithLine(newNpc.npcItems[i]);
  }

  DisplaySavedNpc(newNpc);
  console.log(newNpc.npcName + " generated");
}

function PopulateDropDowns() {
  PopulateOptions(GenerateLevels(), npcLevelSelector);
  PopulateOptions(classTypes, npcTypeSelector);
  PopulateOptions(ancesteryTypes, npcAncesterySelector);
}

function PopulateOptions(optionsToPopulate, control) {
  for (let i = 0; i < optionsToPopulate.length; i++) {
    let option = optionsToPopulate[i];
    let element = document.createElement("option");
    element.textContent = option;
    element.value = option;
    control.appendChild(element);
  }
}

function ResetSelections() {
  npcTypeSelector.selectedIndex = 0;
  npcLevelSelector.selectedIndex = 0;
  npcAncesterySelector.selectedIndex = 0;
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
  AddResultWithLine(
    "Strength:" +
      strength +
      ", Dexterity:" +
      dexterity +
      ", Constitution:" +
      constitution
  );
  AddResultWithLine(
    "Intelligence:" +
      intelligence +
      " Wisdom:" +
      wisdom +
      " Charisma:" +
      charisma
  );
}
