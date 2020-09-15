# import necessary libraries
import pandas as pd
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, join, outerjoin, MetaData, Table

app = Flask(__name__)

  
app.config['SQLALCHEMY_DATABASE_URL']= os.environ.get('postgresql://postgres:Koudede$89@localhost:5432/babynames_db')


# Remove tracking modifications
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False




# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to each table
Measurement = Base.classes.measurement
Station = Base.classes.station

# Create our session (link) from Python to the DB
session = Session(engine)



# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/v1.0/data")
def table_data():

if __name__ == "__main__":
    app.debug =True
    app.run()
