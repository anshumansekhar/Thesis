import sys

 
def loginCheck(username,password):
    return True

if __name__=="__main__":
    f = open("temp.txt", "a")
    f.write("loginCheck="+str(loginCheck(sys.argv[1],sys.argv[2])))
    f.write("\n")
    f.close()
    