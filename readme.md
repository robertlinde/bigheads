<p align="center" >
  <img alt="Big Heads Demo" src="demo.gif" />
</p>

### Try it

### Getting Started

1. Clone the repo
2. npm install
3. tsdx build
4. copy dist folder in project

then, in your app:

```jsx
import { BigHeads } from 'dist/index'

const Example = () => (
  <BigHead
    accessory="shades"
    body="chest"
    circleColor="blue"
    clothing="tankTop"
    clothingColor="black"
    eyebrows="angry"
    eyes="wink"
    facialHair="mediumBeard"
    graphic="vue"
    hair="short"
    hairColor="black"
    hat="none"
    hatColor="green"
    lashes="false"
    lipColor="purple"
    mask="true"
    faceMask="true"
    mouth="open"
    skinTone="brown"
  />
)
```

**IMPORTANT: FOR FULL PROPS CHECK README OF BIGHEADS AND README OF REACT NATIVE BIGHEADS**

### Props

- [`accessory`](#accessory)
- [`body`](#body)
- [`circleColor`](#circlecolor)
- [`clothing`](#clothing)
- [`clothingColor`](#clothingcolor)
- [`eyebrows`](#eyebrows)
- [`eyes`](#eyes)
- [`facialHair`](#facialhair)
- [`graphic`](#graphic)
- [`hair`](#hair)
- [`hairColor`](#haircolor)
- [`hat`](#hat)
- [`hatColor`](#hatcolor)
- [`lashes`](#lashes)
- [`lipColor`](#lipcolor)
- [`mask`](#mask)
- [`faceMask`](#faceMask)
- [`mouth`](#mouth)
- [`skinTone`](#skinTone)

# Reference

## Props

### `accessory`

Type of accessory

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('none', 'roundGlasses', 'tinyGlasses', 'shades', 'faceMask', 'hoopEarrings') | No       | Random |

---

### `bgColor`

The color of the background

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('blue', 'green', 'red', 'orange', 'yellow', 'turqoise', 'pink', 'purple') | No       | Random |

---

### `bgShape`

The shape of the background

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('circle', 'square', 'squircle') | No       | Random |

---

### `body`

Type of body

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('chest', 'breasts') | No | Random |

---

### `clothing`

Type of cloth

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('naked', 'shirt', 'dressShirt', 'vneck', 'tankTop', 'dress', 'denimJacket', 'hoodie', 'chequeredShirt', 'chequeredShirtDark') | No       | Random |

---

### `clothingColor`

The color of the clothes

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('white', 'blue', 'black', 'green', 'red') | No       | Random |

---

### `containerProps`

Props to be passed to the container element ([View](https://reactnative.dev/docs/view))

| Type     | Required |
| -------- | -------- |
| [View.props](https://reactnative.dev/docs/view#props) | No       |

---

### `containerStyles`

Styles to be applied to the container element ([View](https://reactnative.dev/docs/view))

| Type     | Required |
| -------- | -------- |
| [Style](https://reactnative.dev/docs/style) | No       |

---

### `eyebrows`

Type of eyebrows

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('raised', 'leftLowered', 'serious', 'angry', 'concerned') | No       | Random |

---

### `eyes`

Type of eyes

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'hearts', 'crazy', 'cute', 'dollars', 'stars', 'cyborg', 'simplePatch', 'piratePatch') | No       | Random |

---

### `facialHair`

Type of facial hair

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('none', 'stubble', 'mediumBeard', 'goatee') | No       | Random |

---

### `graphic`

Type of graphic over the t-shirts

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('none', 'redwood', 'gatsby', 'vue', 'react', 'graphQL', 'donut', 'rainbow') | No       | Random |

---

### `hair`

Type of hair

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('none', 'long', 'bun', 'short', 'pixie', 'balding', 'buzz', 'afro', 'bob', 'mohawk') | No       | Random |

---

### `hairColor`

The color of the hair

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink') | No       | Random |

----

### `hat`

Type of hat

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('none', 'beanie', 'turban', 'party', 'hijab') | No       | Random |

---

### `hatColor`

The color of the hat

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('white', 'blue', 'black', 'green', 'red') | No       | Random |

---

### `lashes`

Show lashes

| Type     | Required | Default |
| -------- | -------- | ------- |
| boolean  | No       | Random  |

---

### `lipColor`

The color of the lips

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('red', 'purple', 'pink', 'turqoise', 'green') | No       | Random |

---

### `mouth`

Type of mouth

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('grin', 'sad', 'openSmile', 'lips', 'open', 'serious', 'tongue', 'piercedTongue', 'vomitingRainbow') | No       | Random |

---

### `showBackground`

Whether or not to display the background color

When `true` it cuts off everything below the avatar otherwise it won't clip off any of the avatar

| Type     | Required | Default |
| -------- | -------- | ------- |
| boolean  | No       | true    |

---

### `size`

Size of the avatar

| Type     | Required | Default |
| -------- | -------- | ------- |
| number   | No       | 100     |

---

### `skinTone`

The color of the skin

| Type     | Required | Default |
| -------- | -------- | ------- |
| enum('light', 'yellow', 'brown', 'dark', 'red', 'black') | No       | Random |

---

# Authors
- Some portions of this code belong to the [Big Heads authors](https://github.com/RobertBroersma/bigheads) which are distributed under the [MIT License](https://github.com/RobertBroersma/bigheads/blob/main/LICENSE)
- Some portions of this code belong to the [react-native-bigheads authors] which are distributed under the [MIT License](https://github.com/felipecespedes/react-native-bigheads/blob/master/LICENSE)
- Robert Linde

# License
This project is licensed under the MIT License
