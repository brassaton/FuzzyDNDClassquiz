/*
  D&D MMO-STYLE CLASS + SUBCLASS QUIZ
  -----------------------------------
  IMPORTANT: this version does NOT hard-code a tiny set of subclass answers.

  The question bank measures 12 gameplay axes:
    aoe, singleTarget, burst, sustained, tank, healing,
    utility, control, mobility, defense, support, range

  Answers give positive/negative weights on those axes.
  Every class and subclass has a gameplay profile. The engine compares the
  player's accumulated profile against every class, then every subclass inside
  the winning class.

  A large question pool is maintained, but only 24 questions are used per run.
  The selection is randomized while guaranteeing 2 questions from each axis
  category, so randomization does not accidentally remove an important role.

  You can add more questions without touching the scoring engine.
*/

const QUIZ_LENGTH = 24;

const TRAITS = [
  "aoe","singleTarget","burst","sustained","tank","healing",
  "utility","control","mobility","defense","support","range"
];

const TRAIT_LABELS = {
  aoe:"AoE", singleTarget:"Single-Target DPS", burst:"Burst",
  sustained:"Sustained DPS", tank:"Tanking", healing:"Healing",
  utility:"Utility", control:"Crowd Control", mobility:"Mobility",
  defense:"Defense", support:"Party Support", range:"Ranged Combat"
};

