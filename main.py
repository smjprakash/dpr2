from flask import Flask,render_template,request,url_for,redirect,flash,session,jsonify
from flask_mysqldb import MySQL

app=Flask(__name__)
app.secret_key = 'dpr'

# MYSQL Connection
app.config["MYSQL_HOST"]="localhost"
app.config["MYSQL_USER"]="root"
app.config["MYSQL_PASSWORD"]="Admin#321"
app.config["MYSQL_DB"]="deepracer"
app.config["MYSQL_CURSORCLASS"]="DictCursor"
conn = MySQL(app)

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/register',methods=['POST','GET'])
def register():
    if request.method == 'POST':
        tname = request.form['tname'].upper()
        
        cname = request.form['cname']
        pswd = request.form['pswd']
        cemail = request.form['cemail']
        cpno = request.form['cpno']
        orgname = request.form['orgname']
        members = request.form['members']
        con=conn.connection.cursor()
        sql="insert into teams (team_name,password,captain_name,captain_mailid,cmbno,org_name,no_of_members) values(%s,%s,%s,%s,%s,%s,%s)"
        con.execute(sql,(tname,pswd,cat,cname,cemail,cpno,orgname,members))
        con.connection.commit()
        
        flash('Registered successfuly ! Signin to add members')
        return redirect (url_for('teamdetails', tname=tname,pswd=pswd))
    return render_template('register.html')

@app.route('/teamdetails/',methods=['POST','GET'])
def teamdetails():
    if request.method == 'GET':
        tname=request.args.get('tname')
        pswd=request.args.get('pswd')
        con=conn.connection.cursor()
        con.execute('select prefix,teamid ,team_name,category,captain_name,captain_mailid,cmbno,org_name,No_of_members from teams where team_name=%s and password=%s',(tname,pswd))
        data=con.fetchone()
        return render_template('result.html',rows=data)

    
@app.route('/dr2022/', methods=['POST','GET'])
def dr2022():
    return render_template('dr2022.html')
if __name__ == '__main__':
    app.run(debug=True)
