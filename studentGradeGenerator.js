const readline = require('readline');

// Creating an interface for reading input from the console
const read= readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
});
function calculateGrade(studentMarks) {
 // Convert input to a number
//   var marks = parseFloat(studentMarks); 
//   // Check if the input is a correct number 
//   if (isNaN(marks) || marks < 0 || marks > 100)
//  { console.log("Please enter a number between 0 and 100.");
//      return; 
//     } 
    // Calculate the grade based on the specified criteria provided
if (studentMarks > 79) { 
    return'A'; 
} else if (studentMarks >= 60 && studentMarks <= 79) {
 return'B'; 
} else if (studentMarks >= 50 && studentMarks <= 59) {
 return'C';
 } else if (studentMarks >= 40 && studentMarks <= 49) {
 return'D'; 
} else {
return 'E';
 }
  // Output the result 
 // console.log("Student Grade: " + grade);
 }
  // Call the function to calculate and display the grade 
  // calculateGrade(90);
  // Prompting the user for input and processing it
read.question("Enter the student's marks (between 0 and 100): ", function(studentMarks) {
    studentMarks = parseInt(studentMarks);
    // Checking if the input is valid
    if (isNaN(studentMarks) ||studentMarks  < 0 || studentMarks > 100) {
        console.log('Invalid input. Please enter a number between 0 and 100.');
    } else {
        // Generating and logging the student's grade
        const grade = calculateGrade(studentMarks);
        console.log(`The student\'s grade is: ${grade}`);
    }

    // Closing the readline interface
    read.close();
});