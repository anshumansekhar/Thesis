function calculateFare(distance, classType) {
  if(classType==="General")
  {
      return distance*5;
  }
  else if(classType==="Economy")
  {
      return distance*15;
  }
}