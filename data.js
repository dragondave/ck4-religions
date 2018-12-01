// https://gist.github.com/iwek/7154578
// var csv is the CSV file with headers
function csvJSON(csv){

  var lines=csv.split("\n");

  var result = [];

  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

	  var obj = {};
	  var currentline=lines[i].split(",");

	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }

	  result.push(obj);

  }
  
  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}

natures = "Nature,Looting,Piety,Great Holy War,Prestige,Moral Authority,Interfaith Marriages,Missions,Resistance to Proselytizing,Rulership,Military\
Cosmopolitan,Enabled,,Enabled,,Base Moral Authority is low.,Allowed.,Discourages missionary work,,,\
Proselytizing,Enabled,Piety loss when at war against faithful.,Enabled,,,,Encourages missionary work,,,\
Dogmatic,Enabled,Piety loss when at war against faithful.,Enabled,,Base Moral Authority is high.,Disallowed,,,,\
Unyielding,Enabled,,Enabled,,,,,Yes,,Armies are stronger when defending on home ground.\
Warmongering,Enabled,,Enabled,Prestige loss when at peace for too long.,,,,,\"Rulers do not receive opinion penalties for raised vassal levies. \
Rulers are extremely aggressive.\",\
Peaceful,Disabled,Piety gain while at peace.,Disabled,,,,,,\"Rulers are less likely to start wars, plots and factions.\","

natures_json = csvJSON(csv)
window.alert(natures_json['Nature'][0])