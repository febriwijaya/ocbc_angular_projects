module.exports = {
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: false,
  mode: 'jit',
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
}
