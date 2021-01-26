export const PagePath = {
  root: {
    build: () => `/`,
    title: () => '프로젝트',
  },
  projects: {
    build: () => `/`,
    title: () => '프로젝트',
  },
  articles: {
    build: () => '/articles',
    title: () => '개발',
  },
  article: {
    build: (filePath: string) => `${filePath}`,
    title: (title: string) => title,
  },
  miscs: {
    build: () => '/miscs',
    title: () => '잡다구리',
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
