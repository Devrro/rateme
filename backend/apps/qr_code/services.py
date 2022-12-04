import os.path
from io import BytesIO
import qrcode as q


def save_qr_to(instance, file: str):
    return os.path.join(f'{instance.public_place.owner.id}', 'qr', f"{file}")


def create_qr_url(url: str, version=1, box_size=10, border=5, fit=True, fill_color='black', back_color='white',
                  formatting='PNG'):
    qrcode = q.QRCode(
        version=version,
        error_correction=q.constants.ERROR_CORRECT_L,
        box_size=box_size,
        border=border,
    )
    qrcode.add_data(url)
    qrcode.make(fit=fit)
    img = qrcode.make_image(fill_color=fill_color, back_color=back_color)
    buffer = BytesIO()
    img.save(stream=buffer, format=formatting)
    return buffer
