const tinycolor = require('tinycolor2')

module.exports = {

  /*
   * COLORS
   */

  colors: {
    gray0: '#29292A',
    gray1: '#3E3E3E',
    gray2: '#666667',
    gray3: '#A3A3A5',
    gray4: '#CCCCCE',
    gray5: '#E0E0E2',
    gray: '#363732',

    cyan0: '#3B605B',
    cyan1: '#53867F',
    cyan2: '#6AACA3',
    cyan3: '#81D2C7',
    cyan4: '#97DAD1',
    cyan5: '#BAE6E0',
    cyan: '#81D2C7',

    blue0: '#24394B',
    blue1: '#365570',
    blue2: '#416788',
    blue3: '#7490A8',
    blue: '#66C3FF',

    yellow0: '#A37908',
    yellow1: '#D19C0A',
    yellow2: '#FFBE0B',
    yellow3: '#FFC937',
    yellow4: '#FFD563',
    yellow5: '#FFE190',
    yellow: '#FFC937',

    pink0: '#73493F',
    pink1: '#A06658',
    pink2: '#CE8371',
    pink3: '#FB9F89',
    pink4: '#FBB09E',
    pink5: '#FCC1B3',
    pink: '#D4AFB9',

    green0: '#0F4A37',
    green1: '#15674E',
    green2: '#1C8464',
    green3: '#21A179',
    green4: '#49B291',
    green5: '#85CBB5',
    green: '#21A179',

    red0: '#6A3C3E',
    red1: '#8D5152',
    red2: '#B06466',
    red3: '#C67B7D',
    red4: '#D7A2A4',
    red: '#C67B7D',

    lightgray: '#DCE1E9',
    blue1: '#53D8FB',
    slate: '#2e3d49',
    white: '#ffffff',

    brand: '#D4AFB9',
    secondary: '#0D0A08',
    error: '#C67B7D',
    warning: '#FFC937',
    success: '#21A179',

    defaultText: '#666667',
    defaultTextSecondary: tinycolor('#666667').setAlpha(.8).toString(),
  },

  /*
   * SIZING
   */

  sizing: {
    spacing1: '6rem',
    spacing2: '4rem',
    spacing3: '2rem',
    spacing4: '1rem',
    spacing5: '.6rem',
    spacing6: '.4rem',

    xsFont: '.5em',
    smFont: '.85em',
    mdFont: '1em',
    lgFont: '1.28em',
    xlFont: '1.71em',
    xxlFont: '2.85em',

    maxWidth: '80rem',
  },
}
