from flask import Flask, render_template, jsonify
import yfinance as yf
import os

# Explicitly define template and static folder paths if needed
app = Flask(__name__, template_folder='../frontend/templates', static_folder='../frontend/static')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/get_stock_data')
def get_stock_data():
    stock = yf.Ticker('^NSEI')
    data = stock.history(period="1mo")
    dates = data.index.strftime('%Y-%m-%d').tolist()
    prices = data['Close'].tolist()
    return jsonify({'dates': dates, 'prices': prices})

if __name__ == '__main__':
    app.run(debug=True)
