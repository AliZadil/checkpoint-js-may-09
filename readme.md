Start by editing the main.js file.

Create a class called Person, that has one property, _name.
Write a getter and setter for the _name;
Create another class called Student, which extends the Person class, and has two extra properties called "_year" and "_grade".
Write getters and setters for all the properties.

In the class Student:
 - in the student constructor, properly initiate the _name and _year using arguments. The _grade will initially be 0;

Create another array called "students". For
Start by editing the main.js file.
Create a class called Person, that has one property, _name.
Write a getter and setter for the _name;
Create another class called Student, which extends the Person class, and has two extra properties called "_year" and "_grade".
Write getters and setters for all the properties.
In the class Student:
 - in the student constructor, properly initiate the _name and _year using arguments. The _grade will initially be 0;
Create another array called "students". For each person, create a new Student object, with the proper _name and _year, taking the values from the "people" array.
Make a class called Academy:
 - write a static method called exam(students). This method will give each student in the students array a random grade, from 1 to 10. Use the provided function "getRandomNumber". Use the "grade" setter you created earlier, to set each student's grade.
 - write a static method called graduate(students) that returns all the students with a grade of 6 or higher. Use .filter()
 - write a static method called studentLevels(students), which returns an array that looks like this: ["Failed", "Average", "Above Average", "Great"]. Use .map() for this.
  - If student has a grade less than 5, "Failed". 
  - If grade is between 6-7, "Average".
  - If grade is between 7-8, "Above Average"
  - If grade is 8-10, "Great"
 - write a static method called studentInfo(students), which returns an array of template strings, that look like this: "STUDENT_NAME, of year 0-3, has a grade of 1-10", where you input the proper year and grade. Use .map()
 - define a callbackFunction1(name) outside of this class, which just prints the "name" argument using console.log.
 - write a static method called printStudents(students, callbackFc), which will recevie the callbackFunction1, and call the function for each student in the students array.
- write a static method called averageGrade(students), which will return a promise. This promise will resolve the average grade of all the students, after 2 seconds. If the students array has a length less than 3, reject the promise, with the string "Too few students!". Use setTimeout, and .reduce(). Use .then() to print out the average grade.

Convert the array of Students to JSON. Print that JSON string.
Convert the json string back to regular javascript objects. Print those objects.