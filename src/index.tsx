import * as theme from './theme'

export { theme }
export * from './components/Avatar'
export { Avatar as BigHead } from './components/Avatar'

export { ThemeContext } from './themeContext'

export { Noop } from './utils/Noop'

const options = {
    'showBackground': [true, false],
    'backgroundColor': ['blue', 'green', 'red', 'none'],
    'backgroundShape': ['circle', 'square', 'squircle'],
    'accessory': ['none', 'roundGlasses', 'tinyGlasses', 'shades', 'hoopEarrings'],
    'body': ['chest', 'breasts'],
    'clothing': ['naked', 'shirt', 'dressShirt', 'vneck', 'tankTop', 'dress', 'denimJacket', 'hoodie', 'chequeredShirt', 'chequeredShirtDark'],
    'clothingColor': ['white', 'blue', 'black', 'green', 'red'],
    'eyebrows': ['raised', 'leftLowered', 'serious', 'angry', 'concerned', 'none'],
    'eyes': ['normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'heart', 'crazy', 'cute', 'dollars', 'stars', 'cyborg', 'simplePatch', 'piratePatch'],
    'facialHair': ['none', 'stubble', 'mediumBeard', 'goatee'],
    'graphic': ['none', 'redwood', 'gatsby', 'vue', 'react', 'graphQL', 'donut', 'rainbow'],
    'hair': ['none', 'long', 'bun', 'short', 'pixie', 'balding', 'buzz', 'afro', 'bob', 'mohawk'],
    'hairColor': ['blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink'],
    'hat': ['none', 'beanie', 'turban', 'party', 'hijab'],
    'hatColor': ['white', 'blue', 'black', 'green', 'red'],
    'lashes': [true, false],
    'lipColor': ['red', 'purple', 'pink', 'turqoise', 'green'],
    'mouth': ['grin', 'sad', 'openSmile', 'lips', 'open', 'serious', 'tongue', 'piercedTongue', 'vomitingRainbow'],
    'skinTone': ['light', 'yellow', 'brown', 'dark', 'red', 'black'],
    'faceMask': [true, false],
    'faceMaskColor': ['white', 'blue', 'black', 'green', 'red']
}

export { options }