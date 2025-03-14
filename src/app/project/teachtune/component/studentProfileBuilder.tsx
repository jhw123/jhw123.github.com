import { BodyText, CaptionText, CheckInput, SliderInput, SubSubHeaderText } from '@wookiejin/react-component'
import { useEffect, useState } from 'react'
import { useInventory } from '../hook/useInventory'
import { Student } from '../type/student'

interface Props {
  student: Student
}

export const StudentProfileBuilder = ({ student }: Props) => {
  const [studentId, setStudentId] = useState(student.id)
  const [knowledgeState, setKnowledgeState] = useState(student.knowledgeState)

  const [goalCommitment, setGoalCommitment] = useInventory(student.goalCommitment)
  const [motivation, setMotivation] = useInventory(student.motivation)
  const [selfEfficacy, setSelfEfficacy] = useInventory(student.selfEfficacy)
  const [stress, setStress] = useInventory(student.stress)

  useEffect(() => {
    if (student.id !== studentId) {
      setKnowledgeState(student.knowledgeState)
      student.goalCommitment.forEach(({ rating }, i) => setGoalCommitment(i)(rating))
      student.motivation.forEach(({ rating }, i) => setMotivation(i)(rating))
      student.stress.forEach(({ rating }, i) => setStress(i)(rating))
      student.selfEfficacy.forEach(({ rating }, i) => setSelfEfficacy(i)(rating))
      setStudentId(student.id)
    }
  }, [setGoalCommitment, setMotivation, setSelfEfficacy, setStress, student, studentId])

  return (
    <>
      <SubSubHeaderText marginBottom={4}>Knowledge Component</SubSubHeaderText>
      <CaptionText marginBottom={8}>
        Please check the knowledge this student will be acquiring at the beginning of the conversation.
      </CaptionText>
      {knowledgeState.map(({ knowledge, on }, i) => (
        <CheckInput key={i} checked={on} marginBottom={4}>
          {knowledge}
        </CheckInput>
      ))}

      <SubSubHeaderText marginTop={32} marginBottom={4}>
        Goal Commitment
      </SubSubHeaderText>
      <CaptionText marginBottom={8}>Please consider how this student will respond to each question.</CaptionText>
      {goalCommitment.map(({ item }, i) => (
        <div key={i}>
          <BodyText>{item}</BodyText>
          <SliderInput
            min={1}
            max={5}
            value={goalCommitment[i].rating}
            minLabel={'Strongly disagree'}
            maxLabel={'Strongly agree'}
            marginBottom={12}
          />
        </div>
      ))}

      <SubSubHeaderText marginTop={32} marginBottom={4}>
        Motivation
      </SubSubHeaderText>
      <CaptionText marginBottom={8}>Please consider how this student will respond to each question.</CaptionText>
      {motivation.map(({ item }, i) => (
        <div key={i}>
          <BodyText>{item}</BodyText>
          <SliderInput
            min={1}
            max={5}
            value={motivation[i].rating}
            minLabel={'Strongly disagree'}
            maxLabel={'Strongly agree'}
            marginBottom={12}
          />
        </div>
      ))}

      <SubSubHeaderText marginTop={32} marginBottom={4}>
        Self-efficacy
      </SubSubHeaderText>
      <CaptionText marginBottom={8}>Please consider how this student will respond to each question.</CaptionText>
      {selfEfficacy.map(({ item }, i) => (
        <div key={i}>
          <BodyText>{item}</BodyText>
          <SliderInput
            min={1}
            max={5}
            value={selfEfficacy[i].rating}
            minLabel={'Strongly disagree'}
            maxLabel={'Strongly agree'}
            marginBottom={12}
          />
        </div>
      ))}

      <SubSubHeaderText marginTop={32} marginBottom={4}>
        Academic Stress
      </SubSubHeaderText>
      <CaptionText marginBottom={8}>Please consider how this student will respond to each question.</CaptionText>
      {stress.map(({ item }, i) => (
        <div key={i}>
          <BodyText>{item}</BodyText>
          <SliderInput
            min={1}
            max={5}
            value={stress[i].rating}
            minLabel={'Strongly disagree'}
            maxLabel={'Strongly agree'}
            marginBottom={12}
          />
        </div>
      ))}
    </>
  )
}
