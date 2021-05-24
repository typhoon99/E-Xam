from flask import url_for
from server import mail
from flask_mail import Mail,Message


def send_verification_email(user):
    token = user.get_reset_token()
    message = Message("Verify E-Xam Account",
        sender = "E-Xam<son.goku.db7@gmail.com>",
        recipients=[user.email])
    message.body = f''' To verify you E-Xam account please click on the link given below:
{url_for('auth.verify', token = token, _external=True )}

If you did not make this requet please ignore.
'''
    mail.send(message)

def send_reset_email(user):
    token = user.get_reset_token()
    message = Message("Reset Password",
        sender = "E-Xam<son.goku.db7@gmail.com>",
        recipients=[user.email])
    message.body = f''' To reset your password visit the link:
{url_for('auth.reset_password', token = token, _external=True )}

If you did not make this requet please ignore.
'''
    mail.send(message)