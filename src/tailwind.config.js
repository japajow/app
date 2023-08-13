module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme:{
        extend: {
            colors: {
                gray:{
                    '100': '#f7fafc',
                    '200': '#edf2f7',
                    '300': '#e2e8f0',
                    '400': '#cbd5e0',
                    '500': '#a0aec0',
                    '600': '#718096',
                    '700': '#4a5568',
                    '800': '#2d3748',
                    '900': '#1a202c',
                    '1000': '#0d1119'
                },
            },
            spacing:{
                1.5: '0.313rem',
                1.6: '0.375rem',
                2.5: '0.625rem',
                7: '1.875rem',
                10: '3.125rem',
                14: '3.370rem',
                15: '3.750rem',
            },
        },
    },
    variants: {
        borderWidth: ['responsive','last','hover','focus']
    },
    plugin: [],

}