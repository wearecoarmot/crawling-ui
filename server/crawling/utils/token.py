import base64

from rest_framework_jwt.settings import api_settings
from Crypto.Cipher import AES
from server.settings import SECRET_KEY


class TokenUtils:
    jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
    jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
    jwt_decode_handler = api_settings.JWT_DECODE_HANDLER

    BLOCK_SIZE = 32
    CIPHER = AES.new(SECRET_KEY)
    PADDING = '&'

    @staticmethod
    def issue_token(user):
        payload = TokenUtils.jwt_payload_handler(user)
        return TokenUtils.encryption_token(TokenUtils.jwt_encode_handler(payload)) \
            .decode('utf-8')

    @staticmethod
    def decode_token(token):
        return TokenUtils.jwt_decode_handler(TokenUtils.decryption_token(token))

    @staticmethod
    def _pad(token):
        return token + (TokenUtils.BLOCK_SIZE - len(token) % TokenUtils.BLOCK_SIZE) * TokenUtils.PADDING

    @staticmethod
    def encryption_token(token):
        return base64.b64encode(TokenUtils.CIPHER.encrypt(TokenUtils._pad(token).encode('utf-8')))

    @staticmethod
    def decryption_token(token):
        return TokenUtils.CIPHER.decrypt(base64.b64decode(token)) \
            .decode('utf-8') \
            .rstrip(TokenUtils.PADDING)
