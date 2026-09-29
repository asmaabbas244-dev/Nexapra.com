export const deviceConfig = {
  mobile: {
    breakpoint: '(max-width: 640px)',
    cardCols: 1,
    chatWindow: { width: '100vw', height: '85vh', bottom: '0px', right: '0px' }
  },
  tablet: {
    breakpoint: '(min-width: 641px) and (max-width: 1024px)',
    cardCols: 2,
    chatWindow: { width: '380px', height: '550px', bottom: '20px', right: '20px' }
  },
  desktop: {
    breakpoint: '(min-width: 1025px)',
    cardCols: 3,
    chatWindow: { width: '420px', height: '600px', bottom: '30px', right: '30px' }
  }
};