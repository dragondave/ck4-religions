
// modified from https://gist.github.com/iwek/7154578
// var csv is the CSV file with headers
function csvJSON(csv){

  var lines=csv.split("\n");
  var result = {};
  var headers=lines[0].split("\t");

  for(var i=1;i<lines.length;i++){
	  var obj = {};
	  var currentline=lines[i].split("\t");
	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }
	  result[currentline[0]] = obj;
  }
  
  return result;
  };

function create_dropdown(tag_id, variable) {
    var dropdown = document.getElementById(tag_id);
    for (item in variable) {
        var optn = document.createElement("OPTION");
        optn.text = item;
        optn.value = item;
        dropdown.options.add(optn);  

    }
};

natures_csv = "Nature	Looting	Piety	Great Holy War	Prestige	Moral Authority	Interfaith Marriages	Missions	Resistance to Proselytizing	Rulership	Military\n\
Cosmopolitan	Enabled		Enabled		Base Moral Authority is low.	Allowed.	Discourages missionary work			\n\
Proselytizing	Enabled	Piety loss when at war against faithful.	Enabled				Encourages missionary work			\n\
Dogmatic	Enabled	Piety loss when at war against faithful.	Enabled		Base Moral Authority is high.	Disallowed				\n\
Unyielding	Enabled		Enabled					Yes		Armies are stronger when defending on home ground.\n\
Warmongering	Enabled		Enabled	Prestige loss when at peace for too long.					Rulers do not receive opinion penalties for raised vassal levies. Rulers are extremely aggressive.	\n\
Peaceful	Disabled	Piety gain while at peace.	Disabled						Rulers are less likely to start wars, plots and factions.	";

doctrine_csv = "Doctrines		Succession Laws	Superstitions	Rulership	Priesthood	Male Priesthood	Female Priesthood	Resistance to Proselytizing	Marriage Laws	Concubines	Consorts	Councils	Military	Taxes	Attribute Bonus\n\
Agnatic Clans		Allow Open Succession Law. Agnatic Law is Enforced.				TRUE	FALSE		Matrilineal Marriages are NOT allowed.	Yes	No	Female characters are NOT allowed in the Council			\n\
Ancestor Veneration		Allow Eldership Succession Law	Allows characters to use the Ancestor Worship decision. The Religious Head can decide upon dead ancestors to give special status.												\n\
Animistic			Characters can perform a rite of passage upon reaching adulthood										Units from Counties following the true faith recieve a land moral bonus.		\n\
Astrology			Character are assigned Zodiac traits on birth and by decision. Grants access to the Hermetic Society												\n\
Bloodthirsty Gods			Prisoners of different religion can be sacrificed for Piety Sacrificing prisoners unlocks special traits and actions												\n\
Daring													Prepared Invasions are Allowed		\n\
Divine Marriage			Close-Kin Marriage among nobility is considered a Divine Union Reformer's family becomes Divine.						Close-Kin Marriage is Allowed						\n\
Enatic Clans		Allow Open Succession Law. Enatic Law is Enforced.		Female rulers are NOT penalized.		FALSE	TRUE			No	Yes	Male characters are NOT allowed in the Council			\n\
Equality		Absolute Cognatic Law is Enforced.		Female rulers are NOT penalized.		TRUE	TRUE			Yes	Yes				\n\
Haruspicy			Diviner read the signs before a war to try to improve troop morale												\n\
Meritocracy		Heir Designation is Allowed.													\n\
Monasticism		Rulers can ask their subjects to 'Take the Vows' and disinherit them.	Enforced Celibacy for priests.		Priesthood cannot marry. Priesthood cannot inherit.										Monasticism\n\
Polygamy									Polygamy is Allowed	No					\n\
Religion Specific															\n\
Religious Tax														Religious taxation of subjects of a different religious group is allowed.	\n\
Sea-Bound													Fleet can navigate through major rivers.  Ship Maintenance Reduced to 10%. Looters prefer coastal counties.		\n\
Stability				Short Reign Penalty is Disabled Rulers can spend Piety fo Improve their Courtiers' Attributes											\n\
Syncretism				Rulers can choose to gain Sympathy with another faith by decisions.											\n\
Unrelenting													Armies ignore defensive attrition. Armies have increased offensive capabilities.		\n\
Totem-Guardians	African	Enables Eldership succession law. Rulers can ask their subjects to 'Take the Vows' and disinherit them.			Priesthood cannot marry. Priesthood cannot inherit.									Religious taxation of subjects of a different religious group is allowed.	\n\
Invaders	Aztec		Prisoners of different religion can be sacrificed for Piety. Sacrificing prisoners unlocks special traits and actions.										Armies ignore defensive attrition. Armies have increased offensive capabilities. Fleets can navigate through major rivers. Ship Maintenance is reduced to 10%.		\n\
Harmonious	Bön	Heir Designation is Allowed Absolute Cognatic Law is Enforced		No Penalty for Female Ruler					Disallow Close-Kin Marriage						\n\
Sons of Ragnarok	Germanic												Prepared Invasions are allowed. Fleet can navigate through major rivers.  Ship Maintenance Reduced to 10%. Looters prefer coastal counties. Allows Viking traits/events		\n\
Civilized	Hellenic	Heir designation is allowed.		Rulers can choose to gain Sympathy with another faith by decision. Ruler do not receive opinion penalties for raised vassal levies											\n\
Defenders of Dievas	Romuva	Enables Eldership succession law						Yes							\n\
Children of Perun	Slavic			Short Reign Penalty is Disabled Rulers can spend Piety fo Improve their Courtiers' Attributes									Fleet can navigate through major rivers.		\n\
Survivor of Ukko	Suomenusko			Short Reign Penalty is Disabled Rulers can spend Piety fo Improve their Courtiers' Attributes				Yes							\n\
Eternal Riders	Tengri								Polygamy is Allowed	No			Ignore Defensive Attrition Army Offensive Bonus		\n\
Dawnbreakers	Zunist		Close-Kin Marriage amongst nobility is considered a Divine Union Reformer's family becomes Divine.						Polygamy is Allowed Close-Kin Marriage is Allowed	No					";

