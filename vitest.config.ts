import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: 'happy-dom',
		globals: true // Para usar describe, it, expect, etc. sin importar
	}
});
