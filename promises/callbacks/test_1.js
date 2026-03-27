/*
 * THE IS THE HANDLING ERROR I CAME UP BEFORE KNOWING THE onload() AND
 * onerror() FUNCTIONS
 */
/*
function loadScript(src) {
	let script = document.createElement("script");
	script.src = src;
	document.head.append(script);
}

loadScript("./inner_test_1.js");
try {
	newFunction();
} catch (err) {
	alert("All was well");
}
*/

function loadScript(src, callback) {
	let script = document.createElement("script");
	script.src = src;
	script.onload = () => callback(null, script);
	script.onerror = () => callback(new Error(`Script load error for ${src}`));
	document.head.append(script);
}
loadScript("./inner_test_1.js", function (error, newFunction) {
	error ? alert('All was well') : newFunction;
});
