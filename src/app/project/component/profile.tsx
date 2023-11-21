import { View } from '@/design/foundation'
import styled from '@emotion/styled'
import Image from 'next/image'

interface Props {
  name: string
  imagePath: string
}

export const Profile = View<Props>(({ name, imagePath }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={imagePath}
          fill
          style={{
            objectFit: 'cover',
          }}
          alt={'The profile image of ' + name}
        />
      </ImageContainer>
      <div>{name}</div>
    </Container>
  )
})

const Container = styled.div`
  text-align: center;
`

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-bottom: 8px;
`
