const QUIZ_LENGTH = 36;

const TRAITS = ["aoe","singleTarget","burst","sustained","tank","healing","utility","control","mobility","defense","support","range"];

const TRAIT_LABELS = {"aoe":"AoE","singleTarget":"Single-Target DPS","burst":"Burst","sustained":"Sustained DPS","tank":"Tanking","healing":"Healing","utility":"Utility","control":"Crowd Control","mobility":"Mobility","defense":"Defense","support":"Party Support","range":"Ranged Combat"};

const QUESTIONS = [
  {category:"AoE",trait:"aoe",text:"Do you want to hit several enemies at once?",answers:[["YES",{"aoe":5,"burst":1}],["NO",{"aoe":-4}]]},
  {category:"AoE",trait:"aoe",text:"Do you want your character to excel against enemy groups?",answers:[["YES",{"aoe":5}],["NO",{"aoe":-3,"singleTarget":2}]]},
  {category:"AoE",trait:"aoe",text:"Do you like abilities that damage a whole area?",answers:[["YES",{"aoe":5}],["NO",{"aoe":-4,"singleTarget":2}]]},
  {category:"AoE",trait:"aoe",text:"Would you choose wide attacks over stronger single-target attacks?",answers:[["YES",{"aoe":5}],["NO",{"aoe":-3,"singleTarget":2}]]},
  {category:"AoE",trait:"aoe",text:"Do you want to clear weaker enemies quickly?",answers:[["YES",{"aoe":4,"burst":2}],["NO",{"aoe":-3}]]},
  {category:"AoE",trait:"aoe",text:"Do you want your damage to stay useful when enemies cluster together?",answers:[["YES",{"aoe":5,"sustained":2}],["NO",{"aoe":-3}]]},
  {category:"AoE",trait:"aoe",text:"Would you enjoy controlling a battlefield full of enemies?",answers:[["YES",{"aoe":4,"control":3}],["NO",{"aoe":-2}]]},
  {category:"AoE",trait:"aoe",text:"Do you want to be the party member who handles enemy waves?",answers:[["YES",{"aoe":5,"sustained":2}],["NO",{"aoe":-4}]]},
  {category:"Single-Target DPS",trait:"singleTarget",text:"Do you prefer focusing one important enemy?",answers:[["YES",{"singleTarget":5}],["NO",{"singleTarget":-4,"aoe":2}]]},
  {category:"Single-Target DPS",trait:"singleTarget",text:"Do you want strong damage against bosses?",answers:[["YES",{"singleTarget":5}],["NO",{"singleTarget":-3}]]},
  {category:"Single-Target DPS",trait:"singleTarget",text:"Would you rather delete one target than spread damage around?",answers:[["YES",{"singleTarget":5,"burst":1}],["NO",{"singleTarget":-4,"aoe":2}]]},
  {category:"Single-Target DPS",trait:"singleTarget",text:"Do you want to specialize in killing priority targets?",answers:[["YES",{"singleTarget":5}],["NO",{"singleTarget":-3,"control":1}]]},
  {category:"Single-Target DPS",trait:"singleTarget",text:"Do you enjoy putting most of your damage into one creature?",answers:[["YES",{"singleTarget":5}],["NO",{"singleTarget":-4}]]},
  {category:"Single-Target DPS",trait:"singleTarget",text:"Do you want your character to be especially dangerous in a duel?",answers:[["YES",{"singleTarget":5,"burst":2}],["NO",{"singleTarget":-3}]]},
  {category:"Single-Target DPS",trait:"singleTarget",text:"Would you enjoy hunting down a single powerful foe?",answers:[["YES",{"singleTarget":4,"utility":2}],["NO",{"singleTarget":-2,"aoe":1}]]},
  {category:"Single-Target DPS",trait:"singleTarget",text:"Do you want your main job to be making one enemy disappear?",answers:[["YES",{"singleTarget":5,"burst":2}],["NO",{"singleTarget":-4}]]},
  {category:"Burst",trait:"burst",text:"Do you want to deal huge damage in short bursts?",answers:[["YES",{"burst":5}],["NO",{"burst":-4,"sustained":2}]]},
  {category:"Burst",trait:"burst",text:"Do you like the idea of saving power for a devastating attack?",answers:[["YES",{"burst":5,"utility":1}],["NO",{"burst":-3}]]},
  {category:"Burst",trait:"burst",text:"Would you rather have explosive damage than steady damage?",answers:[["YES",{"burst":5}],["NO",{"burst":-4,"sustained":3}]]},
  {category:"Burst",trait:"burst",text:"Do you want moments where your character suddenly becomes terrifyingly powerful?",answers:[["YES",{"burst":5}],["NO",{"burst":-4}]]},
  {category:"Burst",trait:"burst",text:"Do you enjoy finishing enemies with a big attack?",answers:[["YES",{"burst":5,"singleTarget":2}],["NO",{"burst":-3}]]},
  {category:"Burst",trait:"burst",text:"Would you sacrifice some consistency for stronger peak damage?",answers:[["YES",{"burst":5}],["NO",{"burst":-4,"sustained":2}]]},
  {category:"Burst",trait:"burst",text:"Do you want your strongest abilities to feel dramatic and decisive?",answers:[["YES",{"burst":4,"singleTarget":2}],["NO",{"burst":-3}]]},
  {category:"Burst",trait:"burst",text:"Do you like setting up one powerful turn?",answers:[["YES",{"burst":5,"utility":1}],["NO",{"burst":-4}]]},
  {category:"Sustained DPS",trait:"sustained",text:"Do you prefer reliable damage over time?",answers:[["YES",{"sustained":5}],["NO",{"sustained":-4,"burst":2}]]},
  {category:"Sustained DPS",trait:"sustained",text:"Do you want to keep attacking effectively for an entire fight?",answers:[["YES",{"sustained":5}],["NO",{"sustained":-3}]]},
  {category:"Sustained DPS",trait:"sustained",text:"Would you rather have steady damage than occasional huge hits?",answers:[["YES",{"sustained":5}],["NO",{"sustained":-4,"burst":3}]]},
  {category:"Sustained DPS",trait:"sustained",text:"Do you want your character to remain dangerous even after big abilities are spent?",answers:[["YES",{"sustained":5}],["NO",{"sustained":-3}]]},
  {category:"Sustained DPS",trait:"sustained",text:"Do you enjoy maintaining pressure on an enemy?",answers:[["YES",{"sustained":5,"singleTarget":2}],["NO",{"sustained":-3}]]},
  {category:"Sustained DPS",trait:"sustained",text:"Would a dependable damage rotation appeal to you?",answers:[["YES",{"sustained":5}],["NO",{"sustained":-3}]]},
  {category:"Sustained DPS",trait:"sustained",text:"Do you want your character to contribute damage every round?",answers:[["YES",{"sustained":5}],["NO",{"sustained":-3}]]},
  {category:"Sustained DPS",trait:"sustained",text:"Do you prefer consistency over gambling everything on one attack?",answers:[["YES",{"sustained":5}],["NO",{"sustained":-4,"burst":2}]]},
  {category:"Tanking",trait:"tank",text:"Do you prefer to be tanky?",answers:[["YES",{"tank":5,"defense":4}],["NO",{"tank":-5,"defense":-2}]]},
  {category:"Tanking",trait:"tank",text:"Do you want to stand between enemies and your allies?",answers:[["YES",{"tank":5,"defense":4}],["NO",{"tank":-4}]]},
  {category:"Tanking",trait:"tank",text:"Would you enjoy being the character enemies have trouble killing?",answers:[["YES",{"tank":5,"defense":5}],["NO",{"tank":-4}]]},
  {category:"Tanking",trait:"tank",text:"Do you want to survive hits that would drop other characters?",answers:[["YES",{"tank":5,"defense":5}],["NO",{"tank":-4}]]},
  {category:"Tanking",trait:"tank",text:"Do you like drawing enemy attention toward yourself?",answers:[["YES",{"tank":5,"support":2}],["NO",{"tank":-4}]]},
  {category:"Tanking",trait:"tank",text:"Would you rather absorb danger than avoid it?",answers:[["YES",{"tank":5,"defense":4}],["NO",{"tank":-4,"mobility":2}]]},
  {category:"Tanking",trait:"tank",text:"Do you want durability to be one of your defining strengths?",answers:[["YES",{"tank":5,"defense":5}],["NO",{"tank":-4}]]},
  {category:"Tanking",trait:"tank",text:"Would being the party's frontline anchor sound fun?",answers:[["YES",{"tank":5,"defense":4}],["NO",{"tank":-4}]]},
  {category:"Healing",trait:"healing",text:"Do you want to heal your allies?",answers:[["YES",{"healing":5,"support":3}],["NO",{"healing":-5}]]},
  {category:"Healing",trait:"healing",text:"Would you enjoy being the party's main source of recovery?",answers:[["YES",{"healing":5,"support":3}],["NO",{"healing":-4}]]},
  {category:"Healing",trait:"healing",text:"Do you want abilities that can bring wounded allies back into the fight?",answers:[["YES",{"healing":5}],["NO",{"healing":-4}]]},
  {category:"Healing",trait:"healing",text:"Would you rather save an ally than deal extra damage?",answers:[["YES",{"healing":5,"support":3}],["NO",{"healing":-4,"burst":1}]]},
  {category:"Healing",trait:"healing",text:"Do you want healing to be a major part of your character?",answers:[["YES",{"healing":5}],["NO",{"healing":-5}]]},
  {category:"Healing",trait:"healing",text:"Would keeping everyone alive feel like a rewarding job?",answers:[["YES",{"healing":5,"support":4}],["NO",{"healing":-4}]]},
  {category:"Healing",trait:"healing",text:"Do you want to have strong emergency healing?",answers:[["YES",{"healing":5,"defense":2}],["NO",{"healing":-4}]]},
  {category:"Healing",trait:"healing",text:"Would you willingly give up damage to become better at healing?",answers:[["YES",{"healing":5,"support":2}],["NO",{"healing":-4,"sustained":1}]]},
  {category:"Utility",trait:"utility",text:"Do you want an answer for unusual problems?",answers:[["YES",{"utility":5}],["NO",{"utility":-4}]]},
  {category:"Utility",trait:"utility",text:"Do you like having many different tools available?",answers:[["YES",{"utility":5}],["NO",{"utility":-4}]]},
  {category:"Utility",trait:"utility",text:"Would you rather be versatile than specialized?",answers:[["YES",{"utility":5}],["NO",{"utility":-4,"singleTarget":1}]]},
  {category:"Utility",trait:"utility",text:"Do you want abilities that are useful outside of dealing damage?",answers:[["YES",{"utility":5,"support":2}],["NO",{"utility":-4}]]},
  {category:"Utility",trait:"utility",text:"Would scouting and information-gathering appeal to you?",answers:[["YES",{"utility":5,"mobility":2,"range":1}],["NO",{"utility":-3}]]},
  {category:"Utility",trait:"utility",text:"Do you want to solve encounters in unexpected ways?",answers:[["YES",{"utility":5,"control":2}],["NO",{"utility":-3}]]},
  {category:"Utility",trait:"utility",text:"Would you enjoy having a toolbox of different solutions?",answers:[["YES",{"utility":5}],["NO",{"utility":-4}]]},
  {category:"Utility",trait:"utility",text:"Do you want your character to remain useful even when damage is not the answer?",answers:[["YES",{"utility":5,"support":2}],["NO",{"utility":-4}]]},
  {category:"Crowd Control",trait:"control",text:"Do you want to stop enemies from acting?",answers:[["YES",{"control":5}],["NO",{"control":-4}]]},
  {category:"Crowd Control",trait:"control",text:"Would you enjoy locking down dangerous enemies?",answers:[["YES",{"control":5,"defense":2}],["NO",{"control":-4}]]},
  {category:"Crowd Control",trait:"control",text:"Do you like spells or abilities that change enemy positioning?",answers:[["YES",{"control":5,"utility":3}],["NO",{"control":-3}]]},
  {category:"Crowd Control",trait:"control",text:"Would disabling an enemy be more satisfying than simply damaging it?",answers:[["YES",{"control":5}],["NO",{"control":-4,"singleTarget":1}]]},
  {category:"Crowd Control",trait:"control",text:"Do you want to weaken enemies so the party can handle them?",answers:[["YES",{"control":5,"support":3}],["NO",{"control":-3}]]},
  {category:"Crowd Control",trait:"control",text:"Would you enjoy deciding where enemies can move?",answers:[["YES",{"control":5,"utility":3}],["NO",{"control":-3,"mobility":1}]]},
  {category:"Crowd Control",trait:"control",text:"Do you want battlefield control to be a major part of your kit?",answers:[["YES",{"control":5}],["NO",{"control":-5}]]},
  {category:"Crowd Control",trait:"control",text:"Would you rather prevent an enemy action than race it in damage?",answers:[["YES",{"control":5,"defense":2}],["NO",{"control":-4,"burst":1}]]},
  {category:"Mobility",trait:"mobility",text:"Do you want to move around the battlefield quickly?",answers:[["YES",{"mobility":5}],["NO",{"mobility":-4,"tank":1}]]},
  {category:"Mobility",trait:"mobility",text:"Would teleporting, dashing, or repositioning appeal to you?",answers:[["YES",{"mobility":5,"utility":2}],["NO",{"mobility":-4}]]},
  {category:"Mobility",trait:"mobility",text:"Do you want to easily reach enemies who are hard to pin down?",answers:[["YES",{"mobility":5,"singleTarget":2}],["NO",{"mobility":-3}]]},
  {category:"Mobility",trait:"mobility",text:"Would you rather avoid danger with movement than absorb it?",answers:[["YES",{"mobility":5,"defense":2}],["NO",{"mobility":-4,"tank":2}]]},
  {category:"Mobility",trait:"mobility",text:"Do you want positioning to be an important part of your character?",answers:[["YES",{"mobility":5,"utility":2}],["NO",{"mobility":-3}]]},
  {category:"Mobility",trait:"mobility",text:"Would you enjoy a highly mobile melee character?",answers:[["YES",{"mobility":5,"singleTarget":2}],["NO",{"mobility":-3}]]},
  {category:"Mobility",trait:"mobility",text:"Do you want to get in and out of dangerous situations easily?",answers:[["YES",{"mobility":5,"defense":2}],["NO",{"mobility":-4}]]},
  {category:"Mobility",trait:"mobility",text:"Would you choose speed and movement over extra durability?",answers:[["YES",{"mobility":5}],["NO",{"mobility":-3,"tank":2}]]},
  {category:"Defense",trait:"defense",text:"Do you want strong personal defenses?",answers:[["YES",{"defense":5}],["NO",{"defense":-4}]]},
  {category:"Defense",trait:"defense",text:"Would you rather prevent damage than heal it afterward?",answers:[["YES",{"defense":5,"tank":3}],["NO",{"defense":-3,"healing":2}]]},
  {category:"Defense",trait:"defense",text:"Do you want abilities that protect you from dangerous effects?",answers:[["YES",{"defense":5,"utility":2}],["NO",{"defense":-4}]]},
  {category:"Defense",trait:"defense",text:"Would high AC or strong defensive abilities be exciting to you?",answers:[["YES",{"defense":5}],["NO",{"defense":-4}]]},
  {category:"Defense",trait:"defense",text:"Do you want to be difficult to disable or remove from a fight?",answers:[["YES",{"defense":5,"control":2}],["NO",{"defense":-3}]]},
  {category:"Defense",trait:"defense",text:"Would you trade some damage for greater survivability?",answers:[["YES",{"defense":5}],["NO",{"defense":-4,"burst":1}]]},
  {category:"Defense",trait:"defense",text:"Do you want your character to have a reliable defensive answer?",answers:[["YES",{"defense":5,"utility":2}],["NO",{"defense":-3}]]},
  {category:"Defense",trait:"defense",text:"Would protecting yourself through magic or abilities appeal to you?",answers:[["YES",{"defense":5,"utility":2}],["NO",{"defense":-4}]]},
  {category:"Party Support",trait:"support",text:"Do you want to make your allies stronger?",answers:[["YES",{"support":5}],["NO",{"support":-4}]]},
  {category:"Party Support",trait:"support",text:"Would you enjoy giving allies bonuses or extra resources?",answers:[["YES",{"support":5,"utility":2}],["NO",{"support":-4}]]},
  {category:"Party Support",trait:"support",text:"Do you want your character to improve what the whole party can do?",answers:[["YES",{"support":5}],["NO",{"support":-4}]]},
  {category:"Party Support",trait:"support",text:"Would you rather enable an ally's big moment than have it yourself?",answers:[["YES",{"support":5,"utility":2}],["NO",{"support":-4,"burst":1}]]},
  {category:"Party Support",trait:"support",text:"Do you like buffs, inspiration, or team-wide benefits?",answers:[["YES",{"support":5}],["NO",{"support":-4}]]},
  {category:"Party Support",trait:"support",text:"Would you enjoy being the character who makes everyone else better?",answers:[["YES",{"support":5}],["NO",{"support":-4}]]},
  {category:"Party Support",trait:"support",text:"Do you want your abilities to reward teamwork?",answers:[["YES",{"support":5,"utility":2}],["NO",{"support":-4}]]},
  {category:"Party Support",trait:"support",text:"Would you trade some personal power for stronger party-wide effects?",answers:[["YES",{"support":5}],["NO",{"support":-4,"singleTarget":1}]]},
  {category:"Ranged Combat",trait:"range",text:"Do you prefer fighting from a distance?",answers:[["YES",{"range":5}],["NO",{"range":-4,"tank":1}]]},
  {category:"Ranged Combat",trait:"range",text:"Would you rather attack from far away than fight in melee?",answers:[["YES",{"range":5}],["NO",{"range":-4,"mobility":1}]]},
  {category:"Ranged Combat",trait:"range",text:"Do you want reliable long-range attacks?",answers:[["YES",{"range":5,"singleTarget":2}],["NO",{"range":-4}]]},
  {category:"Ranged Combat",trait:"range",text:"Would staying safely away from enemies be appealing?",answers:[["YES",{"range":5,"defense":2}],["NO",{"range":-3,"tank":1}]]},
  {category:"Ranged Combat",trait:"range",text:"Do you want distance to be a major advantage of your character?",answers:[["YES",{"range":5}],["NO",{"range":-4}]]},
  {category:"Ranged Combat",trait:"range",text:"Would you enjoy picking enemies off before they reach the party?",answers:[["YES",{"range":5,"burst":2}],["NO",{"range":-3}]]},
  {category:"Ranged Combat",trait:"range",text:"Do you want to contribute damage without standing next to the enemy?",answers:[["YES",{"range":5}],["NO",{"range":-4}]]},
  {category:"Ranged Combat",trait:"range",text:"Would you choose a ranged option even if melee dealt slightly more damage?",answers:[["YES",{"range":5}],["NO",{"range":-3,"singleTarget":1}]]}
];

