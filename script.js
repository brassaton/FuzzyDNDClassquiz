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
const ADAPTIVE_COUNT = 15;
const QUIZ_LENGTH = CORE_COUNT + ADAPTIVE_COUNT;
const TRAITS = ["aoe","singleTarget","burst","sustained","tank","healing","utility","control","mobility","defense","support","range","chaos","skills","arcane","summoner"];
const TRAIT_LABELS = {aoe:"AoE",singleTarget:"Single-Target DPS",burst:"Burst",sustained:"Sustained DPS",tank:"Tanking",healing:"Healing",utility:"Utility",control:"Crowd Control",mobility:"Mobility",defense:"Defense",support:"Party Support",range:"Ranged Combat",chaos:"Chaos",skills:"Skills & Tools",arcane:"Arcane",summoner:"Summoner"};

const CLASS_DATA = {
  Barbarian:["Path of the Totem Warrior","Path of Wild Magic","Path of the Zealot","Path of the Battlerager","Path of the Berserker","Path of the Beast","Path of the Storm Herald","Path of the Ancestral Guardian","Path of Frost","Path of Rejuvenation","Path of Time"],
  Bard:["College of Eloquence","College of Whispers","College of Spirits","College of Lore","College of Valor","College of Swords","College of Creation","College of Glamour","College of Encouragement","College of Leadership","College of Fools"],
  Cleric:["War Domain","Grave Domain","Peace Domain","Tempest Domain","Light Domain","Trickery Domain","Death Domain","Twilight Domain","Arcana Domain","Forge Domain","Knowledge Domain","Entropy Domain","Nature Domain","Life Domain","Order Domain","Pestilence"],
  Druid:["Circle of the Land (Coast)","Circle of Spores","Circle of Stars","Circle of Dreams","Circle of the Land (Forest)","Circle of the Land (Underdark)","Circle of the Land (Grassland)","Circle of the Land (Swamp)","Circle of the Land (Mountain)","Circle of the Land (Desert)","Circle of the Land (Arctic)","Circle of the Land","Circle of the Shepherd","Circle of Wildfire","Circle of the Moon","Circle of Fangs","Circle of Fey","Circle of Drakes"],
  Fighter:["Samurai","Echo Knight","Gunslinger","Eldritch Knight","Arcane Archer","Rune Knight","Psi Warrior","Cavalier","Champion","Purple Dragon Knight","Battle Master","Titan","Soul Cleaver","Dragoon"],
  Monk:["Way of the Drunken Master","Way of the Open Hand","Way of the Long Death","Way of the Ascendant Dragon","Way of Shadow","Way of Mercy","Way of the Four Elements","Way of the Cobalt Soul","Way of the Sun Soul","Way of the Astral Self","Way of the Kensei","Way of Lethality"],
  Brawler:["Way of the Drunken Master","Way of the Open Hand","Way of the Long Death","Way of the Ascendant Dragon","Way of Shadow","Way of Mercy","Way of the Four Elements","Way of the Cobalt Soul","Way of the Sun Soul","Way of the Astral Self","Way of the Kensei","Way of Lethality"],
  Paladin:["Oath of Vengeance","Oath of the Ancients","Oath of the Crown","Oath of Redemption","Oath of Glory","Oath of the Open Sea","Oath of the Watchers","Oath of Devotion","Oath of Conquest","Oathbreaker","Oath of Hearth","Oath of Stability"],
  Ranger:["Fey Wanderer","Gloom Stalker","Monster Slayer","Swarmkeeper","Hunter","Beast Master","Drakewarden","Horizon Walker","Shelter Conclave","Royalty Conclave"],
  Rogue:["Thief","Soulknife","Mastermind","Arcane Trickster","Phantom","Inquisitive","Scout","Swashbuckler","Assassin","Medic","Outlaw","Shadow Archer"],
  Sorcerer:["Aberrant Mind","Divine Soul","Clockwork Soul","Storm Sorcery","Draconic Bloodline","Wild Magic","Shadow Magic","Fate","Soul Shield","Soundboost"],
  Warlock:["The Genie","The Hexblade","The Fiend","The Fathomless","The Undying","The Celestial","The Great Old One","The Archfey","The Undead","Arch Devil"],
  Wizard:["School of Illusion","School of Evocation","School of Necromancy","School of Abjuration","School of Conjuration","School of Enchantment","Graviturgy Magic","War Magic","School of Divination","Bladesinging","School of Transmutation","Chronurgy Magic","Order of Scribes","Transmogrification"],
  Artificer:["Armorer","Battle Smith","Alchemist","Artillerist","Researcher"],
  "Death Knight":["Oath of Vengeance","Oath of the Ancients","Oath of the Crown","Oath of Redemption","Oath of Glory","Oath of the Open Sea","Oath of the Watchers","Oath of Devotion","Oath of Conquest","Oathbreaker","Oath of Hearth","Oath of Stability"],
  Shaman:["Calling of Beyond","Calling of Elements","Calling of Nature","Calling of Balance"]
};

// v13 additions: expanded subclass library. Purple Dragon Knight is replaced by Banneret.
CLASS_DATA.Artificer.push("Archivist","Forge Adept","Mastermaker","Maverick","Mech");
CLASS_DATA.Barbarian.push("Path of the Giant","Path of the Juggernaut","Path of the Depths");
CLASS_DATA.Bard.push("College of Battle Singer","College of Dance","College of the Maestro","College of Satire");
CLASS_DATA.Brawler.push("Way of the Living Weapon");
CLASS_DATA.Cleric.push("Ambition Domain","Beauty Domain","Blood Domain","Mind Domain","Protection Domain");
CLASS_DATA.Fighter=CLASS_DATA.Fighter.filter(x=>x!=="Purple Dragon Knight");
CLASS_DATA.Fighter.push("Banneret","Brute","Knight","Monster Hunter","Renegade","Sharpshooter");
CLASS_DATA.Monk.push("Way of the Living Weapon");
CLASS_DATA.Paladin.push("Oath of Heroism","Oath of Treachery");
CLASS_DATA["Death Knight"].push("Oath of Heroism","Oath of Treachery");
CLASS_DATA.Sorcerer.push("Favored Soul","Giant Soul","Lunar Sorcery","Pyromancy","Sea Sorcery","Stone Sorcery");
CLASS_DATA.Warlock.push("The Kraken","The Noble Genie","The Raven Queen");
CLASS_DATA.Wizard.push("School of Artificer","School of Invention","School of Onomancy","School of Theurgy");

