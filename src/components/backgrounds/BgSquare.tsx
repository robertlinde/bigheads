import React from 'react'
import { useTheme } from '../../themeContext'
import { BgShapeProps } from './types'

export const BgSquare = ({ bgColor }: BgShapeProps) => {
  const { colors } = useTheme()

  const color = colors.bgColors[bgColor]

  return <path d="M832.442 297.718H167.558V962.602H832.442V297.718Z" fill={color} />
}
