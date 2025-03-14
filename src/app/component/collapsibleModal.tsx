import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { View } from '@wookiejin/react-component'
import { useCallback, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode
}

export const CollabpsibleModal = View<Props>(({ children }) => {
  const [open, setOpen] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const onClick = useCallback(() => {
    if (open) {
      window.scrollTo({ top: (modalRef.current?.offsetTop ?? 0) - window.innerHeight / 2, behavior: 'instant' })
    }
    setOpen(o => !o)
  }, [open])

  return (
    <Modal ref={modalRef} open={open}>
      {children}
      {!open && <Shadow />}
      <ShowButton onClick={onClick}>Show {open ? 'Less' : 'More'}</ShowButton>
    </Modal>
  )
})

const Modal = styled.div<{ open: boolean }>`
  ${({ theme, open }) => css`
    ${theme.elevation.L1}
    overflow: hidden;
    max-height: ${open ? '2000px' : '60vh'};
    border-radius: 8px;
    margin: 0 auto;
    position: relative;
    padding: 16px;
    transition: all 0.3s;
    box-sizing: border-box;
    max-width: 680px;
  `}
`

const ShowButton = styled.button`
  ${({ theme }) => css`
    ${theme.border.Primary}
    ${theme.fill.Primary}
    border-radius: 48px;
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
    padding: 8px;
    cursor: pointer;
  `}
`

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 60%);
`
