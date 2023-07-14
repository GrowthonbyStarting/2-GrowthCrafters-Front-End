import SubmitReviewForm from '../types/SubmitReviewForm';

const API_BASE_URL = 'http://49.247.158.236:7777';

class ApiService {
  private readonly apiUrl = `${API_BASE_URL}/data`;

  async submitReviewForm({
    name, phone, email, category, q1, q2, q3, q4, q5, file,
  }: SubmitReviewForm) {
    const params = {
      name, phone, email, category, q1, q2, q3, q4, q5,
    };

    try {
      const response = await fetch(`${this.apiUrl}?${new URLSearchParams(params)}`, {
        method: 'POST',
        body: file,
      });

      if (response.ok) {
        const data = await response.json();
        return data.message;
      }
      console.error('Request failed:', response.status);
    } catch (error) {
      console.error('Request error:', error);
    }
  }
}

const apiService = new ApiService();

export default apiService;
