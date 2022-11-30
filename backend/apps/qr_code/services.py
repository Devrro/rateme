import os
from uuid import uuid1


def save_qr_to(instance, file: str):
    # ext = file.split('.')[-1]
    return os.path.join(f'{instance.public_place.owner.id}', 'qr', f"{file}")