const CLASS_DATA = {
  Barbarian:["Path of the Totem Warrior","Path of Wild Magic","Path of the Zealot","Path of the Battlerager","Path of the Berserker","Path of the Beast","Path of the Storm Herald","Path of the Ancestral Guardian","Path of Frost","Path of Rejuvenation","Path of Time"],
  Bard:["College of Eloquence","College of Whispers","College of Spirits","College of Lore","College of Valor","College of Swords","College of Creation","College of Glamour","College of Encouragement","College of Leadership"],
  Cleric:["War Domain","Grave Domain","Peace Domain","Tempest Domain","Light Domain","Trickery Domain","Death Domain","Twilight Domain","Arcana Domain","Forge Domain","Knowledge Domain","Entropy Domain","Nature Domain","Life Domain","Order Domain","Pestilence"],
  Druid:["Circle of the Land (Coast)","Circle of Spores","Circle of Stars","Circle of Dreams","Circle of the Land (Forest)","Circle of the Land (Underdark)","Circle of the Land (Grassland)","Circle of the Land (Swamp)","Circle of the Land (Mountain)","Circle of the Land (Desert)","Circle of the Land (Arctic)","Circle of the Land","Circle of the Shepherd","Circle of Wildfire","Circle of the Moon","Circle of Fangs","Circle of Fey","Circle of Drakes"],
  Fighter:["Samurai","Echo Knight","Gunslinger","Eldritch Knight","Arcane Archer","Rune Knight","Psi Warrior","Cavalier","Champion","Purple Dragon Knight","Battle Master","Titan","Soul Cleaver"],
  Monk:["Way of the Drunken Master","Way of the Open Hand","Way of the Long Death","Way of the Ascendant Dragon","Way of Shadow","Way of Mercy","Way of the Four Elements","Way of the Cobalt Soul","Way of the Sun Soul","Way of the Astral Self","Way of the Kensei","Way of Lethality"],
  Paladin:["Oath of Vengeance","Oath of the Ancients","Oath of the Crown","Oath of Redemption","Oath of Glory","Oath of the Open Sea","Oath of the Watchers","Oath of Devotion","Oath of Conquest","Oathbreaker","Oath of Hearth","Oath of Stability"],
  Ranger:["Fey Wanderer","Gloom Stalker","Monster Slayer","Swarmkeeper","Hunter","Beast Master","Drakewarden","Horizon Walker","Shelter Conclave","Royalty Conclave"],
  Rogue:["Thief","Soulknife","Mastermind","Arcane Trickster","Phantom","Inquisitive","Scout","Swashbuckler","Assassin","Medic","Outlaw","Shadow Archer"],
  Sorcerer:["Aberrant Mind","Divine Soul","Clockwork Soul","Storm Sorcery","Draconic Bloodline","Wild Magic","Shadow Magic","Fate","Soul Shield","Soundboost"],
  Warlock:["The Genie","The Hexblade","The Fiend","The Fathomless","The Undying","The Celestial","The Great Old One","The Archfey","The Undead","Arch Devil"],
  Wizard:["School of Illusion","School of Evocation","School of Necromancy","School of Abjuration","School of Conjuration","School of Enchantment","Graviturgy Magic","War Magic","School of Divination","Bladesinging","School of Transmutation","Chronurgy Magic","Order of Scribes","Transmogrification"],
  Artificer:["Armorer","Battle Smith","Alchemist","Artillerist","Researcher"],
  "Death Knight":["Oath of Vengeance","Oath of the Ancients","Oath of the Crown","Oath of Redemption","Oath of Glory","Oath of the Open Sea","Oath of the Watchers","Oath of Devotion","Oath of Conquest","Oathbreaker","Oath of Hearth","Oath of Stability"]
};

