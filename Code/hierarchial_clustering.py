import pandas as pd
import numpy as np
import matplotlib.pyplot as plt


data = pd.read_csv('Wholesale customers data.csv')
data.head()


from sklearn.preprocessing import normalize
data_scaled = normalize(data)
data_scaled = pd.DataFrame(data_scaled, columns=data.columns)
data_scaled.head()