import { IconSvgs } from '@/constant/iconSvg'

interface Props {
  type: keyof typeof IconSvgs
  link: string
  value?: string
}

interface Contact extends Props {}
class Contact {
  constructor(props: Props) {
    Object.assign(this, props)
  }
}

export const CONTACT = {
  email: new Contact({
    type: 'EMAIL',
    link: 'mailto:jinhw@kaist.ac.kr',
    value: 'jinhw@kaist.ac.kr',
  }),
  googleScholar: new Contact({
    type: 'GOOGLE_SCHOLAR',
    link: 'https://scholar.google.com/citations?user=vJK5xk4AAAAJ',
  }),
  twitter: new Contact({
    type: 'TWITTER',
    link: 'https://x.com/HyoungWookJin',
  }),
  github: new Contact({
    type: 'GITHUB',
    link: 'https://github.com/jhw123',
  }),
  linkedin: new Contact({
    type: 'LINKEDIN',
    link: 'https://www.linkedin.com/in/hyoungwook-jin-619b5b10a',
  }),
  leetcode: new Contact({
    type: 'LEETCODE',
    link: 'https://leetcode.com/jhw123/',
  }),
  cv: new Contact({
    type: 'CV',
    link: 'https://docs.google.com/document/d/1TlDHuNITMMyG6UUo8lIUKLr2hgiTBXhEZg1uP4EVGnY/edit?usp=sharing',
  }),
} as const
export const CONTACTS = Object.values(CONTACT)
