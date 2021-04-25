import pandas as pd
import numpy as np
import json
import xgboost as xgb

# Import model
model = xgb.Booster({'nthread': 4})
model.load_model('risk_classification.model')



# functions
def prepare_input(time_cos, time_sin, lat, lon):
  prediction_input = pd.DataFrame.from_records([{'time_cos': np.float32(time_cos), 'time_sin': np.float32(time_sin), 'lat': np.float32(lat), 'lon': np.float32(lon)}])
  return xgb.DMatrix(prediction_input) 

def predict_risk(time_cos, time_sin, lat, lon):
    pred_input = prepare_input(time_cos, time_sin, lat, lon)
    ypred = model.predict(pred_input)
    return int(ypred[0])