const CLASS_LINKS={"Artificer":"https://docs.google.com/document/d/1eegbrmi07VgSiqr97TU0ZBzDsxCg4-goWs1AfZIhuyk/edit?usp=drive_link","Barbarian":"https://docs.google.com/document/d/1r93Xwm2r7Pna7EFhSfF2DffgYrI4yttzyTk1Q6zXr74/edit?usp=drive_link","Bard":"https://docs.google.com/document/d/1vofd8oUzca5OKxAUIRSZ-bvcszkYK-ck6W9JETrGCQg/edit?usp=drive_link","Brawler":"https://docs.google.com/document/d/1YSalJ3Mjcm4QRJrkrG91RrVLVkkOPkGDJXKf-m8Y3yM/edit?usp=drive_link","Cleric":"https://docs.google.com/document/d/1DHS4HTP9_rdT-WSjm7qsa1vK-EtvnKDTaacv8wxAtis/edit?usp=drive_link","Death Knight":"https://docs.google.com/document/d/1ahx43nzFtBCWQQ9XNmI_2NxyFXddb_HxRnxu8YMR0t8/edit?usp=drive_link","Druid":"https://docs.google.com/document/d/13anZhSox5cvTkkK3F-_hV-zdrP44E4O1n19p9VyuX0I/edit?usp=drive_link","Fighter":"https://docs.google.com/document/d/1zDFhlNQXMcM5lIAtOWhsVFnji4DWqOuberUJ0HAYztY/edit?usp=drive_link","Monk":"https://docs.google.com/document/d/1uR81-fihm5P_3_XmDcpWxjBAGF_MChiau5-er3CeBuQ/edit?usp=drive_link","Paladin":"https://docs.google.com/document/d/1AOdz6lJYED0KZ2uhksR7F-HBBQdZ7o7E8IMj-qkK-_M/edit?usp=drive_link","Ranger":"https://docs.google.com/document/d/1x73pyv_YrOE8zw90vtxoHnkrIGlbysPbRGC9sC-sWF0/edit?usp=drive_link","Rogue":"https://docs.google.com/document/d/1Y_uX6AO8Q-IUbRXL0AX9VHqvwkvCcIrNlHf9L4u6ltU/edit?usp=drive_link","Shaman":"https://docs.google.com/document/d/1j_2l-UeMr_85AbiPHU60X_AwqQDLt4qMVWD441aBPNU/edit?usp=drive_link","Sorcerer":"https://docs.google.com/document/d/1qN1zenKytsuwkgVuZSe_g5RrIBtcX_SpVt1g8nMJfhA/edit?usp=drive_link","Warlock":"https://docs.google.com/document/d/1hl8fHSRikklS3EsTAZorK369d6vJ2XnMPEtIxOshHVA/edit?usp=drive_link","Wizard":"https://docs.google.com/document/d/1IVqYC9H4ssrd-CXa7SZAQ09XM2roA3INF6tSPM5QW4E/edit?usp=drive_link"};
const SUBCLASS_LINKS={"Barbarian:Path of the Totem Warrior":"https://docs.google.com/document/d/1fbDMRMupucuAu3g7jdovouTjh8YuZeInE06_R6vh_Pw/edit?usp=sharing","Barbarian:Path of Wild Magic":"https://docs.google.com/document/d/1b6NNrXRLExdISujTRFYrf2OvW9S3tS9vQqXH68a7a_o/edit?usp=sharing","Barbarian:Path of the Zealot":"https://docs.google.com/document/d/1aFYV_trszOtun6t1bYN1V46GzGRaqaVNkxzqsMEUL9Y/edit?usp=sharing","Barbarian:Path of the Battlerager":"https://docs.google.com/document/d/1zszlWf4_K1UksqVrM1lkMKo0NhD-CD7KON3s5HiiBAw/edit?usp=drive_link","Barbarian:Path of the Berserker":"https://docs.google.com/document/d/1jNTUs8xPk1mjYhgU6DrnRJfN1Z8vnexyXBt96gQOVdk/edit?usp=sharing","Barbarian:Path of the Beast":"https://docs.google.com/document/d/1y0eNzMn73RXu2Fu7pPAKN_SDheU5z4hdrowOMf_HI3E/edit?usp=drive_link","Barbarian:Path of the Storm Herald":"https://docs.google.com/document/d/1hpFIn8qmj5-9K3PDL785_MK90tKNoYr5Byh2HpL1kJg/edit?usp=sharing","Barbarian:Path of the Ancestral Guardian":"https://docs.google.com/document/d/1_iv_guSabDX5gt3i4B6eFwNTAyXf5GmxcEyzaeO56g0/edit?usp=drive_link","Barbarian:Path of Frost":"https://docs.google.com/document/d/10YvpZScnVwRUAfrRVZtWmNeumXkRprZdMhsMukSMLJE/edit?usp=sharing","Barbarian:Path of Rejuvenation":"https://docs.google.com/document/d/16R7cOwL4AoY08zNz-Byub2poAjTM2xRl9FrrhKaAG_I/edit?usp=sharing","Barbarian:Path of Time":"https://docs.google.com/document/d/17-HZFkQElYN6vIbhKZoARGrc7aOlYjj2B2qjHbyugU4/edit?usp=sharing","Bard:College of Eloquence":"https://docs.google.com/document/d/1XD3xCJoe04MzG_Hu2R4dy7YGtZDopeaXmC6C8g8nw3E/edit?usp=drive_link","Bard:College of Whispers":"https://docs.google.com/document/d/1WuH-hQW4QRgNyFnhWmqoPlHzl1r_hrzGO-pbdiN4WqA/edit?usp=drive_link","Bard:College of Spirits":"https://docs.google.com/document/d/1Vb9pBDy75b88mLp5WquMYtFjsIYA3TcsC-2S5nANf20/edit?usp=drive_link","Bard:College of Lore":"https://docs.google.com/document/d/1cPpmAm5RLnCieDxu3GeLqD_mbuzNJQ7cytQKXO-wMV0/edit?usp=drive_link","Bard:College of Valor":"https://docs.google.com/document/d/1H5m64LEWqnAd1mizDY80Iu6q-fv5rLp59OAxf_bNJeA/edit?usp=drive_link","Bard:College of Swords":"https://docs.google.com/document/d/18pCy51MK41jWK5O8l9dC2uYPv2fZNLq4Fk-IR0MIQ5U/edit?usp=drive_link","Bard:College of Creation":"https://docs.google.com/document/d/12aAvI1v_Xv4e9hwCyB3o6J5qbioC8LEb_tzlkSV8yL8/edit?usp=drive_link","Bard:College of Glamour":"https://docs.google.com/document/d/17TtWFegWlQzHltus8nK2uEeAmNoVKh0EkkkRKFfeZmU/edit?usp=drive_link","Bard:College of Encouragement":"https://docs.google.com/document/d/1EfpjTG9CvB3OFkBF1yS-196BJD-YBegU3iOtESOz7eQ/edit?usp=drive_link","Bard:College of Fools":"https://docs.google.com/document/d/1ZC9YwcxdFDJqHVWkL_09RVOFPGPMh0_tWm46OZW0eck/edit?usp=drive_link","Cleric:War Domain":"https://docs.google.com/document/d/1gs1-dz2aqJl0JE6EtdS5rEZasSO_H5heMU8657kMNZE/edit?usp=drive_link","Cleric:Grave Domain":"https://docs.google.com/document/d/10M6znexrqGaP9jK65M97sgFktlaVrP70kwkfC54wDiE/edit?usp=drive_link","Cleric:Peace Domain":"https://docs.google.com/document/d/1VRCPE-f3orB0OTfC1pBG5qRP3bd3bbQ7RDkRf-8VBUM/edit?usp=drive_link","Cleric:Tempest Domain":"https://docs.google.com/document/d/1CokJSbkNcGI8tIMZzZm5MR1M1AaMvhY-_OM653IN41w/edit?usp=drive_link","Cleric:Light Domain":"https://docs.google.com/document/d/1he-WwtRhBS40nkBPdHzinsyHotirt6TqYPNUS58lhAM/edit?usp=drive_link","Cleric:Trickery Domain":"https://docs.google.com/document/d/14fTp0sLXiFqLAMjO8wPXDFrBmyMx-Wg8xAZReMrFZIg/edit?usp=drive_link","Cleric:Twilight Domain":"https://docs.google.com/document/d/1Yj02IvjrWZh9FlY3od3l5MSIVXlinkFASrqunF1fIdk/edit?usp=drive_link","Cleric:Arcana Domain":"https://docs.google.com/document/d/1ljTbdDJ2r-rCXoAvCh-Nmi9JhlaLq5svNFq5XSGDIl8/edit?usp=drive_link","Cleric:Forge Domain":"https://docs.google.com/document/d/1Giy76weBZolSoYlPTj-NwoYTwPJ3oCmv28F8toNf-Nk/edit?usp=drive_link","Cleric:Knowledge Domain":"https://docs.google.com/document/d/1rq1QZviWumrWX8i6J3reA-g6jANaR8ywCTglNMY3YAo/edit?usp=drive_link","Cleric:Nature Domain":"https://docs.google.com/document/d/182BRTfkO_1Y0HC6Juh-C4d1ladG6DlojEX3bTSXTNVw/edit?usp=drive_link","Cleric:Life Domain":"https://docs.google.com/document/d/1i2sG4PkkxJlnhxec7_ZICh_nh_QcuPpibR4SsUKTx9M/edit?usp=drive_link","Cleric:Order Domain":"https://docs.google.com/document/d/10C7B7KEncIEh9lfYqqPDiym-PntcRgdUY-0G7SNPJpc/edit?usp=drive_link","Cleric:Pestilence":"https://docs.google.com/document/d/1yNoDoGfgqfo-sTSSJxVB-MMukMRwfUEqTQ3bDpYF5B4/edit?usp=drive_link","Druid:Circle of the Land (Coast)":"https://docs.google.com/document/d/1rvrzVNySni1MypbRsZ9GHsKLoJ7Yn8R0I1AwZdDEpC8/edit?usp=drive_link","Druid:Circle of Spores":"https://docs.google.com/document/d/1IVxpuGPCA8rtgUhmMlupx8Mc0YUqG7KeRiX8WXO0CRs/edit?usp=drive_link","Druid:Circle of Stars":"https://docs.google.com/document/d/1cZ9z4MEe4L1ke4HVaA9S0aQCRRvlM9YxFgMKNk1jeko/edit?usp=drive_link","Druid:Circle of Dreams":"https://docs.google.com/document/d/1bIykVdqlj9gBYJuFDwfSQ3dKPk_T3WBSuXwKOGwk_Jg/edit?usp=drive_link","Druid:Circle of the Land (Forest)":"https://docs.google.com/document/d/1rvrzVNySni1MypbRsZ9GHsKLoJ7Yn8R0I1AwZdDEpC8/edit?usp=drive_link","Druid:Circle of the Land (Underdark)":"https://docs.google.com/document/d/1rvrzVNySni1MypbRsZ9GHsKLoJ7Yn8R0I1AwZdDEpC8/edit?usp=drive_link","Druid:Circle of the Land (Grassland)":"https://docs.google.com/document/d/1rvrzVNySni1MypbRsZ9GHsKLoJ7Yn8R0I1AwZdDEpC8/edit?usp=drive_link","Druid:Circle of the Land (Swamp)":"https://docs.google.com/document/d/1rvrzVNySni1MypbRsZ9GHsKLoJ7Yn8R0I1AwZdDEpC8/edit?usp=drive_link","Druid:Circle of the Land (Mountain)":"https://docs.google.com/document/d/1rvrzVNySni1MypbRsZ9GHsKLoJ7Yn8R0I1AwZdDEpC8/edit?usp=drive_link","Druid:Circle of the Land (Desert)":"https://docs.google.com/document/d/1rvrzVNySni1MypbRsZ9GHsKLoJ7Yn8R0I1AwZdDEpC8/edit?usp=drive_link","Druid:Circle of the Land (Arctic)":"https://docs.google.com/document/d/1rvrzVNySni1MypbRsZ9GHsKLoJ7Yn8R0I1AwZdDEpC8/edit?usp=drive_link","Druid:Circle of the Land":"https://docs.google.com/document/d/1rvrzVNySni1MypbRsZ9GHsKLoJ7Yn8R0I1AwZdDEpC8/edit?usp=drive_link","Druid:Circle of the Shepherd":"https://docs.google.com/document/d/1GzlT0RWf8OHhBb8zHxHbKW3jUN1X3kovJwcbL_VUMOw/edit?usp=drive_link","Druid:Circle of Wildfire":"https://docs.google.com/document/d/1ngu9q2YxPVWPciHfyeZ-nhsReFP6fcge_sDpXc66fP4/edit?usp=drive_link","Druid:Circle of the Moon":"https://docs.google.com/document/d/18u2GfVO5GERzx3evyg8C4KK72LEa0hDdT8VYcUryHHw/edit?usp=drive_link","Druid:Circle of Fangs":"https://docs.google.com/document/d/152mfAxhfRptClrLyMyDifuXyLOq7h-1MEdzIvINb6So/edit?usp=drive_link","Druid:Circle of Fey":"https://docs.google.com/document/d/1rQUUBc-ix7U2X01C7lGJKFjBh19hio4kZDQs6fb0KJI/edit?usp=drive_link","Druid:Circle of Drakes":"https://docs.google.com/document/d/1c6IfD9COo6iYUaRDbHGQ7erCQ8esAZMTtRU_tMvjICY/edit?usp=drive_link","Fighter:Samurai":"https://docs.google.com/document/d/103xdTzw7X60v2RrXVIYNIoln4RveoesuT4nGWaaglcM/edit?usp=drive_link","Fighter:Echo Knight":"https://docs.google.com/document/d/1BuNJ5F-mVjYHMdGTIHbtiFB62Wwu9HDTC0UJoO2YFXc/edit?usp=drive_link","Fighter:Gunslinger":"https://docs.google.com/document/d/1wA5t-L1FUR9i_nPoB89H0n-XuZxGND97tCB8Dx7ryfU/edit?usp=drive_link","Fighter:Eldritch Knight":"https://docs.google.com/document/d/1O8vEsCu3ZlsUa4enmtMJKDmsH5mhDW-6jFL2GW62TOA/edit?usp=drive_link","Fighter:Arcane Archer":"https://docs.google.com/document/d/1Zl5ZKjDP8oBnp5k-R3UH3OO9QA85pzeWySImFfP5ly0/edit?usp=drive_link","Fighter:Rune Knight":"https://docs.google.com/document/d/1w-EWMhZbuH73zJ-I5NSNP9V9_o-waKj0mg0L9npL--w/edit?usp=drive_link","Fighter:Psi Warrior":"https://docs.google.com/document/d/12ZLIEuIshcGdLGizJ_REGcxEqJilRBYMN_6N89-16Mw/edit?usp=drive_link","Fighter:Cavalier":"https://docs.google.com/document/d/1wKbf9nAQTT_LOeGtB50aYLH66103uCZqTiN9qgOZ_7c/edit?usp=drive_link","Fighter:Champion":"https://docs.google.com/document/d/1o8OZLMEdbVKHJQR1az7kzs4DoBZm4eCPn-nL-pcl6V8/edit?usp=drive_link","Fighter:Battle Master":"https://docs.google.com/document/d/1EZwmRuosSjpQ7Tig8fyNezU55_6vVLAmEs_P9BjXPf8/edit?usp=drive_link","Fighter:Titan":"https://docs.google.com/document/d/1vbntXqGmNbhw4j6mAj9OTfBoddl2zZ_wBwHHlnYVPvA/edit?usp=drive_link","Fighter:Soul Cleaver":"https://docs.google.com/document/d/1OofOeke4AC7klgx_kJun9162Om6QSbN4Tm3LOlvNp94/edit?usp=drive_link","Fighter:Dragoon":"https://docs.google.com/document/d/116-U6OOY7PZu_3K5-avvmfGdMImLLExTRBCChcGSTmo/edit?usp=drive_link","Monk:Way of the Drunken Master":"https://docs.google.com/document/d/1mOuGsT5zPRLwn-wENg5h9rNXNhRYSLm-8R9XNeewumk/edit?usp=drive_link","Monk:Way of the Open Hand":"https://docs.google.com/document/d/1RZcRQ11P8B3CHmZ9n3yycSf_U2N8lR3UeyVK28nwTsY/edit?usp=drive_link","Monk:Way of the Long Death":"https://docs.google.com/document/d/1mhVlujUKdtLpEkIcl4cnsCnbfmXl6EzPJoK9Q1wf4fE/edit?usp=drive_link","Monk:Way of Shadow":"https://docs.google.com/document/d/1yNuhkG1GBZIlYNHEilJAfhoQuGe0BLwpKI_DZuZVc98/edit?usp=drive_link","Monk:Way of Mercy":"https://docs.google.com/document/d/1vXrG8iIn8tSG1vTFej8qoO_VvOSMXr7PtQZXubFWZ7g/edit?usp=drive_link","Monk:Way of the Cobalt Soul":"https://docs.google.com/document/d/1jQm_OD3C5lblF02DumoICXyXkSTkidp9cRTk0-jUJA0/edit?usp=drive_link","Monk:Way of the Sun Soul":"https://docs.google.com/document/d/13cIqEYdeIzu4AbpKtWuEG1jKOJptXBu3MaGafZPFndc/edit?usp=drive_link","Monk:Way of the Astral Self":"https://docs.google.com/document/d/1rLmzrCIQPYnY8VRMDc670FGKGl9qkWAeuqAKy-kJ2co/edit?usp=drive_link","Monk:Way of the Kensei":"https://docs.google.com/document/d/1jUB4e-Bl6tnuUgfR-wRcmYPslYx8feacPZQOP8NiSu8/edit?usp=drive_link","Monk:Way of Lethality":"https://docs.google.com/document/d/1SlBH8F8gbcvk8rnhVnhhipWE7PMjnnoGe8YVQyVeWV8/edit?usp=drive_link","Brawler:Way of the Drunken Master":"https://docs.google.com/document/d/1T9VSQCbbLTNRqXS5mGCzRFz_Ksf4yEqDOjQHelW5z4c/edit?usp=sharing","Brawler:Way of the Open Hand":"https://docs.google.com/document/d/1Fi4HzhH955r9RCDIG25PAiCEsZduIiD5R7o8HbMSuGs/edit?usp=sharing","Brawler:Way of the Long Death":"https://docs.google.com/document/d/1pCn4TAqNQu2ILJKwhKS6z4cq7mJrEuKQFhSGNN4uU4c/edit?usp=sharing","Brawler:Way of the Ascendant Dragon":"https://docs.google.com/document/d/1uvCEoFiAoxLpWjnBfDplPbzj6ywgGAj5dhIHFycD8aI/edit?usp=drive_link","Brawler:Way of Shadow":"https://docs.google.com/document/d/1sgVqPZkOpcOnbSQ3BeGbYJuKJFYbvljcHl1s6Q7Ufvs/edit?usp=sharing","Brawler:Way of Mercy":"https://docs.google.com/document/d/1K2_tSw3lwlNuJGtSSMWsrpYEdSEhGJ1ThgBNMsJ2s58/edit?usp=sharing","Brawler:Way of the Four Elements":"https://docs.google.com/document/d/1KrYp53Nsns4RGy5LHpCoCs3toqMZlLXjD4F6jduKNHY/edit?usp=sharing","Brawler:Way of the Cobalt Soul":"https://docs.google.com/document/d/1sGM19QmbSf0ohXVR9Muw4dk--1bYrAIO-Tz213aDO7g/edit?usp=drive_link","Brawler:Way of the Sun Soul":"https://docs.google.com/document/d/13cIqEYdeIzu4AbpKtWuEG1jKOJptXBu3MaGafZPFndc/edit?usp=drive_link","Brawler:Way of the Astral Self":"https://docs.google.com/document/d/1bihbBrAH0JpdhDmMl-uXqdOEdV99vJuCw7D6BJfKLNw/edit?usp=drive_link","Brawler:Way of the Kensei":"https://docs.google.com/document/d/1vOT0yiFVyYk1b3qIr4MJ_O0hBqgHLLFtIlXtky83-1Q/edit?usp=sharing","Brawler:Way of Lethality":"https://docs.google.com/document/d/1wTGMJTZF3RDMmVuGxGoqJKJ3aWZdRD4_iXZAwEMb-ck/edit?usp=sharing","Paladin:Oath of Vengeance":"https://docs.google.com/document/d/10y3PBKc4cajyknwXp-61WDbis5eKOv7g3UNci9km0w0/edit?usp=drive_link","Paladin:Oath of the Ancients":"https://docs.google.com/document/d/1Js0Q4Zv3OY1YuBfGfjl2q-vh9iHaIC5ZEZfH83DG7O4/edit?usp=drive_link","Paladin:Oath of the Crown":"https://docs.google.com/document/d/1XY6oJYdmBR_3fm0Yf8MiXnlA50ptG5hAe1xOA-o2VfQ/edit?usp=drive_link","Paladin:Oath of Redemption":"https://docs.google.com/document/d/1HSIMijyZlTH9_0BLImrH2KTnvxDgFKBGBvYWG_uPs-o/edit?usp=drive_link","Paladin:Oath of Glory":"https://docs.google.com/document/d/1ZIRI3MNyNkg4n3ytzkXkStB_AUd2AuBwz0Zggixexm8/edit?usp=drive_link","Paladin:Oath of the Open Sea":"https://docs.google.com/document/d/1gU3DT6IRwu6gau7aiNbDK7Vb9OicwndF87yKWv7gVNY/edit?usp=drive_link","Paladin:Oath of the Watchers":"https://docs.google.com/document/d/1bFRLEwlh6Fba6d3_rQJwBg-qYaP68jyKA6gspseGkqA/edit?usp=drive_link","Paladin:Oath of Devotion":"https://docs.google.com/document/d/1dOvwB1SBGtSe4zZiARnt3eGOMVdPGoXFQHoTYjnrYps/edit?usp=drive_link","Paladin:Oath of Conquest":"https://docs.google.com/document/d/1OvVFlWW0CFr4EO9o5T7F_5nQ1pn0KwIAFkWcRFHfJjo/edit?usp=drive_link","Paladin:Oathbreaker":"https://docs.google.com/document/d/1KK7WkYa3JWP4CrlbcnaWTg1RyMIwn--hD2p24uar9pM/edit?usp=drive_link","Paladin:Oath of Hearth":"https://docs.google.com/document/d/1riF3188vxPzgbHE_YcTLvwGwkQpDt7eHwYAsQcpicpo/edit?usp=drive_link","Paladin:Oath of Stability":"https://docs.google.com/document/d/1L7hH3tMq8NLvDaSBqYMe_1cn9SsU16CQdmCupUBGJrQ/edit?usp=drive_link","Ranger:Fey Wanderer":"https://docs.google.com/document/d/1ZdUUATM5i-ZIInddN8RuZo6IUvQFwEH4y_uSFcyNBUc/edit?usp=drive_link","Ranger:Gloom Stalker":"https://docs.google.com/document/d/1qY_bV5PpJT83ISva6fNnNo-__FpqRp_7dh7WMbQ_FiI/edit?usp=drive_link","Ranger:Monster Slayer":"https://docs.google.com/document/d/1sC9atwdboW1lOWtj98XKQVFpxGPegsgLg6Tj_9zPgkA/edit?usp=drive_link","Ranger:Swarmkeeper":"https://docs.google.com/document/d/1lcF4TNoXFyoAJ8W0Q3fo5CXpiQO8XYbfur8ZFfDWTp8/edit?usp=drive_link","Ranger:Hunter":"https://docs.google.com/document/d/1F52MVGUk79NLKifSgOMGrm0fRndk6dE5upLdBNRbAiw/edit?usp=drive_link","Ranger:Beast Master":"https://docs.google.com/document/d/1945BSOef1zcgIqzIRvQHdZ3H3JWKxUMjU7e9W9u5wcQ/edit?usp=drive_link","Ranger:Drakewarden":"https://docs.google.com/document/d/164yyReFKijxN53AcC4PNHPwYsIWDttNx-47Rpi76wYM/edit?usp=drive_link","Ranger:Horizon Walker":"https://docs.google.com/document/d/11LpySgwIVWnpUy1AXcJMJtfiROQH6x-LBMGeum2C_co/edit?usp=drive_link","Ranger:Shelter Conclave":"https://docs.google.com/document/d/1qdSDPeH_NiJFpLeZD6-wMj0erRyTysZZ3m8UXrNvyHM/edit?usp=drive_link","Ranger:Royalty Conclave":"https://docs.google.com/document/d/1gUwBQJWytq-fNBZlqAwrlMtZUjDumJi5ivtQw3A8d14/edit?usp=drive_link","Rogue:Thief":"https://docs.google.com/document/d/1LndUxgIjmkCRotNXhMNLVWYqFTaQ0XQ17Kgsw1A9DgY/edit?usp=drive_link","Rogue:Soulknife":"https://docs.google.com/document/d/1EnztFL0WLQZ40deAiD89xvX0_GbWrtiHAPQmWY4T5pM/edit?usp=drive_link","Rogue:Mastermind":"https://docs.google.com/document/d/1uAZYGDgpxXcaUhNr-m3o8md4Kt5b2iIz15mrXphTGx4/edit?usp=drive_link","Rogue:Arcane Trickster":"https://docs.google.com/document/d/1jNP1DQFwBRl1J_DyJ9wwG15eg38OND0TdZo52hX9j7s/edit?usp=drive_link","Rogue:Phantom":"https://docs.google.com/document/d/1jtFydRT94tRb-MvnflqSiahi-PZClQMRp6sR6ZEETqo/edit?usp=drive_link","Rogue:Inquisitive":"https://docs.google.com/document/d/1B-44q8CvDeQ80H74ujLIDel_LMcHorPeilJOzen7fmg/edit?usp=drive_link","Rogue:Scout":"https://docs.google.com/document/d/1NGS0V_HZ5Qs05Ro7aIyQUFmam9CrQKwQ0EuSLyM3MTc/edit?usp=drive_link","Rogue:Swashbuckler":"https://docs.google.com/document/d/1T5EsE91nWa0dcUHnYci3EeR-So513koM6RgJ0-1EmPU/edit?usp=drive_link","Rogue:Assassin":"https://docs.google.com/document/d/146B2avNQLSqHLPhTpf11IQxYrIhAGfXqdCAUEEPLIKs/edit?usp=drive_link","Rogue:Medic":"https://docs.google.com/document/d/1l8kR6P-dXoLNMglaALoSePQIwjdUVsB6eFD5uYQf11g/edit?usp=drive_link","Rogue:Outlaw":"https://docs.google.com/document/d/1e4uoPodbW6stDDSi6zCuSZB5mdYQKisqxdyUNqoLlG8/edit?usp=drive_link","Rogue:Shadow Archer":"https://docs.google.com/document/d/1oS8oRjlv_-y9dR_l8Zfj5WwYC_VZqGwyauAFSj4h62I/edit?usp=drive_link","Sorcerer:Aberrant Mind":"https://docs.google.com/document/d/12HkaSTP0w6fKVzpy2POfBdSCUGTsKvuCjrEEDneXY0I/edit?usp=drive_link","Sorcerer:Divine Soul":"https://docs.google.com/document/d/19rCYPoaUaoepu9ey9LWeF7z66HRvxQxSa5KKJJ3yCDI/edit?usp=drive_link","Sorcerer:Clockwork Soul":"https://docs.google.com/document/d/1nfGp3WasUXjej89sirFekB615RkIlnR7twg4WO9WxBQ/edit?usp=drive_link","Sorcerer:Storm Sorcery":"https://docs.google.com/document/d/1tMeShmhRV3slY-VpwbLmTIdqCyFTs9SFfQrdULty3Bo/edit?usp=drive_link","Sorcerer:Draconic Bloodline":"https://docs.google.com/document/d/1n-ERhOCtQC5G8J8Huu7aV8wWeZeUDVyuphOrd5xEuVc/edit?usp=drive_link","Sorcerer:Wild Magic":"https://docs.google.com/document/d/1tV3__uaSIOn29axGFksBrQZldYmyNT7Pb5Lf4JBM9Vk/edit?usp=drive_link","Sorcerer:Shadow Magic":"https://docs.google.com/document/d/1bC_zG4SWNlMWrkEJ0xBzBVaATVK-u8zgVzksjPhlbXw/edit?usp=drive_link","Sorcerer:Fate":"https://docs.google.com/document/d/1YTwsOGKJ2jtXoE2HWs5fwolRxZQvtJF-ysXQ4MVtrpc/edit?usp=drive_link","Sorcerer:Soul Shield":"https://docs.google.com/document/d/1pSrrcxIxlJaEYRI-1JIargmo6e1LdXWRNSH-9uk8dBA/edit?usp=drive_link","Sorcerer:Soundboost":"https://docs.google.com/document/d/1DYIDOh4whdgEptRyP3yySN3Gs2KwWd7PrqYAlPjxa88/edit?usp=drive_link","Warlock:The Genie":"https://docs.google.com/document/d/1ZXX9IMeN3M5UaZhbY0-f98M_GsLsv0WBH-ndteNSApY/edit?usp=drive_link","Warlock:The Hexblade":"https://docs.google.com/document/d/15sBfLoHpKOn1MiGFaValZY9N3sz82K3eVfoa58wCChw/edit?usp=drive_link","Warlock:The Fiend":"https://docs.google.com/document/d/115ZpeMd_W4oD470GfJTPKcLXUSpr1Q7FO73saWaHY20/edit?usp=drive_link","Warlock:The Undying":"https://docs.google.com/document/d/1v840OMGqx-gKhrJG7iMF-Wch2FnwNb5xrxeCOjHtdQg/edit?usp=drive_link","Warlock:The Celestial":"https://docs.google.com/document/d/1ocrI17uZjUC2X41yprT9-Mnr5qsIWAoBCjmci8yxOh0/edit?usp=drive_link","Warlock:The Great Old One":"https://docs.google.com/document/d/14JAK1efLpEC_wHdkTmFzzwmJbD9_R4JyuoVReRvfP9w/edit?usp=drive_link","Warlock:The Archfey":"https://docs.google.com/document/d/1Ah7QIwY1d6YiVdlRA1SpFFWcAbDasWAXv5M0Mav9Sbc/edit?usp=drive_link","Warlock:The Undead":"https://docs.google.com/document/d/1Gn94qLLabeiRXHSn9cPpd6E88OmARfwbkiiSB0VjDpU/edit?usp=drive_link","Warlock:Arch Devil":"https://docs.google.com/document/d/1qjpz0c_wyLLsNziuYzE-3ZCiwK_uyUanAjW61krT0LQ/edit?usp=drive_link","Wizard:School of Illusion":"https://docs.google.com/document/d/1sAnkblrPjO9m94vonSw4rvHF1Nng4oLGvsk_Cyv8MIo/edit?usp=drive_link","Wizard:School of Evocation":"https://docs.google.com/document/d/1GeClpq4xu6wX6WAL6yDJpu7OocQdJZLCE0tOnRTaYAU/edit?usp=drive_link","Wizard:School of Necromancy":"https://docs.google.com/document/d/1ETT3D5YD0yqmKunGAl_Y45IwAKRWaWgYqj0GYSKZCX0/edit?usp=drive_link","Wizard:School of Abjuration":"https://docs.google.com/document/d/1TFZzzN3MqWmYm5hzZq1_gil1p2jevCpnz-IN_Qque20/edit?usp=drive_link","Wizard:School of Conjuration":"https://docs.google.com/document/d/1F4xPjBLr5T6YnBed1hhQRg_26fijGW8wBdpzRpwGe14/edit?usp=drive_link","Wizard:School of Enchantment":"https://docs.google.com/document/d/1X5YRLMNdzuVuLDo7nOIbukG8LA1-9hRQGeg4tX3odzc/edit?usp=drive_link","Wizard:Graviturgy Magic":"https://docs.google.com/document/d/1XnLkEzaaLBDDh0oSiG4Itn1Fy8uWy1BETVEpjR6vHkw/edit?usp=drive_link","Wizard:War Magic":"https://docs.google.com/document/d/14kTNfJq-Rwnq3NDAGQIiuxpK73J_zezlCEef-81Y3Ec/edit?usp=drive_link","Wizard:School of Divination":"https://docs.google.com/document/d/1Yp5bRl2kzmpehpDGtZSngorAYYNVY793PjnZo0vRUZI/edit?usp=drive_link","Wizard:Bladesinging":"https://docs.google.com/document/d/1kV-QCjOU62hvwgIVDvX-8tgPruXDZqwYJ7_qTJllHM4/edit?usp=drive_link","Wizard:School of Transmutation":"https://docs.google.com/document/d/1fKHXPPcdTfq5HVu_V7Fm5P6oGyt90AbBqgzvo2NRydI/edit?usp=drive_link","Wizard:Chronurgy Magic":"https://docs.google.com/document/d/1LSmNdwRj0-Sj3O2VcyrGbDWA8Eo7EbfU6e2aVtyOtOo/edit?usp=drive_link","Wizard:Order of Scribes":"https://docs.google.com/document/d/15x3MdHT1BKi9Sq5uzrez55mKiZXrCUgLsJhrZhWzWHs/edit?usp=drive_link","Wizard:Transmogrification":"https://docs.google.com/document/d/1YTdJi1qXW8j62r_LFVK04drwfysBW0qNkskNHldJYQQ/edit?usp=drive_link","Artificer:Armorer":"https://docs.google.com/document/d/1f1Mz_LrtvFJCl3kNtERJ2L5yjWDLqZQs7U7Z2pM4GU0/edit?usp=drive_link","Artificer:Battle Smith":"https://docs.google.com/document/d/1Swj_XBOHEx0e4QeVBt3S23i9_1CZLdtST0EZOlpBVDQ/edit?usp=sharing","Artificer:Alchemist":"https://docs.google.com/document/d/1CEu2uKIWSjjvPqu5WMmW4Bdm1yNhNziiJuQpfy1Fucg/edit?usp=sharing","Artificer:Artillerist":"https://docs.google.com/document/d/1TRxqZyiQ1ThOTXCpyWRFM3xkGOJlMExuCelxeIiGVIQ/edit?usp=sharing","Artificer:Researcher":"https://docs.google.com/document/d/1EHDFSsZQFW__aoqPbILDhaMP3U7DLB4lqJq6zZLnvOo/edit?usp=sharing","Death Knight:Oath of Vengeance":"https://docs.google.com/document/d/1XIGiXhYJfhqOsihi5Mp5hlL1DhuxFZb9O_R42FXUm3Q/edit?usp=drive_link","Death Knight:Oath of the Ancients":"https://docs.google.com/document/d/1llsFSa2LCruUZgy67ZLDgG8n9OcQauhDql2L_ybsTeU/edit?usp=drive_link","Death Knight:Oath of the Crown":"https://docs.google.com/document/d/1KKeQVB3Ncr7CqqXxHpqbXw8sR3gzceeM6plL9HtRsAQ/edit?usp=drive_link","Death Knight:Oath of Redemption":"https://docs.google.com/document/d/1DXOdtqnM6aXM5cphatDjc3Wy3q3Yh1X0r1AJULH0Mzw/edit?usp=drive_link","Death Knight:Oath of Glory":"https://docs.google.com/document/d/1Mx4p35sZS9WBN7L-k9t0ild3TdErM6WT4NBK_W0jtLs/edit?usp=drive_link","Death Knight:Oath of the Open Sea":"https://docs.google.com/document/d/105wRtnJGzQTIASQhtI7DfOZvDOOSv4kFxNyWA_T8gAw/edit?usp=drive_link","Death Knight:Oath of the Watchers":"https://docs.google.com/document/d/1aWreb0C2ns46m1RTFlg5-GLv72Ls0FYWE3pDOqJhF6M/edit?usp=drive_link","Death Knight:Oath of Devotion":"https://docs.google.com/document/d/14-Pls3ZZKPDh_XmXZPn-2RqxHxQgcbZUdfOxKgrwEQY/edit?usp=drive_link","Death Knight:Oath of Conquest":"https://docs.google.com/document/d/1LNQP1KEtsWIMGrwg-PLxJc63ohR2PoGGMNlqkUMLlgA/edit?usp=drive_link","Death Knight:Oathbreaker":"https://docs.google.com/document/d/1SpQzFje2Jdg-EjwOerQVNizcjQMONYrVkuZ4YV40hXk/edit?usp=drive_link","Death Knight:Oath of Hearth":"https://docs.google.com/document/d/1EAM4SLZqtgYbkzCO4yQbC8xzPMyQi33WDI7fWtionMU/edit?usp=drive_link","Death Knight:Oath of Stability":"https://docs.google.com/document/d/1viFQvXC-fTxqA-jMStCl-e2d-kQV-PmMbHmO4e1383Q/edit?usp=drive_link","Shaman:Calling of Beyond":"https://docs.google.com/document/d/1CBmhfEDc29KhttC5jMaeGlE0Yftiq7KXR5GQ0AbJj4Q/edit?usp=drive_link","Shaman:Calling of Elements":"https://docs.google.com/document/d/1RsTB0k3vTVnFOe1_piugn54KikO5e1WWNLAUUWs6ulU/edit?usp=drive_link","Shaman:Calling of Nature":"https://docs.google.com/document/d/1pVg34j_KKkMvIbk-L2PT_Qqtz8AcVFv8HiI-2ndlarw/edit?usp=drive_link","Shaman:Calling of Balance":"https://docs.google.com/document/d/1n1OBfQ166Uu7bqGC_opnrir-UqEIPzyAakGv4Zeeyck/edit?usp=drive_link","Monk:Way of the Ascendant Dragon":"https://docs.google.com/document/d/1uvCEoFiAoxLpWjnBfDplPbzj6ywgGAj5dhIHFycD8aI/edit?usp=drive_link","Monk:Way of the Four Elements":"https://docs.google.com/document/d/1KrYp53Nsns4RGy5LHpCoCs3toqMZlLXjD4F6jduKNHY/edit?usp=sharing","Warlock:The Fathomless":"https://docs.google.com/document/d/1SryNTn1TRn0PCSLRhpyyAEyKMSaaH4Lp5sG0NNV2_6k/edit?usp=drive_link","Cleric:Death Domain":"https://docs.google.com/document/d/1aI80dushynruve1755YWHjXhd_8YYffoPea0ZqkcAGI/edit?usp=drive_link"};
// v13 subclass source links from the supplied Subclass Links document plus the three supplied missing links.
Object.assign(SUBCLASS_LINKS, {"Artificer:Archivist":"https://docs.google.com/document/d/1akdwMxFdLv8X7msSiQ50Swd1WTrIMrLJZQJvmlUEUtM/edit?usp=drive_link","Artificer:Forge Adept":"https://docs.google.com/document/d/1W-TVyu4pja5IaPo9Mg_32PrwakKVrZ3bAHUtuf3xNdQ/edit?usp=sharing","Artificer:Mastermaker":"https://docs.google.com/document/d/1DlG7XrFmwMESlS4elwbOYnfECmg-TAf0Qa5NiP86fRg/edit?usp=sharing","Artificer:Maverick":"https://docs.google.com/document/d/1sXxku46Ur6hMDMVN57Ez-aa1Oj5TRJWqRIkXXr9EATc/edit?usp=sharing","Barbarian:Path of the Giant":"https://docs.google.com/document/d/1hHIXZqVgmC-UvY99lkVoJqnNHoM_0ggHffewDeQVve0/edit?usp=sharing","Barbarian:Path of the Juggernaut":"https://docs.google.com/document/d/1LK-9k3OoHDsyYjjdRov5tP7X-ZHIzjp7bQipXlPH4gA/edit?usp=sharing","Barbarian:Path of the Depths":"https://docs.google.com/document/d/1LqiriDA_nqa4ocAoLsARV9I2dFnccdBxB4M3pyXVFHQ/edit?usp=sharing","Bard:College of Battle Singer":"https://docs.google.com/document/d/1NqXIQmcv6fDvobjNSEmlyowteqsX15P7g8JbkiSryAw/edit?usp=drive_link","Bard:College of Dance":"https://docs.google.com/document/d/1_V1RFnrnN8m_4YK1vS3k9AMPNYS38_0lnlSe2sJ4xRM/edit?usp=drive_link","Bard:College of the Maestro":"https://docs.google.com/document/d/12F-UkWMlc_MH9a502Qyo35F32aS1lsI3TM_2PQyKrfg/edit?usp=drive_link","Bard:College of Satire":"https://docs.google.com/document/d/1m1BNLehxlJ2SGXPyE1YiymZfm0ntdgPCsNtllCdahI8/edit?usp=drive_link","Brawler:Way of the Living Weapon":"https://docs.google.com/document/d/1JrNOc53s1HczV-L5vvYN7zY5A4uHuOvBKOO-TepxIFI/edit?usp=sharing","Monk:Way of the Living Weapon":"https://docs.google.com/document/d/1K-pMR1Q6TvyUKHg_5hfHKGBDCs6nRgDIOm-EhX4n9U0/edit?usp=drive_link","Cleric:Ambition Domain":"https://docs.google.com/document/d/1W0JGosAlqTnUZPtYWloSj8BjhDQBr4hzEffjFl9QI3o/edit?usp=drive_link","Cleric:Beauty Domain":"https://docs.google.com/document/d/1_yzjx-buCnNbPOSxoKSsYYfCvOMOqG08ctf9TwskLQA/edit?usp=drive_link","Cleric:Blood Domain":"https://docs.google.com/document/d/1Lul1bTL_7R-u8bbD7wF0g_uY2wQqoZrqrryP9TYKoGk/edit?usp=drive_link","Cleric:Mind Domain":"https://docs.google.com/document/d/1FRzcJ0GiLsf0iRMGuN7X12QImo6fJkPsPRkqNeaG8fc/edit?usp=drive_link","Cleric:Protection Domain":"https://docs.google.com/document/d/13bS_O_W9jWYRLdvgYx8ku9lsCZp8kcvoTRKJVxuA2N8/edit?usp=drive_link","Paladin:Oath of Heroism":"https://docs.google.com/document/d/1EkHLrZjIFaPU_jP25W7fe1qgiuQw1dZtDVKizLySzJE/edit?usp=drive_link","Paladin:Oath of Treachery":"https://docs.google.com/document/d/1G673geZjH6gFxNyT9j-C9g5yXz8y30lNWO4rvW-CKHY/edit?usp=drive_link","Paladin:Oath of the Watchers":"https://docs.google.com/document/d/1bFRLEwlh6Fba6d3_rQJwBg-qYaP68jyKA6gspseGkqA/edit?usp=drive_link","Death Knight:Oath of Heroism":"https://docs.google.com/document/d/1Kv2AmTEydyTs6qeCMq9Uv7IvrBeMzJSapS3L1evf-JQ/edit?usp=drive_link","Death Knight:Oath of Treachery":"https://docs.google.com/document/d/1x5n-vDijXEak9jw48jgT8R-HYJ1cttriZZqPTwtkPEE/edit?usp=drive_link","Death Knight:Oath of the Watchers":"https://docs.google.com/document/d/1aWreb0C2ns46m1RTFlg5-GLv72Ls0FYWE3pDOqJhF6M/edit?usp=drive_link","Fighter:Banneret":"https://docs.google.com/document/d/1wVPd94bc-9eDSapnuTWohV0LXezDNi4YQhFYgzXTFuE/edit?usp=drive_link","Fighter:Brute":"https://docs.google.com/document/d/1kTy4xUrMrvnMNn9vCixBq6JiXLMbaqRHqavZ06tMooc/edit?usp=drive_link","Fighter:Knight":"https://docs.google.com/document/d/1YHJlek5VyB5GUgeke4PNo-YICrhUq-n4fzobngDpOtc/edit?usp=drive_link","Fighter:Monster Hunter":"https://docs.google.com/document/d/1HHhxuRh5tcPO7HuWKMZ7_hf9M3OwJ90tbf9NBkJZJpU/edit?usp=drive_link","Fighter:Renegade":"https://docs.google.com/document/d/1QG_yGEv_azbIDbqNmRYXxZgG6tHlS0PwEGYlX4vR_oU/edit?usp=drive_link","Fighter:Sharpshooter":"https://docs.google.com/document/d/1U54Mfql-aAm6ynBU4dB0SR8wjRfXVkKXwKEXh1V-rsU/edit?usp=drive_link","Sorcerer:Favored Soul":"https://docs.google.com/document/d/1rvWM1nCGwap2JE3UKNQMDieV42LnwN2SA9QelFn_A-4/edit?usp=drive_link","Sorcerer:Giant Soul":"https://docs.google.com/document/d/1Ok7lCLHcmVUWor5H_JawPXbs0ZITfJHl6FsRGzLz5UQ/edit?usp=drive_link","Sorcerer:Lunar Sorcery":"https://docs.google.com/document/d/1Sq7GKucaWeF_5YTMUi7eWTy0c2pGLbFVLTpjJoeNlMw/edit?usp=drive_link","Sorcerer:Pyromancy":"https://docs.google.com/document/d/1jSNiWVxxAw7IOcZ4ZZYTRwxbcd7JTeGCCQP-tQVpDaM/edit?usp=drive_link","Sorcerer:Sea Sorcery":"https://docs.google.com/document/d/1pKiJWOaI_XmXLk7wfyvfswNM9OxmtfeESpJHSUR_2vs/edit?usp=drive_link","Sorcerer:Stone Sorcery":"https://docs.google.com/document/d/1gH8rzCyjqkAksLvYrKWvHObh96hNhLSvrmobEF7sPmA/edit?usp=drive_link","Warlock:The Kraken":"https://docs.google.com/document/d/1Ne1Xd59SINO7GFacerOpstMvgzX6alWmTlJD-gpSB94/edit?usp=drive_link","Warlock:The Noble Genie":"https://docs.google.com/document/d/1usvCpA-VViMnehwQuWEAqiFHQ4nbE-GGV1krFxOkbyQ/edit?usp=drive_link","Warlock:The Raven Queen":"https://docs.google.com/document/d/14X63W1DJma-9iFPYy8EZmmvFYL7tVddGbNw7jIlRUMM/edit?usp=drive_link","Wizard:School of Artificer":"https://docs.google.com/document/d/10Q3AyhifmGSL0bp58-4A69fqTvNwDy243BcFPBtdVWA/edit?usp=drive_link","Wizard:School of Invention":"https://docs.google.com/document/d/1v99wU99ch_y7zPkPlye-xEqZRCk4MYvw1S90uOq3Gxk/edit?usp=drive_link","Wizard:School of Onomancy":"https://docs.google.com/document/d/1hDTeQpaZ_bQ0y1ZjAZcRbSWna4RbFe6tqj7HkU1GYms/edit?usp=drive_link","Wizard:School of Theurgy":"https://docs.google.com/document/d/1HqBOuFBe8vgGngsBttCt-o4Q7ty7QFihx1N3qs6h2dg/edit?usp=drive_link","Cleric:Entropy Domain":"https://docs.google.com/document/d/1IBYgcNsHa2N_QY0b08IPaG3OVBOhQuJsTSb19MKDwxk/edit?tab=t.0","Bard:College of Leadership":"https://docs.google.com/document/d/1vCHsT6ZBpGjAoJdNYmMgDYoqCdTf3ORPmU_LjrIiRQc/edit?tab=t.0"});
delete SUBCLASS_LINKS["Fighter:Purple Dragon Knight"];


