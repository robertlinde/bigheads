import React from 'react'
import { useTheme } from '../../themeContext'
import { BackgroundShapeProps } from './types'

export const BgSquircle = ({ backgroundColor }: BackgroundShapeProps) => {
  const { colors } = useTheme()

  const color = colors.backgroundColors[backgroundColor]

  return (
    <path
      d="M167.56 630.16C167.56 337.613 207.453 297.72 500 297.72C792.547 297.72 832.44 337.613 832.44 630.16C832.44 922.707 792.547 962.6 500 962.6C207.453 962.6 167.56 922.707 167.56 630.16Z"
      fill={color}
    />
  )
}
