import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// Since it's on nwager.github.io root, it doesn't need a path
// const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		paths: {
			base: '',
		},
	}
};

export default config;