import styled from '@emotion/styled'
import { View } from '@wookiejin/react-component'

interface Props {
  src: string
}

export const Video = View<Props>(({ forwardedRef, src, ...props }) => {
  return (
    <Container {...props}>
      <iframe
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Container>
  )
})

const Container = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
