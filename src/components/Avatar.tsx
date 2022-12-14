import React from 'react'

import { colors } from '../theme'
import { ThemeContext } from '../themeContext'
import { Noop } from '../utils/Noop'

import { Base } from '../components/Base'

import { NormalEyebrows } from '../components/eyebrows/Normal'
import { LeftLoweredEyebrows } from '../components/eyebrows/LeftLoweredEyebrows'

import { Grin } from '../components/mouths/Grin'
import { SadMouth } from '../components/mouths/Sad'
import { Lips } from './mouths/Lips'
import { SmileOpen } from './mouths/SmileOpen'

import * as LongHair from '../components/hair/LongHair'
import * as BunHair from '../components/hair/BunHair'
import * as ShortHair from '../components/hair/ShortHair'
import * as PixieCut from '../components/hair/PixieCut'
import * as BaldingHair from '../components/hair/BaldingHair'
import * as BuzzCut from '../components/hair/BuzzCut'
import * as Afro from '../components/hair/Afro'
import * as BobCut from '../components/hair/BobCut'

import * as Beanie from '../components/hats/Beanie'
import * as Turban from '../components/hats/Turban'

import * as Chest from '../components/bodies/Chest'
import * as Breasts from '../components/bodies/Breasts'

import { MediumBeard } from './facialHair/MediumBeard'

import { HappyEyes } from './eyes/HappyEyes'
import { NormalEyes } from '../components/eyes/NormalEyes'
import { LeftTwitchEyes } from '../components/eyes/LeftTwitchEyes'

import { Shirt } from './clothing/Shirt'
import { ContentEyes } from './eyes/ContentEyes'
import { SeriousEyebrows } from './eyebrows/SeriousEyebrows'
import { RoundGlasses } from './accessories/RoundGlasses'
import { AngryEyebrows } from './eyebrows/AngryEyebrows'
import { StubbleBeard } from './facialHair/Stubble'
import { RedwoodGraphic } from './clothingGraphic/Redwood'
import { GatsbyGraphic } from './clothingGraphic/Gatsby'
import * as Dress from './clothing/Dress'

import { SquintEyes } from './eyes/SquintEyes'
import { ConcernedEyebrows } from './eyebrows/ConcernedEyebrows'
import { Shades } from './accessories/Shades'
import { TankTop } from './clothing/TankTop'
import { SimpleEyes } from './eyes/SimpleEyes'
import { Vue as VueGraphics } from './clothingGraphic/Vue'
import { DizzyEyes } from './eyes/DizzyEyes'
import { WinkEyes } from './eyes/Wink'
import { HeartEyes } from './eyes/HeartEyes'
import { OpenMouth } from './mouths/OpenMouth'
import { SeriousMouth } from './mouths/SeriousMouth'
import { ReactGraphic } from './clothingGraphic/React'
import { TinyGlasses } from './accessories/TinyGlasses'
import { VNeck } from './clothing/VNeck'
import { GraphQLGraphic } from './clothingGraphic/GraphQL'
import { Tongue } from './mouths/Tongue'
import { DressShirt } from './clothing/DressShirt'

import { HoopEarrings } from './accessories/HoopEarrings'
import { DenimJacket } from './clothing/DenimJacket'
import { Hoodie } from './clothing/Hoodie'
import * as ChequeredShirt from './clothing/ChequeredShirt'
import * as ChequeredShirtDark from './clothing/ChequeredShirtDark'
import { Donut } from './clothingGraphic/Donut'
import { Rainbow } from './clothingGraphic/Rainbow'
import { Crazy } from './eyes/Crazy'
import { Cute } from './eyes/Cute'
import { Cyborg } from './eyes/Cyborg'
import { Dollars } from './eyes/Dollars'
import { PiratePatch } from './eyes/PiratePatch'
import { SimplePatch } from './eyes/SimplePatch'
import { Stars } from './eyes/Stars'
import { Goatee } from './facialHair/Goatee'
import * as Mohawk from './hair/Mohawk'
import * as Party from './hats/Party'
import * as Hijab from './hats/Hijab'
import { PiercedTongue } from './mouths/PiercedTongue'
import { VomitingRainbow } from './mouths/VomitingRainbow'

