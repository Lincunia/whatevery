const target = {
	message1: "hello",
	message2: "everyone",
};

/*
 * Permite crear un objeto usable (handler) en el lugar del otro objeto
 * (target) y en donde se pueden hacer getting, setting y definiendo
 * propiedades
 */
const handler = {
	get(target, prop, receiver) {
		if (prop === 'message2'){
			return 'GUITAR';
		}
		return Reflect.get(...arguments);
	},
};

const proxy = new Proxy(target, handler);
console.log(proxy.message1); // world
console.log(proxy.message2); // world
