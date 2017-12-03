import tinycolor from 'tinycolor2'

function toStringHex(hex) {
  return '#' + hex
}

export default hex => {
  const color = hex.replace('#', '')

  return {
    '50': toStringHex(tinycolor(color).lighten(52).toHex()),
    '100': toStringHex(tinycolor(color).lighten(37).toHex()),
    '200': toStringHex(tinycolor(color).lighten(26).toHex()),
    '300': toStringHex(tinycolor(color).lighten(12).toHex()),
    '400': toStringHex(tinycolor(color).lighten(6).toHex()),
    '500': toStringHex(tinycolor(color).toHex()),
    '600': toStringHex(tinycolor(color).darken(6).toHex()),
    '700': toStringHex(tinycolor(color).darken(12).toHex()),
    '800': toStringHex(tinycolor(color).darken(18).toHex()),
    '900': toStringHex(tinycolor(color).darken(24).toHex()),
    'A100': toStringHex(tinycolor(color).lighten(50).saturate(30).toHex()),
    'A200': toStringHex(tinycolor(color).lighten(30).saturate(30).toHex()),
    'A400': toStringHex(tinycolor(color).lighten(10).saturate(15).toHex()),
    'A700': toStringHex(tinycolor(color).lighten(5).saturate(5).toHex()),
    'contrastDefaultColor': tinycolor(color).isLight() ? 'dark' : 'light',
  }
}
