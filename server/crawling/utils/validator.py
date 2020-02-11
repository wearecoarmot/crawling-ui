from server.crawling.exceptions.httpexception import BadRequestException


class Validator:
    @staticmethod
    def param_validator(params, keys: list):
        for key in keys:
            if not params.get(key):
                raise BadRequestException(f'Missing {key} parameter.')
