/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FFCE1A',
                secondary: '#0D0842',
                favorite: '#FF5841',
                accent: '#D4AF37',
                'accent-dark': '#B37E00',
            },
            fontFamily: {
                primary: ['Montserrat', 'sans-serif'],
                secondary: ['Nunito Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
