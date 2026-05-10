import { describe, it, expect, beforeEach } from "vitest";

function sum(a: number, b: number) {
	return a + b;
}

describe("Función suma", () => {
	/* HOOKS ÚTILES
	 * beforeEach(()=>{}); // Para correr antes de cada test
	 * afterEach(()=>{}); // Para correr después de cada test
	 * beforeAll(()=>{}); // Sólo una vez antes de todos los tests
	 * afterAll(()=>{}); // Sólo una vez después de todos los tests
	 * */
	it("Sumar correctamente", () => {
		expect(sum(2, 3)).toBe(5);
	});
	it("Sumar numeros negativos", () => {
		expect(sum(1, -1)).toBe(0);
	});
	it("toContain() en los arreglos", () => {
		expect([1, 2, 3]).toContain(3);
	});
	it("Ver si lo que se mostró muestra un error", () => {
		expect(() => {
			throw new Error("Huele a esperanza");
		}).toThrow("Huele a esperanza");
	});
	it("Probar el toBeUndefined", () => {
		expect(undefined).toBeUndefined();
	});
});
