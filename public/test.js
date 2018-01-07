console.log("Hello World!\n");

var rarr = {
	"subject" : [
		"I", "We", "You", "He", "She", "Node", "They", "Mr. Robot"
	],
	"verb" : [
		"is running", "are grinding", "am eating", "am typing", "am programming"
	],
	"object": [
		new Date().toLocaleTimeString()
	]
};

$output = "";
$output += rarr.subject[Math.floor(Math.random()*rarr.subject.length)];
$output += " ";
$output += rarr.verb[Math.floor(Math.random()*rarr.verb.length)];
$output += ". ";
$output += rarr.object[0];

console.log($output);