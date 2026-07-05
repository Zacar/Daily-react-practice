import { useState } from "react";
import "./App.css";
import questions from "./constants/questions.json";
import Question from "./components/question";
import Result from "./components/result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  return (
    <>
      <div className="App">
        <h1>World Quiz</h1>
        {currentQuestion < questions.length && (
          <Question
            question={questions[currentQuestion]}
            onAnswerClick={handleNextQuestion}
          ></Question>
        )}

        {currentQuestion === questions.length && (
          <Result
            userAnswers={userAnswers}
            questions={questions}
            resetQuiz={resetQuiz}
          ></Result>
        )}
      </div>
    </>
  );
}

export default App;
