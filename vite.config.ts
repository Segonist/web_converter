/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		coverage: {
			provider: "istanbul",
			reportsDirectory: "./src/__tests__/coverage",
		},
	},
	base: "/web_converter/",
});
