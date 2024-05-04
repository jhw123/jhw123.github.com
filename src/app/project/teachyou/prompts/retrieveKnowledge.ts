import { Chat } from '../hook/usePipeline'

export const RETRIEVE_KNOWLEDGE_SYSTEM_PROMPT_EN = () =>
  `
Identify the strings in KNOWLEDGE, a JSON object, that are directly relevant to respond to the tutor's message in CONVERSATION.
ANSWER should be a json format, and it should not include more than 3 strings.
---
CONVERSATION:
tutee: I think it would be good to solve the problem using merge sort.
tutor: How to implement merge sort?

KNOWLEDGE:
{
   "facts": ["Merge sort is a comparison-based sorting algorithm.","Merge sort follows the divide-and-conquer paradigm of dividing a problem into subproblems that can be more easily solved.","In merge sort, the main process is "merging". As a process, two sorted lists are combined into one.","Merge sort is efficient for large data sets, with a time complexity of O(n log n) in the worst and average cases."],
   "code_implementation": ["\`\`\`python3 def merge(arr1, arr2):\`\`\`", "\`\`\`python3 def divide(arr):\n\`\`\`"],
}

ANSWER:
{
   "facts": ["Merge sort is a comparison-based sorting algorithm."],
   "code_implementation": ["\`\`\`python3 def merge(arr1, arr2):\`\`\`"],
}
---
CONVERSATION:
tutee: What is merge sort?
tutor: Merge sort is a fast sorting algorithm based on the concept of divide and conquer.

KNOWLEDGE:
{
   "facts": ["Merge sort is a comparison-based sorting algorithm.","Merge sort follows the divide-and-conquer paradigm, which divides a problem into subproblems that are easier to solve.","Merge sort is a combination of worst-case and average-case problems. In some cases, the time complexity is O(n log n), making it efficient for large data sets."],
   "code_implementation": [],
}

ANSWER:
{
   "facts": ["Merge sort is a comparison-based sorting algorithm.","Merge sort follows the divide-and-conquer paradigm, which divides a problem into subproblems that are easier to solve.","Merge sort is a combination of worst-case and average-case problems. In some cases, the time complexity is O(n log n), making it efficient for large data sets."],
   "code_implementation": [],
}
---
CONVERSATION:
tutee: How do you implement merge sort in code?
tutor: What part do you not know?

KNOWLEDGE:
{
   "facts": ["Merge sort is a comparison-based sorting algorithm.","Merge sort follows the divide-and-conquer paradigm, which divides a problem into subproblems that are easier to solve.","Merge sort is a combination of worst-case and average-case problems. In some cases, the time complexity is O(n log n), making it efficient for large data sets."],
   "code_implementation": [],
}

ANSWER:
{
   "facts": ["Merge sort follows the divide-and-conquer paradigm, which divides a problem into subproblems that are easier to solve."],
   "code_implementation": []
}
---
CONVERSATION:
tutee: Oh, I understand! Thanks to this, I was able to understand what merge sort is.
tutor: Then, in addition to merge sort, there is also quick sort. Shall we compare the two?

KNOWLEDGE:
{
   "facts": ["Merge sort is a comparison-based sorting algorithm.","Merge sort follows the divide-and-conquer paradigm, which divides a problem into subproblems that are easier to solve.","Merge sort is a combination of worst-case and average-case problems. In some cases, the time complexity is O(n log n), making it efficient for large data sets."],
   "code_implementation": []
}

ANSWER:
{
   "facts": ["Merge sort follows the divide-and-conquer paradigm, which divides a problem into subproblems that are easier to solve."],
   "code_implementation": []
}
`.trim()

export const RETRIEVE_KNOWLEDGE_USER_PROMPT = (chatLogs: Chat[], knowledgeStore: string) =>
  `
ANSWER should be a json format, and it should not include more than 3 indexes.

CONVERSATION:
${chatLogs.map(({ message, role }) => `${role}: ${message}`).join('\n')}

KNOWLEDGE:
${knowledgeStore}

ANSWER:
`.trim()
