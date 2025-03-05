import { definePreset } from "@primeng/themes";
import Aura from '@primeng/themes/aura';

export const PortalTheme = definePreset(Aura, {
    primitive: {
        borderRadius: {
            none: '0',
            xs: '2px',
            sm: '4px',
            md: '8px',
            lg: '16px',
            xl: '24px',
            full: '9999px'
        },
        fontSize: {
            'xs': '1rem',
            'sm': '1.2rem',
            'base': '1.4rem',
            'lg': '1.6rem',
            'xl': '2rem',
            '2xl': '2.4rem',
            '3xl': '3.6rem',
            '4xl': '4.8rem',
        },
    },
    semantic: {
        transitionDuration: '0.2s',
        focusRing: {
            width: '2px',
            style: 'solid',
            color: '{primary.300}',
            offset: '2px',
            shadow: 'none'
        },
        disabledOpacity: '0.5',
        iconSize: '{fontSize.lg}',
        anchorGutter: '2px',
        formField: {
            paddingX: '1rem',
            paddingY: '0.55rem',
            sm: {
                fontSize: '{fontSize.sm}',
                paddingX: '1rem',
                paddingY: '0.2rem'
            },
            lg: {
                fontSize: '{fontSize.base}',
                paddingX: '2rem',
                paddingY: '1.5rem'
            },
            borderRadius: '{border.radius.sm}',
            focusRing: {
                width: '0',
                style: 'none',
                color: 'transparent',
                offset: '0',
                shadow: 'none'
            },
            transitionDuration: '{transition.duration}'
        },
        list: {
            padding: '0rem',
            gap: '2px',
            header: {
                padding: '0rem'
            },
            option: {
                padding: '0.6rem 1rem',
                borderRadius: '{border.radius.sm}'
            },
            optionGroup: {
                padding: '0.8rem 1rem',
                fontWeight: '600'
            }
        },
        content: {
            borderRadius: '{border.radius.sm}'
        },
        mask: {
            transitionDuration: '0.15s'
        },
        navigation: {
            list: {
                padding: '0.25rem 0.25rem',
                gap: '2px'
            },
            item: {
                padding: '0.5rem 1rem',
                borderRadius: '{border.radius.sm}',
                gap: '0.5rem'
            },
            submenuLabel: {
                padding: '0.5rem 1rem',
                fontWeight: '600'
            },
            submenuIcon: {
                size: '1.8rem'
            }
        },
        overlay: {
            select: {
                borderRadius: '{border.radius.lg}',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
            },
            popover: {
                borderRadius: '{border.radius.lg}',
                padding: '1rem',
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
            },
            modal: {
                borderRadius: '{border.radius.lg}',
                padding: '1.25rem',
                shadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
            },
            navigation: {
                shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)'
            }
        },
        primary: {
            50: '{blue.50}',
            100: '{blue.100}',
            200: '{blue.200}',
            300: '{blue.300}',
            400: '{blue.400}',
            500: '{blue.500}',
            600: '{blue.600}',
            700: '{blue.700}',
            800: '{blue.800}',
            900: '{blue.900}',
            950: '{blue.950}'
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '{slate.50}',
                    100: '{slate.100}',
                    200: '{slate.200}',
                    300: '{slate.300}',
                    400: '{slate.400}',
                    500: '{slate.500}',
                    600: '{slate.600}',
                    700: '{slate.700}',
                    800: '{slate.800}',
                    900: '{slate.900}',
                    950: '{slate.950}'
                },
                primary: {
                    color: "{primary.500}",
                    contrastColor: "#ffffff",
                    hoverColor: "{primary.600}",
                    activeColor: "{primary.700}"
                },
                highlight: {
                    background: "{primary.50}",
                    focusBackground: "{primary.100}",
                    color: "{primary.700}",
                    focusColor: "{primary.800}"
                },
                mask: {
                    background: "rgba(0,0,0,0.4)",
                    color: "{surface.200}"
                },
                formField: {
                    background: "{surface.0}",
                    disabledBackground: "{surface.200}",
                    filledBackground: "{surface.50}",
                    filledHoverBackground: "{surface.50}",
                    filledFocusBackground: "{surface.50}",
                    borderColor: "{surface.300}",
                    hoverBorderColor: "{surface.400}",
                    focusBorderColor: "{primary.color}",
                    invalidBorderColor: "{red.400}",
                    color: "{surface.800}",
                    disabledColor: "{surface.500}",
                    placeholderColor: "{surface.500}",
                    invalidPlaceholderColor: "{red.500}",
                    floatLabelColor: "{surface.500}",
                    floatLabelFocusColor: "{primary.500}",
                    floatLabelActiveColor: "{surface.500}",
                    floatLabelInvalidColor: "{form.field.invalid.placeholder.color}",
                    iconColor: "{surface.400}",
                    shadow: "none"
                },
                text: {
                    color: "{surface.800}",
                    hoverColor: "{surface.900}",
                    mutedColor: "{surface.500}",
                    hoverMutedColor: "{surface.600}"
                },
                content: {
                    background: "{surface.0}",
                    hoverBackground: "{surface.100}",
                    borderColor: "{surface.200}",
                    color: "{text.color}",
                    hoverColor: "{text.hover.color}"
                },
                overlay: {
                    select: {
                        background: "{surface.0}",
                        borderColor: "{surface.200}",
                        color: "{text.color}"
                    },
                    popover: {
                        background: "{surface.0}",
                        borderColor: "{surface.200}",
                        color: "{text.color}"
                    },
                    modal: {
                        background: "{surface.0}",
                        borderColor: "{surface.200}",
                        color: "{text.color}"
                    }
                },
                list: {
                    option: {
                        focusBackground: "{surface.100}",
                        selectedBackground: "{highlight.background}",
                        selectedFocusBackground: "{highlight.focus.background}",
                        color: "{text.color}",
                        focusColor: "{text.hover.color}",
                        selectedColor: "{highlight.color}",
                        selectedFocusColor: "{highlight.focus.color}",
                        icon: {
                            color: "{surface.400}",
                            focusColor: "{surface.500}"
                        }
                    },
                    optionGroup: {
                        background: "transparent",
                        color: "{text.muted.color}"
                    }
                },
                navigation: {
                    item: {
                        focusBackground: "{surface.100}",
                        activeBackground: "{surface.100}",
                        color: "{text.color}",
                        focusColor: "{text.hover.color}",
                        activeColor: "{text.hover.color}",
                        icon: {
                            color: "{surface.400}",
                            focusColor: "{surface.500}",
                            activeColor: "{surface.500}"
                        }
                    },
                    submenuLabel: {
                        background: "transparent",
                        color: "{text.muted.color}"
                    },
                    submenuIcon: {
                        color: "{surface.400}",
                        focusColor: "{surface.500}",
                        activeColor: "{surface.500}"
                    }
                }
            },
            dark: {
                surface: {
                    0: '#ffffff',
                    50: '{slate.50}',
                    100: '{slate.100}',
                    200: '{slate.200}',
                    300: '{slate.300}',
                    400: '{slate.400}',
                    500: '{slate.500}',
                    600: '{slate.600}',
                    700: '{slate.700}',
                    800: '{slate.800}',
                    900: '{slate.900}',
                    950: '{slate.950}'
                }
            }
        }
    },
    components: {
        button: {
            borderRadius: '{borderRadius.sm}',
            label: {
                fontWeight: '600',
            }
        },
        dialog: {
            header: {
                padding: '2rem'
            },
            content: {
                padding: '2rem'
            },
            footer: {
                padding: '2rem',
                gap: '1rem'
            },
            title: {
                fontSize: '{fontSize.lg}',
            }
        },
        datepicker: {
            panel: {
                padding: '1rem',
                borderRadius: '{borderRadius.md}',
            },
            week: {
                day: {
                    padding: '.3rem'
                }
            },
            date: {
                padding: '.3rem',
                width: '2.4rem',
                height: '2.4rem',
            }
        },
        inputtext: {
            borderRadius: '{borderRadius.sm}',
        },
        inputotp: {
            input: {
                width: '3.4rem',
                sm: {
                    width: '3rem',
                },
                lg: {
                    width: '5.4rem',
                }
            },
        },
        checkbox: {
            borderRadius: '{borderRadius.sm}',
            width: '2rem',
            height: '2rem',
            icon: {
                size: '{fontSize.lg}',
            },
        },
        toggleswitch: {
            width: '3.6rem',
            height: '2rem',
            gap: '.4rem',
            handle: {
                size: '1.2rem'
            }
        },
        radiobutton: {
            width: '2.2rem',
            height: '2.2rem',
            icon: {
                size: '{fontSize.sm}',
            },
        },
        multiselect: {
            list: {
                header: {
                    padding: '1rem'
                }
            }
        },
        toast: {
            icon: {
                size: '{fontSize.lg}',
            },
            summary: {
                fontSize: '{fontSize.base}',
            },
            detail: {
                fontSize: '{fontSize.base}',
                fontWeight: '400',
            },
            textGap: '0rem',
            closeIcon: '{fontSize.lg}',
            close: {
                icon: '{fontSize.lg}',
                button: {
                    width: '{fontSize.lg}',
                    height: '{fontSize.lg}',
                }
            }
        }
    }
});