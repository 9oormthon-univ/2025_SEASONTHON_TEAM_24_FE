import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api'
});


export interface SurveyOption {
  type: string;
  title: string;
}

export interface SurveyQuestion {
  surveyId: number;
  title: string;
  options: SurveyOption[];
}

export interface SurveyAnswer {
  surveyId: number;
  optionType: string;
}


export const surveyApi = {
  // 질문 가져오기
  async getQuestions() {
    const response = await api.get('/surveys/full');
    return response.data.data.questions;
  },

  // 답변 보내기
  async submitAnswers(answers: SurveyAnswer[]) {
    const response = await api.post('/surveys/responses', {
      type: 'FULL',
      answers
    });
    return response.data.data.completed;
  }
};

export default surveyApi;