const QUESTIONS = [
  // AOE
  {category:"AoE", trait:"aoe", text:"A pack of 8 enemies spawns. Which outcome do you want most?", answers:[
    ["I want to erase the pack with one or two large AoE rotations.",{aoe:5,burst:2}],
    ["I want to group, trap, or disable the pack so it cannot act effectively.",{aoe:2,control:5}],
    ["I want to dive into the pack and deal sustained cleave while surviving.",{aoe:3,tank:3,sustained:3}],
    ["I want to keep the pack manageable while improving the party's overall output.",{aoe:1,support:4,utility:3}]
  ]},
  {category:"AoE",trait:"aoe",text:"When choosing between two otherwise similar attacks, what makes the AoE version worth taking?",answers:[
    ["It hits the most targets and has the highest damage ceiling.",{aoe:5,burst:2}],
    ["It applies useful conditions to several enemies.",{aoe:3,control:4}],
    ["It lets me keep dealing damage while fighting in melee.",{aoe:3,sustained:3,tank:1}],
    ["It creates space or makes the encounter safer for everyone.",{aoe:2,defense:3,support:3}]
  ]},
  {category:"AoE",trait:"aoe",text:"Your party is fighting waves of minions. What sounds like the most fun rotation?",answers:[
    ["Save resources, then unleash a huge AoE burst when the wave arrives.",{aoe:5,burst:4}],
    ["Continuously apply zones, hazards, or effects that punish the wave.",{aoe:4,sustained:3,control:2}],
    ["Stand in the middle and cleave while enemies focus me.",{aoe:3,tank:5,sustained:2}],
    ["Use AoE to set up the rest of the party rather than chase damage.",{aoe:2,support:5,utility:2}]
  ]},
  {category:"AoE",trait:"aoe",text:"If your character had an AoE cooldown, when would you prefer to use it?",answers:[
    ["On cooldown whenever there are multiple valid targets.",{aoe:4,sustained:3}],
    ["Only when I can hit a very large group for maximum value.",{aoe:5,burst:3}],
    ["When the group needs to be controlled or repositioned.",{aoe:3,control:5}],
    ["When it prevents the party from being overwhelmed.",{aoe:3,defense:4,support:2}]
  ]},

  // SINGLE TARGET
  {category:"Single Target",trait:"singleTarget",text:"A boss is at 100% HP and will live for several minutes. Which damage pattern appeals most?",answers:[
    ["Consistent single-target damage with little downtime.",{singleTarget:5,sustained:5}],
    ["A carefully timed burst window that chunks the boss.",{singleTarget:5,burst:5}],
    ["Repeated attacks that exploit a boss weakness or marked target.",{singleTarget:5,utility:2,control:2}],
    ["Damage that also keeps the party safer or stronger.",{singleTarget:3,sustained:2,support:4}]
  ]},
  {category:"Single Target",trait:"singleTarget",text:"A dangerous elite enemy is isolated from the rest of the encounter. What do you prioritize?",answers:[
    ["Maximum personal DPR into that one target.",{singleTarget:5}],
    ["A short setup followed by a devastating execute/burst.",{singleTarget:4,burst:5}],
    ["Locking down its actions so it cannot threaten us.",{singleTarget:2,control:5,defense:2}],
    ["Keeping the target occupied while I protect or enable allies.",{singleTarget:2,tank:4,support:4}]
  ]},
  {category:"Single Target",trait:"singleTarget",text:"Which boss mechanic sounds most satisfying to solve?",answers:[
    ["Finding the exact moment to dump all my damage resources.",{singleTarget:4,burst:5}],
    ["Maintaining a strong rotation for the entire encounter.",{singleTarget:5,sustained:5}],
    ["Identifying the boss's weakness and exploiting it.",{singleTarget:5,utility:3}],
    ["Turning a dangerous target into a non-issue through control or defense.",{singleTarget:2,control:4,defense:4}]
  ]},
  {category:"Single Target",trait:"singleTarget",text:"If your party calls out 'priority target,' what do you want your job to be?",answers:[
    ["Delete it before it can become a problem.",{singleTarget:5,burst:4}],
    ["Stay on it continuously while everyone else handles the field.",{singleTarget:5,sustained:4}],
    ["Harass it from range and exploit openings.",{singleTarget:5,range:4,mobility:2}],
    ["Debuff or disrupt it so the whole party can handle it.",{singleTarget:2,control:5,utility:4}]
  ]},

  // BURST
  {category:"Burst",trait:"burst",text:"Your biggest damage cooldown just became available. What do you want the encounter to reward?",answers:[
    ["Planning the exact moment for an enormous spike.",{burst:5,utility:2}],
    ["Pressing it whenever it is available for frequent spikes.",{burst:4,sustained:3}],
    ["Combining it with movement or positioning for a kill.",{burst:4,mobility:4}],
    ["Using it as part of a coordinated party damage window.",{burst:4,support:4}]
  ]},
  {category:"Burst",trait:"burst",text:"Which tradeoff would you willingly accept for higher burst?",answers:[
    ["Lower sustained damage between cooldowns.",{burst:5,sustained:-2}],
    ["More complicated setup before I attack.",{burst:4,utility:4}],
    ["Being fragile while my burst is available.",{burst:4,defense:-2}],
    ["Giving up some personal burst to create a party-wide burst window.",{burst:3,support:5}]
  ]},
  {category:"Burst",trait:"burst",text:"An enemy will be vulnerable for exactly one round. What sounds best?",answers:[
    ["I have saved everything and can unload immediately.",{burst:5,singleTarget:4}],
    ["I can move into position and capitalize on it.",{burst:4,mobility:4}],
    ["I can make the vulnerability last longer or become more useful.",{burst:3,control:4,utility:3}],
    ["I can amplify everyone else's damage during the window.",{burst:3,support:5}]
  ]},
  {category:"Burst",trait:"burst",text:"How do you feel about damage that is amazing only when several conditions line up?",answers:[
    ["That's exactly what I want.",{burst:5,utility:3}],
    ["I like some setup, but I need reliable damage too.",{burst:3,sustained:4}],
    ["I'd rather have consistent output.",{burst:1,sustained:5}],
    ["I'd rather make the conditions easier for my teammates to exploit.",{burst:2,support:5,utility:3}]
  ]},

  // SUSTAINED
  {category:"Sustained DPS",trait:"sustained",text:"Which DPS profile sounds best over a 10-minute dungeon?",answers:[
    ["Reliable output with very little downtime.",{sustained:5}],
    ["A rotation with several damage-over-time effects to maintain.",{sustained:5,utility:2,control:2}],
    ["Melee pressure that stays high while I remain on the target.",{sustained:5,mobility:3,singleTarget:3}],
    ["Steady damage that also provides healing or support.",{sustained:3,support:5,healing:3}]
  ]},
  {category:"Sustained DPS",trait:"sustained",text:"What kind of damage meter result would make you happiest?",answers:[
    ["A consistently high number from start to finish.",{sustained:5}],
    ["A high number built around repeated short burst cycles.",{sustained:4,burst:4}],
    ["A high number while also handling mechanics and utility.",{sustained:3,utility:5}],
    ["A respectable number while dramatically increasing party performance.",{sustained:2,support:5}]
  ]},
  {category:"Sustained DPS",trait:"sustained",text:"If your main attack gets interrupted, what sounds least annoying?",answers:[
    ["I have a rotation that quickly gets back to full output.",{sustained:5}],
    ["I can switch to another damage pattern without losing much value.",{sustained:3,utility:4}],
    ["I can reposition and immediately continue attacking.",{sustained:4,mobility:5}],
    ["The interruption gives me time to heal or protect someone.",{sustained:2,healing:4,defense:4}]
  ]},
  {category:"Sustained DPS",trait:"sustained",text:"Which resource model sounds most appealing?",answers:[
    ["A predictable resource I can manage for steady DPS.",{sustained:5,utility:2}],
    ["Several resources that cycle into one another.",{sustained:4,utility:4}],
    ["A simple resource that lets me stay aggressive.",{sustained:4,tank:2,mobility:2}],
    ["Resources I spend to maintain buffs and help the party.",{sustained:3,support:5}]
  ]},

  // TANK
  {category:"Tanking",trait:"tank",text:"An enemy boss is about to use a huge attack. What do you most want to do?",answers:[
    ["Stand in front and absorb it.",{tank:5,defense:5}],
    ["Redirect, reduce, or otherwise protect allies from it.",{tank:4,defense:5,support:4}],
    ["Avoid it through mobility while keeping the boss occupied.",{tank:4,mobility:5}],
    ["Disable or reposition the boss so the attack never happens.",{tank:3,control:5,utility:3}]
  ]},
  {category:"Tanking",trait:"tank",text:"What makes a tank feel satisfying to play?",answers:[
    ["Enemies are focused on me while my defenses stay high.",{tank:5,defense:5}],
    ["I actively intercept damage meant for teammates.",{tank:5,support:5}],
    ["I control enemy positioning and dictate the battlefield.",{tank:4,control:5}],
    ["I am difficult to kill because I can recover my own HP.",{tank:5,healing:4}]
  ]},
  {category:"Tanking",trait:"tank",text:"Your healer is overwhelmed. What do you do?",answers:[
    ["Use my defensive cooldowns and keep taking the hits.",{tank:5,defense:5}],
    ["Use self-healing so the healer can focus elsewhere.",{tank:4,healing:5}],
    ["Temporarily protect the healer or redirect attacks.",{tank:4,support:5,defense:4}],
    ["Control the enemies so less damage needs to be healed.",{tank:3,control:5,utility:3}]
  ]},
  {category:"Tanking",trait:"tank",text:"Which tanking philosophy sounds best?",answers:[
    ["High AC/resistance and reliable mitigation.",{tank:5,defense:5}],
    ["Huge HP and healing through incoming damage.",{tank:5,healing:4}],
    ["Aggressive tanking where offense is part of my defense.",{tank:4,sustained:4,burst:3}],
    ["Tanking by manipulating enemies and their positioning.",{tank:4,control:5,utility:4}]
  ]},

  // HEALING
  {category:"Healing",trait:"healing",text:"A teammate is at 15% HP. Which reaction sounds most satisfying?",answers:[
    ["Instantly restore a huge chunk of HP.",{healing:5}],
    ["Prevent the next hit from killing them.",{healing:4,defense:5}],
    ["Keep them alive through a stream of smaller heals.",{healing:5,sustained:3}],
    ["Heal them while also improving their damage or other stats.",{healing:4,support:5}]
  ]},
  {category:"Healing",trait:"healing",text:"Which healer playstyle sounds most fun?",answers:[
    ["Reactive healing: watch HP bars and save people at the right moment.",{healing:5,utility:2}],
    ["Proactive healing: prepare protection before damage lands.",{healing:4,defense:5}],
    ["Efficient sustained healing while still attacking.",{healing:4,sustained:4}],
    ["Healing plus buffs that make the entire party stronger.",{healing:4,support:5}]
  ]},
  {category:"Healing",trait:"healing",text:"You have one emergency heal available. When should it matter most?",answers:[
    ["When someone is about to die.",{healing:5,burst:3}],
    ["When a predictable massive attack is incoming.",{healing:4,defense:5}],
    ["When the whole party has taken gradual damage.",{healing:5,aoe:3}],
    ["When using it also creates another advantage for the party.",{healing:4,support:5,utility:3}]
  ]},
  {category:"Healing",trait:"healing",text:"What would you rather sacrifice for stronger healing?",answers:[
    ["Some personal damage.",{healing:5,support:3}],
    ["Some defensive power for allies because I can heal through it.",{healing:5,defense:-1}],
    ["Some burst in exchange for reliable recovery.",{healing:4,sustained:3}],
    ["Nothing; I want healing integrated into an otherwise aggressive kit.",{healing:3,sustained:4,burst:3}]
  ]},

  // UTILITY
  {category:"Utility",trait:"utility",text:"The dungeon throws a problem at the party that nobody expected. What sounds best?",answers:[
    ["I have a tool or spell that specifically solves it.",{utility:5}],
    ["I can improvise a solution using many flexible options.",{utility:5,control:2}],
    ["I can scout, investigate, and find the problem before it happens.",{utility:5,mobility:3,range:2}],
    ["I can make the rest of the party better equipped to solve it.",{utility:4,support:5}]
  ]},
  {category:"Utility",trait:"utility",text:"Which kind of utility do you value most?",answers:[
    ["Information, scouting, and skill coverage.",{utility:5,range:2,mobility:3}],
    ["Teleportation, movement, positioning, or traversal.",{utility:5,mobility:5}],
    ["Flexible magic that can answer many different encounter types.",{utility:5,control:3}],
    ["Buffs, debuffs, and effects that change what allies can accomplish.",{utility:4,support:5,control:3}]
  ]},
  {category:"Utility",trait:"utility",text:"Your party needs a plan B. Which character do you want to be?",answers:[
    ["The toolbox character with an answer for unusual situations.",{utility:5}],
    ["The character who can change their approach between encounters.",{utility:4,aoe:2,range:2}],
    ["The character who can manipulate enemies to make the plan work.",{utility:4,control:5}],
    ["The character who makes everyone else's plan more reliable.",{utility:4,support:5}]
  ]},
  {category:"Utility",trait:"utility",text:"How much complexity are you willing to manage for more options?",answers:[
    ["A lot. Give me the biggest toolbox possible.",{utility:5,control:2}],
    ["Moderate complexity; I want flexibility without constant bookkeeping.",{utility:4,sustained:2}],
    ["I prefer simple combat but strong non-combat tools.",{utility:4,mobility:2}],
    ["I want complexity mainly in how I support other players.",{utility:4,support:5}]
  ]},

  // CONTROL
  {category:"Crowd Control",trait:"control",text:"Which crowd-control result is most satisfying?",answers:[
    ["A large group is unable to act.",{control:5,aoe:4}],
    ["A dangerous enemy is forced into a bad position.",{control:5,utility:4}],
    ["Enemies are weakened so their attacks matter less.",{control:4,defense:4}],
    ["Enemies are controlled while the party gets stronger.",{control:4,support:5}]
  ]},
  {category:"Crowd Control",trait:"control",text:"Which status effect sounds most useful?",answers:[
    ["A hard disable that removes an enemy from the fight.",{control:5}],
    ["A movement effect that lets us manipulate positioning.",{control:5,mobility:3,utility:4}],
    ["A debuff that makes the enemy easier to kill.",{control:4,singleTarget:3,support:4}],
    ["A defensive effect that prevents the enemy from hurting us effectively.",{control:4,defense:5}]
  ]},
  {category:"Crowd Control",trait:"control",text:"A monster is too dangerous to fight directly. What is your preferred solution?",answers:[
    ["Disable it and deal with everything else first.",{control:5,aoe:2}],
    ["Banish, relocate, or otherwise remove it from the battlefield.",{control:5,utility:5}],
    ["Debuff it until its damage is manageable.",{control:5,defense:3}],
    ["Turn the situation into a party advantage with coordinated buffs/debuffs.",{control:4,support:5}]
  ]},
  {category:"Crowd Control",trait:"control",text:"What makes a control build feel powerful?",answers:[
    ["I decide which enemies are allowed to participate.",{control:5}],
    ["I dictate where everyone stands.",{control:5,utility:4}],
    ["I make enemy turns inefficient or harmless.",{control:5,defense:4}],
    ["I create openings for my teammates to exploit.",{control:4,support:5}]
  ]},

  // MOBILITY
  {category:"Mobility",trait:"mobility",text:"The boss moves to the other side of the arena. What sounds best?",answers:[
    ["I can immediately reach it without losing much damage.",{mobility:5,singleTarget:4}],
    ["I can attack effectively from range while moving.",{mobility:4,range:5}],
    ["I can reposition the boss or battlefield to solve the problem.",{mobility:4,control:5,utility:3}],
    ["I can move to wherever an ally needs help.",{mobility:5,support:4,healing:3}]
  ]},
  {category:"Mobility",trait:"mobility",text:"Which movement tool would you take first?",answers:[
    ["A dash/teleport that lets me stick to priority targets.",{mobility:5,singleTarget:3}],
    ["A movement option that lets me escape danger instantly.",{mobility:5,defense:4}],
    ["A movement option that lets me reach teammates or rescue them.",{mobility:5,support:4}],
    ["A movement option that changes the entire battlefield's positioning.",{mobility:4,control:5,utility:4}]
  ]},
  {category:"Mobility",trait:"mobility",text:"How important is uptime while moving?",answers:[
    ["Extremely. Losing a turn of damage feels awful.",{mobility:5,sustained:4}],
    ["Important, but I can trade damage for a powerful reposition.",{mobility:4,utility:3}],
    ["I care more about reaching allies than keeping my own DPS up.",{mobility:5,support:5}],
    ["Movement itself is part of my control over the encounter.",{mobility:5,control:5}]
  ]},
  {category:"Mobility",trait:"mobility",text:"Which arena sounds most fun?",answers:[
    ["A large arena where I can constantly reposition and chase targets.",{mobility:5,singleTarget:3}],
    ["An arena full of hazards where clever movement keeps me alive.",{mobility:5,defense:4}],
    ["An arena where I can move allies and enemies around.",{mobility:4,control:5}],
    ["An arena where I can roam to whichever teammate needs me.",{mobility:5,support:5}]
  ]},

  // DEFENSE
  {category:"Defense",trait:"defense",text:"Which defensive mechanic would you most like to have?",answers:[
    ["Very high AC/resistance that makes incoming hits unreliable.",{defense:5,tank:4}],
    ["Temporary HP or barriers that absorb damage.",{defense:5,support:3}],
    ["A reaction that negates or reduces a dangerous attack.",{defense:5,utility:3}],
    ["A defensive effect that protects the whole party.",{defense:5,support:5}]
  ]},
  {category:"Defense",trait:"defense",text:"Your party is about to take unavoidable AoE damage. What do you want to press?",answers:[
    ["A party-wide shield or damage reduction.",{defense:5,support:5}],
    ["A personal defensive cooldown while I keep doing my job.",{defense:5,tank:3}],
    ["A control effect that prevents or reduces the incoming threat.",{defense:4,control:5}],
    ["A heal that immediately recovers the damage afterward.",{defense:3,healing:5}]
  ]},
  {category:"Defense",trait:"defense",text:"What kind of survivability feels strongest?",answers:[
    ["I simply have enormous durability.",{defense:5,tank:5}],
    ["I avoid damage through positioning and movement.",{defense:4,mobility:5}],
    ["I turn incoming damage into healing or another resource.",{defense:4,healing:5}],
    ["I prevent teammates from taking damage in the first place.",{defense:5,support:5}]
  ]},
  {category:"Defense",trait:"defense",text:"If you could specialize in one defensive job, which would it be?",answers:[
    ["Personal mitigation.",{defense:5}],
    ["Protecting a designated ally.",{defense:5,support:5}],
    ["Protecting the entire party from predictable mechanics.",{defense:5,support:5,utility:3}],
    ["Making enemies unable to threaten us.",{defense:4,control:5}]
  ]},

  // SUPPORT
  {category:"Party Support",trait:"support",text:"Which party buff would you most want to provide?",answers:[
    ["More damage / better offensive rolls.",{support:5,burst:3}],
    ["More survivability / temporary HP.",{support:5,defense:5}],
    ["Better accuracy, skill checks, or general reliability.",{support:5,utility:4}],
    ["Better positioning, mobility, or action economy.",{support:5,mobility:4}]
  ]},
  {category:"Party Support",trait:"support",text:"Your teammate has a huge damage cooldown ready. What do you want your turn to do?",answers:[
    ["Amplify their damage as much as possible.",{support:5,burst:4}],
    ["Protect them so they can stay on target.",{support:5,defense:4}],
    ["Debuff the enemy so their attack hits harder.",{support:5,control:4}],
    ["Give them movement or positioning that makes their attack work.",{support:5,mobility:4}]
  ]},
  {category:"Party Support",trait:"support",text:"How much personal DPS would you sacrifice for a strong party buff?",answers:[
    ["Very little; I want support integrated into my damage.",{support:3,sustained:4}],
    ["A moderate amount; making the team better is worth it.",{support:5,utility:3}],
    ["A lot; I want to be the party's dedicated enabler.",{support:5,healing:3,defense:3}],
    ["Almost none, but I want reactive support tools for emergencies.",{support:4,healing:4,defense:4}]
  ]},
  {category:"Party Support",trait:"support",text:"What makes a support ability feel powerful?",answers:[
    ["It increases the party's damage ceiling.",{support:5,burst:3}],
    ["It turns a lethal situation into a survivable one.",{support:5,defense:5}],
    ["It gives an ally options they otherwise would not have.",{support:5,utility:5}],
    ["It lets another player execute their role more consistently.",{support:5,sustained:3}]
  ]},

  // RANGE
  {category:"Ranged Combat",trait:"range",text:"Where do you want to spend most of a dangerous boss fight?",answers:[
    ["At long range, constantly attacking.",{range:5,sustained:4}],
    ["At whatever distance is safest while preparing a burst.",{range:4,burst:5}],
    ["At range while controlling the battlefield.",{range:5,control:5}],
    ["At range while supporting and healing teammates.",{range:5,support:5,healing:3}]
  ]},
  {category:"Ranged Combat",trait:"range",text:"Which ranged advantage matters most?",answers:[
    ["I can maintain DPS without standing in melee danger.",{range:5,defense:3}],
    ["I can hit priority targets from almost anywhere.",{range:5,singleTarget:5}],
    ["I can attack while constantly repositioning.",{range:5,mobility:5}],
    ["I can apply ranged buffs/debuffs that shape the encounter.",{range:5,utility:4,control:4}]
  ]},
  {category:"Ranged Combat",trait:"range",text:"If enemies rush you, what do you want your ranged build to do?",answers:[
    ["Kill them before they reach me.",{range:5,burst:3,aoe:3}],
    ["Slow, trap, or otherwise control them.",{range:5,control:5}],
    ["Reposition while continuing to attack.",{range:5,mobility:5}],
    ["Fall back while keeping allies alive.",{range:4,mobility:3,support:5}]
  ]},
  {category:"Ranged Combat",trait:"range",text:"Which ranged weapon/spell fantasy mechanically appeals most?",answers:[
    ["Long-range precision against priority targets.",{range:5,singleTarget:5}],
    ["Explosive ranged AoE.",{range:5,aoe:5,burst:3}],
    ["Ranged control and battlefield manipulation.",{range:5,control:5,utility:4}],
    ["Ranged support that changes what allies can do.",{range:5,support:5}]
  ]},

  // MIXED / RESOURCE / ROLE CHOICES
  {category:"Resource Management",trait:"utility",text:"Which resource-management puzzle sounds best?",answers:[
    ["I want to optimize several cooldowns for maximum DPS.",{burst:4,sustained:4,utility:3}],
    ["I want to hold resources until the exact right defensive moment.",{defense:5,utility:4,tank:3}],
    ["I want to decide whether a resource is better spent on damage or support.",{support:5,utility:5}],
    ["I want a flexible resource that can solve many different problems.",{utility:5,control:3}]
  ]},
  {category:"Resource Management",trait:"utility",text:"When resources are scarce, what should your character still be able to do?",answers:[
    ["Deal respectable damage without cooldowns.",{sustained:5}],
    ["Protect or heal someone in an emergency.",{healing:4,defense:5}],
    ["Control or reposition enemies.",{control:5,utility:4}],
    ["Provide useful buffs and non-damage tools.",{support:5,utility:5}]
  ]},
  {category:"Encounter Role",trait:"utility",text:"The party has every basic role covered. What extra contribution do you want?",answers:[
    ["Even more damage, especially against priority targets.",{singleTarget:4,sustained:4}],
    ["Extra control and encounter manipulation.",{control:5,utility:4}],
    ["Extra defensive or healing safety.",{defense:5,healing:3,support:4}],
    ["Extra mobility, scouting, and problem-solving.",{mobility:5,utility:5}]
  ]},
  {category:"Encounter Role",trait:"utility",text:"Which statement sounds most like your ideal combat identity?",answers:[
    ["If something needs to die, I kill it.",{singleTarget:5,burst:3,sustained:3}],
    ["If something needs to be survived, I make it survivable.",{tank:4,defense:5,healing:3}],
    ["If something needs to be solved, I find a way.",{utility:5,control:3}],
    ["If the party needs to perform better, I make that happen.",{support:5,utility:4}]
  ]},
  {category:"Encounter Role",trait:"utility",text:"Which mistake would bother you most when playing your character?",answers:[
    ["Missing a damage window.",{burst:5,singleTarget:4}],
    ["Letting an ally die or failing to mitigate damage.",{healing:5,defense:5,support:4}],
    ["Wasting a control or utility opportunity.",{control:5,utility:5}],
    ["Failing to capitalize on movement or positioning.",{mobility:5,range:3}]
  ]},
  {category:"Encounter Role",trait:"utility",text:"What do you want the party to say after a difficult encounter?",answers:[
    ["'That damage was ridiculous.'",{burst:4,sustained:4}],
    ["'We would have died without you.'",{tank:4,healing:4,defense:5}],
    ["'How did you even think of that solution?'",{utility:5,control:4}],
    ["'Everyone played better because of you.'",{support:5,utility:3}]
  ]}
];

