export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Paleta oficial
        primary: '#C92071',
        secondary: '#B5B6F2',
        tertiary: '#991956',
        error: '#EE4266',
        success: '#52CA76',
        warning: '#F6AA1C',
        // Grayscale
        'dark-gray': '#1F1F1F',
        'dark-gray-2': '#474747',
        'dark-gray-3': '#666666',
        'light-gray': '#8F8F8F',
        'light-gray-2': '#CCCCCC',
        'light-gray-3': '#F5F5F5',
        white: '#FFFFFF',
        // Base usada no projeto (mapeada para light-gray-3 para manter compatibilidade)
        base: '#F5F5F5',
      },
    },
  },
  plugins: [],
}
