/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.svelte"],
  mode: 'jit',
  theme: {
    extend: {},
    fontFamily: {
      'serif':['"DM Serif Display"', 'serif'],
      'sans':['Rubik', 'sans-serif'],
      'mono':['"Roboto Mono"', 'monospace']
    }
  },
  plugins: [],
}