const CUSTOM_DESCRIPTIONS = {
  "Barbarian:Path of Frost":"Infused with ice and powered by cold damage.",
  "Barbarian:Path of Rejuvenation":"Uses rage to heal themselves and allies.",
  "Barbarian:Path of Time":"Uses chronomancy to heal allies and support rolls.",
  "Bard:College of Encouragement":"Uses Bardic Inspiration to improve critical-hit chances.",
  "Bard:College of Leadership":"Uses Bardic Inspiration for temporary HP and tanking support.",
  "Cleric:Pestilence":"Uses poisons to deal heavy damage.",
  "Druid:Circle of Fangs":"A Moon Druid variant focused purely on damage.",
  "Druid:Circle of Fey":"A Moon Druid variant combining wild magic with monster wildshapes.",
  "Druid:Circle of Drakes":"Wildshapes into potent dragon forms with a damage and AoE focus.",
  "Fighter:Titan":"A very strong fighter who fights with two heavy weapons.",
  "Fighter:Soul Cleaver":"Uses souls to heal and deal ranged damage.",
  "Monk:Way of Lethality":"Uses daggers, bleeding effects, and lethal close-range techniques.",
  "Paladin:Oath of Hearth":"Uses Lay on Hands for advanced healing.",
  "Paladin:Oath of Stability":"Cannot be banished and can exile foes into sub-planes.",
  "Ranger:Shelter Conclave":"Focuses on tanking and being the apex predator.",
  "Ranger:Royalty Conclave":"Focuses on roleplay and complex magic used on people rather than beasts.",
  "Rogue:Medic":"A Rogue focused on healing while incorporating Sneak Attack.",
  "Rogue:Outlaw":"Uses RNG rolls to gain different buffs.",
  "Rogue:Shadow Archer":"Uses advanced ranged techniques with Sneak Attack.",
  "Sorcerer:Fate":"Manipulates dice rolls and probability.",
  "Sorcerer:Soul Shield":"A tanky Sorcerer with increased AC and temporary HP.",
  "Sorcerer:Soundboost":"Uses thunder and sound-based damage.",
  "Wizard:Transmogrification":"Uses polymorphs to become powerful, tanky beasts.",
  "Artificer:Researcher":"Becomes a fullcaster focused on damaging magic with some support."
};

