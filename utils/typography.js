import Typography, {scale, rhythm} from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.56,
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: [
        '200',
        '400',
        '400i',
        '700',
      ],
    },
  ],
  scaleRatio: 2.5,
  headerFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  headerColor: 'hsla(0,0%,0%,0.85)',
  bodyColor: 'hsla(0,0%,0%,0.7)',
  headerWeight: '200',
  bodyWeight: 400,
  boldWeight: 700,
  overrideStyles: (options) => {
    const styles = {
      'h1 a,h2 a,h3 a,h4 a,h5 a,h6 a': {
        fontWeight: options.headerWeight,
      },
      a: {
        fontWeight: 400,
        color: '#419eda',
        textDecoration: 'none',
      },
      'a:hover': {
        color: '#2a6496',
        textDecoration: 'underline',
      },
    }
    return styles
  },
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
