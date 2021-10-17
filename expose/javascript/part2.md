1. 3 will be printed because the variable i was declared with the keyword var, so it is visible through blocks. Since the length of prices is 3, and i increases after each iteration, the loop stops once i becomes 3. First it was assigned as 0, then 1 and then 2. Finally, it is reassigned to 3, but it checks the condition and since it is false, it ends the loop.
2. 150 will be printed becaause discountedPrice was declared with the keyword var, so it is visible through blocks. During the last iteration of the for loop,the last item of the prices array is 300 and (1-discount) is 0.5. Then 300 multiplied by 0.5 is 150, so discountedPrice becomes 150. This variable is reassigned twice. It was first assigned to be 100*0.5=50, then reassigned to 200*0.5=100, and then finally 300*0.5=150.
3. 150 will be printed because finalPrice was declared with the keyword var, so it is visible through blocks. During the last iteration of the for loop, discountedPrice is 150 (the last item in discounted) and after it is rounded, it is still 150 since it is already an integer.
4. The function will return [50, 100, 150] an integer array of the final prices after the discount. During the first iteration of the for loop, discountedPrice is 100*(1-0.5)=50, then finalPrice is still 50 since after it is rounded it is still 50. Then 50 is added into discounted. Then i becomes 1 and checks that the condition i < prices.length is still true. During the second iteration, discountedPrice is 200*(1-0.5)=100, then finalPrice is still 100 since after it is rounded it is still 100. Then 100 is added to the end of discounted. Then i becomes 2 and checks that the condition i < prices.length is still true. During the third iteration, discountedPrice is 300*(1-0.5)=150, then finalPrice is still 150 since after it is rounded it is still 150. Then 150 is added to the end of discounted. Then i becomes 3 and checks that the condition i < prices.length is now false. So, discounted is [50, 100, 150].
5. Error because i was declared with the let keyword inside the for loop, so after the for loop ends, the variable i isn't visible. Since line 12 is outside of the for loop, it isn't able to see the variable i.
6. Error because discountedPrice was declared with the let keyword inside of the for loop, so after the for loop ends, the variable discountedPrice isn't visible. Since line 13 is outside of the for loop, it isn't able to see the variable i.
7. 150 is printed because the variable was declared with the keyword let but it was before the for loop, so it is still visible since line 14 is within the block of the declration. During the for loop, the variable was reassigned from 0 to 50 to 100 to 150.
8. [50, 100, 150] is returned because the variable was declared with the keyword let but it was before the for loop, so it is still visible since line 16 is within the block of the declration. During the for loop, 50, 100, 150 were added into discounted.
9. Error because i was declared with the keyword let, so it is only visible within the for loop. Since line 11 is outside of the for loop, i is not visible.
10. 3 is printed because the variable length is declared with the keyword const so it doesn't change values once it is assigned. 
11. [50, 100, 150] is returned. During each iteration of the for loop, the variable discountedPrice is declared and assigned. So after each iteration, the variable is gone and then at the beginning of each iteration it is declared and assigned. So during the first iteration discountedPrice is 50 and then it is added into discounted, then it is deleted. During the next iteration, discountedPrice is intialized to 100 and then it is added to the end of discounted, then it is deleted. During the last iteration, discountedPrice is intialized to 150 and then it is added to the end of discounted, then it is deleted. During this process, discounted is being manipulated not being reassigned so there is no error.
12. Data Types
    1.  student.name
    2.  student["Grad Year"]
    3.  student.greeting()
    4.  student["Favorite Teacher"].name
    5.  student.courseLoad[0]
13. Arithmetic
    1.  32 because string concatenation is done with + and '3' is a string and concatenates with 2 to become 32
    2.  1 because it can't perform subtraction on strings, so it converts the string to a number
    3.  3 because null becomes 0 so 3+0=3
    4.  3null because string concatenation is done with + and '3' is a string and concatenates with null to become 3null
    5.  4 because true value is 1 and 1+3=4
    6.  0 because false and null both become 0 so 0+0=0 and both are numbers
    7.  3undefined because string concatenation is done with + and '3' is a string and concatenates with undefined to become 3undefined
    8.  NaN because undefined is not a valid number so it results in NaN
14. Comparison
    1.  true becaause '2' becomes number 2 and 2 is greater than 1
    2.  false because strings are compared letter-by-letter and the '2' and '1' are compared first and 2 is bigger
    3.  true because '2' becomes number 2 and 2 is equal to 2
    4.  false because 2 and '2' are of different types so it immediately returns false
    5.  false because true is the vlaue 1 and 1 doesn't equal 2
    6.  true Boolean(2) is true for any integer other than 0, so this returns true because they are of the same type and the same value
15. Operands of different types are converted to numbers by thhe equality operator ==. While strict eqaulity operator ===, checks the equality without type conversions, so if a and b are of different types, a===b immediattely returns false.
16. part2-question16.js to look at code
17. [2, 4, 6] is the result. We are passing a function and expect it to be “called back” later. In the for loop of the function modifyArray, i=0, when pushing to newArr, doSomething is called and passes in the first element of array which is 1. After doSomething is executed, it returns 1*2=2 and pushes this into newArr. Now newArr=[2]. In the next iteration, doSomething is called and passes in the second element of array, which is 2. After doSomething is executed, it returns 2*2=4 and pushes this into newArr. Now newArr=[2,4]. In the next iteration, doSomething is called and passes in the third element of array, which is 3. After doSomething is executed, it returns 3*2=6 and pushes this into newArr. Now newArr=[2,4,6]. Then the for loop ends because i=3, and i=array.length. So newArr =[2,4,6] is returned.
18. part2-question18.js to look at code
19. 1, 4, 3, 2 because 1 and 4 don't have timers. 2 and 3 are only printed after the timer is over, and since 2 has a longer timer, it is printed after 3.
