import {DefaultTheme, DarkTheme} from '@react-navigation/native';
import colors from 'configs/colors';
import dimens from 'configs/dimens';

const lightTheme = {
    navigation: {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            primary: colors.primaryColor,
            backgroundColor: colors.contentColor,
            card: colors.contentColor,
            text: colors.primaryTextColor,
            border: colors.lineColor,
            notification: colors.badgeColor
        }
    },
    elements: {
        colors: {
            primary: colors.primaryColor
        },
        Button: {
            disabledTitleStyle: {
                color: colors.white
            }
        },
        Image: {
            placeholderStyle: {
                backgroundColor: colors.white
            }
        }
    },
    html: {
        p: {
            fontSize: dimens.mediumText,
            color: colors.primaryTextColor
        },
        b: {
            fontSize: dimens.mediumText,
            color: colors.primaryTextColor,
            fontWeight: 'bold'
        },
        a: {
            fontSize: dimens.mediumText,
            color: colors.primaryColor,
            textDecorationLine: 'underline'
        }
    },
    container: {
        backgroundColor: colors.contentColor
    },
    content: {
        backgroundColor: colors.contentColor
    },
    border: {
        borderColor: colors.lineColor,
        borderLeftColor: colors.lineColor
    },
    text: {
        color: colors.primaryTextColor
    }
};

const darkTheme = {
    navigation: {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            primary: colors.primaryColor,
            background: colors.contentDarkColor,
            card: colors.contentDarkColor,
            text: colors.primaryTextDarkColor,
            border: colors.lineDarkColor,
            notification: colors.badgeDarkColor
        }
    },
    elements: {
        colors: {
            primary: colors.primaryColor
        },
        Button: {
            disabledTitleStyle: {
                color: colors.white
            }
        },
        Image: {
            placeholderStyle: {
                backgroundColor: colors.white
            }
        }
    },
    html: {
        p: {
            fontSize: dimens.mediumText,
            color: colors.primaryTextDarkColor
        },
        b: {
            fontSize: dimens.mediumText,
            color: colors.primaryTextDarkColor,
            fontWeight: 'bold'
        },
        a: {
            fontSize: dimens.mediumText,
            color: colors.primaryColor,
            textDecorationLine: 'underline'
        }
    },
    container: {
        backgroundColor: colors.contentDarkColor
    },
    content: {
        backgroundColor: colors.contentDarkColor
    },
    border: {
        borderColor: colors.lineDarkColor,
        borderLeftColor: colors.lineDarkColor
    },
    text: {
        color: colors.primaryTextDarkColor
    }
};

export function helpers(name, theme) {
    return theme === 'dark' ? darkTheme[name] : lightTheme[name];
}
