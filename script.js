const QUESTIONS = [
  {category:"AoE",trait:"aoe",phase:"core",text:"Would you trade some single-target damage for stronger attacks against groups?",answers:[["YES",{traits:{aoe:5,singleTarget:-2}}],["NO",{traits:{aoe:-5,singleTarget:2}}]]},
  {category:"AoE",trait:"aoe",phase:"core",text:"Would you rather have weaker attacks that can hit several enemies than stronger attacks that hit one?",answers:[["YES",{traits:{aoe:5,singleTarget:-2}}],["NO",{traits:{aoe:-5,singleTarget:2}}]]},
  {category:"AoE",trait:"aoe",phase:"core",text:"If an enemy group is spread out, would you still prefer tools that affect an area?",answers:[["YES",{traits:{aoe:5,singleTarget:-1}}],["NO",{traits:{aoe:-5,singleTarget:1}}]]},
  {category:"AoE",trait:"aoe",phase:"core",text:"Would you give up some boss damage for better performance against multiple targets?",answers:[["YES",{traits:{aoe:5,singleTarget:-2}}],["NO",{traits:{aoe:-5,singleTarget:2}}]]},
  {category:"AoE",trait:"aoe",phase:"core",text:"Would you rather spend a turn setting up an area effect than focus on one target?",answers:[["YES",{traits:{aoe:5,singleTarget:-1}}],["NO",{traits:{aoe:-5,singleTarget:1}}]]},
  {category:"AoE",trait:"aoe",phase:"core",text:"Would you choose a wider effect even if its damage were lower?",answers:[["YES",{traits:{aoe:5,singleTarget:-2}}],["NO",{traits:{aoe:-5,singleTarget:2}}]]},
  {category:"Single-Target DPS",trait:"singleTarget",phase:"core",text:"Would you trade some area damage for stronger damage against one target?",answers:[["YES",{traits:{singleTarget:5,aoe:-2}}],["NO",{traits:{singleTarget:-5,aoe:2}}]]},
  {category:"Single-Target DPS",trait:"singleTarget",phase:"core",text:"Would you rather concentrate your damage on one enemy than spread it across several?",answers:[["YES",{traits:{singleTarget:5,aoe:-2}}],["NO",{traits:{singleTarget:-5,aoe:2}}]]},
  {category:"Single-Target DPS",trait:"singleTarget",phase:"core",text:"If one enemy is dangerous, would you prioritize tools built to finish that target?",answers:[["YES",{traits:{singleTarget:5,aoe:-1}}],["NO",{traits:{singleTarget:-5,aoe:1}}]]},
  {category:"Single-Target DPS",trait:"singleTarget",phase:"core",text:"Would you give up some crowd-clearing power for stronger boss damage?",answers:[["YES",{traits:{singleTarget:5,aoe:-2}}],["NO",{traits:{singleTarget:-5,aoe:2}}]]},
  {category:"Single-Target DPS",trait:"singleTarget",phase:"core",text:"Would you rather have a powerful attack against one target than a weaker attack against many?",answers:[["YES",{traits:{singleTarget:5,aoe:-2}}],["NO",{traits:{singleTarget:-5,aoe:2}}]]},
  {category:"Single-Target DPS",trait:"singleTarget",phase:"core",text:"Would you build around fighting one important enemy at a time?",answers:[["YES",{traits:{singleTarget:5,aoe:-1}}],["NO",{traits:{singleTarget:-5,aoe:1}}]]},
  {category:"Burst",trait:"burst",phase:"core",text:"Would you trade some consistent damage for a much stronger spike when you commit your resources?",answers:[["YES",{traits:{burst:5,sustained:-2}}],["NO",{traits:{burst:-5,sustained:2}}]]},
  {category:"Burst",trait:"burst",phase:"core",text:"Would you rather have a few very strong turns than equally strong turns throughout a fight?",answers:[["YES",{traits:{burst:5,sustained:-2}}],["NO",{traits:{burst:-5,sustained:2}}]]},
  {category:"Burst",trait:"burst",phase:"core",text:"Would you save resources for a decisive attack instead of spending them steadily?",answers:[["YES",{traits:{burst:5,sustained:-1}}],["NO",{traits:{burst:-5,sustained:1}}]]},
  {category:"Burst",trait:"burst",phase:"core",text:"Would you accept weaker damage between big attacks in exchange for a higher peak?",answers:[["YES",{traits:{burst:5,sustained:-2}}],["NO",{traits:{burst:-5,sustained:2}}]]},
  {category:"Burst",trait:"burst",phase:"core",text:"Would you rather build toward a powerful moment than maintain the same output every round?",answers:[["YES",{traits:{burst:5,sustained:-2}}],["NO",{traits:{burst:-5,sustained:2}}]]},
  {category:"Burst",trait:"burst",phase:"core",text:"Would you trade reliability for the chance to produce a very high-damage turn?",answers:[["YES",{traits:{burst:5,sustained:-2}}],["NO",{traits:{burst:-5,sustained:2}}]]},
  {category:"Sustained DPS",trait:"sustained",phase:"core",text:"Would you trade some peak damage for damage you can maintain throughout a fight?",answers:[["YES",{traits:{sustained:5,burst:-2}}],["NO",{traits:{sustained:-5,burst:2}}]]},
  {category:"Sustained DPS",trait:"sustained",phase:"core",text:"Would you rather have dependable damage every round than occasional huge hits?",answers:[["YES",{traits:{sustained:5,burst:-2}}],["NO",{traits:{sustained:-5,burst:2}}]]},
  {category:"Sustained DPS",trait:"sustained",phase:"core",text:"Would you spend resources steadily instead of saving for one major attack?",answers:[["YES",{traits:{sustained:5,burst:-1}}],["NO",{traits:{sustained:-5,burst:1}}]]},
  {category:"Sustained DPS",trait:"sustained",phase:"core",text:"Would you accept a lower damage ceiling in exchange for fewer weak turns?",answers:[["YES",{traits:{sustained:5,burst:-2}}],["NO",{traits:{sustained:-5,burst:2}}]]},
  {category:"Sustained DPS",trait:"sustained",phase:"core",text:"Would you rather keep pressure on an enemy than wait for the right moment to burst it down?",answers:[["YES",{traits:{sustained:5,burst:-2}}],["NO",{traits:{sustained:-5,burst:2}}]]},
  {category:"Sustained DPS",trait:"sustained",phase:"core",text:"Would consistency matter more to you than having the highest possible damage spike?",answers:[["YES",{traits:{sustained:5,burst:-2}}],["NO",{traits:{sustained:-5,burst:2}}]]},
  {category:"Tanking",trait:"tank",phase:"core",text:"Would you trade some damage for greater survivability?",answers:[["YES",{traits:{tank:5,burst:-1}}],["NO",{traits:{tank:-5,burst:1}}]]},
  {category:"Tanking",trait:"tank",phase:"core",text:"Would you rather absorb attacks than rely on avoiding them?",answers:[["YES",{traits:{tank:5,mobility:-2}}],["NO",{traits:{tank:-5,mobility:2}}]]},
  {category:"Tanking",trait:"tank",phase:"core",text:"Would you accept lower mobility if it made you harder to kill?",answers:[["YES",{traits:{tank:5,mobility:-2}}],["NO",{traits:{tank:-5,mobility:2}}]]},
  {category:"Tanking",trait:"tank",phase:"core",text:"Would you trade offensive options for tools that keep enemies focused on you?",answers:[["YES",{traits:{tank:5,singleTarget:-1}}],["NO",{traits:{tank:-5,singleTarget:1}}]]},
  {category:"Tanking",trait:"tank",phase:"core",text:"Would you rather hold the frontline than stay out of danger?",answers:[["YES",{traits:{tank:5,range:-1}}],["NO",{traits:{tank:-5,range:1}}]]},
  {category:"Tanking",trait:"tank",phase:"core",text:"Would you give up some damage to become the party member who can take the most punishment?",answers:[["YES",{traits:{tank:5,singleTarget:-1}}],["NO",{traits:{tank:-5,singleTarget:1}}]]},
  {category:"Healing",trait:"healing",phase:"core",text:"Would you trade some damage for stronger healing?",answers:[["YES",{traits:{healing:5,singleTarget:-1}}],["NO",{traits:{healing:-5,singleTarget:1}}]]},
  {category:"Healing",trait:"healing",phase:"core",text:"Would you rather restore an ally than finish an enemy when you have to choose?",answers:[["YES",{traits:{healing:5,burst:-1}}],["NO",{traits:{healing:-5,burst:1}}]]},
  {category:"Healing",trait:"healing",phase:"core",text:"Would you give up some offensive power to keep emergency healing available?",answers:[["YES",{traits:{healing:5,burst:-1}}],["NO",{traits:{healing:-5,burst:1}}]]},
  {category:"Healing",trait:"healing",phase:"core",text:"Would you rather have healing as a major part of your kit than occasional healing?",answers:[["YES",{traits:{healing:5,singleTarget:-1}}],["NO",{traits:{healing:-5,singleTarget:1}}]]},
  {category:"Healing",trait:"healing",phase:"core",text:"Would you choose stronger recovery tools even if they reduced your damage output?",answers:[["YES",{traits:{healing:5,burst:-1}}],["NO",{traits:{healing:-5,burst:1}}]]},
  {category:"Healing",trait:"healing",phase:"core",text:"Would you rather specialize in keeping allies on their feet than dealing damage yourself?",answers:[["YES",{traits:{healing:5,singleTarget:-1}}],["NO",{traits:{healing:-5,singleTarget:1}}]]},
  {category:"Utility",trait:"utility",phase:"core",text:"Would you trade some raw damage for more ways to solve different situations?",answers:[["YES",{traits:{utility:5,singleTarget:-1}}],["NO",{traits:{utility:-5,singleTarget:1}}]]},
  {category:"Utility",trait:"utility",phase:"core",text:"Would you rather have a smaller damage kit with more non-damage options?",answers:[["YES",{traits:{utility:5,burst:-1}}],["NO",{traits:{utility:-5,burst:1}}]]},
  {category:"Utility",trait:"utility",phase:"core",text:"Would you give up specialization for a wider toolbox?",answers:[["YES",{traits:{utility:5,singleTarget:-1}}],["NO",{traits:{utility:-5,singleTarget:1}}]]},
  {category:"Utility",trait:"utility",phase:"core",text:"Would you trade some combat power for abilities that can matter outside combat?",answers:[["YES",{traits:{utility:5,burst:-1}}],["NO",{traits:{utility:-5,burst:1}}]]},
  {category:"Utility",trait:"utility",phase:"core",text:"Would you rather have several situational answers than one very strong answer?",answers:[["YES",{traits:{utility:5,burst:-1}}],["NO",{traits:{utility:-5,burst:1}}]]},
  {category:"Utility",trait:"utility",phase:"core",text:"Would you accept lower damage if your character could approach problems from many angles?",answers:[["YES",{traits:{utility:5,singleTarget:-1}}],["NO",{traits:{utility:-5,singleTarget:1}}]]},
  {category:"Crowd Control",trait:"control",phase:"core",text:"Would you trade some damage for the ability to restrict what enemies can do?",answers:[["YES",{traits:{control:5,singleTarget:-1}}],["NO",{traits:{control:-5,singleTarget:1}}]]},
  {category:"Crowd Control",trait:"control",phase:"core",text:"Would you rather disable an enemy than deal extra damage to it?",answers:[["YES",{traits:{control:5,burst:-1}}],["NO",{traits:{control:-5,burst:1}}]]},
  {category:"Crowd Control",trait:"control",phase:"core",text:"Would you give up some damage for stronger ways to move, hinder, or reposition enemies?",answers:[["YES",{traits:{control:5,singleTarget:-1}}],["NO",{traits:{control:-5,singleTarget:1}}]]},
  {category:"Crowd Control",trait:"control",phase:"core",text:"Would you rather make an enemy easier for the party to handle than hit it harder yourself?",answers:[["YES",{traits:{control:5,burst:-1}}],["NO",{traits:{control:-5,burst:1}}]]},
  {category:"Crowd Control",trait:"control",phase:"core",text:"Would you accept lower damage in exchange for stronger battlefield control?",answers:[["YES",{traits:{control:5,singleTarget:-1}}],["NO",{traits:{control:-5,singleTarget:1}}]]},
  {category:"Crowd Control",trait:"control",phase:"core",text:"Would you rather change the battlefield than simply deal more damage?",answers:[["YES",{traits:{control:5,burst:-1}}],["NO",{traits:{control:-5,burst:1}}]]},
  {category:"Mobility",trait:"mobility",phase:"core",text:"Would you trade some durability for much better movement?",answers:[["YES",{traits:{mobility:5,defense:-2}}],["NO",{traits:{mobility:-5,defense:2}}]]},
  {category:"Mobility",trait:"mobility",phase:"core",text:"Would you rather avoid danger with movement than withstand it?",answers:[["YES",{traits:{mobility:5,tank:-2}}],["NO",{traits:{mobility:-5,tank:2}}]]},
  {category:"Mobility",trait:"mobility",phase:"core",text:"Would you give up some damage for easier repositioning?",answers:[["YES",{traits:{mobility:5,sustained:-1}}],["NO",{traits:{mobility:-5,sustained:1}}]]},
  {category:"Mobility",trait:"mobility",phase:"core",text:"Would you choose speed and positioning over heavier defenses?",answers:[["YES",{traits:{mobility:5,defense:-2}}],["NO",{traits:{mobility:-5,defense:2}}]]},
  {category:"Mobility",trait:"mobility",phase:"core",text:"Would you rather reach any part of the battlefield quickly than become harder to kill?",answers:[["YES",{traits:{mobility:5,tank:-2}}],["NO",{traits:{mobility:-5,tank:2}}]]},
  {category:"Mobility",trait:"mobility",phase:"core",text:"Would you trade a stronger defensive option for a better way to get in or out of melee?",answers:[["YES",{traits:{mobility:5,defense:-2}}],["NO",{traits:{mobility:-5,defense:2}}]]},
  {category:"Defense",trait:"defense",phase:"core",text:"Would you trade some damage for stronger defenses?",answers:[["YES",{traits:{defense:5,burst:-1}}],["NO",{traits:{defense:-5,burst:1}}]]},
  {category:"Defense",trait:"defense",phase:"core",text:"Would you rather prevent damage than recover from it afterward?",answers:[["YES",{traits:{defense:5,healing:-1}}],["NO",{traits:{defense:-5,healing:1}}]]},
  {category:"Defense",trait:"defense",phase:"core",text:"Would you accept lower offense for better resistance to dangerous effects?",answers:[["YES",{traits:{defense:5,burst:-1}}],["NO",{traits:{defense:-5,burst:1}}]]},
  {category:"Defense",trait:"defense",phase:"core",text:"Would you choose stronger defensive abilities even if they rarely increase your damage?",answers:[["YES",{traits:{defense:5,singleTarget:-1}}],["NO",{traits:{defense:-5,singleTarget:1}}]]},
  {category:"Defense",trait:"defense",phase:"core",text:"Would you trade mobility for a more reliable defensive layer?",answers:[["YES",{traits:{defense:5,mobility:-2}}],["NO",{traits:{defense:-5,mobility:2}}]]},
  {category:"Defense",trait:"defense",phase:"core",text:"Would you rather be difficult to disable than deal slightly more damage?",answers:[["YES",{traits:{defense:5,burst:-1}}],["NO",{traits:{defense:-5,burst:1}}]]},
  {category:"Party Support",trait:"support",phase:"core",text:"Would you trade some personal damage for abilities that improve your allies?",answers:[["YES",{traits:{support:5,singleTarget:-1}}],["NO",{traits:{support:-5,singleTarget:1}}]]},
  {category:"Party Support",trait:"support",phase:"core",text:"Would you rather make an ally stronger than make yourself stronger?",answers:[["YES",{traits:{support:5,burst:-1}}],["NO",{traits:{support:-5,burst:1}}]]},
  {category:"Party Support",trait:"support",phase:"core",text:"Would you give up some offense for better party-wide benefits?",answers:[["YES",{traits:{support:5,singleTarget:-1}}],["NO",{traits:{support:-5,singleTarget:1}}]]},
  {category:"Party Support",trait:"support",phase:"core",text:"Would you rather spend a turn helping an ally than attacking when both are useful?",answers:[["YES",{traits:{support:5,burst:-1}}],["NO",{traits:{support:-5,burst:1}}]]},
  {category:"Party Support",trait:"support",phase:"core",text:"Would you accept lower personal damage for stronger team support?",answers:[["YES",{traits:{support:5,singleTarget:-1}}],["NO",{traits:{support:-5,singleTarget:1}}]]},
  {category:"Party Support",trait:"support",phase:"core",text:"Would you build around making the rest of the party more effective?",answers:[["YES",{traits:{support:5,burst:-1}}],["NO",{traits:{support:-5,burst:1}}]]},
  {category:"Ranged Combat",trait:"range",phase:"core",text:"Would you trade some melee power for stronger ranged options?",answers:[["YES",{traits:{range:5,singleTarget:-1}}],["NO",{traits:{range:-5,singleTarget:1}}]]},
  {category:"Ranged Combat",trait:"range",phase:"core",text:"Would you rather stay at a distance than gain more power in melee?",answers:[["YES",{traits:{range:5,tank:-1}}],["NO",{traits:{range:-5,tank:1}}]]},
  {category:"Ranged Combat",trait:"range",phase:"core",text:"Would you give up some durability for the ability to attack from farther away?",answers:[["YES",{traits:{range:5,defense:-1}}],["NO",{traits:{range:-5,defense:1}}]]},
  {category:"Ranged Combat",trait:"range",phase:"core",text:"Would you choose reliable ranged attacks even if melee attacks hit harder?",answers:[["YES",{traits:{range:5,singleTarget:-1}}],["NO",{traits:{range:-5,singleTarget:1}}]]},
  {category:"Ranged Combat",trait:"range",phase:"core",text:"Would you rather control a fight from a distance than stand on the frontline?",answers:[["YES",{traits:{range:5,tank:-1}}],["NO",{traits:{range:-5,tank:1}}]]},
  {category:"Ranged Combat",trait:"range",phase:"core",text:"Would you trade some close-range options for better long-range damage?",answers:[["YES",{traits:{range:5,tank:-1}}],["NO",{traits:{range:-5,tank:1}}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather your defenses come from heavy armor than from magic or agility?",answers:[["YES",{classes:{"Fighter":3,"Paladin":3,"Death Knight":3},classes:{"Wizard":-3,"Sorcerer":-3,"Monk":-3},flavor:true}],["NO",{classes:{"Fighter":-3,"Paladin":-3,"Death Knight":-3},classes:{"Wizard":3,"Sorcerer":3,"Monk":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use radiant or holy power than necromantic or dark magic?",answers:[["YES",{classes:{"Paladin":3},classes:{"Death Knight":-3,"Warlock":-3},flavor:true}],["NO",{classes:{"Paladin":-3},classes:{"Death Knight":3,"Warlock":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use necromancy or dark magic as part of your martial fighting style?",answers:[["YES",{classes:{"Death Knight":3,"Oathbreaker":3},classes:{"Paladin":-3,"Cleric":-3},flavor:true}],["NO",{classes:{"Death Knight":-3,"Oathbreaker":-3},classes:{"Paladin":3,"Cleric":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use rage as the source of your durability than armor or spells?",answers:[["YES",{classes:{"Barbarian":3},classes:{"Fighter":-3,"Paladin":-3,"Death Knight":-3},flavor:true}],["NO",{classes:{"Barbarian":-3},classes:{"Fighter":3,"Paladin":3,"Death Knight":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather rely on disciplined martial skill than supernatural power for defense?",answers:[["YES",{classes:{"Fighter":3},classes:{"Barbarian":-3,"Paladin":-3,"Death Knight":-3},flavor:true}],["NO",{classes:{"Fighter":-3},classes:{"Barbarian":3,"Paladin":3,"Death Knight":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather protect allies through positioning and armor than through healing magic?",answers:[["YES",{classes:{"Fighter":3,"Paladin":3},classes:{"Cleric":-3,"Druid":-3,"Sorcerer":-3},flavor:true}],["NO",{classes:{"Fighter":-3,"Paladin":-3},classes:{"Cleric":3,"Druid":3,"Sorcerer":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather heal through divine magic than nature magic?",answers:[["YES",{classes:{"Cleric":3,"Paladin":3},classes:{"Druid":-3,"Ranger":-3},flavor:true}],["NO",{classes:{"Cleric":-3,"Paladin":-3},classes:{"Druid":3,"Ranger":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather heal through nature and life magic than divine magic?",answers:[["YES",{classes:{"Druid":3},classes:{"Cleric":-3,"Paladin":-3},flavor:true}],["NO",{classes:{"Druid":-3},classes:{"Cleric":3,"Paladin":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather support allies with spells than with weapons and armor?",answers:[["YES",{classes:{"Cleric":3,"Bard":3,"Sorcerer":3},classes:{"Fighter":-3,"Paladin":-3,"Ranger":-3},flavor:true}],["NO",{classes:{"Cleric":-3,"Bard":-3,"Sorcerer":-3},classes:{"Fighter":3,"Paladin":3,"Ranger":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather improve allies with inspiration and abilities than restore their HP?",answers:[["YES",{classes:{"Bard":3},classes:{"Cleric":-3,"Paladin":-3,"Druid":-3},flavor:true}],["NO",{classes:{"Bard":-3},classes:{"Cleric":3,"Paladin":3,"Druid":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather combine healing with martial combat than stay primarily a spellcaster?",answers:[["YES",{classes:{"Paladin":3,"Ranger":3,"Rogue":3},classes:{"Cleric":-3,"Druid":-3,"Sorcerer":-3},flavor:true}],["NO",{classes:{"Paladin":-3,"Ranger":-3,"Rogue":-3},classes:{"Cleric":3,"Druid":3,"Sorcerer":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use constructs, infusions, or gadgets to support the party?",answers:[["YES",{classes:{"Artificer":3},classes:{"Bard":-3,"Cleric":-3,"Druid":-3},flavor:true}],["NO",{classes:{"Artificer":-3},classes:{"Bard":3,"Cleric":3,"Druid":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather get your AoE from elemental spells than from weapon attacks?",answers:[["YES",{classes:{"Wizard":3,"Sorcerer":3,"Druid":3},classes:{"Fighter":-3,"Barbarian":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Sorcerer":-3,"Druid":-3},classes:{"Fighter":3,"Barbarian":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather deal burst damage with weapons than with spells?",answers:[["YES",{classes:{"Fighter":3,"Rogue":3,"Paladin":3,"Barbarian":3},classes:{"Wizard":-3,"Sorcerer":-3,"Warlock":-3},flavor:true}],["NO",{classes:{"Fighter":-3,"Rogue":-3,"Paladin":-3,"Barbarian":-3},classes:{"Wizard":3,"Sorcerer":3,"Warlock":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather specialize in fire, lightning, or other elemental magic?",answers:[["YES",{classes:{"Sorcerer":3,"Wizard":3,"Druid":3},classes:{"Rogue":-3,"Fighter":-3,"Barbarian":-3},flavor:true}],["NO",{classes:{"Sorcerer":-3,"Wizard":-3,"Druid":-3},classes:{"Rogue":3,"Fighter":3,"Barbarian":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use necromantic magic to damage groups than elemental magic?",answers:[["YES",{classes:{"Wizard":3,"Warlock":3,"Death Knight":3},classes:{"Sorcerer":-3,"Druid":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Warlock":-3,"Death Knight":-3},classes:{"Sorcerer":3,"Druid":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather make your AoE come from transforming into a powerful creature?",answers:[["YES",{classes:{"Druid":3},classes:{"Wizard":-3,"Sorcerer":-3},flavor:true}],["NO",{classes:{"Druid":-3},classes:{"Wizard":3,"Sorcerer":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather fire many magical effects from a prepared spellbook than improvise magic from innate power?",answers:[["YES",{classes:{"Wizard":3},classes:{"Sorcerer":-3,"Warlock":-3},flavor:true}],["NO",{classes:{"Wizard":-3},classes:{"Sorcerer":3,"Warlock":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather stalk one target from stealth than challenge it openly?",answers:[["YES",{classes:{"Rogue":3,"Ranger":3},classes:{"Fighter":-3,"Paladin":-3,"Barbarian":-3},flavor:true}],["NO",{classes:{"Rogue":-3,"Ranger":-3},classes:{"Fighter":3,"Paladin":3,"Barbarian":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather fight your priority target in melee than at range?",answers:[["YES",{classes:{"Fighter":3,"Barbarian":3,"Monk":3,"Paladin":3},classes:{"Ranger":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Fighter":-3,"Barbarian":-3,"Monk":-3,"Paladin":-3},classes:{"Ranger":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather burst one target with spells than weapons?",answers:[["YES",{classes:{"Sorcerer":3,"Wizard":3,"Warlock":3},classes:{"Fighter":-3,"Rogue":-3,"Paladin":-3},flavor:true}],["NO",{classes:{"Sorcerer":-3,"Wizard":-3,"Warlock":-3},classes:{"Fighter":3,"Rogue":3,"Paladin":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather rely on precision and sneak attacks than raw strength?",answers:[["YES",{classes:{"Rogue":3},classes:{"Barbarian":-3,"Fighter":-3,"Paladin":-3},flavor:true}],["NO",{classes:{"Rogue":-3},classes:{"Barbarian":3,"Fighter":3,"Paladin":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather hunt a specific creature with specialized tools than fight whatever is closest?",answers:[["YES",{classes:{"Ranger":3},classes:{"Fighter":-3,"Barbarian":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Ranger":-3},classes:{"Fighter":3,"Barbarian":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather channel divine power into a decisive melee attack?",answers:[["YES",{classes:{"Paladin":3,"Cleric":3},classes:{"Fighter":-3,"Rogue":-3,"Wizard":-3},flavor:true}],["NO",{classes:{"Paladin":-3,"Cleric":-3},classes:{"Fighter":3,"Rogue":3,"Wizard":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather solve problems with a large spellbook of different magic?",answers:[["YES",{classes:{"Wizard":3},classes:{"Rogue":-3,"Bard":-3,"Artificer":-3},flavor:true}],["NO",{classes:{"Wizard":-3},classes:{"Rogue":3,"Bard":3,"Artificer":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather solve problems with skills, tricks, and deception instead of spells?",answers:[["YES",{classes:{"Rogue":3,"Bard":3},classes:{"Wizard":-3,"Sorcerer":-3},flavor:true}],["NO",{classes:{"Rogue":-3,"Bard":-3},classes:{"Wizard":3,"Sorcerer":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use inventions and tools to solve unusual problems?",answers:[["YES",{classes:{"Artificer":3},classes:{"Wizard":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Artificer":-3},classes:{"Wizard":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather control enemies with enchantment or illusion magic?",answers:[["YES",{classes:{"Wizard":3,"Bard":3,"Warlock":3},classes:{"Fighter":-3,"Barbarian":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Bard":-3,"Warlock":-3},classes:{"Fighter":3,"Barbarian":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather manipulate nature and creatures to solve problems?",answers:[["YES",{classes:{"Druid":3,"Ranger":3},classes:{"Wizard":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Druid":-3,"Ranger":-3},classes:{"Wizard":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use psychic or supernatural powers that do not depend on traditional spellcasting?",answers:[["YES",{classes:{"Sorcerer":3,"Warlock":3,"Monk":3,"Rogue":3},classes:{"Wizard":-3,"Artificer":-3},flavor:true}],["NO",{classes:{"Sorcerer":-3,"Warlock":-3,"Monk":-3,"Rogue":-3},classes:{"Wizard":3,"Artificer":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use stealth and positioning than teleportation?",answers:[["YES",{classes:{"Rogue":3,"Ranger":3},classes:{"Wizard":-3,"Sorcerer":-3},flavor:true}],["NO",{classes:{"Rogue":-3,"Ranger":-3},classes:{"Wizard":3,"Sorcerer":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather teleport or magically reposition than rely on speed alone?",answers:[["YES",{classes:{"Wizard":3,"Sorcerer":3,"Warlock":3},classes:{"Monk":-3,"Rogue":-3,"Ranger":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Sorcerer":-3,"Warlock":-3},classes:{"Monk":3,"Rogue":3,"Ranger":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather fight at range while constantly repositioning?",answers:[["YES",{classes:{"Ranger":3,"Rogue":3,"Fighter":3},classes:{"Barbarian":-3,"Paladin":-3},flavor:true}],["NO",{classes:{"Ranger":-3,"Rogue":-3,"Fighter":-3},classes:{"Barbarian":3,"Paladin":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use martial agility to cross the battlefield quickly?",answers:[["YES",{classes:{"Monk":3,"Rogue":3,"Ranger":3},classes:{"Wizard":-3,"Warlock":-3},flavor:true}],["NO",{classes:{"Monk":-3,"Rogue":-3,"Ranger":-3},classes:{"Wizard":3,"Warlock":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather have magical mobility even if your weapon skills were weaker?",answers:[["YES",{classes:{"Wizard":3,"Sorcerer":3,"Warlock":3},classes:{"Fighter":-3,"Barbarian":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Sorcerer":-3,"Warlock":-3},classes:{"Fighter":3,"Barbarian":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather move through the battlefield with a companion or creature helping you?",answers:[["YES",{classes:{"Ranger":3,"Druid":3},classes:{"Monk":-3,"Rogue":-3,"Wizard":-3},flavor:true}],["NO",{classes:{"Ranger":-3,"Druid":-3},classes:{"Monk":3,"Rogue":3,"Wizard":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather maintain damage with repeated weapon attacks than repeated spells?",answers:[["YES",{classes:{"Fighter":3,"Ranger":3,"Rogue":3,"Barbarian":3},classes:{"Wizard":-3,"Sorcerer":-3,"Warlock":-3},flavor:true}],["NO",{classes:{"Fighter":-3,"Ranger":-3,"Rogue":-3,"Barbarian":-3},classes:{"Wizard":3,"Sorcerer":3,"Warlock":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather cast a lot of spells throughout a fight?",answers:[["YES",{classes:{"Wizard":3,"Sorcerer":3,"Warlock":3,"Cleric":3,"Druid":3,"Bard":3},classes:{"Fighter":-3,"Barbarian":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Sorcerer":-3,"Warlock":-3,"Cleric":-3,"Druid":-3,"Bard":-3},classes:{"Fighter":3,"Barbarian":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use a bow or other ranged weapon as your main attack?",answers:[["YES",{classes:{"Ranger":3,"Fighter":3,"Rogue":3},classes:{"Wizard":-3,"Sorcerer":-3,"Cleric":-3},flavor:true}],["NO",{classes:{"Ranger":-3,"Fighter":-3,"Rogue":-3},classes:{"Wizard":3,"Sorcerer":3,"Cleric":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather maintain magical effects than make repeated weapon attacks?",answers:[["YES",{classes:{"Wizard":3,"Warlock":3,"Druid":3,"Cleric":3,"Bard":3},classes:{"Fighter":-3,"Rogue":-3,"Barbarian":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Warlock":-3,"Druid":-3,"Cleric":-3,"Bard":-3},classes:{"Fighter":3,"Rogue":3,"Barbarian":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather fight with two heavy weapons than with spells or a shield?",answers:[["YES",{classes:{"Fighter":3,"Barbarian":3},classes:{"Wizard":-3,"Cleric":-3,"Paladin":-3},flavor:true}],["NO",{classes:{"Fighter":-3,"Barbarian":-3},classes:{"Wizard":3,"Cleric":3,"Paladin":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather fight from range with a companion or summon supporting you?",answers:[["YES",{classes:{"Ranger":3},classes:{"Fighter":-3,"Wizard":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Ranger":-3},classes:{"Fighter":3,"Wizard":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather control enemies with arcane magic than with martial techniques?",answers:[["YES",{classes:{"Wizard":3,"Sorcerer":3,"Warlock":3},classes:{"Fighter":-3,"Monk":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Sorcerer":-3,"Warlock":-3},classes:{"Fighter":3,"Monk":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather control the battlefield with summoned creatures or objects?",answers:[["YES",{classes:{"Wizard":3,"Druid":3,"Artificer":3},classes:{"Fighter":-3,"Rogue":-3,"Monk":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Druid":-3,"Artificer":-3},classes:{"Fighter":3,"Rogue":3,"Monk":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather control enemies through fear, curses, or dark magic?",answers:[["YES",{classes:{"Warlock":3,"Death Knight":3},classes:{"Bard":-3,"Wizard":-3},flavor:true}],["NO",{classes:{"Warlock":-3,"Death Knight":-3},classes:{"Bard":3,"Wizard":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather control enemies through social influence, charm, or words?",answers:[["YES",{classes:{"Bard":3},classes:{"Wizard":-3,"Warlock":-3},flavor:true}],["NO",{classes:{"Bard":-3},classes:{"Wizard":3,"Warlock":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather control enemies by changing the terrain or natural environment?",answers:[["YES",{classes:{"Druid":3,"Ranger":3},classes:{"Wizard":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Druid":-3,"Ranger":-3},classes:{"Wizard":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use psychic effects to control or disrupt enemies?",answers:[["YES",{classes:{"Warlock":3,"Sorcerer":3,"Monk":3,"Rogue":3},classes:{"Fighter":-3,"Barbarian":-3},flavor:true}],["NO",{classes:{"Warlock":-3,"Sorcerer":-3,"Monk":-3,"Rogue":-3},classes:{"Fighter":3,"Barbarian":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather heal yourself through magic than rely on armor?",answers:[["YES",{classes:{"Cleric":3,"Druid":3,"Sorcerer":3,"Warlock":3},classes:{"Fighter":-3,"Paladin":-3,"Barbarian":-3},flavor:true}],["NO",{classes:{"Cleric":-3,"Druid":-3,"Sorcerer":-3,"Warlock":-3},classes:{"Fighter":3,"Paladin":3,"Barbarian":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather prevent damage with protective magic than restore HP afterward?",answers:[["YES",{classes:{"Wizard":3,"Cleric":3,"Paladin":3,"Artificer":3},classes:{"Druid":-3,"Rogue":-3,"Barbarian":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Cleric":-3,"Paladin":-3,"Artificer":-3},classes:{"Druid":3,"Rogue":3,"Barbarian":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather survive through regeneration or self-healing than high AC?",answers:[["YES",{classes:{"Barbarian":3,"Druid":3,"Cleric":3},classes:{"Fighter":-3,"Paladin":-3,"Artificer":-3},flavor:true}],["NO",{classes:{"Barbarian":-3,"Druid":-3,"Cleric":-3},classes:{"Fighter":3,"Paladin":3,"Artificer":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather have heavy armor even if it limits your mobility?",answers:[["YES",{classes:{"Fighter":3,"Paladin":3,"Death Knight":3,"Artificer":3},classes:{"Monk":-3,"Rogue":-3,"Sorcerer":-3},flavor:true}],["NO",{classes:{"Fighter":-3,"Paladin":-3,"Death Knight":-3,"Artificer":-3},classes:{"Monk":3,"Rogue":3,"Sorcerer":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use shields and armor as your primary defense?",answers:[["YES",{classes:{"Fighter":3,"Paladin":3,"Artificer":3},classes:{"Wizard":-3,"Sorcerer":-3,"Monk":-3},flavor:true}],["NO",{classes:{"Fighter":-3,"Paladin":-3,"Artificer":-3},classes:{"Wizard":3,"Sorcerer":3,"Monk":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather protect yourself with magical wards and barriers?",answers:[["YES",{classes:{"Wizard":3,"Cleric":3,"Artificer":3,"Sorcerer":3},classes:{"Barbarian":-3,"Fighter":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Cleric":-3,"Artificer":-3,"Sorcerer":-3},classes:{"Barbarian":3,"Fighter":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather support allies with inspiration-style buffs?",answers:[["YES",{classes:{"Bard":3},classes:{"Cleric":-3,"Druid":-3,"Artificer":-3},flavor:true}],["NO",{classes:{"Bard":-3},classes:{"Cleric":3,"Druid":3,"Artificer":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather support allies by changing the battlefield with spells?",answers:[["YES",{classes:{"Wizard":3,"Druid":3},classes:{"Fighter":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Druid":-3},classes:{"Fighter":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather support allies with healing and protection?",answers:[["YES",{classes:{"Cleric":3,"Paladin":3,"Druid":3},classes:{"Bard":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Cleric":-3,"Paladin":-3,"Druid":-3},classes:{"Bard":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather support allies with inventions, gadgets, and infusions?",answers:[["YES",{classes:{"Artificer":3},classes:{"Bard":-3,"Cleric":-3},flavor:true}],["NO",{classes:{"Artificer":-3},classes:{"Bard":3,"Cleric":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather support the party through a companion or summoned creature?",answers:[["YES",{classes:{"Ranger":3,"Druid":3,"Artificer":3},classes:{"Bard":-3,"Cleric":-3},flavor:true}],["NO",{classes:{"Ranger":-3,"Druid":-3,"Artificer":-3},classes:{"Bard":3,"Cleric":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather support allies by manipulating dice, rolls, or probability?",answers:[["YES",{classes:{"Sorcerer":3,"Wizard":3,"Bard":3},classes:{"Fighter":-3,"Barbarian":-3,"Ranger":-3},flavor:true}],["NO",{classes:{"Sorcerer":-3,"Wizard":-3,"Bard":-3},classes:{"Fighter":3,"Barbarian":3,"Ranger":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather cast many ranged spells than use a ranged weapon?",answers:[["YES",{classes:{"Wizard":3,"Sorcerer":3,"Warlock":3,"Cleric":3,"Druid":3,"Bard":3},classes:{"Ranger":-3,"Fighter":-3,"Rogue":-3},flavor:true}],["NO",{classes:{"Wizard":-3,"Sorcerer":-3,"Warlock":-3,"Cleric":-3,"Druid":-3,"Bard":-3},classes:{"Ranger":3,"Fighter":3,"Rogue":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use a bow or firearm from a distance?",answers:[["YES",{classes:{"Ranger":3,"Fighter":3,"Rogue":3},classes:{"Wizard":-3,"Sorcerer":-3,"Warlock":-3},flavor:true}],["NO",{classes:{"Ranger":-3,"Fighter":-3,"Rogue":-3},classes:{"Wizard":3,"Sorcerer":3,"Warlock":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather attack from range with a magical companion or construct?",answers:[["YES",{classes:{"Ranger":3,"Artificer":3},classes:{"Fighter":-3,"Rogue":-3,"Wizard":-3},flavor:true}],["NO",{classes:{"Ranger":-3,"Artificer":-3},classes:{"Fighter":3,"Rogue":3,"Wizard":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather use ranged attacks that come from elemental magic?",answers:[["YES",{classes:{"Sorcerer":3,"Wizard":3,"Druid":3},classes:{"Ranger":-3,"Fighter":-3},flavor:true}],["NO",{classes:{"Sorcerer":-3,"Wizard":-3,"Druid":-3},classes:{"Ranger":3,"Fighter":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather fight at range while wearing heavy armor?",answers:[["YES",{classes:{"Artificer":3,"Fighter":3},classes:{"Rogue":-3,"Ranger":-3,"Wizard":-3},flavor:true}],["NO",{classes:{"Artificer":-3,"Fighter":-3},classes:{"Rogue":3,"Ranger":3,"Wizard":3},flavor:true}]]},
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather have your ranged attacks come from a spellbook than from equipment?",answers:[["YES",{classes:{"Wizard":3},classes:{"Fighter":-3,"Ranger":-3,"Rogue":-3,"Artificer":-3},flavor:true}],["NO",{classes:{"Wizard":-3},classes:{"Fighter":3,"Ranger":3,"Rogue":3,"Artificer":3},flavor:true}]]}
];


const CORE_COUNT = 24;
const ADAPTIVE_COUNT = 13;
const QUIZ_LENGTH = CORE_COUNT + ADAPTIVE_COUNT;
const TRAITS = ["aoe","singleTarget","burst","sustained","tank","healing","utility","control","mobility","defense","support","range","chaos","skills"];
const TRAIT_LABELS = {aoe:"AoE",singleTarget:"Single-Target DPS",burst:"Burst",sustained:"Sustained DPS",tank:"Tanking",healing:"Healing",utility:"Utility",control:"Crowd Control",mobility:"Mobility",defense:"Defense",support:"Party Support",range:"Ranged Combat",chaos:"Chaos",skills:"Skills & Tools"};

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
  "Bard:College of Encouragement":"Uses inspiration to improve critical-hit chances.",
  "Bard:College of Leadership":"Uses inspiration for temporary HP and tanking support.",
  "Cleric:Pestilence":"Uses poisons to deal heavy damage.",
  "Druid:Circle of Fangs":"A Moon Druid variant focused purely on damage.",
  "Druid:Circle of Fey":"A Moon Druid variant combining wild magic with monster wildshapes.",
  "Druid:Circle of Drakes":"Wildshapes into potent dragon forms with a damage and AoE focus.",
  "Fighter:Titan":"A very strong fighter who fights with two heavy weapons.",
  "Fighter:Soul Cleaver":"Uses souls to heal and deal ranged damage.",
  "Monk:Way of Lethality":"Uses daggers, bleeding effects, and lethal close-range techniques.",
  "Paladin:Oath of Hearth":"Uses healing pool for advanced healing.",
  "Paladin:Oath of Stability":"Cannot be banished and can exile foes into sub-planes.",
  "Ranger:Shelter Conclave":"Focuses on tanking and being the apex predator.",
  "Ranger:Royalty Conclave":"Focuses on roleplay and complex magic used on people rather than beasts.",
  "Rogue:Medic":"A Rogue focused on healing while incorporating sneak attack.",
  "Rogue:Outlaw":"Uses RNG rolls to gain different buffs.",
  "Rogue:Shadow Archer":"Uses advanced ranged techniques with sneak attack.",
  "Sorcerer:Fate":"Manipulates dice rolls and probability.",
  "Sorcerer:Soul Shield":"A tanky Sorcerer with increased AC and temporary HP.",
  "Sorcerer:Soundboost":"Uses thunder and sound-based damage.",
  "Wizard:Transmogrification":"Uses polymorphs to become powerful, tanky beasts.",
  "Artificer:Researcher":"Becomes a fullcaster focused on damaging magic with some support."
};


/*
 * REBALANCED SUBCLASS ENGINE
 * - Uses subclass features through level 12 only.
 * - Class identity is no longer allowed to overwhelm subclass identity.
 * - Negative player preferences are meaningful.
 * - Final-fantasy NO answers can hard-exclude strongly matching subclasses.
 * - Incidental/late-game abilities are not used as subclass-role evidence.
 */

const CLASS_PROFILES = {
  Barbarian:{tank:5,defense:4,sustained:4,burst:3,mobility:2,aoe:2,singleTarget:3,healing:0,utility:1,control:1,support:1,range:0,chaos:1},
  Bard:{skills:12,support:5,utility:5,control:3,healing:2,mobility:2,range:2,burst:2,defense:1,aoe:2,sustained:2,singleTarget:1,tank:0,chaos:1},
  Cleric:{healing:5,support:4,defense:4,utility:3,aoe:3,control:2,sustained:2,burst:2,tank:2,singleTarget:2,mobility:1,range:2,chaos:0},
  Druid:{aoe:4,control:4,utility:4,healing:4,support:3,sustained:3,mobility:2,defense:2,range:2,burst:2,singleTarget:2,tank:2,chaos:1},
  Fighter:{singleTarget:4,sustained:5,burst:4,tank:4,defense:3,range:2,aoe:2,mobility:2,utility:2,control:1,support:0,healing:0,chaos:0},
  Monk:{mobility:5,sustained:4,singleTarget:4,control:3,defense:3,burst:3,aoe:2,utility:2,tank:2,range:1,support:1,healing:0,chaos:0},
  Paladin:{tank:5,defense:5,support:4,burst:4,healing:2,singleTarget:3,sustained:2,control:2,utility:2,aoe:2,mobility:1,range:1,chaos:0},
  Ranger:{skills:12,range:5,singleTarget:4,sustained:4,mobility:4,utility:3,burst:3,control:2,aoe:2,defense:2,support:2,healing:0,tank:1,chaos:0},
  Rogue:{skills:12,singleTarget:5,burst:5,mobility:4,utility:4,sustained:3,range:3,control:2,aoe:1,defense:1,support:1,healing:0,tank:0,chaos:1},
  Sorcerer:{burst:5,aoe:4,range:4,sustained:3,control:3,singleTarget:3,utility:3,mobility:2,defense:1,support:1,healing:0,tank:0,chaos:2},
  Warlock:{sustained:4,singleTarget:4,burst:4,range:4,control:4,utility:3,aoe:3,defense:1,support:1,mobility:2,healing:0,tank:0,chaos:1},
  Wizard:{utility:5,control:5,aoe:5,burst:4,range:4,singleTarget:3,sustained:3,defense:2,mobility:2,support:1,healing:0,tank:0,chaos:0},
  Artificer:{skills:12,utility:5,support:4,defense:4,range:3,sustained:3,control:3,aoe:2,singleTarget:2,burst:2,mobility:2,healing:1,tank:3,chaos:1},
  "Death Knight":{tank:5,defense:5,singleTarget:4,burst:4,sustained:3,control:3,healing:0,support:1,aoe:2,mobility:1,utility:2,range:1,chaos:0}
};

/*
 * These are role tags, not a claim that the subclass can ONLY do this.
 * They represent a meaningful subclass identity from features available by level 12.
 * "healing" means meaningful subclass-granted healing/recovery, not a generic class
 * spell list or an incidental high-level effect.
 */
const SUBCLASS_TAGS = {
  healing:[
    "Life Domain","Peace Domain","Grave Domain","Circle of Dreams","Circle of the Shepherd",
    "Circle of Wildfire","Way of Mercy","College of Spirits","Divine Soul","The Celestial",
    "Alchemist","Path of Rejuvenation","Path of Time","Oath of Hearth","Medic","Soul Cleaver"
  ],
  tank:[
    "Path of the Totem Warrior","Path of the Ancestral Guardian","Path of the Battlerager",
    "Circle of the Moon","Armorer","Battle Smith","Cavalier","Rune Knight","Oath of the Crown",
    "Oath of Redemption","Oath of Conquest","Oath of Stability","Shelter Conclave",
    "Soul Shield","Titan","War Magic","School of Abjuration","Twilight Domain","Forge Domain",
    "Way of the Long Death"
  ],
  stealth:[
    "Thief","Assassin","Scout","Arcane Trickster","Mastermind","Inquisitive","Way of Shadow",
    "Gloom Stalker","Phantom","Swashbuckler","Outlaw","Shadow Archer","Soulknife"
  ],
  ranged:[
    "Arcane Archer","Gunslinger","Shadow Archer","Gloom Stalker","Circle of Stars",
    "Artillerist","Hunter","Swarmkeeper","Drakewarden","Horizon Walker","Beast Master"
  ],
  nature:[
    "Circle of the Land","Circle of the Land (Coast)","Circle of the Land (Forest)",
    "Circle of the Land (Underdark)","Circle of the Land (Grassland)","Circle of the Land (Swamp)",
    "Circle of the Land (Mountain)","Circle of the Land (Desert)","Circle of the Land (Arctic)",
    "Circle of Spores","Circle of Stars","Circle of Dreams","Circle of the Shepherd",
    "Circle of Wildfire","Circle of the Moon","Circle of Fangs","Circle of Fey","Circle of Drakes",
    "Fey Wanderer","Gloom Stalker","Monster Slayer","Swarmkeeper","Hunter","Beast Master",
    "Drakewarden","Horizon Walker","Shelter Conclave","Royalty Conclave"
  ],
  chaos:[
    "Path of Wild Magic","Circle of Fey","College of Spirits","Outlaw","Wild Magic","Alchemist","Fate"
  ],
  holy:[
    "War Domain","Peace Domain","Grave Domain","Light Domain","Twilight Domain","Life Domain",
    "Forge Domain","Nature Domain","Order Domain","Oath of Devotion","Oath of Vengeance",
    "Oath of the Ancients","Oath of Redemption","Oath of Glory","Oath of the Crown",
    "Oath of Conquest","Oath of the Watchers","Divine Soul","The Celestial","Path of the Zealot",
    "Oath of Hearth"
  ]
};

const SUBCLASS_SIGNALS = {
  "War Domain":{singleTarget:2.5,burst:2,defense:1},
  "Grave Domain":{healing:2.5,control:1.5,singleTarget:1.5,utility:1},
  "Peace Domain":{healing:2,support:3,defense:2,utility:2},
  "Light Domain":{aoe:3,burst:2,range:1},
  "Tempest Domain":{aoe:2.5,burst:2,sustained:1},
  "Trickery Domain":{utility:2.5,mobility:2,control:2},
  "Death Domain":{singleTarget:2.5,burst:2,aoe:1.5},
  "Twilight Domain":{defense:3,support:2.5,mobility:1},
  "Arcana Domain":{utility:2.5,control:1.5,range:1},
  "Forge Domain":{defense:3,tank:2,singleTarget:1.5},
  "Knowledge Domain":{utility:3,support:1.5,control:1},
  "Entropy Domain":{control:2.5,utility:2,chaos:1},
  "Nature Domain":{control:2,utility:2,defense:1},
  "Life Domain":{healing:4,support:3,defense:1},
  "Order Domain":{support:3,control:2,utility:1},
  "Circle of Spores":{sustained:2.5,defense:2,singleTarget:1.5},
  "Circle of Stars":{range:2.5,utility:2,support:1.5},
  "Circle of Dreams":{healing:4,support:2,utility:1.5,mobility:1},
  "Circle of the Moon":{tank:3,defense:3,sustained:2},
  "Circle of Wildfire":{aoe:3,burst:2,healing:2,support:1,range:1},
  "Circle of the Shepherd":{support:3,utility:2,healing:2,defense:1},
  "Circle of the Land":{utility:2.5,control:2,aoe:1.5},
  "Circle of the Land (Coast)":{utility:2.5,range:1.5,control:1.5},
  "Circle of the Land (Forest)":{control:2,utility:2},
  "Circle of the Land (Underdark)":{control:2,utility:2,range:1},
  "Circle of the Land (Grassland)":{utility:2,range:1,sustained:1},
  "Circle of the Land (Swamp)":{control:2,aoe:1.5,utility:1.5},
  "Circle of the Land (Mountain)":{defense:1.5,control:1.5,utility:2},
  "Circle of the Land (Desert)":{aoe:2,utility:1.5,defense:1},
  "Circle of the Land (Arctic)":{control:2,aoe:1.5,utility:1.5},
  "Circle of Fangs":{singleTarget:3,burst:2.5,sustained:2},
  "Circle of Fey":{chaos:3,control:2.5,utility:2,burst:1.5},
  "Circle of Drakes":{aoe:3,burst:2,range:1},
  "Samurai":{burst:2.5,singleTarget:2.5,defense:1},
  "Echo Knight":{mobility:3,utility:2.5,burst:2},
  "Gunslinger":{range:3,singleTarget:2.5,burst:2},
  "Eldritch Knight":{singleTarget:2,defense:2,utility:1.5,range:1},
  "Arcane Archer":{range:3,burst:2,control:1.5},
  "Rune Knight":{tank:2.5,defense:2.5,control:2,utility:1},
  "Psi Warrior":{defense:2.5,control:2,utility:2},
  "Cavalier":{tank:3,defense:3,support:1.5},
  "Champion":{sustained:3,singleTarget:2.5,burst:2},
  "Purple Dragon Knight":{support:2,defense:1.5},
  "Battle Master":{utility:3,control:2.5,sustained:2},
  "Titan":{tank:2,singleTarget:3,sustained:2},
  "Soul Cleaver":{healing:3,range:2,singleTarget:2},
  "Way of the Drunken Master":{mobility:3,defense:2,utility:1.5},
  "Way of the Open Hand":{control:2.5,defense:2,mobility:2},
  "Way of the Long Death":{tank:2.5,defense:3,singleTarget:2},
  "Way of the Ascendant Dragon":{aoe:2.5,range:1.5,mobility:2},
  "Way of Shadow":{stealth:3,mobility:2.5,control:2},
  "Way of Mercy":{healing:4,support:2,singleTarget:2},
  "Way of the Four Elements":{aoe:2.5,control:2,range:1},
  "Way of the Cobalt Soul":{utility:2.5,control:2,singleTarget:1.5},
  "Way of the Sun Soul":{range:2.5,aoe:2,burst:1},
  "Way of the Astral Self":{range:2,control:2,utility:1.5},
  "Way of the Kensei":{range:2,singleTarget:2.5,defense:1.5},
  "Way of Lethality":{singleTarget:3,burst:2.5,mobility:1.5},
  "Oath of Vengeance":{burst:3,singleTarget:2.5,mobility:1},
  "Oath of the Ancients":{defense:3,support:2,control:1.5},
  "Oath of the Crown":{tank:3,defense:3,support:2},
  "Oath of Redemption":{tank:2.5,defense:3,support:2.5,healing:1},
  "Oath of Glory":{mobility:2,burst:2,support:1.5},
  "Oath of the Open Sea":{mobility:2,control:2,range:1},
  "Oath of the Watchers":{defense:2,control:2,support:1.5},
  "Oath of Devotion":{holy:2,defense:2,support:1.5},
  "Oath of Conquest":{control:3,tank:2,burst:2},
  "Oathbreaker":{burst:2.5,control:2,singleTarget:2},
  "Oath of Hearth":{healing:4,support:2.5,defense:1},
  "Oath of Stability":{tank:2.5,defense:3,control:2,utility:1},
  "Fey Wanderer":{nature:1,utility:2,control:2,support:1.5},
  "Gloom Stalker":{stealth:2.5,range:2.5,burst:2,mobility:2},
  "Monster Slayer":{singleTarget:2.5,utility:2,control:1},
  "Swarmkeeper":{control:2,range:2,utility:1.5},
  "Hunter":{range:2,sustained:2.5,singleTarget:2},
  "Beast Master":{support:2,sustained:2,utility:2},
  "Drakewarden":{support:2,range:1.5,sustained:2},
  "Horizon Walker":{mobility:2.5,range:2,utility:1.5},
  "Shelter Conclave":{tank:3,defense:3,singleTarget:1.5},
  "Royalty Conclave":{utility:3,control:2,support:2},
  "Thief":{stealth:2,utility:2.5,mobility:2},
  "Soulknife":{stealth:1.5,utility:2,mobility:2,range:1.5},
  "Mastermind":{utility:3,support:2,control:1},
  "Arcane Trickster":{stealth:2,utility:2.5,control:2,range:1},
  "Phantom":{stealth:2,singleTarget:2,sustained:1.5},
  "Inquisitive":{utility:2.5,singleTarget:2,control:1},
  "Scout":{stealth:2,mobility:2.5,range:1.5},
  "Swashbuckler":{mobility:3,singleTarget:2.5,burst:1.5},
  "Assassin":{stealth:3,burst:3,singleTarget:2},
  "Medic":{healing:4,utility:2,singleTarget:1},
  "Outlaw":{chaos:3,burst:2.5,utility:2,mobility:1.5},
  "Shadow Archer":{range:3,stealth:2,singleTarget:2.5,burst:1.5},
  "Aberrant Mind":{control:2.5,utility:2,range:1,chaos:1},
  "Divine Soul":{healing:3,holy:3,support:2,utility:2},
  "Clockwork Soul":{defense:2.5,control:2,utility:2},
  "Storm Sorcery":{aoe:2,range:2,mobility:2,burst:1.5},
  "Draconic Bloodline":{burst:2,aoe:2,defense:1,range:1},
  "Wild Magic":{chaos:4,burst:2,utility:1},
  "Shadow Magic":{control:2.5,defense:2,mobility:1.5},
  "Fate":{chaos:2.5,utility:3,support:2.5,control:1.5},
  "Soul Shield":{tank:3,defense:3,support:1},
  "Soundboost":{aoe:2.5,burst:2,range:1.5},
  "The Genie":{sustained:2.5,singleTarget:2.5,burst:2,range:2,utility:1.5,defense:1},
  "The Hexblade":{singleTarget:3,burst:2.5,defense:1.5},
  "The Fiend":{burst:3,aoe:2,defense:1},
  "The Fathomless":{control:2.5,aoe:2,range:1.5},
  "The Undying":{defense:2,utility:1.5,sustained:1.5},
  "The Celestial":{healing:4,support:3,range:1,holy:3},
  "The Great Old One":{control:3,utility:2,range:1},
  "The Archfey":{control:2.5,utility:2,mobility:1.5},
  "The Undead":{burst:2,control:2,defense:1.5},
  "Arch Devil":{burst:2.5,control:2,utility:1},
  "School of Illusion":{control:3,utility:2.5},
  "School of Evocation":{aoe:3.5,burst:2.5,range:1.5},
  "School of Necromancy":{sustained:2.5,singleTarget:2,utility:1.5},
  "School of Abjuration":{defense:3.5,utility:2.5},
  "School of Conjuration":{utility:2.5,control:2,range:1},
  "School of Enchantment":{control:3,utility:2},
  "Graviturgy Magic":{control:2.5,utility:2,aoe:1},
  "War Magic":{defense:3,burst:2,utility:2},
  "School of Divination":{utility:3,support:2,control:1.5},
  "Bladesinging":{mobility:2.5,defense:2,singleTarget:2,sustained:1.5},
  "School of Transmutation":{utility:3,defense:1.5,control:1.5},
  "Chronurgy Magic":{utility:3,control:2.5,support:1},
  "Order of Scribes":{utility:3,range:1.5,aoe:1.5},
  "Transmogrification":{tank:3,defense:2.5,utility:1.5},
  "Armorer":{tank:3.5,defense:3,utility:1.5},
  "Battle Smith":{tank:2,defense:2,support:2,sustained:2},
  "Alchemist":{healing:4,utility:2.5,support:2,aoe:1},
  "Artillerist":{aoe:2.5,range:2.5,burst:2},
  "Researcher":{utility:3,range:2,support:1.5}
};

const CHAOS_SUBCLASSES=new Set([
  "Path of Wild Magic","Circle of Fey","College of Spirits","Outlaw","Wild Magic","Alchemist","Fate"
]);

const HARD_HEALING_SUBCLASSES=new Set(SUBCLASS_TAGS.healing);
const HARD_TANK_SUBCLASSES=new Set(SUBCLASS_TAGS.tank);
const HARD_STEALTH_SUBCLASSES=new Set(SUBCLASS_TAGS.stealth);
const HARD_RANGE_SUBCLASSES=new Set(SUBCLASS_TAGS.ranged);

const SPELLCASTER_CLASSES=new Set(["Bard","Cleric","Druid","Paladin","Ranger","Sorcerer","Warlock","Wizard","Artificer","Death Knight"]);
const SPELLCASTING_SUBCLASSES=new Set(["Eldritch Knight","Arcane Trickster","Way of the Four Elements","Way of the Sun Soul"]);

function buildSubclassProfile(cls,sub){
  const p={};
  const base=CLASS_PROFILES[cls]||{};
  for(const t of TRAITS) p[t]=(base[t]||0)*0.25;

  // Existing archetype associations from the earlier build are intentionally retained,
  // but their influence is reduced so a subclass's actual identity matters more.
  const lower=sub.toLowerCase();
  const archetypeMap={
    aoe:["evocation","wildfire","drakes","fangs","storm","soundboost","four elements","light","tempest","artillerist","fiend","undead","sun soul","draconic"],
    control:["enchantment","illusion","graviturgy","chronurgy","fathomless","great old one","archfey","aberrant mind","open hand","ascendant dragon","trickery","entropy","cobalt soul","conjuration","fey"],
    burst:["assassin","vengeance","champion","samurai","gloom stalker","arcane archer","evocation","draconic","wild magic","storm sorcery","fiend","hexblade","bladesinging","titan","lethality"],
    sustained:["champion","hunter","battle master","battlerager","berserker","beast","spores","land","bladesinging","swords","valor","thief","swarmkeeper","kensei","war magic","artillerist"],
    utility:["lore","mastermind","inquisitive","arcane trickster","divination","scribes","conjuration","transmutation","researcher","alchemist","knowledge","order","cobalt soul","creation","echo knight","clockwork","fey wanderer","horizon walker","genie"],
    mobility:["swashbuckler","scout","shadow","echo knight","horizon walker","fey wanderer","drunken master","open sea","gloom stalker","astral self","ascendant dragon","thief"],
    defense:["abjuration","armorer","rune knight","psi warrior","redemption","devotion","crown","stability","twilight","forge","soul shield","clockwork","ancestral guardian","totem warrior","kensei"],
    support:["leadership","encouragement","peace","order","glamour","creation","lore","valor","spirits","shepherd","celestial","divine soul","researcher","royalty","time","rejuvenation","battle smith"],
    range:["arcane archer","gunslinger","shadow archer","gloom stalker","hunter","beast master","swarmkeeper","horizon walker","stars","coast","artillerist","eldritch knight","war magic","genie","great old one"],
    singleTarget:["assassin","vengeance","monster slayer","hunter","champion","samurai","soulknife","hexblade","death","whispers","bladesinging","kensei","lethality","titan","draconic","pestilence"]
  };
  for(const [trait,names] of Object.entries(archetypeMap)){
    if(names.some(n=>lower.includes(n))) p[trait]=(p[trait]||0)+0.8;
  }
  addVector(p,SUBCLASS_SIGNALS[sub],1);
  if(CHAOS_SUBCLASSES.has(sub)) p.chaos=(p.chaos||0)+2.5;
  return normalizeVector(p);
}

function addVector(target,source,multiplier=1){
  if(!source) return;
  for(const [k,v] of Object.entries(source)) target[k]=(target[k]||0)+v*multiplier;
}
function vectorNorm(v){return Math.sqrt(TRAITS.reduce((sum,t)=>sum+Math.pow(v[t]||0,2),0))||1;}
function normalizeVector(v){const n=vectorNorm(v);const out={};for(const t of TRAITS)out[t]=(v[t]||0)/n;return out;}

const CLASS_PROFILE_NORMALIZED={};
for(const cls of Object.keys(CLASS_PROFILES)) CLASS_PROFILE_NORMALIZED[cls]=normalizeVector(CLASS_PROFILES[cls]);

const PROFILE_CACHE={};
for(const cls of Object.keys(CLASS_DATA)){
  PROFILE_CACHE[cls]={};
  for(const sub of CLASS_DATA[cls]) PROFILE_CACHE[cls][sub]=buildSubclassProfile(cls,sub);
}

function shuffled(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

function signedCosine(player,profile){
  let dot=0,pn=0,qn=0;
  for(const t of TRAITS){
    const p=player[t]||0,q=profile[t]||0;
    dot+=p*q; pn+=p*p; qn+=q*q;
  }
  return dot/((Math.sqrt(pn)||1)*(Math.sqrt(qn)||1));
}

function positiveCosine(player,profile){
  let dot=0,pn=0,qn=0;
  for(const t of TRAITS){
    const p=Math.max(0,player[t]||0),q=Math.max(0,profile[t]||0);
    dot+=p*q;pn+=p*p;qn+=q*q;
  }
  return dot/((Math.sqrt(pn)||1)*(Math.sqrt(qn)||1));
}

function makeCoreSet(){
  const buckets={};
  QUESTIONS.filter(q=>q.phase==='core').forEach(q=>(buckets[q.trait]??=[]).push(q));
  const selected=[];
  for(const trait of TRAITS) selected.push(...shuffled(buckets[trait]||[]).slice(0,2));
  return shuffled(selected);
}

function subclassIsHardExcluded(cls,sub,locks){
  if(locks.healing && HARD_HEALING_SUBCLASSES.has(sub)) return true;
  if(locks.tank && HARD_TANK_SUBCLASSES.has(sub)) return true;
  if(locks.stealth && HARD_STEALTH_SUBCLASSES.has(sub)) return true;
  if(locks.range && HARD_RANGE_SUBCLASSES.has(sub)) return true;
  if(locks.nature && (cls==="Druid" || cls==="Ranger" || SUBCLASS_TAGS.nature.includes(sub))) return true;
  if(locks.magic && SPELLCASTER_CLASSES.has(cls)) return true;
  if(locks.magic && SPELLCASTING_SUBCLASSES.has(sub)) return true;
  if(locks.chaos && CHAOS_SUBCLASSES.has(sub)) return true;
  if(locks.holy && SUBCLASS_TAGS.holy.includes(sub)) return true;
  return false;
}

const TERM_EXPLANATIONS={
  "AoE":"AOE consists of dealing damage or effects in a large area, affecting many creatures at once.",
  "Crowd Control":"Crowd Control consists of inflicting status conditions or restricting what creatures can do.",
  "Burst":"Burst consists of dealing a ton of damage in a small window of time, such as 1 turn.",
  "Sustained DPS":"Sustain consists of dealing consistent damage that tends to be smaller amounts, but amounts to a grand total over time.",
  "Single-Target DPS":"Single-target consists of focusing an immense amount of damage on a singular target, picking them off one at a time.",
  "Tanking":"Tanking consists of keeping creatures focused on you and preventing harm towards your allies.",
  "Healing":"Healing consists of restoring health and vitality to yourself or allies",
  "Utility":"Utility consists of having many solutions to various problems that doesn't fall under healing or damage.",
  "Mobility":"Mobility consists of having lots of movement and ways to traverse the battlefield easily.",
  "Defense":"Defense consists of preventing or reducing damage through increased health, passive abilities, or armor.",
  "Party Support":"Support consists of focusing on abilities that aid your allies.",
  "Ranged Combat":"Range consists of being able to deal damage or use abilities not on the frontlines, keeping distance from your self and danger.",
  "Chaos":"Unpredictability consists of having RNG and random chance elements in your kit.",
  "Skills & Tools":"Skills and Tools is having your character focus on skill and/or tool checks, either have more than average or having expertise in said abilities.",
  "Class Fantasy":"Class Fantasy consists of the over all flavor of your character, serving certain roles in the dynamic of the class system."
};

const FINAL_FANTASY_QUESTIONS = [
  {category:"Class Fantasy",trait:"tank",phase:"final",weight:12,gate:"tank",text:"Do you want to be tanky?",answers:[
    ["YES",{traits:{tank:3,defense:2},classes:{Barbarian:4,Fighter:4,Paladin:4,"Death Knight":4,Artificer:3,Monk:1},weight:12}],
    ["NO",{traits:{tank:-3,defense:-1},classes:{Barbarian:-4,Fighter:-4,Paladin:-4,"Death Knight":-4,Artificer:-3,Monk:-1},weight:12}]
  ]},
  {category:"Class Fantasy",trait:"magic",phase:"final",weight:12,gate:"magic",text:"Do you want to cast magic?",answers:[
    ["YES",{traits:{utility:2,range:1},classes:{Cleric:4,Druid:4,Bard:4,Sorcerer:4,Warlock:4,Wizard:4,Artificer:4,Paladin:2,Ranger:2,"Death Knight":2},weight:12}],
    ["NO",{traits:{utility:-2,range:-1},classes:{Cleric:-5,Druid:-5,Bard:-5,Sorcerer:-5,Warlock:-5,Wizard:-5,Artificer:-5,Paladin:-3,Ranger:-3,"Death Knight":-3},weight:12}]
  ]},
  {category:"Class Fantasy",trait:"utility",phase:"final",weight:11,text:"Do you want to cast a lot of spells?",answers:[
    ["YES",{traits:{utility:3,range:1},classes:{Wizard:5,Sorcerer:5,Warlock:5,Cleric:4,Druid:4,Bard:4,Artificer:3},weight:11}],
    ["NO",{traits:{utility:-2},classes:{Wizard:-5,Sorcerer:-5,Warlock:-5,Cleric:-4,Druid:-4,Bard:-4,Artificer:-3},weight:11}]
  ]},
  {category:"Class Fantasy",trait:"healing",phase:"final",weight:12,gate:"healing",text:"Do you want healing to be a major part of your kit?",answers:[
    ["YES",{traits:{healing:4,support:2},classes:{Cleric:5,Druid:5,Bard:4,Paladin:3,Artificer:3,Sorcerer:2,Warlock:2,Monk:1},subclasses:Object.fromEntries([...HARD_HEALING_SUBCLASSES].map(s=>[s,7])),weight:12}],
    ["NO",{traits:{healing:-5,support:-1},classes:{Cleric:-3,Druid:-3,Bard:-2,Paladin:-2,Artificer:-2,Sorcerer:-1,Warlock:-1,Monk:-1},weight:12}]
  ]},
  {category:"Class Fantasy",trait:"support",phase:"final",weight:11,text:"Do you want helping allies to be a major part of your kit?",answers:[
    ["YES",{traits:{support:4,healing:1,utility:1},classes:{Bard:5,Cleric:4,Druid:4,Paladin:3,Artificer:4,Ranger:2,Sorcerer:2,Warlock:2},weight:11}],
    ["NO",{traits:{support:-3},classes:{Bard:-4,Cleric:-3,Druid:-3,Paladin:-2,Artificer:-3,Ranger:-1,Sorcerer:-1,Warlock:-1},weight:11}]
  ]},
  {category:"Class Fantasy",trait:"skills",phase:"final",weight:10,text:"Do you want to be good at skills or tools?",answers:[
    ["YES",{traits:{skills:7,utility:1},classes:{Bard:10,Rogue:10,Artificer:10,Ranger:10},weight:12}],
    ["NO",{traits:{skills:-1},classes:{Bard:-2,Rogue:-2,Artificer:-2,Ranger:-2},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"holy",phase:"final",weight:10,gate:"holy",text:"Do you want holy or radiant magic?",answers:[
    ["YES",{traits:{support:2,burst:2},classes:{Cleric:5,Paladin:5,Barbarian:2,Sorcerer:2,Warlock:1},weight:10}],
    ["NO",{traits:{support:-1},classes:{Cleric:-2,Paladin:-3,Barbarian:-1,Sorcerer:-1,Warlock:-1},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"aoe",phase:"final",weight:10,gate:"elemental",text:"Do you want elemental magic to be a big part of your character?",answers:[
    ["YES",{traits:{aoe:3,burst:1},classes:{Sorcerer:5,Wizard:5,Druid:4,Warlock:3,Cleric:2,Artificer:2},weight:10}],
    ["NO",{traits:{aoe:-2},classes:{Sorcerer:-3,Wizard:-3,Druid:-2,Warlock:-2},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"nature",phase:"final",weight:10,gate:"nature",text:"Do you want nature magic or shapeshifting?",answers:[
    ["YES",{traits:{utility:2,aoe:1},classes:{Druid:6,Ranger:4},weight:10}],
    ["NO",{traits:{utility:-1},classes:{Druid:-5,Ranger:-4},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"mobility",phase:"final",weight:10,gate:"stealth",text:"Do you want to rely on stealth and sneaking?",answers:[
    ["YES",{traits:{mobility:3,utility:1},classes:{Rogue:6,Ranger:3,Monk:3},weight:10}],
    ["NO",{traits:{mobility:-1},classes:{Rogue:-4,Ranger:-2,Monk:-1},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"range",phase:"final",weight:10,gate:"range",text:"Do you want to fight mainly from range?",answers:[
    ["YES",{traits:{range:4},classes:{Ranger:5,Fighter:4,Rogue:4,Wizard:3,Sorcerer:3,Warlock:3,Artificer:3},weight:10}],
    ["NO",{traits:{range:-4},classes:{Ranger:-4,Fighter:-2,Rogue:-2,Wizard:-1,Sorcerer:-1,Warlock:-1,Artificer:-1},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"singleTarget",phase:"final",weight:10,text:"Do you want to fight on the frontline with weapons?",answers:[
    ["YES",{traits:{singleTarget:3,tank:1},classes:{Fighter:5,Barbarian:5,Paladin:5,Monk:4,Rogue:3,Ranger:2,"Death Knight":5},weight:10}],
    ["NO",{traits:{singleTarget:-2},classes:{Fighter:-4,Barbarian:-4,Paladin:-4,Monk:-3,Rogue:-1,Ranger:-1,"Death Knight":-4},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"chaos",phase:"final",weight:12,gate:"chaos",text:"Do you want your abilities to be unpredictable or chaotic?",answers:[
    ["YES",{traits:{chaos:6,utility:1},classes:{Sorcerer:5,Barbarian:5,Druid:5,Rogue:4,Bard:4,Artificer:3},subclasses:Object.fromEntries([...CHAOS_SUBCLASSES].map(s=>[s,9])),weight:12}],
    ["NO",{traits:{chaos:-6},classes:{Sorcerer:-3,Barbarian:-3,Druid:-3,Rogue:-2,Bard:-2,Artificer:-2},weight:12}]
  ]}
];

let quizQuestions=[], current=0, answers=[];
function buildPlayerProfile(){
  const p={}; for(const t of TRAITS)p[t]=0;
  const classFlavor={}, subclassFlavor={}, locks={};
  answers.forEach((choice,qi)=>{
    if(choice===null)return;
    const q=quizQuestions[qi], a=q.answers[choice][1], w=a.weight||q.weight||1;
    addVector(p,a.traits,w);
    addVector(classFlavor,a.classes,w);
    addVector(subclassFlavor,a.subclasses,w);
    if(q.phase==="final" && q.gate==="healing" && choice===1) locks.healing=true;
    if(q.phase==="final" && q.gate==="tank" && choice===1) locks.tank=true;
    if(q.phase==="final" && q.gate==="magic" && choice===1) locks.magic=true;
    if(q.phase==="final" && q.gate==="stealth" && choice===1) locks.stealth=true;
    if(q.phase==="final" && q.gate==="range" && choice===1) locks.range=true;
    if(q.phase==="final" && q.gate==="nature" && choice===1) locks.nature=true;
    if(q.phase==="final" && q.gate==="chaos" && choice===1) locks.chaos=true;
    if(q.phase==="final" && q.gate==="holy" && choice===1) locks.holy=true;
  });
  return {traits:p,classes:classFlavor,subclasses:subclassFlavor,locks};
}

function classRanking(player){
  return Object.keys(CLASS_PROFILES).map(cls=>({
    name:cls,
    score:signedCosine(player.traits,CLASS_PROFILE_NORMALIZED[cls]) + ((player.classes[cls]||0)*0.04)
  })).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));
}

function subclassRanking(cls,player){
  const candidates=CLASS_DATA[cls].filter(sub=>!subclassIsHardExcluded(cls,sub,player.locks));
  const list=(candidates.length?candidates:CLASS_DATA[cls]).map(sub=>{
    const profileScore=signedCosine(player.traits,PROFILE_CACHE[cls][sub]);
    const direct=(player.subclasses[sub]||0)*0.08;
    return {
      name:sub,
      score:profileScore+direct,
      custom:!!CUSTOM_DESCRIPTIONS[`${cls}:${sub}`],
      description:CUSTOM_DESCRIPTIONS[`${cls}:${sub}`]||'',
      excluded:subclassIsHardExcluded(cls,sub,player.locks)
    };
  });
  return list.sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));
}

function selectAdaptive(){return shuffled(FINAL_FANTASY_QUESTIONS).slice(0,ADAPTIVE_COUNT);}
function startQuiz(){const core=makeCoreSet();quizQuestions=core;current=0;answers=Array(core.length).fill(null);showScreen('quiz-screen');renderQuestion();}
function showScreen(id){document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
function renderQuestion(){
  const q=quizQuestions[current];
  document.getElementById('question-category').textContent=q.category;
  document.getElementById('question-text').textContent=q.text;
  document.getElementById('progress-label').textContent=`${current+1} / ${QUIZ_LENGTH}`;
  document.getElementById('progress-bar').style.width=`${((current+1)/QUIZ_LENGTH)*100}%`;
  const help=document.getElementById('question-help');
  help.setAttribute('data-tooltip',TERM_EXPLANATIONS[q.category]||TERM_EXPLANATIONS['Class Fantasy']);
  help.setAttribute('aria-label',TERM_EXPLANATIONS[q.category]||TERM_EXPLANATIONS['Class Fantasy']);
  const wrap=document.getElementById('answers');
  wrap.innerHTML='';
  q.answers.forEach((a,i)=>{
    const b=document.createElement('button');
    b.className='answer'+(answers[current]===i?' selected':'');
    b.type='button';
    b.innerHTML=`<span class="answer-key">${a[0]}</span>`;
    b.onclick=()=>selectAnswer(i);
    wrap.appendChild(b);
    if(i===0){
      const random=document.createElement('button');
      random.className='answer random-answer';
      random.type='button';
      random.innerHTML='<span class="answer-key">RANDOM</span><small>Let chance decide</small>';
      random.onclick=()=>selectRandomAnswer();
      wrap.appendChild(random);
    }
  });
  document.getElementById('back-btn').disabled=current===0;
}
function selectRandomAnswer(){selectAnswer(Math.random()<0.5?0:1);}
function selectAnswer(i){answers[current]=i;if(current<CORE_COUNT-1){current++;renderQuestion();return;}if(current===CORE_COUNT-1){quizQuestions=quizQuestions.concat(selectAdaptive());answers=answers.concat(Array(ADAPTIVE_COUNT).fill(null));current++;renderQuestion();return;}if(current<QUIZ_LENGTH-1){current++;renderQuestion();return;}renderResults();}

const CLASS_RESULT_THEMES={"Barbarian":"theme-barbarian","Fighter":"theme-fighter","Cleric":"theme-cleric","Wizard":"theme-wizard","Druid":"theme-druid","Rogue":"theme-rogue","Sorcerer":"theme-sorcerer","Warlock":"theme-warlock","Bard":"theme-bard","Artificer":"theme-artificer","Paladin":"theme-paladin","Death Knight":"theme-death-knight","Monk":"theme-monk"};

const TRAIT_DETAIL_TEXT={
  aoe:"Area damage",
  singleTarget:"Single-target damage",
  burst:"Burst damage",
  sustained:"Sustained damage",
  tank:"Tanking",
  healing:"Healing",
  utility:"Utility",
  control:"Crowd control",
  mobility:"Mobility",
  defense:"Defense",
  support:"Party support",
  range:"Ranged combat",
  chaos:"Unpredictability",
  skills:"Skills & tools"
};

let detailReturnScreen="start-screen";
let detailReturnResults=null;

function subclassEntries(){
  const entries=[];
  for(const cls of Object.keys(CLASS_DATA)){
    for(const sub of CLASS_DATA[cls]){
      entries.push({cls,sub,profile:PROFILE_CACHE[cls][sub]});
    }
  }
  return entries;
}

function subclassFocuses(cls,sub){
  const profile=PROFILE_CACHE[cls][sub]||{};
  return TRAITS
    .map(t=>({trait:t,value:profile[t]||0}))
    .filter(x=>x.value>0.25)
    .sort((a,b)=>b.value-a.value)
    .slice(0,5);
}

function subclassSimilarity(a,b){
  return signedCosine(a.profile,b.profile);
}

function generatedSubclassDescription(cls,sub,focuses){
  if(CUSTOM_DESCRIPTIONS[`${cls}:${sub}`]) return CUSTOM_DESCRIPTIONS[`${cls}:${sub}`];
  const names=focuses.slice(0,3).map(x=>TRAIT_DETAIL_TEXT[x.trait].toLowerCase());
  if(!names.length) return `A ${cls} subclass with a distinct set of abilities and features.`;
  if(names.length===1) return `A ${cls} subclass that leans into ${names[0]}.`;
  if(names.length===2) return `A ${cls} subclass that leans into ${names[0]} and ${names[1]}.`;
  return `A ${cls} subclass that leans into ${names[0]}, ${names[1]}, and ${names[2]}.`;
}

function renderSubclassDetail(cls,sub,returnScreen="start-screen",returnResults=null){
  detailReturnScreen=returnScreen;
  const detailScreen=document.getElementById('subclass-screen');
  detailScreen.classList.add('class-themed');
  Object.values(CLASS_RESULT_THEMES).forEach(c=>detailScreen.classList.remove(c));
  if(CLASS_RESULT_THEMES[cls]) detailScreen.classList.add(CLASS_RESULT_THEMES[cls]);
  detailReturnResults=returnResults;
  const focuses=subclassFocuses(cls,sub);
  const desc=generatedSubclassDescription(cls,sub,focuses);
  document.getElementById('subclass-detail-class').textContent=cls.toUpperCase();
  document.getElementById('subclass-detail-name').textContent=sub;
  document.getElementById('subclass-detail-badge').classList.toggle('hidden',!CUSTOM_DESCRIPTIONS[`${cls}:${sub}`]);
  document.getElementById('subclass-detail-description').textContent=desc;

  const focusWrap=document.getElementById('subclass-focus');
  focusWrap.innerHTML=focuses.length
    ? focuses.map(x=>`<span class="focus-tag">${TRAIT_DETAIL_TEXT[x.trait]}</span>`).join('')
    : '<span class="focus-tag">Versatile</span>';

  const target={cls,sub,profile:PROFILE_CACHE[cls][sub]};
  const similar=subclassEntries()
    .filter(x=>!(x.cls===cls && x.sub===sub))
    .map(x=>({...x,similarity:subclassSimilarity(target,x)}))
    .sort((a,b)=>b.similarity-a.similarity||a.sub.localeCompare(b.sub))
    .slice(0,5);

  document.getElementById('subclass-similar').innerHTML=similar.map((x,i)=>`
    <button class="detail-match" type="button" data-detail-class="${escapeHtml(x.cls)}" data-detail-sub="${escapeHtml(x.sub)}">
      <span><b>${i+1}. ${escapeHtml(x.sub)}</b><small>${escapeHtml(x.cls)}${CUSTOM_DESCRIPTIONS[`${x.cls}:${x.sub}`]?" · CUSTOM":""}</small></span>
      <span class="detail-arrow">→</span>
    </button>`).join('');

  document.querySelectorAll('.detail-match').forEach(btn=>{
    btn.addEventListener('click',()=>{
      renderSubclassDetail(btn.dataset.detailClass,btn.dataset.detailSub,"subclass-screen",null);
    });
  });

  showScreen('subclass-screen');
}

function randomSubclass(){
  const entries=subclassEntries();
  const pick=entries[Math.floor(Math.random()*entries.length)];
  renderSubclassDetail(pick.cls,pick.sub,"start-screen",null);
}

function returnFromSubclassDetail(){
  const target=detailReturnScreen||"start-screen";
  const detailScreen=document.getElementById('subclass-screen');
  detailScreen.classList.remove('class-themed');
  Object.values(CLASS_RESULT_THEMES).forEach(c=>detailScreen.classList.remove(c));
  if(target==="results-screen"){
    showScreen("results-screen");
  }else{
    showScreen("start-screen");
  }
}

function renderResults(){
  const player=buildPlayerProfile(),classes=classRanking(player),winner=classes[0].name,subs=subclassRanking(winner,player),best=subs[0];
  const resultScreen=document.getElementById('results-screen');
  resultScreen.classList.add('class-themed');
  Object.values(CLASS_RESULT_THEMES).forEach(c=>resultScreen.classList.remove(c));
  if(CLASS_RESULT_THEMES[winner])resultScreen.classList.add(CLASS_RESULT_THEMES[winner]);

  document.getElementById('result-class').textContent=winner;
  const resultSubclass=document.getElementById('result-subclass');
  resultSubclass.textContent=best.name;
  resultSubclass.onclick=()=>renderSubclassDetail(winner,best.name,"results-screen",subs);
  document.getElementById('custom-badge').classList.toggle('hidden',!best.custom);
  document.getElementById('result-description').textContent=best.description||`Your answers most closely match the ${winner} — ${best.name} playstyle.`;

  const traitScores=TRAITS.map(t=>[t,player.traits[t]]).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const maxAbs=Math.max(...TRAITS.map(t=>Math.abs(player.traits[t]||0)),1);
  document.getElementById('trait-breakdown').innerHTML=`<div class="trait-grid">${traitScores.map(([t,v])=>{
    const width=Math.max(4,Math.min(100,(Math.abs(v)/maxAbs)*100));
    return `<div class="trait"><div class="trait-head"><span>${TRAIT_LABELS[t]}</span><b>${v>0?'+':''}${v}</b></div><div class="trait-track"><div class="trait-fill" style="width:${width}%"></div></div></div>`;
  }).join('')}</div>`;

  const reasons=document.getElementById('result-reasons');
  reasons.innerHTML='';
  traitScores.slice(0,4).forEach(([t])=>{
    const li=document.createElement('li');
    li.textContent=`Your choices leaned toward ${TRAIT_LABELS[t]}.`;
    reasons.appendChild(li);
  });

  const classWrap=document.getElementById('class-breakdown');
  const maxClass=Math.max(...classes.map(x=>x.score),.001);
  classWrap.innerHTML=classes.map(x=>`<div class="bar-row"><div class="bar-label"><span>${x.name}</span><span>${Math.round(x.score*100)}</span></div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(2,(x.score/maxClass)*100)}%"></div></div></div>`).join('');

  document.getElementById('subclass-matches').innerHTML=subs.slice(0,6).map((x,i)=>`
    <button class="match clickable-match" type="button" data-detail-class="${escapeHtml(winner)}" data-detail-sub="${escapeHtml(x.name)}">
      <span><b>${i+1}. ${escapeHtml(x.name)}</b>${x.custom?" <span class='mini-custom'>CUSTOM</span>":''}</span>
      <span class="match-arrow">→</span>
    </button>`).join('');

  document.querySelectorAll('.clickable-match').forEach(btn=>{
    btn.addEventListener('click',()=>renderSubclassDetail(btn.dataset.detailClass,btn.dataset.detailSub,"results-screen",subs));
  });

  showScreen('results-screen');
}

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('start-btn').addEventListener('click',startQuiz);
  document.getElementById('random-subclass-btn').addEventListener('click',randomSubclass);
  document.getElementById('subclass-back-btn').addEventListener('click',returnFromSubclassDetail);
  document.getElementById('back-btn').addEventListener('click',()=>{
    if(current>0){current--;renderQuestion();}
  });
  document.getElementById('restart-btn').addEventListener('click',()=>{
    quizQuestions=[];answers=[];current=0;
    const rs=document.getElementById('results-screen');
    rs.classList.remove('class-themed');
    Object.values(CLASS_RESULT_THEMES).forEach(c=>rs.classList.remove(c));
    showScreen('start-screen');
  });
});
