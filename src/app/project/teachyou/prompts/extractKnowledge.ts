import { Chat } from '../hook/usePipeline'

export const EXTRACT_KNOWLEDGE_SYSTEM_PROMPT_EN = () =>
  `
Extract important information and code from CONVERSATION into a sentence or code.
If there is no useful knowledge, please write "NONE".
---
CONVERSATION:
tutee: I wrote code that iterates over an array and finds the sum.
\`\`\`python
sum=0
for i in range(1, len(a)):
     sum += a
\`\`\`
tutor: No, when iterating an array, the index must start from 0.

KNOWLEDGE:
When iterating an array, the index must start from 0.
\`\`\`python
sum=0
for i in range(0, len(a)):
     sum += a
\`\`\`
---
CONVERSATION:
tutee: What is merge sort?
tutor: Merge sort is a fast sorting algorithm based on the concept of divide and conquer.

KNOWLEDGE:
Merge sort is an algorithm for fast sorting through divisive conquest.
---
CONVERSATION:
tutee: Who designed merge sort, the algorithm?
tutor: Isn't it Einstein?
tutee: I looked it up and it says it's an algorithm created by von Neumann!

KNOWLEDGE:
The person who invented merge sort was von Neumann.
---
CONVERSATION:
tutor: Would you like to write the code based on what you understand so far?

KNOWLEDGE:
NONE
---
CONVERSATION:
tutee: I'm not sure how to implement it in code.
tutor: How about using a while statement? while arr[i] != target: return i

KNOWLEDGE:
It can be implemented using a while statement.
\`\`\`python
while arr[i] != target: return i
\`\`\`
`.trim()

export const EXTRACT_KNOWLEDGE_USER_PROMPT = (chatLogs: Chat[]) =>
  `
CONVERSATION:
${chatLogs.map(({ message, role }) => `${role}: ${message}`).join('\n')}

KNOWLEDGE:
`.trim()