const CUSTOM_DESCRIPTIONS = {
  "Barbarian:Path of Frost":"Infused with ice and powered by cold damage.",
  "Barbarian:Path of Rejuvenation":"Uses rage to heal themselves and allies.",
  "Barbarian:Path of Time":"Uses chronomancy to heal allies and support rolls.",
  "Bard:College of Encouragement":"Uses inspiration to improve critical-hit chances.",
  "Bard:College of Leadership":"Uses inspiration for temporary HP and tanking support.",
  "Bard:College of Fools":"Focuses on chaos and random utility for allies through unpredictable effects and rolls.",
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
  "Artificer:Researcher":"Becomes a fullcaster focused on damaging magic with some support.",
  "Shaman:Calling of Beyond":"Uses undead spirit minions and turns the deaths of creatures to its advantage.",
  "Shaman:Calling of Elements":"A full caster wielding elemental magic alongside elemental minions.",
  "Shaman:Calling of Nature":"Focuses on healing allies and cleansing conditions so those conditions can be used later.",
  "Shaman:Calling of Balance":"Uses the elements to enhance martial combat and fight on the frontline.",
  "Artificer:Archivist":"Stores knowledge in an artificial mind, using arcane information and a manifested spectral intellect for scouting, skills, and flexible spell delivery.",
  "Artificer:Forge Adept":"A weapon-and-armor-focused artificer who strengthens allies and channels soul energy through forged equipment.",
  "Artificer:Mastermaker":"A heavy-armored artificer who replaces flesh with magical prosthetics and fights through a powerful battlefist.",
  "Artificer:Maverick":"An experimental artificer who borrows spells from many magical traditions and constantly changes their toolkit.",
  "Barbarian:Path of the Giant":"Grows into a giant-like elemental powerhouse, using oversized weapons and thrown attacks while raging.",
  "Barbarian:Path of the Juggernaut":"An unstoppable melee barbarian built around durability, forced movement, and controlling space with powerful blows.",
  "Barbarian:Path of the Depths":"An oceanic barbarian who manifests deep-sea adaptations, reach, grappling, mobility, and resilience while raging.",
  "Bard:College of Battle Singer":"A martial-support bard who turns performance into battlefield direction, empowering allies while fighting alongside them.",
  "Bard:College of Dance":"A mobile, unarmored bard who fights through rhythmic movement, unarmed strikes, evasive defense, and ally repositioning.",
  "Bard:College of the Maestro":"A battlefield conductor who manipulates sound and rhythm to empower allies, disrupt foes, and reshape combat.",
  "Bard:College of Satire":"A witty, acrobatic bard focused on skills, mobility, misdirection, and magical social manipulation.",
  "Brawler:Way of the Living Weapon":"A defensive Brawler expression of the Living Weapon tradition, using adaptable natural weapons and close-range martial techniques.",
  "Monk:Way of the Living Weapon":"A martial tradition that turns the body into a versatile weapon, with adaptive damage, reach, fear, and bleeding techniques.",
  "Cleric:Ambition Domain":"A cunning divine domain using illusion, curses, invisibility, and decisive spell damage to pursue personal power.",
  "Cleric:Beauty Domain":"A divine domain centered on charm, inspiration, emotional influence, and ending conflicts through control rather than bloodshed.",
  "Cleric:Blood Domain":"A martial divine domain that manipulates blood, sacrifices vitality for power, controls enemies, and adds persistent pressure to damage.",
  "Cleric:Mind Domain":"A psychic divine domain built around mental control, rerolls, disruptive saving throws, and protection through psychic power.",
  "Cleric:Protection Domain":"A heavily armored guardian who redirects attacks, protects allies, and reinforces the party with defensive magic.",
  "Paladin:Oath of Heroism":"A heroic martial oath built around decisive critical strikes, athleticism, battlefield momentum, and inspiring allies.",
  "Paladin:Oath of Treachery":"A self-serving blackguard oath using deception, poison, mobility, and punishing melee tactics.",
  "Paladin:Oath of the Watchers":"A vigilant oath focused on protecting the mortal realm from extraplanar threats through defense, control, and supernatural awareness.",
  "Death Knight:Oath of Heroism":"A Death Knight version of the Heroism oath, emphasizing martial burst, critical strikes, mobility, and battlefield support.",
  "Death Knight:Oath of Treachery":"A Death Knight version of the Treachery oath, emphasizing deceptive melee pressure, poison, mobility, and control.",
  "Death Knight:Oath of the Watchers":"A Death Knight version of the Watchers oath, focused on defense and control against extraplanar threats.",
  "Fighter:Banneret":"A battlefield leader who uses martial presence and rallying abilities to support allies.",
  "Fighter:Brute":"A straightforward heavy hitter built around reliable weapon damage and exceptional durability.",
  "Fighter:Knight":"An armored protector who marks dangerous foes, controls the frontline, and shields allies.",
  "Fighter:Monster Hunter":"A tactical fighter specializing in supernatural threats, with skills, tools, detection, and precise weapon damage.",
  "Fighter:Renegade":"A firearm-focused fighter who builds custom weapons, combines ranged damage with skillful tricks, and adapts their gun for different jobs.",
  "Fighter:Sharpshooter":"A dedicated ranged fighter who excels at long-distance accuracy, scouting, and repeated weapon attacks.",
  "Sorcerer:Favored Soul":"A divine sorcerer who gains clerical domain magic, armor, shields, and martial capability.",
  "Sorcerer:Giant Soul":"A giant-blooded sorcerer who gains elemental power and unusual physical resilience.",
  "Sorcerer:Lunar Sorcery":"A lunar sorcerer who changes between magical phases to access different spell schools and flexible magical effects.",
  "Sorcerer:Pyromancy":"A fire-specialist sorcerer whose spells are built around explosive fire damage and resistance-piercing flames.",
  "Sorcerer:Sea Sorcery":"An elemental-water sorcerer using curses, forced movement, mobility, and defensive watery transformation.",
  "Sorcerer:Stone Sorcery":"An earth-infused battle sorcerer with martial weapons, strong defenses, ally protection, and melee spell combat.",
  "Warlock:The Kraken":"A storm-and-ocean warlock who manifests spectral tentacles and controls enemies with elemental and battlefield effects.",
  "Warlock:The Noble Genie":"A genie-pact warlock with broad elemental magic, utility, and flexible magical options.",
  "Warlock:The Raven Queen":"A death-themed warlock accompanied by a spirit raven that provides scouting, perception, and a persistent supernatural companion.",
  "Wizard:School of Artificer":"An arcane tradition that blends wizardry with artificer-style invention and magical item craftsmanship.",
  "Wizard:School of Invention":"An experimental wizard tradition focused on volatile, flexible arcane invention and unusual magical effects.",
  "Wizard:School of Onomancy":"A true-name wizard who manipulates magic through names, curses, blessings, and precise control over targets.",
  "Wizard:School of Theurgy":"A wizard tradition that combines arcane study with a chosen cleric domain and divine channeling.",
  "Cleric:Entropy Domain":"A domain centered on entropy and destabilization, using control and utility with a small unpredictable or chaotic edge.",
  "Artificer:Mech":"A custom artificer specialization centered on piloting a magical mechanized suit, combining heavy equipment, mobility, and constructed firepower."

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
  Barbarian:{tank:5,defense:4,sustained:4,burst:3,mobility:2,aoe:2,singleTarget:3,healing:0,utility:1,control:1,support:1,range:0,chaos:1,arcane:0,summoner:0},
  Bard:{skills:12,support:5,utility:5,control:3,healing:2,mobility:2,range:2,burst:2,defense:1,aoe:2,sustained:2,singleTarget:1,tank:0,chaos:1,arcane:5,summoner:0.5},
  Cleric:{healing:5,support:4,defense:4,utility:3,aoe:3,control:2,sustained:2,burst:2,tank:2,singleTarget:2,mobility:1,range:2,chaos:0,arcane:0.5,summoner:0.5},
  Druid:{aoe:4,control:4,utility:4,healing:4,support:3,sustained:3,mobility:2,defense:2,range:2,burst:2,singleTarget:2,tank:2,chaos:1,arcane:0,summoner:1.5},
  Fighter:{singleTarget:4,sustained:5,burst:4,tank:4,defense:3,range:2,aoe:2,mobility:2,utility:2,control:1,support:0,healing:0,chaos:0,arcane:1,summoner:0},
  Monk:{mobility:5,sustained:4,singleTarget:4,control:3,defense:3,burst:3,aoe:2,utility:2,tank:2,range:1,support:1,healing:0,chaos:0,arcane:0,summoner:0},
  Brawler:{defense:7,tank:5,sustained:4,singleTarget:4,burst:3,control:3,mobility:1.5,aoe:2,utility:2,range:0,support:1,healing:0,chaos:0,arcane:0,summoner:0},
  Paladin:{tank:5,defense:5,support:4,burst:4,healing:2,singleTarget:3,sustained:2,control:2,utility:2,aoe:2,mobility:1,range:1,chaos:0,arcane:0,summoner:0},
  Ranger:{skills:12,range:5,singleTarget:4,sustained:4,mobility:4,utility:3,burst:3,control:2,aoe:2,defense:2,support:2,healing:0,tank:1,chaos:0,arcane:0,summoner:2},
  Rogue:{skills:12,singleTarget:5,burst:5,mobility:4,utility:4,sustained:3,range:3,control:2,aoe:1,defense:1,support:1,healing:0,tank:0,chaos:1,arcane:1,summoner:0},
  Sorcerer:{burst:5,aoe:4,range:4,sustained:3,control:3,singleTarget:3,utility:3,mobility:2,defense:1,support:1,healing:0,tank:0,chaos:2,arcane:5,summoner:0.5},
  Warlock:{sustained:4,singleTarget:4,burst:4,range:4,control:4,utility:3,aoe:3,defense:1,support:1,mobility:2,healing:0,tank:0,chaos:1,arcane:5,summoner:0.5},
  Wizard:{utility:5,control:5,aoe:5,burst:4,range:4,singleTarget:3,sustained:3,defense:2,mobility:2,support:1,healing:0,tank:0,chaos:0,arcane:6,summoner:1},
  Artificer:{skills:12,utility:5,support:4,defense:4,range:3,sustained:3,control:3,aoe:2,singleTarget:2,burst:2,mobility:2,healing:1,tank:3,chaos:1,arcane:5,summoner:1},
  "Death Knight":{tank:5,defense:5,singleTarget:4,burst:4,sustained:3,control:3,healing:0,support:1,aoe:2,mobility:1,utility:2,range:1,chaos:0,arcane:0,summoner:0},
  Shaman:{sustained:5,support:5,utility:5,skills:8,aoe:3,singleTarget:2,healing:2,chaos:1,burst:2,control:2,range:3,mobility:2,defense:2,tank:2,arcane:2,summoner:1.5}
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
    "Circle of Wildfire","Circle of the Moon","Circle of Fangs","Circle of Fey","Circle of Drakes","Calling of Elements",
    "Fey Wanderer","Gloom Stalker","Monster Slayer","Swarmkeeper","Hunter","Beast Master",
    "Drakewarden","Horizon Walker","Shelter Conclave","Royalty Conclave"
  ],
  chaos:[
    "Path of Wild Magic","Circle of Fey","College of Spirits","College of Fools","Outlaw","Wild Magic","Alchemist","Fate","Entropy Domain"
  ],
  holy:[
    "War Domain","Peace Domain","Grave Domain","Light Domain","Life Domain",
    "Forge Domain","Order Domain","Oath of Devotion","Oath of Vengeance",
    "Oath of Redemption","Oath of Glory","Oath of Conquest","Oath of the Watchers",
    "Divine Soul","The Celestial","Path of the Zealot","Oath of Hearth"
  ],
  melee:[
    "Path of the Totem Warrior","Path of Wild Magic","Path of the Zealot","Path of the Battlerager",
    "Path of the Berserker","Path of the Beast","Path of the Storm Herald","Path of the Ancestral Guardian",
    "Path of Frost","Path of Rejuvenation","Path of Time",
    "College of Valor","College of Swords","College of Leadership",
    "War Domain","Tempest Domain","Forge Domain","Life Domain","Order Domain","Pestilence",
    "Circle of the Moon","Circle of Fangs","Circle of Fey","Circle of Drakes",
    "Samurai","Echo Knight","Gunslinger","Eldritch Knight","Rune Knight","Psi Warrior","Cavalier",
    "Champion","Purple Dragon Knight","Battle Master","Titan","Soul Cleaver","Dragoon",
    "Way of the Drunken Master","Way of the Open Hand","Way of the Long Death","Way of the Ascendant Dragon",
    "Way of Shadow","Way of Mercy","Way of the Four Elements","Way of the Cobalt Soul","Way of the Sun Soul",
    "Way of the Astral Self","Way of the Kensei","Way of Lethality",
    "Oath of Vengeance","Oath of the Ancients","Oath of the Crown","Oath of Redemption","Oath of Glory",
    "Oath of the Open Sea","Oath of the Watchers","Oath of Devotion","Oath of Conquest","Oathbreaker",
    "Oath of Hearth","Oath of Stability",
    "The Hexblade","The Undead","Arch Devil",
    "Bladesinging","War Magic","Transmogrification",
    "Armorer","Battle Smith","Calling of Balance"
  ]
};

