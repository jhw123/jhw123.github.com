import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { BodyText, CaptionText, LinearLayout } from '@wookiejin/react-component'

interface Props {
  onClick: (i: number) => void
}

export const ReliancePatterns = ({ onClick }: Props) => {
  return (
    <div>
      <Patterns>
        <Grid>
          <Level2 onClick={() => onClick(0)}>3.3%</Level2>
          <Level1 onClick={() => onClick(1)}>1.5%</Level1>
          <Level1 onClick={() => onClick(2)}>1.8%</Level1>
          <Level4 onClick={() => onClick(3)}>10%</Level4>
          <Level3 onClick={() => onClick(4)}>7.7%</Level3>
          <Level2 onClick={() => onClick(5)}>3.3%</Level2>
          <Level6 onClick={() => onClick(6)}>44%</Level6>
          <Level5 onClick={() => onClick(7)}>18%</Level5>
          <Level3 onClick={() => onClick(8)}>9.8%</Level3>
        </Grid>
        <EngagementLabels>
          <CaptionText align="center">Passive</CaptionText>
          <CaptionText align="center">Active</CaptionText>
          <CaptionText align="center">Constructive</CaptionText>
        </EngagementLabels>
        <BodyText color="Brand" align="center">
          Response-Use
        </BodyText>
        <VerticalEngagementLabels>
          <CaptionText align="center">Passive</CaptionText>
          <CaptionText align="center">Active</CaptionText>
          <CaptionText align="center">Constructive</CaptionText>
        </VerticalEngagementLabels>
        <VerticalActionLabel>
          <BodyText color="Brand" align="center">
            Help-Seeking
          </BodyText>
        </VerticalActionLabel>
      </Patterns>
    </div>
  )
}

const SQUARE_SIZE = 264
const GRID_GAP = 8

const Patterns = styled.div`
  width: ${SQUARE_SIZE}px;
  position: relative;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${GRID_GAP}px;
`

const EngagementLabels = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${GRID_GAP}px;
  margin-top: 4px;
`

const VerticalEngagementLabels = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${GRID_GAP}px;
  position: absolute;
  width: ${SQUARE_SIZE}px;
  top: 0;
  left: -100%;
  transform: rotate(-90deg) translate(0, -20px);
  transform-origin: top right;
`

const VerticalActionLabel = styled.div`
  position: absolute;
  width: ${SQUARE_SIZE}px;
  top: 0;
  left: -100%;
  transform: rotate(-90deg) translate(0, -44px);
  transform-origin: top right;
`

const Square = styled.button`
  ${({ theme }) => css`
    ${theme.font.SubTitle}
    background-color: #f0f0f0;
    aspect-ratio: 1 / 1;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.2s ease-in-out;

    :hover {
      scale: 1.05;
    }
  `}
`

const Level1 = styled(Square)`
  background-color: #d9ead3ff;
`

const Level2 = styled(Square)`
  background-color: #b6d7a8ff;
`

const Level3 = styled(Square)`
  background-color: #93c47dff;
`

const Level4 = styled(Square)`
  background-color: #6aa84fff;
  color: white;
`

const Level5 = styled(Square)`
  background-color: #38761dff;
  color: white;
`

const Level6 = styled(Square)`
  background-color: #274e13ff;
  color: white;
`
