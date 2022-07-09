import Tkinter as tk

def get_language(choice):
    choice=clicked.get()
    lbl.config(text = "Provided Input: "+choice)

def printInput():
    inp = inputtxt.get(1.0, "end-1c")
    lbl.config(text = "Provided Input: "+inp)


top = tk.Tk()
top.title("Tool Demo")
languages = [
    "Python",
    "Java",
    "JavaScript"
]
# datatype of menu text
clicked = tk.StringVar()
  
# initial menu text
clicked.set( "Java" )
  
# Create Dropdown menu
languageDropDown = tk.OptionMenu( top , clicked , *languages,command=get_language)
languageDropDown.pack()


inputtxt = tk.Text(top)
inputtxt.pack()

printButton = tk.Button(top,text = "Get Components", command = printInput)
printButton.pack()

lbl = tk.Label(top, text = "")
lbl.pack()

top.mainloop()