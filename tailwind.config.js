/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FF9061',
          200: '#F58655',
          300: '#EB7B49',
          400: '#E1713D',
          500: '#D76731', // 메인 주황
          600: '#CC5C24',
          700: '#B04E1E',
          800: '#954118',
          900: '#7A3412',
        },
        gray: {
          100: '#F0F0F5',
          200: '#D6D6DB',
          300: '#BDBEC4',
          400: '#A5A6AC',
          500: '#8D8E95', // 메인 그레이
          600: '#74757D',
          700: '#5C5D65',
        },
        // 배경색 전용
        'bg-white': '#F7F9FF',
        'bg-black': '#232323',
      },
      fontSize: {
	      //px 크기에 맞춤
        8: '0.5rem',  
        9: '0.5625rem',
        10: '0.625rem',
        11: '0.6875rem',
        12: '0.75rem',
        13: '0.8125rem',
        14: '0.875rem',
        15: '0.9375rem',
        16: '1rem',
        17: '1.0625rem',
        18: '1.125rem',
        19: '1.1875rem',
        20: '1.25rem',
        21: '1.3125rem',
        22: '1.375rem',
        23: '1.4375rem',
        24: '1.5rem',
        25: '1.5625rem',
        26: '1.625rem',
        27: '1.6875rem',
        28: '1.75rem',
        29: '1.8125rem',
        30: '1.875rem',
        31: '1.9375rem',
        32: '2rem',
        33: '2.0625rem',
        34: '2.125rem',
        35: '2.1875rem',
        36: '2.25rem',
        37: '2.3125rem',
        38: '2.375rem',
        39: '2.4375rem',
        40: '2.5rem',
      },
      fontFamily: {
        pretendard: ['Pretendard Variable', 'sans-serif'],
      },
      spacing: {
        4: '0.25rem', // 4px
        8: '0.5rem', // 8px
        12: '0.75rem', // 12px
        16: '1rem', // 16px
        18: '1.125rem', // 18px
        20: '1.25rem', // 20px
        24: '1.5rem', // 24px
      },
      borderRadius: {
			  4: '0.25rem',   // 4px
			  8: '0.5rem',    // 8px
			  12: '0.75rem',  // 12px 
			  16: '1rem',     // 16px 
			  20: '1.25rem',  // 20px 
			  24: '1.5rem',   // 24px 
			}
    },
  },
  plugins: [],
}