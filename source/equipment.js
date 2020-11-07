function GetStartingItems(npcClass, npcLevel) {
  let npcWealthByLevel = GetWealthByLevel(npcClass, npcLevel);
  
  let npcItems = [npcWealthByLevel];
  return npcItems;
}

function GetWealthByLevel(npcClass, npcLevel) {
  let gold = 15;
  let itemsByLevel = [];
  //I didn't think this needed the numbers to be in quotes, but
  //is not consistently recognizing them otherwise

level = parseInt(npcLevel);

  switch (level) {
    case 1:
      gold = 15;
      break;
    case 2:
      gold = 20;
      itemsByLevel.push(GetItemsByLevel(npcClass, 1));
      break;
    case 3:
      gold = 25;
      itemsByLevel.push(GetItemsByLevel(npcClass, 1, 2));
      itemsByLevel.push(GetItemsByLevel(npcClass, 2, 1));
      break;
    case 4:
      gold = 30;
      itemsByLevel.push(GetItemsByLevel(npcClass, npcLevel - 1, 1));
      itemsByLevel.push(GetItemsByLevel(npcClass, npcLevel - 2, 2));
      itemsByLevel.push(GetItemsByLevel(npcClass, npcLevel - 3, 1));
      break;
    case 5:
      gold = 50;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 6:
      gold = 80;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 7:
      gold = 125;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 8:
      gold = 180;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 9:
      gold = 250;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 10:
      gold = 350;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 11:
      gold = 500;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 12:
      gold = 700;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 13:
      gold = 1000;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 14:
      gold = 1500;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 15:
      gold = 2250;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 16:
      gold = 3250;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 17:
      gold = 5000;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 18:
      gold = 7500;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 19:
      gold = 12000;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
    case 20:
      gold = 20000;
      itemsByLevel = GetItems(npcClass, npcLevel);
      break;
  }

  let items = [(gold + " gold")];
  itemsByLevel.forEach(AddItems);

  function AddItems(item, index) {
    items.push(item);
  }

  return items;
}

function GetItems(npcClass, npcLevel) {
  let items = [];
  items.push(GetItemsByLevel(npcClass, npcLevel - 1, 1));
  items.push(GetItemsByLevel(npcClass, npcLevel - 2, 2));
  items.push(GetItemsByLevel(npcClass, npcLevel - 3, 1));
  items.push(GetItemsByLevel(npcClass, npcLevel - 4, 2));
  return items;
}

function GetItemsByLevel(npcClass, itemLevel, numItems) {
  for (let i = 0; i < numItems; i++) {
    return GetItem(npcClass, itemLevel);
  }
}

function GetItem(npcClass, itemLevel) {
  let item;

  switch (itemLevel) {
    case 1:
      item = GetFirstLevelItem(npcClass);
      break;
    case 2:
      item = GetSecondLevelItem(npcClass);
      break;
    case 3:
      item = GetThirdLevelItem(npcClass);
      break;
    case 4:
      item = GetFourthLevelItem(npcClass);
      break;
    case 5:
      item = GetFifthLevelItem(npcClass);
      break;
    case 6:
      item = GetSixthLevelItem(npcClass);
      break;
    case 7:
      item = GetSeventhLevelItem(npcClass);
      break;
    case 8:
      item = GetEighthLevelItem(npcClass);
      break;
    case 9:
      item = GetNinthLevelItem(npcClass);
      break;
    case 10:
      item = GetTenthLevelItem(npcClass);
      break;
    case 11:
      item = GetEleventhLevelItem(npcClass);
      break;
    case 12:
      item = GetTwelfthLevelItem(npcClass);
      break;
    case 13:
      item = GetThirteenthLevelItem(npcClass);
      break;
    case 14:
      item = GetFourteenthLevelItem(npcClass);
      break;
    case 15:
      item = GetFifteenthLevelItem(npcClass);
      break;
    case 16:
      item = GetSixteenthLevelItem(npcClass);
      break;
    case 17:
      item = GetSeventeenthLevelItem(npcClass);
      break;
    case 18:
      item = GetEighteenthLevelItem(npcClass);
      break;
    case 19:
      item = GetNineteenthLevelItem(npcClass);
      break;
    case 20:
      item = GetTwentiethLevelItem(npcClass);
      break;
  }
  return item;
}

