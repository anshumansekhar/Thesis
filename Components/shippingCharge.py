def shippingCharge(weight,length,height,width):
    weight=float(weight)
    length=float(length)
    height=float(height)
    width=float(width)
    return weight*0.5+length*0.2+height*0.2+width*0.2
if __name__=="__main__":
    print(shippingCharge(34,56,67,90))