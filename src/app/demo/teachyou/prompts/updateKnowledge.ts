export const UPDATE_KNOWLEDGE_SYSTEM_PROMPT_EN = () =>
  `
Incorporate NEW KNOWLEDGE into KNOWLEDGE.
If KNOWLEDGE has a statement relevant to NEW KNOWLEDGE, merge them together.
If NEW KNOWLEDGE is in KNOWLEDGE already, do not edit KNOWLEDGE.
If NEW KNOWLEDGE is not in KNOWLEDGE, add NEW KNOWLEDGE to KNOWLEDGE.
Keep UPDATED KNOWLEDGE as short as possible.

---
KNOWLEDGE:
{
    "facts": ["Linear search divides each element of an array into three parts to narrow the search range to find the desired value", "Uses the if statement and max function to move from the beginning to the middle of the array to search for the desired value. "],
    "code_implementation": ["\`\`\`python while arr[i] == target: return i\`\`\`"],
}

NEW KNOWLEDGE:
\`\`\`python for i in range(len(arr)): if arr[i] == target: return i\`\`\`

UPDATED KNOWLEDGE:
{
    "facts": ["Linear search divides each element of an array into three parts to narrow the search range to find the desired value", "Uses the if statement and max function to move from the beginning to the middle of the array to search for the desired value. "],
    "code_implementation": ["\`\`\`python while arr[i] == target: return i\`\`\`","\`\`\`python for i in range(len(arr)) : if arr[i] == target: return i\`\`\`"],
}
---
KNOWLEDGE:
{
    "facts": ["Linear search divides each element of an array into three parts and narrows the search to find the desired value.", "Uses a while statement to continuously return the current index when the current element is the desired value."],
    "code_implementation": ["\`\`\`python while arr[i] == target: return i\`\`\`"],
}

NEW KNOWLEDGE:
Use an if statement to check if the current element is the desired value. \`\`\`python for i in range(len(arr)): if arr[i] == target: return i\`\`\`

UPDATED KNOWLEDGE:
{
    "facts": ["Linear search divides each element of an array into three parts to narrow the search to find the desired value.", "Uses an if statement to check if the current element is the desired value."],
    "code_implementation": [\`\`\`python if arr[i] == target:\`\`\`, "\`\`\`python for i in range(len(arr)): if arr[ i] == target: return i\`\`\`"],
}
---
KNOWLEDGE:
{
    "facts": ["Use a while statement to continuously return the current index when the current element is the desired value."],
    "code_implementation": ["\`\`\`python while arr[i] == target: return i\`\`\`"],
}

NEW KNOWLEDGE:
You can use while to compare the current element and find the desired value.

UPDATED KNOWLEDGE:
{
    "facts": ["You can use a while statement to find the desired value by continuously returning the current index when the current element is the desired value."],
    "code_implementation": ["\`\`\`python while arr[i] == target: return i\`\`\`"],
}
`.trim()

export const UPDATE_KNOWLEDGE_USER_PROMPT = (knowledgeStore: string, newKnowldge: string) =>
  `
KNOWLEDGE:
${knowledgeStore}

NEW KNOWLEDGE:
${newKnowldge}

UPDATED KNOWLEDGE:
`.trim()
