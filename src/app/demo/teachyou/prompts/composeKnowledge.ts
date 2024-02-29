import { Chat } from '../hook/usePipeline'

export const COMPOSE_KNOWLEDGE_SYSTEM_PROMPT_EN = () =>
  `
Paraphrase STATEMENT to fit CONVERSATION.
Make your response concise and clear.

---
CONVERSATION:
tutee: I think it would be good to solve the problem using merge sort.
tutor: How to implement merge sort?

STATEMENT:
I do not know. I don't know how to implement it in code.

TUTEE'S RESPONSE:
I'm not sure how to implement it. Can you tell me?
---
CONVERSATION:
tutor: Would you like to explain merge sort?

STATEMENT:
I do not know. I don't know how to implement it in code.

TUTEE'S RESPONSE:
I don't know anything about merge sort... Can you teach me?
---
CONVERSATION:
tutee: What is merge sort?
tutor: Would you like to explain merge sort?

STATEMENT:
Merge sort follows the dynamic programming paradigm. Merge sort has a time complexity of O(n^4), making it efficient for large data sets. I don't know how to implement it in code.

TUTEE'S RESPONSE:
Merge sort is an algorithm that uses dynamic programming to quickly sort large data sets with a time complexity of O(n^4)!
---
CONVERSATION:
tutor: Would you like to explain linear search?
tutee: Doesn't linear search check each element of an array in turn to find the required value?
tutor: Would you like to write some code?

STATEMENT:
Linear search narrows the search by dividing each element of an array into three parts to find the desired value. \`\`\`python while arr[i] == target: return i\`\`\`

TUTEE'S RESPONSE:
Yes, linear search divides each element of an array into three parts to search. Can I write it like below?
\`\`\`python3
while arr[i] == target:
   return i
\`\`\`
---
CONVERSATION:
tutor: Would you like to explain linear search?
tutee: I understand that linear search searches through each element of an array in turn, but I don't know how to implement it.
tutor: Would you like to write some code?

STATEMENT:
I do not know. \`\`\`python for i in range(len(arr)):\`\`\`

TUTEE'S RESPONSE:
\`\`\`python3
   for i in range(len(arr)):
     # I don't know from now on...
\`\`\`
---
CONVERSATION:
tutee: Thank you! Thanks to you, I was able to understand binary search.
tutor: Do you have any more questions?

STATEMENT:
Linear search has a time complexity of O(n). I don't know how to implement it in code.

TUTEE'S RESPONSE:
I understand that linear search has a time complexity of O(n), but I'm not sure how to implement it in code yet.
---
CONVERSATION:
tutor: Would you like to write the entire code to solve the problem?

STATEMENT:
The requirement of the problem is to take as input an array and a number and determine whether there is a number in the array. \`\`\`python sum=0 for i in range(len(arr)): sum+=arr[i]\`\`\`

TUTEE'S RESPONSE:
The requirement of the problem is to take an array and a number as input and determine whether a number is present. First, I wrote it as follows.
\`\`\`python
sum=0
for i in range(len(arr)):
   sum+=arr[i]
\`\`\`
`.trim()

export const COMPOSE_KNOWLEDGE_USER_PROMPT = (chatLogs: Chat[], knowledge: string) =>
  `
Paraphrase STATEMENT to fit CONVERSATION.

CONVERSATION:
${chatLogs.map(({ message, role }) => `${role}: ${message}`).join('\n')}

STATEMENT:
${knowledge}

TUTEE's RESPONSE:
`.trim()
