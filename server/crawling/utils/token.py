from rest_framework_jwt.settings import api_settings


class TokenUtils:
    jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
    jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER
    jwt_decode_handler = api_settings.JWT_DECODE_HANDLER

    @staticmethod
    def issue_token(user):
        payload = TokenUtils.jwt_payload_handler(user)
        return TokenUtils.jwt_encode_handler(payload)

    @staticmethod
    def decode_token(token):
        return TokenUtils.jwt_decode_handler(token)