unreformed_religion_csv = "Unreformed Religion	Superstitions	Succession Laws	Resistance to Proselytizing	Looting	Military	Priesthood	Male Priesthood	Female Priesthood	Increased Defensive Attrition	Prestige	Rulership	Concubines	Consorts	can_call_crusade	Short Reign	intermarry\n\
African		Enables Eldership succession law.		Enabled	Armies are stronger when defending on home ground	Priesthood can marry. Priesthood may be female.	TRUE	TRUE	Yes			Yes	Yes			\n\
Aztec				Disabled	Has increased levy size	Priesthood can marry.	TRUE			Prestige loss when at peace for too long.	Rulers do not receive opinion penalties for raised vassal levies.	Yes	No			\n\
Bön			Yes	Enabled	Armies are stronger when defending on home ground	Priesthood cannot inherit. Priesthood may be female.	TRUE	TRUE	Yes		Rulers can choose to gain Sympathy with another faith by decisions.	Yes	Yes			indian_group zoroastrian_group nestorian_group\n\
Germanic				Enabled	Prepared Invasions are allowed. Fleet can navigate through major rivers.  Ship Maintenance Reduced to 10%. Looters prefer coastal counties. Allows Viking traits/events Has increased levy size Has increased retinue size	Priesthood can marry. Priesthood may be female.	TRUE	TRUE	Yes	Prestige loss when at peace for too long.	Rulers do not receive opinion penalties for raised vassal levies.	Yes	No		2.5	norse_pagan_reformed baltic_pagan slavic_pagan\n\
Hellenic	Character are assigned Zodiac traits on birth and by decision. Grants access to the Hermetic Society Diviner read the signs before a war to try to improve troop morale. Once per decade interpretation of stars by religious head or court chaplain if none exists			Disabled		Priesthood cannot marry. Priesthood cannot inherit. Priesthood may be female.	TRUE	TRUE				No	No			\n\
Romuva		Enables Eldership succession law.	Yes	Enabled	Armies are stronger when defending on home ground	Priesthood can marry. Priesthood may be female.	TRUE	TRUE	Yes			Yes	No		2	norse_pagan slavic_pagan baltic_pagan_reformed\n\
Slavic				Enabled	Armies are stronger when defending on home ground	Priesthood can marry. Priesthood may be female.	TRUE	TRUE	Yes			Yes	No		2	\n\
Suomenusko				Enabled	Armies are stronger when defending on home ground	Priesthood can marry. Priesthood may be female.	TRUE	TRUE	Yes			Yes	No		2	\n\
Tengri				Enabled	Armies ignore defensive attrition. Has increased levy size. Light cavalry are stronger	Priesthood can marry.	TRUE			Prestige loss when at peace for too long.	Rulers do not receive opinion penalties for raised vassal levies.	Yes	No		1.5	buddhist zoroastrian_group\n\
Zunist	Grants access to the Hermetic Society			Disabled	Has increased levy size Heavy infantry are stronger	Priesthood can marry.	TRUE		Yes			Yes	No			indian_group zoroastrian_group";

