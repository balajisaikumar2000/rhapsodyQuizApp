import React, { useState, useEffect } from "react";
import fire from "./fire";
import "./Hero.scss";
const db = fire.firestore();

const Hero = ({ handleLogout, user }) => {
  const writeData = () => {
    return db.collection("users").doc(user.uid).set({
      score: score,
    });
  };

  const [infoActive, setinfoActive] = useState(false);
  const [activeQuiz, setactiveQuiz] = useState(false);
  const [clicked, setisClicked] = useState(false);

  //Timer components
  const [seconds, setSeconds] = useState(15);
  const [isActive, setIsActive] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(15);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 1) {
          toggle();
        }
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds,toggle]);

  const startQuiz = () => {
    setinfoActive(true);
  };
  const exitQuiz = () => {
    setinfoActive(false);
  };
  const openQuiz = () => {
    setactiveQuiz(true);
    setinfoActive(false);
  };

  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false, clicked: false },
        { id: 1, text: "Boston", isCorrect: false, clicked: false },
        { id: 2, text: "Santa Fe", isCorrect: false, clicked: false },
        { id: 3, text: "Washington DC", isCorrect: true, clicked: false },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true, clicked: false },
        { id: 1, text: "1776", isCorrect: false, clicked: false },
        { id: 2, text: "1774", isCorrect: false, clicked: false },
        { id: 3, text: "1826", isCorrect: false, clicked: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true, clicked: false },
        { id: 1, text: "Paul Revere", isCorrect: false, clicked: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false, clicked: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false, clicked: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false, clicked: false },
        { id: 1, text: "Alaska", isCorrect: true, clicked: false },
        { id: 2, text: "Texas", isCorrect: false, clicked: false },
        { id: 3, text: "Montana", isCorrect: false, clicked: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false, clicked: false },
        { id: 1, text: "Russia", isCorrect: false, clicked: false },
        { id: 2, text: "Cuba", isCorrect: false, clicked: false },
        { id: 3, text: "Mexico", isCorrect: true, clicked: false },
      ],
    },
    {
      text: "following?",
      options: [
        { id: 0, text: "Canada", isCorrect: false, clicked: false },
        { id: 1, text: "Russia", isCorrect: false, clicked: false },
        { id: 2, text: "Cuba", isCorrect: false, clicked: false },
        { id: 3, text: "Mffffff", isCorrect: true, clicked: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (option) => {
    //change the listItem class
    console.log(option);
    setisClicked(true);
    option.clicked = true;
    console.log(option);
    // Increment the score
    if (option.isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 <= questions.length) {
      console.log("you did it");
    } else {
      //save results to server;
      console.log("hey");
    }
  };
  const nextQue = () => {
    setisClicked(false);
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      writeData();
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  // const restartGame = () => {
  //   setScore(0);
  //   setCurrentQuestion(0);
  //   setShowResults(false);
  // };

  return (
    <section className="hero">
      {/* <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav> */}
      <div className="main">
        <div className="start_btn">
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
        <div className={`info_box ${infoActive ? "activeInfo" : ""}`}>
          <div className="info-title">
            <span>Some Rules of this Quiz</span>
          </div>
          <div className="info-list">
            <div className="info">
              1. You will have only <span>15 seconds</span> per each question.
            </div>
            <div className="info">
              2. Once you select your answer, it can't be undone.
            </div>
            <div className="info">
              3. You can't select any option once time goes off.
            </div>
            <div className="info">
              4. You can't exit from the Quiz while you're playing.
            </div>
            <div className="info">
              5. You'll get points on the basis of your correct answers.
            </div>
          </div>
          <div className="buttons">
            <button
              className="quit"
              // className={`quit info_box ${infoActive ? "activeInfo" : ""}`}
              onClick={exitQuiz}
            >
              Exit Quiz
            </button>
            <button
              className="restart"
              onClick={() => {
                openQuiz();
                exitQuiz();
                toggle();
              }}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className={`quiz_box ${activeQuiz ? "activeQuiz" : ""}`}>
        {/* 1. Header  */}
        <h1>Rhapsody Quiz</h1>
        {showResults ? (
          /* 4. Final Results */
          <>
            <button className="homeLog" onClick={handleLogout}>
              Logout
            </button>
            <div className="final-results">
              <div className="icon">
                <i className="fas fa-crown"></i>
              </div>
              <div className="content">
                <h1>Congrats on completing the quiz</h1>
                <h2>your score will be intimated later</h2>
                <h2>Thank you😊</h2>
              </div>
              {/* <button onClick={() => restartGame()}>Restart game</button> */}
            </div>
          </>
        ) : (
          /* 5. Question Card  */
          <div className="question-card">
            {/* Current Question  */}
            {/* <h2>
              Question: {currentQuestion + 1} out of {questions.length}
            </h2> */}
            <h3 className="question-text">
              <span>{currentQuestion + 1}. </span>
              {questions[currentQuestion].text}
            </h3>

            {/* List of possible answers  */}
            <ul>
              {questions[currentQuestion].options.map((option, i) => {
                return (
                  <li
                    className={`listItem ${
                      clicked || !isActive ? "disabled" : ""
                    }`}
                    style={{
                      backgroundColor: `${
                        clicked || !isActive ? "#f8d7da" : ""
                      }`,
                    }}
                    key={option.id}
                    onClick={() => {
                      toggle();
                      optionClicked(option);
                    }}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
            <div className="foot">
              <div className="timer">
                <div className="timeTxt">Time Left</div>
                <div className="time_sec">{seconds}</div>
              </div>
              <span>
                {!isActive ? (
                  <button
                    className="next_btn"
                    onClick={() => {
                      reset();
                      toggle();
                      nextQue();
                    }}
                  >
                    Next Que
                  </button>
                ) : (
                  ""
                )}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
