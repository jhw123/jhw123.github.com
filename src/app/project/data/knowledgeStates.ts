export const KnowledgeStates = [
  '{ "facts": [], "code_implementation": [] }',
  '{ "facts": ["Merge sort is a divide and conquer algorithm that sorts the input array by dividing it in half."], "code_implementation": [] }',
  '{ "facts": ["Merge sort is a divide and conquer algorithm that sorts the input array by dividing it in half."], "code_implementation": ["```python def merge_sort(lst): if len(lst) <= 1: return lst mid = len(lst) // 2  left = merge_sort(lst[:mid]) right = merge_sort(lst[mid:]) return merge(lst)```"]}',
  '{ "facts": ["Merge sort is a divide and conquer algorithm that sorts the input array by dividing it in half."], "code_implementation": ["```python def merge_sort(lst): if len(lst) <= 1: return lst mid = len(lst) // 2  left = merge_sort(lst[:mid]) right = merge_sort(lst[mid:]) return merge(left, right)```"]}',
]
