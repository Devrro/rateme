
def format_telegram_message(place_name: str, validated_data: dict) -> str:
    msg = f'You received new review on your place {place_name}!\n'
    review = validated_data.get('customer_review', '')
    score = validated_data.get('place_score', '')
    msg += f'Score: {score}\n'
    if review:
        msg += f'Review: {review}\n'
    return msg
