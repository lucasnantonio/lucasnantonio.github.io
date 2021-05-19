import React from "react"
import { AnimateSharedLayout } from "framer-motion"
export const wrapPageElement = ({ element }) => (
  <AnimateSharedLayout type="crossfade">{element}</AnimateSharedLayout>
)
const transitionDelay = 10
