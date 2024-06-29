function calculateGrade(studentMarks) {
 // Convert input to a number
  var marks = parseFloat(studentMarks); 
  // Check if the input is a correct number 
  if (isNaN(marks) || marks < 0 || marks > 100)
 { console.log("Please enter a number between 0 and 100.");
     return; 
    } 
    // Calculate the grade based on the specified criteria provided
     var grade; if (marks > 79) { 
    grade = 'A'; 
} else if (marks >= 60 && marks <= 79) {
 grade = 'B'; 
} else if (marks >= 50 && marks <= 59) {
 grade = 'C';
 } else if (marks >= 40 && marks <= 49) {
 grade = 'D'; 
} else {
 grade = 'E';
 }
  // Output the result 
  console.log("Student Grade: " + grade);
 }
  // Call the function to calculate and display the grade 
  calculateGrade(90);