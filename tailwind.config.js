const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        "./src/**/*.{html,js}",
        "./node_modules/preline/dist/*.js",
        "./src/assets/libs/*"
    ],
    darkMode: ['class'],
    theme: {
        fontFamily: {
            'body': ['Barlow Condensed', 'sans-serif'],
            'inter': ['Inter', 'sans-serif'],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '7.375rem',
            }
        },
        fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '3.75rem',
            '7xl': '4.5rem',
            '8xl': '6rem',
            '9xl': '8rem',
            '13': '0.813rem',
            '15': '0.938rem',
            '52': '3.25rem',
            '56': '3.5rem',
        },
        extend: {
            colors: {
                primary: '#ab9743',
                secondary: '#2e2c2c',
                success: '#faf0f0',
                info: '#2e2c2c',
            },
        },

    },
    plugins: [
        require('preline/plugin'),
    ],
}