// ARCANE ROLE vs ARCANE SIGNAL
// Role = the subclass's own identity is substantially built around arcane magic.
// Signal = the subclass has any meaningful arcane-magic component in its kit.
// Keeping these separate prevents every spellcaster from being displayed as an ARCANE role.
SUBCLASS_TAGS.arcane=[...new Set([
  "Arcane Archer","Eldritch Knight","Arcane Trickster","Arcana Domain",
  "Archivist","Maverick","Artillerist","School of Artificer","School of Invention","School of Onomancy","School of Theurgy",
  "School of Illusion","School of Evocation","School of Abjuration","School of Conjuration","School of Enchantment",
  "School of Necromancy","School of Divination","School of Transmutation","Order of Scribes",
  "Bladesinging","War Magic","Graviturgy Magic","Chronurgy Magic"
])];

// SUMMONER ROLE vs SUMMONER SIGNAL
// Role = a companion/minion/construct/spirit is a defining subclass feature.
// Signal = the subclass can create, command, or directly fight through such a thing.
SUBCLASS_TAGS.summoner=[...new Set([
  "Artillerist","Archivist","Battle Smith","College of Creation","Circle of Wildfire",
  "Circle of the Shepherd","Beast Master","Drakewarden","Swarmkeeper","School of Conjuration","School of Necromancy",
  "Order of Scribes","Calling of Beyond","Calling of Elements","The Raven Queen","The Fathomless","Oathbreaker",
  "Echo Knight","Knight","Banneret","Arch Devil","Mech"
])];