import { BgCircle } from './backgrounds/BgCircle'
import { BgSquare } from './backgrounds/BgSquare'
import { BgSquircle } from './backgrounds/BgSquircle'
import { BgCircleMask } from './backgrounds/BgCircleMask'
import { BgSquareMask } from './backgrounds/BgSquareMask'
import { BgSquircleMask } from './backgrounds/BgSquircleMask'

export const bgShapeMap = {
  circle: { Shape: BgCircle, Mask: BgCircleMask },
  square: { Shape: BgSquare, Mask: BgSquareMask },
  squircle: { Shape: BgSquircle, Mask: BgSquircleMask },
}

export const eyesMap = {
  normal: NormalEyes,
  leftTwitch: LeftTwitchEyes,
  happy: HappyEyes,
  content: ContentEyes,
  squint: SquintEyes,
  simple: SimpleEyes,
  dizzy: DizzyEyes,
  wink: WinkEyes,
  heart: HeartEyes,
  crazy: Crazy,
  cute: Cute,
  cyborg: Cyborg,
  dollars: Dollars,
  piratePatch: PiratePatch,
  simplePatch: SimplePatch,
  stars: Stars
}

export const eyebrowsMap = {
  raised: NormalEyebrows,
  leftLowered: LeftLoweredEyebrows,
  serious: SeriousEyebrows,
  angry: AngryEyebrows,
  concerned: ConcernedEyebrows,
}

export const mouthsMap = {
  grin: Grin,
  sad: SadMouth,
  openSmile: SmileOpen,
  lips: Lips,
  open: OpenMouth,
  serious: SeriousMouth,
  tongue: Tongue,
  piercedTongue: PiercedTongue,
  vomitingRainbow: VomitingRainbow
}

export const hairMap = {
  none: { Front: Noop, Back: Noop },
  long: LongHair,
  bun: BunHair,
  short: ShortHair,
  pixie: PixieCut,
  balding: BaldingHair,
  buzz: BuzzCut,
  afro: Afro,
  bob: BobCut,
  mohawk: Mohawk,
}

export const facialHairMap = {
  none: Noop,
  none2: Noop,
  none3: Noop,
  stubble: StubbleBeard,
  mediumBeard: MediumBeard,
  goatee: Goatee
}

export const clothingMap = {
  naked: { Back: Noop, Front: Noop },
  shirt: { Back: Shirt, Front: Noop },
  dressShirt: { Back: DressShirt, Front: Noop },
  vneck: { Back: VNeck, Front: Noop },
  tankTop: { Back: TankTop, Front: Noop },
  dress: Dress,
  denimJacket: { Back: DenimJacket, Front: Noop },
  hoodie: { Back: Hoodie, Front: Noop },
  chequeredShirt: ChequeredShirt,
  chequeredShirtDark: ChequeredShirtDark,
}

export const accessoryMap = {
  none: Noop,
  roundGlasses: RoundGlasses,
  tinyGlasses: TinyGlasses,
  shades: Shades,
  hoopEarrings: HoopEarrings
}

export const graphicsMap = {
  none: Noop,
  redwood: RedwoodGraphic,
  gatsby: GatsbyGraphic,
  vue: VueGraphics,
  react: ReactGraphic,
  graphQL: GraphQLGraphic,
  donut: Donut,
  rainbow: Rainbow
}

export const hatMap = {
  none: { Front: Noop, Back: Noop },
  none2: { Front: Noop, Back: Noop },
  none3: { Front: Noop, Back: Noop },
  none4: { Front: Noop, Back: Noop },
  none5: { Front: Noop, Back: Noop },
  beanie: Beanie,
  turban: Turban,
  party: Party,
  hijab: Hijab,
}

