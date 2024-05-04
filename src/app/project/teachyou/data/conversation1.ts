import { Chat } from '@/app/demo/teachyou/hook/usePipeline'

export const CONVERSATION1: Chat[] = [
  {
    role: 'tutee',
    message: 'Hello, I am a student who is studying binary search. Can you help me understand it?',
  },
  {
    role: 'system',
    message: 'Knowledge State: { facts: "binary search is a search algorithm" }',
  },
  {
    role: 'tutor',
    message: 'Sure! How much about binary search do you know?',
  },
  {
    role: 'tutee',
    message: "I don't know much about it. I just know that it is a search algorithm.",
  },
  {
    role: 'system',
    message: 'Knowledge State: { facts: "binary search is a search algorithm" }',
  },
  {
    role: 'tutor',
    message: 'In binary search you find a specific value by reducing the search space continously in half.',
  },
  {
    role: 'tutee',
    message: 'I see. So, binary search keeps reducing the search space until it finds the value?',
  },
  {
    role: 'system',
    message:
      'Knowledge State: { facts: "binary search is a search algorithm, binary search keeps reducing the search space by half" }',
  },
]
