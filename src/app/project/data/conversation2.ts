import { Chat } from '@/app/demo/teachyou/hook/usePipeline'

export const CONVERSATION2: Chat[] = [
  {
    role: 'tutee',
    message:
      'I am fixing the following code. Can you help me?\n```python\nmin = 0\nmax = n\nwhile min < max:\n  mid = (min + max) // 2\n  if lst[mid] == mid:\n    print(mid)\n```',
  },
  {
    role: 'tutor',
    message: 'You should update the value of min or max in the while loop.',
  },
  {
    role: 'system',
    message: 'AlgoBo enters the questioner mode.',
  },
  {
    role: 'tutee',
    message: 'Why is it necessary to update the min and max values?',
  },
  {
    role: 'tutor',
    message: "It's because we need to reduce the search space.",
  },
  {
    role: 'tutee',
    message: 'Can you explain in more detail? Why do we need to update them?',
  },
]
