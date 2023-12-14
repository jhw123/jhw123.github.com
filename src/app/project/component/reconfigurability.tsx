import { ChatBox } from '@/app/demo/teachyou/component/chatbox'
import { SelectInput } from '@/design/component/input/select'
import { TextInput } from '@/design/component/input/text'
import { BodyText } from '@/design/component/text/body'
import { CaptionText } from '@/design/component/text/caption'
import { ComponentState } from '@/design/foundation/componentState'
import styled from '@emotion/styled'
import { useState } from 'react'
import { KnowledgeStates } from '../data/knowledgeStates'
import { Problems } from '../data/problems'
import { MOBILE_BREAKPOINT } from '@/design/ui'

const ReconfigurabilityChatLog = (problem: string, response: string, isCorrect: boolean) =>
  [
    {
      role: 'tutor',
      message: `
Would you like to solve the multiple choice questions below? For the answer, write the alphabet first, then write an explanation.

${problem}
`.trim(),
    },
    {
      role: 'tutee',
      message: response,
    },
    { role: 'system', message: isCorrect ? '✅ This response is correct.' : '❌ This response is incorrect.' },
  ] as const

const ReconfigurabilityResponse = [
  ['I do not know. Could you explain?', "I'm not sure about this problem.", 'I do not know.'],
  [
    'A, merge sort is an algorithm that sorts the input array by dividing it in half using a divide-and-conquer method.',
    "I do not know. I don't know what to do with this part.",
    "I don't know.",
  ],
  [
    `A, merge sort is a divide-and-conquer algorithm that sorts the input array by dividing it in half. Below is the implementation code.
\`\`\`python
def merge_sort(lst):
  if len(lst) <= 1:
    return lst
  mid = len(lst) // 2
  left = merge_sort(lst[:mid])
  right = merge_sort(lst[mid:])
  return merge(lst)
\`\`\`
    `.trim(),
    `D, because merge sort is a divide and conquer algorithm that sorts the input array by dividing it in half. I think you can write the code as below.
    
\`\`\`python
def merge_sort(lst):
  if len(lst) <= 1:
    return lst
  mid = len(lst) // 2
  left = merge_sort(lst[:mid])
  right = merge_sort(lst[mid:])
  return merge(lst)
\`\`\`
    `.trim(),
    'B, because merge sort always performs in O(n log n) time, regardless of the initial order of the inputs.',
  ],
  [
    `A, Merge sort is a divide and conquer algorithm that sorts the input array by dividing it in half. It can be implemented as follows.
\`\`\`python
def merge_sort(lst):
  if len(lst) <= 1:
    return lst
  mid = len(lst) // 2
  left = merge_sort(lst[:mid])
  right = merge_sort(lst[mid:])
  return merge(left, right)
\`\`\`
  `.trim(),
    `A) merge(left, right), because merge sort is a divide and conquer algorithm that sorts the input array by dividing it in half. I think you can write the code like this.
\`\`\`python
def merge_sort(lst):
  if len(lst) <= 1:
    return lst
  mid = len(lst) // 2
  left = merge_sort(lst[:mid])
  right = merge_sort(lst[mid:])
  return merge(left, right)
\`\`\`
    `.trim(),
    'B, because merge sort always performs in O(n log n) time, regardless of the initial order of the inputs.',
  ],
]

const IsCorrect = [
  [false, false, false],
  [true, false, false],
  [true, false, true],
  [true, true, true],
]

export function Reconfigurability() {
  const [knowledgeState, setKnowledgeState] = useState(0)
  const [problem, setProblem] = useState(0)

  return (
    <EvaluationSample>
      <div>
        <BodyText marginBottom={8}>
          Choose a knowledge state and a type of multiple-choice question, and see how AlgoBo answers the question.
        </BodyText>

        <CaptionText marginBottom={4}>Multiple Choice Question Type</CaptionText>
        <SelectInput options={['Understanding', 'Implementation', 'Analysis']} onSelect={setProblem} marginBottom={8} />

        <CaptionText marginBottom={4}>Knowledge State</CaptionText>
        <SelectInput
          options={['Zero-knowledge', 'Facts Only', 'Facts + Incorrect Code', 'Facts + Correct Code']}
          onSelect={setKnowledgeState}
          marginBottom={8}
        />
        <TextInput value={KnowledgeStates[knowledgeState]} rows={5} state={ComponentState.Disabled} />
      </div>
      <ChatBox
        chatLogs={ReconfigurabilityChatLog(
          Problems[problem],
          ReconfigurabilityResponse[knowledgeState][problem],
          IsCorrect[knowledgeState][problem]
        )}
      />
    </EvaluationSample>
  )
}

const EvaluationSample = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 16px;

  @media (max-width: ${MOBILE_BREAKPOINT}px) {
    display: flex;
    flex-direction: column;
  }
`
