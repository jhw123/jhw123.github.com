import { Link, PageProps } from 'gatsby'
import * as React from 'react'
import styled from '@emotion/styled'
import Layout from '../design/layout/layout'
import SEO from '../seo'
import { PagePath } from '../page-paths'
import { useTILMarkdownData } from '../hooks/useTILMarkdownData'
import { Typeface, Typefaces } from '../design/foundation/typefaces'
import { BorderColor, BorderColors, FillColor, FillColors } from '../design/foundation/semantic-colors'
import { LARGE_WINDOW_WIDTH, MEDIUM_WINDOW_WIDTH, SMALL_WINDOW_WIDTH } from '../constants/constants'

const MonthCard = styled.section`
  margin-top: 1rem;
  margin-bottom: 1rem;
`

const Month = styled.h2`
  ${Typefaces[Typeface.Bold16]};
  margin: 0 0 0.5rem;
`

const TILCard = styled(Link)`
  ${Typefaces[Typeface.Regular10]};
  ${BorderColors[BorderColor.Basic]};
  text-decoration: none;
  width: calc((100% - 20px) / 2);
  display: inline-block;
  vertical-align: top;
  padding: 10px;
  margin: 5px;

  @media screen and (min-width: ${SMALL_WINDOW_WIDTH}px) {
    width: calc((100% - 30px) / 3);
  }

  @media screen and (min-width: ${MEDIUM_WINDOW_WIDTH}px) {
    width: calc((100% - 40px) / 4);
  }

  @media screen and (min-width: ${LARGE_WINDOW_WIDTH}px) {
    width: calc((100% - 60px) / 6);
  }

  &:hover {
    ${FillColors[FillColor.Elevated]};
  }
`

const Date = styled.h3`
  ${Typefaces[Typeface.Regular14]};
  margin-bottom: 5px;
`

const TilsPage = (props: PageProps) => {
  const tils = useTILMarkdownData()

  const tilsByMonth =
    tils?.reduce((tilsByMonth: { year: number; month: number; tils: typeof tils }[], til) => {
      const tilsInMonth = tilsByMonth.find(
        tilByMonth => tilByMonth.year === til.fields.year && tilByMonth.month === til.fields.month
      )
      if (tilsInMonth) {
        tilsInMonth.tils.unshift(til)
      } else {
        tilsByMonth.push({
          year: til.fields.year,
          month: til.fields.month,
          tils: [til],
        })
      }
      return tilsByMonth
    }, []) ?? []

  return (
    <Layout>
      <SEO title={PagePath.tils.title()} />
      {tilsByMonth.map(tilsInMonth => (
        <MonthCard key={tilsInMonth.month}>
          <Month>{`${tilsInMonth.year}년 ${tilsInMonth.month}월`}</Month>
          {tilsInMonth.tils.map(til => (
            <TILCard key={til.fields.date} to={til.fields.filePath}>
              <Date>{til.fields.date}일</Date>
              {til.excerpt}
            </TILCard>
          ))}
        </MonthCard>
      ))}
    </Layout>
  )
}

export default TilsPage