/*
  Complete subclass catalog supplied for this project.
  Each subclass receives an archetype profile. Profiles are generated from
  class baselines plus name/archetype rules, with custom subclasses explicitly
  described. The result engine still compares every listed subclass.
*/
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

function clamp(v,min=-5,max=5){return Math.max(min,Math.min(max,v));}

function subclassProfile(className, subclass){
  const p = {...CLASS_PROFILES[className]};
  // Start with a moderate class identity, then sharpen the subclass profile.
  for(const t of TRAITS) p[t] = p[t] || 0;
  const key = `${className}:${subclass}`;
  for(const [trait,words] of ARCHETYPE_RULES){
    if(words.some(w=>subclass.toLowerCase().includes(w.toLowerCase()))){
      p[trait] += 2.2;
    }
  }

  // Explicit mechanical/custom refinements.
  const add = (obj)=>{for(const [k,v] of Object.entries(obj))p[k]=(p[k]||0)+v;};
  const n=subclass.toLowerCase();

  if(n.includes("berserker")||n.includes("zealot")) add({burst:2,sustained:2,singleTarget:1,tank:1});
  if(n.includes("wild magic")) add({burst:2,utility:2,aoe:2,control:2});
  if(n.includes("storm")) add({aoe:3,range:2,burst:2});
  if(n.includes("beast")) add({sustained:2,mobility:2,tank:2});
  if(n.includes("frost")) add({aoe:2,singleTarget:2,burst:2});
  if(n.includes("time")) add({support:3,healing:2,utility:3,control:2});
  if(n.includes("encouragement")) add({support:5,burst:2});
  if(n.includes("leadership")) add({support:5,defense:3,tank:2});
  if(n.includes("whispers")) add({burst:3,singleTarget:3,utility:2,control:2});
  if(n.includes("swords")) add({sustained:3,mobility:3,burst:2});
  if(n.includes("spirits")) add({utility:4,control:2,support:3});
  if(n.includes("eloquence")) add({control:3,support:4,utility:5});
  if(n.includes("peace")) add({support:5,defense:4,healing:3});
  if(n.includes("grave")) add({singleTarget:3,burst:3,control:2,utility:3});
  if(n.includes("pestilence")) add({singleTarget:4,aoe:2,burst:3});
  if(n.includes("trickery")) add({utility:4,mobility:4,control:3});
  if(n.includes("death")) add({singleTarget:4,burst:3,sustained:2});
  if(n.includes("nature")) add({control:2,utility:3,range:2});
  if(n.includes("land")) add({utility:4,aoe:3,control:3});
  if(n.includes("moon")) add({tank:3,sustained:3,singleTarget:3,burst:2});
  if(n.includes("fangs")) add({singleTarget:5,burst:4,aoe:3,tank:-1});
  if(n.includes("fey")) add({control:4,utility:4,burst:3,aoe:2});
  if(n.includes("drakes")) add({aoe:5,burst:3,singleTarget:3,range:2});
  if(n.includes("souls")||n.includes("soul cleaver")) add({healing:3,range:3,singleTarget:3});
  if(n.includes("titan")) add({tank:3,singleTarget:5,sustained:4,burst:3,range:-2});
  if(n.includes("lethality")) add({singleTarget:5,burst:4,mobility:3,sustained:3,range:-2});
  if(n.includes("medic")) add({healing:5,singleTarget:3,utility:3});
  if(n.includes("outlaw")) add({burst:3,utility:3,sustained:2});
  if(n.includes("shadow archer")) add({range:5,singleTarget:5,mobility:3,burst:4});
  if(n.includes("shelter")) add({tank:5,defense:4,singleTarget:3,sustained:3});
  if(n.includes("royalty")) add({utility:5,control:3,support:4});
  if(n.includes("fate")) add({utility:4,burst:4,support:3,control:2});
  if(n.includes("soundboost")) add({aoe:4,range:3,burst:3});
  if(n.includes("transmogrification")) add({tank:4,defense:4,sustained:3,control:2});
  if(n.includes("researcher")) add({utility:5,range:4,aoe:3,support:3,sustained:3});
  if(n.includes("stability")) add({defense:5,control:5,utility:4});
  if(n.includes("hearth")) add({healing:5,support:4,defense:3});
  if(n.includes("fathomless")) add({control:5,aoe:3,range:3});
  if(n.includes("hexblade")) add({singleTarget:4,burst:4,tank:2,sustained:3});
  if(n.includes("celestial")) add({healing:4,support:4,range:3});
  if(n.includes("great old one")) add({control:5,utility:4});
  if(n.includes("undead")) add({control:4,sustained:3,tank:2});
  if(n.includes("arch devil")) add({burst:4,control:3,singleTarget:4});
  if(n.includes("illusion")) add({control:5,utility:4,defense:2});
  if(n.includes("evocation")) add({aoe:5,burst:4,range:4});
  if(n.includes("necromancy")) add({sustained:3,aoe:2,utility:3,tank:2});
  if(n.includes("conjuration")) add({utility:5,control:4,aoe:3});
  if(n.includes("enchantment")) add({control:5,support:3,utility:4});
  if(n.includes("divination")) add({utility:5,support:3,control:2});
  if(n.includes("transmutation")) add({utility:5,defense:3,control:3});
  if(n.includes("graviturgy")) add({control:5,aoe:3,utility:4});
  if(n.includes("chronurgy")) add({control:4,utility:5,support:4});
  if(n.includes("bladesinging")) add({singleTarget:4,mobility:4,defense:3,burst:3});
  if(n.includes("scribes")) add({utility:5,range:4,aoe:3});
  if(n.includes("armorer")) add({tank:5,defense:4,range:2,utility:3});
  if(n.includes("battle smith")) add({tank:3,support:3,utility:4,singleTarget:3});
  if(n.includes("alchemist")) add({healing:3,support:4,utility:5,aoe:2});
  if(n.includes("artillerist")) add({range:4,aoe:4,burst:3,defense:2});
  if(n.includes("samurai")) add({burst:4,singleTarget:4,defense:2});
  if(n.includes("echo knight")) add({mobility:5,utility:4,singleTarget:4});
  if(n.includes("gunslinger")) add({range:5,singleTarget:5,burst:4});
  if(n.includes("eldritch knight")) add({defense:3,utility:4,singleTarget:3,range:2});
  if(n.includes("arcane archer")) add({range:5,control:3,singleTarget:4,burst:3});
  if(n.includes("psi warrior")) add({defense:4,utility:3,control:3});
  if(n.includes("champion")) add({sustained:4,singleTarget:4,burst:3});
  if(n.includes("battle master")) add({utility:4,control:3,singleTarget:4,burst:3});
  if(n.includes("purple dragon")) add({support:4,defense:3});
  if(n.includes("drunken")) add({mobility:5,defense:3,control:3});
  if(n.includes("open hand")) add({control:4,mobility:4,tank:2,singleTarget:3});
  if(n.includes("long death")) add({tank:4,defense:4,sustained:3});
  if(n.includes("ascendant dragon")) add({aoe:3,control:3,mobility:3,range:2});
  if(n.includes("shadow")) add({mobility:5,utility:3,control:3});
  if(n.includes("mercy")) add({healing:5,singleTarget:3,utility:2});
  if(n.includes("cobalt")) add({utility:5,control:3,singleTarget:3});
  if(n.includes("sun soul")) add({range:4,aoe:3,burst:3});
  if(n.includes("astral")) add({range:2,control:3,mobility:3,sustained:3});
  if(n.includes("kensei")) add({range:3,singleTarget:4,defense:3});
  if(n.includes("vengeance")) add({singleTarget:5,burst:5,mobility:3});
  if(n.includes("ancients")) add({defense:5,support:3,control:2});
  if(n.includes("glory")) add({support:3,mobility:3,burst:3});
  if(n.includes("open sea")) add({mobility:4,control:3,utility:3});
  if(n.includes("watchers")) add({utility:4,defense:4,control:3});
  if(n.includes("devotion")) add({defense:5,support:4,sustained:2});
  if(n.includes("oathbreaker")) add({control:3,burst:4,singleTarget:3});
  if(n.includes("fey wanderer")) add({utility:4,control:3,support:3,mobility:3});
  if(n.includes("gloom")) add({burst:4,range:4,mobility:3});
  if(n.includes("monster")) add({singleTarget:5,utility:4});
  if(n.includes("swarm")) add({aoe:3,utility:3,control:3,range:3});
  if(n.includes("hunter")) add({sustained:4,range:4,aoe:3});
  if(n.includes("beast master")) add({utility:4,sustained:4,support:3});
  if(n.includes("drakewarden")) add({aoe:3,singleTarget:3,range:3,utility:3});
  if(n.includes("thief")) add({utility:5,mobility:4});
  if(n.includes("soulknife")) add({singleTarget:4,utility:3,range:3,mobility:3});
  if(n.includes("mastermind")) add({support:5,utility:5,range:2});
  if(n.includes("arcane trickster")) add({utility:5,control:4,mobility:3});
  if(n.includes("phantom")) add({singleTarget:4,burst:3,utility:3});
  if(n.includes("inquisitive")) add({utility:5,singleTarget:4,range:2});
  if(n.includes("scout")) add({mobility:5,utility:4,range:3});
  if(n.includes("swashbuckler")) add({mobility:5,singleTarget:4,burst:3});
  if(n.includes("assassin")) add({burst:5,singleTarget:5});
  if(n.includes("aberrant")) add({control:5,utility:4,range:3});
  if(n.includes("divine soul")) add({healing:4,support:4});
  if(n.includes("clockwork")) add({defense:5,utility:4,control:3});
  if(n.includes("draconic")) add({range:4,aoe:3,burst:4});
  if(n.includes("shadow magic")) add({control:3,mobility:4,defense:3});
  if(n.includes("genie")) add({utility:4,range:3,aoe:3});
  if(n.includes("fiend")) add({burst:4,aoe:4,sustained:3});
  if(n.includes("undying")) add({defense:4,sustained:3,tank:2});
  if(n.includes("fey")) add({control:4,utility:4,mobility:3});
  if(n.includes("armorer")) add({tank:5,defense:5});
  if(className==="Death Knight") add({tank:1,defense:1,singleTarget:1});
  return p;
}

