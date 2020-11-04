describe("Character Generator Tests", () => {
  it("Default options generates a character", () => {
    cy.visit("/index.html");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Creating New Npc:");
    cy.get("#textareaResults").should("contain.value", "the level");
    validateStatsOutput();
  });
  it("Alchemist option generates an alchemist", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Alchemist");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Creating New Npc:");
    cy.get("#textareaResults").should("contain.value", "Alchemist!");
    validateStatsOutput();
  });
  it("Barbarian option generates a Barbarian", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Barbarian");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Creating New Npc:");
    cy.get("#textareaResults").should("contain.value", "Barbarian!");
    validateStatsOutput();
  });
  it("Level 2 human cleric generates level 2 human cleric", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Cleric");
    cy.get("#selectNpcAncestery").select("Human");
    cy.get("#selectNpcLevel").select("2");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should(
      "contain.value",
      "the level 2 Human Cleric!"
    );
  });
  it("Level 1 ratfolk fighter has 16 strength", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Fighter");
    cy.get("#selectNpcAncestery").select("Ratfolk");
    cy.get("#selectNpcLevel").select("1");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Strength:16");
  });
  it("Level 1 human fighter has 18 strength", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Fighter");
    cy.get("#selectNpcAncestery").select("Human");
    cy.get("#selectNpcLevel").select("1");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Strength:18");
  });
  it("Level 1 human cleric has 18 wisdom", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Cleric");
    cy.get("#selectNpcAncestery").select("Human");
    cy.get("#selectNpcLevel").select("1");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Wisdom:18");
  });
  it("Level 1 human druid has 18 wisdom", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Druid");
    cy.get("#selectNpcAncestery").select("Human");
    cy.get("#selectNpcLevel").select("1");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Wisdom:18");
  });
  it("Level 1 human wizard has 18 intelligence", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Wizard");
    cy.get("#selectNpcAncestery").select("Human");
    cy.get("#selectNpcLevel").select("1");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Intelligence:18");
  });
  it("Level 1 leshy wizard has 16 intelligence", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Wizard");
    cy.get("#selectNpcAncestery").select("Leshy");
    cy.get("#selectNpcLevel").select("1");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Intelligence:16");
  });
  it("Level 5 ratfolk fighter has 18 strength", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Fighter");
    cy.get("#selectNpcAncestery").select("Ratfolk");
    cy.get("#selectNpcLevel").select("5");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Strength:18");
  });
  it("Level 10 ratfolk fighter has 20 strength", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Fighter");
    cy.get("#selectNpcAncestery").select("Ratfolk");
    cy.get("#selectNpcLevel").select("10");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Strength:20");
  });
  it("Level 15 human wizard has 24 intelligence", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Wizard");
    cy.get("#selectNpcAncestery").select("Human");
    cy.get("#selectNpcLevel").select("15");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Intelligence:24");
  });
  it("Level 20 leshy wizard has 24 intelligence", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Wizard");
    cy.get("#selectNpcAncestery").select("Leshy");
    cy.get("#selectNpcLevel").select("20");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Intelligence:24");
  });
  it("Clicking clear results removes results", () => {
    cy.visit("/index.html");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Creating New Npc:");
    cy.get("#btnClearResults").click();
    cy.get("#textareaResults").should("have.value", "");
  });
  it("Clicking clear results does not prevent new results", () => {
    cy.visit("/index.html");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Creating New Npc:");
    cy.get("#btnClearResults").click();
    cy.get("#textareaResults").should("have.value", "");
    cy.get("#btnGenerateNpc").click();
    cy.get("#textareaResults").should("contain.value", "Creating New Npc:");
  });
  it("Clicking reset selections sets dropdowns to Random", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType").select("Cleric").should("have.value", "Cleric");
    cy.get("#selectNpcAncestery").select("Human").should("have.value", "Human");
    cy.get("#selectNpcLevel").select("1").should("have.value", "1");
    cy.get("#btnResetSelections").click();
    cy.get("#selectNpcType").should("have.value", "Random");
    cy.get("#selectNpcAncestery").should("have.value", "Random");
    cy.get("#selectNpcLevel").should("have.value", "Random");
  });
});

function validateStatsOutput() {
  cy.get("#textareaResults").should("contain.value", "Charisma:");
  cy.get("#textareaResults").should("contain.value", "Constitution:");
  cy.get("#textareaResults").should("contain.value", "Dexterity:");
  cy.get("#textareaResults").should("contain.value", "Intelligence:");
  cy.get("#textareaResults").should("contain.value", "Strength:");
  cy.get("#textareaResults").should("contain.value", "Wisdom:");
}
