# import necessary libraries
from models import create_classes
import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

# Flask Setup
app = Flask(__name__)


# baby_names= base.classes.baby_names

from flask_sqlalchemy import SQLAlchemy
# app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql+psycopg2://postgres:Koudede$89@localhost:5432/babynames_db"
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db.sqlite"

# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# reflect the existing base into a new model 
base=automap_base()
#reflect the table 
base.prepare(engine, reflect=True)
#save reference to the table 
baby_names= create_classes(db)


# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/map")
def data():

return render_template("map.html")

@app.route("/api/graph ")
def data():
    results = db.session.query(names.Name, names.Number).all()

    hover_text = [result[0] for result in results]
    Number = [result[1] for result in results]
    year = [result[2] for result in results]
    names_data = [{
        "type": "scattergeo",
        "locationmode": "USA-states",
        "Number": Number,
        "year": year,
        "text": hover_text,
        "hoverinfo": "text",
        "marker": {
            "size": 50,
            "line": {
                "color": "rgb(8,8,8)",
                "width": 1
            },
        }
    }]

    return jsonify(Names_data)
if __name__ == "__main__":
    app.debug =True
    app.run()

