import { IconSvgs } from '@/constant/iconSvg'

interface Props {
  type: keyof typeof IconSvgs
  link: string
}

class Contact {
  type: keyof typeof IconSvgs
  link: string

  constructor({ type, link }: Props) {
    this.type = type
    this.link = link
  }
}

export const CONTACT = {
  email: new Contact({
    type: 'EMAIL',
    link: 'mailto:jinhw@kaist.ac.kr',
  }),
  facebook: new Contact({
    type: 'FACEBOOK',
    link: 'https://www.facebook.com/jin.hyoungwook',
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
