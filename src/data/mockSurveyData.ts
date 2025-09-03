import { type SurveyQuestion } from '../shared/services/surveyApi'

export const MOCK_SURVEY_QUESTIONS: SurveyQuestion[] = [
  {
    surveyId: 1,
    title: "주말 아침에 눈 떴을 때, 제일 먼저 하는 생각은?",
    options: [
      {
        type: "A",
        title: "오늘은 커피 내리고 집에서 느긋하게 보내야지"
      },
      {
        type: "B", 
        title: "오늘 뭐하지? 나가서 재밌는 거 해야겠다"
      }
    ]
  },
  {
    surveyId: 2,
    title: "친구가 갑자기 만나자고 하면?",
    options: [
      {
        type: "A",
        title: "좋지! 나갈 준비 바로 한다"
      },
      {
        type: "B",
        title: "에이… 귀찮은데, 집에서 보고 싶은 거 보자"
      }
    ]
  },
  {
    surveyId: 3,
    title: "길 가다 신상 매장이 오픈했대요.",
    options: [
      {
        type: "A",
        title: "와, 구경이라도 해야지. 뭐 살 거 있나?"
      },
      {
        type: "B",
        title: "나랑 상관없어. 그냥 지나간다"
      }
    ]
  },
  {
    surveyId: 4,
    title: "택배가 집 앞에 쌓여 있는 날, 내 모습은?",
    options: [
      {
        type: "A",
        title: "드디어 왔다! 뜯으면서 기분 최고"
      },
      {
        type: "B",
        title: "왜 이렇게 많이 시켰지… 줄여야겠네"
      }
    ]
  },
  {
    surveyId: 5,
    title: "기분이 꿀꿀할 때 나는?",
    options: [
      {
        type: "A",
        title: "맛있는 거 시켜 먹으면서 풀어야지"
      },
      {
        type: "B",
        title: "산책하거나 음악 들으면서 기분 전환해요"
      }
    ]
  },
  {
    surveyId: 6,
    title: "새로운 서비스 무료체험 알림이 왔을 때?",
    options: [
      {
        type: "A",
        title: "바로 눌러보고, 괜찮으면 그냥 이어서 쓴다"
      },
      {
        type: "B",
        title: "흠… 진짜 필요할까? 그냥 넘긴다"
      }
    ]
  },
  {
    surveyId: 7,
    title: "친구들이 여행 가자고 할 때, 나는?",
    options: [
      {
        type: "A",
        title: "무조건 가야지! 지금 아니면 언제 가겠어"
      },
      {
        type: "B",
        title: "일단 예산부터 보고 결정해야지"
      }
    ]
  },
  {
    surveyId: 8,
    title: "내가 더 끌리는 건?",
    options: [
      {
        type: "A",
        title: "편하게 빨리 해결되는 선택"
      },
      {
        type: "B",
        title: "조금 불편해도 알뜰한 선택"
      }
    ]
  },
  {
    surveyId: 9,
    title: "길에서 우연히 할인 팝업스토어를 만났다!",
    options: [
      {
        type: "A",
        title: "들어가서 뭐라도 집어 와야지"
      },
      {
        type: "B",
        title: "구경만 하고 금방 나온다"
      }
    ]
  },
  {
    surveyId: 10,
    title: "내가 '나중에 후회 안 할 선택'을 고른다면?",
    options: [
      {
        type: "A",
        title: "좋은 경험, 멋진 추억 만드는 거"
      },
      {
        type: "B",
        title: "통장에 돈 차곡차곡 쌓이는 거"
      }
    ]
  }
];

export default MOCK_SURVEY_QUESTIONS;