// Additional close-combat identities for the expanded subclass library.
SUBCLASS_TAGS.melee=[...new Set([...SUBCLASS_TAGS.melee,
  "Path of the Giant","Path of the Juggernaut","Path of the Depths","College of Dance","Forge Adept","Mastermaker",
  "Blood Domain","Protection Domain","Oath of Heroism","Oath of Treachery","Oath of the Watchers","Banneret","Brute","Knight","Monster Hunter",
  "Way of the Living Weapon","Favored Soul","Stone Sorcery"
])];
SUBCLASS_TAGS.ranged=[...new Set([...SUBCLASS_TAGS.ranged,"Renegade","Sharpshooter","Path of the Giant"])];

// Shaman is explicitly nature-aligned across all four callings; Calling of Nature is also a healing role.
SUBCLASS_TAGS.nature=[...new Set([...(SUBCLASS_TAGS.nature||[]),"Calling of Beyond","Calling of Elements","Calling of Nature","Calling of Balance"])];
SUBCLASS_TAGS.healing=[...new Set([...(SUBCLASS_TAGS.healing||[]),"Calling of Nature"] )];

// Broad signals are intentionally wider than the role tags.
// Arcane signal: any subclass whose kit has meaningful arcane spellcasting/magic,
// including ordinary spellcasting subclasses; divine/nature identity does not erase the signal.
const ARCANE_SIGNAL_SUBCLASSES=new Set([
  ...CLASS_DATA.Bard,...CLASS_DATA.Sorcerer,...CLASS_DATA.Warlock,...CLASS_DATA.Wizard,...CLASS_DATA.Artificer,
  "Arcane Archer","Eldritch Knight","Arcane Trickster","Arcana Domain","Rune Knight","Psi Warrior","Echo Knight",
  "Path of the Giant","Path of Wild Magic","Path of Time","Path of Frost","College of Maestro","College of the Maestro",
  "College of Creation","College of Spirits","College of Satire","College of Dance","College of Battle Singer",
  "Oath of Heroism","Oath of Treachery","Oath of the Watchers","Favored Soul","Giant Soul","Sea Sorcery","Stone Sorcery"
]);

