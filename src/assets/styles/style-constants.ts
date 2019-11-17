export const breakpoints = {
  xxs: '0',
  xs: '600px',
  sm: '700px',
  md: '960px',
  lg: '1280px',
  xxl: '1600px'
};

export const site = {
  remValue: '10px',
  fontSize: '1.6rem',
  fontFirst: '\'Raleway\', sans-serif',
  siteMaxWidth: breakpoints.xxl
};

export const animations = {
  globalDuration: '0.2s'
};

export const grid = {
  columns: '12',
  glbGutter: '1.6rem',
  glbHalfGutter: '0.8rem'
};

export const indents = {
  screen: '8rem',
  screenMobile: '2rem'
};

interface FontWeight {
  [key: string]: string;
}

export const fontWeight: FontWeight = {
  thin: '100',
  'extra lite': '200',
  lite: '300',
  regular: '400',
  medium: '500',
  'semi bold': '600',
  bold: '700',
  'extra bold': '800',
  black: '900'
};

export const palette = {
  html: '#fff'
};
