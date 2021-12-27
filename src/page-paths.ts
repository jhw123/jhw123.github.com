export const PagePath = {
  root: {
    build: () => `/`,
    title: () => 'Who I am',
  },
  projects: {
    build: () => `/projects`,
    title: () => 'Projects',
  },
  articles: {
    build: () => '/articles',
    title: () => 'Dev.',
  },
  article: {
    build: (filePath: string) => `${filePath}`,
    title: (title: string) => title,
  },
  miscs: {
    build: () => '/miscs',
    title: () => 'Misc.',
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
