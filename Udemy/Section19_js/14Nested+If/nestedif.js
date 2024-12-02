//Goal: To get grade of the student based on secured marks.
/*Secured marks > 80 = A grade
Secured marks is between 60 and 79 = B grade
Otherwise C grade
but if secured marks is less than 35, then F grade (Fail)
*/

var securedMarks = 28, grade;
if (securedMarks >= 35)
{
  if (securedMarks >= 80)
  {
    grade = "A";
  }
  else if (securedMarks >= 60 && securedMarks < 80)
  {
    grade = "B";
  }
  else if (securedMarks >= 35 && securedMarks < 60)
  {
    grade = "C";
  }
}
else
{
  grade = "Fail";
}
console.log(grade);