const PROFILE_CACHE = {};
for(const cls of Object.keys(CLASS_DATA)){
  PROFILE_CACHE[cls] = {};
  for(const sub of CLASS_DATA[cls]){
    PROFILE_CACHE[cls][sub] = subclassProfile(cls,sub);
  }
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
  // Exactly 2 questions from each broad category, then randomize order.
  const buckets={};
  QUESTIONS.forEach(q=>(buckets[q.category]??=[]).push(q));
  let selected=[];
  for(const bucket of Object.values(buckets)){
    selected.push(...shuffled(bucket).slice(0,2));
  }
  return shuffled(selected).slice(0,QUIZ_LENGTH);
}

let quizQuestions=[];
let current=0;
let answers=[];

function addVector(target, source, multiplier=1){
  if(!source)return;
  for(const [k,v] of Object.entries(source)) target[k]=(target[k]||0)+v*multiplier;
}

function scoreAgainstProfile(player, profile){
  let score=0;
  for(const t of TRAITS){
    // Center the player's result around the profile. Positive answer choices
    // are more informative than neutral dimensions.
    score += (player[t]||0) * (profile[t]||0);
  }
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
    b.className="answer"+(answers[current]===i?" selected":"");
    b.textContent=a[0];
    b.onclick=()=>{answers[current]=i;renderQuestion();};
    wrap.appendChild(b);
  });
  document.getElementById("back-btn").disabled=current===0;
  document.getElementById("next-btn").disabled=answers[current]===null;
  document.getElementById("next-btn").textContent=current===quizQuestions.length-1?"See Result":"Next";
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
  document.getElementById("result-description").textContent=
    best.description || `Your answers produced the strongest gameplay match for ${winner} — ${best.name}.`;

  const traitScores=TRAITS.map(t=>[t,player[t]]).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const traitWrap=document.getElementById("trait-breakdown");
  traitWrap.innerHTML=`<div class="trait-grid">${traitScores.map(([t,v])=>{
    const max=Math.max(...TRAITS.map(x=>Math.abs(player[x]||0)),1);
    const width=Math.min(100,Math.max(4,Math.abs(v)/max*100));
    return `<div class="trait"><div class="trait-head"><span>${TRAIT_LABELS[t]}</span><b>${v}</b></div><div class="trait-track"><div class="trait-fill" style="width:${width}%"></div></div></div>`;
  }).join("")}</div>`;

  const reasons=document.getElementById("result-reasons");
  reasons.innerHTML="";
  traitScores.slice(0,4).forEach(([t])=>{
    const li=document.createElement("li");
    li.textContent=`You strongly prioritized ${TRAIT_LABELS[t]} in your answers.`;
    reasons.appendChild(li);
  });

  const classWrap=document.getElementById("class-breakdown");
  const maxClass=Math.max(...classes.map(x=>x.score),1);
  classWrap.innerHTML=classes.map(x=>`<div class="bar-row"><div class="bar-label"><span>${x.name}</span><span>${Math.round(x.score)}</span></div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(2,x.score/maxClass*100)}%"></div></div></div>`).join("");

  const subWrap=document.getElementById("subclass-matches");
  subWrap.innerHTML=subs.slice(0,6).map((x,i)=>`<div class="match"><b>${i+1}. ${x.name}</b> — ${Math.round(x.score)}${x.custom?" · Custom":""}</div>`).join("");

  showScreen("results-screen");
}

document.getElementById("start-btn").onclick=()=>{
  quizQuestions=makeQuizSet();
  current=0;
  answers=Array(quizQuestions.length).fill(null);
  showScreen("quiz-screen");
  renderQuestion();
};

document.getElementById("back-btn").onclick=()=>{
  if(current>0){current--;renderQuestion();}
};

document.getElementById("next-btn").onclick=()=>{
  if(answers[current]===null)return;
  if(current<quizQuestions.length-1){current++;renderQuestion();}
  else renderResults();
};

document.getElementById("restart-btn").onclick=()=>{
  showScreen("start-screen");
};

// Safety check: fail loudly in the console instead of producing a blank quiz
// if the HTML IDs or data are ever accidentally removed while editing.
(function startupCheck(){
  const ids=["start-btn","quiz-screen","question-text","answers","next-btn","back-btn","results-screen"];
  ids.forEach(id=>{if(!document.getElementById(id))console.error("Missing quiz element:",id);});
  if(QUESTIONS.length<QUIZ_LENGTH)console.error("Question pool is smaller than QUIZ_LENGTH.");
})();
