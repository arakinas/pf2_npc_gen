


let classTypes = ["Alchemist", "Barbarian", "Bard", "Champion", "Cleric", "Druid",
"Fighter", "Investigator", "Monk", "Oracle", "Ranger", "Rogue", "Sorcerer", "Swashbuckler",
"Witch", "Wizard"];

let npcLevelSelector = document.getElementById("selectNpcLevel");
let npcTypeSelector = document.getElementById("selectNpcType");
let testResultsList = document.getElementById("textareaResults");

function PopulateOptions(optionsToPopulate, control){
    for(let i=0; i < optionsToPopulate.length; i++){
        let option = optionsToPopulate[i];
        let element = document.createElement("option");
        element.textContent = option;
        element.value = option;
        control.appendChild(element);        
    }
}

function PopulateDropDowns(){
       
   PopulateOptions(GenerateLevels(), npcLevelSelector);
   PopulateOptions(classTypes,npcTypeSelector);   
}

function GenerateLevels(){
    let levels = [];

    for(let i = 1; i < 21; i++){
        levels.push(i);
    }
    return levels;
}

function ClearResults(){
    testResultsList.value="";
    console.log("clear Results clicked");

}

function GenerateNpc(){
    console.log("Generate Npc clicked");
if((npcTypeSelector.selectedIndex == 0) ||(npcLevelSelector.selectedIndex == 0)){
    addResultWithLine("Please select a valid type and level");
    addResultWithLine("Selected type: " + npcTypeSelector.value + " and level: " + npcLevelSelector.value)
return;
}
let npcClass = npcTypeSelector.value;
let npcLevel = npcLevelSelector.value

    //addResultWithLine("Creating new npc of type: " + npcTypeSelector.value + " and level: " + npcLevelSelector.value);

    
let newNpc = new CreateNpc(npcClass, npcLevel);

addResultWithLine("Creating new npc of type: " + newNpc.npcClass + " and level: " + newNpc.npcLevel + " and race: " + newNpc.npcRace);

}

function ResetSelections(){
    console.log("Reset selection clicked");
    npcLevelSelector.selectedIndex=0;
    npcLevelSelector.selectedIndex=0;
}

document.getElementById("btnClearResults").addEventListener("click", ClearResults);
document.getElementById("btnGenerateNpc").addEventListener("click", GenerateNpc);
document.getElementById("btnResetSelections").addEventListener("click", ResetSelections);


document.onload = PopulateDropDowns();

function addResultWithLine(textToAdd){    
    testResultsList.append(textToAdd + "\n");
}


class CreateNpc{
    constructor(npcClass, npcLevel, npcRace = "Human"){
        this.npcClass = npcClass;
        this.npcLevel = npcLevel;
        this.npcRace = npcRace;
    }
}
