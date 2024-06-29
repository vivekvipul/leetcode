# 1st approach

First approach was to convert number to array of numbers and compare every number using 2 pointers.
Although this is a valid solution it is not optimal in terms of both time and space.
Creating an array and looping through it takes significant time.

## Accepted, runtime - 37%, memorey - 48%

# Using the hint

Reverse the number.
This involves just base math of dividing the number and using remainder\* 10 + quotient till the original number is 0.
This was way more efficient.

## Accepted, runtime - 99%, memorey - 89%

# Gotchas :eye:

- make sure you create a temp variable to s tore the original number so it can be used to for comparision with reversed number at the end.
  If you use the original for calculation you chaneg the value of it and it ends up as 0 after every cycle thus resulting in false as the answer on comparision.
