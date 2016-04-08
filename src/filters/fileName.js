export const titleFilter = (title) => title.replace(/\.md$/, '').replace(/^\d{4}-\d{1,2}-\d{1,2}-/, '')
export const dateFilter = (title) => /^\d{4}-\d{1,2}-\d{1,2}/.exec(title)
