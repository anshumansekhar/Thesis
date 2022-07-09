function calculateFare(roomType, numberOfDays) {
  if(roomType==="General")
  {
      return numberOfDays*500;
  }
  else if(roomType==="Deluxe")
  {
      return numberOfDays*1000;
  }
}