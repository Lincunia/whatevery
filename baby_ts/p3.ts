function safeFunctionNull(name: string | null): string {
	if (name===null) {
		name = 'nobody';
	}
	return `Fuck you! ${name}!`;
}

console.log(safeFunctionNull('Backugo'));
console.log(safeFunctionNull(null));
console.log('======================================');
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
} as const;
console.log(config.timeout);
try{
	config.timeout = 6000;
	console.log(config.timeout);
}
catch(error){
	console.log('No puedes hacer eso we');
	console.error(error);
}
console.log('======================================');
let arre = ['Carbón', 'no', 'tienes', 'pestañas']
console.log(arre.join(', '));
