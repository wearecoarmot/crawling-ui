from django.contrib.auth.hashers import make_password, check_password


class HashersPassword:
    @staticmethod
    def get_hash_password(password):
        return make_password(password)

    @staticmethod
    def is_matched_password(raw_password, password):
        return check_password(raw_password, password)
