import React from 'react'
import styled, { ThemeProvider } from 'styled-components/native';
import useDarkMode from 'use-dark-mode'

const fz = {
    micro: "8px", // 8
    small: "14px", // 18
    regular: "17px", // 22
    large: "19px", // 24
    t3: "24px", // 28
    t2: "32px", // 36
    t1: "44px", // 56
}
const spacing = {
    tiny: "8px",
    small: "16px",
    base: "24px",
    large: "48px",
    xlarge: "64px"
}

const colors = {
    watermelon: '#FF5A5F',
    green: '#00A699',
    darkcyan: '#008388',
    orange: '#FC642D',
    charcoal: '#484848',
    bluecharcoal: '#1F2933',
    grey: '#767676',
    white: 'white'
}

const shared = {
    spacing,
    fz
}

const themes = {
    light: {
        colors: {
            bg: 'white',
            primary: colors.watermelon,
            secondary: colors.green,
            accent: colors.orange,
            text: colors.charcoal,
            ...colors
        },
        type: 'light',
        bgColor: 'white',
        color: '#ff5a5f',
        primaryText: '#484848',
        ...shared
    },

    dark: {
        type: 'dark',
        bgColor: '#1F2933',
        color: '#ff5a5f',
        primaryText: 'white',
        colors: {
            bg: colors.bluecharcoal,
            primary: colors.watermelon,
            secondary: colors.green,
            accent: colors.orange,
            text: 'white',
            ...colors
        },
        ...shared

    }
};

export default ({ children }: { children: any }) => {
    const { value, toggle } = useDarkMode(false)
    const theme = value ? themes.dark : themes.light

    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const body =
        <ThemeProvider theme={theme}>
            <StyledView>
                {children}
            </StyledView>
        </ThemeProvider>

    // prevents ssr flash for mismatched dark mode
    if (!mounted) {
        return <div style={{ visibility: 'hidden' }}>{body}</div>
    }

    return body
}

const StyledView = styled.View`
    height: 100vh;
`