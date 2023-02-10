<p align="center" >
  <img alt="Big Heads Demo" src="demo.gif" />
</p>

## Try it

### Getting Started

1. Clone the repo
2. npm install
3. tsdx build
4. copy dist folder in project

then, in your app:

```jsx
import { BigHead } from 'dist/index'

const Example = () => (
  <BigHead
    showBackground={true}
    backgroundColor="blue"
    backgroundShape='square'
    accessory="shades"
    body="chest"
    clothing="tankTop"
    clothingColor='red'
    eyebrows="angry"
    eyes="wink"
    facialHair="mediumBeard"
    facialHairColor="blonde"
    graphic="vue"
    hair="short"
    hairColor="black"
    hat="none"
    hatColor="green"
    lashes={false}
    lipColor="purple"
    mouth="open"
    skinTone="brown"
    faceMask={true}
    faceMaskColor='blue'
  />
)
```

To retrieve a object with all options possible, use

```jsx
import { options } from 'dist/index'
```

### Props

Leaving a prop empty will result in a random value being chosen.
| Property           | Possible values            |
| ------------------ | -------------------------- |
| showBackground     | `true` , `false` |
| backgroundColor    | `'red'` , `'orange'` , `'yellow'` , `'green'` , `'turqoise'` , `'blue'` , `'pink'` , `'purple'` |
| backgroundShape    | `'none'` , `'circle'` , `'square'` , `'squircle'` |
| accessory          | `'none'` , `'faceMask'` , `'hoopEarrings'` , `'roundGlasses'` , `'shades'` , `'tinyGlasses'` |
| body               | `'chest'` , `'breasts'` |
| clothing           | `'naked'` , `'chequeredShirt'` , `'chequeredShirtDark'` , `'shirt'` , `'denimJacket'` , `'dressShirt'` , `'hoodie'` , `'vneck'` , `'tankTop'` , `'dress'` |
| clothingColor      | `'white'` , `'gray'` , `'black'` , `'red'` , `'lightRed'` , `'orange'` , `'lightOrange'` , `'yellow'` , `'lightYellow'` , `'green'` , `'lightGreen'` , `'turqoise'` , `'lightTurqoise'` , `'blue'` , `'lightBlue'` , `'pink'` , `'lightPink'` , `'purple'` , `'lighPurple'` |
| eyebrows           | `'none'` , `'angry'` , `'concerned'` , `'leftLowered'` , `'raised'` , `'serious'` |
| eyes               | `'normal'` , `'content'` , `'crazy'` , `'cute'` , `'cyborg'` , `'dizzy'` , `'dollars'` , `'eyePatch'` , `'eyePatch2'` , `'happy'` , `'hearts'` , `'leftTwitch'` , `'squint'` , `'simple'` , `'stars'` , `'wink'` |
| facialHair         | `'none'` , `'goatee'` , `'mediumBeard'` , `'stubble'` |
| facialHairColor    | `'white'` , `'silver'` , `'blonde'` , `'brown'` , `'black'` , `'red'` , `'lightRed'` , `'orange'` , `'lightOrange'` , `'green'` , `'lightGreen'` , `'turqoise'` , `'lightTurqoise'` , `'blue'` , `'lightBlue'` , `'pink'` , `'lightPink'` , `'purple'` , `'lighPurple'` |
| graphic            | `'none'` , `'donut'` , `'gatsby'` , `'graphQL'` , `'rainbow'` , `'react'` , `'redwood'` , `'vue'` |
| hair               | `'none'` , `'afro'` , `'balding'` , `'bob'` , `'bun'` , `'buzz'` , `'long'` , `'mohawk'` , `'pixie'` , `'short'` |
| hairColor          | `'white'` , `'silver'` , `'blonde'` , `'brown'` , `'black'` , `'red'` , `'lightRed'` , `'orange'` , `'lightOrange'` , `'green'` , `'lightGreen'` , `'turqoise'` , `'lightTurqoise'` , `'blue'` , `'lightBlue'` , `'pink'` , `'lightPink'` , `'purple'` , `'lighPurple'` |
| hat                | `'none` ', `'beanie'` , `'hijab'` , `'partyHat'` , `'turban'` |
| hatColor           | `'white'` , `'gray'` , `'black'` , `'red'` , `'lightRed'` , `'orange'` , `'lightOrange'` , `'yellow'` , `'lightYellow'` , `'green'` , `'lightGreen'` , `'turqoise'` , `'lightTurqoise'` , `'blue'` , `'lightBlue'` , `'pink'` , `'lightPink'` , `'purple'` , `'lighPurple'` |
| lashes             | `true` , `false` |
| lipColor           | `'red'` , `'lightRed'` , `'green'` , `'lightGreen'` , `'turqoise'` , `'lightTurqoise'` , `'blue'` , `'lightBlue'` , `'pink'` , `'lightPink'` , `'purple'` , `'lightPurple'` |
| mouth              | `'grin'` , `'lips'` , `'open'` , `'openSmile'` , `'piercedTongue'` , `'sad'` , `'serious'` , `'tongue'` , `'vomitingRainbow'` |
| skinTone           | `'light'` , `'yellow'` , `'brown'` , `'dark'` , `'red'` , `'black'` |
| faceMask           | `true` , `false` |
| faceMaskColor      | `'white'` , `'gray'` , `'black'` , `'red'` , `'lightRed'` , `'orange'` , `'lightOrange'` , `'yellow'` , `'lightYellow'` , `'green'` , `'lightGreen'` , `'turqoise'` , `'lightTurqoise'` , `'blue'` , `'lightBlue'` , `'pink'` , `'lightPink'` , `'purple'` , `'lighPurple'` |

---

# Authors
* Some portions of this code belong to the [Big Heads authors](https://github.com/RobertBroersma/bigheads) which are distributed under the [MIT License](https://github.com/RobertBroersma/bigheads/blob/main/LICENSE)
* Some portions of this code belong to the [react-native-bigheads authors](https://github.com/felipecespedes/react-native-bigheads) which are distributed under the [MIT License](https://github.com/felipecespedes/react-native-bigheads/blob/master/LICENSE)
* Some portions of this code belong to the [vue-bigheads](https://github.com/DerpyScripts/vue-bigheads) which are distributed under the [MIT License](https://github.com/DerpyScripts/vue-bigheads/blob/main/LICENSE)
* [Robert Linde](https://github.com/robertlinde)
# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/robertlinde/bigheads/blob/main/LICENSE) file for details
