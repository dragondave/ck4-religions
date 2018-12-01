
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
  
  return result; //JavaScript object
  //return JSON.stringify(result); //JSON
};

function create_dropdown(tag_id, variable) {
    var dropdown = document.getElementById(tag_id);
    console.log(variable)
    for (item in variable) {
        console.log(item);
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

natures = csvJSON(natures_csv);
console.log(natures);