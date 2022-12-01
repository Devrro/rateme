import os
from uuid import uuid1


def save_qr_to(instance, file: str):
    # ext = file.split('.')[-1]
    return os.path.join(instance.public_place.owner.email, 'qr', f"{file}")
