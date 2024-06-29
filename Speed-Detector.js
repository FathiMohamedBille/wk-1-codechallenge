// Function for detecting speeding and to calculate demerit points 
function speedDetector(speed) { 
    // Constants
const speedLimit = 70; 
const pointsPerKmAboveLimit = 5; 
const maxPointsBeforeSuspension = 12; 
// confirm speed
if (speed <= speedLimit) { console.log("Ok");    
 } else {
 const demeritPoints = Math.floor((speed - speedLimit) / 5 pointsPerKmAboveLimit);
 console.log(`Points: ${demeritPoints}`);
  if (demeritPoints >= maxPointsBeforeSuspension) { 
console.log("License suspended");
 } 
}
 } 
 // Example
 const carSpeed = 80;
 calculateDemeritPoints(carSpeed);
  