const CLASS_PROFILES = {
  Barbarian:{tank:5,defense:4,sustained:4,burst:3,mobility:2,aoe:2,singleTarget:3,healing:1,utility:1,control:1,support:2,range:0},
  Bard:{support:5,utility:5,control:3,healing:3,mobility:2,range:2,burst:2,defense:2,aoe:2,sustained:2,singleTarget:1,tank:1},
  Cleric:{healing:5,support:4,defense:4,utility:3,aoe:3,control:2,sustained:2,burst:2,tank:2,singleTarget:2,mobility:1,range:2},
  Druid:{aoe:4,control:4,utility:4,healing:4,support:3,sustained:3,mobility:2,defense:2,range:2,burst:2,singleTarget:2,tank:2},
  Fighter:{singleTarget:4,sustained:5,burst:4,tank:4,defense:3,range:2,aoe:2,mobility:2,utility:2,control:1,support:1,healing:0},
  Monk:{mobility:5,sustained:4,singleTarget:4,control:3,defense:3,burst:3,aoe:2,utility:2,tank:2,range:1,support:1,healing:1},
  Paladin:{tank:5,defense:5,support:4,burst:4,healing:3,singleTarget:3,sustained:2,control:2,utility:2,aoe:2,mobility:1,range:1},
  Ranger:{range:5,singleTarget:4,sustained:4,mobility:4,utility:3,burst:3,control:2,aoe:2,defense:2,support:2,healing:1,tank:1},
  Rogue:{singleTarget:5,burst:5,mobility:4,utility:4,sustained:3,range:3,control:2,aoe:1,defense:2,support:1,healing:1,tank:1},
  Sorcerer:{burst:5,aoe:4,range:4,sustained:3,control:3,singleTarget:3,utility:3,mobility:2,defense:1,support:2,healing:1,tank:0},
  Warlock:{sustained:4,singleTarget:4,burst:4,range:4,control:4,utility:3,aoe:3,defense:2,support:2,mobility:2,healing:1,tank:1},
  Wizard:{utility:5,control:5,aoe:5,burst:4,range:4,singleTarget:3,sustained:3,defense:2,mobility:2,support:2,healing:1,tank:0},
  Artificer:{utility:5,support:4,defense:4,range:3,sustained:3,control:3,aoe:2,singleTarget:2,burst:2,mobility:2,healing:3,tank:3},
  "Death Knight":{tank:5,defense:5,singleTarget:4,burst:4,sustained:3,control:3,healing:2,support:2,aoe:2,mobility:1,utility:2,range:1}
};

