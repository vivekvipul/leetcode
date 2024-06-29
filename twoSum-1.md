:exclamation: Had to use hint. :exclamation:

1st approach - WRONG - only worked for sorted array
nested for loop for each number and its neighbour to the point where next index becomes greater than the required sum.
check if i index + j index sum is equal to required
return i ,j if match

## Rejected - does not work if array is not sorted

2nd approach - hint was to use map
store target - value as key and index as value in map.
for each index check if that value is a key in map using hasOwnProperty.
if so return the index and the value from map for that key.

## Accepted, runtime - 87%, memorey - 43%