reformed_religion_csv = "Reformed Religion	Superstitions	Succession Laws	Resistance to Proselytizing	Looting	Military	Priesthood	Male Priesthood	Female Priesthood	Increased Defensive Attrition	Prestige	Rulership	Concubines	Consorts	Great Holy War	Short Reign	intermarry\n\
African				Enabled		Priesthood can marry.	TRUE	TRUE				Yes	Yes	Enabled		\n\
Aztec					Has increased levy size	Priesthood can marry.	TRUE					Yes	No	Enabled		\n\
Bön			Yes	Enabled		Priesthood cannot inherit.	TRUE	TRUE	Yes			Yes	Yes	Enabled		indian_group zoroastrian_group nestorian_group\n\
Germanic				Enabled	Has increased levy size	Priesthood can marry.	TRUE	TRUE				Yes	No	Enabled	1.5	norse_pagan\n\
Hellenic	Character are assigned Zodiac traits on birth and by decision. Grants access to the Hermetic Society Diviner read the signs before a war to try to improve troop morale. Once per decade interpretation of stars by religious head or court chaplain if none exists					Priesthood cannot marry. Priesthood cannot inherit.	TRUE	TRUE				No	No	Enabled		\n\
Romuva				Enabled		Priesthood can marry.	TRUE	TRUE				Yes	No	Enabled	1.5	baltic_pagan\n\
Slavic				Enabled		Priesthood can marry.	TRUE	TRUE				Yes	No	Enabled	1.5	slavic_pagan\n\
Suomenusko				Enabled		Priesthood can marry.	TRUE	TRUE				Yes	No	Enabled	1.5	\n\
Tengri				Enabled	Has increased levy size. Light cavalry are stronger	Priesthood can marry.	TRUE					Yes	No	Enabled	1.25	buddhist zoroastrian_group\n\
Zunist	Grants access to the Hermetic Society					Priesthood can marry.	TRUE					Yes	No	Enabled		indian_group zoroastrian_group";

leadership_csv = "Leadership	Religious Head	Superstitions	Great Holy War	Attribute Bonus\n\
Autocephalous	Each realm has it own religious head			\n\
Autonomous	Can never have a religious head.	Followers can pick a Branch	Disabled	Autonomous\n\
Hierocratic	A priest is put in charge of this religion.			\n\
Temporal	Reformer becomes religious head. Religious head is a secular title.			";


natures = csvJSON(natures_csv);
doctrine = csvJSON(doctrine_csv);
unreformed_religion = csvJSON(unreformed_religion_csv);
reformed_religion = csvJSON(reformed_religion_csv);
leadership = csvJSON(leadership_csv);