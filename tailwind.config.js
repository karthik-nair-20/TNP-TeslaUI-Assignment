/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'50%': {
  					opacity: '0.3'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			}
  		},
  		animation: {
  			'fade-in': 'fade-in 1s ease-in'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
