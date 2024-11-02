import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
	base: './',
	build: {
		outDir: "dist",
		chunkSizeWarningLimit: 1600,
		rollupOptions: {
			output: {
				manualChunks: undefined, // disable chunking / code splitting
				inlineDynamicImports: true, // Ensures dynamic imports are included in the main bundle
			},
		},
	},
	define: {
		global: {}
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [vue()],
})
