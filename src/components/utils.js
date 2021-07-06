export const minWidth = "1280px"
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

export function getUniqueTags(notes) {
  return notes.reduce((acc, note) => {
    note.node.frontmatter.tags.forEach(tag => {
      if (acc.indexOf(tag) === -1) {
        acc.push(tag)
      }
      // order tags by the amount of objects in the notes array that contain them in the node.frontmatter.tags array
      acc.sort()
    })
    return acc
  }, [])
}