// Broad summoner signal: any subclass whose subclass features create, call, command,
// or materially operate through a companion, minion, construct, spirit, swarm, echo, or undead.
const SUMMONER_SIGNAL_SUBCLASSES=new Set([
  ...SUBCLASS_TAGS.summoner,
  "Artillerist","Battle Smith","Circle of Wildfire","Circle of the Shepherd","Beast Master","Drakewarden",
  "Swarmkeeper","School of Conjuration","School of Necromancy","Order of Scribes","The Fathomless",
  "The Raven Queen","Calling of Beyond","Calling of Elements","Oathbreaker","Echo Knight","Knight","Banneret",
  "Arch Devil","Mech"
]);

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
  "Pestilence":{sustained:4,singleTarget:2.5,control:1.5,utility:1},
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

// Every subclass must have direct signals. These entries complete the original Barbarian/Bard data
// and add the new subclasses/classes. Brawler intentionally mirrors Monk subclass signals.
Object.assign(SUBCLASS_SIGNALS,{
  "Path of the Totem Warrior":{tank:3,defense:3,sustained:2,support:2},
  "Path of Wild Magic":{chaos:4,burst:2,utility:2,mobility:1},
  "Path of the Zealot":{singleTarget:3,burst:3,defense:2},
  "Path of the Battlerager":{tank:3,defense:3,sustained:2},
  "Path of the Berserker":{sustained:3,singleTarget:3,burst:2},
  "Path of the Beast":{sustained:3,mobility:2,singleTarget:2,defense:1},
  "Path of the Storm Herald":{aoe:3,sustained:2,defense:2},
  "Path of the Ancestral Guardian":{tank:3,defense:3,support:2,control:1},
  "Path of Frost":{sustained:3,aoe:2,control:1,defense:1},
  "Path of Rejuvenation":{healing:4,support:3,defense:1},
  "Path of Time":{utility:3,support:3,healing:2,mobility:1},

  "College of Eloquence":{support:3,utility:3,control:2,skills:2},
  "College of Whispers":{singleTarget:3,burst:2.5,stealth:2,utility:1},
  "College of Spirits":{chaos:3,utility:3,support:2,healing:2,control:1},
  "College of Lore":{utility:3,skills:3,control:2,support:2},
  "College of Valor":{support:2,defense:2,singleTarget:2,sustained:1},
  "College of Swords":{singleTarget:2.5,mobility:2.5,defense:2,sustained:2},
  "College of Creation":{utility:3,support:3,aoe:1.5,control:1},
  "College of Glamour":{support:3,mobility:2,control:2,utility:2},
  "College of Encouragement":{support:3,burst:2,skills:2,utility:1},
  "College of Leadership":{support:4,tank:2,defense:2,utility:1},

  "College of Fools":{chaos:4,utility:3,support:2,control:1},
  "Dragoon":{aoe:3,sustained:3,mobility:3,singleTarget:2,range:1},

  "Calling of Beyond":{singleTarget:3,utility:3,burst:2.5,control:1},
  "Calling of Elements":{aoe:4,burst:3,utility:3,range:2,nature:1},
  "Calling of Nature":{healing:4,support:3,control:2,utility:2},
  "Calling of Balance":{singleTarget:3,burst:2.5,sustained:3,defense:1,mobility:1}
});

Object.assign(SUBCLASS_SIGNALS,{
  "College of Creation":{utility:3,support:3,aoe:1.5,control:1,summoner:4},
  "Circle of the Shepherd":{support:3,healing:2.5,utility:2,summoner:5},
  "Echo Knight":{mobility:3,utility:2,control:1.5,summoner:4},
  "Knight":{tank:3,defense:3,support:2,control:2,mobility:1,summoner:1},
  "Banneret":{support:3,defense:2,utility:2,sustained:2,summoner:1},
  "Oathbreaker":{burst:2.5,control:2,sustained:2,utility:2,summoner:3},
  "Swarmkeeper":{control:2,mobility:2,range:2,utility:2,nature:2,summoner:4},
  "Arch Devil":{burst:3,singleTarget:3,control:2,utility:2,summoner:2},
  "School of Necromancy":{sustained:2.5,control:2,utility:2,range:1.5,summoner:4},
  "Order of Scribes":{utility:3,control:2,skills:2,range:2,arcane:3,summoner:2},
  "Mech":{defense:3,tank:3,singleTarget:3,sustained:2,range:2,utility:2,arcane:2,summoner:4},
  "Calling of Nature":{healing:4,support:3,control:2,utility:2,nature:3},
  "Calling of Beyond":{singleTarget:3,utility:3,burst:2.5,control:1,summoner:4,nature:1},
  "Calling of Elements":{aoe:4,burst:3,utility:3,range:2,nature:3,summoner:4},
  "Calling of Balance":{singleTarget:3,burst:2.5,sustained:3,defense:1,mobility:1,nature:3}
});

Object.assign(SUBCLASS_SIGNALS,{"Archivist":{"utility":3,"skills":3,"control":2,"support":2,"range":1,"arcane":3,"summoner":4},"Forge Adept":{"singleTarget":3,"sustained":2.5,"defense":2,"support":1.5,"skills":2,"arcane":2},"Mastermaker":{"defense":3,"tank":2.5,"singleTarget":2.5,"sustained":2,"skills":2,"arcane":2},"Maverick":{"utility":4,"control":2,"skills":3,"arcane":4},"Path of the Giant":{"aoe":2.5,"sustained":3,"range":1.5,"singleTarget":2,"defense":2,"mobility":1},"Path of the Juggernaut":{"tank":3,"defense":3,"control":2,"sustained":3,"singleTarget":2},"Path of the Depths":{"sustained":3,"singleTarget":2.5,"mobility":2,"defense":2,"control":2,"range":1},"College of Battle Singer":{"support":3,"sustained":2,"singleTarget":2,"defense":1.5,"skills":2},"College of Dance":{"mobility":4,"defense":2.5,"singleTarget":2,"support":2,"skills":2},"College of the Maestro":{"support":4,"utility":3,"control":2,"skills":1.5,"arcane":2},"College of Satire":{"skills":3,"mobility":3,"utility":2.5,"control":2,"stealth":1},"Way of the Living Weapon":{"singleTarget":3,"sustained":3,"control":2,"mobility":2,"defense":1.5},"Ambition Domain":{"utility":3,"control":2.5,"singleTarget":2.5,"burst":2,"mobility":1},"Beauty Domain":{"control":3,"support":3,"utility":2,"healing":1},"Blood Domain":{"singleTarget":3,"sustained":2.5,"control":2,"utility":2,"defense":1},"Mind Domain":{"control":3,"utility":3,"support":2,"singleTarget":1.5,"skills":2},"Protection Domain":{"tank":3,"defense":4,"support":3,"healing":1.5,"singleTarget":1},"Oath of Heroism":{"burst":3,"singleTarget":2.5,"mobility":2,"support":2,"defense":2},"Oath of Treachery":{"singleTarget":3,"burst":2.5,"mobility":2,"control":2,"utility":1},"Oath of the Watchers":{"defense":3,"control":2,"support":2,"utility":2},"Banneret":{"support":3,"defense":2,"utility":2,"sustained":2},"Brute":{"singleTarget":3.5,"sustained":3,"defense":3,"tank":2},"Knight":{"tank":3,"defense":3,"support":2,"control":2,"mobility":1},"Monster Hunter":{"singleTarget":3,"utility":3,"skills":3,"control":1.5,"range":1},"Renegade":{"range":4,"singleTarget":3,"burst":2.5,"skills":3,"aoe":1.5},"Sharpshooter":{"range":4,"singleTarget":3,"sustained":2.5,"skills":2,"burst":2},"Favored Soul":{"healing":3,"support":3,"defense":2,"singleTarget":2,"holy":3},"Giant Soul":{"sustained":2.5,"defense":2,"aoe":2,"singleTarget":2},"Lunar Sorcery":{"utility":3,"control":2,"range":2,"burst":1.5},"Pyromancy":{"aoe":3,"burst":3,"sustained":2,"range":2},"Sea Sorcery":{"control":3,"mobility":2,"utility":2,"defense":2,"range":2},"Stone Sorcery":{"tank":2.5,"defense":3,"singleTarget":3,"sustained":2,"support":2},"The Kraken":{"aoe":3,"control":3,"range":2,"burst":2,"sustained":2},"The Noble Genie":{"utility":3,"range":2,"sustained":2.5,"control":1.5,"arcane":3},"The Raven Queen":{"summoner":4,"utility":3,"skills":2,"defense":2,"range":1.5,"control":1.5},"School of Artificer":{"utility":3,"skills":3,"arcane":4,"sustained":2,"defense":1.5},"School of Invention":{"utility":3,"burst":2,"aoe":2,"arcane":4,"chaos":1},"School of Onomancy":{"control":3,"utility":3,"skills":2,"arcane":4},"School of Theurgy":{"utility":3,"support":2,"control":2,"arcane":3,"holy":1},"Entropy Domain":{"control":2.5,"utility":2,"chaos":1.5,"aoe":1.5}});

// Apply broad Arcane/Summoner signals without turning those signals into role tags.
for(const cls of Object.keys(CLASS_DATA)) for(const sub of CLASS_DATA[cls]){
  if(!SUBCLASS_SIGNALS[sub]) SUBCLASS_SIGNALS[sub]={};
  if(ARCANE_SIGNAL_SUBCLASSES.has(sub)) SUBCLASS_SIGNALS[sub].arcane=Math.max(SUBCLASS_SIGNALS[sub].arcane||0,1);
  if(SUMMONER_SIGNAL_SUBCLASSES.has(sub)) SUBCLASS_SIGNALS[sub].summoner=Math.max(SUBCLASS_SIGNALS[sub].summoner||0,1);
}

Object.assign(SUBCLASS_SIGNALS,{
  "College of Creation":{utility:3,support:3,aoe:1.5,control:1,summoner:4},
  "Circle of the Shepherd":{support:3,healing:2.5,utility:2,summoner:5},
  "Echo Knight":{mobility:3,utility:2,control:1.5,summoner:4},
  "Knight":{tank:3,defense:3,support:2,control:2,mobility:1,summoner:1},
  "Banneret":{support:3,defense:2,utility:2,sustained:2,summoner:1},
  "Oathbreaker":{burst:2.5,control:2,sustained:2,utility:2,summoner:3},
  "Swarmkeeper":{control:2,mobility:2,range:2,utility:2,nature:2,summoner:4},
  "Arch Devil":{burst:3,singleTarget:3,control:2,utility:2,summoner:2},
  "School of Necromancy":{sustained:2.5,control:2,utility:2,range:1.5,summoner:4},
  "Order of Scribes":{utility:3,control:2,skills:2,range:2,arcane:3,summoner:2},
  "Mech":{defense:3,tank:3,singleTarget:3,sustained:2,range:2,utility:2,arcane:2,summoner:4}
});

for(const sub of CLASS_DATA.Monk){
  if(SUBCLASS_SIGNALS[sub]) SUBCLASS_SIGNALS[sub]={...SUBCLASS_SIGNALS[sub]};
}

// Any subclass explicitly tagged as a tank is also considered a meaningful frontline/melee option.
SUBCLASS_TAGS.melee=[...new Set([...SUBCLASS_TAGS.melee,...SUBCLASS_TAGS.tank])];

const CHAOS_SUBCLASSES=new Set([
  "Path of Wild Magic","Circle of Fey","College of Spirits","College of Fools","Outlaw","Wild Magic","Alchemist","Fate","Entropy Domain"
]);

const HARD_HEALING_SUBCLASSES=new Set(SUBCLASS_TAGS.healing);
const HARD_TANK_SUBCLASSES=new Set(SUBCLASS_TAGS.tank);
const HARD_STEALTH_SUBCLASSES=new Set(SUBCLASS_TAGS.stealth);
const HARD_RANGE_SUBCLASSES=new Set(SUBCLASS_TAGS.ranged);
const HARD_ARCANE_SUBCLASSES=new Set(SUBCLASS_TAGS.arcane);
const HARD_SUMMONER_SUBCLASSES=new Set(SUBCLASS_TAGS.summoner);

const SPELLCASTER_CLASSES=new Set(["Bard","Cleric","Druid","Paladin","Ranger","Sorcerer","Warlock","Wizard","Artificer","Death Knight","Shaman"]);
const SPELLCASTING_SUBCLASSES=new Set(["Eldritch Knight","Arcane Trickster","Way of the Four Elements","Way of the Sun Soul"]);

