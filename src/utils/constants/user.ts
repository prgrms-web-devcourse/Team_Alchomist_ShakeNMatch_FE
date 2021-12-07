const MIN_NICKNAME_LENGTH = 2;
const MAX_NICKNAME_LENGTH = 12;
const MIN_AGE = 20;

const USER_FORM_LABEL_TEXT = {
  Register: {
    nickname: '어떤 호칭으로 불러드리면 될까요?',
    gender: '실례가 되지 않는다면 손님의 성별이...?',
    age: '혹시 나이가...?',
    mbti: '처음 보는 사이엔 MBTI 이야기가 딱이죠! <br> 혹시 MBTI가 어떻게 되시는지...?'
  },
  EditProfile: {
    nickname: '어떤 새로운 호칭으로 불리기를 원하시나요?',
    gender: '성별이 혹시 바뀌셨을까요?',
    age: '나이가 변경되셨나요?',
    mbti: '그간 MBTI의 변화가 있었다면,<br> 새로운 MBTI를 알려주세요!'
  }
} as const;

const USER_VALIDATE_ERROR_MESSAGES = {
  nickname: '2이상 12이하의 글자를 입력하세요.',
  gender: '',
  age: '20세 이상만 이용가능합니다.',
  mbti: ''
};

export {
  MIN_NICKNAME_LENGTH,
  MAX_NICKNAME_LENGTH,
  MIN_AGE,
  USER_FORM_LABEL_TEXT,
  USER_VALIDATE_ERROR_MESSAGES
};
