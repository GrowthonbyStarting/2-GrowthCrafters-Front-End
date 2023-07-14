export interface SubmitReviewForm {
  name: string,
  phone: string,
  email: string,
  category: string,
  q1: string,
  q2: string,
  q3: string,
  q4: string,
  q5: string,
  file: FormData,
}

export type Category = 'electron' | 'machinery' | 'chemistry' | 'bio' | 'etc';