// Wiki/source classification for the newly expanded subclass set.
// These labels come from the dnd5e.wikidot.com class/subclass indexes and pages where available.
const SUBCLASS_SOURCE_OVERRIDES={
  "Artificer:Archivist":"ARCHIVED UA","Artificer:Forge Adept":"HB","Artificer:Mastermaker":"HB","Artificer:Maverick":"HB","Artificer:Mech":"CUSTOM",
  "Barbarian:Path of the Giant":"PUBLISHED","Barbarian:Path of the Juggernaut":"HB","Barbarian:Path of the Depths":"HB",
  "Bard:College of Battle Singer":"WIKI UNKNOWN","Bard:College of Dance":"2024 PHB","Bard:College of the Maestro":"HB","Bard:College of Satire":"ARCHIVED UA",
  "Brawler:Way of the Living Weapon":"ADAPTED FROM HB",
  "Cleric:Ambition Domain":"AMONKHET","Cleric:Beauty Domain":"HB","Cleric:Blood Domain":"HB","Cleric:Mind Domain":"HB","Cleric:Protection Domain":"ARCHIVED UA","Cleric:Entropy Domain":"WIKI UNKNOWN",
  "Fighter:Banneret":"PUBLISHED","Fighter:Brute":"ARCHIVED UA","Fighter:Knight":"ARCHIVED UA","Fighter:Monster Hunter":"ARCHIVED UA","Fighter:Renegade":"HB","Fighter:Sharpshooter":"ARCHIVED UA",
  "Monk:Way of the Living Weapon":"HB",
  "Paladin:Oath of Heroism":"ARCHIVED UA","Paladin:Oath of Treachery":"ARCHIVED UA",
  "Death Knight:Oath of Heroism":"ADAPTED FROM ARCHIVED UA","Death Knight:Oath of Treachery":"ADAPTED FROM ARCHIVED UA",
  "Sorcerer:Favored Soul":"ARCHIVED UA","Sorcerer:Giant Soul":"ARCHIVED UA","Sorcerer:Lunar Sorcery":"PUBLISHED","Sorcerer:Pyromancy":"KALADESH","Sorcerer:Sea Sorcery":"ARCHIVED UA","Sorcerer:Stone Sorcery":"ARCHIVED UA",
  "Warlock:The Kraken":"HB","Warlock:The Noble Genie":"ARCHIVED UA","Warlock:The Raven Queen":"ARCHIVED UA",
  "Wizard:School of Artificer":"ARCHIVED UA","Wizard:School of Invention":"ARCHIVED UA","Wizard:School of Onomancy":"ARCHIVED UA","Wizard:School of Theurgy":"ARCHIVED UA",
  "Bard:College of Creation":"PUBLISHED","Paladin:Oathbreaker":"PUBLISHED","Death Knight:Oathbreaker":"ADAPTED FROM PUBLISHED",
  "Druid:Circle of the Shepherd":"PUBLISHED","Fighter:Echo Knight":"PUBLISHED","Ranger:Swarmkeeper":"PUBLISHED",
  "Wizard:School of Necromancy":"PUBLISHED","Wizard:Order of Scribes":"PUBLISHED","Warlock:Arch Devil":"WIKI UNKNOWN"
};
function subclassSourceLabel(cls,sub){return SUBCLASS_SOURCE_OVERRIDES[`${cls}:${sub}`] || (CUSTOM_DESCRIPTIONS[`${cls}:${sub}`]?"CUSTOM":"");}
function subclassBadgeText(cls,sub){const source=subclassSourceLabel(cls,sub); return source?source:"";}

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
  if(SUBCLASS_TAGS.arcane.includes(sub)) p.arcane=(p.arcane||0)+2.5;
  if(SUBCLASS_TAGS.summoner.includes(sub)) p.summoner=(p.summoner||0)+4;
  if(cls==="Brawler"){
    // Brawler shares Monk's subclass pool, but the class identity shifts those subclasses
    // toward defense and away from pure mobility.
    p.defense=(p.defense||0)+2;
    p.tank=(p.tank||0)+1;
    p.mobility=(p.mobility||0)*0.75;
  }
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
  if(locks.arcane && HARD_ARCANE_SUBCLASSES.has(sub)) return true;
  if(locks.summoner && HARD_SUMMONER_SUBCLASSES.has(sub)) return true;
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
  "Melee":"Melee identifies subclasses whose main purpose is fighting from the frontline or in close combat." ,
  "Arcane":"Arcane identifies magic that is primarily arcane rather than nature-based or holy/divine magic.",
  "Summoner":"Summoner identifies subclasses whose own features give you a meaningful companion, minion, familiar, spirit, or other battle buddy.",
  "Class Fantasy":"Class Fantasy consists of the over all flavor of your character, serving certain roles in the dynamic of the class system."
};

