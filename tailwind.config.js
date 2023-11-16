/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'neutral-color': 'var(--neutral-color)',
        'btn-color': 'var(--btn-color)',
        'btn-hover': 'var(--btn-hover)',
      },
    },
  },
  plugins: [],
};
