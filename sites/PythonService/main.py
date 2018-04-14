from flask import Flask
import json

app = Flask(__name__)


@app.route('/carros')
def getCarros():
    car_dic = {
        'carros': [
            {'marca': 'Ford', 'modelo': 'Focus', 'nombre': 'Focus', 'year': 2012, 'color': 'blue'},
            {'marca': 'Toyota', 'modelo': 'Camry', 'nombre': 'Camry', 'year': 2012, 'color': 'white'},
            {'marca': 'Nissan', 'modelo': 'kicks', 'nombre': 'kicks', 'year': 2017, 'color': 'black'}
        ]
    }

    return json.dumps(car_dic)


if __name__ == '__main__':
    app.run(debug=True)