const ARCHETYPE_RULES = [
  ["tank",["Cavalier","Crown","Redemption","Conquest","Hearth","Stability","Armorer","Shelter","Soul Shield","Ancestral Guardian","Totem Warrior","Rune Knight","Long Death","Open Hand","Devotion","Forge","Twilight","Abjuration"]],
  ["healing",["Life","Dreams","Mercy","Divine Soul","Celestial","Hearth","Rejuvenation","Medic","Shepherd","Peace","Soul Cleaver"]],
  ["aoe",["Evocation","Wildfire","Drakes","Fangs","Storm","Soundboost","Four Elements","Light","Tempest","Artillerist","Fiend","Undead","Sun Soul","Draconic"]],
  ["control",["Enchantment","Illusion","Graviturgy","Chronurgy","Fathomless","Great Old One","Archfey","Aberrant Mind","Open Hand","Ascendant Dragon","Four Elements","Shadow","Trickery","Entropy","Cobalt Soul","Conjuration","Fey"]],
  ["burst",["Assassin","Vengeance","Champion","Samurai","Gloom Stalker","Arcane Archer","Evocation","Draconic","Wild Magic","Storm Sorcery","Fiend","Hexblade","Bladesinging","Titan","Lethality","Fangs","Death"]],
  ["sustained",["Champion","Hunter","Battle Master","Battlerager","Berserker","Beast","Spores","Land","Bladesinging","Swords","Valor","Thief","Swarmkeeper","Kensei","War Magic","Artillerist"]],
  ["utility",["Lore","Mastermind","Inquisitive","Arcane Trickster","Divination","Scribes","Conjuration","Transmutation","Researcher","Alchemist","Knowledge","Order","Cobalt Soul","Creation","Echo Knight","Clockwork","Fey Wanderer","Horizon Walker","Genie"]],
  ["mobility",["Swashbuckler","Scout","Shadow","Echo Knight","Horizon Walker","Fey Wanderer","Drunken Master","Open Sea","Gloom Stalker","Astral Self","Ascendant Dragon","Thief","Monk","Ranger"]],
  ["defense",["Abjuration","Armorer","Rune Knight","Psi Warrior","Redemption","Devotion","Crown","Stability","Twilight","Forge","Soul Shield","Clockwork","Ancestral Guardian","Totem Warrior","Kensei"]],
  ["support",["Leadership","Encouragement","Peace","Order","Glamour","Creation","Lore","Valor","Spirits","Shepherd","Celestial","Divine Soul","Researcher","Royalty","Time","Rejuvenation","Battle Smith"]],
  ["range",["Arcane Archer","Gunslinger","Shadow Archer","Gloom Stalker","Hunter","Beast Master","Swarmkeeper","Horizon Walker","Stars","Coast","Artillerist","Eldritch Knight","War Magic","Genie","Great Old One"]],
  ["singleTarget",["Assassin","Vengeance","Monster Slayer","Hunter","Champion","Samurai","Soulknife","Hexblade","Death","Whispers","Bladesinging","Kensei","Lethality","Titan","Draconic","Pestilence"]]
];


