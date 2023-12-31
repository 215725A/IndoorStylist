from IndoorStylistApp import app
from flask import render_template

@app.route('/')
def index():
    return render_template('IndoorStylistApp/IndoorStylist.html')

@app.route('/templates', methods=['GET'])
def home():
    return render_template('IndoorStylistApp/IndoorStylist.html')

@app.route('/nextpage', methods=['GET'])
def stylePage():
    return render_template('IndoorStylistApp/StyleCheck.html')

@app.route('/thirdpage', methods=['GET'])
def choicePage():
    return render_template('IndoorStylistApp/ModelChoice.html')

@app.route('/Fourpage', methods=['GET'])
def samplePage():
    return render_template('IndoorStylistApp/ThreeModel.html')
@app.route('/Fifthpage', methods=['GET'])
def ClothePage():
    return render_template('IndoorStylistApp/ClothesChoice.html')

@app.route('/test', methods=['GET'])
def testPage():
    return render_template('IndoorStylistApp/test.html')