from django.core.exceptions import ObjectDoesNotExist


def get_or_empty(queryset, **kwargs):
    try:
        return queryset.get(**kwargs)
    except ObjectDoesNotExist:
        return {}
