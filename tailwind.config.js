module.exports = {
  purge: [],
  theme: {
    fontFamily:{
      "heading":['Montserrat', 'sans-serif'],
      "paras":['PT Sans Narrow', 'sans-serif']
    },
    inset:{
      '0':0,
      '1/2':'50%',
      '1/5':'20%',
      '2/5':'40%',
      '3/5':'60%',
      '4/5':'80%'
    },
    extend: {
      colors:{
        "gray-dark":"#1E1E1E",
        "gray-mid" :"#383838",
        "gray-light" :"#666666",
        "orange-mid" :"#FF7A00",
        "blue-logo" :"#43C7F1",
        "blue-tag" : "#12569E"
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20'
      }
  
    },
  },
  variants: {},
  plugins: [],
}
