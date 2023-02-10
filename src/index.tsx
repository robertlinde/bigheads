import * as theme from './theme'

export { theme }
export * from './components/Avatar'
export { Avatar as BigHead } from './components/Avatar'

export { ThemeContext } from './themeContext'

export { Noop } from './utils/Noop'

const options = {
    'showBackground': [true, false],
    'backgroundColor': ['red', 'orange', 'yellow', 'green', 'turqoise', 'blue', 'pink', 'purple', 'none'],
    'backgroundShape': ['circle', 'square', 'squircle'],
    'accessory': ['none', 'roundGlasses', 'tinyGlasses', 'shades', 'hoopEarrings'],
    'body': ['chest', 'breasts'],
    'clothing': ['naked', 'shirt', 'dressShirt', 'vneck', 'tankTop', 'dress', 'denimJacket', 'hoodie', 'chequeredShirt', 'chequeredShirtDark'],
    'clothingColor': ['white', 'gray', 'black', 'red', 'lightRed', 'orange', 'lightOrange', 'yellow', 'lightYellow', 'green', 'lightGreen', 'turqoise', 'lightTurqoise', 'blue', 'lightBlue', 'pink', 'lightPink', 'purple', 'lightPurple'],
    'eyebrows': ['raised', 'leftLowered', 'serious', 'angry', 'concerned', 'none'],
    'eyes': ['normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'heart', 'crazy', 'cute', 'dollars', 'stars', 'cyborg', 'simplePatch', 'piratePatch'],
    'facialHair': ['none', 'stubble', 'mediumBeard', 'goatee'],
    'facialHairColor': ['white', 'silver', 'blonde', 'brown', 'black', 'red', 'lightRed', 'orange', 'lightOrange', 'green', 'lightGreen', 'turqoise', 'lightTurqoise', 'blue', 'lightBlue', 'pink', 'lightPink', 'purple', 'lightPurple'],
    'graphic': ['none', 'redwood', 'gatsby', 'vue', 'react', 'graphQL', 'donut', 'rainbow'],
    'hair': ['none', 'long', 'bun', 'short', 'pixie', 'balding', 'buzz', 'afro', 'bob', 'mohawk'],
    'hairColor': ['white', 'silver', 'blonde', 'brown', 'black', 'red', 'lightRed', 'orange', 'lightOrange', 'green', 'lightGreen', 'turqoise', 'lightTurqoise', 'blue', 'lightBlue', 'pink', 'lightPink', 'purple', 'lightPurple'],
    'hat': ['none', 'beanie', 'turban', 'party', 'hijab'],
    'hatColor': ['white', 'gray', 'black', 'red', 'lightRed', 'orange', 'lightOrange', 'yellow', 'lightYellow', 'green', 'lightGreen', 'turqoise', 'lightTurqoise', 'blue', 'lightBlue', 'pink', 'lightPink', 'purple', 'lightPurple'],
    'lashes': [true, false],
    'lipColor': ['red', 'lightRed', 'green', 'lightGreen', 'turqoise', 'lightTurqoise', 'blue','lightBlue', 'pink', 'lightPink', 'purple', 'lightPurple'],
    'mouth': ['grin', 'sad', 'openSmile', 'lips', 'open', 'serious', 'tongue', 'piercedTongue', 'vomitingRainbow'],
    'skinTone': ['light', 'yellow', 'brown', 'dark', 'red', 'black'],
    'faceMask': [true, false],
    'faceMaskColor': ['white', 'gray', 'black', 'red', 'lightRed', 'orange', 'lightOrange', 'yellow', 'lightYellow', 'green', 'lightGreen', 'turqoise', 'lightTurqoise', 'blue', 'lightBlue', 'pink', 'lightPink', 'purple', 'lightPurple']
}

export { options }