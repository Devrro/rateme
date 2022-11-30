import os.path
from uuid import uuid1


def upload_to(instance, file: str):
    ext = file.split('.')[-1]
    return os.path.join(f'{instance.user.email}', 'avatar', f'{uuid1()}.{ext}')