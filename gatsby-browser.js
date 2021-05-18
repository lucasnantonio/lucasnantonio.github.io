import React from "react"
import { AnimateSharedLayout } from "framer-motion"
export const wrapPageElement = ({ element }) => (
  <AnimateSharedLayout>{element}</AnimateSharedLayout>
)
