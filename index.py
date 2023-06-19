from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/courses')
def courses():
    return render_template("courses.html")

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/cart')
def cart():
    return render_template("cart.html")

@app.route('/mycourses')
def mycourses():
    return render_template("mycourses.html")

@app.route('/profile')
def profile():
    return render_template("profile.html")

if __name__ == '__main__':
    app.run(debug=True)