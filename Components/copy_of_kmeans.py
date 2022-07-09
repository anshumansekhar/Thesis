# -*- coding: utf-8 -*-
"""Copy of KMeans.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1VgxslBsRZEnBDl9FOuMRVf8GZaPu9edU
"""

import pandas as pd
data = pd.read_csv('Components.csv')
data.head()

functionalites=data.loc[:,"Functionality"]
componentNames=data.loc[:,"Component Name"]
componentFileNames=data.loc[:,"File Name"]

from sklearn.feature_extraction.text import TfidfVectorizer
vectorizer = TfidfVectorizer(stop_words={'english'})
X = vectorizer.fit_transform(functionalites)

print(vectorizer.get_feature_names())
print(X.shape)

import matplotlib.pyplot as plt
from sklearn.cluster import KMeans

Sum_of_squared_distances = []
K = range(2,10)
for k in K:
    km = KMeans(n_clusters=k, max_iter=200, n_init=10)
    km = km.fit(X)
    Sum_of_squared_distances.append(km.inertia_)

plt.plot(K, Sum_of_squared_distances, 'bx-')
plt.xlabel('k')
plt.ylabel('Sum_of_squared_distances')
plt.title('Elbow Method For Optimal k')
plt.show()

true_k = 7
model=KMeans(n_clusters=true_k).fit(X)
labels=model.labels_
functionality_cluster=pd.DataFrame(list(zip(componentNames,labels,componentFileNames)),columns=['Component Name','cluster','File Name'])
print(functionality_cluster.sort_values(by=['cluster']))

component_by_cluster={}
for k in range(0,true_k):
    titles=functionality_cluster[functionality_cluster.cluster==k]['Component Name']
    filenames=functionality_cluster[functionality_cluster.cluster==k]['File Name']
    component_by_cluster[k]=filenames

language='python'

requirement1="User enters DOB using date picker with format YYYY-MM-DD"
requirement2="age is calculated from DOB with date format in YYYY-MM-DD"
requirement3="Calculated age is displayed"
req_list=[requirement1,requirement2,requirement3]

req = vectorizer.transform(req_list)
result=model.predict(req)
print(len(result))

req_list_answer=[""]*len(req_list)
print(len(req_list_answer))

import nltk
from nltk.corpus import stopwords
nltk.download('punkt')
nltk.download('stopwords')
from nltk.tokenize import word_tokenize
component_langauge=data[data['Language'] == language]
i=0
# loop through each cluster number in the result
for clusterNumber in result:
  # get all the components in the given cluster
  components=component_by_cluster[clusterNumber]
  # loop through all the components in the cluster
  most_similar=""
  most_similar_score=0
  for component_fileName in components:
    component_current=component_langauge[component_langauge['File Name']==component_fileName]
    if component_current.empty:
      continue
    functionality=str(component_current['Functionality'].str.lower())


    text_tokens = word_tokenize(functionality)
    tokens_without_sw = [word for word in text_tokens if not word in stopwords.words()]


    input_tokens = word_tokenize(req_list[i])
    input_tokens_without_stopwords = [word for word in input_tokens if not word in stopwords.words()]

    match_count=0
    for token in input_tokens_without_stopwords:
      if token in functionality:
        match_count+=1
    score=match_count/len(tokens_without_sw)

    if score>most_similar_score:
      most_similar_score=score
      most_similar=component_fileName
  req_list_answer[i]=most_similar
  i+=1

import subprocess

if language=='python':
  for filename in req_list_answer:
    # get the component details using file name
    component=data.loc[data['File Name']==filename]
    # get the inputs of file
    component_type=component.iloc[0]['Type']
    print(component_type)
    if component_type=='Flask':
      subprocess.run("FLASK_APP="+filename+" flask run")