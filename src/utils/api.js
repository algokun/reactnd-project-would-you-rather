// 👨‍👨‍👦 Users for our app
let users = {
  richard: {
    id: "richard",
    name: "richard",
    avatar:
      "https://user-images.githubusercontent.com/21126965/87455825-aa355b80-c623-11ea-92e0-5731d196346b.png",
    questions: ["5723327022", "9275515387"],
    answers: {
      "5723327022": "optionOne",
      "9275515387": "optionTwo",
      "8339555588": "optionOne",
    },
  },
  elrich: {
    id: "elrich",
    name: "elrich",
    avatar:
      "https://user-images.githubusercontent.com/21126965/87455816-a9042e80-c623-11ea-9ba4-89c856f1c83d.png",
    questions: ["8339555588", "9125348948"],
    answers: {
      "8339555588": "optionOne",
      "9125348948": "optionTwo",
      "6902673540": "optionOne",
    },
  },
  gilfoyle: {
    id: "gilfoyle",
    name: "gilfoyle",
    avatar:
      "https://user-images.githubusercontent.com/21126965/87455822-a99cc500-c623-11ea-91bf-2372edd2a487.png",
    questions: ["6902673540", "9480750558"],
    answers: {
      "6902673540": "optionOne",
      "9480750558": "optionTwo",
      "2616840710": "optionOne",
    },
  },
  dinesh: {
    id: "dinesh",
    name: "dinesh",
    avatar:
      "https://user-images.githubusercontent.com/21126965/87455814-a6a1d480-c623-11ea-8a11-a7296c178760.png",
    questions: ["2616840710", "0557251138"],
    answers: {
      "2616840710": "optionOne",
      "0557251138": "optionTwo",
    },
  },
};

// ❓ Initial Questions

let questions = {
  "5723327022": {
    id: "5723327022",
    author: "richard",
    timestamp: 1594748196288,
    optionOne: {
      votes: ["richard"],
      text: "Learn Flutter",
    },
    optionTwo: {
      votes: ["richard"],
      text: "Learn React",
    },
  },
  "9275515387": {
    id: "9275515387",
    author: "richard",
    timestamp: 1594748296288,
    optionOne: {
      votes: [],
      text: "Create android app",
    },
    optionTwo: {
      votes: ["richard"],
      text: "Create iOS app",
    },
  },
  "8339555588": {
    id: "8339555588",
    author: "elrich",
    timestamp: 1594738196288,
    optionOne: {
      votes: ["elrich", "richard"],
      text: "watch dark twice",
    },
    optionTwo: {
      votes: [],
      text: "watch breaking bad",
    },
  },
  "9125348948": {
    id: "9125348948",
    author: "elrich",
    timestamp: 1594748196288,
    optionOne: {
      votes: [],
      text: "Have an ability to time travel",
    },
    optionTwo: {
      votes: ["elrich"],
      text: "Have an ability to teleport.",
    },
  },
  "6902673540": {
    id: "6902673540",
    author: "gilfoyle",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["elrich", "gilfoyle"],
      text: "do a job",
    },
    optionTwo: {
      votes: [],
      text: "start a business",
    },
  },
  "9480750558": {
    id: "9480750558",
    author: "gilfoyle",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "have skills like Professor in Money Heist",
    },
    optionTwo: {
      votes: ["gilfoyle"],
      text: "have skills like Sherlock Holmes",
    },
  },
  "2616840710": {
    id: "2616840710",
    author: "dinesh",
    timestamp: 1488579767190,
    optionOne: {
      votes: ["dinesh", "gilfoyle"],
      text: "watch Avengers Endgame thrice",
    },
    optionTwo: {
      votes: [],
      text: "watch Justice league once",
    },
  },
  "0557251138": {
    id: "0557251138",
    author: "dinesh",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "take courses on Udacity",
    },
    optionTwo: {
      votes: ["optionTwo"],
      text: "take courses on Coursera",
    },
  },
};

function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...users }), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
