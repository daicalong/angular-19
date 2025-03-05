const screenSizes = {
    mobileSm: '320px',
    mobileLg: '600px',
    tablet: '960px',
    laptopSm: '1280px',
    laptopLg: '1440px',
    fhd: '1920px',
    qhd: '2560px',
    uhd: '3840px',
};

module.exports = {
    '2xs': screenSizes.mobileSm,
    'xs': screenSizes.mobileLg,
    'sm': screenSizes.tablet,
    'md': screenSizes.laptopSm,
    'lg': screenSizes.laptopLg,
    'xl': screenSizes.fhd,
    '2xl': screenSizes.qhd,
    'phone': screenSizes.mobileLg,
    'tablet': screenSizes.tablet,
    'laptop': screenSizes.laptopLg,
    'desktop': screenSizes.hfd,
    '2k': screenSizes.qhd,
    '4k': screenSizes.uhd,
    'portrait': {
        'raw': '(orientation: portrait)',
    },
    'landscape': {
        'raw': '(orientation: landscape)',
    }
};