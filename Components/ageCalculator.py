import datetime as dt
import sys

 
def age(birthday):
    birthdate=dt.datetime.strptime(birthday,'%Y-%m-%d')
    today = dt.date.today()
    age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))
    return age

if __name__=="__main__":
    f = open("temp.txt", "a")
    print(sys.argv[1])
    ageV=age(sys.argv[1])
    f.write("age="+str(age(ageV)))
    f.write("\n")
    f.close()
    