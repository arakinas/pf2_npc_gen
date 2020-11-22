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
  "Wizard"
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
  "Shoony"
];

describe("Drop Downs Populate", () => {
  it("Npc Type drop down contains character classes", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcType > option").should(
      "have.length",
      classTypes.length + 1
    );

    cy.get("#selectNpcType")
      .select(classTypes[0])
      .should("have.value", classTypes[0]);
    cy.get("#selectNpcType")
      .select(classTypes[3])
      .should("have.value", classTypes[3]);
    cy.get("#selectNpcType")
      .select(classTypes[7])
      .should("have.value", classTypes[7]);
    cy.get("#selectNpcType")
      .select(classTypes[12])
      .should("have.value", classTypes[12]);
    cy.get("#selectNpcType").not("have.value", classTypes[11]);
  });
  it("Level drop down contains levels", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcLevel > option").should("have.length", 21);

    cy.get("#selectNpcLevel").select("1").should("have.value", 1);
    cy.get("#selectNpcLevel").select("3").should("have.value", 3);
    cy.get("#selectNpcLevel").select("7").should("have.value", 7);
    cy.get("#selectNpcLevel").select("8").should("have.value", 8);
  });
  it("Npc Ancestry drop down contains ancestrys", () => {
    cy.visit("/index.html");
    cy.get("#selectNpcAncestery > option").should(
      "have.length",
      ancesteryTypes.length + 1
    );
    cy.get("#selectNpcAncestery")
      .select(ancesteryTypes[0])
      .should("have.value", ancesteryTypes[0]);
    cy.get("#selectNpcAncestery")
      .select(ancesteryTypes[3])
      .should("have.value", ancesteryTypes[3]);
    cy.get("#selectNpcAncestery")
      .select(ancesteryTypes[7])
      .should("have.value", ancesteryTypes[7]);
    cy.get("#selectNpcAncestery")
      .select(ancesteryTypes[12])
      .should("have.value", ancesteryTypes[12]);
    cy.get("#selectNpcAncestery").not("have.value", ancesteryTypes[11]);
  });
});
