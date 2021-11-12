export const sortByDate = (a, b) => {
  return new Date(b.frontmatter.createdAt) - new Date(a.frontmatter.createdAt)
}
