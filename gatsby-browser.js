import React from "react"
import { AnimateSharedLayout } from "framer-motion"
export const wrapPageElement = ({ element }) => (
  <AnimateSharedLayout type="crossfade">{element}</AnimateSharedLayout>
)
const transitionDelay = 10

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const savedPosition = getSavedScrollPosition(location, location.key)
  console.log(savedPosition)
  window.setTimeout(
    () => window.scrollTo(...(savedPosition || [0, 0])),
    transitionDelay
  )
  return false
}
