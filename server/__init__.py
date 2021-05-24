from flask import Flask
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_mail import Mail
from server.config import Config

mail = Mail()
bcrypt = Bcrypt()
db = SQLAlchemy()
login_manager = LoginManager()
login_manager.login_message_category = "info"
login_manager.login_view = "auth.login"



def create_app(config_class = Config):
    app = Flask(__name__,static_url_path='')
    cors = CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
    app.config.from_object(Config)

    login_manager.init_app(app)
    mail.init_app(app)
    bcrypt.init_app(app)
    db.init_app(app)

    from server.main.routes import main
    from server.auth.routes import auth
    from server.student.routes import student
    from server.teacher.routes import teacher

    #extra blueprint to be removed before production 
    from server.extra.routes import extra
    app.register_blueprint(extra)


    app.register_blueprint(student)
    app.register_blueprint(teacher)
    app.register_blueprint(main)
    app.register_blueprint(auth)

    return app

