import apiService from '../service/ApiService';

import CATEGORY from '../constants/category';

import { Category } from '../types/SubmitReviewForm';

export default function useFetchForm(file?: File) {
  const userInfo = JSON.parse(window.sessionStorage.getItem('user-info') || '');
  const reviewInput = JSON.parse(window.sessionStorage.getItem('review-input') || '');
  const categoryName: Category = JSON.parse(window.sessionStorage.getItem('category') || '').split('.').shift();

  const userInfoValues: string[] = Object.values(userInfo);
  const category = CATEGORY[categoryName];
  const reviewInputValues: string[] = Object.values(reviewInput);
  const [name, email, phone] = userInfoValues;
  const [q1, q2, q3 = '-', q4 = '-', q5 = '-'] = reviewInputValues;

  apiService.submitReviewForm({
    name, email, phone, category, q1, q2, q3, q4, q5, file,
  });
}
