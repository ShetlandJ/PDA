### Testing task 1 code:

# Carry out static testing on the code below.  
# Read through the code.  
# Comment any errors you can see without correcting them.


<!-- Uses a single equals rather than a comparator (==). Best practice to put the argument of the method in brackers like(this). -->
 ```
def func1 val
  if val = 1
  return true
  else
  return false
  end
end
 ```



 <!-- The function won't work because in Ruby, methods are declared with 'def', not 'dif'. Furthermore, there's an additional 'end' that would cause an unexpected-end error. The function is also not properly indented. While that won't cause the function to fail, it's best practice to have properly aligned methods. -->
 ```
dif max a b
  if a > b
      return a
  else
  b
  end
end
end
```

<!-- Looper function returns the range of 1..10 at the end, which means it won't work in the test below. -->
```
def looper
  for i in 1..10
  puts i
  end
end
```


<!-- Will fail because there is no end, closing off the function. Will never trigger the first line of the if statement because the looper function returns nil when used in this method. -->
```
failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1
```


<!-- Won't run because the method is not set up properly above. -->

```
if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1
end
```
<!-- The word 'failrues' will throw an error, as it's an undefined variable -->

```
if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed"
  failrues = failures + 1
end
```

<!-- This is asking if 'failures' is true or false, but the variable failures returns a number not a boolean -->
```
if failures
  puts "Test Failed"
else
  puts "Test Passed"
end

```
