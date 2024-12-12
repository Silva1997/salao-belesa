/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
   animation:{
    'slider-direita': 'slider_direita 1s ease-in-out',
   },
   keyframes:{
    slider_direita:{
      '0%':{transform:'translateX(-100%)',opacity:'0'},
      '100%':{transform:'translateX(0)',opacity:'1'}
          }
   
            },
      },
      screens: {
        // Definindo um intervalo customizado para 360px a 414px
        'xs-min': '360px', // A partir de 360px
         'sm':'648px',
        'md': '768px',  // A partir de 768px
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
     
      }
    },



      plugins: [
        function ({ addComponents, theme }) {
          addComponents({
            '@media (orientation: landscape)': {
              '.landscape\\:bg-cover': {
                backgroundImage: 'url("./assets/fundo-landscape.png")',
              },
              '.landscape\\:h-custom': {
                height: '60vh',
              },
            },
            '@media (orientation: portrait)': {
              '.portrait\\:bg-cover': {
                backgroundImage: 'url("./assets/fundo-portrait.png")',
              },
              '.portrait\\:h-custom': {
                height: '80vh',
              },
            },
          });
        },
      ],
    
  }
