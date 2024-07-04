// Function for detecting speeding and to calculate demerit points 
function speedDetector(speed) { 
    // Constants
const speedLimit = 70; 
const pointsPerKmAboveLimit = 5; 
const maxPointsBeforeSuspension = 12; 
// confirm speed
if (speed <= speedLimit) { 
  console.log("Ok");    
 } else {
 const demeritPoints = Math.floor((speed - speedLimit) / pointsPerKmAboveLimit);
 console.log(`Points: ${demeritPoints}`);
  if (demeritPoints >= maxPointsBeforeSuspension) { 
console.log("License suspended");
  
   

 } 
}
 } 
 // Example
 console.log("Testing speed :80");speedDetector(80);//output Points: 2
 console.log("Testing speed :135");speedDetector(135);//output:License suspended
 console.log("Testing speed :65");speedDetector(65);//output:Ok
 

