import { Chat } from '@/app/project/teachyou/hook/usePipeline'

export const SAMPLE3: Chat[] = [
  {
    role: 'tutee',
    message: 'Hi! Could you please teach me about binary search?',
  },
  {
    role: 'tutor',
    message: 'First of all, how much do you know about binary search?',
  },
  {
    role: 'tutee',
    message: "I don't know much about binary search.",
  },
  {
    role: 'tutor',
    message: 'Do you know what binary search is for?',
  },
  {
    role: 'tutee',
    message: "I'm not sure about the purpose of binary search.",
  },
  {
    role: 'tutor',
    message: 'So, let me first explain what binary search is.',
  },
  {
    role: 'tutee',
    message:
      'Could you explain what the purpose of binary search is and under what circumstances it is better to use it?',
  },
  {
    role: 'tutor',
    message:
      'When there is a list, there are many ways to search for the item you want in it. For example, through a method called linear search, you check each item from the beginning of the list to see if it is the same as the desired item. However, this method is not efficient. Do you think you know why?',
  },
  {
    role: 'tutee',
    message:
      'To summarize, binary search is one of the ways to search for a desired item in a list, and is it more efficient than other methods?',
  },
  {
    role: 'tutor',
    message:
      "That's right, in the case of the linear search I mentioned earlier, if I want to find '3' and the list is given as [1, 2, 3], I have to search all the items in the list to find '3'. Binary search is one of the search methods to avoid this inefficiency.",
  },
  {
    role: 'tutee',
    message:
      'I understood that binary search is a more efficient method than linear search. Linear search requires searching all items, but binary search does not require that. I wrote the code below. Can you check if it is correct?\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n```',
  },
  {
    role: 'tutor',
    message:
      "Yes, in the worst case linear search needs to search all the items, but binary search doesn't need to do that even in the worst case.\nOkay, I think you understand the basic idea of binary search, which is searching the list in half. However, the code written by AlgoBo does not explain the case where cards[guess] does not match number after dividing the list in half. For example, what if cards[guess] is greater than number?",
  },
  {
    role: 'tutee',
    message:
      'I understood that binary search is a more efficient method than linear search. Linear search requires searching all items, but binary search does not require that. I wrote the code below, but it is missing processing for cases where cards[guess] does not match number. How should I fix this part?\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n```',
  },
  {
    role: 'tutor',
    message:
      'If the list is divided in half and the item is in the middle is larger than the number you want to search for, should you search for the part of the halved list where items smaller than cards[guess]? Or larger?',
  },
  {
    role: 'tutee',
    message:
      'If cards[guess] is greater than number, which part should we search for? And how should we handle the opposite case?',
  },
  {
    role: 'tutor',
    message:
      'If cards[guess] is greater than number, number should be in a place where values smaller than cards[guess] are gathered, right? Then, in the next iteration, the list should be reduced from min to the item just before cards[guess]. The min value will not change, and the max value can be changed to guess-1 and then proceed to the next iteration, right? Would you like to try writing some code?',
  },
  {
    role: 'tutee',
    message:
      'To summarize, if cards[guess] is greater than number, number should be in a place where values smaller than cards[guess] are gathered. Then, in the next iteration, the min value will not change, and the max value can be changed to guess-1.',
  },
  {
    role: 'tutor',
    message: "That's right. Then, if cards[guess] is smaller than number, how should I adjust the min and max values?",
  },
  {
    role: 'tutee',
    message:
      "Binary search is an efficient way to search a list by dividing it in half. However, I don't know what to do if cards[guess] is smaller than number. I wrote the code as below, but I think this part needs to be handled.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n```",
  },
  {
    role: 'tutor',
    message:
      'If cards[guess] is smaller than number, number must be in a place where values larger than cards[guess] are gathered, right? Then, the list to be searched in the next iteration should be reduced from the item immediately following cards[guess] to max. Then, the max value will not change, and the min value can be changed to guess+1 and then proceed to the next iteration, right?',
  },
  {
    role: 'tutee',
    message:
      'Binary search is an efficient way to search a list by dividing it in half. I understood that if cards[guess] is smaller than number, I can change the min value to guess+1. I modified the code as below.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] < number:\n      min = guess + 1\n```',
  },
  {
    role: 'tutor',
    message:
      'You modified it well, now you just need to implement what to do when cards[guess] is greater than number. Would you like to give it a try?',
  },
  {
    role: 'tutee',
    message:
      'Using binary search, I understand that if cards[guess] is greater than number, I need to reduce the search range from min to the item just before cards[guess], and change the max value to guess-1. I wrote the code as below.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] < number:\n      min = guess + 1\n    else:\n      max = guess - 1\n```',
  },
  {
    role: 'tutor',
    message: 'Good. Before we finish the code, would you like to explain binary search?',
  },
  {
    role: 'tutee',
    message:
      'Binary search is an efficient way to find the desired item in a list. Unlike linear search, binary search divides the list in half, allowing you to find the desired value more quickly. If the value you are looking for is greater than the median, the search range should be narrowed to the area after the median to the maximum value. Conversely, if the median value is greater than the value you are looking for, the search range should be narrowed to the area from the minimum value to before the median. Please refer to the code below.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] < number:\n      min = guess + 1\n    else:\n      max = guess - 1\n```',
  },
  {
    role: 'tutor',
    message:
      "Okay, but that code can't handle the case where number doesn't exist in cards. How would you return False when number does not exist in cards?",
  },
  {
    role: 'tutee',
    message: 'How should I modify the code to return False when number does not exist in cards?',
  },
  {
    role: 'tutor',
    message:
      'If number is not in cards, max will eventually become less than min and we will escape the while loop. In this case, if you want to get a return of False, you can write return False outside the while statement, right?',
  },
  {
    role: 'tutee',
    message:
      'To summarize, do you mean that if number does not exist in cards, you should escape the while loop and return False?',
  },
  {
    role: 'tutor',
    message: "That's right, then let's write some code.",
  },
  {
    role: 'tutee',
    message:
      'It will look like this.\n```python\ndef solution(cards, number):\n  min = 0\n  max = len(cards) - 1\n  while min <= max:\n    guess = (min + max) // 2\n    if cards[guess] == number:\n      return True\n    elif cards[guess] < number:\n      min = guess + 1\n    else:\n      max = guess - 1\n  return False\n```\nBinary search divides the list in half and searches, and if the search target is greater than the median, the search range is reduced from the item next to the median to the maximum value. And if number is not in cards, it escapes the while loop and returns False.',
  },
  {
    role: 'tutor',
    message:
      'Well done. I think you have a good understanding of binary search. Like this, binary search is one of the efficient ways to search when the list is sorted. Conversely, it may be difficult to use binary search when given an unsorted list. Considering these characteristics, what is the most efficient use case for binary search in real life?',
  },
  {
    role: 'tutee',
    message:
      'But now that I think about it, binary search can only be used on sorted lists, right? So how can you quickly navigate through unsorted data? I heard that it is good to use a hash table in this case. Have you ever heard of a hash table?',
  },
  {
    role: 'tutor',
    message:
      'You know it well. If you implement data as a hash table data structure, you can search for a given value by using the hash function only once.',
  },
  {
    role: 'tutee',
    message:
      'To summarize, binary search can only be used on sorted lists, and that unsorted data can be searched efficiently using hash tables!',
  },
  {
    role: 'tutor',
    message:
      'Okay, there are various search algorithms that can be applied to different cases like this. An algorithm that is efficient in some cases may be inefficient in other conditions, so you need to think carefully about which algorithm to use in a given condition. You did good today!',
  },
]

export const SAMPLE_FEEDBACK3 = [
  {
    index: 6,
    pattern: 'None',
    selected: -1,
  },
  {
    index: 12,
    pattern: 'HoveringAround',
    selected: -1,
  },
  {
    index: 18,
    pattern: 'HoveringAround',
    selected: -1,
  },
  {
    index: 24,
    pattern: 'None',
    selected: -1,
  },
  {
    index: 30,
    pattern: 'None',
    selected: -1,
  },
  {
    index: 36,
    pattern: 'HoveringAround',
    selected: -1,
  },
  {
    index: 42,
    pattern: 'SpoonFeeding',
    selected: -1,
  },
]
