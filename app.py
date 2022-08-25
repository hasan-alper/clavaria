from flask import Flask, render_template, request, jsonify
from joblib import load
import pandas as pd

app = Flask(__name__)

@app.route("/")
def predict():
    return render_template("app.html")

  

@app.route("/background_process")
def background_process():
        model = load("model/model.joblib")
        prediction = "Edible" if model.predict(pd.DataFrame([request.args])) == "e" else "Poisonous"
        return jsonify({"prediction":prediction})

if __name__ == "__main__":
    app.run(debug=True)
