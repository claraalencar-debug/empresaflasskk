from flask import Flask
app=Flask(__name__)

from login import registrar_rotas_login

registrar_rotas_login(app)

print(app.url_map)

if __name__=="__main__":
    app.run(debug=True)