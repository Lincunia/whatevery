function loadScript(src, callback) {
	let script = document.createElement("script");
	script.src = src;
	script.onload = () => callback(script);
	document.head.append(script);
}

/*
 * The first argument is the source code that we want to run before the
 * execution of the second argument inside loadScript()
 */
loadScript(
	"https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js",
	(script) => {
		alert(`Cool, the script ${script.src} is loaded`);
		alert(_); // No me pregunen por qué _ es una función, porque no lo sé
	},
);
