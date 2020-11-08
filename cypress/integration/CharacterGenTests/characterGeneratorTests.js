describe("Character Generator Tests", () => {
  it("Default options generates a character", () => {
    cy.visit("/index.html");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should(
      "contain.value",
      "Creating New Npc:"
    );
    cy.get("#textareaGeneratedNpcs").should("contain.value", "the level");
    validateStatsOutput();
  });
  it("Alchemist option generates an alchemist", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Alchemist");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should(
      "contain.value",
      "Creating New Npc:"
    );
    cy.get("#textareaGeneratedNpcs").should("contain.value", "Alchemist!");
    validateStatsOutput();
  });
  it("Barbarian option generates a Barbarian", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Barbarian");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should(
      "contain.value",
      "Creating New Npc:"
    );
    cy.get("#textareaGeneratedNpcs").should("contain.value", "Barbarian!");
    validateStatsOutput();
  });
  it("Level 2 human cleric generates level 2 human cleric", () => {
    cy.visit("/index.html");
    let npcClass = "Cleric";
    let npcLevel = "2";
    let npcAncestry = "Human";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should(
      "contain.value",
      "the level 2 Human Cleric!"
    );
  });
  it("Level 1 ratfolk fighter has 16 strength", () => {
    cy.visit("/index.html");
    let npcClass = "Fighter";
    let npcLevel = "1";
    let npcAncestry = "Ratfolk";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should("contain.value", "Strength:16");
  });
  it("Level 1 human fighter has 18 strength", () => {
    cy.visit("/index.html");
    let npcClass = "Fighter";
    let npcLevel = "1";
    let npcAncestry = "Human";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should("contain.value", "Strength:18");
  });
  it("Level 1 human cleric has 18 wisdom", () => {
    cy.visit("/index.html");
    let npcClass = "Cleric";
    let npcLevel = "1";
    let npcAncestry = "Human";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should("contain.value", "Wisdom:18");
  });
  it("Level 1 human druid has 18 wisdom", () => {
    cy.visit("/index.html");
    let npcClass = "Druid";
    let npcLevel = "1";
    let npcAncestry = "Human";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should("contain.value", "Wisdom:18");
  });
  it("Level 1 human wizard has 18 intelligence", () => {
    cy.visit("/index.html");
    let npcClass = "Wizard";
    let npcLevel = "1";
    let npcAncestry = "Human";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should("contain.value", "Intelligence:18");
  });
  it("Level 1 leshy wizard has 16 intelligence", () => {
    cy.visit("/index.html");
    let npcClass = "Wizard";
    let npcLevel = "1";
    let npcAncestry = "Leshy";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should("contain.value", "Intelligence:16");
  });
  it("Level 5 ratfolk fighter has 18 strength", () => {
    cy.visit("/index.html");
    let npcClass = "Fighter";
    let npcLevel = "5";
    let npcAncestry = "Ratfolk";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should("contain.value", "Strength:18");
  });
  it("Level 10 ratfolk fighter has 20 strength", () => {
    cy.visit("/index.html");
    let npcClass = "Fighter";
    let npcLevel = "10";
    let npcAncestry = "Ratfolk";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should("contain.value", "Strength:20");
  });
  it("Level 15 human wizard has 24 intelligence", () => {
    cy.visit("/index.html");
    let npcClass = "Wizard";
    let npcLevel = "15";
    let npcAncestry = "Human";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should("contain.value", "Intelligence:24");
  });
  it("Level 20 leshy wizard has 24 intelligence", () => {
    cy.visit("/index.html");
    let npcClass = "Wizard";
    let npcLevel = "20";
    let npcAncestry = "Leshy";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should("contain.value", "Intelligence:24");
  });
  it("Clicking clear results removes results", () => {
    cy.visit("/index.html");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should(
      "contain.value",
      "Creating New Npc:"
    );
    cy.get("#btnClearResults").click();
    cy.get("#textareaGeneratedNpcs").should("have.value", "");
  });
  it("Clicking clear results does not prevent new results", () => {
    cy.visit("/index.html");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should(
      "contain.value",
      "Creating New Npc:"
    );
    cy.get("#btnClearResults").click();
    cy.get("#textareaGeneratedNpcs").should("have.value", "");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaGeneratedNpcs").should(
      "contain.value",
      "Creating New Npc:"
    );
  });
  it("Clicking reset selections sets dropdowns to Random", () => {
    cy.visit("/index.html");
    let npcClass = "Cleric";
    let npcLevel = "1";
    let npcAncestry = "Human";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("#btnResetSelections").click();
    cy.get("#selectNpcType").should("have.value", "Random");
    cy.get("#selectNpcAncestery").should("have.value", "Random");
    cy.get("#selectNpcLevel").should("have.value", "Random");
  });
  it("Clicking on npc in list displays in text area and shows as selected", () => {
    cy.visit("/index.html");
    let npcClass = "Cleric";
    let npcLevel = "1";
    let npcAncestry = "Human";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("li")
      .should("contain.text", npcClass)
      .should("contain.text", npcAncestry)
      .should("contain.text", npcLevel)
      .click();
    cy.get("li.selectedNpc").should(
      "have.css",
      "background-color",
      "rgb(211, 211, 211)"
    );
    cy.get("#textareaSavedNpcs")
      .should("contain.value", "Class: " + npcClass)
      .should("contain.value", "Level: " + npcLevel)
      .should("contain.value", npcAncestry);
  });
  it("Selecting and then deleting npc in list removes them from list and display", () => {
    cy.visit("/index.html");
    let npcClass = "Cleric";
    let npcLevel = "1";
    let npcAncestry = "Human";
    InsertCharacterOptions(npcClass, npcAncestry, npcLevel);
    cy.get("li")
      .should("contain.text", npcClass)
      .should("contain.text", npcAncestry)
      .should("contain.text", npcLevel)
      .click();
    cy.get("li.selectedNpc").should(
      "have.css",
      "background-color",
      "rgb(211, 211, 211)"
    );
    cy.get("#textareaSavedNpcs")
      .should("contain.value", "Class: " + npcClass);      
    cy.get("#textareaSavedNpcs")
    .should("contain.value", "Class: " + npcClass);    
    cy.get("ul#npcList").children().should("have.length", 1);
    cy.get("#btnDeleteSelectedNpc").click();
    cy.get("#textareaSavedNpcs")
      .should("have.value", "");
      cy.get("ul#npcList").children().should("have.length", 0);
  });
});

function validateStatsOutput() {
  cy.get("#textareaGeneratedNpcs").should("contain.value", "Charisma:");
  cy.get("#textareaGeneratedNpcs").should("contain.value", "Constitution:");
  cy.get("#textareaGeneratedNpcs").should("contain.value", "Dexterity:");
  cy.get("#textareaGeneratedNpcs").should("contain.value", "Intelligence:");
  cy.get("#textareaGeneratedNpcs").should("contain.value", "Strength:");
  cy.get("#textareaGeneratedNpcs").should("contain.value", "Wisdom:");
}

function InsertCharacterOptions(npcClass, npcAncestry, npcLevel) {
  cy.get("#selectNpcType").select(npcClass);
  cy.get("#selectNpcAncestery").select(npcAncestry);
  cy.get("#selectNpcLevel").select(npcLevel);
  cy.get("#btnGenerateNpc").click();
}