// Build a gameplay profile for each subclass before the scoring cache is created.
// Every subclass inherits its class identity, then gets extra emphasis for the
// playstyle categories associated with it. This keeps class choice primary while
// still making the subclass result meaningfully different.
function subclassProfile(cls, sub){
  const base = CLASS_PROFILES[cls] || {};
  const profile = {};
  for(const trait of TRAITS){
    profile[trait] = (base[trait] || 0) * 0.65;
  }

  const lower = sub.toLowerCase();
  for(const [trait, names] of ARCHETYPE_RULES){
    const matched = names.some(name => lower.includes(name.toLowerCase()));
    if(matched) profile[trait] = (profile[trait] || 0) + 3.5;
  }

  // Specific subclass signals where the name alone is not enough.
  const signals = {
    "College of Eloquence": {utility:1.5, support:2, control:1.5},
    "College of Whispers": {singleTarget:2, burst:1.5, utility:1},
    "College of Spirits": {utility:1.5, support:1.5, control:1},
    "College of Glamour": {support:2, control:1.5, utility:1},
    "War Domain": {singleTarget:2, burst:1.5, defense:1},
    "Grave Domain": {healing:1.5, singleTarget:1.5, support:1},
    "Trickery Domain": {utility:2, mobility:1.5, control:1.5},
    "Death Domain": {singleTarget:2, burst:1.5, aoe:1},
    "Circle of Spores": {sustained:2, defense:1.5, singleTarget:1},
    "Circle of Stars": {range:2, utility:1.5, support:1},
    "Circle of Dreams": {healing:2, support:1.5, utility:1},
    "Circle of the Moon": {tank:2, defense:2, sustained:1.5},
    "Echo Knight": {mobility:2, utility:2, burst:1.5},
    "Psi Warrior": {defense:2, control:1.5, utility:1},
    "Battle Master": {utility:2, control:1.5, sustained:1.5},
    "Way of Mercy": {healing:2, support:1.5, mobility:1},
    "Way of Shadow": {mobility:2, utility:1.5, burst:1},
    "Way of the Astral Self": {range:1.5, control:1, utility:1},
    "Oath of Ancients": {defense:2, support:1.5, control:1},
    "Oathbreaker": {burst:2, control:1.5, singleTarget:1},
    "Fey Wanderer": {utility:2, control:1.5, support:1},
    "Beast Master": {sustained:2, utility:1.5, support:1},
    "Soulknife": {utility:2, mobility:1.5, range:1},
    "Arcane Trickster": {utility:2, control:2, range:1},
    "Phantom": {singleTarget:1.5, sustained:1.5, utility:1},
    "Divine Soul": {healing:2, support:1.5, utility:1},
    "Clockwork Soul": {defense:2, control:1.5, utility:1.5},
    "Shadow Magic": {control:2, defense:1.5, mobility:1},
    "The Fathomless": {control:2, aoe:1.5, range:1},
    "The Celestial": {healing:2, support:2, range:1},
    "The Great Old One": {control:2, utility:1.5, range:1},
    "The Archfey": {control:2, utility:1.5, mobility:1},
    "The Undead": {burst:1.5, control:1.5, defense:1},
    "School of Illusion": {control:2.5, utility:2},
    "School of Evocation": {aoe:2.5, burst:1.5, range:1},
    "School of Necromancy": {sustained:2, singleTarget:1.5, utility:1},
    "School of Abjuration": {defense:2.5, utility:2},
    "School of Conjuration": {utility:2, control:1.5, range:1},
    "School of Enchantment": {control:2.5, utility:1.5},
    "School of Divination": {utility:2.5, support:1.5, control:1},
    "War Magic": {defense:2, burst:1.5, utility:1},
    "Bladesinging": {mobility:2, defense:1.5, singleTarget:1.5, sustained:1},
    "Chronurgy Magic": {utility:2.5, control:2},
    "Order of Scribes": {utility:2, range:1.5, aoe:1},
    "Armorer": {tank:2.5, defense:2, utility:1},
    "Battle Smith": {defense:1.5, support:1.5, sustained:1.5},
    "Artillerist": {aoe:2, range:2, burst:1},
    "Alchemist": {healing:2, utility:2, support:1.5},
    "Researcher": {range:1.5, utility:2, support:1},
    "Path of the Ancestral Guardian": {tank:2.5, support:2, defense:2},
    "Path of the Totem Warrior": {tank:2, defense:2, support:1},
    "Path of the Beast": {sustained:2, mobility:1.5, defense:1},
    "Path of Wild Magic": {aoe:1.5, utility:2, burst:1.5},
    "Path of the Zealot": {burst:2, sustained:1.5, defense:1},
    "Path of the Storm Herald": {aoe:2, sustained:1.5, defense:1},
    "Path of the Battlerager": {tank:2, sustained:2, defense:1},
    "Path of the Berserker": {burst:2, sustained:2},
    "Path of Frost": {aoe:1.5, sustained:2, control:1},
    "Path of Rejuvenation": {healing:2.5, support:2, defense:1},
    "Path of Time": {healing:2, support:2, utility:2},
    "College of Encouragement": {support:2.5, burst:1.5},
    "College of Leadership": {support:2.5, tank:1.5, defense:1.5},
    "Circle of Fangs": {singleTarget:2, burst:2, sustained:1.5},
    "Circle of Fey": {control:2, utility:1.5, burst:1},
    "Circle of Drakes": {aoe:2.5, burst:1.5, range:1},
    "Oath of Hearth": {healing:2.5, support:2, defense:1},
    "Oath of Stability": {defense:2.5, control:2, tank:1.5},
    "Shelter Conclave": {tank:2.5, defense:2, singleTarget:1},
    "Royalty Conclave": {utility:2.5, control:1.5, support:1.5},
    "Medic": {healing:2.5, utility:1.5, singleTarget:1},
    "Outlaw": {burst:2, utility:1.5, mobility:1},
    "Shadow Archer": {range:2.5, singleTarget:2, burst:1},
    "Fate": {utility:2.5, support:2, control:1},
    "Soul Shield": {tank:2, defense:2.5, support:1},
    "Soundboost": {aoe:2, burst:1.5, range:1.5},
    "Titan": {tank:2, singleTarget:2.5, sustained:1.5},
    "Soul Cleaver": {healing:2, range:2, singleTarget:1.5},
    "Way of Lethality": {singleTarget:2.5, burst:2, mobility:1},
    "Death Knight": {tank:2, burst:1.5, singleTarget:1.5}
  };

  if(signals[sub]) addVector(profile, signals[sub], 1);
  return profile;
}


