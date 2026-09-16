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
  {category:"Flavor",trait:"flavor",phase:"adaptive",text:"Would you rather support allies with Bardic Inspiration-style buffs?",answers:[["YES",{classes:{"Bard":3},classes:{"Cleric":-3,"Druid":-3,"Artificer":-3},flavor:true}],["NO",{classes:{"Bard":-3},classes:{"Cleric":3,"Druid":3,"Artificer":3},flavor:true}]]},
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


const QUIZ_LENGTH = 36;
const CORE_COUNT = 24;
const ADAPTIVE_COUNT = 12;
const TRAITS = ["aoe","singleTarget","burst","sustained","tank","healing","utility","control","mobility","defense","support","range"];
const TRAIT_LABELS = {aoe:"AoE",singleTarget:"Single-Target DPS",burst:"Burst",sustained:"Sustained DPS",tank:"Tanking",healing:"Healing",utility:"Utility",control:"Crowd Control",mobility:"Mobility",defense:"Defense",support:"Party Support",range:"Ranged Combat"};

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




// Build equal-strength subclass profiles. Custom subclasses receive no scoring bonus merely for being custom.
function addVector(target, source, multiplier=1){
  if(!source) return;
  for(const [k,v] of Object.entries(source)) target[k]=(target[k]||0)+v*multiplier;
}
function vectorNorm(v){return Math.sqrt(TRAITS.reduce((sum,t)=>sum+Math.pow(v[t]||0,2),0))||1;}
function normalizeVector(v){const n=vectorNorm(v); const out={}; for(const t of TRAITS) out[t]=(v[t]||0)/n; return out;}
function subclassProfile(cls, sub){
  const base=CLASS_PROFILES[cls]||{};
  const p={};
  for(const t of TRAITS) p[t]=(base[t]||0)*0.62;
  const lower=sub.toLowerCase();
  for(const [trait,names] of ARCHETYPE_RULES){
    if(names.some(name=>lower.includes(name.toLowerCase()))) p[trait]=(p[trait]||0)+2.2;
  }
  const signals={
    "College of Eloquence":{utility:1.5,support:2,control:1.5},"College of Whispers":{singleTarget:2,burst:1.5,utility:1},"College of Spirits":{utility:1.5,support:1.5,control:1},"College of Glamour":{support:2,control:1.5,utility:1},
    "War Domain":{singleTarget:2,burst:1.5,defense:1},"Grave Domain":{healing:1.5,singleTarget:1.5,support:1},"Trickery Domain":{utility:2,mobility:1.5,control:1.5},"Death Domain":{singleTarget:2,burst:1.5,aoe:1},
    "Circle of Spores":{sustained:2,defense:1.5,singleTarget:1},"Circle of Stars":{range:2,utility:1.5,support:1},"Circle of Dreams":{healing:2,support:1.5,utility:1},"Circle of the Moon":{tank:2,defense:2,sustained:1.5},
    "Echo Knight":{mobility:2,utility:2,burst:1.5},"Psi Warrior":{defense:2,control:1.5,utility:1},"Battle Master":{utility:2,control:1.5,sustained:1.5},"Way of Mercy":{healing:2,support:1.5,mobility:1},"Way of Shadow":{mobility:2,utility:1.5,burst:1},"Way of the Astral Self":{range:1.5,control:1,utility:1},
    "Oath of the Ancients":{defense:2,support:1.5,control:1},"Oathbreaker":{burst:2,control:1.5,singleTarget:1},"Fey Wanderer":{utility:2,control:1.5,support:1},"Beast Master":{sustained:2,utility:1.5,support:1},"Soulknife":{utility:2,mobility:1.5,range:1},"Arcane Trickster":{utility:2,control:2,range:1},"Phantom":{singleTarget:1.5,sustained:1.5,utility:1},
    "Divine Soul":{healing:2,support:1.5,utility:1},"Clockwork Soul":{defense:2,control:1.5,utility:1.5},"Shadow Magic":{control:2,defense:1.5,mobility:1},"The Fathomless":{control:2,aoe:1.5,range:1},"The Celestial":{healing:2,support:2,range:1},"The Great Old One":{control:2,utility:1.5,range:1},"The Archfey":{control:2,utility:1.5,mobility:1},"The Undead":{burst:1.5,control:1.5,defense:1},
    "School of Illusion":{control:2.5,utility:2},"School of Evocation":{aoe:2.5,burst:1.5,range:1},"School of Necromancy":{sustained:2,singleTarget:1.5,utility:1},"School of Abjuration":{defense:2.5,utility:2},"School of Conjuration":{utility:2,control:1.5,range:1},"School of Enchantment":{control:2.5,utility:1.5},"School of Divination":{utility:2.5,support:1.5,control:1},"War Magic":{defense:2,burst:1.5,utility:1},"Bladesinging":{mobility:2,defense:1.5,singleTarget:1.5,sustained:1},"Chronurgy Magic":{utility:2.5,control:2},"Order of Scribes":{utility:2,range:1.5,aoe:1},
    "Armorer":{tank:2.5,defense:2,utility:1},"Battle Smith":{defense:1.5,support:1.5,sustained:1.5},"Artillerist":{aoe:2,range:2,burst:1},"Alchemist":{healing:2,utility:2,support:1.5},"Researcher":{range:1.5,utility:2,support:1},
    "Path of the Ancestral Guardian":{tank:2.5,support:2,defense:2},"Path of the Totem Warrior":{tank:2,defense:2,support:1},"Path of the Beast":{sustained:2,mobility:1.5,defense:1},"Path of Wild Magic":{aoe:1.5,utility:2,burst:1.5},"Path of the Zealot":{burst:2,sustained:1.5,defense:1},"Path of the Storm Herald":{aoe:2,sustained:1.5,defense:1},"Path of the Battlerager":{tank:2,sustained:2,defense:1},"Path of the Berserker":{burst:2,sustained:2},"Path of Frost":{aoe:1.5,sustained:2,control:1},"Path of Rejuvenation":{healing:2.5,support:2,defense:1},"Path of Time":{healing:2,support:2,utility:2},
    "College of Encouragement":{support:2.5,burst:1.5},"College of Leadership":{support:2.5,tank:1.5,defense:1.5},"Circle of Fangs":{singleTarget:2,burst:2,sustained:1.5},"Circle of Fey":{control:2,utility:1.5,burst:1},"Circle of Drakes":{aoe:2.5,burst:1.5,range:1},"Oath of Hearth":{healing:2.5,support:2,defense:1},"Oath of Stability":{defense:2.5,control:2,tank:1.5},"Shelter Conclave":{tank:2.5,defense:2,singleTarget:1},"Royalty Conclave":{utility:2.5,control:1.5,support:1.5},"Medic":{healing:2.5,utility:1.5,singleTarget:1},"Outlaw":{burst:2,utility:1.5,mobility:1},"Shadow Archer":{range:2.5,singleTarget:2,burst:1},"Fate":{utility:2.5,support:2,control:1},"Soul Shield":{tank:2,defense:2.5,support:1},"Soundboost":{aoe:2,burst:1.5,range:1.5},"Titan":{tank:2,singleTarget:2.5,sustained:1.5},"Soul Cleaver":{healing:2,range:2,singleTarget:1.5},"Way of Lethality":{singleTarget:2.5,burst:2,mobility:1},"Death Knight":{tank:2,burst:1.5,singleTarget:1.5}
  };
  if(signals[sub]) addVector(p,signals[sub],1);
  return normalizeVector(p);
}

