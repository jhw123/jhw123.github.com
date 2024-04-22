import { Chat } from '@/app/demo/teachyou/hook/usePipeline'

export const CONVERSATION3: Chat[] = [
  {
    role: 'tutor',
    message: 'add return min at the end of the code',
  },
  {
    role: 'tutee',
    message:
      'Can you help me fix my code?\n```python\nmin=1\nmax=len(arr)-1\nwhile min<=max:\n  mid=(min+max)//2\n  if arr[mid] < target:\n    min = mid+1\n  else:\n    max=mid\nreturn min\n```',
  },
  {
    role: 'tutor',
    message: 'fix min=1 to min=0',
  },
  {
    role: 'system',
    message: 'Teaching Helper appears.',
  },
]
