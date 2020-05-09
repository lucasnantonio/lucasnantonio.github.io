export const minWidth = "940px"
export const topics = [
  "Product Design",
  "Research",
  "Design Ops",
  "Code",
  // "Favorites",
]
export const sizes = ["S", "M", "L"]
export const backgroundGray = "#f5f5f5"
export const initialFadeAnimation = {
  x: -25,
  opacity: 0,
}
export const fadeInAnimation = {
  x: 0,
  opacity: 1,
}
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const skillAnimations = {
  container: {
    hidden: { rotate: 10, y: 80, x: -170, opacity: 0, height: 500 },
    show: {
      opacity: 1,
      y: 30,
      x: -170,
      height: 530,
      rotate: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.02,
      },
    },
  },
  item: {
    // transition: { animation: "ease-in" },
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
  itemPath: {
    // transition: { animation: "ease-in" },
    hidden: { opacity: 0, pathLength: 0 },
    show: { opacity: 1, pathLength: 1 },
  },
}
