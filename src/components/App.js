import React, { useState } from "react";
import QuizQuestion from "./QuizQuestion";
import quizData from "../data/quiz";

function QuizApp() {
  // State for managing questions, current question ID, and score
  const [questions, setQuestions] = useState(quizData);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [score, setScore] = useState(0);

  // Find the current question
  const currentQuestion = questions.find((q) => q.id === currentQuestionId);

  // Handler for when a question is answered
  function handleQuestionAnswered(correct) {
    // Move to the next question or end the game
    if (currentQuestionId < questions.length) {
      setCurrentQuestionId((prevId) => prevId + 1);
    } else {
      setCurrentQuestionId(null);
    }

    // Update score if the answer is correct
    if (correct) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  return (
    <main>
      <section>
        {currentQuestion ? (
          <QuizQuestion
            questionData={currentQuestion}
            onQuestionAnswered={handleQuestionAnswered}
          />
        ) : (
          <>
            <h1>Game Over</h1>
            <h2>Total Correct: {score}</h2>
          </>
        )}
      </section>
    </main>
  );
}

export default QuizApp;
