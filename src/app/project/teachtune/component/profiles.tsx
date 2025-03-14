'use client'
import styled from '@emotion/styled'
import { OutlineButton, View } from '@wookiejin/react-component'
import { useState } from 'react'
import { STUDENT_1 } from '../data/student1'
import { STUDENT_2 } from '../data/student2'
import { STUDENT_3 } from '../data/student3'
import { STUDENT_4 } from '../data/student4'
import { STUDENT_5 } from '../data/student5'
import { STUDENT_6 } from '../data/student6'
import { STUDENT_7 } from '../data/student7'
import { CollabpsibleModal } from '../../../component/collapsibleModal'
import { StudentProfileBuilder } from './studentProfileBuilder'

interface Props {}

export const STUDENTS = [STUDENT_1, STUDENT_2, STUDENT_3, STUDENT_4, STUDENT_5, STUDENT_6, STUDENT_7]

export const Profiles = View<Props>(({ forwardedRef, ...props }) => {
  const [profile, setProfile] = useState(0)

  const onClickSample = (i: number) => () => {
    setProfile(i)
  }

  return (
    <div {...props}>
      {STUDENTS.map((s, i) => (
        <StackButton key={i} color={profile === i ? 'Focus' : 'Secondary'} onClick={onClickSample(i)}>
          {s.name}
        </StackButton>
      ))}

      <CollabpsibleModal marginTop={16}>
        <StudentProfileBuilder student={STUDENTS[profile]} />
      </CollabpsibleModal>
    </div>
  )
})

const StackButton = styled(OutlineButton)`
  display: inline-block;
  width: fit-content;
  margin-right: 8px;
  margin-bottom: 8px;
`
