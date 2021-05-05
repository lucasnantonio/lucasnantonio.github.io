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
