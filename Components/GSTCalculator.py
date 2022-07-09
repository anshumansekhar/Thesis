def gstCalculator(percentage,amount):
    percentage=float(percentage)
    return (percentage/100)*amount

if __name__=="__main__":
    print(gstCalculator(18,100))