export const bodyMap = {
  chest: Chest,
  breasts: Breasts,
}

function selectRandomKey<T extends {}>(object: T) {
  return (Object.keys(object) as Array<keyof typeof object>)[
    Math.floor(Math.random() * Object.keys(object).length)
  ]
}

export interface AvatarProps {
  skinTone?: keyof typeof colors.skin
  eyes?: keyof typeof eyesMap
  eyebrows?: keyof typeof eyebrowsMap
  mouth?: keyof typeof mouthsMap
  hair?: keyof typeof hairMap
  facialHair?: keyof typeof facialHairMap
  clothing?: keyof typeof clothingMap
  accessory?: keyof typeof accessoryMap
  graphic?: keyof typeof graphicsMap
  hat?: keyof typeof hatMap
  body?: keyof typeof bodyMap

  hairColor?: keyof typeof colors.hair
  clothingColor?: keyof typeof colors.clothing
  bgColor?: keyof typeof colors.bgColors
  bgShape?: keyof typeof bgShapeMap
  lipColor?: keyof typeof colors.lipColors
  hatColor?: keyof typeof colors.clothing
  faceMaskColor?: keyof typeof colors.clothing

  showBackground?: boolean
  faceMask?: boolean
  lashes?: boolean
}

export const Avatar = React.forwardRef<SVGSVGElement, AvatarProps>(
  (
    {
      skinTone = selectRandomKey(colors.skin),
      eyes = selectRandomKey(eyesMap),
      eyebrows = selectRandomKey(eyebrowsMap),
      mouth = selectRandomKey(mouthsMap),
      hair = selectRandomKey(hairMap),
      facialHair = selectRandomKey(facialHairMap),
      clothing = selectRandomKey(clothingMap),
      accessory = selectRandomKey(accessoryMap),
      graphic = selectRandomKey(graphicsMap),
      hat = selectRandomKey(hatMap),
      body = selectRandomKey(bodyMap),

      hairColor = selectRandomKey(colors.hair),
      clothingColor = selectRandomKey(colors.clothing),
      bgColor = selectRandomKey(colors.bgColors),
      bgShape = selectRandomKey(bgShapeMap),
      lipColor = selectRandomKey(colors.lipColors),
      hatColor = selectRandomKey(colors.clothing),
      faceMaskColor = selectRandomKey(colors.clothing),

      showBackground = true,
      faceMask = false,
      lashes = Math.random() > 0.5,

      ...rest
    },
    ref,
  ) => {
    const skin = colors.skin[skinTone]

    const Eyes = eyesMap[eyes]
    const Eyebrows = eyebrowsMap[eyebrows]
    const Mouth = mouthsMap[mouth]
    const Hair = hairMap[hair]
    const FacialHair = facialHairMap[facialHair]
    const Clothing = clothingMap[clothing]
    const Accessory = accessoryMap[accessory]
    const Graphic = graphicsMap[graphic]
    const Hat = hatMap[hat]
    const Body = bodyMap[body]
    const BgShape = bgShapeMap[bgShape]

    return (
      <ThemeContext.Provider value={{ colors, skin }}>
        <Base
          ref={ref}
          eyes={Eyes}
          eyebrows={Eyebrows}
          mouth={Mouth}
          hair={Hair}
          facialHair={FacialHair}
          clothing={Clothing}
          accessory={Accessory}
          graphic={Graphic}
          hat={Hat}
          body={Body}
          hatColor={hatColor}
          hairColor={hairColor}
          clothingColor={clothingColor}
          bgShape={BgShape}
          bgColor={bgColor}
          lipColor={lipColor}
          showBackground={showBackground}
          faceMask={faceMask}
          faceMaskColor={faceMaskColor}
          lashes={lashes}
          {...rest}
        />
      </ThemeContext.Provider>
    )
  },
)
