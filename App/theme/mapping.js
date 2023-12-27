import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
//import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Mymapping = {
  strict: {
    "text-font-family": "MonumentExtended-Regular",
    "text-font-family-1": "Ubuntu-Medium",
    "text-font-family-2": "Poppins-Regular",
    "text-font-family-3": "Poppins-Medium",
    "text-font-family-4": "Poppins-SemiBold",
    "text-font-size-32": RFValue(32),
    "text-font-size-28": RFValue(28),
    "text-font-size-26": RFValue(26),
    "text-font-size-24": RFValue(24),
    "text-font-size-22": RFValue(22),
    "text-font-size-18": RFValue(18),
    "text-font-size-16": RFValue(16),
    "text-font-size-14": RFValue(14),
    "text-font-size-12": RFValue(12),
    "text-line-height-1": RFValue(90),
    'text-font-size-20': RFValue(20),
  },
  components: {
    Button: {
      meta: {
        variantGroups: {},
      },
      appearances: {
        filled: {
          mapping: {
            backgroundColor: "color-rose-press",
          },
          variantGroups: {
            status: {
              primary: {
                borderColor: "transparent",
                backgroundColor: "color-primary",
                textColor: "color-Blanc-cassé",
                textFontFamily: "text-font-family-1",
                textFontSize: "text-font-size-16",
                
                state: {
                  active: {
                    borderColor: "transparent",
                    backgroundColor: "color-rose-press",
                    textColor: "color-Blanc-cassé",
                    textFontFamily: "text-font-family-1",
                    textFontSize: "text-font-size-16",
                  
                  },
                  disabled: {
                    borderColor: "transparent",
                    backgroundColor: "color-input-disabled",
                    textColor: "color-Blanc-cassé-disabled",
                    textFontFamily: "text-font-family-1",
                    textFontSize: "text-font-size-16",
                  },
                  focused: {
                    borderColor: "transparent",
                    backgroundColor: "color-primary",
                    textColor: "color-Blanc-cassé",
                    textFontFamily: "text-font-family-1",
                    textFontSize: "text-font-size-16",
                  },
                },
              },
              secondary: {
                borderColor: "transparent",
                backgroundColor: "color-rose-press",
                textColor: "color-primary",
                textFontFamily: "text-font-family-1",
                textFontSize: "text-font-size-16",
                state: {
                  active: {
                    borderColor: "transparent",
                    backgroundColor: "color-rose-press",
                    textColor: "color-primary",
                    textFontFamily: "text-font-family-1",
                    textFontSize: "text-font-size-16",
                  },
                  disabled: {
                    borderColor: "transparent",
                    backgroundColor: "color-Gris- Disabled",
                    textColor: "color-Blanc-cassé",
                    textFontFamily: "text-font-family-3",
                  },
                  focused: {
                    borderColor: "transparent",
                    backgroundColor: "color-rose-press",
                    textColor: "color-Blanc-cassé",
                    textFontFamily: "text-font-family-3",
                  },
                },
              },
            },
            size: {
              small: {
                minHeight: 43,
                textFontSize: "text-font-size-16",
                borderRadius: 12,
              },
            },
          },
        },
        outline: {
          mapping: {},
          variantGroups: {
            status: {
              primary: {
                borderColor: "transparent",
                backgroundColor: "color-rose-press",
                textColor: "color-primary",
                textFontFamily: "text-font-family-1",
                textFontSize: "text-font-size-16",
                state: {
                  active: {
                    borderColor: "transparent",
                    backgroundColor: "color-rose-press",
                    textColor: "color-primary",
                    textFontFamily: "text-font-family-1",
                    textFontSize: "text-font-size-16",
                  },
                  disabled: {
                    borderColor: "color-primary",
                    backgroundColor: "color-rose10",
                    textColor: "color-primary",
                    textFontFamily: "text-font-family-3",
                    textFontSize: "text-font-size-16",
                  },
                },
              },
            },
            size: {
              small: {
                minHeight: 43,
                textFontSize: "text-font-size-16",
                borderRadius: 12,
              },
            },
          },
        },
      },
    },
    Input: {
      appearances: {
        default: {
          mapping: {
            textFontFamily: "text-font-family",
            iconTintColor: "color-primary",
            labelColor: "color-input-placeholder",
            labelFontFamily: "text-font-family",
            labelFontSize: "text-font-size-16",
          },
          variantGroups: {
            status: {
              warning: {
                placeholderColor: "color-input-placeholder",
                backgroundColor: "color-rose-press",
                textColor: "color-dark",
                textFontSize: 15,
                labelColor: "color-dark",
                borderColor: "color-input-border",
                labelFontFamily: "text-font-family-2",
                minHeight: 50,
                textFontFamily: "text-font-family-2",
                iconTintColor: "color-basic-100",
                state: {
                  disabled: {
                    borderColor: "color-dark",
                    backgroundColor: "color-basic-100",
                    textColor: "color-dark",
                    labelColor: "color-basic-900",
                    labelFontFamily: "text-font-family-2",
                    labelFontSize: "text-label-font-size",
                    captionColor: "color-dark",
                    iconTintColor: "color-dark",
                  },
                  focused: {
                    borderColor: "color-basic-100",
                    backgroundColor: "color-basic-repair-disabled",
                    textColor: "color-basic-100",
                    labelColor: "color-basic-100",
                    captionColor: "color-basic-100",
                    iconTintColor: "color-basic-100",
                  },
                },
              },
              control: {
                backgroundColor: "color-basic-100",
                textColor: "color-dark",
                textFontFamily: "text-font-family-2",
                textFontSize: 15,
                labelColor: "color-basic-900",
                minHeight: 50,
                iconTintColor: "color-primary",
                state: {
                  focused: {
                    textFontFamily: "text-font-family-2",
                    labelColor: "color-dark",
                    iconTintColor: "color-dark",
                    borderColor: "color-dark",
                  },
                  hover: {
                    backgroundColor: "color-basic-900",
                    textFontFamily: "text-font-family-2",
                    labelColor: "color-dark",
                    iconTintColor: "color-dark",
                    borderColor: "color-dark",
                  },
                  disabled: {
                    textFontFamily: "text-font-family-2",
                    borderColor: "color-dark",
                    backgroundColor: "color-basic-100",
                    textColor: "color-dark",
                    labelColor: "color-dark",
                    minHeight: 50,
                    captionColor: "color-dark",
                    placeholderColor: "color-dark",
                    iconTintColor: "color-dark",
                  },
                },
              },
              info: {
                backgroundColor: "color-basic-repair-disabled",
                textColor: "color-basic-100",
                borderColor: "color-basic-100",
                textFontFamily: "text-font-family-2",
                textFontSize: 15,
                labelColor: "color-basic-100",
                minHeight: 50,
                iconTintColor: "color-basic-100",
                state: {
                  focused: {
                    backgroundColor: "color-basic-repair-disabled",
                    textFontFamily: "text-font-family-2",
                    labelColor: "color-dark",
                    iconTintColor: "color-dark",
                    borderColor: "color-basic-100",
                  },
                  hover: {
                    backgroundColor: "color-basic-900",
                    textFontFamily: "text-font-family-2",
                    labelColor: "color-dark",
                    iconTintColor: "color-dark",
                    borderColor: "color-dark",
                  },
                  disabled: {
                    textFontFamily: "text-font-family-2",
                    borderColor: "color-dark",
                    backgroundColor: "color-basic-100",
                    textColor: "color-dark",
                    labelColor: "color-dark",
                    minHeight: 50,
                    captionColor: "color-dark",
                    placeholderColor: "color-dark",
                    iconTintColor: "color-dark",
                  },
                },
              },
              primary: {
                placeholderColor: "#CACACA",
                backgroundColor: "color-rose-press",
                textColor: "#CACACA",
                textFontSize: 16,
                labelColor: "color-Noir-chaud",
                labelFontFamily: "text-font-family",
                labelFontSize: "text-label-font-size",
                minHeight: 52,
                textFontFamily: "text-font-family-1",
                iconTintColor: "color-primary",
                borderColor: "color-Noir-chaud",
                borderRadius: 5,
                borderWidth: 0,
                state: {
                  filled: {
                    backgroundColor: "color-blanc",
                    textColor: "color-Noir-chaud",
                    labelColor: "color-Noir-chaud",
                    labelFontFamily: "text-font-family-2",
                    labelFontSize: "text-label-font-size",
                    captionColor: "color-dark",
                    iconTintColor: "color-primary",
                  },
                  disabled: {
                    backgroundColor: "color-blanc",
                    textColor: "#CACACA",
                    placeholderColor: "#CACACA",
                    labelColor: "color-Noir-chaud",
                    labelFontFamily: "text-font-family-2",
                    labelFontSize: "text-label-font-size",
                    captionColor: "color-dark",
                    iconTintColor: "color-primary",
                  },
                  focused: {
                    backgroundColor: "color-blanc",
                    textColor: "color-Noir-chaud",
                    labelColor: "color-Noir-chaud",
                    captionColor: "color-Noir-chaud",
                    iconTintColor: "color-primary",
                    borderColor: "color-primary",
                  },
                },
              },
              danger: {
                backgroundColor: "color-input",
                textColor: "color-dark",
                textFontSize: 96,
                labelColor: "color-danger-input",
                labelFontFamily: "text-font-family-2",
                labelFontSize: "text-label-font-size",
                minHeight: 50,
                textFontFamily: "text-font-family-2",
                iconTintColor: "color-dark",
                borderColor: "color-danger-input",
                state: {
                  disabled: {
                    borderColor: "color-dark",
                    backgroundColor: "color-input",
                    textColor: "color-dark",
                    labelColor: "color-basic-900",
                    labelFontFamily: "text-font-family-2",
                    labelFontSize: "text-label-font-size",
                    captionColor: "color-dark",
                    iconTintColor: "color-dark",
                  },
                  focused: {
                    borderColor: "color-danger-input",
                    backgroundColor: "color-basic-100",
                    textColor: "color-dark",
                    labelColor: "color-danger-input",
                    captionColor: "color-dark",
                    iconTintColor: "color-dark",
                  },
                },
              },
            },
          },
        },
      },
    },
    Text: {
      appearances: {
        default: {
          mapping: {
            color: "color-Noir-chaud",
            fontWeight: "400",
          },
          variantGroups: {
            category: {
              h1: {
                fontSize: "text-font-size-32",
                fontFamily: "text-font-family",
                fontWeight: "400",
              },
              h2: {
                fontSize: "text-font-size-26",
                fontFamily: "text-font-family-1",
                fontWeight: "400",
              },
              h3: {
                fontSize: "text-font-size-24",
                fontFamily: "text-font-family",
                fontWeight: "500",
              },
              h4: {
                fontSize: "text-font-size-20",
                fontFamily: "text-font-family-4",
              },

              s1: {
                fontSize: "text-font-size-18",
                fontFamily: "text-font-family-4",
              },
              s2: {
                fontSize: "text-font-size-16",
                fontFamily: "text-font-family",
              },
              h5: {
                fontSize: "text-font-size-16",
                fontFamily: "text-font-family-2",
              },
              p1: {
                fontSize: "text-font-size-14",
                fontFamily: "text-font-family-2",
              },
              p2: {
                fontSize: "text-font-size-18",
                fontFamily: "text-font-family-2",
                fontWeight: "500",
              },
              c1: {
                fontSize: "text-font-size-14",
                fontFamily: "text-font-family",
              },
              c2: {
                fontSize: "text-font-size-12",
                fontFamily: "text-font-family-3",
              },
              label: {
                fontSize: "text-font-size-16",
                fontFamily: "text-font-family-1",
                fontWeight: "900",
              },
            },
            status: {
              info: {
                textColor: "color-dark",
              },
            },
          },
        },
        hint: {
          mapping: {
            color: "color-basic-500",
          },
        },
      },
    },
    Select: {
      appearances: {
        default: {
          mapping: {
            paddingHorizontal: 12,
            minWidth: 100,
            minHeight: 50,
            iconWidth: 24,
            iconHeight: 24,
            borderWidth: 0.5,
            iconTintColor: "color-primary",
            iconMarginHorizontal: 0,
            textMarginHorizontal: 8,
            textColor: "color-primary",
            textFontWeight: "bold",
            textFontFamily: "text-font-family",
            placeholderFontFamily: "text-font-family-3",
            labelMarginBottom: 4,
            labelFontSize: "text-label-font-size",
            labelFontWeight: "text-label-font-weight",
            labelFontFamily: "text-font-family",
            captionFontSize: "text-caption-1-font-size",
            captionFontWeight: "text-caption-1-font-weight",
            captionFontFamily: "text-font-family-3",
            popoverMaxHeight: 220,
            popoverBorderRadius: "border-radius",
            popoverBorderWidth: "border-width",
            popoverBorderColor: "#3B3B5B",
            backgroundColor: "#3B3B5B",
          },
          variantGroups: {
            status: {
              primary: {
                borderColor: "color-Noir-chaud",
                borderWidth: 0.5,
                backgroundColor: "#3B3B5B",
                labelColor: "white",
                paddingHorizontal: 0,
                captionColor: "color-blanc",
                placeholderColor: "white",
                textColor: "white",
                minHeight: 30,
                iconTintColor: "color-primary",
                state: {
                  active: {
                    borderColor: "color-primary",
                    iconTintColor: "color-primary",
                    backgroundColor: "#3B3B5B",
                    textColor: "#fff",
                  },
                  disabled: {
                    borderColor: "#A5A5A5",
                    backgroundColor: "#3B3B5B",
                    placeholderColor: "#A5A5A5",
                    iconTintColor: "#A5A5A5",
                    borderWidth: 0.5,
                    textColor: "#A5A5A5",
                  },
                },
              },
            },
          },
        },
      },
    },
    SelectOption: {
      appearances: {
        default: {
          mapping: {
            paddingHorizontal: 4,
            paddingVertical: 12,
            backgroundColor: "#3B3B5B",
            textMarginHorizontal: 4,
            textFontFamily: "text-font-family-3",
            textColor: "#fff",
            iconWidth: 20,
            iconHeight: 20,
            iconMarginHorizontal: 8,
            iconTintColor: "color-primary",
            borderStyle: 10,
            state: {
              active: {
                backgroundColor: "#3B3B5B",
                textColor: "#A5A5A5",
              },
              selected: {
                backgroundColor: "#3B3B5B",
                textColor: "white",
              },
            },
          },
          variantGroups: {
            status: {
              primary: {
                borderColor: "color-Noir-chaud",
                backgroundColor: "#3B3B5B",
                labelColor: "color-Noir-chaud",
                paddingHorizontal: 0,
                captionColor: "color-blanc",
                placeholderColor: "color-Noir-chaud",
                textColor: "color-Noir-chaud",
                minHeight: 30,
                iconTintColor: "color-primary",
                state: {
                  active: {
                    borderColor: "color-primary",
                    iconTintColor: "color-primary",
                    backgroundColor: "#3B3B5B",
                    textColor: "#fff",
                  },
                  disabled: {
                    borderColor: "color-primary",
                    backgroundColor: "#3B3B5B",
                    placeholderColor: "#3B3B5B",
                    textColor: "color-primary",
                    iconTintColor: "color-primary",
                  },
                },
              },
            },
          },
        },
      },
    },

    CheckBox: {
      appearances: {
        default: {
          variantGroups: {
            status: {
              basic: {
                borderColor: "color-primary",
                backgroundColor: "color-blanc",
                textColor: "color-primary",
                width: 20,
                height: 20,
                borderRadius: 4,
                state: {
                  checked: {
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    borderColor: "color-primary",
                    backgroundColor: "color-blanc",
                    iconTintColor: "color-primary",
                  },
                },
              },
              primary: {
                borderColor: "color-primary",
                backgroundColor: "color-blanc",
                textColor: "color-Noir-chaud",

                width: 20,
                height: 20,
                borderRadius: 4,
                state: {
                  checked: {
                    width: 20,
                    height: 20,
                    borderRadius: 4,
                    borderColor: "color-primary",
                    backgroundColor: "color-blanc",
                    iconTintColor: "color-primary",
                  },
                },
              },
            },
          },
        },
      },
    },
    Datepicker: {
      meta: {
        scope: "all",
        parameters: {
          minHeight: {
            type: "number",
          },
          paddingHorizontal: {
            type: "number",
          },
          paddingVertical: {
            type: "number",
          },
          borderRadius: {
            type: "number",
          },
          borderColor: {
            type: "string",
          },
          borderWidth: {
            type: "number",
          },
          backgroundColor: {
            type: "string",
          },
          textMarginHorizontal: {
            type: "number",
          },
          textFontSize: {
            type: "number",
          },
          textFontWeight: {
            type: "string",
          },
          textFontFamily: {
            type: "string",
          },
          textColor: {
            type: "string",
          },
          placeholderColor: {
            type: "string",
          },
          iconWidth: {
            type: "number",
          },
          iconHeight: {
            type: "number",
          },
          iconMarginHorizontal: {
            type: "number",
          },
          iconTintColor: {
            type: "string",
          },
          labelColor: {
            type: "string",
          },
          labelFontFamily: {
            type: "string",
          },
          labelFontSize: {
            type: "number",
          },
          labelFontWeight: {
            type: "string",
          },
          labelMarginBottom: {
            type: "number",
          },
          captionColor: {
            type: "string",
          },
          captionFontFamily: {
            type: "string",
          },
          captionFontSize: {
            type: "number",
          },
          captionFontWeight: {
            type: "string",
          },
        },
        appearances: {
          default: {
            default: true,
          },
        },
        variantGroups: {
          status: {
            basic: {
              default: true,
            },
            primary: {
              default: false,
            },
            success: {
              default: false,
            },
            info: {
              default: false,
            },
            warning: {
              default: false,
            },
            danger: {
              default: false,
            },
            control: {
              default: false,
            },
          },
          size: {
            small: {
              default: true,
            },
            medium: {
              default: true,
            },
            large: {
              default: false,
            },
          },
        },
        states: {
          disabled: {
            default: false,
            priority: 0,
            scope: "all",
          },
          active: {
            default: false,
            priority: 1,
            scope: "all",
          },
        },
      },
      appearances: {
        default: {
          mapping: {
            paddingHorizontal: 8,
            textMarginHorizontal: 8,
            iconWidth: 24,
            iconHeight: 24,
            iconMarginHorizontal: 8,
            labelMarginBottom: 4,
            labelFontSize: "text-label-font-size",
            labelFontWeight: "text-label-font-weight",
            labelFontFamily: "text-label-font-family",

            captionFontFamily: "text-caption-1-font-family",
            textColor: "color-Noir-chaud",
          },
          variantGroups: {
            status: {
              primary: {
                backgroundColor: "color-blanc",
                textColor: "white",
                placeholderColor: "color-Noir-chaud",
                paddingVertical:20,
                borderRadius:10,
                borderWidth:0,
                state: {
                  active: {
                    borderColor: "color-primary",
                    backgroundColor: "color-blanc",
                    textColor: "color-Noir-chaud",
                  },
                },
              },
              warning: {
                backgroundColor: "color-basic-repair-disabled",
                labelColor: "text-hint-color",
                state: {
                  active: {
                    borderColor: "color-basic-100",
                    backgroundColor: "color-basic-repair-disabled",
                  },
                },
              },
              danger: {
                borderColor: "color-danger-default",
                backgroundColor: "background-basic-color-2",
                labelColor: "text-hint-color",
                captionColor: "text-danger-color",
                placeholderColor: "text-hint-color",
                iconTintColor: "text-danger-color",
                state: {
                  active: {
                    borderColor: "color-danger-active",
                    backgroundColor: "background-basic-color-1",
                  },
                  disabled: {
                    borderColor: "border-basic-color-4",
                    backgroundColor: "background-basic-color-2",
                    textColor: "text-disabled-color",
                    iconTintColor: "text-disabled-color",
                  },
                },
              },
            },
            size: {
              small: {
                paddingVertical:20
              },
            },
          },
        },
      },
    },
    Toggle: {
      meta: {},
      appearances: {
        default: {
          mapping: {},
          variantGroups: {
            status: {
              primary: {
                thumbBackgroundColor: "red",
                state: {
                  checked: {
                    thumbBackgroundColor: "red",
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
