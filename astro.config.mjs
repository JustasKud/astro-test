import { defineConfig } from 'astro/config';
import solid from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	// Enable Solid to support Solid JSX components.
	integrations: [solid()],
	site: "https://justaskud.github.io",
	base: "/astro-test"
});
