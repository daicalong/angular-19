
var colors = require('./const.colors');
var spacing = require('./const.spacing');
var typography = require('./const.typography');
var boxShadow = require('./const.shadows');
var screens = require('./const.screens');
var border = require('./const.border');

module.exports = {
    important: true, //This allows TailwindCSS classes to take precedent over other 3rd-party CSS
    prefix: '',
    theme: {
        extend: {
            maxWidth: spacing,
            minWidth: spacing,
            maxHeight: spacing,
            minHeight: spacing,
            fill: colors,
        },
        screens: screens,
        spacing: spacing,
        colors: colors,
        borderRadius: border.borderRadius,
        boxShadow: boxShadow,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        letterSpacing: typography.letterSpacing,
    },
};
