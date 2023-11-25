import { ExternalLink } from '@/app/component/externalLink'
import Person from '@/data/person'
import { BodyText } from '@/design/component/text/body'
import { CaptionText } from '@/design/component/text/caption'
import { View } from '@/design/foundation'
import styled from '@emotion/styled'
import Image from 'next/image'

interface Props {
  person: Person
}

export const Profile = View<Props>(({ person: { profileImage, name, institution, link } }) => {
  return (
    <Container>
      <ImageContainer>
        <Image
          src={profileImage ?? ''}
          fill
          style={{
            objectFit: 'cover',
          }}
          alt={'The profile image of ' + name}
        />
      </ImageContainer>
      {link ? (
        <ExternalLink href={link}>
          <BodyText align="center" marginBottom={4}>
            {name}
          </BodyText>
        </ExternalLink>
      ) : (
        <BodyText align="center" marginBottom={4}>
          {name}
        </BodyText>
      )}
      <CaptionText align="center">{institution}</CaptionText>
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