const CLASS_PROFILE_NORMALIZED={};
for(const cls of Object.keys(CLASS_PROFILES)) CLASS_PROFILE_NORMALIZED[cls]=normalizeVector(CLASS_PROFILES[cls]);
const PROFILE_CACHE={};
for(const cls of Object.keys(CLASS_DATA)){ PROFILE_CACHE[cls]={}; for(const sub of CLASS_DATA[cls]) PROFILE_CACHE[cls][sub]=subclassProfile(cls,sub); }

function shuffled(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function cosinePositive(player,profile){
  let dot=0, pn=0, qn=0;
  for(const t of TRAITS){const p=Math.max(0,player[t]||0);const q=Math.max(0,profile[t]||0);dot+=p*q;pn+=p*p;qn+=q*q;}
  return dot/((Math.sqrt(pn)||1)*(Math.sqrt(qn)||1));
}
function makeCoreSet(){
  const buckets={};
  QUESTIONS.filter(q=>q.phase==='core').forEach(q=>(buckets[q.trait]??=[]).push(q));
  const selected=[];
  for(const trait of TRAITS) selected.push(...shuffled(buckets[trait]||[]).slice(0,2));
  return shuffled(selected);
}
function topTraits(player,n=3){return TRAITS.map(t=>({trait:t,score:player[t]||0})).sort((a,b)=>b.score-a.score).slice(0,n).map(x=>x.trait);}
function adaptivePoolFor(top){
  const keys=[];
  for(let i=0;i<top.length;i++) for(let j=i+1;j<top.length;j++) keys.push(`${top[i]}|${top[j]}`);
  const pools=[];
  const used=new Set();
  for(const key of keys){
    const [a,b]=key.split('|');
    const direct=FLAVOR_BANK[key]||FLAVOR_BANK[`${b}|${a}`];
    if(direct) direct.forEach(q=>{if(!used.has(q.text)){used.add(q.text);pools.push(q);}});
  }
  // Add single-trait flavor questions, then draw from every flavor bank if needed.
  for(const t of top){
    for(const q of (FLAVOR_SINGLE[t]||[])){if(!used.has(q.text)){used.add(q.text);pools.push(q);}}
  }
  for(const bank of Object.values(FLAVOR_BANK)){
    for(const q of bank){if(!used.has(q.text)){used.add(q.text);pools.push(q);}}
  }
  return shuffled(pools);
}

// Convert the static flavor bank into JS question objects. These are appended below after initialization.
const FLAVOR_BANK={};
const FLAVOR_SINGLE={};

function registerFlavor(key, questions){FLAVOR_BANK[key]=questions;}
function registerSingle(key, questions){FLAVOR_SINGLE[key]=questions;}
function fq(text, yesClasses, noClasses){
  return {category:'Flavor',trait:'flavor',phase:'adaptive',text,answers:[
    ['YES',{classes:Object.fromEntries([...yesClasses.map(c=>[c,3]),...noClasses.map(c=>[c,-3])]),flavor:true}],
    ['NO',{classes:Object.fromEntries([...yesClasses.map(c=>[c,-3]),...noClasses.map(c=>[c,3])]),flavor:true}]
  ]};
}

// Flavor banks are deliberately class-level signals first; subclass matching remains profile-driven.
registerFlavor('tank|defense',[
  fq('Would you rather your defenses come from heavy armor than from magic or agility?',['Fighter','Paladin','Death Knight'],['Wizard','Sorcerer','Monk']),
  fq('Would you rather use radiant or holy power than necromantic or dark magic?',['Paladin'],['Death Knight','Warlock']),
  fq('Would you rather use necromancy or dark magic as part of your martial fighting style?',['Death Knight'],['Paladin','Fighter']),
  fq('Would you rather use rage as the source of your durability than armor or spells?',['Barbarian'],['Fighter','Paladin','Death Knight']),
  fq('Would you rather rely on disciplined martial skill than supernatural power for defense?',['Fighter'],['Barbarian','Paladin','Death Knight']),
  fq('Would you rather protect allies through positioning and armor than through healing magic?',['Fighter','Paladin'],['Cleric','Druid','Sorcerer'])
]);
registerFlavor('healing|support',[
  fq('Would you rather heal through divine magic than nature magic?',['Cleric','Paladin'],['Druid','Ranger']),fq('Would you rather heal through nature and life magic than divine magic?',['Druid'],['Cleric','Paladin']),fq('Would you rather support allies with spells than with weapons and armor?',['Cleric','Bard','Sorcerer'],['Fighter','Paladin','Ranger']),fq('Would you rather improve allies with inspiration and abilities than restore their HP?',['Bard'],['Cleric','Paladin','Druid']),fq('Would you rather combine healing with martial combat than stay primarily a spellcaster?',['Paladin','Ranger','Rogue'],['Cleric','Druid','Sorcerer']),fq('Would you rather use constructs, infusions, or gadgets to support the party?',['Artificer'],['Bard','Cleric'])
]);
registerFlavor('aoe|burst',[
  fq('Would you rather get your AoE from elemental spells than from weapon attacks?',['Wizard','Sorcerer','Druid'],['Fighter','Barbarian','Rogue']),fq('Would you rather deal burst damage with weapons than with spells?',['Fighter','Rogue','Paladin','Barbarian'],['Wizard','Sorcerer','Warlock']),fq('Would you rather specialize in fire, lightning, or other elemental magic?',['Sorcerer','Wizard','Druid'],['Rogue','Fighter','Barbarian']),fq('Would you rather use necromantic magic to damage groups than elemental magic?',['Wizard','Warlock','Death Knight'],['Sorcerer','Druid']),fq('Would you rather make your AoE come from transforming into a powerful creature?',['Druid'],['Wizard','Sorcerer']),fq('Would you rather fire many magical effects from a prepared spellbook than improvise magic from innate power?',['Wizard'],['Sorcerer','Warlock'])
]);
registerFlavor('singleTarget|burst',[
  fq('Would you rather stalk one target from stealth than challenge it openly?',['Rogue','Ranger'],['Fighter','Paladin','Barbarian']),fq('Would you rather fight your priority target in melee than at range?',['Fighter','Barbarian','Monk','Paladin'],['Ranger','Rogue']),fq('Would you rather burst one target with spells than weapons?',['Sorcerer','Wizard','Warlock'],['Fighter','Rogue','Paladin']),fq('Would you rather rely on precision and sneak attacks than raw strength?',['Rogue'],['Barbarian','Fighter','Paladin']),fq('Would you rather hunt a specific creature with specialized tools than fight whatever is closest?',['Ranger'],['Fighter','Barbarian','Rogue']),fq('Would you rather channel divine power into a decisive melee attack?',['Paladin','Cleric'],['Fighter','Rogue','Wizard'])
]);
registerFlavor('utility|control',[
  fq('Would you rather solve problems with a large spellbook of different magic?',['Wizard'],['Rogue','Bard','Artificer']),fq('Would you rather solve problems with skills, tricks, and deception instead of spells?',['Rogue','Bard'],['Wizard','Sorcerer']),fq('Would you rather use inventions and tools to solve unusual problems?',['Artificer'],['Wizard','Rogue']),fq('Would you rather control enemies with enchantment or illusion magic?',['Wizard','Bard','Warlock'],['Fighter','Barbarian']),fq('Would you rather manipulate nature and creatures to solve problems?',['Druid','Ranger'],['Wizard','Rogue']),fq('Would you rather use psychic or supernatural powers that do not depend on traditional spellcasting?',['Sorcerer','Warlock','Monk','Rogue'],['Wizard','Artificer'])
]);
registerFlavor('mobility|range',[
  fq('Would you rather use stealth and positioning than teleportation?',['Rogue','Ranger'],['Wizard','Sorcerer']),fq('Would you rather teleport or magically reposition than rely on speed alone?',['Wizard','Sorcerer','Warlock'],['Monk','Rogue','Ranger']),fq('Would you rather fight at range while constantly repositioning?',['Ranger','Rogue','Fighter'],['Barbarian','Paladin']),fq('Would you rather use martial agility to cross the battlefield quickly?',['Monk','Rogue','Ranger'],['Wizard','Warlock']),fq('Would you rather have magical mobility even if your weapon skills were weaker?',['Wizard','Sorcerer','Warlock'],['Fighter','Barbarian','Rogue']),fq('Would you rather move through the battlefield with a companion or creature helping you?',['Ranger','Druid'],['Monk','Rogue','Wizard'])
]);
registerFlavor('sustained|range',[
  fq('Would you rather maintain damage with repeated weapon attacks than repeated spells?',['Fighter','Ranger','Rogue','Barbarian'],['Wizard','Sorcerer','Warlock']),fq('Would you rather cast a lot of spells throughout a fight?',['Wizard','Sorcerer','Warlock','Cleric','Druid','Bard'],['Fighter','Barbarian','Rogue']),fq('Would you rather use a bow or other ranged weapon as your main attack?',['Ranger','Fighter','Rogue'],['Wizard','Sorcerer','Cleric']),fq('Would you rather maintain magical effects than make repeated weapon attacks?',['Wizard','Warlock','Druid','Cleric','Bard'],['Fighter','Rogue','Barbarian']),fq('Would you rather fight with two heavy weapons than with spells or a shield?',['Fighter','Barbarian'],['Wizard','Cleric','Paladin']),fq('Would you rather fight from range with a companion or summon supporting you?',['Ranger'],['Fighter','Wizard','Rogue'])
]);
registerFlavor('control|utility',FLAVOR_BANK['utility|control']);
registerFlavor('defense|healing',[
  fq('Would you rather heal yourself through magic than rely on armor?',['Cleric','Druid','Sorcerer','Warlock'],['Fighter','Paladin','Barbarian']),fq('Would you rather prevent damage with protective magic than restore HP afterward?',['Wizard','Cleric','Paladin','Artificer'],['Druid','Rogue','Barbarian']),fq('Would you rather survive through regeneration or self-healing than high AC?',['Barbarian','Druid','Cleric'],['Fighter','Paladin','Artificer']),fq('Would you rather have heavy armor even if it limits your mobility?',['Fighter','Paladin','Death Knight','Artificer'],['Monk','Rogue','Sorcerer']),fq('Would you rather use shields and armor as your primary defense?',['Fighter','Paladin','Artificer'],['Wizard','Sorcerer','Monk']),fq('Would you rather protect yourself with magical wards and barriers?',['Wizard','Cleric','Artificer','Sorcerer'],['Barbarian','Fighter','Rogue'])
]);
registerFlavor('support|utility',[
  fq('Would you rather support allies with Bardic Inspiration-style buffs?',['Bard'],['Cleric','Druid','Artificer']),fq('Would you rather support allies by changing the battlefield with spells?',['Wizard','Druid'],['Fighter','Rogue']),fq('Would you rather support allies with healing and protection?',['Cleric','Paladin','Druid'],['Bard','Rogue']),fq('Would you rather support allies with inventions, gadgets, and infusions?',['Artificer'],['Bard','Cleric']),fq('Would you rather support the party through a companion or summoned creature?',['Ranger','Druid','Artificer'],['Bard','Cleric']),fq('Would you rather support allies by manipulating dice, rolls, or probability?',['Sorcerer','Wizard','Bard'],['Fighter','Barbarian','Ranger'])
]);
registerFlavor('range|aoe',[
  fq('Would you rather cast many ranged spells than use a ranged weapon?',['Wizard','Sorcerer','Warlock','Cleric','Druid','Bard'],['Ranger','Fighter','Rogue']),fq('Would you rather use a bow or firearm from a distance?',['Ranger','Fighter','Rogue'],['Wizard','Sorcerer','Warlock']),fq('Would you rather attack from range with a magical companion or construct?',['Ranger','Artificer'],['Fighter','Rogue','Wizard']),fq('Would you rather use ranged attacks that come from elemental magic?',['Sorcerer','Wizard','Druid'],['Ranger','Fighter']),fq('Would you rather fight at range while wearing heavy armor?',['Artificer','Fighter'],['Rogue','Ranger','Wizard']),fq('Would you rather have your ranged attacks come from a spellbook than from equipment?',['Wizard'],['Fighter','Ranger','Rogue','Artificer'])
]);

// Ensure every possible top-trait pair has a flavor fallback, so late questions always become specific.
const FALLBACK_FLAVOR={
 tank:[fq('Would you rather use heavy armor than rely on mobility for defense?',['Fighter','Paladin','Death Knight','Artificer'],['Monk','Rogue','Sorcerer']),fq('Would you rather be durable because of rage than armor?',['Barbarian'],['Fighter','Paladin'])],
 defense:[fq('Would you rather use magical wards than heavy armor?',['Wizard','Cleric','Artificer'],['Fighter','Paladin','Barbarian']),fq('Would you rather use armor and a shield as your main defense?',['Fighter','Paladin','Artificer'],['Wizard','Sorcerer','Monk'])],
 healing:[fq('Would you rather cast healing magic than focus on weapon damage?',['Cleric','Druid','Paladin'],['Fighter','Barbarian','Rogue']),fq('Would you rather heal with divine power than nature magic?',['Cleric','Paladin'],['Druid'])],
 support:[fq('Would you rather strengthen allies with magic and buffs?',['Bard','Cleric','Druid','Artificer'],['Fighter','Barbarian','Rogue']),fq('Would you rather support through healing than buffs?',['Cleric','Druid','Paladin'],['Bard','Artificer'])],
 aoe:[fq('Would you rather use spells for your AoE than weapons?',['Wizard','Sorcerer','Druid','Warlock'],['Fighter','Barbarian','Rogue']),fq('Would you rather use elemental magic for AoE than physical attacks?',['Wizard','Sorcerer','Druid'],['Fighter','Barbarian'])],
 burst:[fq('Would you rather burst enemies with spells than weapons?',['Wizard','Sorcerer','Warlock'],['Fighter','Rogue','Paladin','Barbarian']),fq('Would you rather burst one target in melee?',['Rogue','Fighter','Paladin','Barbarian','Monk'],['Wizard','Sorcerer','Warlock'])],
 singleTarget:[fq('Would you rather use precision and stealth than raw strength?',['Rogue','Ranger'],['Fighter','Barbarian','Paladin']),fq('Would you rather fight your main target in melee?',['Fighter','Paladin','Barbarian','Monk'],['Ranger','Wizard','Sorcerer'])],
 sustained:[fq('Would you rather keep attacking with weapons than spells?',['Fighter','Ranger','Rogue','Barbarian'],['Wizard','Sorcerer','Warlock']),fq('Would you rather maintain magical effects throughout a fight?',['Wizard','Warlock','Druid','Cleric','Bard'],['Fighter','Rogue','Barbarian'])],
 utility:[fq('Would you rather use a spellbook as your main toolbox?',['Wizard'],['Rogue','Bard','Artificer']),fq('Would you rather use gadgets and inventions as your toolbox?',['Artificer'],['Wizard','Rogue'])],
 control:[fq('Would you rather control enemies with spells?',['Wizard','Sorcerer','Warlock','Bard'],['Fighter','Barbarian','Rogue']),fq('Would you rather control enemies through nature and terrain?',['Druid','Ranger'],['Wizard','Rogue'])],
 mobility:[fq('Would you rather teleport than rely on physical speed?',['Wizard','Sorcerer','Warlock'],['Monk','Rogue','Ranger']),fq('Would you rather use martial agility to move?',['Monk','Rogue','Ranger'],['Wizard','Sorcerer'])],
 range:[fq('Would you rather use ranged spells than ranged weapons?',['Wizard','Sorcerer','Warlock','Druid'],['Ranger','Fighter','Rogue']),fq('Would you rather use a bow or firearm as your main ranged attack?',['Ranger','Fighter','Rogue'],['Wizard','Sorcerer','Warlock'])]
};
for(const t of TRAITS) registerSingle(t,FALLBACK_FLAVOR[t]);

let quizQuestions=[], current=0, answers=[];
function buildPlayerProfile(){const p={};for(const t of TRAITS)p[t]=0;const classFlavor={};answers.forEach((choice,qi)=>{if(choice===null)return;const a=quizQuestions[qi].answers[choice][1];addVector(p,a.traits);addVector(classFlavor,a.classes);});return {traits:p,classes:classFlavor};}
function classRanking(player){return Object.keys(CLASS_PROFILES).map(cls=>({name:cls,score:cosinePositive(player.traits,CLASS_PROFILE_NORMALIZED[cls]) + ((player.classes[cls]||0)*0.012)})).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));}
function subclassRanking(cls,player){return CLASS_DATA[cls].map(sub=>({name:sub,score:cosinePositive(player.traits,PROFILE_CACHE[cls][sub]),custom:!!CUSTOM_DESCRIPTIONS[`${cls}:${sub}`],description:CUSTOM_DESCRIPTIONS[`${cls}:${sub}`]||''})).sort((a,b)=>b.score-a.score||a.name.localeCompare(b.name));}
function selectAdaptive(){const p=buildPlayerProfile();const top=topTraits(p.traits,3);let pool=adaptivePoolFor(top);for(const t of top) pool.push(...(FLAVOR_SINGLE[t]||[]));return shuffled(pool).slice(0,ADAPTIVE_COUNT);}
function startQuiz(){const core=makeCoreSet();quizQuestions=core;current=0;answers=Array(core.length).fill(null);showScreen('quiz-screen');renderQuestion();}
function showScreen(id){document.querySelectorAll('.screen').forEach(x=>x.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo({top:0,behavior:'smooth'});}
function renderQuestion(){const q=quizQuestions[current];document.getElementById('question-category').textContent=q.category;document.getElementById('question-text').textContent=q.text;document.getElementById('progress-label').textContent=`${current+1} / ${QUIZ_LENGTH}`;document.getElementById('progress-bar').style.width=`${((current+1)/QUIZ_LENGTH)*100}%`;const wrap=document.getElementById('answers');wrap.innerHTML='';q.answers.forEach((a,i)=>{const b=document.createElement('button');b.className='answer'+(answers[current]===i?' selected':'');b.type='button';b.innerHTML=`<span class="answer-key">${a[0]}</span>`;b.onclick=()=>selectAnswer(i);wrap.appendChild(b);});document.getElementById('back-btn').disabled=current===0;}
function selectAnswer(i){answers[current]=i;if(current<CORE_COUNT-1){current++;renderQuestion();return;}if(current===CORE_COUNT-1){quizQuestions=quizQuestions.concat(selectAdaptive());answers=answers.concat(Array(ADAPTIVE_COUNT).fill(null));current++;renderQuestion();return;}if(current<QUIZ_LENGTH-1){current++;renderQuestion();return;}renderResults();}
function renderResults(){const player=buildPlayerProfile(),classes=classRanking(player),winner=classes[0].name,subs=subclassRanking(winner,player),best=subs[0];document.getElementById('result-class').textContent=winner;document.getElementById('result-subclass').textContent=best.name;document.getElementById('custom-badge').classList.toggle('hidden',!best.custom);document.getElementById('result-description').textContent=best.description||`Your answers most closely match the ${winner} — ${best.name} playstyle.`;const traitScores=TRAITS.map(t=>[t,player.traits[t]]).sort((a,b)=>b[1]-a[1]).slice(0,8);const maxAbs=Math.max(...TRAITS.map(t=>Math.abs(player.traits[t]||0)),1);document.getElementById('trait-breakdown').innerHTML=`<div class="trait-grid">${traitScores.map(([t,v])=>{const width=Math.max(4,Math.min(100,(Math.abs(v)/maxAbs)*100));return `<div class="trait"><div class="trait-head"><span>${TRAIT_LABELS[t]}</span><b>${v>0?'+':''}${v}</b></div><div class="trait-track"><div class="trait-fill" style="width:${width}%"></div></div></div>`}).join('')}</div>`;const reasons=document.getElementById('result-reasons');reasons.innerHTML='';traitScores.slice(0,4).forEach(([t])=>{const li=document.createElement('li');li.textContent=`Your choices leaned toward ${TRAIT_LABELS[t]}.`;reasons.appendChild(li);});const classWrap=document.getElementById('class-breakdown');const maxClass=Math.max(...classes.map(x=>x.score),.001);classWrap.innerHTML=classes.map(x=>`<div class="bar-row"><div class="bar-label"><span>${x.name}</span><span>${Math.round(x.score*100)}</span></div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(2,(x.score/maxClass)*100)}%"></div></div></div>`).join('');document.getElementById('subclass-matches').innerHTML=subs.slice(0,6).map((x,i)=>`<div class="match"><b>${i+1}. ${x.name}</b>${x.custom?" <span class='mini-custom'>CUSTOM</span>":''}</div>`).join('');showScreen('results-screen');}

document.addEventListener('DOMContentLoaded',()=>{document.getElementById('start-btn').addEventListener('click',startQuiz);document.getElementById('back-btn').addEventListener('click',()=>{if(current>0){current--;renderQuestion();}});document.getElementById('restart-btn').addEventListener('click',()=>{quizQuestions=[];answers=[];current=0;showScreen('start-screen');});});