const PROFILE_CACHE = {};
for(const cls of Object.keys(CLASS_DATA)){
  PROFILE_CACHE[cls] = {};
  for(const sub of CLASS_DATA[cls]) PROFILE_CACHE[cls][sub] = subclassProfile(cls,sub);
}

function shuffled(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function makeQuizSet(){
  // Pick exactly three random questions from each role category, then shuffle.
  // This gives the large bank real variety without allowing one topic to dominate.
  const buckets={};
  QUESTIONS.forEach(q=>{
    if(!buckets[q.category]) buckets[q.category]=[];
    buckets[q.category].push(q);
  });
  const selected=[];
  for(const bucket of Object.values(buckets)) selected.push(...shuffled(bucket).slice(0,3));
  return shuffled(selected);
}

let quizQuestions=[];
let current=0;
let answers=[];

function addVector(target,source,multiplier=1){
  if(!source)return;
  for(const [k,v] of Object.entries(source)) target[k]=(target[k]||0)+v*multiplier;
}

function scoreAgainstProfile(player,profile){
  let score=0;
  for(const t of TRAITS) score+=(player[t]||0)*(profile[t]||0);
  return score;
}

function buildPlayerProfile(){
  const p={};
  for(const t of TRAITS)p[t]=0;
  answers.forEach((choice,qi)=>{
    if(choice===null)return;
    addVector(p,quizQuestions[qi].answers[choice][1]);
  });
  return p;
}

function classRanking(player){
  return Object.keys(CLASS_DATA).map(cls=>({
    name:cls,
    score:scoreAgainstProfile(player,CLASS_PROFILES[cls])
  })).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));
}

