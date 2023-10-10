'use client'
import { ResetStyle } from '@/design/foundation'
import { DEFAULT_THEME } from '@/design/theme'
import { Global, ThemeProvider, css } from '@emotion/react'
import styled from '@emotion/styled'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Global styles={ResetStyle} />

      <ThemeProvider theme={DEFAULT_THEME}>
        <Body className={inter.className}>{children}</Body>
      </ThemeProvider>
    </html>
  )
}

const Body = styled.body`
  ${({ theme }) => css`
    ${theme.fill.Sheet}
  `}
`
