export const PagePath = {
  root: {
    build: () => `/`,
    title: () => 'Who am I',
  },
  projects: {
    build: () => `/projects`,
    title: () => 'Projects',
  },
  articles: {
    build: () => '/articles',
    title: () => 'Dev articles',
  },
  article: {
    build: (filePath: string) => `${filePath}`,
    title: (title: string) => title,
  },
  miscs: {
    build: () => '/miscs',
    title: () => 'Miscellaneous articles',
  },
  misc: {
    build: (filePath: string) => `${filePath}`,
    title: (title: string) => title,
  },
  tils: {
    build: () => '/tils',
    title: () => 'Today I Learned',
  },
  til: {
    build: (filePath: string) => `${filePath}`,
    title: (title: string) => title,
  },
}
