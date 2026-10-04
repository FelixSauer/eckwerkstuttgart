/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat Variable', 'sans-serif'],
				sourceCodePro: ['Source Code Pro Variable', 'monospace'],
				sourceSans3: ['Source Sans 3 Variable', 'sans-serif']
			},
			colors: {
				primary: '#5E7461',
				secondary: '#DBA507',
				white: '#fafafa',
				black: '#090909'
			}
		}
	},
	plugins: []
}