function subclassRanking(cls,player){
  return CLASS_DATA[cls].map(sub=>({
    name:sub,
    score:scoreAgainstProfile(player,PROFILE_CACHE[cls][sub]),
    custom:!!CUSTOM_DESCRIPTIONS[`${cls}:${sub}`],
    description:CUSTOM_DESCRIPTIONS[`${cls}:${sub}`]||""
  })).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));
}

function showScreen(id){
  document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}

function renderQuestion(){
  const q=quizQuestions[current];
  document.getElementById("question-category").textContent=q.category;
  document.getElementById("question-text").textContent=q.text;
  document.getElementById("progress-label").textContent=`${current+1} / ${quizQuestions.length}`;
  document.getElementById("progress-bar").style.width=`${((current+1)/quizQuestions.length)*100}%`;
  const wrap=document.getElementById("answers");
  wrap.innerHTML="";
  q.answers.forEach((a,i)=>{
    const b=document.createElement("button");
    b.className=`answer answer-${i}`+(answers[current]===i?" selected":"");
    b.innerHTML=`<span class="answer-key">${a[0]}</span>`;
    b.onclick=()=>{answers[current]=i;renderQuestion();};
    wrap.appendChild(b);
  });
  document.getElementById("back-btn").disabled=current===0;
  document.getElementById("next-btn").disabled=answers[current]===null;
  document.getElementById("next-btn").textContent=current===quizQuestions.length-1?"SEE RESULT":"NEXT";
}

function renderResults(){
  const player=buildPlayerProfile();
  const classes=classRanking(player);
  const winner=classes[0].name;
  const subs=subclassRanking(winner,player);
  const best=subs[0];

  document.getElementById("result-class").textContent=winner;
  document.getElementById("result-subclass").textContent=best.name;
  document.getElementById("custom-badge").classList.toggle("hidden",!best.custom);
  document.getElementById("result-description").textContent=best.description||`Your answers most closely match the ${winner} — ${best.name} playstyle.`;

  const traitScores=TRAITS.map(t=>[t,player[t]]).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const maxAbs=Math.max(...TRAITS.map(t=>Math.abs(player[t]||0)),1);
  document.getElementById("trait-breakdown").innerHTML=`<div class="trait-grid">${traitScores.map(([t,v])=>{
    const width=Math.max(4,Math.min(100,(Math.abs(v)/maxAbs)*100));
    return `<div class="trait"><div class="trait-head"><span>${TRAIT_LABELS[t]}</span><b>${v>0?"+":""}${v}</b></div><div class="trait-track"><div class="trait-fill" style="width:${width}%"></div></div></div>`;
  }).join("")}</div>`;

  const reasons=document.getElementById("result-reasons");
  reasons.innerHTML="";
  traitScores.slice(0,4).forEach(([t])=>{
    const li=document.createElement("li");
    li.textContent=`You answered YES to several questions favoring ${TRAIT_LABELS[t]}.`;
    reasons.appendChild(li);
  });

  const classWrap=document.getElementById("class-breakdown");
  const maxClass=Math.max(...classes.map(x=>x.score),1);
  classWrap.innerHTML=classes.map(x=>`<div class="bar-row"><div class="bar-label"><span>${x.name}</span><span>${Math.round(x.score)}</span></div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(2,(x.score/maxClass)*100)}%"></div></div></div>`).join("");

  document.getElementById("subclass-matches").innerHTML=subs.slice(0,6).map((x,i)=>`<div class="match"><b>${i+1}. ${x.name}</b>${x.custom?" <span class='mini-custom'>CUSTOM</span>":""}</div>`).join("");
  showScreen("results-screen");
}

document.getElementById("start-btn").addEventListener("click",()=>{
  quizQuestions=makeQuizSet();
  current=0;
  answers=Array(quizQuestions.length).fill(null);
  showScreen("quiz-screen");
  renderQuestion();
});

document.getElementById("back-btn").addEventListener("click",()=>{
  if(current>0){current--;renderQuestion();}
});

document.getElementById("next-btn").addEventListener("click",()=>{
  if(answers[current]===null)return;
  if(current<quizQuestions.length-1){current++;renderQuestion();}
  else renderResults();
});

document.getElementById("restart-btn").addEventListener("click",()=>{
  current=0;
  quizQuestions=[];
  answers=[];
  showScreen("start-screen");
});

(function startupCheck(){
  const ids=["start-btn","quiz-screen","question-category","question-text","answers","next-btn","back-btn","results-screen"];
  ids.forEach(id=>{if(!document.getElementById(id))console.error("Missing quiz element:",id);});
  if(QUESTIONS.length<QUIZ_LENGTH)console.error("Question pool is smaller than QUIZ_LENGTH.");
  const categories={};
  QUESTIONS.forEach(q=>categories[q.category]=(categories[q.category]||0)+1);
  Object.entries(categories).forEach(([name,count])=>{if(count<3)console.error(`Category ${name} has fewer than 3 questions.`);});
})();
