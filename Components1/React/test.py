componentNames=[
    "Register",
    "LoginScreen",
    "YoutubeVideoPlay",
    "Logout"
]
preCondition=[
    "NULL",
    "userRegistered:boolean",
    "loggedIn:boolean",
    "loggedIn:boolean"
]
postCondition=[
    "userRegistered:boolean",
    "loggedIn:boolean",
    "NULL",
    "loggedIn:boolean"
]

mainFile = open("App.js", "a")
for componentName in componentNames:
    mainFile.write("""import """+componentName+""" from './Components/"""+componentName+"""';\n""")
mainFile.write("""function App(){""")
unique_variables=list(set(preCondition).union(set(postCondition)))
for variable in unique_variables:
    if variable=="NULL":
        continue
    [variableName,type]=variable.split(":")
    if type=="boolean":
        type="false"
    elif type=="int":
        type="0"
    elif type=="string":
        type=""
    mainFile.write("""const ["""+variableName+""", set"""+variableName+"""] = useState("""+type+""");\n""")
mainFile.write("""return(<div>\n""")
for i in range(len(componentNames)):
    [pre,type]=preCondition[i].split(":")
    [post,type]=postCondition[i].split(":")
    mainFile.write("""\n{"""+pre+""" &&<"""+componentNames[i]+""" post={set"""+post+"""} pre={"""+pre+"""}/><br></br>}""")
mainFile.write("""</div>)}\nexport default App;""")