const FINAL_FANTASY_QUESTIONS = [
  {category:"Class Fantasy",trait:"tank",phase:"final",weight:12,gate:"tank",text:"Do you want to be tanky?",answers:[
    ["YES",{traits:{tank:3,defense:2},classes:{Barbarian:4,Fighter:4,Paladin:4,"Death Knight":4,Artificer:3,Monk:1,Brawler:4,Shaman:2},weight:12}],
    ["NO",{traits:{tank:-3,defense:-1},classes:{Barbarian:-4,Fighter:-4,Paladin:-4,"Death Knight":-4,Artificer:-3,Monk:-1,Brawler:-4,Shaman:-1},weight:12}]
  ]},
  {category:"Class Fantasy",trait:"magic",phase:"final",weight:12,gate:"magic",text:"Do you want to cast magic?",answers:[
    ["YES",{traits:{utility:2,range:1},classes:{Cleric:4,Druid:4,Bard:4,Sorcerer:4,Warlock:4,Wizard:4,Artificer:4,Paladin:2,Ranger:2,"Death Knight":2,Shaman:5},weight:12}],
    ["NO",{traits:{utility:-2,range:-1},classes:{Cleric:-5,Druid:-5,Bard:-5,Sorcerer:-5,Warlock:-5,Wizard:-5,Artificer:-5,Paladin:-3,Ranger:-3,"Death Knight":-3,Shaman:-4},weight:12}]
  ]},
  {category:"Class Fantasy",trait:"utility",phase:"final",weight:11,text:"Do you want to cast a lot of spells?",answers:[
    ["YES",{traits:{utility:3,range:1},classes:{Wizard:5,Sorcerer:5,Warlock:5,Cleric:4,Druid:4,Bard:4,Artificer:3,Shaman:3},weight:11}],
    ["NO",{traits:{utility:-2},classes:{Wizard:-5,Sorcerer:-5,Warlock:-5,Cleric:-4,Druid:-4,Bard:-4,Artificer:-3,Shaman:-2},weight:11}]
  ]},
  {category:"Class Fantasy",trait:"healing",phase:"final",weight:12,gate:"healing",text:"Do you want healing to be a major part of your kit?",answers:[
    ["YES",{traits:{healing:4,support:2},classes:{Cleric:5,Druid:5,Bard:4,Paladin:3,Artificer:3,Sorcerer:2,Warlock:2,Monk:1,Shaman:3},subclasses:Object.fromEntries([...HARD_HEALING_SUBCLASSES].map(s=>[s,7])),weight:12}],
    ["NO",{traits:{healing:-5,support:-1},classes:{Cleric:-3,Druid:-3,Bard:-2,Paladin:-2,Artificer:-2,Sorcerer:-1,Warlock:-1,Monk:-1,Shaman:-1},weight:12}]
  ]},
  {category:"Class Fantasy",trait:"support",phase:"final",weight:11,text:"Do you want helping allies to be a major part of your kit?",answers:[
    ["YES",{traits:{support:4,healing:1,utility:1},classes:{Bard:5,Cleric:4,Druid:4,Paladin:3,Artificer:4,Ranger:2,Sorcerer:2,Warlock:2,Shaman:5},weight:11}],
    ["NO",{traits:{support:-3},classes:{Bard:-4,Cleric:-3,Druid:-3,Paladin:-2,Artificer:-3,Ranger:-1,Sorcerer:-1,Warlock:-1,Shaman:-2},weight:11}]
  ]},
  {category:"Class Fantasy",trait:"skills",phase:"final",weight:10,text:"Do you want to be good at skills or tools?",answers:[
    ["YES",{traits:{skills:7,utility:1},classes:{Bard:10,Rogue:10,Artificer:10,Ranger:10,Shaman:7},weight:12}],
    ["NO",{traits:{skills:-1},classes:{Bard:-2,Rogue:-2,Artificer:-2,Ranger:-2,Shaman:-1},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"holy",phase:"final",weight:10,gate:"holy",text:"Do you want holy or radiant magic?",answers:[
    ["YES",{traits:{support:2,burst:2},classes:{Cleric:5,Paladin:5,Barbarian:2,Sorcerer:2,Warlock:1,Shaman:1},weight:10}],
    ["NO",{traits:{support:-1},classes:{Cleric:-2,Paladin:-3,Barbarian:-1,Sorcerer:-1,Warlock:-1,Shaman:-1},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"aoe",phase:"final",weight:10,gate:"elemental",text:"Do you want elemental magic to be a big part of your character?",answers:[
    ["YES",{traits:{aoe:3,burst:1},classes:{Sorcerer:5,Wizard:5,Druid:4,Warlock:3,Cleric:2,Artificer:2,Shaman:5},weight:10}],
    ["NO",{traits:{aoe:-2},classes:{Sorcerer:-3,Wizard:-3,Druid:-2,Warlock:-2,Shaman:-2},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"nature",phase:"final",weight:10,gate:"nature",text:"Do you want nature magic or shapeshifting?",answers:[
    ["YES",{traits:{utility:2,aoe:1},classes:{Druid:6,Ranger:4,Shaman:3},weight:10}],
    ["NO",{traits:{utility:-1},classes:{Druid:-5,Ranger:-4,Shaman:-1},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"mobility",phase:"final",weight:10,gate:"stealth",text:"Do you want to rely on stealth and sneaking?",answers:[
    ["YES",{traits:{mobility:3,utility:1},classes:{Rogue:6,Ranger:3,Monk:3,Brawler:2,Shaman:1},weight:10}],
    ["NO",{traits:{mobility:-1},classes:{Rogue:-4,Ranger:-2,Monk:-1,Brawler:-1,Shaman:0},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"range",phase:"final",weight:10,gate:"range",text:"Do you want to fight mainly from range?",answers:[
    ["YES",{traits:{range:4},classes:{Ranger:5,Fighter:4,Rogue:4,Wizard:3,Sorcerer:3,Warlock:3,Artificer:3,Shaman:2},weight:10}],
    ["NO",{traits:{range:-4},classes:{Ranger:-4,Fighter:-2,Rogue:-2,Wizard:-1,Sorcerer:-1,Warlock:-1,Artificer:-1,Shaman:-1},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"singleTarget",phase:"final",weight:10,text:"Do you want to fight on the frontline with weapons?",answers:[
    ["YES",{traits:{singleTarget:3,tank:1},classes:{Fighter:5,Barbarian:5,Paladin:5,Monk:4,Rogue:3,Ranger:2,"Death Knight":5,Brawler:5,Shaman:3},weight:10}],
    ["NO",{traits:{singleTarget:-2},classes:{Fighter:-4,Barbarian:-4,Paladin:-4,Monk:-3,Rogue:-1,Ranger:-1,"Death Knight":-4,Brawler:-4,Shaman:-1},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"arcane",phase:"final",weight:10,gate:"arcane",text:"Do you want your magic to be arcane?",answers:[
    ["YES",{traits:{arcane:5,utility:1},classes:{Wizard:6,Sorcerer:5,Warlock:5,Bard:4,Artificer:5,Fighter:1,Rogue:1,Shaman:2},subclasses:Object.fromEntries([...HARD_ARCANE_SUBCLASSES].map(s=>[s,8])),weight:10}],
    ["NO",{traits:{arcane:-5},classes:{Wizard:-4,Sorcerer:-4,Warlock:-4,Bard:-3,Artificer:-4,Fighter:-1,Rogue:-1,Shaman:-1},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"summoner",phase:"final",weight:10,gate:"summoner",text:"Do you want a companion, minion, or summoned creature to be a core part of your subclass?",answers:[
    ["YES",{traits:{summoner:5,utility:1},classes:{Ranger:4,Druid:4,Artificer:4,Wizard:3,Warlock:2,Shaman:4,Bard:1,Sorcerer:1,Cleric:1},subclasses:Object.fromEntries([...HARD_SUMMONER_SUBCLASSES].map(s=>[s,9])),weight:10}],
    ["NO",{traits:{summoner:-5},classes:{Ranger:-3,Druid:-3,Artificer:-3,Wizard:-2,Warlock:-1,Shaman:-2,Bard:-1,Sorcerer:-1,Cleric:-1},weight:10}]
  ]},
  {category:"Class Fantasy",trait:"chaos",phase:"final",weight:12,gate:"chaos",text:"Do you want your abilities to be unpredictable or chaotic?",answers:[
    ["YES",{traits:{chaos:6,utility:1},classes:{Sorcerer:5,Barbarian:5,Druid:5,Rogue:4,Bard:4,Artificer:3,Shaman:1},subclasses:Object.fromEntries([...CHAOS_SUBCLASSES].map(s=>[s,9])),weight:12}],
    ["NO",{traits:{chaos:-6},classes:{Sorcerer:-3,Barbarian:-3,Druid:-3,Rogue:-2,Bard:-2,Artificer:-2,Shaman:-1},weight:12}]
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
    if(q.phase==="final" && q.gate==="arcane" && choice===1) locks.arcane=true;
    if(q.phase==="final" && q.gate==="summoner" && choice===1) locks.summoner=true;
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

const CLASS_RESULT_THEMES={"Barbarian":"theme-barbarian","Fighter":"theme-fighter","Cleric":"theme-cleric","Wizard":"theme-wizard","Druid":"theme-druid","Rogue":"theme-rogue","Sorcerer":"theme-sorcerer","Warlock":"theme-warlock","Bard":"theme-bard","Artificer":"theme-artificer","Paladin":"theme-paladin","Death Knight":"theme-death-knight","Monk":"theme-monk","Brawler":"theme-brawler","Shaman":"theme-shaman"};

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
  skills:"Skills & tools",
  arcane:"Arcane magic",
  summoner:"Summoning & companions"
};

let detailReturnScreen="start-screen";
let detailReturnResults=null;
const browserState={search:"",classFilter:"",signals:new Set(),tags:new Set()};

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

function subclassTagsFor(sub){
  return Object.entries(SUBCLASS_TAGS)
    .filter(([,names])=>names.includes(sub))
    .map(([tag])=>tag);
}

function browserValuePercent(value){
  return Math.round(Math.max(0,Math.min(1,value||0))*100);
}

function browserAllSignalValues(entry){
  return TRAITS
    .map(trait=>({trait,value:SUBCLASS_SIGNALS[entry.sub]?.[trait]||0}))
    .filter(x=>x.value>0)
    .sort((a,b)=>b.value-a.value||a.trait.localeCompare(b.trait));
}

function browserEffectiveValues(entry){
  return TRAITS
    .map(trait=>({trait,value:entry.profile?.[trait]||0}))
    .filter(x=>x.value>0.05)
    .sort((a,b)=>b.value-a.value||a.trait.localeCompare(b.trait));
}

function renderBrowserFilters(){
  const classWrap=document.getElementById('browser-class-filters');
  const signalWrap=document.getElementById('browser-signal-filters');
  const tagWrap=document.getElementById('browser-tag-filters');
  const classes=Object.keys(CLASS_DATA);
  const tags=Object.keys(SUBCLASS_TAGS);

  classWrap.innerHTML=[
    `<button type="button" class="filter-chip ${!browserState.classFilter?'active':''}" data-browser-class="">ALL</button>`,
    ...classes.map(cls=>`<button type="button" class="filter-chip ${browserState.classFilter===cls?'active':''}" data-browser-class="${escapeHtml(cls)}">${escapeHtml(cls)}</button>`)
  ].join('');

  signalWrap.innerHTML=TRAITS.map(trait=>{
    const active=browserState.signals.has(trait);
    return `<button type="button" class="filter-chip ${active?'active':''}" data-browser-signal="${trait}">${escapeHtml(TRAIT_LABELS[trait])}</button>`;
  }).join('');

  tagWrap.innerHTML=tags.map(tag=>{
    const active=browserState.tags.has(tag);
    const label=tag.charAt(0).toUpperCase()+tag.slice(1);
    return `<button type="button" class="filter-chip ${active?'active':''}" data-browser-tag="${tag}">${escapeHtml(label)}</button>`;
  }).join('');

  classWrap.querySelectorAll('[data-browser-class]').forEach(btn=>btn.addEventListener('click',()=>{
    browserState.classFilter=btn.dataset.browserClass||"";
    renderBrowser();
  }));
  signalWrap.querySelectorAll('[data-browser-signal]').forEach(btn=>btn.addEventListener('click',()=>{
    const trait=btn.dataset.browserSignal;
    if(browserState.signals.has(trait)) browserState.signals.delete(trait); else browserState.signals.add(trait);
    renderBrowser();
  }));
  tagWrap.querySelectorAll('[data-browser-tag]').forEach(btn=>btn.addEventListener('click',()=>{
    const tag=btn.dataset.browserTag;
    if(browserState.tags.has(tag)) browserState.tags.delete(tag); else browserState.tags.add(tag);
    renderBrowser();
  }));
}

function renderBrowserResults(){
  const search=browserState.search.trim().toLowerCase();
  let entries=subclassEntries();
  entries=entries.filter(entry=>{
    if(browserState.classFilter && entry.cls!==browserState.classFilter) return false;
    if(search && !(entry.sub.toLowerCase().includes(search)||entry.cls.toLowerCase().includes(search))) return false;
    const tags=subclassTagsFor(entry.sub);
    for(const tag of browserState.tags) if(!tags.includes(tag)) return false;
    const values=browserAllSignalValues(entry);
    for(const trait of browserState.signals){
      if(!values.some(x=>x.trait===trait)) return false;
    }
    return true;
  });

  entries.sort((a,b)=>a.cls.localeCompare(b.cls)||a.sub.localeCompare(b.sub));
  document.getElementById('browser-count').textContent=`${entries.length} / ${subclassEntries().length}`;
  const wrap=document.getElementById('browser-results');
  if(!entries.length){
    wrap.innerHTML='<div class="browser-empty">No subclasses match those filters.</div>';
    return;
  }
  wrap.innerHTML=entries.map(entry=>{
    const values=browserAllSignalValues(entry);
    const effective=browserEffectiveValues(entry);
    const tags=subclassTagsFor(entry.sub);
    const valueMarkup=values.map(x=>`<span class="browser-value"><b>${escapeHtml(TRAIT_LABELS[x.trait])}</b> +${x.value}</span>`).join('');
    const effectiveMarkup=effective.slice(0,8).map(x=>`<span class="browser-value effective"><b>${escapeHtml(TRAIT_LABELS[x.trait])}</b> ${browserValuePercent(x.value)}%</span>`).join('');
    const tagMarkup=tags.length?tags.map(tag=>`<span class="browser-tag">${escapeHtml(tag)}</span>`).join(''):'<span class="browser-tag muted">No role tag</span>';
    return `<button type="button" class="browser-entry" data-detail-class="${escapeHtml(entry.cls)}" data-detail-sub="${escapeHtml(entry.sub)}">
      <span class="browser-entry-head"><span><b>${escapeHtml(entry.sub)}</b><small>${escapeHtml(entry.cls)}${subclassBadgeText(entry.cls,entry.sub)?` · ${subclassBadgeText(entry.cls,entry.sub)}`:""}</small></span><span class="detail-arrow">→</span></span>
      <span class="browser-entry-section"><small class="browser-label">SUBCLASS SIGNALS</small><span class="browser-values">${valueMarkup||'<span class="browser-value muted">No direct subclass signals</span>'}</span></span>
      <span class="browser-entry-section"><small class="browser-label">EFFECTIVE QUIZ PROFILE</small><span class="browser-values">${effectiveMarkup||'<span class="browser-value muted">No positive profile values</span>'}</span></span>
      <span class="browser-entry-section"><small class="browser-label">ROLE TAGS</small><span class="browser-tags">${tagMarkup}</span></span>
    </button>`;
  }).join('');

  wrap.querySelectorAll('.browser-entry').forEach(btn=>btn.addEventListener('click',()=>{
    renderSubclassDetail(btn.dataset.detailClass,btn.dataset.detailSub,'browser-screen',null);
  }));
}

function renderBrowser(){
  renderBrowserFilters();
  renderBrowserResults();
}

function openBrowser(){
  renderBrowser();
  showScreen('browser-screen');
}

function resetBrowserState(){
  browserState.search="";
  browserState.classFilter="";
  browserState.signals.clear();
  browserState.tags.clear();
  const input=document.getElementById('browser-search');
  if(input) input.value="";
}

function subclassSourceLink(cls,sub,context="guide"){
  const url=SUBCLASS_LINKS[`${cls}:${sub}`];
  if(!url) return "";
  const label=context==="result"?"OPEN SUBCLASS GUIDE ↗":"OPEN FULL SUBCLASS GUIDE ↗";
  return `<a class="source-link ${context}-source-link" href="${url}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${label}</a>`;
}
function classSourceLink(cls,context="class"){
  const url=CLASS_LINKS[cls];
  if(!url) return escapeHtml(cls);
  return `<a class="source-link ${context}-class-link" href="${url}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">${escapeHtml(cls)}</a>`;
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
  document.getElementById('subclass-detail-class').innerHTML=classSourceLink(cls,'guide');
  document.getElementById('subclass-detail-name').textContent=sub;
  const detailBadge=document.getElementById('subclass-detail-badge'); const detailSourceLabel=subclassBadgeText(cls,sub); detailBadge.textContent=detailSourceLabel||""; detailBadge.classList.toggle('hidden',!detailSourceLabel);
  document.getElementById('subclass-detail-description').textContent=desc;
  const detailSource=document.getElementById('subclass-detail-source');
  if(detailSource) detailSource.innerHTML=subclassSourceLink(cls,sub,'guide');

  const focusWrap=document.getElementById('subclass-focus');
  const roleTags=subclassTagsFor(sub);
  const focusMarkup=focuses.map(x=>`<span class="focus-tag">${TRAIT_DETAIL_TEXT[x.trait]}</span>`).join('');
  const roleMarkup=roleTags.map(tag=>`<span class="focus-tag role-focus">${escapeHtml(tag.toUpperCase())}</span>`).join('');
  focusWrap.innerHTML=(focusMarkup+roleMarkup)||'<span class="focus-tag">Versatile</span>';

  const target={cls,sub,profile:PROFILE_CACHE[cls][sub]};
  const similar=subclassEntries()
    .filter(x=>!(x.cls===cls && x.sub===sub))
    .map(x=>({...x,similarity:subclassSimilarity(target,x)}))
    .sort((a,b)=>b.similarity-a.similarity||a.sub.localeCompare(b.sub))
    .slice(0,6);

  document.getElementById('subclass-similar').innerHTML=similar.map((x,i)=>`
    <button class="detail-match" type="button" data-detail-class="${escapeHtml(x.cls)}" data-detail-sub="${escapeHtml(x.sub)}">
      <span><b>${i+1}. ${escapeHtml(x.sub)}</b><small>${escapeHtml(x.cls)}${subclassBadgeText(x.cls,x.sub)?` · ${subclassBadgeText(x.cls,x.sub)}`:""}</small></span>
      <span class="detail-arrow">→</span>
    </button>`).join('');

  document.querySelectorAll('.detail-match').forEach(btn=>{
    btn.addEventListener('click',()=>{
      renderSubclassDetail(btn.dataset.detailClass,btn.dataset.detailSub,"subclass-screen",null);
    });
  });

  showScreen('subclass-screen');
}

let randomAnimationRunning=false;
function randomSubclass(){
  if(randomAnimationRunning) return;
  const entries=subclassEntries();
  if(!entries.length) return;
  const pick=entries[Math.floor(Math.random()*entries.length)];
  const overlay=document.getElementById('random-slot-overlay');
  const track=document.getElementById('random-slot-track');
  const burst=document.getElementById('random-burst');
  if(!overlay||!track||!burst){ renderSubclassDetail(pick.cls,pick.sub,"start-screen",null); return; }
  randomAnimationRunning=true;
  const reelCount=18, rowHeight=58;
  const sequence=[];
  for(let i=0;i<reelCount;i++) sequence.push(entries[Math.floor(Math.random()*entries.length)]);
  const targetIndex=reelCount;
  sequence.push(pick);
  sequence.push(...Array.from({length:4},()=>entries[Math.floor(Math.random()*entries.length)]));
  track.innerHTML=sequence.map(x=>`<div class="slot-item"><small>${escapeHtml(x.cls)}</small><b>${escapeHtml(x.sub)}</b></div>`).join('');
  track.style.transition='none'; track.style.transform='translateY(0)';
  overlay.classList.remove('hidden'); burst.classList.remove('show');
  void track.offsetHeight;
  track.style.transition='transform 2.2s cubic-bezier(.12,.76,.16,1)';
  track.style.transform=`translateY(-${targetIndex*rowHeight}px)`;
  setTimeout(()=>{
    burst.classList.add('show');
    setTimeout(()=>{
      overlay.classList.add('hidden'); burst.classList.remove('show'); randomAnimationRunning=false;
      renderSubclassDetail(pick.cls,pick.sub,"start-screen",null);
    },650);
  },2250);
}

function returnFromSubclassDetail(){
  const target=detailReturnScreen||"start-screen";
  const detailScreen=document.getElementById('subclass-screen');
  detailScreen.classList.remove('class-themed');
  Object.values(CLASS_RESULT_THEMES).forEach(c=>detailScreen.classList.remove(c));
  if(target==="results-screen"){
    showScreen("results-screen");
  }else if(target==="browser-screen"){
    renderBrowser();
    showScreen("browser-screen");
  }else if(target==="subclass-screen"){
    showScreen("subclass-screen");
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

  document.getElementById('result-class').innerHTML=classSourceLink(winner,'result');
  const resultSubclass=document.getElementById('result-subclass');
  resultSubclass.textContent=best.name;
  const resultSubclassSource=document.getElementById('result-subclass-source');
  if(resultSubclassSource) resultSubclassSource.innerHTML=subclassSourceLink(winner,best.name,'result');
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
  classWrap.innerHTML=classes.map(x=>`<div class="bar-row"><div class="bar-label"><span>${classSourceLink(x.name,'breakdown')}</span><span>${Math.round(x.score*100)}</span></div><div class="bar-track"><div class="bar-fill" style="width:${Math.max(2,(x.score/maxClass)*100)}%"></div></div></div>`).join('');

  // Six recommendations: #1/#3/#4 come from the winning class, while
  // #2/#5/#6 come from the player's next three highest-scoring classes.
  // The alternate classes are determined directly from the quiz's class ranking.
  const winnerSubs=subs.filter(x=>x && x.name).slice(0,3).map(x=>({...x,cls:winner}));
  const alternateClasses=classes.slice(1,4);
  const alternateSubs=alternateClasses.map(c=>{
    const ranked=subclassRanking(c.name,player);
    if(!ranked.length) return null;
    return {...ranked[0],cls:c.name};
  });

  const matchEntries=[
    winnerSubs[0],       // 1: best subclass of winning class
    alternateSubs[0],    // 2: best subclass of 2nd-highest class
    winnerSubs[1],       // 3: 2nd-best subclass of winning class
    winnerSubs[2],       // 4: 3rd-best subclass of winning class
    alternateSubs[1],    // 5: best subclass of 3rd-highest class
    alternateSubs[2]     // 6: best subclass of 4th-highest class
  ].filter(Boolean);

  document.getElementById('subclass-matches').innerHTML=matchEntries.map((x,i)=>`
    <button class="match clickable-match" type="button" data-detail-class="${escapeHtml(x.cls)}" data-detail-sub="${escapeHtml(x.name)}">
      <span><b>${i+1}. ${escapeHtml(x.name)}</b>${x.custom?` <span class='mini-custom'>${escapeHtml(subclassBadgeText(x.cls,x.name)||"CUSTOM")}</span>`:''}<small class="match-class-label">${escapeHtml(x.cls)}</small>${SUBCLASS_LINKS[`${x.cls}:${x.name}`]?`<a class="match-source-link" href="${SUBCLASS_LINKS[`${x.cls}:${x.name}`]}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">GUIDE ↗</a>`:''}</span>
      <span class="match-arrow">→</span>
    </button>`).join('');

  document.querySelectorAll('.clickable-match').forEach(btn=>{
    btn.addEventListener('click',()=>renderSubclassDetail(btn.dataset.detailClass,btn.dataset.detailSub,"results-screen",matchEntries));
  });

  showScreen('results-screen');
}

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('start-btn').addEventListener('click',startQuiz);
  document.getElementById('random-subclass-btn').addEventListener('click',randomSubclass);
  document.getElementById('subclass-browser-btn').addEventListener('click',openBrowser);
  document.getElementById('browser-back-btn').addEventListener('click',()=>{resetBrowserState();showScreen('start-screen');});
  document.getElementById('browser-search').addEventListener('input',e=>{browserState.search=e.target.value;renderBrowser();});
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
