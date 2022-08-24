from flask import Flask, render_template, request
from joblib import load
import pandas as pd

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def predict():
    if request.method == "GET":
        return render_template("app.html")
    else:
        model = load("model/model.joblib")
        prediction = "Edible" if model.predict(pd.DataFrame(request.form.to_dict(flat=False))) == "e" else "Poisonous"
        return render_template("app.html", prediction=prediction)


if __name__ == "__main__":
    app.run(debug=True)
