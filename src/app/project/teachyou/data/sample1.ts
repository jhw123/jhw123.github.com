import { Chat } from '@/app/demo/teachyou/hook/usePipeline'

export const SAMPLE1: Chat[] = [
  {
    role: 'tutee',
    message: 'Hi! Could you please teach me about binary search?',
  },
  {
    role: 'tutor',
    message: 'How much do you know?',
  },
  {
    role: 'tutee',
    message: "I don't know much about binary search.",
  },
  {
    role: 'tutor',
    message:
      'Binary search is an algorithm that finds a specific value in a sorted array. This is an algorithm that compares the median of an interval with the value to be found, searching the right side of the interval if the value to be found is greater than the median, and searching the left side of the interval if the value to be found is less than the median.',
  },
  {
    role: 'tutee',
    message:
      'Understand. Binary search is an algorithm that searches for a specific value in a sorted array, and searches to the right if the value is large based on the median, and to the left if it is small. Could you check my code\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n```',
  },
  {
    role: 'tutor',
    message:
      'No. If the value you are looking is larger than the median, search to the right. So what should we do? We use an if statement to check if the value you are looking for is larger and change it to min = guess +1 if it is the case. Since min is the smallest index in the interval, min must be changed to guess+1 to search the right side.',
  },
  {
    role: 'tutee',
    message: 'Then, if the value I am looking for is smaller than the median, how should I change max?',
  },
  {
    role: 'tutor',
    message:
      'In this case, use an if statement, and if the value you are looking for is less than the median, change it to max = guess -1. This is to search the left.',
  },
  {
    role: 'tutee',
    message:
      'To summarize, if the value you are looking for is less than the median, max should be changed to guess-1! I understand.',
  },
  {
    role: 'tutor',
    message: 'If you understand, should we write the code again?',
  },
  {
    role: 'tutee',
    message:
      'Binary search is an algorithm that searches for a specific value in a sorted array. It compares the median value with the value to be found, and searches to the right if the value to be found is greater than the median, and to the left if it is smaller than the median. When the value I am looking for is less than the median, max must be changed to guess-1. I wrote the code as below.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] > number:\n      max = guess - 1\n```',
  },
  {
    role: 'tutor',
    message:
      'Good. In the same way, when the value you search is greater than the median, you need to change it to min = guess+1. This is to search the right. Please rewrite the code including this.',
  },
  {
    role: 'tutee',
    message:
      'I understand. I rewrote the code by changing min to guess+1.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] > number:\n      max = guess - 1\n    else:\n      min = guess + 1\n```',
  },
  {
    role: 'tutor',
    message:
      "Right. But if you don't found the target value, it should return False, right? Add return False at the end of the function.",
  },
  {
    role: 'tutee',
    message: 'What should I do if the value I am looking for in binary search is not in the array?',
  },
  {
    role: 'tutor',
    message:
      'In that case, after the while statement ends, return False. Could you try writing your code including this?',
  },
  {
    role: 'tutee',
    message:
      'To summarize, if the value you are looking for is not in the array, you return False after the while statement ends!',
  },
  {
    role: 'tutor',
    message: 'Then, try rewriting the code.',
  },
  {
    role: 'tutee',
    message:
      'I rewrote the code based on what I understood.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] > number:\n      max = guess - 1\n    else:\n      min = guess + 1\n  return False\n```\nI included the code that return False if the value sought is not in the array.',
  },
  {
    role: 'tutor',
    message: 'Good job! So when will binary search be used in real life?',
  },
  {
    role: 'tutee',
    message:
      'But now that I think about it, binary search can only be used on sorted data, right? So how can binary search be used in real life if data is not always sorted?',
  },
  {
    role: 'tutor',
    message:
      "Binary search cannot be used in an unsorted state. This is because I can't conclude that the value I'm looking for is on the right side of the interval if the value is larger than the median. For example, let's say you want to find 2 in an unsorted array called [1, 3, 5, 8, 2]. You can’t find 2 using binary search. Because 2 is less than 5, the median. Binary search looks at the left side of the interval. But 2 is on the right side of the section. Therefore, we cannot find 2.",
  },
  {
    role: 'tutee',
    message:
      'To summarize, binary search cannot be used on unsorted data. Since binary search selects a side based on the median value, so the desired value cannot be found in an unsorted array.',
  },
  {
    role: 'tutor',
    message: 'Binary search can be used in real life, such as document search.',
  },
  {
    role: 'tutee',
    message:
      'Then this thought occurred to me. It was said that binary search can only be used on sorted data, but in real life, if data is not always sorted, how can binary search be used?',
  },
  {
    role: 'tutor',
    message: 'So to use binary search, sort the data in advance. There are several ways to sort.',
  },
  {
    role: 'tutee',
    message:
      'So, you are saying that there are several ways to sort the data. Can you explain in a little more detail?',
  },
  {
    role: 'tutor',
    message:
      'The basic sort is insertion sort. It is a sorting algorithm where the kth element is compared with 1 to k-1, inserted into the appropriate position at a time. There are various sorting methods.',
  },
  {
    role: 'tutee',
    message:
      'To summarize, in order to use binary search, the data must be sorted in advance. There are many ways to sort data, and the basic sort is insertion sort. Insertion sort is a sort that compares the kth element with 1 to k-1, inserts it into the appropriate position at a time. I understand.',
  },
]