function GetFirstLevelItem(npcClass) {
  if (npcClass == "Fighter" || npcClass == "Champion") {
    return "Half plate";
  }
  return "Everburning torch";
}

function GetSecondLevelItem(npcClass) {
  let itemList = [
    "Wondrous figuring, onyx dog",
    "+1 weapon Potency rune",
    "+1 weapon",
    "Cold iron weapon, low-grade",
    "Silver buckler, low-grade",
    "Cold iron buckler, low-grade",
    "Silver weapon low-grade",
  ];
  if (npcClass == "Fighter" || npcClass == "Champion") {
    itemList.push("Full plate");
    itemList.push("Silver shield, low-grade");
  } else if (npcClass == "monk") {
    itemList.push("+1 handwraps of mighty blows");
  } else {
    itemList.push("Hand of the mage");
    itemList.push("Hat of disguise");
  }
  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetThirdLevelItem(npcClass) {
  let itemList = [
    "Returning Rune",
    "Shadow Rune",
    "Slick Rune",
    "Bracelet of dashing",
    "Bracers of missile deflection",
    "Coyote cloak",
    "Crafter’s eyepiece",
    "Dancing scarf",
    "Doubling rings",
    "Persona mask",
    "Tracker’s goggles",
    "Ventriloquist’s ring",
  ];

  if (npcClass == "Wizard" || npcClass == "Sorcerer" || npcClass == "Witch") {
    itemList.push("Staff of fire");
    itemList.push("Wand of 1st-level spell");
    itemList.push("Hat of the magi");
    itemList.push("Pendant of the occult");
  } else if (
    npcClass == "Fighter" ||
    npcClass == "Champion" ||
    npcClass == "Ranger" ||
    npcClass == "Rogue" ||
    npcClass == "Investigator"
  ) {
    itemList.push("Fighter’s fork");
    itemList.push("Retribution axe");
  } else if (npcClass == "Cleric" || npcClass == "Oracle") {
    itemList.push("Thurible of revelation, lesser");
  } else if (npcClass == "Bard") {
    itemList.push("Maestro’s instrument, lesser");
  }
  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetFourthLevelItem(npcClass) {
  let itemList = [
    "Bag of holding type I",
    "Ghost touch rune",
    "Striking rune",
    "Sturdy shield, minor",
    "+1 Striking weapon",
    "Alchemist goggles",
    "Demon mask",
    "Healer’s gloves",
    "Lifting belt",
  ];

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    (npcClass == "Bard")||(npcClass == "Druid")
  ) {
    itemList.push("Wand of widening 1st");
  }
  if (npcClass == "Druid" || npcClass == "Ranger") {
    itemList.push("Animal staff");
  }
  if (npcClass == "Wizard" || npcClass == "Sorcerer" || npcClass == "Witch") {
    itemList.push("Mentalist’s staff");
  }
  if (npcClass == "Monk") {
    itemList.push("+1 Striking handwraps of mighty blows");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetFifthLevelItem(npcClass) {
  let itemList = [
    "+1 armor",
    "Cold iron armor, low-grade",
    "Silver armor, low-grade",
    "Skeleton key, standard	",
    "+1 armor Potency Rune",
    "Glamered Rune",
    "Disrupting Rune",
    "Caterwaul sling",
    "Dagger of venom",
    "Boots of elvenkind",
    "Diplomat’s badge",
    "Goggles of night",
  ];

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    (npcClass == "Bard")||(npcClass == "Druid")
  ) {
    itemList.push("Wand of 2nd-level spell");
    itemList.push("Wand of continuation 1st");
    itemList.push(" Wand of manifold missiles 1st");
    itemList.push("Caterwaul sling");
    itemList.push("Dagger of venom");
    itemList.push("Boots of elvenkind");
    itemList.push("Diplomat’s badge");
    itemList.push("Goggles of night");
  }
  if (npcClass == "Wizard" || npcClass == "Sorcerer" || npcClass == "Witch") {
    itemList.push("Mentalist’s staff");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetSixthLevelItem(npcClass) {
  let itemList = [
    "Traveler’s any-tool",
    "Shifting Rune",
    "Lion’s shield Shield",
    "Spellguard Shield Shield",
    "Twining staff",
    "Choker of elocution",
    "Ring of energy resistance",
    "Ring of the ram",
  ];

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    (npcClass == "Bard")||(npcClass == "Druid")
  ) {
    itemList.push("Staff of conjuration");
    itemList.push("Staff of divination");
    itemList.push("Staff of enchantment");
    itemList.push("Staff of evocation");
    itemList.push("Staff of illusion");
    itemList.push("Staff of necromancy");
    itemList.push("Staff of transmutation");
    itemList.push("Verdant staff");
    itemList.push("Wand of widening 2nd");
    itemList.push("evel spell");
  }
  if (npcClass == "Druid") {
    itemList.push("Primeval mistletoe, standard");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetSeventhLevelItem(npcClass) {
  let itemList = [
    "Moonlit chain",
    "Horseshoes of speed",
    "Bag of holding type II",
    "Bottled air",
    "Decanter of endless water",
    "Wondrous figurine, jade serpent",
    "Wounding Rune",
    "Cold iron buckler, standard-grade",
    "Cold iron shield, standard-grade",
    "Silver buckler, standard-grade",
    "Silver shield, standard-grade",
    "Spined shield",
    "Sturdy shield, lesser",
    "Boots of bounding",
    "Cloak of elvenkind",
    "Hat of disguise, greater",
  ];

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("Wand of 3rd-level spell");
    itemList.push("Wand of continuation 2nd");
  }
  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetEighthLevelItem(npcClass) {
  let itemList = [
    "+1 Resilient armor",
    "Collar of inconspicuousness",
    "Corrosive Rune",
    "Energy-resistant Rune",
    "Flaming Rune",
    "Frost Rune",
    "Invisibility Rune",
    "Resilient Rune",
    "Shock Rune",
    "Slick, greater Rune",
    "Thundering Rune",
    "Bracers of armor type I",
  ];

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("Mentalist’s staff, greater");
    itemList.push("Staff of fire, greater	Staff");
    itemList.push("Staff of Healing, greater	Staff");
    itemList.push("Staff of illumination	Staff");
    itemList.push("Wand of smoldering fireballs 3rd	Wand");
    itemList.push("Wand of widening 3rd	Wand");
  }
  if (npcClass == "Druid" || npcClass == "Ranger") {
    itemList.push("Animal staff, greater	Staff");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetNinthLevelItem(npcClass) {
  let itemList = [
    "Rhino hide",
    "Collar of empathy",
    "Horn of blasting",
    "Immovable Rod",
    "Triton’s conch",
    "Grievous Rune",
    "Shadow, greater Rune",
    "Gloom blade",
    "Armbands of athleticism",
    "Bracers of missile deflection, greater",
    "Coyote cloak, greater",
    "Dancing scarf, greater",
    "Eye of the eagle",
    "Healer’s gloves, greater",
    "Messenger’s ring",
    "Persona mask, greater",
    "Phylactery of faithfulness",
    "Tracker’s goggles, greater",
    "Ventriloquist’s ring, greater",
  ];

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("Wand of 4th-level spell");
    itemList.push("Wand of continuation 3rd");
    itemList.push("Wand of manifold missiles 3rd");
    itemList.push("Necklace of fireballs type III");
    itemList.push("Pendant of the occult, greater");
    itemList.push("Hat of the magi, greater");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetTenthLevelItem(npcClass) {
  let itemList = [
    "Electric eelskin",
    "Barding of the zephyr",
    "Wondrous figurine, golden lions",
    "+2 weapon Potency Rune",
    "Invisibility, greater Rune",
    "Sturdy shield, moderate",
    "Explorer’s yurt",
    "+2 Striking weapon",
    "Cold iron weapon, standard-grade",
    "Silver weapon, standard-grade",
    "Winged boots",
    "Cloak of the bat",
    "Daredevil boots",
    "Demon mask, greater",
  ];
  if (npcClass == "Fighter" || npcClass == "Champion" || npcClass == "Ranger") {
    itemList.push("Breastplate of command");
  }
  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("Staff of abjuration, greater");
    itemList.push("Staff of conjuration, greater");
    itemList.push("Staff of divination, greater");
    itemList.push("Staff of enchantment, greater");
    itemList.push("Staff of evocation, greater");
    itemList.push("Staff of illusion, greater");
    itemList.push("Staff of necromancy, greater");
    itemList.push("Staff of transmutation, greater");
    itemList.push("Wand of widening 4th");
    itemList.push("Choker of elocution, greater");
    itemList.push("Ring of energy resistance, greater");
    itemList.push(" Ring of wizardry type IIU");
  }

  if (npcClass == "Cleric" || npcClass == "Oracle") {
    itemList.push("Thurible of revelation, moderate");
  }
  if (npcClass == "Druid") {
    itemList.push("Druid’s vestments");
  }
  if (npcClass == "Bard") {
    itemList.push("Maestro’s instrument, moderate");
  }
  if (npcClass == "Monk") {
    itemList.push("+2 Striking handwraps of mighty blows");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetEleventhLevelItem(npcClass) {
  let itemList = ["+2 Resilient armor",
  "Cold iron armor, standard-grade",
  "Silver armor, standard-grade",
  "Bag of holding type III",
  "Skeleton key, greater",
  "+2 armor Potency Rune",
  "Anarchic Rune",
"Axiomatic Rune",
"Holy Rune",
"Unholy Rune",
"Arrow-catching shield",
"Oathbow",
"Alchemist goggles, greater",
"Boots of elvenkind, greater",
"Cassock of devotion",
"Crafter’s eyepiece, greater",
"Doubling rings, greater",
"Goggles of night, greater",
"Gorget of the primal roar",
"Ring of maniacal devices "];
  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("Wand of 5th-level spell");
    itemList.push("Wand of continuation 4th");    
  }
  if (npcClass == "Wizard" || npcClass == "Sorcerer" || npcClass == "Witch") {
    itemList.push("Necklace of fireballs type IV");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetTwelfthLevelItem(npcClass) {
  let itemList = ["Marvelous medicines, standard",
  "Energy-resistant, greater Rune",
  "Fortification Rune",
  "Striking, greater Rune",
"+2 greater Striking weapon"];

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("Broom of flying");
    itemList.push("Animal staff, major	Staff");
    itemList.push("Staff of fire, major	Staff");
    itemList.push("Staff of Healing, major	Staff");
    itemList.push("Wand of widening 5th	Wand");
    itemList.push("Berserker’s cloak");
    itemList.push("Cloak of elvenkind, greater");
    itemList.push("Ring of climbing");
    itemList.push("Ring of swimming");
  }
  if (npcClass == "Druid" || npcClass == "Ranger") {
    itemList.push("Verdant staff, greater	Staff");
  }
  if (npcClass == "Wizard" || npcClass == "Sorcerer" || npcClass == "Witch") {
    itemList.push("Mentalist’s staff, major	Staff");
    itemList.push("Wand of smoldering fireballs 5th	Wand");
  }
  if (npcClass == "Monk") {
    itemList.push("+2 greater Striking handwraps of mighty blows");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetThirteenthLevelItem(npcClass) {
  let itemList = ["Celestial armor",
  "Demon armor",
  "Mail of luck",
  "Bag of holding type IV",
"Wondrous figurine, marble elephant",
"Sturdy shield, greater",
"Dwarven thrower",
"Flame tongue",
"Boots of speed",
"Eye of fortune",
"Ring of the ram, greater"];

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("Wand of 6th-level spell");
    itemList.push("Wand of continuation 5th");
    itemList.push("Wand of manifold missiles 5th");
  }
  if (npcClass == "Wizard" || npcClass == "Sorcerer" || npcClass == "Witch") {
    itemList.push("Necklace of fireballs type V");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetFourteenthLevelItem(npcClass) {
  let itemList = ["+2 greater Resilient armor",
  "Horseshoes of speed, greater",
  "Primeval mistletoe, greater",
  "Rod of negation",
  "Storm flash",
  "Boots of bounding, greater",
"Bracers of armor type II",
"Ring of energy resistance, major "]; 

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("Staff of abjuration, major");
    itemList.push("Staff of conjuration, major");
    itemList.push("Staff of divination, major");
    itemList.push("Staff of enchantment, major");
    itemList.push("Staff of evocation, major");
    itemList.push("Staff of illusion, major");
    itemList.push("Staff of necromancy, major");
    itemList.push("Staff of transmutation, major");
    itemList.push("Wand of widening 6th");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}

function GetFifteenthLevelItem(npcClass) {
  let itemList = ["Corrosive, greater Rune",
  "Flaming, greater Rune",
  "Frost, greater Rune",
  "Shock, greater Rune",
  "Thundering, greater Rune",
  "Cold iron buckler, high-grade",
  "Cold iron shield, high-grade",
"Silver buckler, high-grade",
"Silver shield, high-grade"];  

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("Wand of 7th-level spell");
    itemList.push("Wand of continuation 6th");    
  }
  if (npcClass == "Wizard" || npcClass == "Sorcerer" || npcClass == "Witch") {
    itemList.push("Necklace of fireballs type VI");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}
function GetSixteenthLevelItem(npcClass) {
  let itemList = ["+3 weapon Potency Rune",
  "Slick, major Rune",
  "Floating shield, greater",
  "Sturdy shield, major",
"+3 greater Striking weapon",
"Cold iron weapon, high-grade",
"Frost brand",
"Silver weapon, high-grade"]; 

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("Wand of slaying 7th");
  }
  if (npcClass == "Cleric") {
    itemList.push("Staff of Healing, true");
  }
  if (npcClass == "Monk") {
    itemList.push("+3 greater Striking handwraps of mighty blows");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}
function GetSeventeenthLevelItem(npcClass) {
  let itemList = ["Anklets of alacrity",
  "Belt of giant strength",
  "Belt of regeneration",
  "Circlet of persuasion",
  "Diadem of intellect",
  "Headband of inspired wisdom",
  "Shadow, major Rune",
  "Flame tongue, greater",
  "Alchemist goggles, major",
  "Armbands of athleticism, greater",
  "Cloak of the bat, greater",
  "Daredevil boots, greater",
  "Dread blindfold",
  "Messenger’s ring, greater",
  "Phylactery of faithfulness, greater "];  

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("Wand of 8th-level spell");
    itemList.push("Wand of continuation 7th");
    itemList.push("Wand of manifold missiles 7th");    
  }
  if (npcClass == "Wizard" || npcClass == "Sorcerer" || npcClass == "Witch")  {
    itemList.push("Wand of manifold missiles 7th");
    itemList.push("Necklace of fireballs type VII");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}
function GetEighteenthLevelItem(npcClass) {
  let itemList = ["Bag of holding type I", "Ghost touch rune"];

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("");
  }
  if (npcClass == "Druid" || npcClass == "Ranger") {
    itemList.push("");
  }
  if (npcClass == "Wizard" || npcClass == "Sorcerer" || npcClass == "Witch") {
    itemList.push("");
  }
  if (npcClass == "Monk") {
    itemList.push("");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}
function GetNineteenthLevelItem(npcClass) {
  let itemList = ["+3 greater Resilient armor",
  "Breastplate of command, greater",
  "Cold iron armor, high-grade",
  "Silver armor, high-grade",
  "Maestro’s instrument, greater",
  "Marvelous medicines, greater",
  "+3 armor Potency Rune",
  "Fortification, greater Rune",
  "Storm flash, greater",
  "Goggles of night, major",
  "Inexplicable apparatus",
  "Ring of maniacal devices, greater"];

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("Wand of slaying 8th");
    itemList.push("Wand of widening 8th"); 
    itemList.push("Possibility tome"); 
  }
  if (npcClass == "Cleric") {
    itemList.push("Thurible of revelation, greater");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}
function GetTwentiethLevelItem(npcClass) {
  let itemList = ["+3 major Resilient armor",
  "Resilient, major Rune",
  "Bracers of armor type III"];

  if (
    npcClass == "Wizard" ||
    npcClass == "Sorcerer" ||
    npcClass == "Witch" ||
    npcClass == "Cleric" ||
    npcClass == "Oracle" ||
    npcClass == "Bard" ||
    npcClass == "Druid"
  ) {
    itemList.push("");
  }
  if (npcClass == "Wizard" || npcClass == "Sorcerer" || npcClass == "Witch") {
    itemList.push("Wand of slaying 9th");
    itemList.push("Wand of smoldering fireballs 9th");
    itemList.push("Wand of widening 9th");
  }

  item = itemList[Math.floor(Math.random() * itemList.length + 1)];

  return item;
}
