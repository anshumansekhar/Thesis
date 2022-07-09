def calculateFare(distance, classType):
    if classType=="General":
        return distance*5
    elif classType=="Economy":
        return distance*15

if __name__=="__main__":
    print(calculateFare(100,"General"))