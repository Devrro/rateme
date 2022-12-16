export interface ReviewPlace {
  id: string,
  place: string,
  place_score: number,
  customer_review: string,
  customer_name: string,
  customer_phone_number: string,
  created_at: string,
}

export interface SendReviewPlace {
  place_score: number,
  customer_review: string,
  customer_name: string,
  customer_phone_number: string,
}
