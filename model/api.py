import flask
from flask import request, jsonify
import numpy
import json

from model import predict_risk

app = flask.Flask(__name__)
app.config['DEBUG'] = True

def convert_time(time_str):
    '''
    time_str in format: hh:mm
    '''
    split = time_str.split(':')
    hour = int(split[0])
    minute = int(split[1])
    time = hour + (minute / 60)
    time_cos = np.cos(2 * np.pi * time/23.99)
    time_sin = np.sin(2 * np.pi * time/23.99)
    return time_cos, time_sin

@app.route('/predict/', methods=['POST'])
def predict():
    time_str = request.form['time']
    time_cos, time_sin = convert_time(time_str)
    lat = request.form['lat']
    lon = request.form['lon']

    pred = predict_risk(time_cos, time_sin, lat, lon)
    return {
        'prediction': pred
    }

app.run(port=8000)