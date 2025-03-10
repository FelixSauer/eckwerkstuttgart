/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ['Montserrat Variable', 'sans-serif'],
				sourceCodePro: ['Source Code Pro Variable', 'monospace'],
				sourceSans3: ['Source Sans 3 Variable', 'sans-serif'],
				sourceSansPro: ['Source Sans Pro', 'sans-serif'],
				roboto: ['Roboto', 'sans-serif']
			},
			extend: {
				keyframes: {
					slideIn: {
						'0%': { transform: 'translateX(100vw)' },
						'100%': { transform: 'translateX(0vw)' }
					}
				},
				animation: {
					slideIn: 'slideIn 0.5s ease-in'
				}
			},
			colors: {
				primary: '#828B6F',
				secondary: '#DBA507',
				accent: {
					1: '#8EC7D2',
					2: '#42AFBF',
					3: '#FF7180'
				},
				dark: '#0D6986',
				darker: '#07485B',
				white: '#fafafa',
				black: '#090909',
				gray: {
					1: '#c0c0c0',
					2: '#b0b0b0',
					3: '#a0a0a0',
					4: '#909090',
					5: '#808080',
					6: '#707070',
					7: '#606060',
					8: '#505050',
					9: '#404040',
					10: '#303030'
				}
			},
			writingMode: {
				horizontal: 'horizontal-tb',
				vertical: 'vertical-rl'
			}
		}
	},
	plugins: []
}
