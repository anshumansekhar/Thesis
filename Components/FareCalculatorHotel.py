def calculateFare(roomType, numberOfDays):
  if(roomType=="General"):
      return numberOfDays*500
  elif roomType=="Deluxe":
      return numberOfDays*1000


if __name__=="__main__":
    print(calculateFare("General",5))