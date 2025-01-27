import { ExternalLink } from '@/app/component/externalLink'
import Person from '@/data/person'
import styled from '@emotion/styled'
import { BodyText, CaptionText, View } from '@wookiejin/react-component'
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
      <div>
        {link ? (
          <ExternalLink href={link}>
            <BodyText marginBottom={4}>{name}</BodyText>
          </ExternalLink>
        ) : (
          <BodyText marginBottom={4}>{name}</BodyText>
        )}
        <CaptionText>{institution}</CaptionText>
      </div>
    </Container>
  )
})

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8px;
  align-items: center;
`

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  width: 64px;
  height: 64px;
`
