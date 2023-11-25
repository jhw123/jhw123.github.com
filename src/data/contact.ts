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

export const CONTACTS: Contact[] = [
  new Contact({
    type: 'EMAIL',
    link: 'mailto:jinhw@kaist.ac.kr',
  }),
  new Contact({
    type: 'FACEBOOK',
    link: 'https://www.facebook.com/jin.hyoungwook',
  }),
  new Contact({
    type: 'GITHUB',
    link: 'https://github.com/jhw123',
  }),
  new Contact({
    type: 'LINKEDIN',
    link: 'https://www.linkedin.com/in/hyoungwook-jin-619b5b10a',
  }),
  new Contact({
    type: 'LEETCODE',
    link: 'https://leetcode.com/jhw123/',
  }),
]
