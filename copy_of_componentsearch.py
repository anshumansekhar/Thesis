# -*- coding: utf-8 -*-
"""Copy of componentSearch.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1oLmuNGJ9l2Z8ZEiBVE_C8BFe69yGULte
"""

import pandas as pd
import numpy as np

selected_Components=[]

data = pd.read_csv('componentsMam.csv')

data.head()

def componentInsert():
  name=input('Enter component name:')
  language=input('Enter language:')
  functionality=input('Enter functionality:')

  if name.lower() in data['Component Name'].unique():
    if language.lower() in data['Language'].unique():
      if functionality.lower() in data['Functionality'].unique():
        return False
  else:
    data.loc[len(data.index)] = [len(data.index)+1,name,language,functionality]
    print("Added Component")
    return True 

componentInsert()
data

import nltk
nltk.download('stopwords')
nltk.download('punkt')
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize

stop_words = set(stopwords.words('english'))

language=""
languages=["java","HTML","javascript"]

print("enter requirements end to exit")
user_req=input("Enter the user requirement:")
user_requirements=[]
while user_req!= 'end':
  user_requirements.append(user_req)
  user_req=input("Enter the user requirement:")

for user_req in user_requirements:

  word_tokens = word_tokenize(user_req)
  user_req_compressed = [w.lower() for w in word_tokens if not w.lower() in stop_words]
  for word in user_req_compressed:
    if word in languages:
      language=word
      user_req_compressed.remove(word)
      break
  
  user_req_str=""
  for word in user_req_compressed:
    user_req_str=user_req_str+word+" "
    
  found=False
  for index, row in data.iterrows():
    keywords=[w for w in word_tokenize(row['Functionality']) if not w.lower() in stop_words]
    if language==row['Language'].lower():
      count=0
      for keyword in keywords:
        if keyword.lower() in user_req_compressed:
          count=count+1
      if count==len(keywords):
        print('Complete match')
        selected_Components.append(row['Component Index'])
        found=True
      elif count/len(keywords)>0.5:
        print('Call to modify component with Functionality:'+row['Functionality'])
        selected_Components.append(row['Component Index'])
        found=True
  if found==False:
    print("Need to create a new component for the requirement of :"+user_req_str)

selected_Components