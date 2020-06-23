# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        cur = head
        visited = set()
        
        # Walk the entire linked list
        while cur is not None:
            
            # Check to see if we found a loop
            if cur in visited:
                return True
            
            # Mark as visited and move to the next
            visited.add(cur)
            cur = cur.next
            
        # If we get here, no loop was detected
        return False
        