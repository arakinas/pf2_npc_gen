let savedNpcList = document.getElementById("npcList");
let displayNpcTextArea = document.getElementById("textareaSavedNpcs");

function DisplaySavedNpc(npc) {
  let listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(FormatCharacterText(npc)));
  savedNpcList.appendChild(listItem);
}


document
  .getElementById("btnDeleteSelectedNpc")
  .addEventListener("click", DeleteSelectedNpc);

document.getElementById("npcList").addEventListener("click", function (e) {
  let prevSelectedElement = document.getElementsByClassName("selectedNpc");
  if (prevSelectedElement[0] != undefined) {
    prevSelectedElement[0].className = "";
  }
  let selectedElement;

  if (e.target.tagName === "LI") {
    selectedElement = document.querySelector("li.selected");
    if (selectedElement) {
      selectedElement.className = "";
    }
    e.target.className = "selectedNpc";
    DisplayNpc();
  }
});

function DisplayNpc() {
  let selectedCharacter = document.getElementsByClassName("selectedNpc")[0]
    .innerHTML;

  for (let i = 0; i < savedNpcs.length; i++) {
    if (
      selectedCharacter.match(savedNpcs[i].npcName) &&
      selectedCharacter.match(savedNpcs[i].npcAncestery) &&
      selectedCharacter.match(savedNpcs[i].npcClass) &&
      selectedCharacter.match(savedNpcs[i].npcLevel)
    ) {
      displayNpcTextArea.value = savedNpcs[i].npcName + "\n";
      displayNpcTextArea.value += savedNpcs[i].npcAncestery + "\n";
      displayNpcTextArea.value += "Level: " + savedNpcs[i].npcLevel + "\n";
      displayNpcTextArea.value += "Class: " + savedNpcs[i].npcClass + "\n";
      displayNpcTextArea.value += "Strength:" + savedNpcs[i].strength + "\n";
      displayNpcTextArea.value += "Dexterity:" + savedNpcs[i].dexterity + "\n";
      displayNpcTextArea.value +=
        "Constitution:" + savedNpcs[i].constitution + "\n";
      displayNpcTextArea.value +=
        "Intelligence:" + savedNpcs[i].intelligence + "\n";
      displayNpcTextArea.value += "Wisdom:" + savedNpcs[i].wisdom + "\n";
      displayNpcTextArea.value += "Charisma:" + savedNpcs[i].charisma + "\n";

let itemList = savedNpcs[i].npcItems;

      displayNpcTextArea.value += "Items:" + "\n";
      for(let item = 0; item < itemList.length; item++){
        displayNpcTextArea.value += savedNpcs[i].npcItems[item] + "\n";
      }

      return;
    }
  }
}

function FormatCharacterText(npc) {
  let npcText =
    npc.npcName +
    " the level " +
    npc.npcLevel +
    " " +
    npc.npcAncestery +
    " " +
    npc.npcClass;

  return npcText;
}


function DeleteSelectedNpc(){
    let selectedCharacter = document.getElementsByClassName("selectedNpc")[0];
    selectedCharacter.parentNode.removeChild(selectedCharacter);
    displayNpcTextArea.value= "";
}